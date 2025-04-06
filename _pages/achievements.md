---
permalink: /achievements/
title: "Achievements"
author_profile: true
redirect_from: 
  - /achievements.html
---

<style>
  .quiz-episodes-scroll {
    overflow-x: auto;
    overflow-y: hidden;
    margin: 16px 0;
    padding: 10px 0;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
  }

  .quiz-episodes-scroll::-webkit-scrollbar {
    display: none;
  }

  .episode-container {
    display: flex;
    gap: 10px;
    align-items: center;
    justify-content: center;
  }

  .episode-card {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    text-align: center;
    justify-content: center;
  }

  .episode-card img {
    height: 180px;
    flex: 0 0 auto;
    border-radius: 10px;
    object-fit: cover;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 1;
  }

  .episode-card img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .episode-card span {
    margin-top: 0.4em;
    font-size: 0.9em;
    color:rgb(232, 113, 28);
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    align-items: center;
  }

  .achievement-section h2 {
    font-size: 1.235em;
    border-bottom: none !important;
    margin-top: 6px;
    margin-bottom: 0;
  }

  .achievement-section h3 {
    font-size: 1.12em;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .achievement-section {
    margin-top: 7px;
    margin-bottom: 12px;
    animation: fadeInUp 1s ease forwards;
    opacity: 0;
  }

  .achievement-section.visible {
    opacity: 1;
  }

  .achievement-section h3 {
    margin-bottom: 5px;
  }

  .achievement-section p {
    margin: 6px 0; 
    line-height: 1.5;
  }

  .achievement-meta {
    font-size: 0.9em;
    color: rgb(30, 15, 0);
    margin-bottom: 8px;
  }

  .achievement-images {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden; 
    padding: 15px 0;
    gap: 10px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    scrollbar-gutter: stable both-edges;
    -webkit-overflow-scrolling: touch;      
    margin-top: 4px;
    margin-bottom: 4px;
    justify-content: center;
  }

  .achievement-images::-webkit-scrollbar {
    display: none;                
  }

  .achievement-images img {
    gap: 10px;
    height: 180px;
    flex: 0 0 auto;
    border-radius: 10px;
    object-fit: cover;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 1;
  }

  .achievement-images img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px hsla(0, 0.00%, 0.00%, 0.20);
  }

  .achievement-images-text {
    display: flex;
    align-items: center;
    gap: 15px;
    flex-wrap: wrap; /* fallback on narrow screens */
    margin-top: 16px;
    margin-bottom: 18px;
    justify-content: center;
  }

  .achievement-images-text img {
    height: auto;
    width: 95%;
    border-radius: 8px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
  }

  .achievement-images-text img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px hsla(0, 0.00%, 0.00%, 0.20);
  }

  .achievement-caption {
    font-size: 0.9em;
    flex: 1;
    text-align: center;
  }

  hr.silver-line {
    border: none;
    height: 1.5px;
    background-color: rgb(122, 91, 63);
    margin: 0 0 20px 0;
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(15px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (min-width: 1024px) {
    .achievement-images img {
      height: 180px;
      min-width: 20%;
    }
  }

  .dashed-line {
    border-top: 1px dashed rgb(215, 167, 108);
    width: 100%;
    margin-top: 20px; 
  }
</style>

<!-- Achievements Section -->

<div class="achievement-section">
  <h2>🏏 Fit India Quiz 2021 – Season 1</h2>
  <div class="achievement-meta">
    🏢 <em>Organized by the Ministry of Youth Affairs and Sports in collaboration with Central Board of Secondary Education and nationally broadcasted by Star India Group.</em><br>
  </div>
  <p> The inaugural Fit India Quiz, launched in September 2021 as part of the Fit India Movement, aimed to promote fitness and sports awareness among school children across India.</p> 
  <p>The preliminary rounds witnessed participation from 36,299 students representing 13,502 schools nationwide. </p>
  <p>Following these rounds, 360 schools advanced to the state-level competitions.</p> 
  <p>Ultimately, 36 schools, each representing a different State or Union Territory, progressed to the National Finals.</p>

  <div class="dashed-line"></div>

  <h3>📺 Selected for National Rounds – Mumbai</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>June 2022</em>
  </div>
  <p>Our quarter-final featured teams from Gujarat, Sikkim, Chhattisgarh, and Tamil Nadu.</p>
  <p>The team from Tamil Nadu won, and we (Chhattisgarh) secured second place.</p>
  <div class="achievement-images-text">
    <img src="/images/sc.jpg" alt="FIQ '21">
      <div class="achievement-caption">
        Felicitation for being State Champions by Anurag Singh Thakur, then Minister of Youth Affairs and Sports in Mumbai.
      </div>
  </div>

  <div class="episode-container">
    <a href="https://www.hotstar.com/in/shows/fit-india-quiz/1260112749/fit-india-quiz-season-1-episode-4/1260113050/watch" class="episode-card">
      <img src="/images/nr.png" alt="National Rounds">
      <span>Fit India Quiz – National Rounds<br>Season 1, Episode 4</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>🏆 State Champions – Chhattisgarh</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>February 2022</em>
  </div>
  <p>Partnering with Ishant Talreja, we emerged as the Chhattisgarh State Champions after winning both the State Semi-Final and the State Final.</p>
  <p>Eight school teams were selected for the State Semi-Finals, from which two teams from each semi-final advanced to the State Final.</p>

  <div class="quiz-episodes-scroll">
    <div class="episode-container">
      <a href="https://youtube.com/watch?v=olKrkkhQNNM" class="episode-card">
        <img src="/images/sf.jpg" alt="State Final">
        <span>Fit India Quiz – State Final<br>Chhattisgarh</span>
      </a>
      <a href="https://youtube.com/watch?v=jmTjf5EvejA" class="episode-card">
        <img src="/images/ssf.jpg" alt="State Semi-Final">
        <span>Fit India Quiz – State Semi-Final 2<br>Chhattisgarh</span>
      </a>
    </div>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐼 Zonal 2nd Runner-Up – Senior Wild Wisdom Quiz 2019</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>October 2019</em>
  </div>
  <p>Upon entering 6th grade, I became eligible for the senior category of the Wild Wisdom Quiz. </p>
  <p>Partnering with Utkarsh Dewangan, then in 8th grade, we competed together and secured the position of Zonal 2nd Runner-Up.</p>
  <div class="achievement-images">
    <img src="/images/wwq191.jpg" alt="WWQ '19">
    <img src="/images/wwq192.jpg" alt="WWQ '19">
    <img src="/images/wwq193.jpg" alt="WWQ '19">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐼 Zonal 1st Runner-Up – Junior Wild Wisdom Quiz 2018</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>September 2018</em>
  </div>
  <p>The Wild Wisdom Quiz, initiated by WWF-India in 2008, is a renowned competition focusing on wildlife and environmental awareness.</p>
  <p>In 5th grade, I participated alongside my teammate, Agriyan Maulik, who was then in 4th grade. The quiz featured teams from Chhattisgarh and Madhya Pradesh. Together, we achieved the position of Zonal 1st Runner-Up.</p>
  <div class="achievement-images">
    <img src="/images/wwq181.jpeg" alt="WWQ '18">
    <img src="/images/wwq182.jpeg" alt="WWQ '18">
    <img src="/images/wwq183.jpeg" alt="WWQ '18">
  </div>
</div>

