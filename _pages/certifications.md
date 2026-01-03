---
permalink: /certifications/
title: "📜 Certifications"
author_profile: true
---

<style>
  a {
    text-decoration: none !important;
    border: none !important;
    outline: none !important;
  }

  .page__content h2 {
    padding-bottom: 0em;
  }

  .cert-section {
    animation: fadeInUp 1s ease forwards;
  }

  .cert-section h2 {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.235em;
    margin-top: 6px;
    margin-bottom: 5px;
    border-bottom: none !important;
  }

  .cert-logo {
    height: 28px;
    width: auto;
    display: block;
  }

  .cert-scroll {
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    padding: 15px 10px;
    gap: 15px;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    scrollbar-width: none;
    -ms-overflow-style: none;
    -webkit-overflow-scrolling: touch;
    margin-top: 4px;
    margin-bottom: 12px;
  }

  .cert-scroll::-webkit-scrollbar {
    display: none;
  }

  .cert-card {
    flex: 0 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 270px;
  }

  .cert-card img {
    height: 180px;
    width: auto;
    min-width: 20%;
    border-radius: 10px;
    object-fit: cover;
    scroll-snap-align: start;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    z-index: 1;
    margin-bottom: 7px;
  }

  .cert-card img:hover {
    transform: scale(1.05);
    box-shadow: 0 0 10px hsla(0, 0%, 0%, 0.20);
  }

  .cert-card {
    color: inherit !important;
  }

  .cert-text {
    width: 270px;
    box-sizing: border-box;
    padding: 0 6px;
  }

  .cert-title {
    margin-top: 0.4em;
    font-size: 0.9em;
    font-weight: 600;
    color: var(--body-color) !important;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
  }

  .cert-desc {
    font-size: 0.9em;
    line-height: 1.5;
    margin-top: 4px;
    color: var(--body-color) !important;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
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
  
  .achievement-images, 
  .quiz-episodes-scroll,
  .cert-scroll {
    cursor: grab;
  }

  .dragging {
    cursor: grabbing;
  }
</style>

<div class="cert-section">

<h2>
  <img src="/images/cert/codechef.svg" class="cert-logo" alt="CodeChef">
  CodeChef - Programming & DSA
</h2>

<div class="cert-scroll">
  <a class="cert-card" href="/images/cert/pdf/manan54-Learn Python - Pro.pdf" target="_blank">
    <img src="/images/cert/jpg/learnpython.jpg" alt="Learn Python Pro">
    <div class="cert-text">
      <div class="cert-title">Learn Python Programming</div>
      <div class="cert-desc">
        Advanced Python concepts, structured problem-solving, and efficient coding practices.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/manan54-Learn C Programming.pdf" target="_blank">
    <img src="/images/cert/jpg/learnc.jpg" alt="Learn C Programming">
    <div class="cert-text">
      <div class="cert-title">Learn C Programming</div>
      <div class="cert-desc">
        Procedural programming, pointers, memory management, and low-level reasoning.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/manan54-Learn C++.pdf" target="_blank">
    <img src="/images/cert/jpg/learnc++.jpg" alt="Learn C++">
    <div class="cert-text">
      <div class="cert-title">Learn C++</div>
      <div class="cert-desc">
        Object-oriented programming, STL basics, and competitive programming foundations.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/manan54-Learn Java.pdf" target="_blank">
    <img src="/images/cert/jpg/learnjava.jpg" alt="Learn Java">
    <div class="cert-text">
      <div class="cert-title">Learn Java</div>
      <div class="cert-desc">
        Core Java syntax, OOP principles, and logical problem-solving techniques.
      </div>
    </div>
  </a>
</div>

<div class="cert-scroll">
  <a class="cert-card" href="/images/cert/pdf/manan54-Advanced Python.pdf" target="_blank">
    <img src="/images/cert/jpg/advancedpython.jpg" alt="Advanced Python">
    <div class="cert-text">
      <div class="cert-title">Advanced Python</div>
      <div class="cert-desc">
        Advanced control structures, optimization, and data handling techniques.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/manan54-Beginner DSA in Python.pdf" target="_blank">
    <img src="/images/cert/jpg/pythondsa.jpg" alt="DSA in Python">
    <div class="cert-text">
      <div class="cert-title">DSA in Python</div>
      <div class="cert-desc">
        Fundamental data structures and algorithmic thinking implemented in Python.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/manan54-C++ STL - Standard template library.pdf" target="_blank">
    <img src="/images/cert/jpg/c++stl.jpg" alt="C++ STL">
    <div class="cert-text">
      <div class="cert-title">C++ STL</div>
      <div class="cert-desc">
        Practical use of the Standard Template Library for efficient competitive coding.
      </div>
    </div>
  </a>
</div>

<hr class="silver-line">

<h2>
  <img src="/images/cert/coursera.svg" class="cert-logo" alt="Coursera">
  Coursera - Professional
</h2>

<div class="cert-scroll">
  <a class="cert-card" href="/images/cert/pdf/Coursera Google Cybersecurity.pdf" target="_blank">
    <img src="/images/cert/jpg/googlecybersec.jpg" alt="Google Cybersecurity">
    <div class="cert-text">
      <div class="cert-title">Google Cybersecurity</div>
      <div class="cert-desc">
        Comprehensive training in cybersecurity covering threats, defense, Linux, SQL, and automation.
      </div>
    </div>
  </a>

  <a class="cert-card" href="/images/cert/pdf/Coursera IBM Ethical Hacking with Open Source Tools.pdf" target="_blank">
    <img src="/images/cert/jpg/ibmhack.jpg" alt="IBM Ethical Hacking">
    <div class="cert-text">
      <div class="cert-title">IBM Ethical Hacking with Open-Source Tools</div>
      <div class="cert-desc">
        Hands-on penetration testing, vulnerability assessment, and real-world security tooling.
      </div>
    </div>
  </a>
</div>

<script>
(function () {
  const selectors = [
    '.achievement-images',
    '.quiz-episodes-scroll',
    '.cert-scroll'
  ];

  const friction = 0.94;
  const arrowStep = 220;

  selectors.forEach(selector => {
    document.querySelectorAll(selector).forEach(container => {

      let isDown = false;
      let startX = 0;
      let scrollLeft = 0;
      let velocity = 0;
      let rafId = null;

      const stopMomentum = () => {
        if (rafId) cancelAnimationFrame(rafId);
        rafId = null;
      };

      const momentum = () => {
        container.scrollLeft += velocity;
        velocity *= friction;
        if (Math.abs(velocity) > 0.5) {
          rafId = requestAnimationFrame(momentum);
        }
      };

      container.addEventListener('mousedown', e => {
        isDown = true;
        stopMomentum();
        startX = e.pageX - container.offsetLeft;
        scrollLeft = container.scrollLeft;
        container.classList.add('dragging');
      });

      window.addEventListener('mouseup', () => {
        if (!isDown) return;
        isDown = false;
        container.classList.remove('dragging');
        momentum();
      });

      container.addEventListener('mouseleave', () => {
        if (!isDown) return;
        isDown = false;
        container.classList.remove('dragging');
        momentum();
      });

      container.addEventListener('mousemove', e => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - container.offsetLeft;
        const walk = x - startX;
        const prevScroll = container.scrollLeft;
        container.scrollLeft = scrollLeft - walk;
        velocity = container.scrollLeft - prevScroll;
      });

      container.setAttribute('tabindex', '0');

      container.addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          stopMomentum();
          container.scrollLeft += arrowStep;
        }
        if (e.key === 'ArrowLeft') {
          e.preventDefault();
          stopMomentum();
          container.scrollLeft -= arrowStep;
        }
      });
    });
  });
})();
</script>
