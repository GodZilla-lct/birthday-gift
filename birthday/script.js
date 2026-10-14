/**
 * The Case of the Suspiciously Cute Human
 * A playful birthday investigation for your crush.
 * Customize every visitor-facing string in CONTENT below.
 */

const CONTENT = {
  brand: "THE CASE OF THE SUSPICIOUSLY CUTE HUMAN",
  
  // 1. Opening ambush
  ambushEyebrow: "⚠️ ALERT",
  ambushHeadline: "STOP.",
  ambushSubtext: "This website has been specifically instructed to deal with YOU. Don't panic. Actually, panic a little.",
  ambushButton: "Maine kya kea ha!",
  ambushResponse: "Interesting. abhi taq ap pr koi ilzzaam lgaya he nai.",

  // 2. Classified case file
  casefileTitle: "THE INVESTIGATION BEGINS",
  casefileSub: "File opened. Status: confidential.",
  casefileEyebrow: "📋 CASE FILE",
  classifiedLabel: "CLASSIFIED",
  caseSubjectLabel: "SUBJECT:",
  caseSubject: "Sawera, beautiful Birthday girl",
  caseStatusLabel: "STATUS:",
  caseStatus: "bohot zyada adorable",
  caseChargesLabel: "CHARGES:",
  caseCharges: "Bohot zyada cuteness • Bohot zyada attitude • Being unnecessarily difficult to forget",
  evidenceButton: "VIEW EVIDENCE",
  casefileContinue: "Main ya ilzam accept krti hun.",
  
  // Evidence cards (one per click)
  evidenceCards: [
    "Evidence A: Mulzima hud ko masuum btati ha, ya sab se bara red flag hai.",
    "Evidence B: ap ke ghar vale ap se tang hain.",
    "Evidence C: Ap ke zinda hone ka saboot mil chuka ha jabke hakatain abhi bhi cartoon vali hain.",
    "Evidence D: Hud e apne demag mai argument krti ha, or hudi se jeet jati ha..",
  ],

  // 3. Roast department
  roastTitle: "THE ROAST DEPARTMENT",
  roastSub: "Flip each card to see what we found in your file.",
  roastCards: [
    {
      front: "Professional overthinker",
      back: "Km socha kro bachi..",
    },
    {
      front: "Can't win an argument",
      back: "Behs ma nai jeet sakti.",
    },
    {
      front: "Acts innocent",
      back: "Sirf adaain masoom hain.",
    },
    {
      front: "Main-character syndrome",
      back: "Hud ko kuch zyada e smajhti ho",
    },
    {
      front: "Has the confidence",
      back: "Id to mangi nai jati apne crush se...",
    },
    {
      front: "Probably opened this",
      back: "Kya lgta is vale main ap ke tareef likhi ho ge?.",
    },
  ],
  roastContinue: "I'm totally not offended",

  // 4. Absolutely useless gift challenge
  giftsTitle: "THE ABSOLUTELY USELESS GIFT CHALLENGE",
  giftsSub: "Three boxes. Choose wisely. (You won't.)",
  giftBox1Label: "OPEN YOUR GIFT",
  giftBox1First: "Congratulations! Ap ko kuch bhi nahi mila.",
  giftBox1Second: "Still nothing. Kitni bhuki ho gifts ke...",
  giftBox1Third: "Hahahaha is ma bhi kuch nai ay..",
  
  giftBox2Label: "DEFINITELY THE GIFT",
  giftBox2First: "Your confidence is genuinely concerning.",
  giftBox2Second: "Confidence remains unshaken. Admirable.",
  giftBox2Third: "At this point it's just stubbornness.",
  
  giftBox3Label: "OKAY THIS ONE",
  giftBox3Real: "🎉 PLOT TWIST 🎉 You actually found something!",
  
  giftNudge: "mujh jesay dost hone ka baad bhi gift chahye, shame on you.",

  // 5. Birthday privilege test + cake
  privilegeTitle: "THE BIRTHDAY PRIVILEGE TEST",
  privilegeQuestion: "Bachpan se itni shrarti or badtmeez thi ya ab ja ke speed pakri?",
  privilegeAlways: "Bachpan se.",
  privilegeMind: "Main ab aa kr Badtmeez hui.",
  privilegeAlwaysResponse: "Respect. At least ap ne sach bola..",
  privilegeMindResponse: "Jhuuuutttiiii.",
  cakeSub: "Tap the candle to make a wish.",
  candleHint: "Tap the candle to make a wish",
  candleWish: "I hope today gives you a hundred reasons to smile.",
  privilegeContinue: "Continue",

  // 6. Secret button
  secretButton: "DO NOT PRESS",
  secretMessage: "You had ONE job.",

  // 7. Final plot twist
  finaleTitle: "ONE MORE THING",
  finalePause: "Okay, Chalo 10 seconds ka lea mazak htam krte hain..",
  finaleLetterHeading: "Dear lovely human,",
  finaleLetterBody:
    "I hope this year brings you happiness you don't have to chase, laughter that catches you off guard, and people who appreciate you exactly as you are. Allah ap ke sari huahishaat puri kre(ameen). You deserve a beautiful birthday and an even more beautiful year ahead. Hamesha hush raho or aysi e hasi khelti raho.",
  finaleClosing: "Anyway, Website dakh kr hawa main mt urrna, ap ke shrartainn vase kabu se bahir hain.",
  replayButton: "Dubara se Start.",
  
  footer: "Made with mischievous intent · Stay anonymous · No tracking, no creep",
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

let globalState = {
  currentSection: "ambush",
  allSectionsViewed: false,
};

function fillContent() {
  document.querySelectorAll("[data-content]").forEach((el) => {
    const key = el.getAttribute("data-content");
    if (key && Object.prototype.hasOwnProperty.call(CONTENT, key)) {
      el.textContent = CONTENT[key];
    }
  });
  document.title = CONTENT.brand;
}

function revealSection(section) {
  if (!section || !section.hasAttribute("hidden")) return;
  section.hidden = false;
  section.classList.remove("is-hidden");
  section.classList.add("is-revealing");
}

function hideSection(section) {
  if (!section) return;
  section.hidden = true;
  section.classList.add("is-hidden");
  section.classList.remove("is-revealing");
}

function scrollToSection(section) {
  if (!section) return;
  const behavior = prefersReducedMotion ? "auto" : "smooth";
  requestAnimationFrame(() => {
    section.scrollIntoView({ behavior, block: "start" });
  });
}

function spawnConfetti(container) {
  if (!container || prefersReducedMotion) return;
  const colors = ["#e8b7d0", "#f0d0a8", "#c9b6e4", "#b9d9cf", "#f9dde8", "#7a5f6c"];
  for (let i = 0; i < 28; i += 1) {
    const piece = document.createElement("span");
    piece.className = "confetti-piece";
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.background = colors[i % colors.length];
    piece.style.animationDelay = `${Math.random() * 0.45}s`;
    piece.style.animationDuration = `${1.8 + Math.random() * 1.1}s`;
    container.appendChild(piece);
  }
  window.setTimeout(() => {
    container.replaceChildren();
  }, 3200);
}

/* ========== 1. OPENING AMBUSH ========== */
function setupAmbush() {
  const btn = document.getElementById("ambush-btn");
  const response = document.getElementById("ambush-response");
  const alert = document.getElementById("dramatic-alert");
  const ambushStage = document.getElementById("ambush-stage");

  if (!btn) return;

  let clicked = false;

  btn.addEventListener("click", () => {
    if (clicked) return;
    clicked = true;

    // Shake animation
    btn.classList.add("shake");
    if (!prefersReducedMotion) {
      window.setTimeout(() => btn.classList.remove("shake"), 500);
    }

    // Show dramatic alert
    if (alert) {
      alert.classList.add("is-active");
      if (!prefersReducedMotion) {
        window.setTimeout(() => alert.classList.remove("is-active"), 600);
      }
    }

    // Show response
    if (response) {
      response.hidden = false;
      response.textContent = CONTENT.ambushResponse;
    }

    // Transition to case file
    const delay = prefersReducedMotion ? 300 : 1400;
    window.setTimeout(() => {
      globalState.currentSection = "casefile";
      const casefile = document.getElementById("casefile");
      revealSection(casefile);
      scrollToSection(casefile);
    }, delay);
  });
}

/* ========== 2. CLASSIFIED CASE FILE ========== */
function setupCaseFile() {
  const btn = document.getElementById("evidence-btn");
  const stack = document.getElementById("evidence-stack");
  const continueBtn = document.getElementById("casefile-continue");
  let evidenceIndex = 0;

  if (!btn) return;

  btn.addEventListener("click", () => {
    if (evidenceIndex >= CONTENT.evidenceCards.length) return;

    const card = document.createElement("div");
    card.className = "evidence-card";
    card.setAttribute("role", "article");
    card.setAttribute("aria-label", `Evidence card ${evidenceIndex + 1}`);
    card.textContent = CONTENT.evidenceCards[evidenceIndex];
    
    card.style.animationDelay = `${evidenceIndex * 0.1}s`;
    stack.appendChild(card);

    evidenceIndex += 1;

    if (evidenceIndex >= CONTENT.evidenceCards.length) {
      btn.disabled = true;
      btn.style.opacity = "0.5";
      if (continueBtn) {
        continueBtn.hidden = false;
        continueBtn.classList.remove("is-hidden");
      }
    }
  });

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      globalState.currentSection = "birthday";
      const birthday = document.getElementById("birthday");
      revealSection(birthday);
      scrollToSection(birthday);
    });
  }
}

/* ========== 4. GIFT CHALLENGE ========== */
function setupGiftChallenge() {
  const grid = document.getElementById("gift-grid");
  const realGiftReveal = document.getElementById("real-gift-reveal");
  const continueBtn = document.getElementById("gifts-continue");
  if (!grid) return;

  const giftState = {
    box1Clicks: 0,
    box2Clicks: 0,
    box3Clicks: 0,
    realGiftOpened: false,
  };

  // Box 1
  const item1 = document.createElement("div");
  item1.className = "mystery-item";
  
  const box1 = document.createElement("button");
  box1.type = "button";
  box1.className = "mystery-box";
  box1.setAttribute("aria-label", "Gift box 1: Open your gift");
  box1.innerHTML = `<span class="mystery-lid" aria-hidden="true"></span><span class="mystery-bow" aria-hidden="true"></span>`;

  const reveal1 = document.createElement("p");
  reveal1.className = "mystery-reveal";
  reveal1.hidden = true;

  box1.addEventListener("click", () => {
    if (giftState.realGiftOpened) return;
    
    giftState.box1Clicks += 1;
    
    let msg = CONTENT.giftBox1First;
    if (giftState.box1Clicks === 2) msg = CONTENT.giftBox1Second;
    if (giftState.box1Clicks >= 3) msg = CONTENT.giftBox1Third;

    reveal1.textContent = msg;
    
    if (giftState.box1Clicks === 1) {
      box1.classList.add("is-open");
      reveal1.hidden = false;
      reveal1.classList.add("is-shown");
    } else {
      reveal1.textContent = msg;
    }
  });

  item1.append(box1, reveal1);
  grid.appendChild(item1);

  // Box 2
  const item2 = document.createElement("div");
  item2.className = "mystery-item";
  
  const box2 = document.createElement("button");
  box2.type = "button";
  box2.className = "mystery-box";
  box2.setAttribute("aria-label", "Gift box 2: Definitely the gift");
  box2.innerHTML = `<span class="mystery-lid" aria-hidden="true"></span><span class="mystery-bow" aria-hidden="true"></span>`;

  const reveal2 = document.createElement("p");
  reveal2.className = "mystery-reveal";
  reveal2.hidden = true;

  box2.addEventListener("click", () => {
    if (giftState.realGiftOpened) return;
    
    giftState.box2Clicks += 1;
    
    let msg = CONTENT.giftBox2First;
    if (giftState.box2Clicks === 2) msg = CONTENT.giftBox2Second;
    if (giftState.box2Clicks >= 3) msg = CONTENT.giftBox2Third;

    reveal2.textContent = msg;
    
    if (giftState.box2Clicks === 1) {
      box2.classList.add("is-open");
      reveal2.hidden = false;
      reveal2.classList.add("is-shown");
    } else {
      reveal2.textContent = msg;
    }
  });

  item2.append(box2, reveal2);
  grid.appendChild(item2);

  // Box 3 - THE REAL GIFT
  const item3 = document.createElement("div");
  item3.className = "mystery-item";
  
  const box3 = document.createElement("button");
  box3.type = "button";
  box3.className = "mystery-box";
  box3.setAttribute("aria-label", "Gift box 3: The real gift");
  box3.innerHTML = `<span class="mystery-lid" aria-hidden="true"></span><span class="mystery-bow" aria-hidden="true"></span>`;

  const reveal3 = document.createElement("p");
  reveal3.className = "mystery-reveal";
  reveal3.hidden = true;

  box3.addEventListener("click", () => {
    if (giftState.realGiftOpened || box3.classList.contains("is-open")) return;
    
    giftState.realGiftOpened = true;
    box3.classList.add("is-open");
    reveal3.textContent = CONTENT.giftBox3Real;
    reveal3.hidden = false;
    reveal3.classList.add("is-shown");
    
    const confetti = document.getElementById("gift-confetti");
    spawnConfetti(confetti);

    realGiftReveal.classList.remove("is-hidden");
    realGiftReveal.hidden = false;

    const delay = prefersReducedMotion ? 300 : 1200;
    window.setTimeout(() => {
      continueBtn.hidden = false;
      continueBtn.classList.remove("is-hidden");
    }, delay);
  });

  item3.append(box3, reveal3);
  grid.appendChild(item3);

  // Continue button
  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      globalState.currentSection = "privilege";
      const privilege = document.getElementById("privilege");
      revealSection(privilege);
      scrollToSection(privilege);
    });
  }
}

/* ========== 5. PRIVILEGE SECTION (simplified) ========== */
function setupPrivilege() {
  const alwaysBtn = document.getElementById("quiz-always");
  const mindBtn = document.getElementById("quiz-mind");
  const response = document.getElementById("quiz-response");
  const continueBtn = document.getElementById("privilege-continue");

  if (!alwaysBtn || !mindBtn) return;

  let answered = false;

  alwaysBtn.addEventListener("click", () => {
    if (answered) return;
    answered = true;
    response.hidden = false;
    response.textContent = CONTENT.privilegeAlwaysResponse;
    
    if (continueBtn) {
      const delay = prefersReducedMotion ? 300 : 800;
      window.setTimeout(() => {
        continueBtn.hidden = false;
        continueBtn.classList.remove("is-hidden");
      }, delay);
    }
  });

  mindBtn.addEventListener("click", () => {
    if (answered) return;
    answered = true;
    response.hidden = false;
    response.textContent = CONTENT.privilegeMindResponse;
    
    if (continueBtn) {
      const delay = prefersReducedMotion ? 300 : 800;
      window.setTimeout(() => {
        continueBtn.hidden = false;
        continueBtn.classList.remove("is-hidden");
      }, delay);
    }
  });

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      globalState.currentSection = "finale";
      const finale = document.getElementById("finale");
      revealSection(finale);
      scrollToSection(finale);
    });
  }
}

/* ========== BIRTHDAY CAKE ========== */
function setupBirthday() {
  const candleBtn = document.getElementById("candle-btn");
  const candleMsg = document.getElementById("candle-msg");
  const continueBtn = document.getElementById("birthday-continue");

  if (!candleBtn || !candleMsg) return;

  candleBtn.addEventListener("click", () => {
    if (candleBtn.classList.contains("is-extinguished")) return;
    
    candleBtn.classList.add("is-extinguished");
    candleBtn.setAttribute("aria-pressed", "true");
    candleBtn.setAttribute("aria-label", "Candle extinguished");
    
    candleMsg.textContent = CONTENT.candleWish;
    candleMsg.classList.add("is-wish");

    const confetti = document.getElementById("birthday-confetti");
    spawnConfetti(confetti);

    if (continueBtn) {
      const delay = prefersReducedMotion ? 300 : 1200;
      window.setTimeout(() => {
        continueBtn.hidden = false;
        continueBtn.classList.remove("is-hidden");
      }, delay);
    }
  });

  if (continueBtn) {
    continueBtn.addEventListener("click", () => {
      globalState.currentSection = "gifts";
      const gifts = document.getElementById("gifts");
      revealSection(gifts);
      scrollToSection(gifts);
    });
  }
}

/* ========== OLD PRIVILEGE SECTION (Remove candle) ========== */

/* ========== 6. SECRET BUTTON ========== */
function setupSecretButton() {
  const btn = document.getElementById("secret-btn");
  const toast = document.getElementById("secret-toast");

  if (!btn) return;

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    if (toast) {
      toast.textContent = CONTENT.secretMessage;
      toast.hidden = false;

      if (!prefersReducedMotion) {
        toast.style.animation = "none";
        window.setTimeout(() => {
          toast.style.animation = "toastPop 0.4s cubic-bezier(0.22, 1, 0.36, 1) both";
        }, 10);
      }

      window.setTimeout(() => {
        toast.hidden = true;
      }, 2800);
    }
  });
}

/* ========== 7. FINALE ========== */
function setupFinale() {
  const letterWrap = document.getElementById("finale-letter-wrap");
  const letterText = document.getElementById("letter-text");
  const replayBtn = document.getElementById("replay-btn");
  const finalePause = document.getElementById("finale-pause");

  if (!letterWrap || !letterText) return;

  function typeLetter(text) {
    letterText.replaceChildren();
    if (prefersReducedMotion) {
      letterText.textContent = text;
      return;
    }

    const textNode = document.createTextNode("");
    const caret = document.createElement("span");
    caret.className = "caret";
    caret.setAttribute("aria-hidden", "true");
    letterText.append(textNode, caret);

    let i = 0;
    const speed = 28;

    function tick() {
      if (i >= text.length) {
        caret.remove();
        if (replayBtn) {
          replayBtn.hidden = false;
        }
        return;
      }
      textNode.textContent += text.charAt(i);
      i += 1;
      window.setTimeout(tick, speed);
    }

    tick();
  }

  // Trigger on finale reveal
  const observer = new MutationObserver(() => {
    if (!document.getElementById("finale").hasAttribute("hidden")) {
      const delay = prefersReducedMotion ? 500 : 2500;
      window.setTimeout(() => {
        if (letterWrap) {
          letterWrap.hidden = false;
          letterWrap.classList.remove("is-hidden");
          letterWrap.classList.add("is-shown");
          typeLetter(CONTENT.finaleLetterBody);
        }
      }, delay);
      observer.disconnect();
    }
  });

  observer.observe(document.getElementById("finale"), { attributes: true });

  if (replayBtn) {
    replayBtn.addEventListener("click", () => {
      window.location.reload();
    });
  }
}

/* ========== INITIALIZE ========== */
document.addEventListener("DOMContentLoaded", () => {
  fillContent();
  
  setupAmbush();
  setupCaseFile();
  setupBirthday();
  setupGiftChallenge();
  setupPrivilege();
  setupSecretButton();
  setupFinale();
});
