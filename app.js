/**
 * 동국e음 — 깔끔한 10장 PPT 슬라이드 컨트롤러 (16:9 고정 비율 + 발표자 노트 + 단축키)
 */
(function () {
  "use strict";

  const SLIDE_NOTES = [
    {
      title: "슬라이드 01. 표지 및 전체 구조",
      time: "권장 20초 (0:00~0:20)",
      text: "안녕하십니까, 교수님 그리고 동국대학교 교육학과 학우 여러분. 오늘 저희가 소개해 드릴 프로젝트는 교육학과 구성원을 하나로 연결하는 네트워크 플랫폼, ‘동국e음’입니다. 발표는 프로젝트 필요성인 WHY, 개발 기술과 구현 현황인 HOW, 예상되는 난제와 해결책인 CHALLENGES, 그리고 앞으로의 방향인 VISION 순서로 말씀드리겠습니다."
    },
    {
      title: "슬라이드 02. WHY 1 — 세 가지 단절 문제",
      time: "권장 40초 (0:20~1:00)",
      text: "먼저 왜 동국e음이 필요한지 세 가지 문제로 말씀드리겠습니다. 첫째는 ‘정보의 분산’입니다. 학교·학과 공지, 졸업요건, 복수전공 및 진로 정보가 여러 곳에 흩어져 있어 한눈에 파악하기 어렵습니다. 둘째는 ‘정보 격차’입니다. 수강 후기와 진로 경험이 개인 인맥에 의존해 공유되다 보니 접근성 차이가 발생합니다. 셋째는 ‘졸업생과의 연결 약화’로, 졸업 이후 교류가 줄어들며 선배들의 소중한 경험이 후배들에게 축적되지 못하는 문제가 있습니다."
    },
    {
      title: "슬라이드 03. WHY 2 — 핵심 해결 방향",
      time: "권장 20초 (1:00~1:20)",
      text: "이 세 가지 문제는 결국 하나의 해결 방향으로 연결됩니다. 흩어진 정보를 모으는 ‘정보의 통합’, 인맥 없이도 노하우를 나누는 ‘경험의 공유’, 선후배와 교수님을 잇는 ‘구성원 간 연결’이 바로 동국e음의 핵심 방향성입니다."
    },
    {
      title: "슬라이드 04. HOW 1 — 개발 기술 및 현재 구현 완료 기능",
      time: "권장 40초 (1:20~2:00)",
      text: "다음은 HOW, 개발 기술 및 현재 구현 현황입니다. 저희는 Google Antigravity, GitHub, Firebase Authentication, Cloud Firestore를 활용해 서비스를 구축했습니다. 현재 구현을 완료한 5가지 핵심 기능으로는 회원가입 및 로그인, 외부인 접근을 막는 관리자 승인 기반 접근 제어, 관리자 회원 관리 기능, 그리고 1:1 및 단체 실시간 채팅과 메시지 읽음 표시 기능을 구현 완료했습니다."
    },
    {
      title: "슬라이드 05. HOW 2 — 실제 서비스 화면",
      time: "권장 25초 (2:00~2:25)",
      text: "실제 구현된 동국e음 서비스 화면입니다. 왼쪽은 회원가입·로그인 및 관리자 승인 화면이며, 오른쪽은 학우들이 실시간으로 대화하고 메시지 읽음 여부를 확인하는 1:1 및 단체 채팅 화면입니다."
    },
    {
      title: "슬라이드 06. HOW 3 — 향후 개발할 기능 로드맵",
      time: "권장 55초 (2:25~3:20)",
      text: "이어서 향후 개발할 6가지 확장 기능입니다. 정보 통합을 위해 공식 학교·학과 공지 연동, 학사 일정 캘린더, 졸업요건 자가점검 개선을 개발할 예정이며, 경험 공유와 연결을 위해 진로·복수전공별 공유방, 졸업생 프로필 및 멘토링, 교수 상담 신청 및 지도교수 연결 기능을 단계적으로 추가할 계획입니다."
    },
    {
      title: "슬라이드 07. CHALLENGES ①·② — 회원 인증과 졸업생 참여",
      time: "권장 50초 (3:20~4:10)",
      text: "다음은 예상되는 난제와 해결 방향입니다. 첫째, ‘회원 인증의 정확성’ 문제입니다. 실제 교육학과 구성원인지 검증하기 어려운 점은 학교 이메일 인증과 별도의 소속 확인 절차를 결합해 해결하고자 합니다. 둘째, ‘졸업생의 지속적인 참여’ 문제입니다. 낮은 이용 동기와 멘토링 부담을 줄이기 위해 동문 네트워킹 공간을 제공하고 가벼운 단답형 ‘간편 멘토링’을 도입할 계획입니다."
    },
    {
      title: "슬라이드 08. CHALLENGES ③·④ — 실시간 채팅 관리와 정보 정확성",
      time: "권장 50초 (4:10~4:40)",
      text: "셋째, ‘실시간 채팅 관리’ 문제입니다. 부적절한 발언이나 개인정보 노출 우려에 대비해 신고·차단 기능을 구현하고 명확한 운영 기준을 마련하겠습니다. 넷째, ‘정보 정확성과 유지보수’ 문제입니다. 입학 연도별 졸업요건 차이와 AI 개발 과정의 오류를 방지하기 위해 반드시 공식 자료를 활용하고 반복 테스트를 진행하겠습니다."
    },
    {
      title: "슬라이드 09. VISION 1 — 교육학과 6대 요소 네트워크 연결",
      time: "권장 10초 (4:40~4:50)",
      text: "마지막으로 VISION입니다. 처음에는 각각 떨어져 있던 학교·학과 정보, 재학생, 졸업생, 교수, 학습 경험, 진로 정보가 이제 ‘동국e음’을 중심으로 하나의 네트워크로 연결됩니다."
    },
    {
      title: "슬라이드 10. VISION 2 — 최종 슬로건 및 마무리",
      time: "권장 10초 (4:50~5:00)",
      text: "‘정보를 잇고, 경험을 나누고, 사람을 연결하다.’ 선배의 경험이 후배의 자산이 되는 공간, 동국e음이 만들어 가겠습니다. 감사합니다."
    }
  ];

  let currentSlide = 0;
  let notesOpen = false;
  const startTime = Date.now();

  const stage = document.getElementById("ppt-stage");
  const slides = Array.from(document.querySelectorAll(".ppt-slide"));
  const dotsContainer = document.getElementById("ppt-dots");
  const btnPrev = document.getElementById("btn-prev");
  const btnNext = document.getElementById("btn-next");
  const btnNotes = document.getElementById("btn-notes");
  const btnFullscreen = document.getElementById("btn-fullscreen");
  const notesPanel = document.getElementById("notes-panel");
  const notesTitle = document.getElementById("notes-title");
  const notesTime = document.getElementById("notes-time");
  const notesText = document.getElementById("notes-text");
  const timerDisplay = document.getElementById("timer-display");

  function fitStage() {
    const scale = Math.min(window.innerWidth / 1920, window.innerHeight / 1080);
    stage.style.transform = `scale(${scale.toFixed(5)})`;
  }

  function showSlide(index) {
    currentSlide = Math.max(0, Math.min(slides.length - 1, index));
    slides.forEach((s, i) => s.classList.toggle("active", i === currentSlide));

    const dots = dotsContainer.querySelectorAll(".ppt-dot");
    dots.forEach((d, i) => d.classList.toggle("active", i === currentSlide));

    btnPrev.disabled = currentSlide === 0;
    btnNext.disabled = currentSlide === slides.length - 1;

    const n = SLIDE_NOTES[currentSlide];
    notesTitle.textContent = n.title;
    notesTime.textContent = n.time;
    notesText.textContent = n.text;
  }

  function initImageSlots() {
    [1, 2].forEach((num) => {
      const input = document.getElementById(`input-shot-${num}`);
      const img = document.getElementById(`img-shot-${num}`);
      if (!input || !img) return;
      input.addEventListener("change", (e) => {
        const file = e.target.files && e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (ev) => {
          img.src = ev.target.result;
          img.style.display = "block";
        };
        reader.readAsDataURL(file);
      });
    });
  }

  function init() {
    fitStage();
    window.addEventListener("resize", fitStage);

    slides.forEach((_, idx) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "ppt-dot";
      dot.textContent = String(idx + 1).padStart(2, "0");
      dot.addEventListener("click", () => showSlide(idx));
      dotsContainer.appendChild(dot);
    });

    btnPrev.addEventListener("click", () => showSlide(currentSlide - 1));
    btnNext.addEventListener("click", () => showSlide(currentSlide + 1));

    btnNotes.addEventListener("click", () => {
      notesOpen = !notesOpen;
      notesPanel.classList.toggle("hidden", !notesOpen);
    });

    btnFullscreen.addEventListener("click", () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    });

    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "PageDown") {
        e.preventDefault();
        showSlide(currentSlide + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();
        showSlide(currentSlide - 1);
      } else if (e.key === "f" || e.key === "F") {
        e.preventDefault();
        btnFullscreen.click();
      } else if (e.key === "n" || e.key === "N") {
        e.preventDefault();
        btnNotes.click();
      } else if (e.key === "Escape" && notesOpen) {
        notesOpen = false;
        notesPanel.classList.add("hidden");
      }
    });

    window.showSlide = showSlide;
    showSlide(0);

    setInterval(() => {
      const sec = Math.floor((Date.now() - startTime) / 1000);
      const mm = String(Math.floor(sec / 60)).padStart(2, "0");
      const ss = String(sec % 60).padStart(2, "0");
      timerDisplay.textContent = `${mm}:${ss} / 05:00`;
    }, 1000);
  }

  init();
})();
