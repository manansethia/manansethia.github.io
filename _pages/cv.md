---
layout: archive
title: "📄 Resume"
permalink: /resume/
description: "Manan Sethia's Resume and CV — download or view inline. One-page resume and detailed curriculum vitae."
keywords: "Manan Sethia resume, Manan Sethia CV, download resume, student resume, competitive programmer resume"
author_profile: true
redirect_from:
  - /cv
  - /portfolio
---

{% include base_path %}

<style>
  /* ── Intro Text ── */
  .resume-intro {
    font-size: 1em;
    line-height: 1.6;
    margin-bottom: 20px;
    color: inherit;
  }

  /* ── Decorative divider ── */
  .resume-divider {
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(192, 115, 0, 0.5), transparent);
    border: none;
    margin: 24px 0;
  }
  .dark-mode .resume-divider {
    background: linear-gradient(90deg, transparent, rgba(255, 210, 120, 0.35), transparent);
  }
  .royal-mode .resume-divider {
    background: linear-gradient(90deg, transparent, rgba(240, 240, 240, 0.3), transparent);
  }

  /* ── Tab Strip ── */
  .doc-tabs {
    display: flex;
    gap: 0;
    border-bottom: 2px solid rgba(185, 115, 0, 0.45);
    user-select: none;
    margin-bottom: 0;
  }
  .dark-mode .doc-tabs {
    border-bottom-color: rgba(255, 210, 120, 0.35);
  }
  .royal-mode .doc-tabs {
    border-bottom-color: rgba(240, 240, 240, 0.3);
  }

  .doc-tab {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 24px 9px;
    font-size: 0.88em;
    font-weight: 600;
    color: #8b7040;
    cursor: pointer;
    border: 2px solid transparent;
    border-bottom: none;
    border-radius: 10px 10px 0 0;
    background: transparent;
    position: relative;
    bottom: -2px;
    transition: color 0.3s ease, background 0.3s ease, border-color 0.35s ease, transform 0.2s ease;
  }
  .dark-mode .doc-tab {
    color: #a08050;
  }
  .royal-mode .doc-tab {
    color: #ffffd1;
  }
  .doc-tab:hover {
    color: #5a3e00;
    background: rgba(229, 149, 0, 0.08);
    transform: translateY(-1px);
  }
  .dark-mode .doc-tab:hover {
    color: #e6c194;
    background: rgba(255, 210, 120, 0.06);
  }
  .royal-mode .doc-tab:hover {
    color: #ffffd1;
    background: rgba(255, 255, 209, 0.1);
  }

  /* Active tab – light mode */
  .doc-tab.active {
    color: #3a2400;
    background: #fff;
    border-color: rgba(185, 115, 0, 0.45);
  }
  /* Active tab – dark mode: subtle warm dark background */
  .dark-mode .doc-tab.active {
    color: #f0d8a8;
    background: #1a1408;
    border-color: rgba(255, 210, 120, 0.35);
  }
  .royal-mode .doc-tab.active {
    color: #ffffff;
    background: #1e1d1a;
    border-color: rgba(240, 240, 240, 0.3);
  }

  .tab-icon {
    font-size: 1.05em;
    transition: transform 0.3s ease;
  }
  .doc-tab.active .tab-icon {
    transform: scale(1.15);
  }

  @media (max-width: 480px) {
    .doc-tab { padding: 8px 14px 7px; font-size: 0.82em; gap: 4px; }
  }

  /* ── PDF Viewer – CSS Grid smooth height animation ── */
  .pdf-viewer-outer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  .pdf-viewer-outer.open {
    grid-template-rows: 1fr;
  }

  .pdf-viewer-wrap {
    min-height: 0;
    overflow: hidden;
    border-radius: 0 14px 14px 14px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    border: 1.5px solid rgba(192, 115, 0, 0.3);
    border-top: none;
    background: #f5f0e8;
    position: relative;
  }
  .dark-mode .pdf-viewer-wrap {
    border-color: #5a4520;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
    background: #0e0c08;
  }
  .royal-mode .pdf-viewer-wrap {
    border-color: #4a463d;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    background: #0d0d0c;
  }

  /* Loading shimmer */
  .pdf-viewer-wrap.loading::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      rgba(192, 115, 0, 0.03) 25%,
      rgba(192, 115, 0, 0.08) 50%,
      rgba(192, 115, 0, 0.03) 75%
    );
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
    pointer-events: none;
    z-index: 2;
  }
  .dark-mode .pdf-viewer-wrap.loading::after {
    background: linear-gradient(90deg,
      rgba(255, 210, 120, 0.02) 25%,
      rgba(255, 210, 120, 0.06) 50%,
      rgba(255, 210, 120, 0.02) 75%
    );
    background-size: 200% 100%;
  }
  .royal-mode .pdf-viewer-wrap.loading::after {
    background: linear-gradient(90deg,
      rgba(255, 255, 209, 0.02) 25%,
      rgba(255, 255, 209, 0.06) 50%,
      rgba(255, 255, 209, 0.02) 75%
    );
    background-size: 200% 100%;
  }
  @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }

  .pdf-viewer-frame {
    width: 100%;
    height: 550px;
    border: none;
    display: block;
    background: #fff;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .pdf-viewer-frame.loaded {
    opacity: 1;
  }
  @media (max-width: 600px) {
    .pdf-viewer-frame { height: 500px; }
  }

  /* ── Download Buttons (exact .btn--inverse from theme-toggle) ── */
  .download-row {
    display: flex;
    gap: 14px;
    margin-top: 22px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .dl-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 0.5em 1.2em;
    font-family: inherit;
    font-size: 0.85em;
    font-weight: bold;
    text-align: center;
    text-decoration: none !important;
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.25s ease;
    background: linear-gradient(135deg, rgb(68, 41, 0), rgb(141, 85, 0));
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    color: #e9a700 !important;
    border: 2px solid rgba(6, 4, 0);
  }
  .dl-btn:hover {
    box-shadow: #000000 0 0 0.3rem;
    background: linear-gradient(135deg, rgb(48, 29, 0), rgb(65, 42, 9)) !important;
    color: #e9a700 !important;
    border: 2px solid #060400 !important;
    transform: translateY(-2px);
  }
  .dark-mode .dl-btn {
    background: linear-gradient(135deg, rgba(255, 240, 208), rgba(255, 213, 122)) !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    color: #663d00 !important;
    border: 2px solid rgb(204, 145, 57) !important;
  }
  .dark-mode .dl-btn:hover {
    box-shadow: #fff5e7 0 0 0.3rem !important;
    background: linear-gradient(135deg, rgb(255, 245, 224), rgb(255, 211, 114)) !important;
    color: #663d00 !important;
    border: 2px solid #dc880a !important;
    transform: translateY(-2px);
  }
  .royal-mode .dl-btn {
    background: linear-gradient(135deg, rgba(45, 43, 38, 0.8), rgba(35, 33, 29, 0.6)) !important;
    backdrop-filter: blur(8px) !important;
    -webkit-backdrop-filter: blur(8px) !important;
    color: #ffffd1 !important;
    border: 2px solid #4a463d !important;
  }
  .royal-mode .dl-btn:hover {
    box-shadow: #ffffd1 0 0 0.3rem !important;
    background: linear-gradient(135deg, rgba(74, 70, 61, 1), rgba(60, 56, 49, 1)) !important;
    color: #ffffff !important;
    border: 2px solid #ffffd1 !important;
    transform: translateY(-2px);
  }

  .dl-icon {
    font-size: 1.1em;
  }
  .royal-mode .page__content h2 { border-bottom: 1.5px solid rgba(240, 240, 240, 0.9); }
</style>

<span class="resume-intro" role="heading" aria-level="2" style="font-size:1.17em;font-weight:600;display:block;margin-bottom:20px">Here are my Resume and CV.</span>

Think of the tabs below like browser tabs; tap one to peek inside, tap it again to fold it back up, or switch between them. You can also grab a copy using the download buttons below.
{: .resume-intro}

<!-- ═══ Tab Strip ═══ -->
<div class="doc-tabs" id="docTabs">
  <div class="doc-tab" id="tabResume" onclick="switchDoc('resume')">
    <span class="tab-icon">📄</span> Resume
  </div>
  <div class="doc-tab" id="tabCV" onclick="switchDoc('cv')">
    <span class="tab-icon">📑</span> Curriculum Vitae
  </div>
</div>

<!-- ═══ PDF Viewer (CSS Grid animation wrapper) ═══ -->
<div class="pdf-viewer-outer" id="pdfOuter">
  <div class="pdf-viewer-wrap" id="pdfWrap">
    <iframe class="pdf-viewer-frame" id="docFrame" title="Document Viewer"></iframe>
  </div>
</div>

<hr class="resume-divider">

<!-- ═══ Download Buttons ═══ -->
<div class="download-row">
  <a class="dl-btn" href="/files/resume.pdf" download="Manan_Sethia_Resume.pdf">
    <span class="dl-icon">⬇</span> Download Resume
  </a>
  <a class="dl-btn" href="/files/cv.pdf" download="Manan_Sethia_CV.pdf">
    <span class="dl-icon">⬇</span> Download CV
  </a>
</div>

<script>
(function() {
  var outer   = document.getElementById('pdfOuter');
  var wrap    = document.getElementById('pdfWrap');
  var frame   = document.getElementById('docFrame');
  var tabR    = document.getElementById('tabResume');
  var tabC    = document.getElementById('tabCV');
  var current = null;
  var closeTimer = null;

  var sources = {
    resume: '/_pages/resume-pdf-view.html',
    cv:     '/_pages/cv-pdf-view.html'
  };

  frame.addEventListener('load', function() {
    if (frame.src && frame.src !== 'about:blank' && frame.src !== window.location.href) {
      setTimeout(function() {
        frame.classList.add('loaded');
        wrap.classList.remove('loading');
      }, 400);
    }
  });

  function switchDoc(which) {
    if (closeTimer) { clearTimeout(closeTimer); closeTimer = null; }

    if (current === which) {
      /* ── Collapse: hide content first, THEN collapse height ── */
      frame.classList.remove('loaded');   /* iframe fades out instantly */
      wrap.classList.remove('loading');
      /* one rAF so the class removal paints before we remove 'open' */
      requestAnimationFrame(function() {
        outer.classList.remove('open');
        tabR.classList.remove('active');
        tabC.classList.remove('active');
        current = null;
        closeTimer = setTimeout(function() {
          frame.src = 'about:blank';
          closeTimer = null;
        }, 650);
      });
      return;
    }

    tabR.classList.toggle('active', which === 'resume');
    tabC.classList.toggle('active', which === 'cv');
    var target = which;

    if (!current) {
      /* ── Opening from closed: animate box FIRST, load src after ── */
      frame.classList.remove('loaded');
      wrap.classList.remove('loading');
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          outer.classList.add('open');
          /* Load src only after height animation is nearly done */
          closeTimer = setTimeout(function() {
            wrap.classList.add('loading');
            frame.src = sources[target];
            closeTimer = null;
          }, 620);
        });
      });
    } else {
      /* ── Switching tab while already open: swap src ── */
      frame.classList.remove('loaded');
      wrap.classList.add('loading');
      frame.src = sources[which];
    }

    current = which;
  }

  window.switchDoc = switchDoc;
})();
</script>
