---
permalink: /education/
title: "🎓 Education"
author_profile: true
---

<style>
  .edu-card {
    position: relative;
    overflow: hidden;
    padding: 20px 22px;
    border: 1px solid rgba(179, 108, 0, 0.34);
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
    border-color: rgba(255, 210, 120, 0.25);
    background:
      radial-gradient(circle at top right, rgba(255, 198, 89, 0.18), rgba(255, 198, 89, 0) 350px),
      linear-gradient(145deg, rgba(43, 29, 11, 0.92), rgba(24, 16, 7, 0.88));
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
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
    border: 1px solid rgba(187, 128, 27, 0.2);
  }
  .edu-card::after {
    bottom: -2rem; left: -1rem;
    width: 8rem; height: 8rem;
    border: 1px dashed rgba(187, 128, 27, 0.15);
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
    border: 2px solid rgba(205, 120, 37, 0.65);
    box-shadow: 0 4px 12px rgba(205, 120, 37, 0.2);
    flex-shrink: 0;
  }

  .edu-title-block h3 {
    margin: 0 0 3px;
    font-size: 1.15em;
    color: #3a2600;
  }
  .dark-mode .edu-title-block h3 { color: #ffe090; }

  .edu-subtitle {
    font-size: 0.83em;
    font-weight: 600;
    color: #8a5200;
  }
  .dark-mode .edu-subtitle { color: #c8920a; }

  .edu-pills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 14px;
  }
  .edu-pill {
    background: rgba(255, 238, 180, 0.9);
    color: #5a3600;
    padding: 3px 11px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 700;
    border: 1px solid rgba(192, 115, 0, 0.25);
  }
  .dark-mode .edu-pill {
    background: rgba(60, 40, 8, 0.9);
    color: #f0c060;
    border-color: rgba(192, 115, 0, 0.4);
  }

  .edu-stream {
    padding: 11px 14px;
    border-radius: 12px;
    background: rgba(255, 235, 175, 0.65);
    border: 1px solid rgba(192, 115, 0, 0.22);
  }
  .dark-mode .edu-stream {
    background: rgba(55, 38, 8, 0.7);
    border-color: rgba(212, 160, 64, 0.25);
  }
  .edu-stream-label {
    font-size: 0.76em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: #5a3600;
    margin-bottom: 8px;
  }
  .dark-mode .edu-stream-label { color: #e0a830; }

  .edu-stream-subjects {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  }
  .edu-subject {
    background: rgba(255, 255, 255, 0.85);
    color: #3a2600;
    padding: 2px 10px;
    border-radius: 20px;
    font-size: 0.8em;
    font-weight: 600;
    border: 1px solid rgba(192, 115, 0, 0.22);
  }
  .dark-mode .edu-subject {
    background: rgba(25, 16, 3, 0.75);
    color: #e8c06a;
    border-color: rgba(212, 160, 64, 0.3);
  }

  .edu-note {
    margin-top: 13px;
    padding-top: 11px;
    border-top: 1px dashed rgba(192, 115, 0, 0.28);
    font-size: 0.84em;
    font-style: italic;
    color: #5a3c00;
  }
  .dark-mode .edu-note { color: #c8a050; }

  @media (max-width: 600px) {
    .edu-header { flex-direction: column; align-items: flex-start; }
    .edu-header img { width: 54px; height: 54px; }
  }
</style>

<div class="edu-card">
  <div class="edu-header">
    <img src="/images/kps.webp" alt="KPS Logo">
    <div class="edu-title-block">
      <h3>Krishna Public School, Kamal Vihar</h3>
      <div class="edu-subtitle">Affiliated to CBSE · Raipur, C.G., India</div>
    </div>
  </div>

  <div class="edu-pills">
    <span class="edu-pill">🎓 Grade 1 – Grade 12</span>
    <span class="edu-pill">🗓️ 2014 – 2026</span>
    <span class="edu-pill">📍 Raipur, India</span>
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
