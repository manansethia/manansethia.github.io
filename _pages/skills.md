---
permalink: /skills/
title: "🛠️ Skills"
author_profile: true
---

<style>
  /* ── Reset links in skills page ── */
  a {
    text-decoration: none !important;
    border: none !important;
    outline: none !important;
  }

  .sidebar {
    z-index: 10;
  }

  /* ── Skills intro ── */
  .skills-intro {
    font-size: 0.97em;
    color: #5a3e00;
    line-height: 1.65;
    margin-bottom: 28px;
    padding: 16px 20px;
    border-radius: 12px;
    background: linear-gradient(135deg, rgba(255, 243, 214, 0.7) 0%, rgba(255, 232, 175, 0.4) 100%);
    border: 1.5px solid rgba(192, 130, 0, 0.3);
  }
  .dark-mode .skills-intro {
    background: linear-gradient(135deg, rgba(55, 34, 7, 0.7) 0%, rgba(38, 23, 4, 0.4) 100%);
    border-color: rgba(190, 125, 25, 0.4);
    color: #e0c888;
  }

  /* ── Accordion category panel ── */
  .skill-category {
    margin-bottom: 14px;
    border-radius: 14px;
    overflow: hidden;
    border: 1.5px solid rgba(192, 130, 0, 0.35);
    background: linear-gradient(135deg, rgba(255, 250, 235, 0.6) 0%, rgba(255, 243, 210, 0.3) 100%);
    box-shadow: 0 3px 14px rgba(192, 115, 0, 0.07);
    transition: box-shadow 0.25s ease;
  }
  .skill-category:hover {
    box-shadow: 0 5px 20px rgba(192, 115, 0, 0.14);
  }
  .dark-mode .skill-category {
    background: linear-gradient(135deg, rgba(45, 30, 6, 0.75) 0%, rgba(28, 18, 3, 0.5) 100%);
    border-color: rgba(180, 120, 20, 0.4);
    box-shadow: 0 3px 14px rgba(0, 0, 0, 0.3);
  }
  .dark-mode .skill-category:hover {
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.45);
  }

  /* ── Panel header / toggle button ── */
  .skill-category-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 20px;
    cursor: pointer;
    user-select: none;
    background: linear-gradient(135deg, rgba(255, 220, 130, 0.65) 0%, rgba(255, 205, 95, 0.48) 100%);
    transition: background 0.25s ease;
    gap: 12px;
  }
  .skill-category-header:hover {
    background: linear-gradient(135deg, rgba(255, 210, 110, 0.82) 0%, rgba(255, 192, 75, 0.65) 100%);
  }
  .dark-mode .skill-category-header {
    background: linear-gradient(135deg, rgba(72, 50, 10, 0.9) 0%, rgba(55, 38, 8, 0.8) 100%);
  }
  .dark-mode .skill-category-header:hover {
    background: linear-gradient(135deg, rgba(88, 62, 14, 0.95) 0%, rgba(68, 48, 12, 0.9) 100%);
  }

  .skill-category-title {
    display: flex;
    align-items: center;
    gap: 10px;
    flex: 1;
    min-width: 0;
  }

  .skill-category-title h2 {
    font-size: 1.02em !important;
    font-weight: 700 !important;
    margin: 0 !important;
    padding: 0 !important;
    border: none !important;
    color: #6b4400 !important;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .dark-mode .skill-category-title h2 {
    color: #f2cc72 !important;
  }

  .skill-count-badge {
    display: inline-block;
    font-size: 0.73em;
    font-weight: 700;
    color: #a07830;
    background: rgba(192, 115, 0, 0.12);
    padding: 2px 9px;
    border-radius: 20px;
    flex-shrink: 0;
    white-space: nowrap;
  }
  .dark-mode .skill-count-badge {
    color: #d4a040;
    background: rgba(90, 69, 32, 0.35);
  }

  .skill-chevron {
    width: 9px;
    height: 9px;
    border-right: 2.5px solid #b07800;
    border-bottom: 2.5px solid #b07800;
    transform: rotate(45deg);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }
  .dark-mode .skill-chevron {
    border-color: #d4a040;
  }
  .skill-category.collapsed .skill-chevron {
    transform: rotate(-45deg);
  }

  /* ── Panel body (chip grid) ── */
  .skill-category-body {
    overflow: hidden;
    max-height: 2000px;
    opacity: 1;
    transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
                opacity 0.35s ease,
                padding 0.4s ease;
    padding: 18px 20px 20px;
  }
  .skill-category.collapsed .skill-category-body {
    max-height: 0;
    opacity: 0;
    padding-top: 0;
    padding-bottom: 0;
  }

  /* ── Sub-group label inside a panel ── */
  .skill-subgroup-label {
    font-size: 0.72em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.07em;
    color: #9a6800;
    margin: 12px 0 7px;
  }
  .skill-subgroup-label:first-child {
    margin-top: 0;
  }
  .dark-mode .skill-subgroup-label {
    color: #d4a040;
  }

  /* ── Chip grid ── */
  .skill-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 4px;
  }

  /* ── Individual chip ── */
  .skill-chip {
    display: inline-flex;
    align-items: center;
    gap: 5px;
    padding: 5px 13px;
    border-radius: 20px;
    font-size: 0.84em;
    font-weight: 500;
    line-height: 1.3;
    cursor: default;
    transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
    /* Default — light warm gold */
    background: linear-gradient(135deg, #fff8e6 0%, #ffefc8 100%);
    color: #7a5200;
    border: 1px solid rgba(192, 130, 0, 0.2);
    box-shadow: 0 1px 4px rgba(192, 115, 0, 0.08);
  }
  .skill-chip:hover {
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 5px 14px rgba(192, 115, 0, 0.17);
    background: linear-gradient(135deg, #fff2cc 0%, #ffe49a 100%);
  }
  .dark-mode .skill-chip {
    background: linear-gradient(135deg, rgba(55, 40, 8, 0.9) 0%, rgba(42, 30, 5, 0.85) 100%);
    color: #f0d080;
    border-color: rgba(180, 130, 30, 0.3);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  }
  .dark-mode .skill-chip:hover {
    background: linear-gradient(135deg, rgba(72, 52, 10, 0.95) 0%, rgba(55, 40, 8, 0.9) 100%);
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.4);
  }

  /* ── Accent chip variants (for major languages / highlights) ── */
  .skill-chip.accent {
    background: linear-gradient(135deg, rgba(255, 218, 105, 0.55) 0%, rgba(255, 200, 65, 0.4) 100%);
    font-weight: 600;
    border-color: rgba(192, 130, 0, 0.35);
  }
  .dark-mode .skill-chip.accent {
    background: linear-gradient(135deg, rgba(88, 62, 10, 0.95) 0%, rgba(68, 48, 8, 0.9) 100%);
    border-color: rgba(212, 160, 64, 0.45);
    color: #f8dd90;
  }

  /* ── Divider between sub-groups ── */
  .skill-divider {
    border: none;
    border-top: 1px dashed rgba(192, 115, 0, 0.2);
    margin: 12px 0 10px;
  }
  .dark-mode .skill-divider {
    border-top-color: rgba(180, 130, 30, 0.2);
  }

  /* ── "All expanded" / "All collapsed" quick controls ── */
  .skills-controls {
    display: flex;
    gap: 10px;
    margin-bottom: 18px;
    flex-wrap: wrap;
  }
  .skills-control-btn {
    font-size: 0.8em;
    font-weight: 600;
    padding: 5px 14px;
    border-radius: 20px;
    cursor: pointer;
    border: 1.5px solid rgba(192, 130, 0, 0.4);
    background: rgba(255, 232, 150, 0.35);
    color: #7a5200;
    transition: background 0.2s ease, transform 0.15s ease;
    user-select: none;
  }
  .skills-control-btn:hover {
    background: rgba(255, 218, 100, 0.6);
    transform: translateY(-1px);
  }
  .dark-mode .skills-control-btn {
    background: rgba(60, 42, 6, 0.7);
    border-color: rgba(180, 130, 30, 0.4);
    color: #e8c870;
  }
  .dark-mode .skills-control-btn:hover {
    background: rgba(80, 56, 10, 0.85);
  }

  /* ── Responsive: tighter padding on small screens ── */
  @media (max-width: 600px) {
    .skill-category-header {
      padding: 12px 14px;
    }
    .skill-category-body {
      padding: 14px 14px 16px;
    }
    .skill-chip {
      font-size: 0.8em;
      padding: 4px 11px;
    }
    .skill-category-title h2 {
      font-size: 0.92em !important;
    }
  }
</style>

<div class="skills-intro">
  A snapshot of everything I've picked up across programming, systems, AI, hardware, and more. <br>
  Click any category to explore — use the controls below to expand or collapse all at once.
</div>

<div class="skills-controls">
  <span class="skills-control-btn" onclick="skillsExpandAll()">Expand All ▾</span>
  <span class="skills-control-btn" onclick="skillsCollapseAll()">Collapse All ▴</span>
</div>


<!-- ═══ 1. Programming Languages ═══ -->
<div class="skill-category" id="sk-1">
  <div class="skill-category-header" onclick="skillsToggle('sk-1')">
    <div class="skill-category-title">
      <h2>🧠 Programming Languages</h2>
      <span class="skill-count-badge">9 languages · 10 ecosystems</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Core Languages</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🐍 Python</span>
      <span class="skill-chip accent">⚡ C++</span>
      <span class="skill-chip accent">🔵 C</span>
      <span class="skill-chip accent">☕ Java</span>
      <span class="skill-chip accent">🗄️ SQL</span>
      <span class="skill-chip accent">🌐 HTML</span>
      <span class="skill-chip accent">🎨 CSS</span>
      <span class="skill-chip accent">📜 JavaScript</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Python – Modules &amp; Libraries</div>
    <div class="skill-chips">
      <span class="skill-chip">👁️ OpenCV</span>
      <span class="skill-chip">📊 Matplotlib</span>
      <span class="skill-chip">🐼 Pandas</span>
      <span class="skill-chip">🔢 NumPy</span>
      <span class="skill-chip">🔥 PyTorch basics</span>
      <span class="skill-chip">🌐 Django</span>
      <span class="skill-chip">🌶️ Flask</span>
      <span class="skill-chip">🐍 Anaconda</span>
      <span class="skill-chip">📓 Jupyter Notebook</span>
      <span class="skill-chip">🐢 Turtle</span>
      <span class="skill-chip">🖼️ Tkinter</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">C++ &amp; C</div>
    <div class="skill-chips">
      <span class="skill-chip">📚 STL</span>
    </div>
  </div>
</div>


<!-- ═══ 2. Core Computer Science ═══ -->
<div class="skill-category" id="sk-2">
  <div class="skill-category-header" onclick="skillsToggle('sk-2')">
    <div class="skill-category-title">
      <h2>⚙️ Core Computer Science</h2>
      <span class="skill-count-badge">8 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip accent">🌳 Data Structures &amp; Algorithms</span>
      <span class="skill-chip accent">🏆 Competitive Programming</span>
      <span class="skill-chip">⏱️ Time Complexity Analysis</span>
      <span class="skill-chip">🐛 Debugging</span>
      <span class="skill-chip">🧩 Modular Programming</span>
      <span class="skill-chip">🏗️ Object-Oriented Programming</span>
      <span class="skill-chip">🏛️ System Design (basic)</span>
      <span class="skill-chip">🗃️ Database Management</span>
      <span class="skill-chip">🐘 SQL</span>
      <span class="skill-chip">🍃 MongoDB</span>
    </div>
  </div>
</div>


<!-- ═══ 3. AI & Machine Learning ═══ -->
<div class="skill-category" id="sk-3">
  <div class="skill-category-header" onclick="skillsToggle('sk-3')">
    <div class="skill-category-title">
      <h2>🤖 Artificial Intelligence &amp; ML</h2>
      <span class="skill-count-badge">17 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Foundations</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🤖 Artificial Intelligence (foundations)</span>
      <span class="skill-chip">➕ Linear Algebra</span>
      <span class="skill-chip">🎲 Probability &amp; Statistics</span>
      <span class="skill-chip">∫ basic Calculus</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Applied &amp; Systems</div>
    <div class="skill-chips">
      <span class="skill-chip">⚙️ Applied AI Systems</span>
      <span class="skill-chip">📊 Data Interpretation</span>
      <span class="skill-chip">📈 Data Analysis</span>
      <span class="skill-chip">🔧 Data Engineering (basics)</span>
      <span class="skill-chip">🔗 Model Context Protocol (MCP) basics</span>
      <span class="skill-chip">📚 RAG (beginner)</span>
      <span class="skill-chip">🕸️ Agentic System Integration (basics)</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">ML &amp; Deep Learning</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🧮 Machine Learning Fundamentals</span>
      <span class="skill-chip">🎓 Training &amp; Evaluation</span>
      <span class="skill-chip">📉 Overfitting</span>
      <span class="skill-chip">🔬 Feature Engineering</span>
      <span class="skill-chip">🗂️ Dataset Handling</span>
      <span class="skill-chip accent">🧠 Deep Learning Fundamentals</span>
      <span class="skill-chip">🔁 Neural Networks</span>
      <span class="skill-chip">⬅️ Backpropagation</span>
      <span class="skill-chip">🖼️ CNN basics</span>
      <span class="skill-chip">🔄 RNN basics</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">LLM &amp; Local Inference</div>
    <div class="skill-chips">
      <span class="skill-chip">📝 LLM Systems (Foundational)</span>
      <span class="skill-chip">🔢 Embeddings</span>
      <span class="skill-chip">🔤 Tokenization</span>
      <span class="skill-chip">✍️ Prompt Engineering</span>
      <span class="skill-chip">🦙 Ollama</span>
    </div>
  </div>
</div>


<!-- ═══ 4. Software Development ═══ -->
<div class="skill-category" id="sk-4">
  <div class="skill-category-header" onclick="skillsToggle('sk-4')">
    <div class="skill-category-title">
      <h2>💻 Software Development</h2>
      <span class="skill-count-badge">10 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip">⌨️ CLI Development</span>
      <span class="skill-chip">🖥️ GUI Development</span>
      <span class="skill-chip">🖼️ Tkinter</span>
      <span class="skill-chip">⚡ Electron</span>
      <span class="skill-chip">🪟 .NET basics</span>
      <span class="skill-chip">🔙 Backend Development</span>
      <span class="skill-chip">🌶️ Flask</span>
      <span class="skill-chip">🌐 Django</span>
      <span class="skill-chip">🧪 Testing (unit / integration awareness)</span>
      <span class="skill-chip">📦 pip</span>
      <span class="skill-chip">📦 npm</span>
      <span class="skill-chip">🐍 conda</span>
      <span class="skill-chip">📦 apt</span>
      <span class="skill-chip">🖥️ Bash Scripting</span>
      <span class="skill-chip">🪟 PowerShell</span>
      <span class="skill-chip">🔍 Browser DevTools &amp; Debugging</span>
    </div>
  </div>
</div>


<!-- ═══ 5. DevOps, Cloud & Virtualization ═══ -->
<div class="skill-category" id="sk-5">
  <div class="skill-category-header" onclick="skillsToggle('sk-5')">
    <div class="skill-category-title">
      <h2>🧱 DevOps, Cloud &amp; Virtualization</h2>
      <span class="skill-count-badge">10 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Version Control &amp; CI/CD</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🔀 Git</span>
      <span class="skill-chip accent">🐙 GitHub</span>
      <span class="skill-chip">🔄 CI/CD</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Containers &amp; Virtualization</div>
    <div class="skill-chips">
      <span class="skill-chip">🐳 Docker</span>
      <span class="skill-chip">📦 LXC</span>
      <span class="skill-chip">🖥️ Proxmox</span>
      <span class="skill-chip">🔲 VMs &amp; Hypervisors</span>
      <span class="skill-chip">📦 VirtualBox</span>
      <span class="skill-chip">🔧 VMware</span>
      <span class="skill-chip">⚡ QEMU basics</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Hosting &amp; Infrastructure</div>
    <div class="skill-chips">
      <span class="skill-chip">🖥️ Server Hosting &amp; Management</span>
      <span class="skill-chip">☁️ Cloudflare</span>
    </div>
  </div>
</div>


<!-- ═══ 6. Operating Systems & Systems ═══ -->
<div class="skill-category" id="sk-6">
  <div class="skill-category-header" onclick="skillsToggle('sk-6')">
    <div class="skill-category-title">
      <h2>🖥️ Operating Systems &amp; Systems</h2>
      <span class="skill-count-badge">25+ skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Windows</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🪟 Windows</span>
      <span class="skill-chip">🔩 Advanced Windows Internals</span>
      <span class="skill-chip">💾 DOS &amp; NT Kernel</span>
      <span class="skill-chip">🪟 Windows 95 → Windows 11</span>
      <span class="skill-chip">🏗️ Multi-architecture (16/32/64-bit, ARM)</span>
      <span class="skill-chip">📟 Embedded / POS Windows</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Linux &amp; UNIX</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🐧 Linux</span>
      <span class="skill-chip">🟡 Advanced Linux (Debian-based)</span>
      <span class="skill-chip">🎩 Fedora-based</span>
      <span class="skill-chip">🔧 x86, ARM, RISC architectures</span>
      <span class="skill-chip">📟 Embedded Linux</span>
      <span class="skill-chip">🦀 macOS</span>
      <span class="skill-chip">🌐 ChromeOS</span>
      <span class="skill-chip">😈 BSD (Unix)</span>
      <span class="skill-chip">☀️ Solaris</span>
      <span class="skill-chip">🤖 Android</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">RTOS</div>
    <div class="skill-chips">
      <span class="skill-chip">⏱️ RTOS Concepts</span>
      <span class="skill-chip">⚡ Zephyr RTOS</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Systems Knowledge</div>
    <div class="skill-chips">
      <span class="skill-chip">🔄 Processes &amp; Threads</span>
      <span class="skill-chip">👻 Linux Processes &amp; Daemons</span>
      <span class="skill-chip">🧠 Memory Concepts (basic)</span>
      <span class="skill-chip">💾 Storage Management (HDD, SSD, swap)</span>
      <span class="skill-chip">🗒️ Windows Registry &amp; Driver Management</span>
    </div>
  </div>
</div>


<!-- ═══ 7. Networking & Infrastructure ═══ -->
<div class="skill-category" id="sk-7">
  <div class="skill-category-header" onclick="skillsToggle('sk-7')">
    <div class="skill-category-title">
      <h2>🌐 Networking &amp; Infrastructure</h2>
      <span class="skill-count-badge">8 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip accent">🌐 Networking Fundamentals</span>
      <span class="skill-chip">📡 Computer Networks (Intermediate)</span>
      <span class="skill-chip">🔗 TCP/IP (conceptual)</span>
      <span class="skill-chip">🌍 DNS Management &amp; Hosts</span>
      <span class="skill-chip">🛤️ Routing &amp; Routers</span>
      <span class="skill-chip">🖥️ Server Setup &amp; Management</span>
      <span class="skill-chip">🔒 Tailscale (VPN)</span>
      <span class="skill-chip">🔐 SSH (Remote Access)</span>
    </div>
  </div>
</div>


<!-- ═══ 8. Cybersecurity ═══ -->
<div class="skill-category" id="sk-8">
  <div class="skill-category-header" onclick="skillsToggle('sk-8')">
    <div class="skill-category-title">
      <h2>🔐 Cybersecurity</h2>
      <span class="skill-count-badge">12 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Foundations</div>
    <div class="skill-chips">
      <span class="skill-chip accent">🛡️ Cybersecurity Fundamentals</span>
      <span class="skill-chip">🔑 Cryptography (basic)</span>
      <span class="skill-chip">🔒 Secure Communication Concepts</span>
      <span class="skill-chip">🔏 End-to-End Encryption</span>
      <span class="skill-chip">⚠️ Basic Threat Awareness</span>
      <span class="skill-chip">🌐 OWASP Concepts (introductory)</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Tools</div>
    <div class="skill-chips">
      <span class="skill-chip">💥 Metasploit</span>
      <span class="skill-chip">🕷️ Burp Suite</span>
      <span class="skill-chip">🦈 Wireshark</span>
      <span class="skill-chip">📡 tcpdump</span>
      <span class="skill-chip">🔍 Nmap</span>
      <span class="skill-chip">💉 SQL Injection (Kali Linux)</span>
    </div>
  </div>
</div>


<!-- ═══ 9. Embedded Systems & Hardware ═══ -->
<div class="skill-category" id="sk-9">
  <div class="skill-category-header" onclick="skillsToggle('sk-9')">
    <div class="skill-category-title">
      <h2>🔌 Embedded Systems &amp; Hardware</h2>
      <span class="skill-count-badge">8 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip accent">🔌 Embedded Systems Programming</span>
      <span class="skill-chip">🔧 Microprocessor Programming &amp; Development</span>
      <span class="skill-chip">📡 ESP32</span>
      <span class="skill-chip">🤖 Arduino Uno / Uno Q</span>
      <span class="skill-chip">🍓 Raspberry Pi</span>
      <span class="skill-chip">📐 Circuit Design &amp; Board Development</span>
      <span class="skill-chip">🌐 IoT Systems</span>
      <span class="skill-chip">📦 Sensors &amp; Robotics</span>
    </div>
  </div>
</div>


<!-- ═══ 10. Web Development & Internet ═══ -->
<div class="skill-category" id="sk-10">
  <div class="skill-category-header" onclick="skillsToggle('sk-10')">
    <div class="skill-category-title">
      <h2>🌍 Web Development &amp; Internet</h2>
      <span class="skill-count-badge">9 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip accent">🌐 Static Website Development</span>
      <span class="skill-chip">💎 Jekyll</span>
      <span class="skill-chip">📝 Markdown</span>
      <span class="skill-chip">📄 GitHub Pages Deployment</span>
      <span class="skill-chip">🧱 Website Structuring</span>
      <span class="skill-chip">🔍 SEO (Google Search Console)</span>
      <span class="skill-chip">📋 JSON</span>
      <span class="skill-chip">📋 XML</span>
      <span class="skill-chip">📋 YAML</span>
      <span class="skill-chip">📊 CSV</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Emerging Tech</div>
    <div class="skill-chips">
      <span class="skill-chip">⚛️ Quantum Computing (introductory)</span>
    </div>
  </div>
</div>


<!-- ═══ 11. Tools & Platforms ═══ -->
<div class="skill-category" id="sk-11">
  <div class="skill-category-header" onclick="skillsToggle('sk-11')">
    <div class="skill-category-title">
      <h2>🧰 Tools &amp; Platforms</h2>
      <span class="skill-count-badge">20+ tools</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-subgroup-label">Editors &amp; IDEs</div>
    <div class="skill-chips">
      <span class="skill-chip accent">💙 VS Code / VSCodium</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Productivity &amp; Office</div>
    <div class="skill-chips">
      <span class="skill-chip">📊 Microsoft Office</span>
      <span class="skill-chip">📄 LibreOffice</span>
      <span class="skill-chip">🌐 Google Workspace</span>
      <span class="skill-chip">☁️ Nextcloud</span>
      <span class="skill-chip">📝 Collabora Office</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">Media &amp; File Handling</div>
    <div class="skill-chips">
      <span class="skill-chip">🎨 Photoshop</span>
      <span class="skill-chip">🎨 Photopea</span>
      <span class="skill-chip">✨ Adobe Firefly</span>
      <span class="skill-chip">🎬 Clipchamp</span>
      <span class="skill-chip">🎥 Premiere Pro</span>
      <span class="skill-chip">🖼️ WEBP / JPEG / PNG</span>
      <span class="skill-chip">🎞️ MKV / MOV / MP4</span>
      <span class="skill-chip">📦 H.264 / H.265 / HEVC</span>
      <span class="skill-chip">🗜️ Compression &amp; Conversion</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">App Development</div>
    <div class="skill-chips">
      <span class="skill-chip">📱 MIT App Inventor</span>
      <span class="skill-chip">🤖 APK Dev, Tweaking &amp; Reverse Engineering</span>
    </div>
    <hr class="skill-divider">
    <div class="skill-subgroup-label">System Administration</div>
    <div class="skill-chips">
      <span class="skill-chip">🕵️ Privacy Management</span>
      <span class="skill-chip">🚫 Ad &amp; Tracker Blocking</span>
      <span class="skill-chip">🌐 DNS &amp; Network Configuration</span>
      <span class="skill-chip">⚡ System Optimization</span>
      <span class="skill-chip">🔑 Access, Accounts &amp; Permissions (rwx)</span>
    </div>
  </div>
</div>


<!-- ═══ 12. Soft Skills & Leadership ═══ -->
<div class="skill-category" id="sk-12">
  <div class="skill-category-header" onclick="skillsToggle('sk-12')">
    <div class="skill-category-title">
      <h2>🧠 Soft Skills &amp; Leadership</h2>
      <span class="skill-count-badge">6 skills</span>
    </div>
    <span class="skill-chevron"></span>
  </div>
  <div class="skill-category-body">
    <div class="skill-chips">
      <span class="skill-chip accent">👥 Team Leadership</span>
      <span class="skill-chip">🗓️ Event Management</span>
      <span class="skill-chip">🎓 Mentorship</span>
      <span class="skill-chip">🎤 Public Speaking</span>
      <span class="skill-chip">📊 Presentation Skills</span>
      <span class="skill-chip">✍️ Academic Writing</span>
    </div>
  </div>
</div>


<script>
(function () {
  /* ── Toggle a single category ── */
  function skillsToggle(id) {
    var el = document.getElementById(id);
    if (!el) return;
    el.classList.toggle('collapsed');
  }

  /* ── Expand all ── */
  function skillsExpandAll() {
    document.querySelectorAll('.skill-category').forEach(function (el) {
      el.classList.remove('collapsed');
    });
  }

  /* ── Collapse all ── */
  function skillsCollapseAll() {
    document.querySelectorAll('.skill-category').forEach(function (el) {
      el.classList.add('collapsed');
    });
  }

  /* Expose to global scope for onclick handlers */
  window.skillsToggle = skillsToggle;
  window.skillsExpandAll = skillsExpandAll;
  window.skillsCollapseAll = skillsCollapseAll;
})();
</script>