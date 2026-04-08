---
permalink: /skills/
title: "Skills"
author_profile: true
---

<style>
  .skills-page {
    --skills-bg: #fffdf8;
    --skills-surface: #ffffff;
    --skills-surface-2: #fff8ec;
    --skills-border: #efdcb8;
    --skills-title: #3b2c12;
    --skills-text: #5a4a2c;
    --skills-chip-bg: #fff3db;
    --skills-chip-text: #5f4614;
    --skills-chip-border: #ecd1a4;
    --skills-shadow: 0 12px 34px rgba(78, 52, 9, 0.08);
    color: var(--skills-text);
  }

  .dark-mode .skills-page {
    --skills-bg: #111111;
    --skills-surface: #181818;
    --skills-surface-2: #1f1a13;
    --skills-border: #3c3225;
    --skills-title: #f5dfb3;
    --skills-text: #d2c19f;
    --skills-chip-bg: #2a2117;
    --skills-chip-text: #f2d8a2;
    --skills-chip-border: #4a3c28;
    --skills-shadow: 0 10px 28px rgba(0, 0, 0, 0.35);
  }

  .skills-hero {
    padding: 1.1rem 1.2rem;
    border: 1px solid var(--skills-border);
    border-radius: 14px;
    background: linear-gradient(145deg, var(--skills-bg), var(--skills-surface-2));
    box-shadow: var(--skills-shadow);
    margin-bottom: 1rem;
  }

  .skills-hero p {
    margin: 0;
    line-height: 1.7;
    font-size: 0.97rem;
  }

  .skills-focus {
    margin-bottom: 1.35rem;
    padding: 0.9rem 1rem;
    border-radius: 12px;
    border: 1px solid var(--skills-border);
    background: var(--skills-surface);
  }

  .skills-focus strong {
    color: var(--skills-title);
    display: block;
    margin-bottom: 0.6rem;
    font-size: 0.92rem;
    letter-spacing: 0.02em;
  }

  .skills-chip-row,
  .skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .skills-tag {
    display: inline-flex;
    align-items: center;
    border: 1px solid var(--skills-chip-border);
    background: var(--skills-chip-bg);
    color: var(--skills-chip-text);
    border-radius: 999px;
    padding: 0.32rem 0.72rem;
    font-size: 0.81rem;
    line-height: 1.35;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .skills-card {
    grid-column: span 12;
    border: 1px solid var(--skills-border);
    border-radius: 14px;
    background: linear-gradient(180deg, var(--skills-surface), var(--skills-surface-2));
    box-shadow: var(--skills-shadow);
    padding: 0.95rem;
  }

  .skills-card h2 {
    margin: 0 0 0.55rem;
    border: 0 !important;
    padding: 0 !important;
    color: var(--skills-title);
    font-size: 1rem !important;
    font-weight: 700;
    line-height: 1.35;
  }

  .skills-group + .skills-group {
    margin-top: 0.75rem;
    padding-top: 0.75rem;
    border-top: 1px dashed var(--skills-border);
  }

  .skills-group h3 {
    margin: 0 0 0.45rem;
    font-size: 0.76rem;
    text-transform: uppercase;
    letter-spacing: 0.09em;
    color: var(--skills-title);
    font-weight: 700;
  }

  @media (min-width: 900px) {
    .skills-card.span-6 { grid-column: span 6; }
    .skills-card.span-4 { grid-column: span 4; }
    .skills-card.span-8 { grid-column: span 8; }
  }

  @media (max-width: 500px) {
    .skills-card { padding: 0.85rem; }
    .skills-tag { font-size: 0.78rem; }
    .skills-card h2 { font-size: 0.94rem !important; }
  }
</style>

<div class="skills-page">
  <section class="skills-hero">
    <p>
      This page is structured by domain so each area is easy to scan on mobile and desktop.
      Every skill you finalized is kept intact and grouped under clear headings.
    </p>
  </section>

  <section class="skills-focus">
    <strong>🚀 Focus Areas</strong>
    <div class="skills-chip-row">
      <span class="skills-tag">Artificial Intelligence</span>
      <span class="skills-tag">Systems Programming &amp; Operating Systems</span>
      <span class="skills-tag">Cybersecurity</span>
      <span class="skills-tag">General Programming &amp; Problem Solving</span>
    </div>
  </section>

  <section class="skills-grid">
    <article class="skills-card span-6">
      <h2>🧠 Programming Languages</h2>
      <div class="skills-group">
        <h3>Languages</h3>
        <div class="skills-tags">
          <span class="skills-tag">Python</span><span class="skills-tag">C++ (with STL)</span><span class="skills-tag">C</span><span class="skills-tag">Java</span><span class="skills-tag">SQL</span><span class="skills-tag">HTML</span><span class="skills-tag">CSS</span><span class="skills-tag">JavaScript</span>
        </div>
      </div>
      <div class="skills-group">
        <h3>Python Modules &amp; Libraries</h3>
        <div class="skills-tags">
          <span class="skills-tag">OpenCV</span><span class="skills-tag">Matplotlib</span><span class="skills-tag">Pandas</span><span class="skills-tag">NumPy</span><span class="skills-tag">PyTorch basics</span><span class="skills-tag">Django</span><span class="skills-tag">Flask</span><span class="skills-tag">Anaconda</span><span class="skills-tag">Jupyter Notebook</span><span class="skills-tag">Turtle</span><span class="skills-tag">Tkinter</span>
        </div>
      </div>
    </article>

  <article class="skills-card span-6">
      <h2>⚙️ Core Computer Science</h2>
      <div class="skills-tags">
        <span class="skills-tag">Data Structures &amp; Algorithms</span><span class="skills-tag">Competitive Programming</span><span class="skills-tag">Time Complexity Analysis</span><span class="skills-tag">Debugging</span><span class="skills-tag">Modular Programming</span><span class="skills-tag">Object-Oriented Programming</span><span class="skills-tag">System Design (basic)</span><span class="skills-tag">Database Management (SQL, MongoDB)</span>
      </div>
  </article>

  <article class="skills-card span-8">
      <h2>🤖 Artificial Intelligence &amp; ML</h2>
      <div class="skills-group"><h3>Foundations</h3><div class="skills-tags"><span class="skills-tag">Artificial Intelligence (foundations)</span><span class="skills-tag">AI Mathematics (Linear Algebra, Probability, Statistics, basic Calculus)</span></div></div>
      <div class="skills-group"><h3>Applied</h3><div class="skills-tags"><span class="skills-tag">Applied AI Systems</span><span class="skills-tag">Data Interpretation</span><span class="skills-tag">Data Analysis</span><span class="skills-tag">Data Engineering (basics)</span><span class="skills-tag">Model Context Protocol (MCP) basics</span><span class="skills-tag">Retrieval-Augmented Generation (RAG) beginner</span><span class="skills-tag">Agentic System Integration (basics)</span></div></div>
      <div class="skills-group"><h3>ML / DL / LLM</h3><div class="skills-tags"><span class="skills-tag">Machine Learning Fundamentals (training, evaluation, overfitting, feature engineering, dataset handling)</span><span class="skills-tag">Deep Learning Fundamentals (neural networks, backpropagation, CNN/RNN basics)</span><span class="skills-tag">LLM Systems (Foundational Understanding) (embeddings, tokenization, prompt engineering)</span><span class="skills-tag">Local AI / Inference Tools (Ollama)</span></div></div>
  </article>

  <article class="skills-card span-4">
      <h2>💻 Software Development</h2>
      <div class="skills-tags"><span class="skills-tag">CLI Development</span><span class="skills-tag">GUI Development (Tkinter, Electron, .NET basics)</span><span class="skills-tag">Backend Development (Flask, Django)</span><span class="skills-tag">Testing (basic unit/integration awareness)</span><span class="skills-tag">Package &amp; Dependency Management (pip, npm, conda, apt)</span><span class="skills-tag">Shell Scripting (Bash, PowerShell)</span><span class="skills-tag">Browser DevTools &amp; Debugging</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🧱 DevOps, Cloud &amp; Virtualization</h2>
      <div class="skills-tags"><span class="skills-tag">Git</span><span class="skills-tag">GitHub</span><span class="skills-tag">CI/CD</span><span class="skills-tag">Docker</span><span class="skills-tag">LXC</span><span class="skills-tag">Proxmox</span><span class="skills-tag">Virtualization Concepts (VMs, hypervisors, VirtualBox, VMware, QEMU basics)</span><span class="skills-tag">Server Hosting &amp; Management</span><span class="skills-tag">Cloudflare</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🖥️ Operating Systems &amp; Systems</h2>
      <div class="skills-group"><h3>Operating Systems</h3><div class="skills-tags"><span class="skills-tag">Operating Systems (conceptual + practical)</span><span class="skills-tag">Windows</span><span class="skills-tag">Advanced Windows Internals</span><span class="skills-tag">DOS &amp; NT Kernel</span><span class="skills-tag">Windows 95 → Windows 11</span><span class="skills-tag">Multi-architecture (16/32/64-bit, ARM)</span><span class="skills-tag">Embedded / POS Windows</span><span class="skills-tag">Linux</span><span class="skills-tag">Advanced Linux (Debian-based, Fedora-based)</span><span class="skills-tag">x86, ARM, RISC architectures</span><span class="skills-tag">Embedded Linux</span><span class="skills-tag">UNIX/Linux-Based Systems</span><span class="skills-tag">macOS</span><span class="skills-tag">ChromeOS</span><span class="skills-tag">Unix (BSD)</span><span class="skills-tag">Solaris</span><span class="skills-tag">Android</span><span class="skills-tag">RTOS</span><span class="skills-tag">RTOS Concepts</span><span class="skills-tag">Zephyr RTOS</span></div></div>
      <div class="skills-group"><h3>Systems Knowledge</h3><div class="skills-tags"><span class="skills-tag">Processes &amp; Threads</span><span class="skills-tag">Linux Processes &amp; Daemons</span><span class="skills-tag">Memory Concepts (basic)</span><span class="skills-tag">Storage Management (HDD, SSD, swap, health monitoring)</span><span class="skills-tag">Windows Registry &amp; Driver Management</span></div></div>
  </article>

  <article class="skills-card span-6">
      <h2>🌐 Networking &amp; Infrastructure</h2>
      <div class="skills-tags"><span class="skills-tag">Networking Fundamentals</span><span class="skills-tag">Computer Networks (Intermediate)</span><span class="skills-tag">TCP/IP (conceptual understanding)</span><span class="skills-tag">DNS Management &amp; Hosts</span><span class="skills-tag">Routing &amp; Routers</span><span class="skills-tag">Server Setup &amp; Management</span><span class="skills-tag">Tailscale (VPN / networking)</span><span class="skills-tag">SSH (Remote Access)</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🔐 Cybersecurity</h2>
      <div class="skills-group"><h3>Tools</h3><div class="skills-tags"><span class="skills-tag">Metasploit</span><span class="skills-tag">Burp Suite</span><span class="skills-tag">Wireshark</span><span class="skills-tag">tcpdump</span><span class="skills-tag">Nmap</span><span class="skills-tag">SQL Injection (Kali Linux)</span></div></div>
      <div class="skills-group"><h3>Concepts</h3><div class="skills-tags"><span class="skills-tag">Cybersecurity Fundamentals</span><span class="skills-tag">Cryptography (basic)</span><span class="skills-tag">Secure Communication Concepts</span><span class="skills-tag">End-to-End Encryption</span><span class="skills-tag">Basic Threat Awareness</span><span class="skills-tag">OWASP Concepts (introductory)</span></div></div>
  </article>

  <article class="skills-card span-6">
      <h2>🔌 Embedded Systems &amp; Hardware</h2>
      <div class="skills-tags"><span class="skills-tag">Embedded Systems Programming</span><span class="skills-tag">Microprocessor Programming &amp; Development</span><span class="skills-tag">ESP32</span><span class="skills-tag">Arduino Uno / Uno Q</span><span class="skills-tag">Raspberry Pi</span><span class="skills-tag">Circuit Design &amp; Board Development</span><span class="skills-tag">IoT Systems</span><span class="skills-tag">Sensors &amp; Robotics</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🌍 Web Development &amp; Internet</h2>
      <div class="skills-tags"><span class="skills-tag">Static Website Development</span><span class="skills-tag">Jekyll</span><span class="skills-tag">Markdown</span><span class="skills-tag">GitHub Pages Deployment</span><span class="skills-tag">Website Structuring</span><span class="skills-tag">SEO (Google Search Console)</span><span class="skills-tag">JSON</span><span class="skills-tag">XML</span><span class="skills-tag">YAML</span><span class="skills-tag">CSV</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🧠 Advanced &amp; Emerging Tech</h2>
      <div class="skills-tags"><span class="skills-tag">Quantum Computing (introductory)</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🧰 Tools &amp; Platforms</h2>
      <div class="skills-group"><h3>General Tools</h3><div class="skills-tags"><span class="skills-tag">VS Code / VSCodium</span></div></div>
      <div class="skills-group"><h3>Office &amp; Productivity</h3><div class="skills-tags"><span class="skills-tag">Microsoft Office</span><span class="skills-tag">LibreOffice</span><span class="skills-tag">Google Workspace</span><span class="skills-tag">Nextcloud</span><span class="skills-tag">Collabora Office</span></div></div>
      <div class="skills-group"><h3>Media &amp; File Handling</h3><div class="skills-tags"><span class="skills-tag">Image Editing (Photoshop, Photopea, Adobe Firefly)</span><span class="skills-tag">Video Editing (Clipchamp, Premiere Pro)</span><span class="skills-tag">Media Formats &amp; Processing (WEBP, PDF, JPEG, PNG, MKV, MOV, MP4, AV, H.264, H.265, HEVC, compression, conversion)</span></div></div>
      <div class="skills-group"><h3>App Development</h3><div class="skills-tags"><span class="skills-tag">MIT App Inventor</span><span class="skills-tag">APK Development, Tweaking &amp; Reverse Engineering</span></div></div>
  </article>

  <article class="skills-card span-6">
      <h2>🛠️ System Administration &amp; Utilities</h2>
      <div class="skills-tags"><span class="skills-tag">Privacy Management</span><span class="skills-tag">Ad &amp; Tracker Blocking</span><span class="skills-tag">DNS &amp; Network Configuration</span><span class="skills-tag">System Optimization</span><span class="skills-tag">Access, Accounts &amp; Permissions (rwx)</span></div>
  </article>

  <article class="skills-card span-6">
      <h2>🧠 Soft Skills &amp; Leadership</h2>
      <div class="skills-tags"><span class="skills-tag">Team Leadership</span><span class="skills-tag">Event Management</span><span class="skills-tag">Mentorship</span><span class="skills-tag">Public Speaking</span><span class="skills-tag">Presentation Skills</span><span class="skills-tag">Academic Writing</span></div>
  </article>
</section>
</div>