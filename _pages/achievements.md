---
permalink: /achievements/
title: "🏆 Achievements"
author_profile: true
---

<style>
  a {
    text-decoration: none !important;
    border: none !important;
    outline: none !important;
  }

  .sidebar {
    z-index: 10;
  }  

  .quiz-episodes-scroll {
    overflow-x: auto;
    overflow-y: hidden;
    margin: 16px 0;
    padding: 10px 0;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    z-index: 0;
  }

  .quiz-episodes-scroll::-webkit-scrollbar {
    display: none;
  }

  .episode-container {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .episode-card {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    text-align: center;
    text-decoration: none;
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
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 7px;
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
    text-decoration: none !important;
    outline: none !important;
  }

  .episode-card-news {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
    text-align: center;
    text-decoration: none;
  }

  .episode-card-news img {
    height: 180px;
    flex: 0 0 auto;
    border-radius: 10px;
    object-fit: cover;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 1;
    text-decoration: none;
    margin-top: 10px;
    margin-bottom: 7px;
  }

  .episode-card-news img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
  }

  .episode-card-news span {
    margin-top: 0.4em;
    font-size: 0.9em;
    color: #000000;
    font-weight: 600;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    word-wrap: break-word;
    align-items: center;
    text-decoration: none !important;
    outline: none !important;
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
    position: relative;
  }

  .achievement-section.visible {
    opacity: 1;
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
    padding: 15px 10px;
    gap: 15px;
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
    gap: 10px;
    height: 220px;
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
    margin-top: 16px;
    margin-bottom: 18px;
    justify-content: center;
    margin-top: 0.4em;
    font-size: 0.9em;
    font-weight: 600;
    text-align: center;
    text-overflow: ellipsis;
    word-wrap: break-word;
    text-decoration: none !important;
    outline: none !important;
    flex: 0 0 auto;
    flex-direction: column;
    color: #000000
  }

  .achievement-images-text img {
    height: auto;
    width: 75%;
    min-width: 335px;
    border-radius: 10px;
    flex-shrink: 0;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
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
    background-color: #c07300;
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
    border-top: 1px dashed;
    color: #c07300;
    width: 100%;
    margin-top: 20px; 
  }
</style>

<!-- Achievements Section -->
<div class="achievement-section">
  <h2>👨‍💻 Winner of Code 2 Champions - Innovritti 1.0</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Institute of Technology and Management, Raipur</em><br>
    🗓️ <em>April 2025</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>Innovritti 1.0 was the first inter-college competition organized by ITM University, Raipur.</p>
  <p>A handful of school students also participated in the contests (I was one of them).</p>
  <p>I took part in the "Code 2 Champions" coding competition, which consisted of three rounds covering SQL mind maps, queries, and databases, with the final round including DSA integration. Over 20 individuals and teams participated, almost all of them college students.</p>
  <p>I was the only school student in the competition and emerged as the champion, winning a prize of ₹3000.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🌏 Winner of Earth Day Quiz 2025 - NEHU Shillong</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by North Eastern Hill University Shillong</em><br>
    🗓️ <em>April 2025</em><br>
    📍 <em>Online</em>
  </div>
  <p>This was an online quiz organized by North-Eastern Hill University, Shillong, which hosted the INESO Camp 2024.</p>
  <p>The quiz saw around 200 participants from across India. The program also featured two insightful lectures by members of the Geological Society of India on Geothermal Energy and Green Hydrogen.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 All India Rank 10 - HPE Codewars 2025 India Edition</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Hewlett Packard Enterprise and Codingal</em><br>
    🗓️ <em>April 2025</em><br>
    📍 <em>Online</em>
  </div>
  <p>HPE CodeWars is a 3-hour online coding competition organized by Codingal on their platform.</p>
  <p>Over 23,000 students participated, and I secured the 10th position, earning a keyboard as a prize.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>✉️ Selective Invitation - Harvard Undergraduate Ventures-TECH Summer Program 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Technology and Entrepreneurship Center at Harvard</em><br>
    🗓️ <em>February 2025</em><br>
    📍 <em>Online</em>
  </div>
  <p>Harvard Undergraduate Ventures-TECH Summer Program is the premier high school innovation academy which provides students with hands-on experience by working with leading startups and mentorship from world-renowned CEOs, investors, and Harvard faculty.</p>
  <p>I was identified by one of their partner organizations as a strong fit for the 2025 program.</p>
  <p>I applied for the program but was not selected for the cohort.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🇮🇳 Qualified for National Camp - Indian National Earth Science Olympiad 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Geological Society of India</em><br>
    🗓️ <em>March 2025</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>For the second consecutive year, I qualified for the Indian National Camp for the International Earth Science Olympiad (IESO). Driven by my continued passion for Earth science, I chose to take the exam again in 2025 to challenge myself.</p>
  <p>Since I had already represented India in IESO 2024, I was not eligible to be selected again for the international team.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🦋 Selected for International Quantum Research - BeyondQuantum 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by ThinkingBeyond</em><br>
    🗓️ <em>March 2025</em><br>
    📍 <em>Online</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🤖 Qualified for Stage 2 - The India Artificial Intelligence Olympiad</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Association for Computing Machinery, Pune, India</em><br>
    🗓️ <em>January 2025</em><br>
    📍 <em>Online</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🎖️ Felicitated as One of India's Esteemed International Olympiad Medalists of 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Homi Bhabha Centre for Science Education and Tata Institute of Fundamental Research.</em><br>
    🗓️ <em>December 2024</em><br>
    📍 <em>Mumbai, Maharashtra</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Zonal Topper - Zonal Computing Olympiad</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Indian Association for Research in Computing Science</em><br>
    🗓️ <em>December 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>📱 Runner-Up of Nagpur region - TCS InQuizitive 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Tata Consultancy Services</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Nagpur, Maharashtra</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Winner of Coding Competition - Nexus 2K24</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Shri Shankaracharya Institute of Professional Management and Technology</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Runner-up of Technical Quiz - Nexus 2K24</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Shri Shankaracharya Institute of Professional Management and Technology</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🧠 Winner of General Knowledge Quiz - Mindspark 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Brighton International School</em><br>
    🗓️ <em>October 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🏅 Special Mention (United Nations General Assembly) - KPS Model United Nations 3.0</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Krishna Public School Kamal Vihar</em><br>
    🗓️ <em>October 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🌏 International Earth Science Olympiad 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Organized by the International Geoscience Education Organisation (IGEO) </em><br>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>💳 Zonal Winner - National Financial Literacy Quiz 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Securities and Exchange Board of India (SEBI)</em><br>
    🗓️ <em>May 2024</em><br>
    📍 <em>Online</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🧪 Certificate of High Distinction - International Chemistry Quiz 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Royal Australian Chemical Institute</em><br>
    🗓️ <em>March 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>


<hr class="silver-line" />

<div class="achievement-section">
  <h2>💡 Selected in the First Stage - ATL Inspire Manak Awards 2023-24</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Department of Science and Technology (DST) Government of India</em><br>
    🗓️ <em>February 2024</em><br>
    📍 <em>Online</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>💡 Idea selected for the National Rounds - Junior Smart India Hackathon 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Ministry of Education's Innovation Cell Government of India</em><br>
    🗓️ <em>January 2024</em><br>
    📍 <em>Online</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🛕 Bhubaneswar region Runner-Up - CBSE Heritage India Quiz 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Central Board of Secondary Education</em><br>
    🗓️ <em>December 2023</em><br>
    📍 <em>Bhubaneswar, Odisha</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Winner of Technical Quiz - Nexus 2K23</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Shri Shankaracharya Institute of Professional Management and Technology</em><br>
    🗓️ <em>November 2023</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🥎 Ultimate Sports Quiz</h2>
  <div class="achievement-meta">
    🏢 <em>Organized by the Super Six Sports Gaming Private Limited (SSSG) in collaboration with and nationally broadcasted by the Viacom18 Media Pvt. Ltd. – Jiohotstar.</em><br>
  </div>

  <p>Ultimate Sports Quiz was the most premium sports quiz show of India, which wanted to foster "a little sporting culture in India" by engaging students not just as players but as knowledgeable sports enthusiasts.</p>
  <p>The 2023 edition was the 2nd season of the quiz, and it featured the top 36 teams shortlisted through a selection test from across 4000 teams and 350 cities across the county.</p>
  <p>This competition is also an endeavor to support grass root level sports development as the top three teams that reach the national finals will be awarded a total prize pool of INR 1 Crore approx.</p>
  <p>The format of the quiz is modelled on the Olympic motto of – Citius, Altius, Fortius. The three rounds are designed to test speed and accuracy, depth of knowledge and ability to perform under pressure.</p>
  <p>My partner Ameya Tamaskar and I represented our school in all the rounds, ultimately finishing as the National 2nd Runners-Up. We were awarded Apple M1 MacBook Airs, and our school received ₹10,00,000.</p>

  <div class="achievement-images-text">
    <img src="/images/usq.jpeg" alt="Ultimate Sports Quiz">
  </div>

  <div class="dashed-line"></div>

  <h3>🥳 National Grand Finale - 2nd Runners-Up</h3>

  <p>National Grand Finale featured KPS Kamal Vihar (our team), BHS Kolkata, and Tagore International (VV), New Delhi.</p>
  <p>We scored 50 points and emerged as the National 2nd Runner-Ups.</p>
  <p><strong>😆 Fun Fact:</strong> The team we defeated in the Semi-Finals (BHS Kolkata) were the lucky losers of the Semi Finals, and then went on to defeat us in the National Finals! Also, Tagore International was the second lucky loser of Zonal Finals.</p>

  <div style="text-align: center; margin-top: 10px;">
    <img src="https://cdn.emojis.com/emoji/yoda-yoga-ft4PUIN4Qb.png" alt="Yoda Yoga Emoji" style="height: 1em; vertical-align: middle;">
    <strong>Hmmm… the National Finale, for lucky losers it became.</strong>
  </div>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.hotstar.com/in/shows/ultimate-sports-quiz/1971003789/final/1971301232/watch?search_query=ultimate+sports+quiz" class="episode-card">
      <img src="/images/usqnf.jpg" alt="National Finals" style="width: 335px;">
      <span>USQ 2023<br>National Grand Finale</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 Semi-Final 1 Winners</h3>

  <p>Semi Final - 1 featured KPS Kamal Vihar (our team), St. Francis Hazratganj, Lucknow, and BHS Kolkata.</p>
  <p>We scored 130 points and emerged as the winners of the round.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.hotstar.com/in/shows/ultimate-sports-quiz/1971003789/semi-final-1/1971301234/watch?search_query=ultimate+sports+quiz" class="episode-card">
      <img src="/images/usqsf1.jpg" alt="Semi Final 1" style="width: 335px;">
      <span>USQ 2023<br>Semi Final - 1</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 West Zone Final's Lucky Losers</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Super Six Sports Gaming Private Limited</em><br>
    🗓️ <em>September 2023</em><br>
    📍 <em>Mumbai</em>
  </div>

  <p>West Zone Finals featured KPS Kamal Vihar (our team), DPS Kolar, Bhopal, and St. Anthony's Sen. Sec. School, Udaipur.</p>
  <p>We scored 90 points and lagged behind the winner of the round by 10 points and were given the title of lucky losers.</p>
  <p>The lucky losers were the two highest scoring teams, excluding the winners of the four Zonal Rounds. These teams received a wildcard entry into the semi-finals.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.hotstar.com/in/shows/ultimate-sports-quiz/1971003789/final-west-zone/1971301035/watch" class="episode-card">
      <img src="/images/usqwzf.jpg" alt="Zonal Finals" style="width: 335px;">
      <span>USQ 2023<br>West Zone Finals</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 West Zone Preliminary Round Winner</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Super Six Sports Gaming Private Limited</em><br>
    🗓️ <em>September 2023</em><br>
    📍 <em>Mumbai</em>
  </div>

  <p>Our preliminary round featured KPS Kamal Vihar (our team), Kendriya Vidyalaya Bhandup, Mumbai, and Bhatikar Model High School, Goa.</p>
  <p>We scored 130 points and emerged as the winners of the round.</p>
  <p><strong>😆 Fun Fact:</strong> This episode was supposed to be aired and uploaded on 1st December 2023 but, was uploaded a day earlier on 30th November 2023, which was my birthday lol.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.hotstar.com/in/shows/ultimate-sports-quiz/1971003789/preliminary-round-west-zone/1971301085/watch?search_query=ultimate+sports+quiz" class="episode-card">
      <img src="/images/usqwp.jpg" alt="Prelims" style="width: 335px;">
      <span>USQ 2023<br>West Zone Prelims</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>📝 One of the Top 9 teams from West Zone's Qualifying Test</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Super Six Sports Gaming Private Limited</em><br>
    🗓️ <em>December 2022</em><br>
    📍 <em>Raipur</em>
  </div>

  <p>It was a mobile based proctored mcq test with offline invigilators from the USQ team, our school was the Centre for Chhattisgarh.</p>
  <p>Around 30 teams gave the qualifying test and we were the only qualifying team from our centre.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <div class="episode-card-news">
      <img src="/images/usqqt.png" alt="Regional Rounds" style="width: 335px; height: auto; max-height: 100%">
      <span>Top 9 Teams of West Zone</span>
    </div>
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🤖 Winner - Data and AI Talks 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by igebra.ai</em><br>
    🗓️ <em>August 2023</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>Data and AI Talks 2023 was a flagship program organized by igebra.ai, a Delaware, US-based AI research, product development, and education company.</p>
  <p>Over 10,000 students from 12 schools participated in the event, with the grand finale held at NH Goel School, Raipur.</p>
  <p>Out of 10,000+ participants, 1,034 were selected for the qualifying rounds, 72 advanced to Level 1, and 12 to Level 2.</p>
  <p>I emerged as the winner of Group C (Senior) and was awarded an iPad along with various other prizes from the event sponsors.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🧠 All India Top 5 - Mind Wars National Academic Championship 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Zee Entertainment Enterprises Ltd.</em><br>
    🗓️ <em>May 2023</em><br>
    📍 <em>Online</em>
  </div>
  <p>Mind Wars was a platform supported by Zee5 where anyone could play quizzes on various topics and learn something new. It also hosted various contests with exciting prizes.</p>
  <p>This particular competition was a one-of-a-kind online MCQ-based test, where the top 2 rankers won a trip to Thailand. I don’t remember my exact rank, but I was in the top 5.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🛕 CBSE Heritage India Quiz 2022</h2>
  
  <div class="achievement-meta">
    🏢 <em>Organized by the Central Board of Secondary Education in collaboration with and nationally broadcasted by the Network18 group – History TV18.</em><br>
  </div>

  <p>The CBSE Heritage India Quiz aims to deepen students’ understanding and appreciation of India's rich cultural legacy, historical milestones, and diverse traditions.</p>
  <p>The 2022 edition focused on the theme of India’s Freedom Movement, commemorating 75 years of independence under the Azadi Ka Amrit Mahotsav initiative.</p>
  <p>Tens of thousands of schools from across the country participated in this multi-stage competition, which began with an online qualifying round.</p>
  <p>Top-performing teams advanced through the regional rounds, with an average of over 30 teams competing in each region. The best among them moved on to the National Semi-Finals and Finals, held at Sardar Patel Vidyalaya, Lodi Estate, New Delhi.</p>
  <p>Atharv Sharma, Shreeansh Naidu, and I represented our school in all the rounds, ultimately finishing as National 1st Runner-Ups and receiving a cash prize of ₹15,000.</p>

  <div class="achievement-images-text">
    <img src="/images/hiq.jpeg" alt="Heritage India Quiz">
    <span>Team Picture: Left to right<br> Manan Sethia, Shreeansh Naidu, Atharv Sharma</span>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 National 1st Runners-Up</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Central Board of Secondary Education</em><br>
    🗓️ <em>January 2023</em><br>
    📍 <em>New Delhi</em>
  </div>

  <p>The National Final featured teams from New Delhi, Tamil Nadu, Chhattisgarh, and Karnataka.</p>
  <p>The team from New Delhi won, and we (Chhattisgarh) secured second place.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.youtube.com/watch?v=ynYcqvTCh-Y" class="episode-card">
      <img src="/images/hiqf.png" alt="National Rounds" style="width: 335px;">
      <span>CBSE HIQ 2022<br>National Finale</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 Semi-Final 4 Winners</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Central Board of Secondary Education</em><br>
    🗓️ <em>January 2023</em><br>
    📍 <em>New Delhi</em>
  </div>

  <p>Semi-Final 4 featured teams from Chhattisgarh, Punjab, Assam, and Jharkhand.</p>
  <p>We won the Semi-Final with a score of 100 points!</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.youtube.com/watch?v=S_3fq0Vqc3I" class="episode-card">
      <img src="/images/hiqsf.png" alt="Semi Final" style="width: 335px;">
      <span>CBSE HIQ 2022<br>Semi-Final 4</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>🏆 Zonal Champions - Bhubaneswar region</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Central Board of Secondary Education</em><br>
    🗓️ <em>December 2022</em><br>
    📍 <em>Bhubaneswar, Odisha</em>
  </div>
  <p>We emerged as the Bhubaneswar Zone Champions after qualifying through the preliminary round and winning the stage round.</p>
  <p>A total of thirty teams took part in the preliminary round, and then six teams were selected for the stage round. From these, one team per region advanced to the National Rounds in New Delhi.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <div class="episode-card-news">
      <img src="/images/hiqn.jpeg" alt="Regional Rounds" style="width: 335px;">
      <span>News Coverage</span>
    </div>
  </div>
</div>

<hr class="silver-line"/>

<div class="achievement-section">
  <h2>🏆 Winners of Paryavaran Paheli ECO Quiz - KPS Intelligence Fest 2022</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Krishna Public School Kamal Vihar</em><br>
    🗓️ <em>November 2022</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>Once again, with my quiz partner Atharv, we took part in our school's interschool fest quiz competition and emerged as the winners in the senior category.</p>
  <p>Several teams from various schools in Raipur participated in the prelims, and six teams were selected for the on-stage finals.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🛕 City Champions - Intach Heritage Quiz 2022</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Indian National Trust for Art and Cultural Heritage (INTACH)</em><br>
    🗓️ <em>October 2022</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>The INTACH Heritage Quiz is an annual national-level quiz competition based on organized by the Indian National Trust for Art and Cultural Heritage (INTACH).</p>
  <p>Alongside my classmate and friend Atharv Sharma, we secured first place in the city round of the quiz, despite the rather underwhelming setup, which relied on phone stopwatches instead of proper buzzers.</p>
  <div class="achievement-images">
    <img src="/images/intach.jpg" alt="INTACH '22">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🏆 Winners of Senior Group Quiz - Shine COSMO 2022</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by The Rotary Club of Raipur</em><br>
    🗓️ <em>September 2022</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>Shine COSMO is an interschool event conducted by the Rotary Club of Raipur and hosted by Maharaja Agrasen International College.</p>
  <p>Partnering with my classmate and friend Atharv Sharma, we emerged as the champions of the quiz competition, which saw participation from over 30 schools.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🏏 Fit India Quiz 2021 – Season 1</h2>
  <div class="achievement-meta">
    🏢 <em>Organized by the Ministry of Youth Affairs and Sports in collaboration with the Central Board of Secondary Education and nationally broadcasted by Star India Group.</em><br>
  </div>
  <p>The inaugural Fit India Quiz, launched in September 2021 as part of the Fit India Movement, aimed to promote fitness and sports awareness among schoolchildren across India.</p>
  <p>The preliminary rounds saw participation from 36,299 students representing 13,502 schools nationwide.</p>
  <p>From there, 360 schools advanced to the state-level competitions.</p>
  <p>Eventually, 36 schools — each representing a different State or Union Territory — qualified for the National Finals.</p>
  <p>Partnering with Ishant Talreja, we represented our school in the televised National Rounds. Our school received ₹2,50,000, and our team was awarded ₹25,000.</p>

  <div class="achievement-images-text">
    <img src="/images/sc.jpeg" alt="FIQ '21">
    <span>Felicitation of State Champions in Mumbai</span>
  </div>

  <div class="dashed-line"></div>

  <h3>📺 Selected for National Rounds</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>June 2022</em><br>
    📍 <em>Mumbai, Maharashtra</em>
  </div>
  <p>Our quarter-final featured teams from Gujarat, Sikkim, Chhattisgarh, and Tamil Nadu.</p>
  <p>The team from Tamil Nadu won, and we (Chhattisgarh) secured second place.</p>

  <div class="episode-container" style="display: flex; justify-content: center;">
    <a href="https://www.hotstar.com/in/shows/fit-india-quiz/1260112749/fit-india-quiz-season-1-episode-4/1260113050/watch" class="episode-card">
      <img src="/images/nr.png" alt="National Rounds" style="width: 335px;">
      <span>Fit India Quiz – National Rounds<br>Season 1, Episode 4</span>
    </a>
  </div>

  <div class="dashed-line"></div>

  <h3>🏆 State Champions - Chhattisgarh</h3>
  <div class="achievement-meta">
    🏢 <em>Issued by the Ministry of Youth Affairs and Sports – Government of India</em><br>
    🗓️ <em>February 2022</em><br>
    📍 <em>Online</em>
  </div>
  <p>We became the Chhattisgarh State Champions after winning both the State Semi-Final and the State Final.</p>
  <p>Eight school teams competed in the State Semi-Finals, with two teams from each advancing to the State Final.</p>

  <div class="quiz-episodes-scroll">
    <div class="episode-container" style="margin-left: 10px;">
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
  <h2>🍀 Certificate of Merit - Teri Green Olympiad 2019</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by The Energy and Resources Institute</em><br>
    🗓️ <em>December 2019</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>The TERI Green Olympiad is an annual environmental examination organized by The Energy and Resources Institute (TERI), a New Delhi-based research institute.</p>
  <p>Initiated in 1999, the olympiad is designed to assess students for their knowledge on enviornmental issues and sustainable development.</p>
  <p>Over 2,000 schools participate each year, and I earned the Certificate of Merit when I was in 6th grade.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐼 Zonal 2nd Runner-Up – Senior Wild Wisdom Quiz 2019</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>October 2019</em><br>
    📍 <em>Bhopal, Madhya Pradesh</em>
  </div>
  <p>Upon entering 6th grade, I became eligible for the senior category of the Wild Wisdom Quiz. </p>
  <p>Partnering with Utkarsh Dewangan, then in 8th grade, we competed together and secured the position of Zonal 2nd Runner-Up. Back-to-back podium finishes by our team!</p>
  <div class="achievement-images">
    <img src="/images/wwq191.jpg" alt="WWQ '19">
    <img src="/images/wwq192.jpg" alt="WWQ '19">
    <img src="/images/wwq193.jpg" alt="WWQ '19">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🌒 All India Rank 23 - All India Astronomy Test 2018-19</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by COSMOS Astronomy Education and Research</em><br>
    🗓️ <em>January 2019</em><br>
    📍 <em>Online</em>
  </div>
  <p>I was always fascinated by the universe, the probabilites of finding life on another planets, is our life same as some other alien's life etc and this fascination made me participate in this contest.</p>
  <p>It was a computer based contest and I took part in it through my school.</p>
  <p>Honestly, being in the top 25 of my category across the entire nation felt really, really cool to me at that time.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐝 Winner - Interschool Spell Bee Excella Fest 2018</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Chhattisgarh Public School</em><br>
    🗓️ <em>October 2018</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>A spell bee + quiz fusion interschool competition hosted by Chhattisgarh Public School, I was in 5th grade when I participated in it.</p>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐼 Zonal 1st Runner-Up – Junior Wild Wisdom Quiz 2018</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>September 2018</em><br>
    📍 <em>Bhopal, Madhya Pradesh</em>
  </div>
  <p>The Wild Wisdom Quiz, initiated by WWF-India in 2008, is a renowned competition focusing on wildlife and environmental awareness. It is Asia's biggest wildlife quiz.</p>
  <p>In 5th grade, I participated alongside my teammate, Agriyan Maulik, who was then in 4th grade. The quiz featured teams from Chhattisgarh and Madhya Pradesh. Together, we achieved the position of Zonal 1st Runner-Up.</p>
  <div class="achievement-images">
    <img src="/images/wwq181.jpeg" alt="WWQ '18">
    <img src="/images/wwq182.jpeg" alt="WWQ '18">
    <img src="/images/wwq183.jpeg" alt="WWQ '18">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🌏 2nd Runner-Up - Quiz Premier League 2.0 Earth Day</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Krishna Public School Kamal Vihar</em><br>
    🗓️ <em>April 2016</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>This was the first quiz I ever participated in. I took part with my father as my partner when I was in 3rd grade, it was a family quiz. I really enjoyed it and found out about it through a school notification.</p>
  <p>The key moment I remember from this quiz is when a buzzer question was asked about the Rafflesia flower. I couldn’t recall its name, but I still pressed the buzzer and said, ‘The name sounds something like this but it has no stem and no roots.’ I was even awarded with the points too lol.</p>
  <div class="achievement-images">
    <img src="/images/qpl.jpeg" alt="QPL 2.0">
  </div>
</div>