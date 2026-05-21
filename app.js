// ====================================================
// CONTEST DATA AND INLINE ILLUSTRATIONS (SVG)
// ====================================================
const CONTESTS_DATA = [
  {
    id: "keyring",
    title: "키링 공모전",
    month: 6,
    monthText: "6월",
    summary: "나만의 예쁜 키링 디자인을 설계하고 실제 키링 굿즈로 탄생시킬 특별한 기회!",
    description: "독창적이고 실용적인 키링 디자인 시안을 공모합니다. 캐릭터, 로고, 타이포그래피 등 자유로운 주제로 참여하세요. 수상작은 실제 고품질 아크릴 키링으로 무료 제작되어 참가자와 학급원 전체에 증정됩니다.",
    rules: [
      "참가 대상: 전 학년 학생 누구나 (개인 참여)",
      "규격: 최대 50mm x 50mm 이내 규격 (해상도 300dpi 이상 PNG/SVG 권장)",
      "제출물: 키링 앞면 디자인 시안 이미지 파일",
      "심사 기준: 창의성(40%), 실용성(30%), 완성도(30%)"
    ],
    submissionType: "image",
    inputLabel: "키링 디자인 도안 이미지",
    placeholder: "PNG, JPG, SVG 형식의 파일 (최대 5MB)",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="32" cy="18" r="10" />
      <circle cx="32" cy="18" r="4" />
      <path d="M32 28v10" />
      <rect x="22" y="38" width="20" height="20" rx="4" />
      <circle cx="32" cy="48" r="4" fill="currentColor" fill-opacity="0.15" />
    </svg>`
  },
  {
    id: "cuttoon",
    title: "안전 사고 예방 컷툰",
    month: 7,
    monthText: "7월",
    summary: "일상 속 안전의 중요성을 재미있고 유익한 4컷 만화로 표현해보세요.",
    description: "학교, 가정, 길거리 등 일상생활 속에서 일어날 수 있는 다양한 안전사고(교통안전, 실험실 안전, 미끄러짐 등)를 예방하기 위한 수칙이나 경각심을 주는 스토리를 4컷 만화로 공모합니다.",
    rules: [
      "참가 대상: 초/중/고등학생 개인 혹은 2인 이하의 팀",
      "규격: 4컷 구성의 이미지 파일 (가로형/세로형 자유)",
      "제출물: 완결된 만화 원고 이미지 파일",
      "심사 기준: 주제 전달력(50%), 흥미성(30%), 표현력(20%)"
    ],
    submissionType: "image",
    inputLabel: "컷툰 완성 원고 이미지",
    placeholder: "PNG, JPG 형식의 이미지 파일 (최대 5MB)",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="6" />
      <path d="M8 32h48M32 8v48" />
      <circle cx="20" cy="20" r="4" fill="currentColor" fill-opacity="0.1" />
      <path d="M40 24l8-8M42 44h8M18 42l4 4 4-4" />
    </svg>`
  },
  {
    id: "library",
    title: "온라인 도서관",
    month: 9,
    monthText: "9월",
    summary: "독서의 달을 맞이하여 내 인생의 책을 소개하고 감동을 나누어 주세요.",
    description: "9월 독서의 달을 기념하여 다른 친구들에게 꼭 추천하고 싶은 책이나 나의 인생에 깊은 영감을 준 도서를 한 편 골라 멋진 한 줄 평과 독서 리뷰를 남기는 비대면 도서 박람회 대회입니다.",
    rules: [
      "참가 대상: 전 학년 학생 누구나",
      "제출 내용: 추천 책 제목, 저자, 그리고 150자 이내의 마음을 울리는 한 줄 평 및 추천 사유",
      "심사 기준: 진정성(40%), 독창성(30%), 공감도(30%)",
      "혜택: 선정된 추천평은 도서관 전시 공간 및 웹 사이트 메인에 배너 형태로 게재됩니다."
    ],
    submissionType: "text_fields",
    textFields: [
      { id: "book-title", label: "추천 도서 제목", placeholder: "예) 어린 왕자", type: "text" },
      { id: "book-author", label: "도서 저자 (작가)", placeholder: "예) 생텍쥐페리", type: "text" },
      { id: "book-review", label: "한 줄 평 & 추천 사유 (150자 이내)", placeholder: "이 책이 나에게 어떤 감동을 주었는지 적어주세요...", type: "textarea" }
    ],
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 12V52c0 2 2 4 4 4h48V8H8c-2 0-4 2-4 4z" />
      <path d="M8 8v44c0 2 2 4 4 4" />
      <path d="M18 20h28M18 30h28M18 40h18" />
    </svg>`
  },
  {
    id: "transcription",
    title: "디지털 필사",
    month: 10,
    monthText: "10월",
    summary: "한글날이 있는 10월, 우리 글의 아름다움을 디지털 펜이나 키보드로 깊이 새겨봅니다.",
    description: "선정된 멋진 시 구절이나 명문장을 온전히 읽고, 이를 손글씨나 태블릿 펜으로 필사하여 제출하거나 타이핑을 통한 감상을 남깁니다. 한글의 시각적 멋과 문장의 가치를 음미하는 시간입니다.",
    rules: [
      "참가 대상: 아름다운 한글을 사랑하는 학생 누구나",
      "제출 방식: [선택 1] 디지털 기기(아이패드, 갤럭시탭 등)로 필사한 이미지 파일 제출, [선택 2] 제공되는 양식에 타자로 텍스트 타이핑 제출",
      "심사 기준: 글씨의 정성 및 가독성(50%), 디자인 조화(30%), 필사 완성도(20%)"
    ],
    submissionType: "image_or_text",
    inputLabel: "필사 작품 또는 감상",
    placeholder: "필사한 손글씨 이미지(PNG/JPG)를 업로드하거나 아래 텍스트 상자에 마음을 담아 입력해주세요.",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 20h30M12 32h20" />
      <path d="M38 10h14v44H12c-2.2 0-4-1.8-4-4V12c0-2.2 1.8-4 4-4h26v2" />
      <path d="M44 48l12-12-4-4-12 12v4h4z" />
    </svg>`
  },
  {
    id: "pixelart",
    title: "픽셀아트",
    month: 11,
    monthText: "11월",
    summary: "네모난 픽셀 속에 담아내는 나만의 디지털 세상과 미니멀리즘 디자인.",
    description: "레트로 감성을 자극하는 픽셀 도트 그래픽 대회입니다. 정해진 그리드 칸 안에 마술처럼 찍어내리는 점들로 인물, 동물, 풍경, 미래 과학 등 자신만의 주제를 자유롭게 표현해 보세요.",
    rules: [
      "참가 대상: 도트 그래픽과 레트로 감성을 좋아하는 학생",
      "규격: 16x16, 32x32, 64x64 도트 사이즈의 디지털 픽셀 이미지",
      "제출물: 픽셀아트 제작 툴이나 웹앱에서 그린 도트 결과물 이미지 파일",
      "심사 기준: 창의성(40%), 도트 정밀성(30%), 색상 조화(30%)"
    ],
    submissionType: "image",
    inputLabel: "도트 픽셀아트 이미지 파일",
    placeholder: "PNG, JPG 형식의 픽셀 파일 (투명 배경 권장, 최대 5MB)",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="8" y="8" width="48" height="48" rx="4" />
      <path d="M8 20h48M8 32h48M8 44h48M20 8v48M32 8v48M44 8v48" />
      <rect x="23" y="23" width="6" height="6" fill="currentColor" />
      <rect x="35" y="35" width="6" height="6" fill="currentColor" />
      <rect x="35" y="23" width="6" height="6" fill="currentColor" />
    </svg>`
  },
  {
    id: "friendship",
    title: "우정사진",
    month: 12,
    monthText: "12월",
    summary: "한 해를 마무리하며, 가장 소중한 친구들과의 잊지 못할 추억을 카메라에 담아보세요.",
    description: "친구들과 함께한 소소한 일상, 신나는 특별한 모험, 따뜻한 연말 감성이 가득한 우정 사진을 제출합니다. 사진 속에 담긴 따뜻하고 장난기 어린 소중한 스토리도 함께 나누어 주세요.",
    rules: [
      "참가 대상: 동급생, 선후배 등 2인 이상이 함께 촬영한 사진",
      "제출물: 인화 가능한 수준의 선명한 단체/우정 사진 파일 및 사진 소개글",
      "심사 기준: 따뜻함 및 우정 전달도(50%), 독창적인 포즈(30%), 사진의 구도(20%)",
      "혜택: 선정작들은 12월 말 학교 복도 갤러리에 폴라로이드 감성 스타일로 대대적으로 인화/전시됩니다."
    ],
    submissionType: "image",
    inputLabel: "친구들과 함께 찍은 소중한 사진 파일",
    placeholder: "JPEG, PNG 원본 사진 파일 (최대 8MB)",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="8" width="44" height="48" rx="4" />
      <rect x="14" y="12" width="36" height="32" />
      <circle cx="32" cy="26" r="5" fill="currentColor" fill-opacity="0.1" />
      <path d="M14 40l10-10 8 8 6-6 12 12" />
      <circle cx="32" cy="50" r="2" fill="currentColor" />
    </svg>`
  }
];

// ====================================================
// STATE MANAGEMENT & USER SESSION CONFIGURATION
// ====================================================
let currentVirtualMonth = 5; // Default is May (5월)
let activeContest = null;
let uploadBase64Data = null; 

// User Authentication States
let currentUser = null;

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initVirtualTime();
  initUserSession();
  renderContestGrid();
  setupEventListeners();
  updateLiveCounters();
});

// ====================================================
// THEME SWITCHER
// ====================================================
function initTheme() {
  const savedTheme = localStorage.getItem("soro_theme") || "dark";
  const body = document.body;
  
  if (savedTheme === "light") {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    updateThemeIcon("light");
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    updateThemeIcon("dark");
  }
}

function toggleTheme() {
  const body = document.body;
  let newTheme = "dark";
  
  if (body.classList.contains("dark-theme")) {
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    newTheme = "light";
  } else {
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    newTheme = "dark";
  }
  
  localStorage.setItem("soro_theme", newTheme);
  updateThemeIcon(newTheme);
  showToast(`${newTheme === "dark" ? "다크 테마" : "라이트 테마"}로 변경되었습니다.`, "info");
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById("theme-icon");
  if (theme === "light") {
    themeIcon.innerHTML = `
      <path d="M12 3a6.79 6.79 0 0 0-6.79 6.79A6.79 6.79 0 0 0 12 16.58a6.59 6.59 0 0 0 4.13-1.45l.13-.1 1.62 1.62.1.13A9.76 9.76 0 0 1 12 21a9 9 0 1 1 0-18Z"></path>
    `;
  } else {
    themeIcon.innerHTML = `
      <circle cx="12" cy="12" r="4"></circle>
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"></path>
    `;
  }
}

// ====================================================
// VIRTUAL TIME CONTROLLER
// ====================================================
function initVirtualTime() {
  const savedMonth = sessionStorage.getItem("soro_virtual_month");
  if (savedMonth) {
    currentVirtualMonth = parseInt(savedMonth, 10);
  }
  
  const buttons = document.querySelectorAll(".month-btn");
  buttons.forEach(btn => {
    const monthVal = parseInt(btn.getAttribute("data-month"), 10);
    if (monthVal === currentVirtualMonth) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  document.getElementById("stat-current-month").textContent = `${currentVirtualMonth}월`;
}

function setVirtualMonth(month) {
  currentVirtualMonth = month;
  sessionStorage.setItem("soro_virtual_month", month);
  
  document.querySelectorAll(".month-btn").forEach(btn => {
    const monthVal = parseInt(btn.getAttribute("data-month"), 10);
    if (monthVal === currentVirtualMonth) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });
  
  document.getElementById("stat-current-month").textContent = `${currentVirtualMonth}월`;
  renderContestGrid();
  updateLiveCounters();
  
  // If contest drawer is currently open, refresh status layout
  if (activeContest) {
    openContestDetails(activeContest.id);
  }
  
  showToast(`가상의 현재 날짜가 [${month}월]로 변경되었습니다.`, "info");
}

// ====================================================
// USER SESSION (SIGNUP / LOGIN / LOGOUT) LOGIC
// ====================================================
function initUserSession() {
  const savedUser = localStorage.getItem("soro_current_user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    updateUIForLoggedInState();
  } else {
    currentUser = null;
    updateUIForLoggedOutState();
  }
}

function updateUIForLoggedInState() {
  document.getElementById("auth-trigger-btn").style.display = "none";
  document.getElementById("logout-btn").style.display = "inline-flex";
  document.getElementById("lookup-toggle-btn").style.display = "inline-flex";
  
  const profileBadge = document.getElementById("user-profile-badge");
  const infoText = document.getElementById("user-info-text");
  
  infoText.textContent = `${currentUser.school} ${currentUser.grade}학년 ${currentUser.classNum}반 ${currentUser.name} 학생`;
  profileBadge.style.display = "inline-flex";
  
  // Close Auth Drawer if it is open
  closeAuthDrawer();
}

function updateUIForLoggedOutState() {
  document.getElementById("auth-trigger-btn").style.display = "inline-flex";
  document.getElementById("logout-btn").style.display = "none";
  document.getElementById("lookup-toggle-btn").style.display = "none";
  document.getElementById("user-profile-badge").style.display = "none";
}

function executeLogout() {
  localStorage.removeItem("soro_current_user");
  currentUser = null;
  updateUIForLoggedOutState();
  updateLiveCounters();
  
  // If contest drawer is open, force redraw
  if (activeContest) {
    openContestDetails(activeContest.id);
  }
  
  showToast("로그아웃 되었습니다.", "info");
}

function handleSignUp(username, password, name, phone, school, grade, classNum, number) {
  const users = JSON.parse(localStorage.getItem("soro_users") || "[]");
  
  // Username overlap verification
  const exists = users.find(u => u.username.toLowerCase() === username.toLowerCase());
  if (exists) {
    showToast("이미 존재하는 아이디입니다. 다른 아이디를 입력해주세요.", "error");
    return false;
  }
  
  const newUser = {
    username: username,
    password: password,
    name: name,
    phone: phone,
    school: school,
    grade: grade,
    classNum: classNum,
    number: number
  };
  
  users.push(newUser);
  localStorage.setItem("soro_users", JSON.stringify(users));
  
  // Log in immediately
  currentUser = newUser;
  localStorage.setItem("soro_current_user", JSON.stringify(newUser));
  updateUIForLoggedInState();
  updateLiveCounters();
  
  // If drawer is open, refresh forms
  if (activeContest) {
    openContestDetails(activeContest.id);
  }
  
  showToast(`${name} 학생의 가입과 로그인이 완료되었습니다! 🎉`, "success");
  return true;
}

function handleLogin(username, password) {
  const users = JSON.parse(localStorage.getItem("soro_users") || "[]");
  const user = users.find(u => u.username.toLowerCase() === username.toLowerCase() && u.password === password);
  
  if (!user) {
    showToast("아이디 혹은 비밀번호가 일치하지 않습니다.", "error");
    return false;
  }
  
  currentUser = user;
  localStorage.setItem("soro_current_user", JSON.stringify(user));
  updateUIForLoggedInState();
  updateLiveCounters();
  
  // If drawer is open, refresh forms
  if (activeContest) {
    openContestDetails(activeContest.id);
  }
  
  showToast(`${user.name} 학생, 로그인 성공을 환영합니다! 🚀`, "success");
  return true;
}

// ====================================================
// AUTHENTICATION DRAWERS & TABS CONTROL
// ====================================================
function openAuthDrawer(defaultTab = "login") {
  const drawer = document.getElementById("auth-drawer");
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  
  switchAuthTab(defaultTab);
}

function closeAuthDrawer() {
  const drawer = document.getElementById("auth-drawer");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  
  document.getElementById("login-form").reset();
  document.getElementById("signup-form").reset();
  document.querySelectorAll(".auth-panel .form-group.has-error").forEach(g => g.classList.remove("has-error"));
}

function switchAuthTab(tabName) {
  const tabLogin = document.getElementById("tab-login-btn");
  const tabSignup = document.getElementById("tab-signup-btn");
  const panelLogin = document.getElementById("login-panel");
  const panelSignup = document.getElementById("signup-panel");
  
  if (tabName === "login") {
    tabLogin.classList.add("active");
    tabSignup.classList.remove("active");
    panelLogin.style.display = "block";
    panelSignup.style.display = "none";
  } else {
    tabSignup.classList.add("active");
    tabLogin.classList.remove("active");
    panelSignup.style.display = "block";
    panelLogin.style.display = "none";
  }
}

// ====================================================
// RENDER CONTEST CARDS
// ====================================================
function renderContestGrid() {
  const grid = document.getElementById("contests-grid");
  grid.innerHTML = "";
  let activeCount = 0;

  CONTESTS_DATA.forEach(contest => {
    const status = getContestStatus(contest.month);
    let statusClass = "status-pending";
    let statusLabel = "접수 대기";
    
    if (status === "active") {
      statusClass = "status-active";
      statusLabel = "접수 중";
      activeCount++;
    } else if (status === "closed") {
      statusClass = "status-closed";
      statusLabel = "접수 마감";
    }

    const card = document.createElement("div");
    card.className = "contest-card";
    card.setAttribute("data-id", contest.id);
    
    card.innerHTML = `
      <div class="card-top">
        <div class="card-meta">
          <span class="badge">${contest.monthText}</span>
          <span class="status-badge ${statusClass}">${statusLabel}</span>
        </div>
        <h3 class="card-title">${contest.title}</h3>
        <p class="card-desc">${contest.summary}</p>
      </div>
      
      <div class="card-visual-wrapper">
        ${contest.icon}
      </div>
      
      <div class="card-bottom">
        <span class="card-period">기간: 2026년 ${contest.month}월 한 달 간</span>
        <button class="card-action-icon" aria-label="${contest.title} 보기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="16" height="16">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </button>
      </div>
    `;
    
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
    
    card.addEventListener("click", () => openContestDetails(contest.id));
    grid.appendChild(card);
  });
  
  document.getElementById("stat-active-contests").textContent = `${activeCount}개`;
}

function getContestStatus(contestMonth) {
  if (currentVirtualMonth < contestMonth) {
    return "pending";
  } else if (currentVirtualMonth === contestMonth) {
    return "active";
  } else {
    return "closed";
  }
}

// ====================================================
// CONTEST DRAWER DETAILS & LOGGED-IN CONDITIONAL FORM
// ====================================================
function openContestDetails(contestId) {
  const contest = CONTESTS_DATA.find(c => c.id === contestId);
  if (!contest) return;
  
  activeContest = contest;
  uploadBase64Data = null; 
  
  const drawer = document.getElementById("contest-drawer");
  const drawerTitle = document.getElementById("drawer-title");
  const drawerSummary = document.getElementById("drawer-summary");
  const drawerBadge = document.getElementById("drawer-badge");
  const drawerStatus = document.getElementById("drawer-status");
  const guideList = document.getElementById("drawer-guide-list");
  
  const formContainer = document.getElementById("submission-form-container");
  const noticeContainer = document.getElementById("submission-notice");
  const noticeText = document.getElementById("submission-notice-text");
  
  const subForm = document.getElementById("submission-form");
  const authNotice = document.getElementById("auth-required-notice");

  drawerBadge.textContent = contest.monthText;
  drawerTitle.textContent = contest.title;
  drawerSummary.textContent = contest.description;
  
  const visualHeader = document.getElementById("drawer-visual");
  visualHeader.style.background = getGradientForContest(contest.id);
  visualHeader.innerHTML = contest.icon;
  
  guideList.innerHTML = "";
  contest.rules.forEach(rule => {
    const li = document.createElement("li");
    li.textContent = rule;
    guideList.appendChild(li);
  });
  
  const status = getContestStatus(contest.month);
  document.getElementById("form-contest-id").value = contest.id;
  
  if (status === "active") {
    drawerStatus.textContent = "접수 진행 중 (Active)";
    drawerStatus.className = "status-indicator status-active";
    formContainer.style.display = "block";
    noticeContainer.style.display = "none";
    
    // Check Authentication state
    if (currentUser) {
      // Show Submission Form
      authNotice.style.display = "none";
      subForm.style.display = "block";
      
      // Auto-fill student profile info
      document.getElementById("student-name").value = currentUser.name;
      document.getElementById("student-phone").value = currentUser.phone;
      document.getElementById("student-school").value = currentUser.school;
      document.getElementById("student-grade").value = `${currentUser.grade}학년`;
      document.getElementById("student-class").value = currentUser.classNum;
      document.getElementById("student-number").value = currentUser.number;
      
      setupDynamicFormFields(contest);
    } else {
      // Hide form & prompt login
      authNotice.style.display = "flex";
      subForm.style.display = "none";
    }
  } else if (status === "pending") {
    drawerStatus.textContent = "접수 대기 중 (Upcoming)";
    drawerStatus.className = "status-indicator status-pending";
    formContainer.style.display = "none";
    noticeContainer.style.display = "block";
    noticeText.innerHTML = `🔒 <strong>이 대회는 아직 접수 기간이 아닙니다.</strong><br>대회 접수 기간은 2026년 ${contest.month}월 1일부터 시작됩니다.`;
  } else {
    drawerStatus.textContent = "접수 마감됨 (Closed)";
    drawerStatus.className = "status-indicator status-closed";
    formContainer.style.display = "none";
    noticeContainer.style.display = "block";
    noticeText.innerHTML = `🔒 <strong>이 대회의 접수가 종료되었습니다.</strong><br>2026년 ${contest.month}월 한 달 간 진행되었던 작품 접수가 완료되었습니다.`;
  }
  
  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeContestDrawer() {
  const drawer = document.getElementById("contest-drawer");
  drawer.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  
  document.getElementById("submission-form").reset();
  document.querySelectorAll("#submission-form .form-group.has-error").forEach(e => e.classList.remove("has-error"));
}

function getGradientForContest(id) {
  const gradients = {
    keyring: "linear-gradient(135deg, #6366f1 0%, #a855f7 100%)",      
    cuttoon: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",      
    library: "linear-gradient(135deg, #10b981 0%, #3b82f6 100%)",      
    transcription: "linear-gradient(135deg, #14b8a6 0%, #0d9488 100%)",
    pixelart: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",     
    friendship: "linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)"    
  };
  return gradients[id] || "linear-gradient(135deg, #374151 0%, #111827 100%)";
}

// ====================================================
// GENERATE CUSTOM SUBMISSION FIELD FORM TYPES
// ====================================================
function setupDynamicFormFields(contest) {
  const container = document.getElementById("dynamic-fields-container");
  container.innerHTML = "";
  
  if (contest.submissionType === "image") {
    container.innerHTML = `
      <label>${contest.inputLabel}</label>
      <div id="file-dropzone" class="file-dropzone">
        <svg class="dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
        </svg>
        <div class="dropzone-text">
          파일을 이곳에 끌어다 놓거나 <span>기기에서 탐색</span>
        </div>
        <div class="helper-text">${contest.placeholder}</div>
        <input type="file" id="submission-file" accept="image/*" style="display: none;" required>
      </div>
      <div id="upload-preview-wrapper" style="display: none;"></div>
      <span class="error-message">응모할 디자인 시안 이미지를 꼭 업로드해 주세요.</span>
    `;
    setupFileUploader();
  } 
  
  else if (contest.submissionType === "text_fields") {
    let html = "";
    contest.textFields.forEach(field => {
      html += `
        <div class="form-group" style="margin-bottom: 12px;">
          <label for="sub-${field.id}">${field.label}</label>
      `;
      if (field.type === "textarea") {
        html += `
          <textarea id="sub-${field.id}" required placeholder="${field.placeholder}" maxlength="200"></textarea>
        `;
      } else {
        html += `
          <input type="${field.type}" id="sub-${field.id}" required placeholder="${field.placeholder}">
        `;
      }
      html += `
          <span class="error-message">${field.label}을 정확히 채워주세요.</span>
        </div>
      `;
    });
    container.innerHTML = html;
  }
  
  else if (contest.submissionType === "image_or_text") {
    container.innerHTML = `
      <label style="margin-bottom: 8px;">제출 방식 선택</label>
      <div class="form-group-row" style="margin-bottom: 16px;">
        <button type="button" id="toggle-method-file" class="btn btn-secondary btn-block active">🖼️ 손글씨/이미지 업로드</button>
        <button type="button" id="toggle-method-text" class="btn btn-secondary btn-block">⌨️ 텍스트 직접 입력</button>
      </div>
      
      <div id="method-file-container">
        <div id="file-dropzone" class="file-dropzone">
          <svg class="dropzone-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
          </svg>
          <div class="dropzone-text">
            필사한 손글씨 사진을 이곳에 올리거나 <span>파일 선택</span>
          </div>
          <div class="helper-text">PNG, JPG 포맷 파일 지원 (최대 5MB)</div>
          <input type="file" id="submission-file" accept="image/*" style="display: none;">
        </div>
        <div id="upload-preview-wrapper" style="display: none;"></div>
        <span class="error-message">필사 손글씨 사진을 올려주세요.</span>
      </div>
      
      <div id="method-text-container" style="display: none;">
        <label for="sub-transcribe-text">필사 텍스트 감상 입력</label>
        <textarea id="sub-transcribe-text" placeholder="한글 명문장을 아래에 한 자 한 자 정성을 담아 입력해주세요..." maxlength="500"></textarea>
        <span class="error-message">필사 감상평을 최소 10자 이상 채워주세요.</span>
      </div>
    `;
    
    setupFileUploader();
    
    const btnFile = document.getElementById("toggle-method-file");
    const btnText = document.getElementById("toggle-method-text");
    const cFile = document.getElementById("method-file-container");
    const cText = document.getElementById("method-text-container");
    
    btnFile.addEventListener("click", () => {
      btnFile.classList.add("active");
      btnFile.classList.replace("btn-secondary", "btn-primary");
      btnText.classList.remove("active");
      btnText.classList.replace("btn-primary", "btn-secondary");
      cFile.style.display = "block";
      cText.style.display = "none";
      uploadBase64Data = null;
      document.getElementById("sub-transcribe-text").value = "";
    });
    
    btnText.addEventListener("click", () => {
      btnText.classList.add("active");
      btnText.classList.replace("btn-secondary", "btn-primary");
      btnFile.classList.remove("active");
      btnFile.classList.replace("btn-primary", "btn-secondary");
      cFile.style.display = "none";
      cText.style.display = "block";
      uploadBase64Data = null;
      document.getElementById("upload-preview-wrapper").style.display = "none";
      document.getElementById("upload-preview-wrapper").innerHTML = "";
    });
  }
}

// ====================================================
// DRAG & DROP AND FILE SELECTION UTILITY
// ====================================================
function setupFileUploader() {
  const dropzone = document.getElementById("file-dropzone");
  const fileInput = document.getElementById("submission-file");
  const previewWrapper = document.getElementById("upload-preview-wrapper");
  
  if (!dropzone || !fileInput) return;
  
  dropzone.addEventListener("click", () => fileInput.click());
  
  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, preventDefaults, false);
  });
  
  function preventDefaults (e) {
    e.preventDefault();
    e.stopPropagation();
  }
  
  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => dropzone.classList.add('dragover'), false);
  });
  
  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, () => dropzone.classList.remove('dragover'), false);
  });
  
  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files.length) {
      fileInput.files = files;
      handleFileSelected(files[0]);
    }
  });
  
  fileInput.addEventListener('change', (e) => {
    if (fileInput.files.length) {
      handleFileSelected(fileInput.files[0]);
    }
  });

  function handleFileSelected(file) {
    if (!file.type.startsWith('image/')) {
      showToast("이미지 형식의 파일만 업로드할 수 있습니다.", "error");
      return;
    }
    
    if (file.size > 5 * 1024 * 1024) {
      showToast("파일 크기는 최대 5MB를 초과할 수 없습니다.", "error");
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      uploadBase64Data = reader.result;
      
      previewWrapper.innerHTML = `
        <div class="preview-container">
          <img class="preview-image" src="${uploadBase64Data}" alt="업로드 이미지 시안">
          <button type="button" class="remove-preview-btn" aria-label="삭제">&times;</button>
        </div>
      `;
      previewWrapper.style.display = "block";
      dropzone.style.display = "none";
      
      previewWrapper.querySelector(".remove-preview-btn").addEventListener("click", () => {
        uploadBase64Data = null;
        fileInput.value = "";
        previewWrapper.innerHTML = "";
        previewWrapper.style.display = "none";
        dropzone.style.display = "flex";
      });
    };
  }
}

// ====================================================
// EVENT LISTENERS & ROUTINGS
// ====================================================
function setupEventListeners() {
  // Theme Toggle Button
  document.getElementById("theme-toggle-btn").addEventListener("click", toggleTheme);
  
  // Contest Drawer overlay / close
  document.getElementById("contest-drawer-overlay").addEventListener("click", closeContestDrawer);
  document.getElementById("contest-drawer-close").addEventListener("click", closeContestDrawer);
  
  // Authentication Trigger Drawers
  document.getElementById("auth-trigger-btn").addEventListener("click", () => openAuthDrawer("login"));
  document.getElementById("auth-redirect-btn").addEventListener("click", () => {
    // If clicked redirect inside drawer
    closeContestDrawer();
    openAuthDrawer("login");
  });
  
  document.getElementById("auth-drawer-overlay").addEventListener("click", closeAuthDrawer);
  document.getElementById("auth-drawer-close").addEventListener("click", closeAuthDrawer);
  
  // Login / Signup tab switching triggers
  document.getElementById("tab-login-btn").addEventListener("click", () => switchAuthTab("login"));
  document.getElementById("tab-signup-btn").addEventListener("click", () => switchAuthTab("signup"));
  
  // Logout Trigger
  document.getElementById("logout-btn").addEventListener("click", executeLogout);
  
  // My Submissions lookup drawer controls
  const lookupDrawer = document.getElementById("lookup-drawer");
  document.getElementById("lookup-toggle-btn").addEventListener("click", () => {
    lookupDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    
    // Instantly execute query for currently logged in student
    executeLoggedInLookup();
  });
  document.getElementById("lookup-drawer-overlay").addEventListener("click", closeLookupDrawer);
  document.getElementById("lookup-drawer-close").addEventListener("click", closeLookupDrawer);
  
  function closeLookupDrawer() {
    lookupDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  
  // Time-travel simulated month selector buttons
  const monthButtons = document.querySelectorAll(".month-btn");
  monthButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const month = parseInt(btn.getAttribute("data-month"), 10);
      setVirtualMonth(month);
    });
  });

  // Handle Auth Form Submission (Login & Sign Up)
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      const user = document.getElementById("login-username").value.trim();
      const pass = document.getElementById("login-password").value;
      handleLogin(user, pass);
    }
  });
  
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      const user = document.getElementById("signup-username").value.trim();
      const pass = document.getElementById("signup-password").value;
      const name = document.getElementById("signup-name").value.trim();
      const phone = document.getElementById("signup-phone").value.trim();
      const school = document.getElementById("signup-school").value.trim();
      const grade = document.getElementById("signup-grade").value;
      const classNum = document.getElementById("signup-class").value;
      const number = document.getElementById("signup-number").value;
      
      handleSignUp(user, pass, name, phone, school, grade, classNum, number);
    }
  });

  // Handle Contest Submission Form
  const subForm = document.getElementById("submission-form");
  subForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateSubmissionForm()) {
      executeSubmit();
    }
  });
}

// ====================================================
// FORM VALIDATIONS (LOGIN, SIGNUP, SUBMISSIONS)
// ====================================================
function validateLoginForm() {
  let isValid = true;
  const user = document.getElementById("login-username");
  const pass = document.getElementById("login-password");
  
  document.querySelectorAll("#login-form .form-group").forEach(g => g.classList.remove("has-error"));
  
  if (!user.value.trim()) {
    user.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!pass.value) {
    pass.parentElement.classList.add("has-error");
    isValid = false;
  }
  
  return isValid;
}

function validateSignupForm() {
  let isValid = true;
  
  const user = document.getElementById("signup-username");
  const pass = document.getElementById("signup-password");
  const name = document.getElementById("signup-name");
  const phone = document.getElementById("signup-phone");
  const school = document.getElementById("signup-school");
  const grade = document.getElementById("signup-grade");
  const classNum = document.getElementById("signup-class");
  const number = document.getElementById("signup-number");
  
  document.querySelectorAll("#signup-form .form-group").forEach(g => g.classList.remove("has-error"));
  
  if (!user.value.trim() || user.value.trim().length < 4) {
    user.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!pass.value || pass.value.length < 4) {
    pass.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!name.value.trim()) {
    name.parentElement.classList.add("has-error");
    isValid = false;
  }
  
  const phoneRegex = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
  if (!phoneRegex.test(phone.value)) {
    phone.parentElement.classList.add("has-error");
    isValid = false;
  }
  
  if (!school.value.trim()) {
    school.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!grade.value) {
    grade.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!classNum.value || classNum.value < 1) {
    classNum.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!number.value || number.value < 1) {
    number.parentElement.classList.add("has-error");
    isValid = false;
  }
  
  return isValid;
}

function validateSubmissionForm() {
  let isValid = true;
  
  // Clear previous errors
  document.querySelectorAll("#submission-form .form-group").forEach(g => g.classList.remove("has-error"));

  if (activeContest.submissionType === "image") {
    if (!uploadBase64Data) {
      const dropzone = document.getElementById("file-dropzone");
      dropzone.parentElement.classList.add("has-error");
      isValid = false;
    }
  } 
  
  else if (activeContest.submissionType === "text_fields") {
    activeContest.textFields.forEach(field => {
      const element = document.getElementById(`sub-${field.id}`);
      if (!element.value.trim()) {
        element.parentElement.classList.add("has-error");
        isValid = false;
      }
    });
  }
  
  else if (activeContest.submissionType === "image_or_text") {
    const isFileActive = document.getElementById("toggle-method-file").classList.contains("active");
    if (isFileActive) {
      if (!uploadBase64Data) {
        const dropzone = document.getElementById("file-dropzone");
        dropzone.parentElement.classList.add("has-error");
        isValid = false;
      }
    } else {
      const textVal = document.getElementById("sub-transcribe-text");
      if (!textVal.value.trim() || textVal.value.trim().length < 10) {
        textVal.parentElement.classList.add("has-error");
        isValid = false;
      }
    }
  }

  return isValid;
}

// ====================================================
// EXECUTE CONTEST SUBMISSION ACTION
// ====================================================
function executeSubmit() {
  if (!currentUser) return; // Prevent submissions if logged out
  
  const contestId = document.getElementById("form-contest-id").value;

  const newEntry = {
    id: `${activeContest.id}_${Date.now()}`,
    contestId: contestId,
    contestTitle: activeContest.title,
    studentUsername: currentUser.username, // Secure relation map to current user
    studentName: currentUser.name,
    studentPhone: currentUser.phone,
    studentSchool: currentUser.school,
    studentGrade: currentUser.grade,
    studentClass: currentUser.classNum,
    studentNumber: currentUser.number,
    timestamp: new Date().toLocaleString("ko-KR"),
    data: {}
  };

  if (activeContest.submissionType === "image") {
    newEntry.data.image = uploadBase64Data;
  } 
  
  else if (activeContest.submissionType === "text_fields") {
    activeContest.textFields.forEach(field => {
      newEntry.data[field.id] = document.getElementById(`sub-${field.id}`).value.trim();
    });
  } 
  
  else if (activeContest.submissionType === "image_or_text") {
    const isFileActive = document.getElementById("toggle-method-file").classList.contains("active");
    if (isFileActive) {
      newEntry.data.type = "image";
      newEntry.data.image = uploadBase64Data;
    } else {
      newEntry.data.type = "text";
      newEntry.data.text = document.getElementById("sub-transcribe-text").value.trim();
    }
  }

  const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
  allSubmissions.push(newEntry);
  localStorage.setItem("soro_submissions", JSON.stringify(allSubmissions));

  showToast(`${activeContest.title} 대회의 작품 접수가 성공적으로 완료되었습니다! 🎨`, "success");
  
  closeContestDrawer();
  updateLiveCounters();
}

// ====================================================
// LOOKUP REGISTERED SUBMISSIONS FOR CURRENT LOGGED-IN USER
// ====================================================
function executeLoggedInLookup() {
  if (!currentUser) return;
  
  const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
  
  // Filter submissions made by currently active logged-in user
  const mySubmissions = allSubmissions.filter(entry => 
    entry.studentUsername.toLowerCase() === currentUser.username.toLowerCase()
  );

  const container = document.getElementById("results-container");
  container.innerHTML = "";

  if (mySubmissions.length === 0) {
    container.innerHTML = `
      <div class="empty-results">
        😢 아직 본 계정으로 응모 및 접수된 공모 작품이 없습니다.<br>
        진행 중인 대회를 확인하시고 소중한 첫 작품을 접수해보세요!
      </div>
    `;
    return;
  }

  mySubmissions.forEach(entry => {
    const card = document.createElement("div");
    card.className = "submitted-card";
    card.setAttribute("id", `entry-${entry.id}`);
    
    let contentHtml = "";
    
    if (entry.data.image) {
      contentHtml += `
        <div><strong>제출한 이미지 시안:</strong></div>
        <img class="submission-thumbnail" src="${entry.data.image}" alt="제출 이미지">
      `;
    } 
    
    else if (entry.data["book-title"]) {
      contentHtml += `
        <div><strong>추천 도서:</strong> ${entry.data["book-title"]} (${entry.data["book-author"] || "저자 미상"})</div>
        <div><strong>추천 사유 & 평점:</strong> "${entry.data["book-review"]}"</div>
      `;
    } 
    
    else if (entry.data.type === "text") {
      contentHtml += `
        <div><strong>필사 텍스트 구절:</strong></div>
        <div style="font-family: serif; white-space: pre-line; background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin-top: 4px; border: 1px solid var(--border-color); color: var(--text-primary);">
          ${entry.data.text}
        </div>
      `;
    }

    card.innerHTML = `
      <div class="submitted-card-header">
        <div class="submitted-card-title-group">
          <h4>${entry.contestTitle}</h4>
          <div class="submitted-card-date">제출 시각: ${entry.timestamp}</div>
        </div>
      </div>
      <div class="submitted-card-body">
        <div><strong>소속 인적 사항:</strong> ${entry.studentSchool} ${entry.studentGrade}학년 ${entry.studentClass}반 ${entry.studentNumber}번</div>
        ${contentHtml}
      </div>
      <div class="submitted-card-footer">
        <button class="delete-entry-btn" onclick="confirmDeleteEntry('${entry.id}')">
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M3 6h18M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
          </svg>
          접수 취소하기 (영구 삭제)
        </button>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// Global hook for secure cancellation
window.confirmDeleteEntry = function(entryId) {
  if (confirm("정말 이 작품의 접수를 취소하고 삭제하시겠습니까? 한 번 지워진 접수 데이터는 복구할 수 없습니다.")) {
    const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
    const updatedSubmissions = allSubmissions.filter(entry => entry.id !== entryId);
    
    localStorage.setItem("soro_submissions", JSON.stringify(updatedSubmissions));
    
    const element = document.getElementById(`entry-${entryId}`);
    if (element) {
      element.style.transition = "all 0.3s ease";
      element.style.opacity = "0";
      element.style.transform = "translateY(15px)";
      setTimeout(() => {
        element.remove();
        
        const container = document.getElementById("results-container");
        if (container.children.length === 0) {
          container.innerHTML = `
            <div class="empty-results">
              ✨ 모든 접수 취소가 처리되었습니다.
            </div>
          `;
        }
      }, 300);
    }
    
    showToast("작품 접수 정보가 정상적으로 파기되었습니다.", "success");
    updateLiveCounters();
  }
};

// ====================================================
// COUNTERS & TOAST NOTIFICATION UTILITIES
// ====================================================
function updateLiveCounters() {
  const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
  
  if (currentUser) {
    // Only count active logged-in user's entries
    const mySubmissions = allSubmissions.filter(entry => 
      entry.studentUsername.toLowerCase() === currentUser.username.toLowerCase()
    );
    document.getElementById("stat-my-submissions").textContent = `${mySubmissions.length}개`;
  } else {
    document.getElementById("stat-my-submissions").textContent = "0개";
  }
}

function showToast(message, type = "info") {
  const container = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  
  let iconHtml = "ℹ️";
  if (type === "success") iconHtml = "✨";
  if (type === "error") iconHtml = "⚠️";
  
  toast.innerHTML = `
    <span style="font-size: 1.25rem;">${iconHtml}</span>
    <span class="toast-message">${message}</span>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => toast.classList.add("show"), 10);
  
  setTimeout(() => {
    toast.classList.remove("show");
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}
