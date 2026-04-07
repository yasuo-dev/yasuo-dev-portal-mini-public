const siteConfig = {
  avatarText: "Y",
  eyebrow: "DEVELOPMENT / SECURITY / AI",
  pageTitle: "YASUO-DEV Portal",
  leadTextLines: [
    "発信先・技術情報・試作デモへの入口を1ページにまとめた軽量ポータルです。",
    "note、Qiita、Zenn、X、GitHub をこちらから確認できます。"
  ],
  aboutTextJa:
    "開発・セキュリティ・IT活用・AI支援・デバイス検証などを中心に発信しています。目的に応じて、長文は note、技術寄りは Qiita / Zenn、速報や短文は X、コードやリポジトリは GitHub に整理しています。",
  aboutTextEn:
    "I create and share content around development, security, practical IT use, AI-assisted workflows, and device testing. Long-form articles are mainly posted on note, technical write-ups on Qiita / Zenn, shorter updates on X, and code repositories on GitHub.",
  footerText: "© 2026 YASUO-DEV",
  badges: ["Development", "Security", "Apps", "AI"],
  techStackText: "Built with HTML / CSS / JavaScript / GitHub Pages",
  works: [
    {
      className: "portal",
      title: "静的ポータル試作",
      description: "GitHub Pages 上で動く軽量ポータルの試作",
      url: "https://yasuo-dev.github.io/yasuo-dev-portal-mini/"
    },
    {
      className: "line-demo",
      title: "LINE予約デモ",
      description: "LINE連携を想定した予約UIの試作",
      url: "#"
    },
    {
      className: "react-ui",
      title: "React / Tailwind UI試作",
      description: "React + Tailwind による画面試作",
      url: "#"
    }
  ],
  links: [
    {
      className: "note",
      iconSrc: "./assets/icons/note.png",
      iconAlt: "note logo",
      title: "note",
      description: "長文記事・考察・発信まとめ",
      url: "https://note.com/solo_dev_jp"
    },
    {
      className: "qiita",
      iconSrc: "./assets/icons/qiita.png",
      iconAlt: "Qiita logo",
      title: "Qiita",
      description: "技術メモ・実装寄りの記事",
      url: "https://qiita.com/yasuo-dev"
    },
    {
      className: "zenn",
      iconSrc: "./assets/icons/zenn.png",
      iconAlt: "Zenn logo",
      title: "Zenn",
      description: "技術記事・開発ナレッジ",
      url: "https://zenn.dev/yasuo_dev"
    },
    {
      className: "x",
      iconSrc: "./assets/icons/x.png",
      iconAlt: "X logo",
      title: "X",
      description: "短文・速報・日々の発信",
      url: "https://x.com/solo_dev_jp"
    },
    {
      className: "gh",
      iconSrc: "./assets/icons/github.png",
      iconAlt: "GitHub logo",
      title: "GitHub",
      description: "開発・コード・リポジトリ",
      url: "https://github.com/yasuo-dev"
    }
  ]
};

document.getElementById("avatarText").textContent = siteConfig.avatarText;
document.getElementById("eyebrow").textContent = siteConfig.eyebrow;
document.getElementById("pageTitle").textContent = siteConfig.pageTitle;
document.getElementById("footerText").textContent = siteConfig.footerText;

const leadTextEl = document.getElementById("leadText");
leadTextEl.textContent = "";
siteConfig.leadTextLines.forEach((line, index) => {
  if (index > 0) {
    leadTextEl.appendChild(document.createElement("br"));
  }
  leadTextEl.appendChild(document.createTextNode(line));
});

const aboutTextEl = document.getElementById("aboutText");
aboutTextEl.textContent = "";
aboutTextEl.appendChild(document.createTextNode(siteConfig.aboutTextJa));
aboutTextEl.appendChild(document.createElement("br"));
aboutTextEl.appendChild(document.createElement("br"));

const enSpan = document.createElement("span");
enSpan.lang = "en";
enSpan.textContent = siteConfig.aboutTextEn;
aboutTextEl.appendChild(enSpan);

aboutTextEl.appendChild(document.createElement("br"));
aboutTextEl.appendChild(document.createElement("br"));
aboutTextEl.appendChild(document.createTextNode(siteConfig.techStackText));

const badgeRow = document.getElementById("badgeRow");
siteConfig.badges.forEach((badge) => {
  const span = document.createElement("span");
  span.className = "badge";
  span.textContent = badge;
  badgeRow.appendChild(span);
});

const workSection = document.getElementById("workSection");
siteConfig.works.forEach((work) => {
  const a = document.createElement("a");
  a.className = `work-card ${work.className}`;
  a.href = work.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${work.title} を開く`);

  const body = document.createElement("div");
  body.className = "work-body";

  const title = document.createElement("h3");
  title.textContent = work.title;

  const desc = document.createElement("p");
  desc.textContent = work.description;

  body.appendChild(title);
  body.appendChild(desc);
  a.appendChild(body);

  workSection.appendChild(a);
});

const linksSection = document.getElementById("linksSection");
siteConfig.links.forEach((link) => {
  const a = document.createElement("a");
  a.className = `link-card ${link.className}`;
  a.href = link.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", `${link.title} を開く`);

  const icon = document.createElement("div");
  icon.className = "link-icon";

  const img = document.createElement("img");
  img.src = link.iconSrc;
  img.alt = link.iconAlt;
  img.loading = "lazy";
  icon.appendChild(img);

  const body = document.createElement("div");
  body.className = "link-body";

  const title = document.createElement("h2");
  title.textContent = link.title;

  const desc = document.createElement("p");
  desc.textContent = link.description;

  body.appendChild(title);
  body.appendChild(desc);

  const arrow = document.createElement("div");
  arrow.className = "arrow";
  arrow.textContent = "↗";

  a.appendChild(icon);
  a.appendChild(body);
  a.appendChild(arrow);

  linksSection.appendChild(a);
});
