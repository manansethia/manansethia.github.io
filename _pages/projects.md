---
permalink: /projects/
title: "🧰 Projects"
description: "Manan Sethia's projects — MRIDA assistive device for the visually impaired, Conputer OS built from scratch, AI and embedded systems prototypes."
keywords: "Manan Sethia projects, MRIDA, Conputer OS, assistive technology, embedded systems, AI projects, student developer"
author_profile: true
---

<!--
## AIRAVAT 🐘  
### Artificial Intelligence-based Rapid Analysis of Variability in Atmospheric Trends  
<style>
  h1 {
    margin-bottom: 15px;
  }
  h2 {
    margin-top: 10px;
    margin-bottom: 15px;
  }
  h3 {
    margin-top: 10px;
    margin-bottom: 15px;    
  }

  .airavat-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .airavat-image img {
    max-width: auto;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px; /* Add spacing in mobile view */
    transition: transform 0.3s ease;
  }

  .airavat-text ul {
    margin-top: 10px;
  }

  .airavat-image img:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .airavat-container {
      flex-direction: row;
      align-items: flex-start; /* Aligns image with first list item */
      gap: 20px; /* Space between image & text */
    }

    .airavat-text {
      flex: 1;
      order: 1;
    }
    .airavat-image {
      flex: 1;
      order: 2;
      text-align: center;
    }
    .airavat-image img {
      margin-bottom: 0; /* Remove space in desktop */
      transition: transform 0.3s ease;
    }
  }
</style>

<div class="airavat-container">
  <div class="airavat-image">
    <img src="/images/airavat.avif" alt="Airavat Image">
  </div>

  <div class="airavat-text">
    <ul>
  	  <li>AIRAVAT is an upcoming project which will compute hyper-local weather using existing ground, weather balloon, and satellite data with the help of AI-based climate model tuning.</li>
  	  <li>Named after the vehicle of deity Indra, Airavat is a divine elephant known as the "king of elephants", "elephant of the clouds", and "brother of the sun".</li>
    </ul>
  </div>
</div>
-->

<!--
## Conputer OS 🪲  
<style>
  .conos-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .conos-image img {
    max-width: auto;
    height: auto;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px; /* Add spacing in mobile view */
    transition: transform 0.3s ease;
  }

  .conos-text ul {
    margin-top: 10px;
  }

  .conos-image img:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .conos-container {
      flex-direction: row;
      align-items: flex-start; /* Aligns image with first list item */
      gap: 20px; /* Space between image & text */
    }

    .conos-text {
      flex: 1;
      order: 1;
    }
    .conos-image {
      flex: 1;
      order: 2;
      text-align: center;
    }
    .conos-image img {
      margin-bottom: 0; /* Remove space in desktop */
      transition: transform 0.3s ease;
    }
  }
</style>

<div class="conos-container">
  <div class="conos-image">
    <img src="/images/con.avif" alt="Conputer OS Image">
  </div>

  <div class="conos-text">
    <ul>
      <li>A Debian-based personal operating system currently being developed by me with a Green Beetle as its logo and various system components named after Egyptian and Indian inspirations.</li>
      <li>The name is inspired from an old ChatGPT meme.</li>
    </ul>
  </div>
</div>
-->

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap" media="print" onload="this.media='all'">
<style>
  /* Base Project Section - Orbit Styled */
  .project-section {
    margin-bottom: 50px;
    position: relative;
    overflow: hidden;
    padding: 25px 30px;
    border: 1px solid rgba(179, 108, 0, 0.34);
    border-radius: 28px;
    background:
      radial-gradient(circle at top right, rgba(255, 219, 148, 0.7), rgba(255, 219, 148, 0) 400px),
      linear-gradient(145deg, rgba(255, 251, 243, 0.7), rgba(255, 240, 205, 0.65));
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    box-shadow: 0 24px 70px rgba(88, 57, 8, 0.16);
    box-sizing: border-box;
    isolation: isolate;
    /* Confine reflow + paint so child collapse/expand (MRIDA stack, MRIDA pdf)
       doesn't ripple to sibling .project-section blurs below. */
    contain: layout paint;
  }
  .project-section::before,
  .project-section::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
    z-index: 0;
  }
  .project-section > * {
    position: relative;
    z-index: 1;
  }
  .project-section::before {
    top: -3rem;
    right: -2rem;
    width: 15rem;
    height: 15rem;
    border: 1px solid rgba(187, 128, 27, 0.2);
  }
  .project-section::after {
    bottom: -3rem;
    left: -1rem;
    width: 12rem;
    height: 12rem;
    border: 1px dashed rgba(187, 128, 27, 0.18);
  }
  .dark-mode .project-section {
    border-color: rgba(255, 210, 120, 0.25);
    background:
      radial-gradient(circle at top right, rgba(255, 198, 89, 0.18), rgba(255, 198, 89, 0) 350px),
      linear-gradient(145deg, rgba(43, 29, 11, 0.85), rgba(24, 16, 7, 0.8));
    box-shadow: 0 28px 75px rgba(0, 0, 0, 0.48);
  }
  .royal-mode .project-section {
    border-color: rgba(240, 240, 240, 0.2);
    background: radial-gradient(circle at top right, rgb(224 215 185 / 40%), rgb(0 0 0 / 0%) 350px), linear-gradient(145deg, rgba(72, 70, 64, 0.7), rgba(50, 48, 43, 0.65));
    box-shadow: 0 28px 75px rgba(0, 0, 0, 0.5);
  }
  .royal-mode .project-section::before {
    border-color: rgba(240, 240, 240, 0.12);
  }
  .royal-mode .project-section::after {
    border-color: rgba(240, 240, 240, 0.1);
  }
  .project-section h2 {
    font-size: 1.7em;
    margin-top: 0;
    margin-bottom: 0px;
    padding-bottom: 0;
    border-bottom: none !important;
    color: #5a3e00;
  } 
  .dark-mode .project-section h2 {
    color: #ffe6aa;
  }
  .royal-mode .project-section h2 {
    color: #ffffff;
  }
  .royal-mode .project-section h3 {
    color: rgba(240, 240, 240, 0.8) !important;
  }
  .royal-mode .project-year {
    color: #feffdd !important;
  }
  .project-section h3 {
    font-size: 1.05em;
    font-weight: 500;
    margin-top: 3px;
    margin-bottom: 8px;
    color: #c07300;
  }
  /* Tech Stack Pills */
  .project-meta {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }
  .project-meta span {
    background: linear-gradient(135deg, #fff3d6 0%, #ffe8b8 100%);
    color: #8b5e00;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85em;
    font-weight: 600;
    box-shadow: 0 2px 6px rgba(192, 115, 0, 0.1);
  }
  .dark-mode .project-meta span {
    background: linear-gradient(135deg, #342b1c 0%, #2a2318 100%);
    color: #f0c870;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  }
  .royal-mode .project-meta span {
    background: linear-gradient(135deg, rgba(72, 70, 64, 0.85), rgba(72, 70, 64, 0.75));
    color: #ffffd1;
    border: 1px solid rgba(240, 240, 240, 0.15);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
  }
  /* Flex Layouts */
  .project-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
  .project-text {
    flex: 1;
    font-size: 0.98em;
    line-height: 1.7;
  }
  .project-text p {
    margin-bottom: 12px;
  }
  .project-text .notable {
    margin-top: 25px;
    font-weight: 600;
    color: #8b5e00;
  }
  .dark-mode .project-text .notable {
    color: #f0c870;
  }
  .royal-mode .project-text .notable {
    color: #ffffd1;
  }
  .project-text ul {
    margin-top: 8px;
    padding-left: 20px;
  }
  .project-text li {
    margin-bottom: 6px;
  }
  .project-image-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  } 
  .project-image-box img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 20px rgba(0,0,0,0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .project-image-box img:hover {
    transform: scale(1.035);
    box-shadow: 0 12px 30px rgba(0,0,0,0.18);
  }
  .ai-label {
    font-size: 11px;
    font-family: 'Orbitron', sans-serif;
    color: #888;
    letter-spacing: 1.5px;
    margin-top: 12px;
    text-transform: uppercase;
  }
  .mrida-float-visual {
    float: right;
    width: min(42%, 360px);
    margin: 6px 0 18px 24px;
  }
  /* ── MRIDA flip card ── */
  .mrida-flip-card {
    width: 100%;
    aspect-ratio: 4 / 3;
    perspective: 900px;
    cursor: pointer;
  }
  .mrida-flip-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    border-radius: 16px;
    /* transition wins over * { transition-duration:0s } because higher specificity + !important */
    -webkit-transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) !important;
    transition: transform 0.55s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  /* hover: scale up (only when not mid-flip) */
  .mrida-flip-card:hover .mrida-flip-inner {
    transform: scale(1.035);
  }
  /* flipped: rotate — scale resets */
  .mrida-flip-card.flipped .mrida-flip-inner {
    transform: rotateY(180deg);
  }
  /* flipped + hover */
  .mrida-flip-card.flipped:hover .mrida-flip-inner {
    transform: rotateY(180deg) scale(1.035);
  }
  .mrida-flip-front,
  .mrida-flip-back {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
  }
  .mrida-flip-back {
    transform: rotateY(180deg);
  }
  .mrida-flip-front img,
  .mrida-flip-back img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.16);
  }
  .mrida-image-note {
    margin-top: 10px;
    font-size: 0.82em;
    font-family: Georgia, Times, serif;
    color: #7a5c1e;
    text-align: center;
    line-height: 1.4;
  }
  .dark-mode .mrida-image-note {
    color: #c8a050;
  }
  .royal-mode .mrida-image-note {
    color: #ffffd1;
  }
  /* ── Collapsible stack ── */
  .mrida-stack-collapsible {
    border-radius: 12px;
    overflow: hidden;
  }
  .mrida-stack-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    user-select: none;
    padding: 2px 0 10px;
  }
  .mrida-stack-header h4 {
    margin: 0 !important;
  }
  .mrida-stack-dash {
    font-size: 1.4em;
    font-weight: 700;
    color: #a07030;
    line-height: 1;
    transition: color 0.2s ease;
    min-width: 18px;
    text-align: center;
  }
  .dark-mode .mrida-stack-dash {
    color: #d4a040;
  }
  .royal-mode .mrida-stack-dash {
    color: #ffffd1;
  }
  .mrida-stack-body {
    display: grid !important;
    grid-template-rows: 0fr;
    /* !important ensures we beat both _base.scss override and the wildcard
       transition-duration:0s rule. Matches pdf-grid-outer's 0.6s feel. */
    transition: grid-template-rows 0.6s cubic-bezier(0.4, 0, 0.2, 1) !important;
  }
  .mrida-stack-body.open {
    grid-template-rows: 1fr;
  }
  .mrida-stack-body > * {
    /* Required for grid 0fr<->1fr trick: child must allow shrink + clip. */
    min-height: 0;
    overflow: hidden;
  }
  /* ── Stack tables ── */
  .mrida-stack-cols {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 28px;
  }
  /* Collapse to single column on small screens */
  @media (max-width: 640px) {
    .mrida-stack-cols {
      grid-template-columns: 1fr;
    }
  }
  .mrida-stack-section {
    margin-bottom: 4px;
  }
  .mrida-stack-label {
    font-size: 0.82em;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: #8a5a00;
    margin-bottom: 8px;
    margin-top: 12px;
  }
  .dark-mode .mrida-stack-label {
    color: #d4a040;
  }
  .royal-mode .mrida-stack-label {
    color: #ffffd1;
  }
  .mrida-stack-list {
    list-style: none;
    padding: 0;
    margin: 0;
    font-size: 0.91em;
    line-height: 1.6;
  }
  .mrida-stack-list li {
    padding: 3px 0;
    color: #3a2e18;
    border-bottom: 1px solid rgba(200, 140, 0, 0.10);
    display: flex;
    gap: 7px;
    align-items: baseline;
    /* Allow text to wrap — don't clip */
    white-space: normal;
    word-break: break-word;
  }
  .dark-mode .mrida-stack-list li {
    color: #ddd;
    border-bottom-color: rgba(200, 150, 40, 0.12);
  }
  .royal-mode .mrida-stack-list li {
    color: #ffffff;
    border-bottom-color: rgba(240, 240, 240, 0.12);
  }
  .mrida-stack-list li:last-child {
    border-bottom: none;
  }
  .mrida-stack-list li::before {
    content: '·';
    color: #b07830;
    font-weight: 700;
    flex-shrink: 0;
  }
  .dark-mode .mrida-stack-list li::before {
    color: #d4a040;
  }
  .royal-mode .mrida-stack-list li::before {
    color: #ffffd1;
  }
  .mrida-specs {
    margin: 18px 0 20px;
    /* No fixed height — grow with content */
    padding: 16px 18px;
    border-radius: 14px;
    box-sizing: border-box;
    background: linear-gradient(135deg, rgba(255, 243, 217, 0.95), rgba(255, 249, 238, 0.96));
    border: 1px solid rgba(198, 146, 39, 0.18);
  }
  .dark-mode .mrida-specs {
    background: linear-gradient(135deg, rgba(56, 45, 26, 0.95), rgba(40, 32, 20, 0.96));
    border-color: rgba(212, 160, 64, 0.18);
  }
  .royal-mode .mrida-specs {
    background: linear-gradient(135deg, rgba(72, 70, 64, 0.7), rgba(50, 48, 43, 0.65));
    border-color: rgba(240, 240, 240, 0.15);
  }
  .mrida-specs h4 {
    margin: 0 0 12px;
    font-size: 0.98em;
    color: #8a5a00;
  }
  .dark-mode .mrida-specs h4 {
    color: #e0b45f;
  }
  .royal-mode .mrida-specs h4 {
    color: #ffffff;
  }
  /* Layout container: clearfix so it grows around floated image */
  .mrida-specs-layout {
    display: flow-root; /* modern clearfix — no overflow:hidden needed */
    min-height: 0;
    overflow: hidden;
  }
  /* Circuit diagram image — float right on desktop */
  .mrida-spec-figure {
    float: right;
    width: min(52%, 380px);
    margin: 4px 0 12px 22px;
  }
  /* On mobile: clear float, image goes full width centered above lists */
  @media (max-width: 700px) {
    .mrida-spec-figure {
      float: none;
      display: block;
      width: 100%;
      max-width: 100%;
      margin: 0 0 14px 0;
    }
    /* Remove the software toggle — show everything on mobile */
    .mrida-sw-toggle {
      display: none;
    }
    /* Both hardware and software always visible */
    .mrida-software-section {
      display: block !important;
    }
  }
  .mrida-sw-toggle {
    display: none; /* hidden everywhere — software is always visible */
  }
  .mrida-spec-figure img {
    width: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 18px rgba(0,0,0,0.14);
  }
  .mrida-spec-figure figcaption {
    margin-top: 8px;
    font-size: 0.82em;
    font-family: Georgia, Times, serif;
    color: #7a5c1e;
    text-align: center;
    line-height: 1.4;
  }
  .dark-mode .mrida-spec-figure figcaption {
    color: #c8a050;
  }
  .royal-mode .mrida-spec-figure figcaption {
    color: #ffffd1;
  }
  /* Gallery Horizontal Scroll */
  .project-gallery {
    display: flex;
    overflow-x: auto;
    gap: 20px;
    padding: 10px 5px 25px;
    scroll-snap-type: x mandatory;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    margin-top: 15px;
    align-items: stretch;
  }
  .project-gallery::-webkit-scrollbar { display: none; }
  .project-gallery figure {
    flex: 0 0 85%;
    max-width: 420px;
    margin: 0;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .project-gallery img {
    width: 100%;
    height: 220px;
    flex: 0 0 220px;
    object-fit: cover;
    border-radius: 10px;
    scroll-snap-align: start;
    box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: grab;
  }
  .project-gallery img:hover {
    transform: scale(1.035);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
  .project-gallery figcaption {
    margin-top: 8px;
    font-size: 0.9em;
    font-family: Georgia, Times, serif;
    color: #7a5c1e;
    font-weight: 500;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 5px;
    display: block;
    width: 100%;
    box-sizing: border-box;
  }
  .dark-mode .project-gallery figcaption { color: #c8a050; }
  .royal-mode .project-gallery figcaption { color: #ffffd1; }
  /* ── PDF Container – CSS Grid smooth animation ── */
  .pdf-wrapper {
    margin-top: 24px;
  }
  /* Toggle bar – sits above the animated container */
  .pdf-toggle-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 16px;
    border-radius: 12px 12px 0 0;
    background: linear-gradient(135deg, rgba(229, 149, 0, 0.55), rgba(255, 210, 120, 0.4));
    border: 1.5px solid rgba(185, 115, 0, 0.35);
    border-bottom: none;
    cursor: pointer;
    user-select: none;
    transition: background 0.3s ease;
  }
  .pdf-wrapper:not(.open) .pdf-toggle-bar {
    border-radius: 12px;
    border-bottom: 1.5px solid rgba(185, 115, 0, 0.35);
  }
  .royal-mode .pdf-wrapper:not(.open) .pdf-toggle-bar {
    border-bottom: 1.5px solid rgba(130, 130, 130, 0.35);
  }
  .dark-mode .pdf-toggle-bar {
    background: linear-gradient(to bottom, #3a3225, #2a2318);
    border-color: rgba(255, 210, 120, 0.25);
  }
  .royal-mode .pdf-toggle-bar {
    background: linear-gradient(to bottom, rgba(72, 70, 64, 0.85), rgba(50, 48, 43, 0.8));
    border-color: rgba(240, 240, 240, 0.2);
  }
  .pdf-toggle-bar-left {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .pdf-dots {
    display: flex;
    gap: 7px;
  }
  .pdf-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    cursor: pointer;
    flex-shrink: 0;
    transition: filter 0.2s ease;
  }
  .pdf-dot:hover { filter: brightness(1.2); }
  .dot-red { background: #ff5f56; }
  .dot-yel { background: #ffbd2e; }
  .dot-grn { background: #27c93f; }
  .pdf-toolbar-title {
    font-size: 0.8em;
    font-weight: 600;
    color: #5a3e00;
    pointer-events: none;
  }
  .dark-mode .pdf-toolbar-title { color: #c8a060; }
  .royal-mode .pdf-toolbar-title { color: #ffffd1; }
  .pdf-toggle-chevron {
    font-size: 0.78em;
    font-weight: 700;
    color: #8a5a00;
    transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1), color 0.2s ease;
    line-height: 1;
    pointer-events: none;
  }
  .dark-mode .pdf-toggle-chevron { color: #c8a060; }
  .royal-mode .pdf-toggle-chevron { color: #ffffd1; }
  .pdf-wrapper.open .pdf-toggle-chevron {
    transform: rotate(180deg);
  }
  /* CSS Grid outer – animated height */
  .pdf-grid-outer {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows 0.55s cubic-bezier(0.4, 0, 0.2, 1);
    border: 1.5px solid rgba(192, 115, 0, 0.3);
    border-top: none;
    border-radius: 0 0 14px 14px;
    background: #fff;
    overflow: hidden;
  }
  .dark-mode .pdf-grid-outer {
    border-color: #5a4520;
    background: #0e0c08;
  }
  .royal-mode .pdf-grid-outer {
    border-color: rgba(240, 240, 240, 0.2);
    background: #0d0d0c;
  }
  .pdf-wrapper.open .pdf-grid-outer {
    grid-template-rows: 1fr;
  }
  /* Inner: min-height:0 is mandatory for 0fr collapse */
  .pdf-grid-inner {
    min-height: 0;
    overflow: hidden;
    position: relative;
  }
  /* Loading shimmer overlay (matches Resume/CV pdf-viewer-wrap.loading). */
  .pdf-grid-inner.loading::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg,
      rgba(192, 115, 0, 0.03) 25%,
      rgba(192, 115, 0, 0.08) 50%,
      rgba(192, 115, 0, 0.03) 75%
    );
    background-size: 200% 100%;
    animation: pdfShimmer 1.5s infinite;
    pointer-events: none;
    z-index: 2;
  }
  .dark-mode .pdf-grid-inner.loading::after {
    background: linear-gradient(90deg,
      rgba(255, 210, 120, 0.02) 25%,
      rgba(255, 210, 120, 0.06) 50%,
      rgba(255, 210, 120, 0.02) 75%
    );
    background-size: 200% 100%;
  }
  .royal-mode .pdf-grid-inner.loading::after {
    background: linear-gradient(90deg,
      rgba(255, 255, 209, 0.02) 25%,
      rgba(255, 255, 209, 0.06) 50%,
      rgba(255, 255, 209, 0.02) 75%
    );
    background-size: 200% 100%;
  }
  @keyframes pdfShimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
  .responsive-pdf {
    width: 100%;
    height: 500px;
    border: none;
    display: block;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  .responsive-pdf.loaded {
    opacity: 1;
  }
  @media (max-width: 600px) {
    .responsive-pdf { height: 380px; }
  }
  @media (min-width: 900px) {
    .project-container {
      flex-direction: row;
      align-items: center;
    }
    .project-text, .project-image-box {
      flex: 1;
    }
    .project-gallery figure {
      flex: 0 0 45%;
    }
  }
  @media (max-width: 900px) {
    .mrida-float-visual {
      float: none;
      width: 100%;
      max-width: 420px;
      margin: 10px auto 18px;
    }
  }
  .royal-mode .page__content h2 { border-bottom: none !important; }
</style>

<div class="project-section" id="mrida"> 
  <h2>MRIDA 🌱</h2>
  <h3>Multipurpose Real-time Integrated Digital Analyzer</h3>
  <div style="margin-bottom: 20px; font-weight: 500; color: #a07830; font-size: 0.9em;" class="project-year">2023 - 2025</div>
  
  <div class="project-meta">
    <span>🐍 Python</span>
    <span>📱 MIT App Inventor</span>
    <span>🤖 AI & IoT</span>
    <span>🍓 Raspberry Pi 5</span>
    <span>🌱 AgriTech</span>
  </div>

  <div class="project-container">
    <div class="project-text">
      <div class="mrida-float-visual">
        <div class="mrida-flip-card" id="mrida-flip" title="Click to flip">
          <div class="mrida-flip-inner">
            <div class="mrida-flip-front">
              <img src="/images/mrida build.avif" width="1024" height="768" alt="MRIDA build front">
            </div>
            <div class="mrida-flip-back">
              <img src="/images/mridaback.avif" width="1024" height="768" alt="MRIDA build back">
            </div>
          </div>
        </div>
        <div class="mrida-image-note">Prototype I made · tap to flip</div>
        <script>
        (function() {
          var card = document.getElementById('mrida-flip');
          card.addEventListener('click', function() {
            card.classList.toggle('flipped');
          });
        })();
        </script>
      </div>
      <p><strong>MRIDA</strong> is an AI-powered project designed to help farmers easily check soil health and improve crop yields.</p>
      <p>It was created to measure soil pH, moisture, temperature, and nutrients while also providing weather alerts. It also had a built-in emergency service to contact concerned authorities and a speech-to-speech assistant to guide the user and provide insights.</p>
      <p>The software side was built using MIT App Inventor and Python, and the current prototype stack was planned around a portable Raspberry Pi based field unit with live sensing, imaging, connectivity, and GPS support.</p>
      <div class="mrida-specs">
        <div class="mrida-stack-collapsible" id="mrida-stack-toggle">
          <div class="mrida-stack-header" onclick="toggleMridaStack()">
            <h4>Prototype Build Stack</h4>
            <span class="mrida-stack-dash" id="mrida-stack-dash">—</span>
          </div>
          <div class="mrida-stack-body" id="mrida-stack-body">
            <div class="mrida-specs-layout">
              <figure class="mrida-spec-figure">
                <img src="/images/MRIDA diagram.avif" width="1024" height="768" alt="MRIDA circuit diagram">
                <figcaption>System and circuit overview for the current prototype.</figcaption>
              </figure>
              <div class="mrida-specs-text">
                <div class="mrida-stack-label">🔧 Hardware</div>
                <div class="mrida-stack-cols">
                  <ul class="mrida-stack-list">
                    <li>Raspberry Pi 5 (4GB)</li>
                    <li>Active Cooler</li>
                    <li>64GB microSDXC</li>
                    <li>7″ IPS LCD (1024×600)</li>
                    <li>Pi Camera Module 3</li>
                  </ul>
                  <ul class="mrida-stack-list">
                    <li>8-in-1 Soil Sensor</li>
                    <li>Quectel EC200U (4G + GPS)</li>
                    <li>NEO-6M GPS</li>
                    <li>20,000mAh Battery</li>
                  </ul>
                </div>
                <div class="mrida-software-section">
                <div class="mrida-stack-label" style="margin-top: 16px;">💻 Software</div>
                <div class="mrida-stack-cols">
                  <ul class="mrida-stack-list">
                    <li>MIT App Inventor</li>
                    <li>Python (backend + sensors)</li>
                    <li>scikit-learn (predictions)</li>
                    <li>OpenCV (imaging)</li>
                  </ul>
                  <ul class="mrida-stack-list">
                    <li>Speech-to-speech assistant</li>
                    <li>Emergency call/SMS alerts</li>
                    <li>4G/GSM + GPS connectivity</li>
                    <li>Weather + soil insights</li>
                  </ul>
                </div>
                </div>
                <span class="mrida-sw-toggle" onclick="this.previousElementSibling.classList.toggle('shown'); this.textContent = this.previousElementSibling.classList.contains('shown') ? 'Hide software ▴' : 'Show software ▾'">Show software ▾</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script>
      (function() {
        function toggleMridaStack() {
          var body = document.getElementById('mrida-stack-body');
          var dash = document.getElementById('mrida-stack-dash');
          var isOpen = body.classList.contains('open');
          if (isOpen) {
            body.classList.remove('open');
            dash.textContent = '|';
          } else {
            body.classList.add('open');
            dash.textContent = '—';
          }
          /* Pump footer push per frame for the 0.6s grid anim duration. */
          if (window.smoothFooterPush) window.smoothFooterPush(700);
        }
        window.toggleMridaStack = toggleMridaStack;
        /* Open by default */
        var body = document.getElementById('mrida-stack-body');
        body.classList.add('open');
      })();
      </script>
      <p class="notable">🏆 This project was also presented in:</p>
      <ul>
        <li><strong>Data and AI Talks 2023</strong> – Champion in Group C (Senior) category. Awarded a 9th Gen iPad, Trophy, AI-powered Rubik's Cube, and Certificates.</li>
        <li><strong>Youth Ideathon 2023</strong> – Selected among the Top 1,000 ideas nationwide.</li>
        <li><strong>INSPIRE Manak Awards 2023</strong> – Selected in the first stage and awarded ₹10,000.</li>
        <li><strong>Junior Smart India Hackathon 2023</strong> – Shortlisted for the Interview Round by the School Innovation Council and Ministry of Education's Innovation Cell.</li>
      </ul>
    </div>
  </div>

  <!-- Premium PDF Embed Document -->
  <div class="pdf-wrapper" id="mrida-pdf-wrapper">
    <!-- Toggle bar: click anywhere to open/close -->
    <div class="pdf-toggle-bar" id="mrida-pdf-toggle-bar">
      <div class="pdf-toggle-bar-left">
        <div class="pdf-dots">
          <div class="pdf-dot dot-red" id="pdf-dot-close" title="Close"></div>
          <div class="pdf-dot dot-yel" id="pdf-dot-min" title="Close"></div>
          <div class="pdf-dot dot-grn" id="pdf-dot-open" title="Open"></div>
        </div>
        <div class="pdf-toolbar-title">mrida.pdf</div>
      </div>
      <span class="pdf-toggle-chevron" id="mrida-pdf-chevron">▼</span>
    </div>
    <div class="pdf-grid-outer" id="mrida-pdf-grid-outer">
      <div class="pdf-grid-inner" id="mrida-pdf-grid-inner">
        <iframe class="responsive-pdf" id="mrida-pdf-frame" title="MRIDA Presentation"></iframe>
      </div>
    </div>
  </div>

  <script>
  (function() {
    var wrapper   = document.getElementById('mrida-pdf-wrapper');
    var toggleBar = document.getElementById('mrida-pdf-toggle-bar');
    var frame     = document.getElementById('mrida-pdf-frame');
    var inner     = document.getElementById('mrida-pdf-grid-inner');
    var dotClose  = document.getElementById('pdf-dot-close');
    var dotMin    = document.getElementById('pdf-dot-min');
    var dotOpen   = document.getElementById('pdf-dot-open');
    var isOpen    = false;
    var srcLoaded = false;

    /* No eager preload: load src AFTER box opens (user requested behavior).
       Loading shimmer (.loading::after) provides visual feedback while iframe
       fetches, exactly like Resume/CV pattern. Keeps initial page weight
       small + avoids invisible iframe rendering during the height anim. */
    frame.addEventListener('load', function() {
      if (frame.src && frame.src !== 'about:blank') {
        inner.classList.remove('loading');
        frame.classList.add('loaded');
      }
    });

    function pumpFooter() {
      if (window.smoothFooterPush) window.smoothFooterPush(700);
    }

    function openPdf() {
      if (isOpen) return;
      isOpen = true;
      pumpFooter(); /* per-frame footer push during 0.6s grid anim */
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          wrapper.classList.add('open');
          /* After height anim done: trigger src load (or fade-in if cached). */
          setTimeout(function() {
            if (!srcLoaded) {
              inner.classList.add('loading');
              frame.src = '/_pages/pdf-view.html';
              srcLoaded = true;
            } else {
              frame.classList.add('loaded');
            }
          }, 620);
        });
      });
    }

    function closePdf() {
      if (!isOpen) return;
      isOpen = false;
      frame.classList.remove('loaded');
      inner.classList.remove('loading');
      pumpFooter(); /* per-frame footer push during close */
      requestAnimationFrame(function() {
        wrapper.classList.remove('open');
        /* Keep src after first load so re-open is instant. */
      });
    }

    function togglePdf() {
      if (isOpen) { closePdf(); } else { openPdf(); }
    }

    toggleBar.addEventListener('click', togglePdf);

    dotClose.addEventListener('click', function(e) { e.stopPropagation(); closePdf(); });
    dotMin.addEventListener('click', function(e) { e.stopPropagation(); closePdf(); });
    dotOpen.addEventListener('click', function(e) { e.stopPropagation(); openPdf(); });
  })();
  </script>

</div>

<div class="project-section" id="matrix">
  <h2>MATRIX 🤖</h2>
  <h3>A JARVIS Inspired Voice and Text Activated Assistant</h3>
  <div style="margin-top: 0px; margin-bottom: 15px; font-weight: 500; color: #a07830; font-size: 0.9em;" class="project-year">2021 - 2022</div>

  <div class="project-meta">
    <span>🐍 Python</span>
    <span>🖥️ Tkinter GUI</span>
    <span>🎙️ MS Voice Pack</span>
  </div>

  <div class="project-container">
    <div class="project-text">
      <p><strong>MATRIX</strong> is a speech-to-speech, text-to-speech, and speech-to-text desktop voice assistant built using Python, Tkinter, and Microsoft Voice Pack.</p>
      <p>I programmed and built it when I was in 8th grade, referring to various videos on rule-based chatbots, and designed the complete Tkinter window by myself.</p>
      <p>It also supported text-to-text interaction, featuring a quick-glance home screen with weather, top 5 tech news, time and date, my location, and additional windows for other overviews.</p>
      <p><em>(I might have been a little too inspired by Iron Man and The Matrix movies, lol.)</em></p>
    </div>
  </div>

  <!-- Premium Horizontal Gallery -->
  <div class="project-gallery">
    <figure>
      <img src="/images/handdrawn.avif" width="1200" height="692" alt="MATRIX Hand-drawn mockup">
      <figcaption>My precise hand-drawn conceptual interface mockup</figcaption>
    </figure>
    <figure>
      <img src="/images/matrixday.avif" width="1200" height="639" alt="MATRIX Day Mode GUI">
      <figcaption>The finalized Light Mode GUI state</figcaption>
    </figure>
    <figure>
      <img src="/images/matrixnight.avif" width="1200" height="639" alt="MATRIX Night Mode GUI">
      <figcaption>The finalized Dark Mode GUI state</figcaption>
    </figure>
  </div>
</div>

{% include horizontal-scroll-keys.html %}
