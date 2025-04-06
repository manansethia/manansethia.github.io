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
    gap: 0px;
    padding: 0 10px;
  }

  .episode-card {
    flex: 0 0 auto;
    width: 180px;
    display: flex;
    flex-direction: column;
    text-decoration: none;
    text-align: center;
    max-width: auto;
  }

  @media screen and (max-width: 600px) {
    .episode-card {
      max-width: 100%;
    }
  }

  .episode-card img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 6px;
    object-fit: contain;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .episode-card img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .episode-card span {
    margin-top: 0.4em;
    font-size: 0.9em;
    color: #b84d00;
    font-weight: 600;
    text-align: center;
    white-space: normal;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    max-width: 100%;
    padding: 0 0.4em;
  }

  @media (min-width: 1024px) {
    .episode-card img {
      height: 180px;
    }
  }

  .achievement-section h2 {
    font-size: 1.225em;
    border-bottom: none !important;
    margin-top: 6px;
    margin-bottom: 0;
  }

  .achievement-section h3 {
    font-size: 1.175em;
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
  }

  .achievement-images::-webkit-scrollbar {
    display: none;                
  }

  .achievement-images img {
    height: 160px;
    flex: 0 0 auto;
    border-radius: 10px;
    object-fit: contain;
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
    margin: 10px 0;
    flex-wrap: wrap; /* fallback on narrow screens */
  }

  .achievement-images-text img {
    height: 140px;
    width: auto;
    border-radius: 8px;
    flex-shrink: 0;
  }

  .achievement-caption {
    font-size: 0.9em;
    line-height: 1.5;
    min-width: 200px;
    flex: 1;
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
</style>

<!-- Achievements Section -->

<div class="achievement-section">
  <h2>🏏 Fit India Quiz 2021 – Season 1</h2>
  <p>
    The inaugural Fit India Quiz, launched in September 2021 as part of the Fit India Movement, aimed to promote fitness and sports awareness among school children across India. The preliminary rounds witnessed participation from 36,299 students representing 13,502 schools nationwide. Following these rounds, 360 schools advanced to the state-level competitions. Ultimately, 36 schools, each representing a different State or Union Territory, progressed to the National Finals. It was hosted by the CBSE in collaboration with the Ministry of Youth Affairs and Sports, and was nationally broadcast by Star India.
  </p>

  <h3>📺 Selected for National Rounds – Mumbai</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>June 2022</em>
  </div>
  <div class="achievement-images">
    <div class="achievement-images-text">
      <img src="/images/sc.jpg" alt="FIQ '21" style="width: auto;">
      <div class="achievement-caption">
        Felicitation for being State Champions by Anurag Singh Thakur, then Minister of Youth Affairs and Sports.
      </div>
    </div>
  </div>

  <div class="episode-container">
    <a href="https://www.hotstar.com/in/shows/fit-india-quiz/1260112749/fit-india-quiz-season-1-episode-4/1260113050/watch" class="episode-card">
      <img src="/images/nr.png" alt="National Rounds" style="width: auto;">
      <span>Fit India Quiz – National Rounds | Season 1, Episode 4</span>
    </a>
  </div>

  <h3>🎖️ State Champions – Chhattisgarh</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>February 2022</em>
  </div>
  <p>Partnering with Ishant Talreja, we emerged as the Chhattisgarh State Champions after winning both the State Semi-Final and the State Final.</p>
  <p>Eight school teams were selected for the State Semi-Finals, from which two teams from each semi-final advanced to the State Final.</p>

  <div class="quiz-episodes-scroll">
    <div class="episode-container">
      <a href="https://youtube.com/watch?v=olKrkkhQNNM" class="episode-card">
        <img src="/images/sf.jpg" alt="State Final" style="width: auto;">
        <span>Fit India Quiz – State Final | Chhattisgarh</span>
      </a>
      <a href="https://youtube.com/watch?v=jmTjf5EvejA" class="episode-card">
        <img src="/images/ssf.jpg" alt="State Semi-Final" style="width: auto;">
        <span>Fit India Quiz – State Semi-Final 2 | Chhattisgarh</span>
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


```
For links
<div class="quiz-episodes-scroll">
  <div class="episode-container">
    <!-- Episode 1 -->
    <a href="/quiz/episode1" class="episode-card">
      <img src="/images/episode1-thumb.jpg" alt="Episode 1">
      <span>Episode 1: West Region</span>
    </a>

    <!-- Episode 2 -->
    <a href="/quiz/episode2" class="episode-card">
      <img src="/images/episode2-thumb.jpg" alt="Episode 2">
      <span>Episode 2: East Region</span>
    </a>

    <!-- Add more episodes here -->
  </div>
</div>
```
https://www.hotstar.com/in/shows/fit-india-quiz/1260112749/fit-india-quiz-season-1-episode-4/1260113050/watch