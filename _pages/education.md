---
permalink: /education/
title: "🎓 Education"
description: "Manan Sethia's education — Krishna Public School, Raipur. CBSE PCME with Computer Science, active in student leadership, technical clubs, and quizzing."
keywords: "Manan Sethia education, Krishna Public School, CBSE, Raipur, Computer Science, PCME"
author_profile: true
---

<style>
  .edu-card {
    position: relative;
    overflow: hidden;
    padding: 20px 22px;
    border: 1px solid rgb(87 52 0 / 34%);
    border-radius: 22px;
    background:
      radial-gradient(circle at top right, rgba(255, 219, 148, 0.7), rgba(255, 219, 148, 0) 400px),
      linear-gradient(145deg, rgba(255, 251, 243, 0.85), rgba(255, 240, 205, 0.8));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 16px 50px rgba(88, 57, 8, 0.14);
    isolation: isolate;
  }
  .dark-mode .edu-card {
    border-color: rgb(161 145 112 / 79%);
    background:
      radial-gradient(circle at top right, rgb(255 209 120 / 16%), rgba(255, 198, 89, 0) 350px), linear-gradient(145deg, rgba(43, 29, 11, 0.92), rgba(24, 16, 7, 0.88));
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  }
  .royal-mode .edu-card {
    border-color: rgba(240, 240, 240, 0.41);
    background:
      radial-gradient(circle at top right, rgb(255 242 201 / 30%), rgba(139, 119, 58, 0) 350px), linear-gradient(145deg, rgba(72, 70, 64, 0.88), rgba(50, 48, 43, 0.78));
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.6);
  }
  .royal-mode .edu-card::before {
    border-color: rgba(255, 255, 255, 0.23);
  }
  .royal-mode .edu-card::after {
    border-color: rgba(255, 255, 255, 0.23);
  }

  .dark-mode .edu-card::before {
    border-color: rgba(101, 75, 40, 1);
  }
  .dark-mode .edu-card::after {
    border-color: rgba(101, 75, 40, 1);
  }

  .edu-card::before,
  .edu-card::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: 0;
  }
  .edu-card::before {
    top: -3rem; right: -2rem;
    width: 13rem; height: 13rem;
    border: 1px solid rgba(103, 65, 0, 0.2);
  }
  .edu-card::after {
    bottom: -2rem; left: -1rem;
    width: 8rem; height: 8rem;
    border: 1px dashed rgba(103, 65, 0, 0.2);
  }
  .edu-card > * { position: relative; z-index: 1; }

  .edu-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 14px;
  }

  .edu-header img {
    width: 62px;
    height: 62px;
    object-fit: cover;
    border-radius: 12px;
    border: 2px solid rgba(132, 65, 0, 0.65);
    box-shadow: 0 4px 12px rgba(205, 120, 37, 0.2);
    flex-shrink: 0;
  }

  .dark-mode .edu-header img {
    border-color: rgba(255, 202, 107, 1);
    box-shadow: 0 4px 12px rgba(255, 227, 153, 0.2);
  }

  .royal-mode .edu-header img {
    border-color: rgba(255, 245, 169, 0.79);
    box-shadow: 0 4px 12px rgb(255 249 223 / 33%);
  }

  .edu-title-block .edu-school-name {
    margin: 0 0 3px;
    font-size: 1.15em;
    font-weight: 600;
    color: #3a2600;
    display: block;
  }
  .dark-mode .edu-title-block .edu-school-name { color: #fff7e3; }
  .royal-mode .edu-title-block .edu-school-name { color: #ffffff; }

  .edu-subtitle {
    font-size: 0.83em;
    font-weight: 600;
    color: #8a5200;
  }
  .dark-mode .edu-subtitle { color: #ffe8b0; }
  .royal-mode .edu-subtitle { color: #ffffd1; }

  .edu-pills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }
  .edu-pill {
    background: rgba(255, 245, 210, 0.9);
    color: #5a3600;
    padding: 3px 11px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 700;
    border: 1px solid rgba(98, 59, 0, 0.25);
  }
  .dark-mode .edu-pill {
    background: rgba(60, 44, 14, 0.9);
    color: #ffe0a2;
    border-color: rgba(255, 227, 186, 0.45);
  }
  .royal-mode .edu-pill {
    background: rgba(86, 84, 77, 0.85);
    color: #ffffec;
    border-color: rgba(255, 255, 255, 0.39);
  }

  .edu-stream {
    padding: 11px 14px;
    border-radius: 12px;
    background: rgba(255, 235, 175, 0.65);
    border: 1px solid rgba(148, 88, 0, 0.42);
  }
  .dark-mode .edu-stream {
    background: rgba(55, 38, 8, 0.7);
    border-color: rgba(205, 175, 121, 0.79);
  }
  .royal-mode .edu-stream {
    background: rgba(93, 90, 78, 0.65);
    border-color: rgba(255, 255, 255, 0.30);
  }
  .edu-stream-label {
    font-size: 0.76em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: #5a3600;
    margin-bottom: 8px;
  }
  .dark-mode .edu-stream-label { color: #ffe3a6; }
  .royal-mode .edu-stream-label { color: #ffffd1; }

  .edu-stream-subjects {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .edu-subject {
    background: rgba(255, 248, 233, 0.85);
    color: #3a2600;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    border: 1px solid rgba(102, 61, 0, 0.53);
  }
  .dark-mode .edu-subject {
    background: rgba(25, 16, 3, 0.75);
    color: #ede1c8;
    border-color: rgba(255, 207, 119, 0.57);
  }
  .royal-mode .edu-subject {
    background: rgba(71, 66, 50, 0.75);
    color: #ffffec;
    border-color: #a89f7ab5;
  }

  .edu-note {
    margin-top: 13px;
    padding-top: 11px;
    border-top: 1px dashed rgba(192, 115, 0, 0.28);
    font-size: 0.84em;
    font-style: italic;
    color: #5a3c00;
  }
  .dark-mode .edu-note { color: #ffd685; }
  .royal-mode .edu-note {
    color: #fff7db;
    border-top-color: rgba(240, 240, 240, 0.25);
  }

  @media (max-width: 600px) {
    .edu-header { flex-direction: column; align-items: flex-start; }
    .edu-header img { width: 54px; height: 54px; }
  }
  .royal-mode .page__content h2 { border-bottom: 1.5px solid rgba(240, 240, 240, 0.9); }
</style>

<div class="edu-card">
  <div class="edu-header">
    <img src="/images/ntu.avif" alt="NTU Logo" width="62" height="62">
    <div class="edu-title-block">
      <span class="edu-school-name" role="heading" aria-level="2">Nanyang Technological University</span>
      <div class="edu-subtitle">College of Computing and Data Science (CCDS) · Singapore</div>
    </div>
  </div>

  <div class="edu-pills">
    <span class="edu-pill">🎓 Bachelor of Computing (Hons) in Computer Science</span>
    <span class="edu-pill">🗓️ 2026 – 2030</span>
  </div>

  <div class="edu-stream">
    <div class="edu-stream-label">🔬 Specialisations</div>
    <div class="edu-stream-subjects">
      <span class="edu-subject">Cyber Security</span>
      <span class="edu-subject">Artificial Intelligence</span>
    </div>
  </div>
</div>

<br>

<div class="edu-card">
  <div class="edu-header">
    <img src="/images/kps.avif" alt="KPS Logo" width="62" height="62">
    <div class="edu-title-block">
      <span class="edu-school-name" role="heading" aria-level="2">Krishna Public School, Kamal Vihar</span>
      <div class="edu-subtitle">Affiliated to CBSE · Raipur, Chhattisgarh, India</div>
    </div>
  </div>

  <div class="edu-pills">
    <span class="edu-pill">🎓 Grade 1 – Grade 12</span>
    <span class="edu-pill">🗓️ 2014 – 2026</span>
  </div>

  <div class="edu-stream">
    <div class="edu-stream-label">📚 Higher Secondary Stream (PCME + CS)</div>
    <div class="edu-stream-subjects">
      <span class="edu-subject">Physics</span>
      <span class="edu-subject">Chemistry</span>
      <span class="edu-subject">Mathematics</span>
      <span class="edu-subject">English</span>
      <span class="edu-subject">Computer Science</span>
    </div>
  </div>

  <div class="edu-note">Actively involved in student leadership, technical clubs and quizzing. <a href="/experience/" style="color:inherit;font-style:normal;font-weight:600;">see Experience →</a></div>
</div>
