(function () {
  // Only run on the main webpage, not inside ads or embedded frames
  if (window.top !== window.self) return;
  if (typeof KNOWLEDGE_BASE === "undefined") return;
  if (!document.body) return;

  const pageText = document.body.innerText || "";
  if (!pageText.trim()) return;

  function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  // Match documented concepts locally without sending any data externally
  const matches = KNOWLEDGE_BASE.filter((entry) =>
    entry.phrases.some((phrase) => {
      const regex = new RegExp("\\b" + escapeRegex(phrase) + "\\b", "i");
      return regex.test(pageText);
    })
  ).slice(0, 3);

  if (matches.length === 0) return;
  if (document.getElementById("open-context-layer-host")) return;

  // Create an isolated Shadow DOM so webpage styles cannot break the card
  const host = document.createElement("div");
  host.id = "open-context-layer-host";
  const shadow = host.attachShadow({ mode: "open" });

  const style = document.createElement("style");
  style.textContent = `
    .ocl-card {
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 340px;
      max-width: calc(100vw - 32px);
      max-height: 75vh;
      overflow-y: auto;
      background: #ffffff;
      color: #1e293b;
      border: 1px solid #cbd5e1;
      border-top: 4px solid #2563eb;
      border-radius: 10px;
      box-shadow: 0 12px 28px rgba(15, 23, 42, 0.16);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      font-size: 13px;
      line-height: 1.5;
      z-index: 2147483647;
      padding: 14px 16px;
      box-sizing: border-box;
    }
    .ocl-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 10px;
    }
    .ocl-heading {
      font-size: 14px;
      font-weight: 700;
      color: #0f172a;
      margin: 0;
    }
    .ocl-privacy {
      font-size: 11px;
      color: #64748b;
      margin: 2px 0 0 0;
    }
    .ocl-close {
      background: #f1f5f9;
      border: none;
      border-radius: 6px;
      color: #475569;
      cursor: pointer;
      font-size: 16px;
      line-height: 1;
      padding: 4px 8px;
    }
    .ocl-close:hover {
      background: #e2e8f0;
      color: #0f172a;
    }
    .ocl-item {
      border-top: 1px solid #e2e8f0;
      padding-top: 10px;
      margin-top: 10px;
    }
    .ocl-badge {
      display: inline-block;
      font-size: 10px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.04em;
      color: #1d4ed8;
      background: #eff6ff;
      padding: 2px 6px;
      border-radius: 4px;
      margin-bottom: 5px;
    }
    .ocl-title {
      font-size: 13px;
      font-weight: 600;
      color: #0f172a;
      margin: 0 0 4px 0;
    }
    .ocl-summary {
      margin: 0 0 6px 0;
      color: #334155;
    }
    .ocl-link {
      color: #2563eb;
      text-decoration: none;
      font-weight: 500;
      font-size: 12px;
    }
    .ocl-link:hover {
      text-decoration: underline;
    }
    .ocl-footer {
      margin-top: 12px;
      padding-top: 8px;
      border-top: 1px solid #e2e8f0;
      font-size: 11px;
      color: #64748b;
    }
  `;

  const card = document.createElement("aside");
  card.className = "ocl-card";
  card.setAttribute("role", "region");
  card.setAttribute("aria-label", "Historical Context Note");

  const header = document.createElement("div");
  header.className = "ocl-header";

  const titleWrap = document.createElement("div");
  const heading = document.createElement("h2");
  heading.className = "ocl-heading";
  heading.textContent = "Historical Context Note";

  const privacy = document.createElement("p");
  privacy.className = "ocl-privacy";
  privacy.textContent = "100% local check • No data leaves your device";

  titleWrap.appendChild(heading);
  titleWrap.appendChild(privacy);

  const closeBtn = document.createElement("button");
  closeBtn.className = "ocl-close";
  closeBtn.textContent = "×";
  closeBtn.setAttribute("aria-label", "Dismiss context note");
  closeBtn.addEventListener("click", () => host.remove());

  header.appendChild(titleWrap);
  header.appendChild(closeBtn);
  card.appendChild(header);

  matches.forEach((item) => {
    const block = document.createElement("div");
    block.className = "ocl-item";

    const badge = document.createElement("span");
    badge.className = "ocl-badge";
    badge.textContent = item.category;

    const title = document.createElement("h3");
    title.className = "ocl-title";
    title.textContent = item.title;

    const summary = document.createElement("p");
    summary.className = "ocl-summary";
    summary.textContent = item.summary;

    const link = document.createElement("a");
    link.className = "ocl-link";
    link.href = item.sourceUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = "Read verified archive: " + item.sourceLabel + " ↗";

    block.appendChild(badge);
    block.appendChild(title);
    block.appendChild(summary);
    block.appendChild(link);
    card.appendChild(block);
  });

  const footer = document.createElement("div");
  footer.className = "ocl-footer";
  footer.textContent =
    "v0.1 Prototype • Appears when documented historical myths or tropes are mentioned on a page (including news or encyclopedias).";
  card.appendChild(footer);

  shadow.appendChild(style);
  shadow.appendChild(card);
  document.body.appendChild(host);
})();