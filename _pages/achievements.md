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
  <h2>🎲 Shaastra 2026 by IIT Madras</h2>
  
  <div class="achievement-meta">
    🏢 <em>Organized by the Indian Institute of Technology, Madras</em><br>
  </div>

  <p>Shaastra is the annual technical festival of the Indian Institute of Technology Madras and is widely recognized as one of Asia’s largest student-run technical festivals.</p>
  <p>Since its inception in 2000, Shaastra has served as a national platform for engineering, programming, and innovation-driven competitions, attracting participation from students across India and abroad.</p>
  <p>The 2026 edition of Shaastra continued this legacy through a series of large-scale technical contests conducted both online and on campus, with several events hosted in collaboration with established competitive programming and academic platforms.</p>

  <div class="dashed-line"></div>

  <h3>👨‍💻 All India Rank 17 in First level and Qualified for the National Shaastra Programming Contest 2026</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Indian Institute of Technology, Madras</em><br>
    🗓️ <em>December 2025</em><br>
    📍 <em>CodeChef - Online</em>
  </div>

  <p>The Shaastra Programming Contest is a national-level competitive programming event conducted as part of Shaastra, IIT Madras. Hosted on CodeChef, as one of it's signature START contest.</p> 
  <p>The contest focuses on algorithmic problem-solving, logical reasoning, and efficient implementation under strict time constraints.</p>
  <p>I secured an All India Rank of 17, qualifying for the National Shaastra Programming Contest 2026.</p>

  <div class="achievement-images-text">
    <img src="/images/spc26.png" alt="SPC '26">
  </div>

  <div class="dashed-line"></div>

  <h3>🍯 Selected for the National Finals - Competitive Programming Potpourri 2026</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by Indian Institute of Technology, Madras</em><br>
    🗓️ <em>December 2025</em><br>
    📍 <em>CodeChef - Online</em>
  </div>

  <p>Competitive Programming Potpourri is a multi-round programming challenge organized under the Shaastra framework by IIT Madras. The event is designed to test adaptability across diverse problem types, including algorithms, data structures, and logical reasoning.</p>
  <p>The 2026 edition involved an online qualification stage, hosted on CodeChef.</p>
  <p>I was selected for the National Finals of Competitive Programming Potpourri 2026 based on my performance in the qualifying rounds.</p>

  <div class="achievement-images">
    <img src="/images/cppot.jpg" alt="SCPP '26">
  </div>

</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>📈 2nd Runner Ups - Wonga Wits Quiz Season 2</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Yes Securities</em><br>
    🗓️ <em>November 2025</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>

  <p>Wonga Wits Quiz is a national-level quiz competition organized by Yes Securities, aimed at promoting financial literacy, market awareness, and analytical thinking among students.</p>
  <p>Since it was a inter-college national quiz, I was the only school student who cleared the prelims and qualified for the stage round in Raipur. The quiz was organized by quizmaster Mr. Ajay Poonia.</p>
  <p>With my junior Shantanu Shukla, we finished as the 2nd Runner-Ups. </p>

  <div class="achievement-images">
    <img src="/images/yesww1.jpg" alt="WongaWits '25">
    <img src="/images/yesww2.jpeg" alt="WongaWits '25">
    <img src="/images/yesww3.jpg" alt="WongaWits '25">
    <img src="/images/yesww4.jpg" alt="WongaWits '25">
  </div>

</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>📱 1st Runner-Up of Nagpur region - TCS InQuizitive 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Issued by Tata Consultancy Services</em><br>
    🗓️ <em>August 2025</em><br>
    📍 <em>Nagpur, Maharashtra</em>
  </div>

  <p>TCS InQuizitive is a premier national-level inter-school quiz organized by Tata Consultancy Services (TCS) for students in Grades 8 to 12.</p>
  <p>Reimagined from the long-standing TCS IT Wiz, the competition focuses on the latest global trends in technology, science, sports, engineering, and the arts. This edition also brought back participation in teams of two.</p>
  <p>The Nagpur regional round of the 2025 edition featured quizmaster Ms. Rashmi Furtado, and almost every other team was from Maharashtra except us.</p>
  <p>With my junior Om Nirmalkar, we emerged as the Nagpur region's 1st Runner-Up.</p>

  <div class="achievement-images">
    <img src="/images/tcs251.jpeg" alt="TCS '25">
    <img src="/images/tcs252.jpeg" alt="TCS '25">
    <img src="/images/tcs253.jpg" alt="TCS '25">
    <img src="/images/tcs254.jpg" alt="TCS '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🪨 Winner of IIM Bhilai Chapter - Brahmaprakash Memorial Materials Quiz 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Indian Institute of Metals, Bhilai</em><br>
    🗓️ <em>August 2025</em><br>
    📍 <em>Bhilai, Chhattisgarh</em>
  </div>
  <p>The Brahmaprakash Memorial Materials Quiz (BPMMQ) is a prestigious national-level competition organized annually by the Indian Institute of Metals (IIM) to promote interest in metallurgy and materials science among students in Classes 11 and 12.</p>
  <p>The 33rd edition of the national grand finale was held on September 12–13, 2025, at the Indira Gandhi Centre for Atomic Research (IGCAR) in Kalpakkam, Tamil Nadu.</p> 
  <p>The IIM Bhilai Chapter, which operates in close coordination with the academic and research environment of the region, serves as the local hub for selecting teams to represent Chhattisgarh at the national level.</p>
  <p>Schools from across Chhattisgarh participated in this quiz. I partnered with my junior, Shantanu Shukla, and we emerged victorious, defeating five other teams on stage.</p> 
  <p>Our performance qualified us for the National Finale and the Metal Camp held at Kalpakkam, Tamil Nadu, home to a major nuclear power facility. We were also awarded printers as part of the recognition.</p>

  <div class="achievement-images">
    <img src="/images/mmq1.jpg" alt="BPMMQ '25">
    <img src="/images/mmq2.jpeg" alt="BPMMQ '25">
    <img src="/images/mmq4.jpeg" alt="BPMMQ '25">
    <img src="/images/mmq3.jpg" alt="BPMMQ '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🪙 Winner of Bhopal Region - SBI Scholar Quiz 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by State Bank of India</em><br>
    🗓️ <em>June 2025</em><br>
    📍 <em>Bhopal, Madhya Pradesh</em>
  </div>
  <p>The SBI Scholar Quiz is a national-level competition organized by the State Bank of India (SBI) in association with The Times of India, aimed at students in Grades 9 to 12 to promote financial literacy.</p> 
  <p>The quiz commemorated SBI's 70 years of service and featured regional rounds in 16 cities across India.</p>
  <p>Along with my younger sister, Hiranya Sethia, I participated in the Bhopal Regional Round and secured the Winner title.</p>
  <p>Each of us was awarded a ₹50,000 scholarship, our accompanying parent received ₹25,000, and our school was awarded ₹50,000.</p>

   <div class="achievement-images">
    <img src="/images/sbikps.jpg" alt="SBI '25">
    <img src="/images/sbi.jpg" alt="SBI '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Winner of Code 2 Champions - Innovritti 1.0</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Institute of Technology and Management, Raipur</em><br>
    🗓️ <em>April 2025</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>Innovritti 1.0 was the inaugural edition of the National Level Innovation Fest hosted by ITM University, Raipur. Organized by the university's Club Technica.</p>
  <p>A handful of school students also participated in the contests (I was one of them).</p>
  <p>I took part in the "Code 2 Champions" coding competition, which consisted of three rounds covering SQL mind maps, queries, and databases, with the final round including DSA integration. Over 20 individuals and teams participated, almost all of them college students.</p>
  <p>I was the only school student in the competition and emerged as the champion, winning a prize of ₹3000.</p>

  <div class="achievement-images">
    <img src="/images/itm.jpg" alt="ITM '25">
  </div>
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

  <div class="achievement-images">
    <img src="/images/nehueday.png" alt="NEHU '25">
    <img src="/images/nehuearth.png" alt="NEHU '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 All India Rank 10 - HPE Codewars 2025 India Edition</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Hewlett Packard Enterprise and Codingal</em><br>
    🗓️ <em>April 2025</em><br>
    📍 <em>Online</em>
  </div>
  <p>HPE CodeWars is one of the world's most renowned high school computer science competitions, hosted annually by Hewlett Packard Enterprise (HPE) with Codingal in India.</p> 
  <p>The event challenges students in Grades 9–12 to solve a series of complex algorithmic problems within a three-hour window using languages like Python, C++, or Java.</p>
  <p>6131 students participated, and I secured the 10th position, earning a keyboard and mouse set with a ₹1000 Amazon voucher as a prize.</p>

  <div class="achievement-images">
    <img src="/images/hpe.jpeg" alt="HPE '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🇮🇳 Qualified for National Camp - Indian National Earth Science Olympiad 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Geological Society of India</em><br>
    🗓️ <em>March 2025</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>The Indian National Earth Science Olympiad (INESO) is conducted by the Geological Society of India as part of the national selection process for the International Earth Science Olympiad (IESO).</p>
  <p>The examination assesses students across multiple Earth science disciplines, including geology, meteorology, oceanography, astronomy, and environmental science, and serves as one of the most rigorous pre-university evaluations in the field.</p>
  <p>For the second consecutive year, I qualified for the Indian National Camp for the International Earth Science Olympiad (IESO). Driven by my continued passion for Earth science, I chose to take the exam again in 2025 to challenge myself.</p>
  <p>Since I had already represented India in IESO 2024, I was not eligible to be selected again for the international team.</p>

  <div class="achievement-images">
    <img src="/images/ineso.jpg" alt="INESO '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🦋 Selected for International Quantum Research - BeyondQuantum 2025</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by ThinkingBeyond</em><br>
    🗓️ <em>March 2025</em><br>
    📍 <em>Online</em>
  </div>
  <p>BeyondQuantum is an intensive, twelve-week international research programme specifically designed to introduce high school and early undergraduate students to the fields of quantum physics and quantum computing.</p> 
  <p>Organized by ThinkingBeyond Education, the programme is structured into two six-week phases: the Course Stage, which covers the foundations of quantum mechanics and linear algebra, and the Research Stage, where students work in teams under the guidance of academic mentors to complete an original research project.</p> 
  <p>The programme culminates in the BeyondQuantum Research Fair, a one-day online conference where participants showcase their findings to a public audience and leading quantum experts.</p>
  <p>I was selected for the program after a lengthy application process.</p>
  <div class="achievement-images">
    <img src="/images/bequ1.png" alt="BEQU '25">
    <img src="/images/bequ2.png" alt="BEQU '25">
    <img src="/images/bequ3.png" alt="BEQU '25">
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
  <p>The Indian National AI Olympiad (INAO), also known as the India AI Olympiad, is the official national gateway for students to represent India at the International Olympiad in Artificial Intelligence (IOAI).</p> 
  <p>Organized by ACM India in partnership with ACM IKDD, the competition identifies top talent in Grades 9–12 through a multi-stage process that tests both conceptual understanding and practical problem-solving in machine learning and AI.</p>
  <p>I qualified for Stage 2 of the India Artificial Intelligence Olympiad.</p>

  <div class="achievement-images">
    <img src="/images/ioai.jpg" alt="INAIO '25">
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
  <p>The Homi Bhabha Centre for Science Education (HBCSE), a national centre of the Tata Institute of Fundamental Research (TIFR), serves as the nodal agency for felicitating Indian students who win medals at International Olympiads.</p>
  <p>A comprehensive Felicitation of International Olympiad Medallists is held annually in December.</p>
  <p>I was felicitated for my achievement at International Earth Science Olympiad (IESO) 2024 and was awarded with a scholarship of ₹15000.</p>

  <div class="achievement-images">
    <img src="/images/fel.jpg" alt="Felicitation '24">
    <img src="/images/fel1.jpg" alt="Felicitation '24">
    <img src="/images/fel2.jpg" alt="Felicitation '24">
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
  <p>The Zonal Computing Olympiad (ZCO) is a first-round programming contest of the Indian Computing Olympiad (ICO), organized annually by the International Association for Research in Computing Science (IARCS).</p> 
  <p>It is a national-level competition aimed at identifying school students with exceptional skills in algorithms and computer programming to eventually select the team representing India at the International Olympiad in Informatics (IOI).</p> 
  <p>The exam is typically a three-hour programming test where participants solve complex problems using languages like C, C++, Java, or Python.</p>
  <p>I qualified for Indian National Olympiad in Informatics, which is the second level and was also the Zonal Topper.</p>

  <div class="achievement-images">
    <img src="/images/zco.jpg" alt="ZCO '25">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>📱 1st Runner-Up of Nagpur region - TCS InQuizitive 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Tata Consultancy Services</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Nagpur, Maharashtra</em>
  </div>

  <p>TCS InQuizitive is a premier national-level inter-school quiz organized by Tata Consultancy Services (TCS) for students in Grades 8 to 12.</p>
  <p>Reimagined from the long-standing TCS IT Wiz, the competition focuses on the latest global trends in technology, science, sports, engineering, and the arts.</p>
  <p>The Nagpur regional round of the 2024 edition featured quizmaster Mr. Giri "Pickbrain" Balasubramaniam, and almost every other participant was from Nagpur or Maharashtra except me.</p>
  <p>I emerged as the Nagpur region's 1st Runner-Up.</p>

  <div class="achievement-images">
    <img src="/images/tcs241.png" alt="TCS '24">
    <img src="/images/tcs242.jpeg" alt="TCS '24">
    <img src="/images/tcs243.jpg" alt="TCS '24">
    <img src="/images/tcs244.jpg" alt="TCS '24">
    <img src="/images/tcs24cer.jpg" alt="TCS '24">
    <img src="/images/tcs24semcer.jpeg" alt="TCS '24">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>✴️ Nexus 2K24 by SSIPMT Raipur</h2>
  
  <div class="achievement-meta">
    🏢 <em>Organized by Shri Shankaracharya Institute of Professional Management and Technology, Raipur</em><br>
  </div>

  <p>NEXUS 2K24 was a major techno-cultural and inter-school competition organized by the Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT), Raipur.</p>
  <p>The event served as a platform for "Young Ignited Minds" to showcase their talents across various disciplines.</p>

  <div class="dashed-line"></div>

  <h3>👨‍💻 Winner of Coding Competition - Nexus 2K24</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by SSIPMT Raipur</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>

  <p>The competition saw participation from over 40 students and was conducted across three progressively challenging rounds. In the final stage, participants were required to solve three intermediate-level programs; I completed all three in approximately four minutes, while most others took over fifteen minutes, and was awarded with a ₹5000 cheque.</p>

  <div class="achievement-images">
    <img src="/images/nexcod.jpg" alt="Nexus'24">
  </div>

  <div class="dashed-line"></div>

  <h3>👨‍💻 1st Runner-ups of Technical Quiz - Nexus 2K24</h3>

  <div class="achievement-meta">
    🏢 <em>Issued by SSIPMT Raipur</em><br>
    🗓️ <em>November 2024</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>

  <p>Over 70 students participated in the quiz, which included a written pen-and-paper round followed by five on-stage rounds. Partnering with my senior, Ayush Agarwal, we finished as 1st Runner-Up.</p>

  <div class="achievement-images">
    <img src="/images/nexquiz.jpg" alt="Nexus'24">
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

  <p>The Mindspark 2024 General Knowledge Quiz was a featured component of the annual inter-school fest organized by Brighton International School, Raipur.</p>
  <p>The fest attracted approximately 700 participants from 14 prominent schools across the region.</p>
  <p>I teamed up with my great friend Aditya Singh and we, together as "Team ThinkTank" emerged as the winner of the quiz.</p>

  <div class="achievement-images">
    <img src="/images/mindsparkquiz.jpg" alt="Minspark '24">
    <img src="/images/quizbrighton.jpg" alt="Minspark '24">
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
  <p>KPS MUN 3.0 was a two-day Model United Nations conference hosted by Krishna Public School (KPS), Kamal Vihar, Raipur, serving as a platform for diplomatic simulation in Central India.</p>
  <p>The conference brought together student delegates from multiple schools, each representing different countries and committees to deliberate on global political and humanitarian issues.</p>
  <p>I represented the Syrian Arab Republic in the United Nations General Assembly (UNGA), where the agenda focused on deliberations on de-escalation and demobilisation in the context of global peace. The role required navigating complex geopolitical narratives and defending positions under intense debate, allowing me to engage actively and articulate arguments from a challenging diplomatic standpoint. Consequently, I was given the Special Mention Award.</p>

  <div class="achievement-images">
    <img src="/images/mun1.jpg" alt="KPS MUN 3.0 '24">
    <img src="/images/mun2.jpg" alt="KPS MUN 3.0 '24">
    <img src="/images/kpsmun.jpg" alt="KPS MUN 3.0 '24">
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
  <h2>💳 Ranked First in Central Zone - National Financial Literacy Quiz 2024</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Securities and Exchange Board of India (SEBI)</em><br>
    🗓️ <em>May 2024</em><br>
    📍 <em>Online</em>
  </div>
  <p>The National Financial Literacy Quiz (NFLQ) 2024 was a major initiative organized by the Securities and Exchange Board of India (SEBI) and the National Institute of Securities Markets (NISM) to enhance financial awareness among Indian youth.</p>
  <p>Organized with the National Centre for Financial Education (NCFE) in coordination with regulators like RBI, SEBI, IRDAI, and PFRDA, the school edition of this quiz was part of Financial Literacy Week 2024 (February 26 – March 1, 2024).</p>
  <p>I was ranked first in the central zone (intermediate category) and received a ₹5,000 Amazon Voucher.</p>

  <div class="achievement-images">
    <img src="/images/nflq.jpg" alt="NFLQ '24">
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
  <p>The International Chemistry Quiz (ICQ) 2023-24, organized by the Royal Australian Chemical Institute (RACI), continued its long-standing tradition of promoting chemical science as a vital and engaging subject for secondary students worldwide.</p>
  <p>Held between June and October 2023 depending on the region, the quiz attracted over 100,000 candidates from 21 countries, including Australia, India, China, and Germany.</p>
  <p>The competition focused on higher-order thinking and the application of fundamental chemistry principles to modern societal problems, intentionally moving away from rote memorization of any specific school syllabus.</p>
  <p>I was awarded with the "Certificate of High Distinction", which is the highest level of recognition awarded in ICQ.</p>

  <div class="achievement-images">
    <img src="/images/icq.jpg" alt="ICQ '23">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>💡 Qualified for DLEPC - ATL Inspire Manak Awards 2023-24</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Department of Science and Technology (DST) Government of India</em><br>
    🗓️ <em>February 2024</em><br>
    📍 <em>Online</em>
  </div>
  <p>The INSPIRE Awards – MANAK (Million minds Augmenting National Aspirations and Knowledge) is a flagship initiative jointly executed by the Department of Science and Technology (DST) and the National Innovation Foundation (NIF).</p>
  <p>This competition aims to foster a culture of creative and innovative thinking among school students aged 10–15 years (Classes 6 to 10) by encouraging them to develop science-rooted solutions for societal challenges.</p>
  <p>My idea of <a href="https://manansethia.com/projects/#mrida" style="color:#de8d00; text-decoration:none; font-weight:bold;">MRIDA (Multipurpose Real-time Integrated Digital Analyzer)</a> was selected for the District Level Exhibition and Project Competitions (DLEPC) and received a one-time financial award of ₹10,000 via Direct Benefit Transfer (DBT).</p>

  <div class="achievement-images">
    <img src="/images/inspiremanak.jpg" alt="Inspire-MANAK '23">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>💡 Idea selected for the National Rounds - Junior Smart India Hackathon 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Ministry of Education's Innovation Cell Government of India</em><br>
    🗓️ <em>January 2024</em><br>
    📍 <em>Online</em>
  </div>
  <p>The Junior Smart India Hackathon 2023 is a nationwide initiative launched by All India Council for Technical Education and Ministry of Education to provide students with a platform to solve some of the pressing problems we face in our daily lives.</p>
  <p>The event aims to inculcate a culture of product innovation and a mindset of problem-solving among young and innovative minds. The hackathon invites students from classes 6th to 12th to showcase their out-of-the-box thinking and innovative ideas.</p>
  <p>I presented my Idea on <a href="https://manansethia.com/projects/#mrida" style="color:#de8d00; text-decoration:none; font-weight:bold;">MRIDA (Multipurpose Real-time Integrated Digital Analyzer)</a> and qualified for the National presentation round.</p>

  <div class="achievement-images">
    <img src="/images/jsih.jpg" alt="JSIH '23">
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
  <p>The CBSE Heritage India Quiz aims to deepen students’ understanding and appreciation of India's rich cultural legacy, historical milestones, and diverse traditions.</p>
  <p>The 2022 edition focused on "India: The Mother of Democracy," celebrating India's G20 presidency and rich history.</p>
  <p>Tens of thousands of schools from across the country participated in this multi-stage competition, which began with an online qualifying round.</p>
  <p>Atharv Sharma, Snigdha Mohanty, and I represented our school in the Bhuvaneshwar regional round but were unable to qualify for the national finale as we emerged as the regional runner-ups.</p>

  <div class="achievement-images">
    <img src="/images/cbsehiq23.jpg" alt="CBSE HIQ '23">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>👨‍💻 Winner of Technical Quiz - Nexus 2K23</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Shri Shankaracharya Institute of Professional Management and Technology, Raipur</em><br>
    🗓️ <em>November 2023</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>

  <p>NEXUS 2K23 was a high-profile inter-school competition organized by the Shri Shankaracharya Institute of Professional Management and Technology (SSIPMT), Raipur.</p> 
  <p>Centered on the theme "Young Ignited Minds," the event aimed to provide a platform for school students to demonstrate their skills across technical, cultural, and sporting categories.</p> 
  <p>I finished first among teams from almost every school in raipur in the Technical Quiz event, winning a cash prize of ₹10,000.</p>

  <div class="achievement-images">
    <img src="/images/nexus23.jpg" alt="Nexus Quiz '23">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>💡 Selected among the Top 1,000 ideas nationwide - Youth Ideathon 2023</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by ThinkStartup and MEPSC</em><br>
    🗓️ <em>October 2023</em><br>
    📍 <em>Online</em>
  </div>
  <p>Youth Ideathon 2023 was the third edition of India’s largest innovation and entrepreneurship competition for school students, organized by ThinkStartup and the Management Entrepreneurship Professional Skills Council (MEPSC) in collaboration with CBSE.</p>
  <p>The event focused on the theme "iStartup a Good Thing for India" (Mera Idea Jo Badal De Bharat).</p>
  <p>I presented my Idea on <a href="https://manansethia.com/projects/#mrida" style="color:#de8d00; text-decoration:none; font-weight:bold;">MRIDA (Multipurpose Real-time Integrated Digital Analyzer)</a> and was selected among the Top 1,000 ideas.</p>

  <div class="achievement-images">
    <img src="/images/yi23.jpg" alt="YI '23">
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

  <div class="achievement-meta">
    🏢 <em>Issued by Super Six Sports Gaming Private Limited</em><br>
    🗓️ <em>September 2023</em><br>
    📍 <em>Mumbai, Maharashtra</em>
  </div>

  <p>National Grand Finale featured KPS Kamal Vihar (our team), BHS Kolkata, and Tagore International (VV), New Delhi.</p>
  <p>We scored 50 points and emerged as the National 2nd Runner-Ups.</p>
  <p><strong>😆 Fun Fact:</strong> The team we defeated in the Semi-Finals (BHS Kolkata) were the lucky losers of the Semi Finals, and then went on to defeat us in the National Finals! Also, Tagore International was the second lucky loser of Zonal Finals.</p>

  <div style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
    <img src="/images/yoda.png" style="height: 1.4em; vertical-align: middle;">
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

  <div class="achievement-meta">
    🏢 <em>Issued by Super Six Sports Gaming Private Limited</em><br>
    🗓️ <em>September 2023</em><br>
    📍 <em>Mumbai, Maharashtra</em>
  </div>

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
    📍 <em>Mumbai, Maharashtra</em>
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
    📍 <em>Mumbai, Maharashtra</em>
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
    📍 <em>Raipur, Chhattisgarh</em>
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
  <div class="achievement-images">
    <img src="/images/data&ai.jpg" alt="Data&AI '23">
  </div>
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
  <div class="achievement-images">
    <img src="/images/mindwars.jpg" alt="MindWars '23">
  </div>
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
  <div class="achievement-images">
    <img src="/images/intelli.jpg" alt="ParyavaranPaheli '22">
  </div>
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
  <div class="achievement-images">
    <img src="/images/shinecosmo.jpg" alt="ShineCOSMO '22">
  </div>
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
  <h2>🐼 National Level Qualifier - Wild Wisdom Global Challenge 2021</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>October 2021</em><br>
    📍 <em>Online</em>
  </div>
  <p>The Wild Wisdom Global Challenge (earlier known as the Wild Wisdom Quiz), initiated by WWF-India in 2008, is a renowned competition focusing on wildlife and environmental awareness. It is Asia's biggest wildlife quiz.</p>
  <p>Due to COVID-19, 2020 edition of Wild Wisdom Quiz was cancelled and was later renamed as Wild Wisdom Global Challenge, highlighting participations from students outside of India.</p>
  <p>It was conducted online and individually due to the pandemic outbreak.</p>
  <div class="achievement-images">
    <img src="/images/wwq211.jpg" alt="WWQ '21">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐼 Zonal 2nd Runner-Up – Senior Wild Wisdom Quiz 2019</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by World Wide Fund for Nature (WWF-India)</em><br>
    🗓️ <em>October 2019</em><br>
    📍 <em>Bhopal, Madhya Pradesh</em>
  </div>
  <p>The Wild Wisdom Quiz, initiated by WWF-India in 2008, is a renowned competition focusing on wildlife and environmental awareness. It is Asia's biggest wildlife quiz.</p>
  <p>Upon entering 6th grade, I became eligible for the senior category of the Wild Wisdom Quiz. </p>
  <p>Partnering with Utkarsh Dewangan, then in 8th grade, we competed together and secured the position of Zonal 2nd Runner-Up. Back-to-back podium finishes by our team!</p>
  <div class="achievement-images">
    <img src="/images/wwq191.jpg" alt="WWQ '19">
    <img src="/images/wwq192.jpg" alt="WWQ '19">
    <img src="/images/wwq193.jpg" alt="WWQ '19">
    <img src="/images/wwq194.jpg" alt="WWQ '19">
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
  <p>The All India Astronomy Test (AIAT) 2018 was a national-level competition organized by COSMOS Astronomy Education & Research Organization to identify and encourage young talent in the field of space sciences.</p>
  <p>I was always fascinated by the universe, the probabilites of finding life on another planets, is our life same as some other alien's life etc and this fascination made me participate in this contest.</p>
  <p>It was a computer based contest and I took part in it through my school.</p>
  <p>Honestly, being in the top 25 of my category across the entire nation felt really, really cool to me at that time.</p>
  <div class="achievement-images">
    <img src="/images/aiat.jpg" alt="AIAT '18">
  </div>
</div>

<hr class="silver-line" />

<div class="achievement-section">
  <h2>🐝 Winner - Interschool Spell Bee Excella Fest 2018</h2>
  <div class="achievement-meta">
    🏢 <em>Issued by Chhattisgarh Public School</em><br>
    🗓️ <em>October 2018</em><br>
    📍 <em>Raipur, Chhattisgarh</em>
  </div>
  <p>The Interschool Spell Bee was a prominent feature of Excella Fest 2018, an annual inter-school competition hosted by Chhattisgarh Public School (CPS), Raipur.</p>
  <p>It was a fusion of a spell bee and a quiz competition, and I participated in it while I was in the 5th grade.</p>
  <div class="achievement-images">
    <img src="/images/spell.jpg" alt="SpellBee '18">
  </div>
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
    <img src="/images/wwq184.jpg" alt="WWQ '18">
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
  <p>QPL, which stands for the Quiz Premier League, is a signature academic initiative of Krishna Public School (KPS), Raipur. Designed as a "Quiz, Play, and Learn" ecosystem, the program serves as the school’s dedicated quiz club.</p>
  <p>QPL 2.0 was an Earth Day–themed quiz that uniquely included a “Partner with Your Parent” format.</p>
  <p>This was the first quiz I ever participated in. I took part with my father as my partner when I was in 3rd grade, it was a family quiz. I really enjoyed it and found out about it through a school notification.</p>
  <p>The key moment I remember from this quiz is when a buzzer question was asked about the Rafflesia flower. I couldn’t recall its name, but I still pressed the buzzer and said, ‘The name sounds something like this but it has no stem and no roots.’ I was even awarded with the points too lol.</p>
  <div class="achievement-images">
    <img src="/images/qpl.jpg" alt="QPL 2.0">
  </div>
</div>