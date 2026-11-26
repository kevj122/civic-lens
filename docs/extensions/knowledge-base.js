// Transparent, open-source historical context database.
// v0.1 demonstrates local matching; future versions can expand with
// context-aware classifiers reviewed by historians and educators.

const KNOWLEDGE_BASE = [
  {
    id: "protocols-elders-of-zion",
    category: "Antisemitism • Conspiracy Myth",
    title: "The Protocols of the Elders of Zion",
    phrases: ["protocols of the elders of zion", "elders of zion"],
    summary:
      "A fabricated text first published in Tsarist Russia in 1903 that falsely claims to reveal a secret Jewish plot for global domination. Exposed as a forgery in 1921, it was later used by Nazi Germany and continues to inspire antisemitic conspiracy theories.",
    sourceLabel: "USHMM Holocaust Encyclopedia",
    sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/protocols-of-the-elders-of-zion"
  },
  {
    id: "blood-libel",
    category: "Antisemitism • Historical Myth",
    title: "Blood Libel",
    phrases: ["blood libel"],
    summary:
      "A false medieval accusation claiming Jewish people murdered non-Jewish children to use their blood in religious rituals. Though repeatedly disproven and condemned, this myth was used for centuries to incite deadly mob attacks (pogroms).",
    sourceLabel: "USHMM Holocaust Encyclopedia",
    sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/blood-libel"
  },
  {
    id: "great-replacement",
    category: "Xenophobia & Racism • Conspiracy Myth",
    title: "The 'Great Replacement' Theory",
    phrases: ["great replacement", "white genocide"],
    summary:
      "A debunked conspiracy theory falsely claiming white populations are being intentionally replaced by non-white or Muslim migrants—frequently paired with antisemitic claims of a secret cabal. This narrative has been cited in multiple real-world hate attacks.",
    sourceLabel: "UN Strategy on Hate Speech",
    sourceUrl: "https://www.un.org/en/hate-speech"
  },
  {
    id: "scientific-racism",
    category: "Anti-Black & Systemic Racism • Pseudoscience",
    title: "Scientific Racism & Eugenics",
    phrases: ["scientific racism", "racial hierarchy", "racial superiority"],
    summary:
      "Discredited 18th–20th century pseudoscience that falsely claimed human races could be ranked biologically in intelligence or worth. It was used to justify slavery, colonialism, apartheid, and Nazi eugenics. Modern genetics confirms there is no biological racial hierarchy.",
    sourceLabel: "UN Fight Racism Initiative",
    sourceUrl: "https://www.un.org/en/fight-racism"
  },
  {
    id: "holocaust-denial",
    category: "Antisemitism • Historical Distortion",
    title: "Holocaust Denial & Distortion",
    phrases: ["holocaust denial", "holocaust hoax"],
    summary:
      "Claims that deny or minimize the systematic, state-sponsored murder of six million Jews and millions of others by Nazi Germany. Recognized by the United Nations as a dangerous distortion of established history that fuels intolerance.",
    sourceLabel: "USHMM: Antisemitism Overview",
    sourceUrl: "https://encyclopedia.ushmm.org/content/en/article/antisemitism"
  }
];