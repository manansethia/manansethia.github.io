---
permalink: /skills/
title: "🛠️ Skills"
author_profile: true
---

<style>
  /* ── Skills Page ── */
  .skills-intro {
    margin-bottom: 32px;
  }

  .skills-stats {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
    margin-bottom: 28px;
  }

  .stat-chip {
    background: linear-gradient(135deg, rgba(255, 215, 100, 0.42) 0%, rgba(255, 185, 30, 0.2) 100%);
    border: 2px solid rgba(185, 125, 0, 0.45);
    border-radius: 24px;
    padding: 8px 18px;
    font-size: 0.88em;
    font-weight: 700;
    color: #6b4400;
    display: flex;
    align-items: center;
    gap: 6px;
    box-shadow: 0 2px 10px rgba(192, 115, 0, 0.12);
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }

  .dark-mode .stat-chip {
    background: linear-gradient(135deg, rgba(80, 55, 10, 0.55) 0%, rgba(50, 35, 5, 0.3) 100%);
    border-color: rgba(200, 140, 30, 0.5);
    color: #ffd870;
  }

  /* ── Filter Bar ── */
  .skills-filter {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 28px;
    position: sticky;
    top: 74px;
    z-index: 9;
    padding: 10px 0 4px;
    background: linear-gradient(to bottom, #fffbeb 80%, transparent 100%);
  }

  .dark-mode .skills-filter {
    background: linear-gradient(to bottom, #120c00 80%, transparent 100%);
  }

  .filter-btn {
    background: linear-gradient(135deg, rgba(255, 215, 100, 0.3) 0%, rgba(255, 185, 30, 0.12) 100%);
    border: 1.5px solid rgba(185, 125, 0, 0.35);
    border-radius: 20px;
    padding: 7px 16px;
    font-size: 0.82em;
    font-weight: 600;
    color: #7a4e00;
    cursor: pointer;
    transition: all 0.22s ease;
    font-family: inherit;
    white-space: nowrap;
  }

  .filter-btn:hover {
    background: linear-gradient(135deg, rgba(255, 200, 60, 0.55) 0%, rgba(255, 170, 20, 0.3) 100%);
    border-color: rgba(185, 125, 0, 0.6);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(192, 115, 0, 0.18);
  }

  .filter-btn.active {
    background: linear-gradient(135deg, #ffc940 0%, #ffaa20 100%);
    border-color: rgba(160, 100, 0, 0.7);
    color: #4a2a00;
    box-shadow: 0 4px 14px rgba(192, 115, 0, 0.3);
    transform: translateY(-1px);
  }

  .dark-mode .filter-btn {
    background: linear-gradient(135deg, rgba(80, 55, 10, 0.45) 0%, rgba(50, 35, 5, 0.25) 100%);
    border-color: rgba(200, 140, 30, 0.4);
    color: #e0a040;
  }

  .dark-mode .filter-btn:hover {
    background: linear-gradient(135deg, rgba(100, 70, 15, 0.65) 0%, rgba(70, 48, 10, 0.45) 100%);
  }

  .dark-mode .filter-btn.active {
    background: linear-gradient(135deg, #4a3610 0%, #5c4418 100%);
    color: #ffd870;
    border-color: rgba(220, 155, 40, 0.7);
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.4);
  }

  /* ── Skill Grid ── */
  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 16px;
  }

  @media (min-width: 600px) {
    .skills-grid {
      grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    }
  }

  /* ── Skill Card ── */
  .skill-card {
    background: linear-gradient(145deg, rgba(255, 215, 100, 0.32) 0%, rgba(255, 190, 40, 0.12) 100%);
    border: 2px solid rgba(185, 125, 0, 0.42);
    border-radius: 16px;
    padding: 20px 16px 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: default;
    transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.3s ease;
    position: relative;
    overflow: hidden;
    animation: fadeInUp 0.5s ease forwards;
    opacity: 0;
  }

  .skill-card.hidden {
    display: none;
  }

  .skill-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(192, 115, 0, 0.2);
  }

  .dark-mode .skill-card {
    background: linear-gradient(145deg, rgba(75, 52, 8, 0.5) 0%, rgba(45, 30, 4, 0.28) 100%);
    border-color: rgba(200, 140, 30, 0.45);
  }

  .dark-mode .skill-card:hover {
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.45);
  }

  .skill-icon {
    font-size: 2.4em;
    margin-bottom: 10px;
    line-height: 1;
    filter: drop-shadow(0 2px 4px rgba(0,0,0,0.1));
  }

  .skill-name {
    font-size: 0.92em;
    font-weight: 700;
    color: #5a3800;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  .dark-mode .skill-name {
    color: #ffd870;
  }

  .skill-cat {
    font-size: 0.7em;
    font-weight: 600;
    color: #9a6200;
    background: rgba(192, 115, 0, 0.12);
    padding: 2px 8px;
    border-radius: 10px;
    margin-bottom: 10px;
    letter-spacing: 0.02em;
  }

  .dark-mode .skill-cat {
    color: #d4a040;
    background: rgba(192, 115, 0, 0.2);
  }

  /* Level dots */
  .skill-level {
    display: flex;
    gap: 4px;
    margin-bottom: 6px;
  }

  .lvl-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(192, 115, 0, 0.18);
    border: 1.5px solid rgba(185, 125, 0, 0.4);
    transition: background 0.2s;
  }

  .lvl-dot.on {
    background: linear-gradient(135deg, #ffb820, #ff8c00);
    border-color: #e07000;
    box-shadow: 0 0 4px rgba(255, 140, 0, 0.5);
  }

  .dark-mode .lvl-dot {
    background: rgba(192, 115, 0, 0.15);
    border-color: rgba(200, 140, 30, 0.35);
  }

  .dark-mode .lvl-dot.on {
    background: linear-gradient(135deg, #d4a030, #b87010);
    border-color: #c07800;
  }

  .skill-label {
    font-size: 0.7em;
    font-weight: 600;
    color: #9a6200;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .dark-mode .skill-label {
    color: #c09040;
  }

  /* Hover description tooltip */
  .skill-desc {
    position: absolute;
    inset: 0;
    background: linear-gradient(145deg, rgba(255, 200, 60, 0.95) 0%, rgba(255, 170, 10, 0.95) 100%);
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 14px 12px;
    font-size: 0.78em;
    font-weight: 500;
    color: #3d2000;
    line-height: 1.5;
    opacity: 0;
    transform: scale(0.96);
    transition: opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
  }

  .skill-card:hover .skill-desc {
    opacity: 1;
    transform: scale(1);
    pointer-events: auto;
  }

  .dark-mode .skill-desc {
    background: linear-gradient(145deg, rgba(60, 40, 5, 0.97) 0%, rgba(45, 28, 3, 0.97) 100%);
    color: #ffd870;
  }

  .skills-section-divider {
    margin: 36px 0 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    color: #a07830;
    font-weight: 700;
    font-size: 0.88em;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .skills-section-divider::before,
  .skills-section-divider::after {
    content: '';
    flex: 1;
    height: 1.5px;
    background: linear-gradient(90deg, transparent, rgba(192, 115, 0, 0.4), transparent);
  }

  .dark-mode .skills-section-divider {
    color: #c09040;
  }

  .dark-mode .skills-section-divider::before,
  .dark-mode .skills-section-divider::after {
    background: linear-gradient(90deg, transparent, rgba(200, 140, 30, 0.4), transparent);
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(16px); }
    to   { opacity: 1; transform: translateY(0); }
  }
</style>

<!-- Stats strip -->
<div class="skills-intro">
  <p>Things I've built with, broken, fixed, and occasionally stayed up all night because of.</p>
  <div class="skills-stats">
    <span class="stat-chip">🏆 41+ Achievements</span>
    <span class="stat-chip" style="animation-delay:0.08s">📜 10+ Certificates</span>
    <span class="stat-chip" style="animation-delay:0.16s">🖥️ 6 Operating Systems</span>
    <span class="stat-chip" style="animation-delay:0.24s">🛠️ 3 Hardware Projects</span>
    <span class="stat-chip" style="animation-delay:0.32s">💡 Since age 13</span>
  </div>
</div>

<!-- Category filter -->
<div class="skills-filter">
  <button class="filter-btn active" data-filter="all">All</button>
  <button class="filter-btn" data-filter="programming">💻 Programming</button>
  <button class="filter-btn" data-filter="ai">🤖 AI &amp; Data</button>
  <button class="filter-btn" data-filter="os">🖥️ OS</button>
  <button class="filter-btn" data-filter="security">🔐 Security</button>
  <button class="filter-btn" data-filter="hardware">🍓 Hardware</button>
  <button class="filter-btn" data-filter="competitions">🏅 Competitions</button>
  <button class="filter-btn" data-filter="hobbies">🎯 Hobbies</button>
</div>

<!-- Skills grid -->
<div class="skills-grid" id="skillsGrid">

  <!-- Programming -->
  <div class="skill-card" data-cat="programming" style="animation-delay:0.04s">
    <div class="skill-icon">🐍</div>
    <div class="skill-name">Python</div>
    <div class="skill-cat">Programming</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Expert</div>
    <div class="skill-desc">Primary language — from AI projects and IoT pipelines (MRIDA) to voice assistants (MATRIX) and automation scripts.</div>
  </div>

  <div class="skill-card" data-cat="programming" style="animation-delay:0.08s">
    <div class="skill-icon">🌐</div>
    <div class="skill-name">HTML / CSS / JS</div>
    <div class="skill-cat">Programming</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Built and maintain this very website — custom animations, glassmorphism UI, dark mode, and a 41-entry achievements page entirely by hand.</div>
  </div>

  <div class="skill-card" data-cat="programming" style="animation-delay:0.12s">
    <div class="skill-icon">🎨</div>
    <div class="skill-name">Jekyll / SCSS</div>
    <div class="skill-cat">Programming</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Full static site architecture with Liquid templating, SASS variables, custom breakpoints, and GitHub Pages deployment.</div>
  </div>

  <div class="skill-card" data-cat="programming" style="animation-delay:0.16s">
    <div class="skill-icon">📱</div>
    <div class="skill-name">MIT App Inventor</div>
    <div class="skill-cat">Programming</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Built the full MRIDA mobile app with sensor dashboards, AI-driven insights, and speech integration using MIT App Inventor.</div>
  </div>

  <!-- AI & Data -->
  <div class="skill-card" data-cat="ai" style="animation-delay:0.2s">
    <div class="skill-icon">🤖</div>
    <div class="skill-name">Machine Learning</div>
    <div class="skill-cat">AI &amp; Data</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Applied ML for agricultural soil analysis and climate modelling. Champion at Data &amp; AI Talks 2023.</div>
  </div>

  <div class="skill-card" data-cat="ai" style="animation-delay:0.24s">
    <div class="skill-icon">💡</div>
    <div class="skill-name">AI Tools &amp; APIs</div>
    <div class="skill-cat">AI &amp; Data</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Expert</div>
    <div class="skill-desc">Heavy daily use of LLM APIs, image generation models, prompt engineering, and AI-assisted development workflows.</div>
  </div>

  <div class="skill-card" data-cat="ai" style="animation-delay:0.28s">
    <div class="skill-icon">📊</div>
    <div class="skill-name">Data Analysis</div>
    <div class="skill-cat">AI &amp; Data</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Sensor data pipelines, soil health analytics, weather data processing, and research-grade data presentations.</div>
  </div>

  <div class="skill-card" data-cat="ai" style="animation-delay:0.32s">
    <div class="skill-icon">⚛️</div>
    <div class="skill-name">Quantum Computing</div>
    <div class="skill-cat">AI &amp; Data</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Learning</div>
    <div class="skill-desc">Actively exploring quantum algorithms and circuit models. Fascinated by the implications for AI and cryptography.</div>
  </div>

  <!-- Operating Systems -->
  <div class="skill-card" data-cat="os" style="animation-delay:0.36s">
    <div class="skill-icon">🍎</div>
    <div class="skill-name">macOS</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Expert</div>
    <div class="skill-desc">Daily driver. Deep understanding of the ecosystem, developer tools, and system internals.</div>
  </div>

  <div class="skill-card" data-cat="os" style="animation-delay:0.4s">
    <div class="skill-icon">🪟</div>
    <div class="skill-name">Windows</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Expert</div>
    <div class="skill-desc">Power user across all versions from 7 through 11. Registry tweaks, WSL2, PowerShell, and everything in between.</div>
  </div>

  <div class="skill-card" data-cat="os" style="animation-delay:0.44s">
    <div class="skill-icon">🐧</div>
    <div class="skill-name">Linux</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Comfortable across Debian, Ubuntu, Raspberry Pi OS and Kali. Running headless servers, cron jobs, and package management daily.</div>
  </div>

  <div class="skill-card" data-cat="os" style="animation-delay:0.48s">
    <div class="skill-icon">📱</div>
    <div class="skill-name">Android</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">ADB debugging, custom ROMs, app sideloading, and deep-dive into the Android permission and process model.</div>
  </div>

  <div class="skill-card" data-cat="os" style="animation-delay:0.52s">
    <div class="skill-icon">🖥️</div>
    <div class="skill-name">Unix</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Shell scripting, POSIX compliance, and understanding the design philosophy that underlies most modern OSes.</div>
  </div>

  <div class="skill-card" data-cat="os" style="animation-delay:0.56s">
    <div class="skill-icon">☀️</div>
    <div class="skill-name">Solaris</div>
    <div class="skill-cat">Operating Systems</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Familiar</div>
    <div class="skill-desc">Explored Oracle Solaris out of curiosity — ZFS, zones, and SMF service management.</div>
  </div>

  <!-- Cybersecurity -->
  <div class="skill-card" data-cat="security" style="animation-delay:0.6s">
    <div class="skill-icon">🔐</div>
    <div class="skill-name">Ethical Hacking</div>
    <div class="skill-cat">Cybersecurity</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Penetration testing concepts, vulnerability scanning, network enumeration, and responsible disclosure mindset.</div>
  </div>

  <div class="skill-card" data-cat="security" style="animation-delay:0.64s">
    <div class="skill-icon">🚩</div>
    <div class="skill-name">CTF Challenges</div>
    <div class="skill-cat">Cybersecurity</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Capture The Flag competitions — web exploitation, reverse engineering, and cryptography challenges.</div>
  </div>

  <div class="skill-card" data-cat="security" style="animation-delay:0.68s">
    <div class="skill-icon">🛡️</div>
    <div class="skill-name">Network Security</div>
    <div class="skill-cat">Cybersecurity</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Wireshark, packet analysis, firewall rules, VPN configuration, and understanding of TCP/IP attack surfaces.</div>
  </div>

  <!-- Hardware & IoT -->
  <div class="skill-card" data-cat="hardware" style="animation-delay:0.72s">
    <div class="skill-icon">🍓</div>
    <div class="skill-name">Raspberry Pi</div>
    <div class="skill-cat">Hardware &amp; IoT</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Built full IoT systems on Raspberry Pi 5 — sensor interfacing, camera feeds, cellular modems, and Python daemons.</div>
  </div>

  <div class="skill-card" data-cat="hardware" style="animation-delay:0.76s">
    <div class="skill-icon">📡</div>
    <div class="skill-name">IoT Systems</div>
    <div class="skill-cat">Hardware &amp; IoT</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">End-to-end IoT — from sensor wiring and I²C protocols to data pipelines, dashboards, and emergency alert systems.</div>
  </div>

  <div class="skill-card" data-cat="hardware" style="animation-delay:0.8s">
    <div class="skill-icon">🔌</div>
    <div class="skill-name">Sensor Integration</div>
    <div class="skill-cat">Hardware &amp; IoT</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">MPU-6050 IMU, BME280, MQ-135 air quality, soil moisture sensors — reading, calibrating, and making sense of noisy data.</div>
  </div>

  <!-- Competitions -->
  <div class="skill-card" data-cat="competitions" style="animation-delay:0.84s">
    <div class="skill-icon">🏆</div>
    <div class="skill-name">Science Exhibitions</div>
    <div class="skill-cat">Competitions</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Champion</div>
    <div class="skill-desc">Multiple district, state, and national level wins. INSPIRE Manak, Data &amp; AI Talks, CSIR Youth Science Congress and more.</div>
  </div>

  <div class="skill-card" data-cat="competitions" style="animation-delay:0.88s">
    <div class="skill-icon">🎓</div>
    <div class="skill-name">Quiz Competitions</div>
    <div class="skill-cat">Competitions</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Champion</div>
    <div class="skill-desc">Won ₹6000 as the only school student in a college-dominated quiz at Technovate 7.0, IIIT Naya Raipur. National and state level quiz wins across Science, Tech, and GK.</div>
  </div>

  <div class="skill-card" data-cat="competitions" style="animation-delay:0.92s">
    <div class="skill-icon">🧪</div>
    <div class="skill-name">Hackathons</div>
    <div class="skill-cat">Competitions</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Smart India Hackathon shortlist, Youth Ideathon Top 1000, and multiple school-level hackathon wins.</div>
  </div>

  <div class="skill-card" data-cat="competitions" style="animation-delay:0.96s">
    <div class="skill-icon">🎙️</div>
    <div class="skill-name">Presentations</div>
    <div class="skill-cat">Competitions</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Advanced</div>
    <div class="skill-desc">Presented research projects to panels of scientists, professors, and industry experts at national and state level events.</div>
  </div>

  <!-- Hobbies -->
  <div class="skill-card" data-cat="hobbies" style="animation-delay:1s">
    <div class="skill-icon">🏏</div>
    <div class="skill-name">Cricket</div>
    <div class="skill-cat">Hobbies</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Enthusiast</div>
    <div class="skill-desc">Passionate fan and player. More statistics in my head about cricket than some databases have on record.</div>
  </div>

  <div class="skill-card" data-cat="hobbies" style="animation-delay:1.04s">
    <div class="skill-icon">📸</div>
    <div class="skill-name">Photography</div>
    <div class="skill-cat">Hobbies</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Proficient</div>
    <div class="skill-desc">Composition, lighting, and post-processing. Especially enjoy astrophotography and street photography.</div>
  </div>

  <div class="skill-card" data-cat="hobbies" style="animation-delay:1.08s">
    <div class="skill-icon">🌙</div>
    <div class="skill-name">Astronomy</div>
    <div class="skill-cat">Hobbies</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot"></span><span class="lvl-dot"></span></div>
    <div class="skill-label">Enthusiast</div>
    <div class="skill-desc">Stargazing, planetary observation, and understanding orbital mechanics. Named a project AIRAVAT after a deity's elephant in the clouds.</div>
  </div>

  <div class="skill-card" data-cat="hobbies" style="animation-delay:1.12s">
    <div class="skill-icon">🃏</div>
    <div class="skill-name">General Knowledge</div>
    <div class="skill-cat">Hobbies</div>
    <div class="skill-level"><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span><span class="lvl-dot on"></span></div>
    <div class="skill-label">Expert</div>
    <div class="skill-desc">Decades' worth of trivia across Science, History, Geography, Sports, and Current Affairs — competitive quiz circuit veteran.</div>
  </div>

</div>

<script>
(function () {
  var btns = document.querySelectorAll('.filter-btn');
  var cards = document.querySelectorAll('.skill-card');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');

      // Update active button
      btns.forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');

      // Show/hide cards
      var delay = 0;
      cards.forEach(function (card) {
        var cat = card.getAttribute('data-cat');
        if (filter === 'all' || cat === filter) {
          card.classList.remove('hidden');
          card.style.animationDelay = delay + 's';
          card.style.animation = 'none';
          // Trigger reflow to restart animation
          void card.offsetWidth;
          card.style.animation = '';
          card.style.animationDelay = delay + 's';
          delay += 0.04;
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
})();
</script>