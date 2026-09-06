/* ════════════════════════════════════════════════════════════════
   VIDYA TOPPER - HIGH PERFORMANCE COMPREHENSIVE SCRIPT ENGINE
   ════════════════════════════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  // Mark JS as ready for progressive enhancement
  document.body.classList.add("js-ready");
  
  /* ====================================================
     1. LIGHT/DARK THEME SWITCHER WITH MEMORY
     ==================================================== */
  const themeToggle = document.getElementById("theme-toggle");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const body = document.body;

  function toggleTheme() {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }

  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  
  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }

  if (themeToggle) themeToggle.addEventListener("click", toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);

  /* ====================================================
     2. UNIVERSAL MAGNETIC FORCE WARPING
     ==================================================== */
  const magneticTargets = document.querySelectorAll(
    ".magnetic-btn, .nav-links a, .showcase-tab, .faq-question-btn, .chip, #floating-cta, .theme-toggle-btn, .btn-out, .tag, .btn-main"
  );
  
  magneticTargets.forEach(target => {
    target.addEventListener("mousemove", (e) => {
      const rect = target.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const isLargeEl = target.classList.contains("faq-question-btn") || target.classList.contains("showcase-tab");
      const multiplier = isLargeEl ? 0.12 : 0.28;
      const scale = isLargeEl ? 1.01 : 1.05;
      
      target.style.transform = `translate(${x * multiplier}px, ${y * multiplier}px) scale(${scale})`;
      target.style.transition = "transform 0.1s cubic-bezier(0.25, 1, 0.5, 1)";
      
      if (target.classList.contains("nav-cta") || target.id === "floating-cta" || target.classList.contains("btn-main")) {
        target.style.boxShadow = `0 12px 35px rgba(124, 58, 237, 0.45)`;
      }
    });
    
    target.addEventListener("mouseleave", () => {
      target.style.transform = "";
      target.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)";
      target.style.boxShadow = "";
    });
  });

  /* ====================================================
     3. MOBILE DRAWERS SIDENAV Hamburger
     ==================================================== */
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-item");

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      menuToggle.classList.toggle("open");
      mobileMenu.classList.toggle("open");
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("open");
        mobileMenu.classList.remove("open");
      });
    });
  }

  /* ====================================================
     4. SCROLL PROGRESS TRACKER & COMPACT SCROLLED PILL NAV
     ==================================================== */
  const scrollProgressBar = document.getElementById("scroll-progress");
  const navbar = document.getElementById("navbar");
  const floatingCta = document.getElementById("floating-cta");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    
    if (scrollProgressBar) {
      scrollProgressBar.style.width = progress + "%";
    }

    if (navbar) {
      if (scrollTop > 85) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    }

    if (floatingCta) {
      if (scrollTop > 500) {
        floatingCta.classList.add("show");
      } else {
        floatingCta.classList.remove("show");
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* ====================================================
     5. HERO AREA MAGIC STARS BACKGROUND ENGINE
     ==================================================== */
  const particlesContainer = document.getElementById("hero-particles");
  
  if (particlesContainer) {
    const particleCount = 25;

    for (let i = 0; i < particleCount; i++) {
      const p = document.createElement("div");
      p.classList.add("particle");
      
      const size = Math.random() * 11 + 6;
      p.style.width = size + "px";
      p.style.height = size + "px";
      
      p.style.left = Math.random() * 100 + "%";
      p.style.top = Math.random() * 100 + "%";
      
      particlesContainer.appendChild(p);
      animateParticle(p);
    }
  }

  function animateParticle(elem) {
    const duration = 16000 + Math.random() * 22000;
    const keyframes = [
      { transform: "translate(0, 0) scale(1)", opacity: 0.12 },
      { transform: `translate(${Math.random() * 120 - 60}px, ${Math.random() * -220 - 60}px) scale(${Math.random() * 1.6 + 0.4})`, opacity: 0.28 },
      { transform: "translate(0, 0) scale(1)", opacity: 0.12 }
    ];

    elem.animate(keyframes, {
      duration: duration,
      iterations: Infinity,
      easing: "ease-in-out"
    });
  }

  /* ====================================================
     6. INTERACTIVE APP SHOWCASE TOUR SWITCHER (PORTRAIT)
     ==================================================== */
  const showcaseTabs = document.querySelectorAll(".showcase-tab");
  const showcaseImg = document.getElementById("showcase-image");
  
  // Swap squished landscape screenshots with beautiful PORTRAIT screenshots!
  const showcaseImages = [
    "Chapterscreen.png",         // Index 0: NCERT Master (Portrait)
    "Quiz Page Screen.png",      // Index 1: Smart Quizzes (Portrait)
    "Leaderboard Screen.png",     // Index 2: Global Leaderboard (Portrait)
    "Profile Page Screen.png"     // Index 3: Analytics (Portrait)
  ];

  showcaseTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      showcaseTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      
      const idx = parseInt(tab.getAttribute("data-target"));
      
      if (showcaseImg) {
        showcaseImg.classList.remove("active");
        setTimeout(() => {
          showcaseImg.src = showcaseImages[idx];
          showcaseImg.classList.add("active");
          showcaseImg.style.transform = "translateY(0)";
        }, 300);
      }
    });
  });

  /* ====================================================
     7. LAZY-LOAD SCROLL REVEALS & ACTIVE MENU SECTIONS
     ==================================================== */
  const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-item");

  function activateReveal(el) {
    el.classList.add("active");
    if (el.querySelector(".stat-val")) {
      triggerStatsCounter();
    }
  }

  function checkVisibleReveals() {
    revealElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 80) {
        activateReveal(el);
      }
    });
  }

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activateReveal(entry.target);
        }
      });
    }, { threshold: 0.05, rootMargin: "0px 0px -20px 0px" });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => activateReveal(el));
  }

  // Immediate check for above-the-fold content + failsafe timeouts
  checkVisibleReveals();
  setTimeout(checkVisibleReveals, 200);
  setTimeout(checkVisibleReveals, 800);
  setTimeout(() => {
    revealElements.forEach(el => el.classList.add("active"));
  }, 2000);

  window.addEventListener("scroll", () => {
    let currentSec = "";
    sections.forEach(sec => {
      const sectionTop = sec.offsetTop - 130;
      if (scrollY >= sectionTop) {
        currentSec = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === "#" + currentSec) {
        link.classList.add("active");
      }
    });
  });

  /* ====================================================
     8. AUTOMATED STATISTICS COUNT-UP MODULE
     ==================================================== */
  let statsStarted = false;
  function triggerStatsCounter() {
    if (statsStarted) return;
    statsStarted = true;

    const statValues = document.querySelectorAll(".stat-val");
    statValues.forEach(val => {
      const target = parseFloat(val.getAttribute("data-target"));
      const decimals = parseInt(val.getAttribute("data-decimals")) || 0;
      const suffix = val.getAttribute("data-suffix") || "";
      const duration = 2000;
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = easeProgress * target;

        val.textContent = currentValue.toFixed(decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ",") + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  /* ====================================================
     9. INTERACTIVE MCQ PLAYABLE WIDGET (MULTI-SUBJECT)
     ==================================================== */
  const quizDatabase = {
    science: [
      {
        question: "Which cell organelle is known as the 'Powerhouse of the Cell'?",
        options: ["Nucleus", "Ribosome", "Mitochondria", "Lysosome"],
        correct: 2,
        explanation: "Mitochondria generate cellular energy in the form of ATP molecules."
      },
      {
        question: "What is the chemical formula of common household table salt?",
        options: ["H₂O", "NaCl", "CO₂", "NaOH"],
        correct: 1,
        explanation: "Sodium Chloride (NaCl) is the chemical compound of table salt."
      },
      {
        question: "Which essential gas do green plants release during photosynthesis?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correct: 0,
        explanation: "Plants take in Carbon Dioxide and release Oxygen into the air."
      }
    ],
    math: [
      {
        question: "What is the value of Sin 30° + Cos 60° in basic trigonometry?",
        options: ["0.5", "1.0", "1.5", "2.0"],
        correct: 1,
        explanation: "Sin 30° = 1/2 and Cos 60° = 1/2. Therefore, 1/2 + 1/2 = 1.0."
      },
      {
        question: "If the discriminant (b² - 4ac) of a quadratic equation is > 0, the roots are:",
        options: ["Imaginary & Complex", "Real & Equal", "Real & Distinct", "Undefined"],
        correct: 2,
        explanation: "When D > 0, the quadratic formula yields two distinct real numbers."
      },
      {
        question: "What is the total surface area of a sphere having radius 'r'?",
        options: ["2πr²", "3πr²", "4πr²", "4/3 πr³"],
        correct: 2,
        explanation: "The total surface area of a sphere is 4πr²."
      }
    ],
    gk: [
      {
        question: "Who was the Chairman of the Drafting Committee of the Indian Constitution?",
        options: ["Mahatma Gandhi", "Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 1,
        explanation: "Dr. B.R. Ambedkar chaired the Drafting Committee of the Indian Constitution."
      },
      {
        question: "Which Indian state possesses the longest mainland coastline?",
        options: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
        correct: 2,
        explanation: "Gujarat has the longest mainland coastline in India, stretching over 1,600 km."
      },
      {
        question: "In which year was the historic Champaran Satyagraha in Bihar launched?",
        options: ["1915", "1917", "1919", "1921"],
        correct: 1,
        explanation: "The Champaran Satyagraha for indigo farmers took place in 1917."
      }
    ]
  };

  let activeSubject = "science";
  let currentQuestionIndex = 0;
  let userScore = 0;
  let timerInterval = null;
  let timeLeft = 30;
  let quizSoundEnabled = true;

  const quizCard = document.getElementById("quiz-card-content");
  const progressIndicator = document.getElementById("q-progress");
  const timerIndicator = document.getElementById("q-timer");
  const subjectBadge = document.getElementById("q-subject-badge");
  const soundToggleBtn = document.getElementById("quiz-sound-toggle");
  const subjectPills = document.querySelectorAll(".quiz-sub-pill");

  // Web Audio Chime Synthesizer
  function playQuizSound(isCorrect) {
    if (!quizSoundEnabled) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);

      if (isCorrect) {
        osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
        osc.frequency.setValueAtTime(880, ctx.currentTime + 0.1); // A5
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.4);
        osc.start();
        osc.stop(ctx.currentTime + 0.4);
      } else {
        osc.frequency.setValueAtTime(261.63, ctx.currentTime); // C4
        osc.frequency.setValueAtTime(220, ctx.currentTime + 0.1); // A3
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.35);
        osc.start();
        osc.stop(ctx.currentTime + 0.35);
      }
    } catch (err) {
      // Audio not permitted or supported
    }
  }

  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", () => {
      quizSoundEnabled = !quizSoundEnabled;
      soundToggleBtn.textContent = quizSoundEnabled ? "🔊 Sound ON" : "🔇 Sound OFF";
    });
  }

  subjectPills.forEach(pill => {
    pill.addEventListener("click", () => {
      subjectPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      activeSubject = pill.getAttribute("data-subject") || "science";
      
      const badgeTitles = {
        science: "🔬 Science Quiz",
        math: "📐 Mathematics Quiz",
        gk: "🏛️ General Studies Quiz"
      };
      if (subjectBadge) subjectBadge.textContent = badgeTitles[activeSubject] || "Interactive Practice";

      restartQuizGame();
    });
  });

  function startQuizTimer() {
    clearInterval(timerInterval);
    timeLeft = 30;
    if (timerIndicator) timerIndicator.textContent = `⏱️ Time Left: ${timeLeft}s`;
    
    timerInterval = setInterval(() => {
      timeLeft--;
      if (timerIndicator) timerIndicator.textContent = `⏱️ Time Left: ${timeLeft}s`;
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        handleOptionSelect(-1);
      }
    }, 1000);
  }

  function loadQuizQuestion() {
    if (!quizCard) return;
    const questions = quizDatabase[activeSubject] || quizDatabase.science;
    
    if (currentQuestionIndex >= questions.length) {
      showQuizCompletionScreen();
      return;
    }

    startQuizTimer();
    const currentQ = questions[currentQuestionIndex];
    
    if (progressIndicator) {
      const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;
      progressIndicator.style.width = progressPercentage + "%";
    }

    let optionsHtml = "";
    currentQ.options.forEach((opt, idx) => {
      optionsHtml += `
        <button class="q-opt" onclick="handleOptionSelect(${idx})">
          <span>${opt}</span>
          <span class="opt-indicator"></span>
        </button>
      `;
    });

    quizCard.innerHTML = `
      <div class="q-question">${currentQ.question}</div>
      <div class="q-options">
        ${optionsHtml}
      </div>
    `;
  }

  window.handleOptionSelect = function(selectedIndex) {
    clearInterval(timerInterval);
    const questions = quizDatabase[activeSubject] || quizDatabase.science;
    const currentQ = questions[currentQuestionIndex];
    const options = quizCard.querySelectorAll(".q-opt");

    options.forEach(opt => opt.disabled = true);

    const isCorrect = selectedIndex === currentQ.correct;
    playQuizSound(isCorrect);

    if (isCorrect) {
      userScore++;
      if (selectedIndex >= 0) {
        options[selectedIndex].classList.add("correct");
        options[selectedIndex].querySelector(".opt-indicator").textContent = "✓";
      }
      triggerSparkles(options[selectedIndex]);
    } else {
      if (selectedIndex >= 0) {
        options[selectedIndex].classList.add("incorrect");
        options[selectedIndex].querySelector(".opt-indicator").textContent = "✗";
      }
      options[currentQ.correct].classList.add("correct");
      options[currentQ.correct].querySelector(".opt-indicator").textContent = "✓";
    }

    setTimeout(() => {
      currentQuestionIndex++;
      loadQuizQuestion();
    }, 2000);
  };

  function triggerSparkles(element) {
    if (!element) return;
    const rect = element.getBoundingClientRect();
    
    for (let i = 0; i < 16; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "8px";
      particle.style.height = "8px";
      particle.style.borderRadius = "50%";
      particle.style.background = `hsl(${Math.random() * 360}, 100%, 60%)`;
      particle.style.left = `${rect.left + rect.width / 2}px`;
      particle.style.top = `${rect.top + rect.height / 2}px`;
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "999";
      particle.style.transition = "transform 0.9s ease-out, opacity 0.9s";
      
      document.body.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 50 + Math.random() * 80;
      const x = Math.cos(angle) * velocity;
      const y = Math.sin(angle) * velocity;

      setTimeout(() => {
        particle.style.transform = `translate(${x}px, ${y}px) scale(0)`;
        particle.style.opacity = "0";
      }, 40);

      setTimeout(() => {
        particle.remove();
      }, 950);
    }
  }

  function showQuizCompletionScreen() {
    if (progressIndicator) progressIndicator.style.width = "100%";
    if (timerIndicator) timerIndicator.textContent = "🏆 Quiz Completed!";

    const questions = quizDatabase[activeSubject] || quizDatabase.science;
    let trophy = "🥇";
    let rating = "Outstanding Topper!";
    if (userScore === 2) { trophy = "🥈"; rating = "Great Effort!"; }
    if (userScore < 2) { trophy = "🥉"; rating = "Keep Practicing!"; }

    quizCard.innerHTML = `
      <div class="quiz-result-view">
        <div class="q-res-icon">${trophy}</div>
        <div class="q-res-title">${rating}</div>
        <div class="q-res-score">Your Score: <span>${userScore}/${questions.length}</span></div>
        
        <div class="q-mini-leaderboard">
          <div class="q-ml-row" style="border-bottom: 1px solid var(--bdr); padding-bottom: 4px;">
            <span>Rank</span>
            <span>Student</span>
            <span>Score</span>
          </div>
          <div class="q-ml-row">
            <span>#1</span>
            <span>Anjali Verma (Topper)</span>
            <span>3/3</span>
          </div>
          <div class="q-ml-row current-user">
            <span>#2</span>
            <span>You (Aspirant)</span>
            <span>${userScore}/3</span>
          </div>
          <div class="q-ml-row">
            <span>#3</span>
            <span>Vikram Seth</span>
            <span>2/3</span>
          </div>
        </div>
        
        <div style="display: flex; gap: 10px; margin-top: 18px; flex-wrap: wrap; justify-content: center;">
          <button class="btn-main" onclick="restartQuizGame()" style="padding: 10px 22px; font-size: 0.9rem; border: none; cursor: pointer;">
            Try Again 🔄
          </button>
        </div>
      </div>
    `;
  }

  window.restartQuizGame = function() {
    currentQuestionIndex = 0;
    userScore = 0;
    loadQuizQuestion();
  };

  if (quizCard) loadQuizQuestion();

  /* ====================================================
     10. EXPANDED TESTIMONIALS SLIDER WITH TOUCH SWIPE
     ==================================================== */
  const track = document.getElementById("testimonial-track");
  
  if (track) {
    const slides = Array.from(track.children);
    const prevBtn = document.getElementById("prev-review-btn");
    const nextBtn = document.getElementById("next-review-btn");
    const dotsContainer = document.getElementById("carousel-dots");
    const dots = Array.from(dotsContainer.children);
    let activeSlideIndex = 0;

    function updateSlidePositions() {
      track.style.transform = `translateX(-${activeSlideIndex * 16.666}%)`;
      slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (idx === activeSlideIndex) slide.classList.add("active");
      });

      dots.forEach((dot, idx) => {
        dot.classList.remove("active");
        if (idx === activeSlideIndex) dot.classList.add("active");
      });
    }

    function nextSlide() {
      activeSlideIndex = (activeSlideIndex + 1) % slides.length;
      updateSlidePositions();
    }

    function prevSlide() {
      activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
      updateSlidePositions();
    }

    if (nextBtn) nextBtn.addEventListener("click", nextSlide);
    if (prevBtn) prevBtn.addEventListener("click", prevSlide);

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        activeSlideIndex = index;
        updateSlidePositions();
      });
    });

    let autoPlayReviews = setInterval(nextSlide, 6500);

    function resetAutoPlayTimer() {
      clearInterval(autoPlayReviews);
      autoPlayReviews = setInterval(nextSlide, 6500);
    }

    if (prevBtn && nextBtn) {
      [prevBtn, nextBtn, ...dots].forEach(elem => {
        elem.addEventListener("click", resetAutoPlayTimer);
      });
    }

    // Touch Swipe Gesture Detection for Mobile Devices
    let touchStartX = 0;
    let touchEndX = 0;

    track.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    track.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].screenX;
      if (touchStartX - touchEndX > 45) {
        nextSlide();
        resetAutoPlayTimer();
      } else if (touchEndX - touchStartX > 45) {
        prevSlide();
        resetAutoPlayTimer();
      }
    }, { passive: true });
  }

  /* ====================================================
     10B. SCREENSHOTS CATEGORY FILTER BAR
     ==================================================== */
  const filterPills = document.querySelectorAll(".filter-pill");
  const screenshotWraps = document.querySelectorAll(".sc-wrap");

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      filterPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");

      const filter = pill.getAttribute("data-filter") || "all";

      screenshotWraps.forEach(wrap => {
        const cat = wrap.getAttribute("data-category");
        if (filter === "all" || cat === filter) {
          wrap.classList.remove("hidden");
        } else {
          wrap.classList.add("hidden");
        }
      });
    });
  });

  /* ====================================================
     11. FAQs ACCORDION & REAL-TIME SEARCH FILTER
     ==================================================== */
  const faqItems = document.querySelectorAll(".faq-item");
  const faqSearchInput = document.getElementById("faq-search");
  const faqSearchClear = document.getElementById("faq-search-clear");
  const faqNoResults = document.getElementById("faq-no-results");

  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question-btn");
    if (questionBtn) {
      questionBtn.addEventListener("click", () => {
        const isActive = item.classList.contains("active");
        
        faqItems.forEach(oth => {
          oth.classList.remove("active");
        });

        if (!isActive) {
          item.classList.add("active");
        }
      });
    }
  });

  if (faqSearchInput) {
    faqSearchInput.addEventListener("input", () => {
      const query = faqSearchInput.value.trim().toLowerCase();
      let matchCount = 0;

      if (faqSearchClear) {
        faqSearchClear.style.display = query ? "flex" : "none";
      }

      faqItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (!query || text.includes(query)) {
          item.style.display = "";
          matchCount++;
        } else {
          item.style.display = "none";
          item.classList.remove("active");
        }
      });

      if (faqNoResults) {
        faqNoResults.style.display = matchCount === 0 ? "block" : "none";
      }
    });

    if (faqSearchClear) {
      faqSearchClear.addEventListener("click", () => {
        faqSearchInput.value = "";
        faqSearchClear.style.display = "none";
        faqItems.forEach(item => {
          item.style.display = "";
        });
        if (faqNoResults) faqNoResults.style.display = "none";
        faqSearchInput.focus();
      });
    }
  }

  /* ====================================================
     12. 3D HERO DEVICE PARALLAX TILT EFFECTS
     ==================================================== */
  const deviceFrames = document.querySelectorAll(".phone-frame");
  
  deviceFrames.forEach(frame => {
    frame.addEventListener("mousemove", (e) => {
      const rect = frame.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 12;
      const rotateY = ((x - centerX) / centerX) * 12;
      
      frame.style.animation = "none";
      frame.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    
    frame.addEventListener("mouseleave", () => {
      frame.style.transform = "";
      const index = Array.from(deviceFrames).indexOf(frame);
      if (index === 0) frame.style.animation = "float-1 6s ease-in-out infinite";
      if (index === 1) frame.style.animation = "float-2 5.2s ease-in-out infinite";
      if (index === 2) frame.style.animation = "float-3 6.8s ease-in-out infinite";
    });
  });

  /* ====================================================
     13. IMAGE LIGHTBOX MODAL VIEWER WITH KEYBOARD ARROWS
     ==================================================== */
  const lightboxModal = document.getElementById("lightbox-modal");
  const lightboxImg = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxCap = document.getElementById("lightbox-caption");
  const zoomImages = Array.from(document.querySelectorAll(".zoomable-img"));
  let activeLightboxIndex = -1;

  function openLightbox(idx) {
    if (!lightboxModal || !lightboxImg || idx < 0 || idx >= zoomImages.length) return;
    activeLightboxIndex = idx;
    const target = zoomImages[idx];
    lightboxImg.src = target.src;
    if (lightboxCap) {
      lightboxCap.textContent = target.alt || "Vidya Topper App Screen View";
    }
    lightboxModal.classList.add("active");
  }

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove("active");
      activeLightboxIndex = -1;
    }
  }

  zoomImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      openLightbox(index);
    });
  });

  if (lightboxClose && lightboxModal) {
    lightboxClose.addEventListener("click", closeLightbox);
    
    // Close modal on click outside of target image
    lightboxModal.addEventListener("click", (e) => {
      if (e.target === lightboxModal || e.target.classList.contains("lightbox-wrapper")) {
        closeLightbox();
      }
    });

    window.addEventListener("keydown", (e) => {
      if (!lightboxModal.classList.contains("active")) return;
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        activeLightboxIndex = (activeLightboxIndex + 1) % zoomImages.length;
        openLightbox(activeLightboxIndex);
      } else if (e.key === "ArrowLeft") {
        activeLightboxIndex = (activeLightboxIndex - 1 + zoomImages.length) % zoomImages.length;
        openLightbox(activeLightboxIndex);
      }
    });
  }

  /* ====================================================
     14. CINEMATIC HERO TITLE SMOOTH REVEAL
     ==================================================== */
  // Hero title and subtitle are animated via CSS heroFadeUp with GPU acceleration

  /* ====================================================
     15. BACKGROUND DRIFTING EDUCATIONAL BACKDROP ENGINE
     ==================================================== */
  const eduBg = document.getElementById("educational-icons-bg");
  if (eduBg) {
    const emojis = ["🎓", "📚", "💡", "📈", "✏️", "⭐", "🏆", "🧠", "🎯", "📝"];
    const count = 18;
    
    for (let i = 0; i < count; i++) {
      createFloatingIcon(emojis[Math.floor(Math.random() * emojis.length)], true);
    }

    function createFloatingIcon(emoji, initialRandomY) {
      const el = document.createElement("div");
      el.className = "edu-icon-bg";
      el.textContent = emoji;
      
      const size = Math.random() * 20 + 20; 
      const xStart = Math.random() * 100;
      const yStart = initialRandomY ? Math.random() * 100 : 105;
      const opacity = Math.random() * 0.08 + 0.04;
      
      el.style.fontSize = `${size}px`;
      el.style.left = `${xStart}%`;
      el.style.top = `${yStart}%`;
      el.style.opacity = opacity;
      
      eduBg.appendChild(el);
      
      animateFloatingIcon(el, initialRandomY);
    }
    
    function animateFloatingIcon(el, isInitial) {
      const duration = isInitial ? (15000 + Math.random() * 15000) : (25000 + Math.random() * 25000);
      const xMove = Math.random() * 160 - 80;
      const yMove = isInitial ? (Math.random() * -100 - 150) : (Math.random() * -300 - 400); 
      const rotation = Math.random() * 360 - 180;
      
      const keyframes = [
        { transform: "translate(0, 0) scale(1) rotate(0deg)", opacity: el.style.opacity },
        { transform: `translate(${xMove / 2}px, ${yMove / 2}px) scale(${Math.random() * 0.3 + 0.85}) rotate(${rotation / 2}deg)`, opacity: parseFloat(el.style.opacity) * 1.4 },
        { transform: `translate(${xMove}px, ${yMove}px) scale(1) rotate(${rotation}deg)`, opacity: 0 }
      ];
      
      const anim = el.animate(keyframes, {
        duration: duration,
        easing: "ease-in-out",
        fill: "forwards"
      });
      
      anim.onfinish = () => {
        el.remove();
        createFloatingIcon(emojis[Math.floor(Math.random() * emojis.length)], false);
      };
    }
  }

  /* ====================================================
     16. CURSOR AURA SPOTLIGHT GLOW TRAIL
     ==================================================== */
  const cursorGlow = document.createElement("div");
  cursorGlow.className = "mouse-glow";
  document.body.appendChild(cursorGlow);
  
  document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";
    cursorGlow.style.opacity = "1";
  });
  
  document.addEventListener("mouseleave", () => {
    cursorGlow.style.opacity = "0";
  });

  /* ====================================================
     17. INTERACTIVE CLICK SPARKLES BURST
     ==================================================== */
  const interactiveElements = document.querySelectorAll("a, button, .showcase-tab, .faq-question-btn, .tag");
  interactiveElements.forEach(elem => {
    elem.addEventListener("click", (e) => {
      triggerClickSparkles(e.clientX, e.clientY);
    });
  });

  function triggerClickSparkles(x, y) {
    if (!x || !y) return;
    for (let i = 0; i < 12; i++) {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      particle.style.width = "6px";
      particle.style.height = "6px";
      particle.style.borderRadius = "50%";
      particle.style.background = `hsl(${240 + Math.random() * 60}, 100%, 65%)`; // Purple-indigo sparkles
      particle.style.left = `${x}px`;
      particle.style.top = `${y}px`;
      particle.style.pointerEvents = "none";
      particle.style.zIndex = "9999";
      particle.style.transition = "transform 0.8s cubic-bezier(0.1, 0.8, 0.3, 1), opacity 0.8s";
      
      document.body.appendChild(particle);

      const angle = Math.random() * Math.PI * 2;
      const velocity = 30 + Math.random() * 50;
      const targetX = Math.cos(angle) * velocity;
      const targetY = Math.sin(angle) * velocity;

      setTimeout(() => {
        particle.style.transform = `translate(${targetX}px, ${targetY}px) scale(0)`;
        particle.style.opacity = "0";
      }, 30);

      setTimeout(() => {
        particle.remove();
      }, 900);
    }
  }

  /* ====================================================
     18. TOAST NOTIFICATION UTILITY
     ==================================================== */
  let toastTimer = null;
  window.showToast = function(message, icon = "✅", duration = 3000) {
    const toast = document.getElementById("toast");
    const toastText = document.getElementById("toast-text");
    if (!toast || !toastText) return;

    toastText.textContent = message;
    const iconSpan = toast.querySelector("span:first-child");
    if (iconSpan) iconSpan.textContent = icon;

    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove("show");
    }, duration);
  };

  /* ====================================================
     19. COPY EMAIL TO CLIPBOARD WITH TOAST
     ==================================================== */
  const copyEmailBtn = document.getElementById("copy-email-btn");
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      const email = copyEmailBtn.getAttribute("data-email") || "vidyatopper.in@gmail.com";
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(email).then(() => {
          showToast("Email copied to clipboard! (vidyatopper.in@gmail.com)", "📋");
        }).catch(() => {
          fallbackCopyEmail(email);
        });
      } else {
        fallbackCopyEmail(email);
      }
    });

    function fallbackCopyEmail(text) {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      showToast("Email copied to clipboard! (vidyatopper.in@gmail.com)", "📋");
    }
  }

  /* ====================================================
     20. QUICK INQUIRY / FEEDBACK MODAL CONTROLLER
     ==================================================== */
  const openModalBtn = document.getElementById("open-contact-modal-btn");
  const contactModal = document.getElementById("contact-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  if (openModalBtn && contactModal) {
    openModalBtn.addEventListener("click", () => {
      contactModal.classList.add("active");
    });

    if (modalCloseBtn) {
      modalCloseBtn.addEventListener("click", () => {
        contactModal.classList.remove("active");
      });
    }

    contactModal.addEventListener("click", (e) => {
      if (e.target === contactModal) {
        contactModal.classList.remove("active");
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && contactModal.classList.contains("active")) {
        contactModal.classList.remove("active");
      }
    });
  }

  window.handleContactSubmit = function(e) {
    e.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const category = document.getElementById("contact-category").value;
    const msg = document.getElementById("contact-msg").value.trim();

    // Construct Mailto draft
    const subject = encodeURIComponent(`[Vidya Topper - ${category}] From: ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCategory: ${category}\n\nMessage:\n${msg}`);
    const mailtoLink = `mailto:vidyatopper.in@gmail.com?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;
    showToast("Opening email client to send message...", "✉️");

    if (contactModal) {
      setTimeout(() => {
        contactModal.classList.remove("active");
        document.getElementById("contact-form").reset();
      }, 800);
    }
  };

  /* ====================================================
     21. DYNAMIC COPYRIGHT YEAR
     ==================================================== */
  const copyrightElem = document.getElementById("copyright-text");
  if (copyrightElem) {
    const currentYear = new Date().getFullYear();
    copyrightElem.textContent = `© ${currentYear} Vidya Topper. All rights reserved.`;
  }
});
