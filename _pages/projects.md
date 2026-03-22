---
permalink: /projects/
title: "🧰 Projects"
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
    <img src="/images/airavat.webp" alt="Airavat Image">
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
    <img src="/images/con.webp" alt="Conputer OS Image">
  </div>

  <div class="conos-text">
    <ul>
      <li>A Debian-based personal operating system currently being developed by me with a Green Beetle as its logo and various system components named after Egyptian and Indian inspirations.</li>
      <li>The name is inspired from an old ChatGPT meme.</li>
    </ul>
  </div>
</div>
-->

<style>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');

  /* Base Project Section */
  .project-section {
    margin-bottom: 50px;
    animation: fadeInUp 0.8s ease forwards;
    opacity: 0;
    position: relative;
    border-radius: 16px;
    padding: 25px 30px;
    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 100%);
    box-shadow: 0 4px 24px rgba(192, 115, 0, 0.06);
    border: 1.5px solid rgba(232, 199, 116, 0.4);
    box-sizing: border-box;
  }
  
  .dark-mode .project-section {
    background: linear-gradient(135deg, rgba(30,26,20,0.6) 0%, rgba(20,16,10,0.3) 100%);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    border: 1.5px solid rgba(90, 69, 32, 0.4);
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
    transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }
  .project-image-box img:hover {
    transform: translateY(-6px) scale(1.02);
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
    height: 220px;
    flex: 0 0 auto;
    object-fit: cover;
    border-radius: 10px;
    scroll-snap-align: start;
    box-shadow: 0 6px 15px rgba(0,0,0,0.12);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    cursor: grab;
  }
  .project-gallery img:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }
  
  .project-gallery figcaption {
    margin-top: 8px;
    font-size: 0.9em;
    color: #666;
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
  .dark-mode .project-gallery figcaption { color: #d4a040; }

  /* PDF Container Vibe */
  .pdf-wrapper {
    margin-top: 30px;
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    border: 1.5px solid rgba(192, 115, 0, 0.2);
    background: #fff;
  }
  .dark-mode .pdf-wrapper {
    border-color: #5a4520;
  }
  .pdf-toolbar {
    height: 36px;
    background: linear-gradient(to bottom, #f6f6f6, #e0e0e0);
    display: flex;
    align-items: center;
    padding: 0 14px;
    border-bottom: 1px solid #ccc;
  }
  .dark-mode .pdf-toolbar {
    background: linear-gradient(to bottom, #3a3225, #2a2318);
    border-bottom: 1px solid #1a150e;
  }
  .pdf-dots {
    display: flex;
    gap: 7px;
  }
  .pdf-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
  }
  .dot-red { background: #ff5f56; }
  .dot-yel { background: #ffbd2e; }
  .dot-grn { background: #27c93f; }
  
  .pdf-toolbar-title {
    flex: 1;
    text-align: center;
    font-size: 0.8em;
    font-weight: 600;
    color: #666;
    margin-left: -50px; /* Centering offset */
  }
  .dark-mode .pdf-toolbar-title { color: #aaa; }

  .responsive-pdf {
    width: 100%;
    height: 650px;
    border: none;
    display: block;
  }

  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
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
</style>

<div class="project-section" id="mrida"> 
  <h2>MRIDA 🌱</h2>
  <h3>Multipurpose Real-time Integrated Digital Analyzer</h3>
  <div style="margin-bottom: 20px; font-weight: 500; color: #a07830; font-size: 0.9em;">2023 - 2025</div>
  
  <div class="project-meta">
    <span>🐍 Python</span>
    <span>📱 MIT App Inventor</span>
    <span>🤖 AI & IoT</span>
    <span>🍓 Raspberry Pi 5</span>
    <span>🌱 AgriTech</span>
  </div>

  <div class="project-container">
    <div class="project-text">
      <p><strong>MRIDA</strong> is an AI-powered project designed to help farmers easily check soil health and improve crop yields.</p>
      <p>It was created to measure soil pH, moisture, temperature, and nutrients while also providing weather alerts. It also had a built-in emergency service to contact concerned authorities and a speech-to-speech assistant to guide the user and provide insights.</p>
      <p>While the hardware was not developed, the MRIDA app was successfully built using MIT App Inventor and Python to analyze soil conditions and offer useful AI-driven insights.</p>
      
      <p class="notable">🏆 This project was also presented in:</p>
      <ul>
        <li><strong>Data and AI Talks 2023</strong> – Champion in Group C (Senior) category. Awarded a 9th Gen iPad, Trophy, AI-powered Rubik's Cube, and Certificates.</li>
        <li><strong>Youth Ideathon 2023</strong> – Selected among the Top 1,000 ideas nationwide.</li>
        <li><strong>INSPIRE Manak Awards 2023</strong> – Selected in the first stage and awarded ₹10,000.</li>
        <li><strong>Junior Smart India Hackathon 2023</strong> – Shortlisted for the Interview Round by the School Innovation Council and Ministry of Education's Innovation Cell.</li>
      </ul>
    </div>
    
    <div class="project-image-box">
      <img src="/images/mridaimg.webp" alt="MRIDA Project Concept">
      <div class="ai-label">Initial Concept Layout Generated with AI</div>
    </div>
  </div>

  <!-- Premium PDF Embed Document -->
  <div class="pdf-wrapper">
    <div class="pdf-toolbar">
      <div class="pdf-dots">
        <div class="pdf-dot dot-red"></div>
        <div class="pdf-dot dot-yel"></div>
        <div class="pdf-dot dot-grn"></div>
      </div>
      <div class="pdf-toolbar-title">mrida-research-deck.pdf</div>
    </div>
    <iframe src="/_pages/pdf-view.html" class="responsive-pdf" title="MRIDA Presentation"></iframe>
  </div>

</div>

<div class="project-section" id="matrix">
  <h2>MATRIX 🤖</h2>
  <h3>A JARVIS Inspired Voice and Text Activated Assistant</h3>
  <div style="margin-top: 0px; margin-bottom: 15px; font-weight: 500; color: #a07830; font-size: 0.9em;">2021 - 2022</div>

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
      <img src="/images/handdrawn.webp" alt="MATRIX Hand-drawn mockup">
      <figcaption>My precise hand-drawn conceptual interface mockup</figcaption>
    </figure>
    <figure>
      <img src="/images/matrixday.webp" alt="MATRIX Day Mode GUI">
      <figcaption>The finalized Light Mode GUI state</figcaption>
    </figure>
    <figure>
      <img src="/images/matrixnight.webp" alt="MATRIX Night Mode GUI">
      <figcaption>The finalized Dark Mode GUI state</figcaption>
    </figure>
  </div>
</div>
