---
permalink: /skills/
title: "🛠️ Skills"
author_profile: true
---

<style>
  .page__title {
    line-height: 1.1;
    letter-spacing: 0;
  }

  .skills-page {
    --skills-bg: #fff8ec;
    --skills-surface: rgba(255, 255, 255, 0.65);
    --skills-surface-strong: rgba(255, 250, 241, 0.75);
    --skills-surface-soft: rgba(255, 243, 221, 0.65);
    --skills-border: rgba(191, 129, 12, 0.26);
    --skills-border-strong: rgba(179, 108, 0, 0.34);
    --skills-title: #301e04;
    --skills-text: #5e4420;
    --skills-muted: #7b5b2d;
    --skills-chip-bg: rgba(255, 244, 224, 0.9);
    --skills-chip-text: #5d3f11;
    --skills-chip-border: rgba(192, 132, 26, 0.26);
    --skills-shadow: 0 18px 55px rgba(88, 57, 8, 0.12);
    --skills-shadow-strong: 0 24px 70px rgba(88, 57, 8, 0.16);
    position: relative;
    color: var(--skills-text);
    font-family: -apple-system, "SFProWeb", "SF Pro Text", "Segoe UI", sans-serif;
  }

  .skills-page::before,
  .skills-page::after {
    content: "";
    position: fixed;
    z-index: -1;
    inset: auto;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(18px);
    opacity: 0.7;
  }

  .skills-page::before {
    top: 8rem;
    right: max(2vw, 1rem);
    width: 14rem;
    height: 14rem;
    background: radial-gradient(circle, rgba(255, 196, 93, 0.35), rgba(255, 196, 93, 0));
  }

  .skills-page::after {
    top: 34rem;
    left: max(1vw, 0.5rem);
    width: 16rem;
    height: 16rem;
    background: radial-gradient(circle, rgba(255, 230, 164, 0.42), rgba(255, 230, 164, 0));
  }

  .dark-mode .skills-page {
    --skills-bg: #130d04;
    --skills-surface: rgba(31, 21, 9, 0.7);
    --skills-surface-strong: rgba(44, 31, 15, 0.8);
    --skills-surface-soft: rgba(50, 35, 16, 0.7);
    --skills-border: rgba(255, 204, 112, 0.15);
    --skills-border-strong: rgba(255, 210, 120, 0.25);
    --skills-title: #fff0ca;
    --skills-text: #e1cda7;
    --skills-muted: #d3b885;
    --skills-chip-bg: rgba(62, 43, 19, 0.9);
    --skills-chip-text: #ffe3b2;
    --skills-chip-border: rgba(255, 206, 116, 0.16);
    --skills-shadow: 0 20px 60px rgba(0, 0, 0, 0.34);
    --skills-shadow-strong: 0 28px 75px rgba(0, 0, 0, 0.48);
  }

  .skills-orbit {
    position: relative;
    overflow: hidden;
    margin-bottom: 1.5rem;
    padding: 1.45rem 1.35rem 1.2rem;
    border: 1px solid var(--skills-border-strong);
    border-radius: 28px;
    background:
      radial-gradient(circle at top right, rgba(255, 219, 148, 0.7), rgba(255, 219, 148, 0) 38%),
      linear-gradient(145deg, rgba(255, 251, 243, 0.7), rgba(255, 240, 205, 0.65));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: var(--skills-shadow-strong);
    isolation: isolate;
    animation: entranceUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
  }
  
  @keyframes entranceUp {
    0% { opacity: 0; transform: translateY(24px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  .skills-orbit::before,
  .skills-orbit::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
  }

  .skills-orbit::before {
    top: -3rem;
    right: -2rem;
    width: 13rem;
    height: 13rem;
    border: 1px solid rgba(187, 128, 27, 0.2);
  }

  .skills-orbit::after {
    bottom: -3rem;
    left: -1rem;
    width: 10rem;
    height: 10rem;
    border: 1px dashed rgba(187, 128, 27, 0.18);
  }

  .dark-mode .skills-orbit {
    background:
      radial-gradient(circle at top right, rgba(255, 198, 89, 0.18), rgba(255, 198, 89, 0) 34%),
      linear-gradient(145deg, rgba(43, 29, 11, 0.85), rgba(24, 16, 7, 0.8));
  }

  .skills-focus-label {
    display: inline-flex;
    align-items: center;
    gap: 0.45rem;
    margin-bottom: 0.95rem;
    padding: 0.38rem 0.78rem;
    border: 1px solid rgba(179, 108, 0, 0.18);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.48);
    color: var(--skills-title);
    font-size: 0.82rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
  }

  .dark-mode .skills-focus-label {
    background: rgba(255, 237, 199, 0.06);
    border-color: rgba(255, 210, 120, 0.14);
  }

  .skills-focus-grid {
    display: grid;
    grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
    gap: 1rem;
    align-items: start;
  }

  .skills-focus-copy h2 {
    margin: 0 0 0.4rem;
    border: 0 !important;
    padding: 0 !important;
    color: var(--skills-title);
    line-height: 1.2;
    letter-spacing: 0;
    font-family: -apple-system, "SFProDisplayWeb", "SF Pro Display", "Segoe UI", sans-serif;
  }

  .skills-focus-copy p {
    margin: 0;
    color: var(--skills-muted);
    font-size: 0.875rem;
    line-height: 1.6;
    max-width: 38rem;
  }

  .skills-focus-meta {
    display: grid;
    gap: 0.7rem;
  }

  .skills-metric {
    padding: 0.95rem 1rem;
    border: 1px solid var(--skills-border);
    border-radius: 18px;
    background: rgba(255, 255, 255, 0.55);
    box-shadow: 0 12px 30px rgba(96, 63, 9, 0.08);
  }

  .dark-mode .skills-metric {
    background: rgba(255, 249, 239, 0.04);
    box-shadow: none;
  }

  .skills-metric strong {
    display: block;
    margin-bottom: 0.2rem;
    color: var(--skills-title);
    font-size: 0.875rem;
  }

  .skills-metric span {
    color: var(--skills-muted);
    font-size: 0.82rem;
  }

  .skills-chip-row,
  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.62rem;
  }

  .skills-chip-row {
    margin-top: 1.15rem;
  }

  .skills-tag {
    display: inline-flex;
    align-items: center;
    max-width: 100%;
    border: 1px solid var(--skills-chip-border);
    background:
      linear-gradient(180deg, rgba(255, 255, 255, 0.88), rgba(255, 244, 224, 0.84));
    color: var(--skills-chip-text);
    border-radius: 999px;
    padding: 0.36rem 0.76rem;
    font-size: 0.8rem;
    font-weight: 500;
    line-height: 1.38;
    letter-spacing: 0;
    font-family: -apple-system, "SFProWeb", "SF Pro Text", "Segoe UI", sans-serif;
    box-shadow: 0 10px 20px rgba(101, 67, 14, 0.06);
  }

  .dark-mode .skills-tag {
    background:
      linear-gradient(180deg, rgba(74, 53, 24, 0.95), rgba(53, 37, 16, 0.98));
    box-shadow: none;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 1rem;
  }

  .skills-card {
    position: relative;
    grid-column: span 12;
    overflow: hidden;
    padding: 1.25rem 1.12rem 1.12rem;
    border: 1px solid var(--skills-border);
    border-radius: 24px;
    background:
      linear-gradient(180deg, var(--skills-surface-strong), var(--skills-surface)),
      linear-gradient(145deg, rgba(255, 241, 205, 0.2), rgba(255, 255, 255, 0));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: var(--skills-shadow);
    isolation: isolate;
    animation: entranceUp 0.6s cubic-bezier(0.2, 0.8, 0.2, 1) both;
    animation-delay: 0.1s;
  }

  .skills-card::before {
    content: "";
    position: absolute;
    inset: 0;
    background:
      linear-gradient(135deg, rgba(255, 205, 115, 0.18), rgba(255, 205, 115, 0) 45%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.18), rgba(255, 255, 255, 0));
    opacity: 0.9;
    pointer-events: none;
  }

  .dark-mode .skills-card::before {
    background:
      linear-gradient(135deg, rgba(255, 199, 88, 0.12), rgba(255, 199, 88, 0) 40%),
      linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0));
  }

  .skills-card > * {
    position: relative;
    z-index: 1;
  }

  .skills-card-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 0.75rem;
    margin-bottom: 0.95rem;
  }

  .skills-card h2 {
    margin: 0;
    border: 0 !important;
    padding: 0 !important;
    color: var(--skills-title);
    font-size: clamp(0.95rem, 0.85rem + 0.3vw, 1.15rem) !important;
    font-weight: 700;
    line-height: 1.25;
    letter-spacing: 0;
    font-family: -apple-system, "SFProDisplayWeb", "SF Pro Display", "Segoe UI", sans-serif;
  }

  .skills-group + .skills-group {
    margin-top: 0.95rem;
    padding-top: 0.95rem;
    border-top: 1px dashed rgba(191, 129, 12, 0.22);
  }

  .dark-mode .skills-group + .skills-group {
    border-top-color: rgba(255, 210, 120, 0.14);
  }

  .skills-group h3 {
    margin: 0 0 0.55rem;
    color: var(--skills-title);
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0;
    text-transform: uppercase;
    font-family: -apple-system, "SFProWeb", "SF Pro Text", "Segoe UI", sans-serif;
  }

  .skills-page img.apple-emoji {
    background: transparent !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    mix-blend-mode: normal;
  }

  .dark-mode .skills-page img.apple-emoji {
    background: transparent !important;
  }

  @media (min-width: 900px) {
    .skills-card.span-4 { grid-column: span 4; }
    .skills-card.span-5 { grid-column: span 5; }
    .skills-card.span-6 { grid-column: span 6; }
    .skills-card.span-7 { grid-column: span 7; }
    .skills-card.span-8 { grid-column: span 8; }
    .skills-card.span-12 { grid-column: span 12; }
  }

  @media (max-width: 900px) {
    .skills-focus-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .skills-card,
    .skills-orbit {
      transition: transform 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.24s cubic-bezier(0.2, 0.8, 0.2, 1), border-color 0.24s ease;
      will-change: transform, box-shadow;
    }
    
    /* Ensure hover doesn't fight entrance animation */
    .skills-card:hover,
    .skills-card:focus-within,
    .skills-orbit:hover {
      transform: translateY(-4px) scale(1.01);
      box-shadow: var(--skills-shadow-strong);
      border-color: var(--skills-border-strong);
    }

    .dark-mode .skills-card:hover,
    .dark-mode .skills-card:focus-within,
    .dark-mode .skills-orbit:hover {
      box-shadow: 0 28px 80px rgba(0, 0, 0, 0.56);
    }
    
    /* Staggered entrance for sibling cards */
    .skills-card:nth-child(2) { animation-delay: 0.15s; }
    .skills-card:nth-child(3) { animation-delay: 0.2s; }
    .skills-card:nth-child(4) { animation-delay: 0.25s; }
    .skills-card:nth-child(5) { animation-delay: 0.3s; }
    .skills-card:nth-child(6) { animation-delay: 0.35s; }
  }

  @media (max-width: 640px) {
    .page__title {
      line-height: 1.1;
    }

    .skills-orbit {
      padding: 1.15rem 1rem 1rem;
      border-radius: 22px;
    }

    .skills-focus-copy p {
      font-size: 0.82rem;
    }

    .skills-card {
      padding: 1.05rem 0.95rem 0.98rem;
      border-radius: 20px;
    }

    .skills-card-header {
      gap: 0.6rem;
      margin-bottom: 0.82rem;
    }

    .skills-card h2 {
      font-size: 0.92rem !important;
    }

    .skills-tag {
      padding: 0.3rem 0.68rem;
      font-size: 0.76rem;
    }
  }
</style>

<div class="skills-page">
  <section class="skills-orbit">
    <div style="display: flex; justify-content: space-between; align-items: flex-start;">
      <div class="skills-focus-label">🚀 Focus Areas</div>
      <div class="skills-focus-label" style="background: rgba(179, 108, 0, 0.08); border-color: rgba(179, 108, 0, 0.25);">🎯 142 Skills</div>
    </div>
    <div class="skills-focus-copy">
      <h2>Started with my dad's laptop. Grew from there.</h2>
      <p>
        A 2012 Lenovo G580 and an unsupervised internet connection changed everything. I spent years on that machine clicking through things I did not fully understand, breaking the OS, figuring out why, and doing it all over again. No course, no roadmap. Just a curious kid discovering internals by accident and sheer stubbornness. Most of what is on this page traces back to that.
      </p>
    </div>
    <div class="skills-chip-row">
      <span class="skills-tag">Artificial Intelligence</span>
      <span class="skills-tag">Systems &amp; Operating Systems</span>
      <span class="skills-tag">Cybersecurity</span>
      <span class="skills-tag">General Programming &amp; Problem Solving</span>
    </div>
  </section>

  <section class="skills-grid">
    <article class="skills-card span-7">
      <div class="skills-card-header">
        <div>
          <h2>⌨️ Programming Languages</h2>
        </div>
      </div>
      <div class="skills-group">
        <h3>Languages</h3>
        <div class="skills-tags">
          <span class="skills-tag">Python</span>
          <span class="skills-tag">C++ (with STL)</span>
          <span class="skills-tag">C</span>
          <span class="skills-tag">Java</span>
          <span class="skills-tag">SQL</span>
          <span class="skills-tag">HTML</span>
          <span class="skills-tag">CSS</span>
          <span class="skills-tag">JavaScript</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Python Modules &amp; Libraries</h3>
        <div class="skills-tags">
          <span class="skills-tag">OpenCV</span>
          <span class="skills-tag">Matplotlib</span>
          <span class="skills-tag">Pandas</span>
          <span class="skills-tag">NumPy</span>
          <span class="skills-tag">PyTorch basics</span>
          <span class="skills-tag">Django</span>
          <span class="skills-tag">Flask</span>
          <span class="skills-tag">Anaconda</span>
          <span class="skills-tag">Jupyter Notebook</span>
          <span class="skills-tag">Turtle</span>
          <span class="skills-tag">Tkinter</span>
        </div>
      </div>
    </article>

    <article class="skills-card span-5">
      <div class="skills-card-header">
        <div>
          <h2>⚙️ Core Computer Science</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Data Structures &amp; Algorithms</span>
        <span class="skills-tag">Competitive Programming</span>
        <span class="skills-tag">Time Complexity Analysis</span>
        <span class="skills-tag">Debugging</span>
        <span class="skills-tag">Modular Programming</span>
        <span class="skills-tag">Object-Oriented Programming</span>
        <span class="skills-tag">System Design (basic)</span>
        <span class="skills-tag">Database Management (SQL, MongoDB)</span>
      </div>
    </article>

    <article class="skills-card span-12">
      <div class="skills-card-header">
        <div>
          <h2>🤖 Artificial Intelligence &amp; ML</h2>
        </div>
      </div>
      <div class="skills-group">
        <h3>Foundations</h3>
        <div class="skills-tags">
          <span class="skills-tag">Artificial Intelligence (foundations)</span>
          <span class="skills-tag">AI Mathematics (Linear Algebra, Probability, Statistics, basic Calculus)</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Applied</h3>
        <div class="skills-tags">
          <span class="skills-tag">Applied AI Systems</span>
          <span class="skills-tag">Data Interpretation</span>
          <span class="skills-tag">Data Analysis</span>
          <span class="skills-tag">Data Engineering (basics)</span>
          <span class="skills-tag">Model Context Protocol (MCP) basics</span>
          <span class="skills-tag">Retrieval-Augmented Generation (RAG) beginner</span>
          <span class="skills-tag">Agentic System Integration (basics)</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>ML / DL / LLM</h3>
        <div class="skills-tags">
          <span class="skills-tag">Machine Learning Fundamentals (training, evaluation, overfitting, feature engineering, dataset handling)</span>
          <span class="skills-tag">Deep Learning Fundamentals (neural networks, backpropagation, CNN/RNN basics)</span>
          <span class="skills-tag">LLM Systems (Foundational Understanding) (embeddings, tokenization, prompt engineering)</span>
          <span class="skills-tag">Local AI / Inference Tools (Ollama)</span>
        </div>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>💻 Software Development</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">CLI Development</span>
        <span class="skills-tag">GUI Development (Tkinter, Electron, .NET basics)</span>
        <span class="skills-tag">Backend Development (Flask, Django)</span>
        <span class="skills-tag">Testing (basic unit/integration awareness)</span>
        <span class="skills-tag">Package &amp; Dependency Management (pip, npm, conda, apt)</span>
        <span class="skills-tag">Shell Scripting (Bash, PowerShell)</span>
        <span class="skills-tag">Browser DevTools &amp; Debugging</span>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>🧱 DevOps, Cloud &amp; Virtualization</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Git</span>
        <span class="skills-tag">GitHub</span>
        <span class="skills-tag">CI/CD</span>
        <span class="skills-tag">Docker</span>
        <span class="skills-tag">LXC</span>
        <span class="skills-tag">Proxmox</span>
        <span class="skills-tag">Virtualization Concepts (VMs, hypervisors, VirtualBox, VMware, QEMU basics)</span>
        <span class="skills-tag">Server Hosting &amp; Management</span>
        <span class="skills-tag">Cloudflare</span>
      </div>
    </article>

    <article class="skills-card span-12">
      <div class="skills-card-header">
        <div>
          <h2>🖥️ Operating Systems &amp; Systems</h2>
        </div>
      </div>
      <div class="skills-group">
        <h3>Operating Systems</h3>
        <div class="skills-tags">
          <span class="skills-tag">Operating Systems (conceptual + practical)</span>
          <span class="skills-tag">Windows</span>
          <span class="skills-tag">Advanced Windows Internals</span>
          <span class="skills-tag">DOS &amp; NT Kernel</span>
          <span class="skills-tag">Windows 95 → Windows 11</span>
          <span class="skills-tag">Multi-architecture (16/32/64-bit, ARM)</span>
          <span class="skills-tag">Embedded / POS Windows</span>
          <span class="skills-tag">Linux</span>
          <span class="skills-tag">Advanced Linux (Debian-based, Fedora-based)</span>
          <span class="skills-tag">x86, ARM, RISC architectures</span>
          <span class="skills-tag">Embedded Linux</span>
          <span class="skills-tag">UNIX/Linux-Based Systems</span>
          <span class="skills-tag">macOS</span>
          <span class="skills-tag">ChromeOS</span>
          <span class="skills-tag">Unix (BSD)</span>
          <span class="skills-tag">Solaris</span>
          <span class="skills-tag">Android</span>
          <span class="skills-tag">RTOS</span>
          <span class="skills-tag">RTOS Concepts</span>
          <span class="skills-tag">Zephyr RTOS</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Systems Knowledge</h3>
        <div class="skills-tags">
          <span class="skills-tag">Processes &amp; Threads</span>
          <span class="skills-tag">Linux Processes &amp; Daemons</span>
          <span class="skills-tag">Memory Concepts (basic)</span>
          <span class="skills-tag">Storage Management (HDD, SSD, swap, health monitoring)</span>
          <span class="skills-tag">Windows Registry &amp; Driver Management</span>
        </div>
      </div>
    </article>

    <article class="skills-card span-5">
      <div class="skills-card-header">
        <div>
          <h2>🌐 Networking &amp; Infrastructure</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Networking Fundamentals</span>
        <span class="skills-tag">Computer Networks (Intermediate)</span>
        <span class="skills-tag">TCP/IP (conceptual understanding)</span>
        <span class="skills-tag">DNS Management &amp; Hosts</span>
        <span class="skills-tag">Routing &amp; Routers</span>
        <span class="skills-tag">Server Setup &amp; Management</span>
        <span class="skills-tag">Tailscale (VPN / networking)</span>
        <span class="skills-tag">SSH (Remote Access)</span>
      </div>
    </article>

    <article class="skills-card span-7">
      <div class="skills-card-header">
        <div>
          <h2>🔐 Cybersecurity</h2>
        </div>
      </div>
      <div class="skills-group">
        <h3>Tools</h3>
        <div class="skills-tags">
          <span class="skills-tag">Metasploit</span>
          <span class="skills-tag">Burp Suite</span>
          <span class="skills-tag">Wireshark</span>
          <span class="skills-tag">tcpdump</span>
          <span class="skills-tag">Nmap</span>
          <span class="skills-tag">SQL Injection</span>
          <span class="skills-tag">Kali Linux</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Concepts</h3>
        <div class="skills-tags">
          <span class="skills-tag">Cybersecurity Fundamentals</span>
          <span class="skills-tag">Cryptography (basic)</span>
          <span class="skills-tag">Secure Communication Concepts</span>
          <span class="skills-tag">End-to-End Encryption</span>
          <span class="skills-tag">Basic Threat Awareness</span>
          <span class="skills-tag">OWASP Concepts (introductory)</span>
        </div>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>🔌 Embedded Systems &amp; Hardware</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Embedded Systems Programming</span>
        <span class="skills-tag">Microprocessor Programming &amp; Development</span>
        <span class="skills-tag">ESP32</span>
        <span class="skills-tag">Arduino Uno / Uno Q</span>
        <span class="skills-tag">Raspberry Pi</span>
        <span class="skills-tag">Circuit Design &amp; Board Development</span>
        <span class="skills-tag">IoT Systems</span>
        <span class="skills-tag">Sensors &amp; Robotics</span>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>🕸️ Web Development &amp; Internet</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Static Website Development</span>
        <span class="skills-tag">Jekyll</span>
        <span class="skills-tag">Markdown</span>
        <span class="skills-tag">GitHub Pages Deployment</span>
        <span class="skills-tag">Website Structuring</span>
        <span class="skills-tag">SEO (Google Search Console)</span>
        <span class="skills-tag">JSON</span>
        <span class="skills-tag">XML</span>
        <span class="skills-tag">YAML</span>
        <span class="skills-tag">CSV</span>
      </div>
    </article>

    <article class="skills-card span-12">
      <div class="skills-card-header">
        <div>
          <h2>🧰 Tools &amp; Platforms</h2>
        </div>
      </div>
      <div class="skills-group">
        <h3>General Tools</h3>
        <div class="skills-tags">
          <span class="skills-tag">VS Code / VSCodium</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Office &amp; Productivity</h3>
        <div class="skills-tags">
          <span class="skills-tag">Microsoft Office</span>
          <span class="skills-tag">LibreOffice</span>
          <span class="skills-tag">Google Workspace</span>
          <span class="skills-tag">Nextcloud</span>
          <span class="skills-tag">Collabora Office</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Media &amp; File Handling</h3>
        <div class="skills-tags">
          <span class="skills-tag">Image Editing (Photoshop, Photopea, Adobe Firefly)</span>
          <span class="skills-tag">Video Editing (Clipchamp, Premiere Pro)</span>
          <span class="skills-tag">Media Formats &amp; Processing (WEBP, PDF, JPEG, PNG, MKV, MOV, MP4, AV, H.264, H.265, HEVC, compression, conversion)</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>App Development</h3>
        <div class="skills-tags">
          <span class="skills-tag">MIT App Inventor</span>
          <span class="skills-tag">APK Development, Tweaking &amp; Reverse Engineering</span>
        </div>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>🛠️ System Administration &amp; Utilities</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Privacy Management</span>
        <span class="skills-tag">Ad &amp; Tracker Blocking</span>
        <span class="skills-tag">DNS &amp; Network Configuration</span>
        <span class="skills-tag">System Optimization</span>
        <span class="skills-tag">Access, Accounts &amp; Permissions (rwx)</span>
      </div>
    </article>

    <article class="skills-card span-6">
      <div class="skills-card-header">
        <div>
          <h2>🎙️ Soft Skills &amp; Leadership</h2>
        </div>
      </div>
      <div class="skills-tags">
        <span class="skills-tag">Team Leadership</span>
        <span class="skills-tag">Event Management</span>
        <span class="skills-tag">Mentorship</span>
        <span class="skills-tag">Public Speaking</span>
        <span class="skills-tag">Presentation Skills</span>
        <span class="skills-tag">Academic Writing</span>
      </div>
    </article>
  </section>
</div>
