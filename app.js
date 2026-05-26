// ====================================================
// GOOGLE SPREADSHEET DATABASE CONFIGURATION (Vercel Cloud Setup)
// ====================================================
// [가이드] 구글 스프레드시트 연동 완료 후, 아래 공란에 구글 Apps Script 웹앱 배포 URL을 입력해 주세요.
// 예시: "https://script.google.com/macros/s/AKfycbz.../exec"
// 이 주소가 비어있는 동안에는 브라우저의 localStorage 로컬 DB 모드로 즉시 원활히 시뮬레이션 작동합니다.
const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyGKQlom8k8okl8Gbd-WeADknfztVlZZ1md6RE1A37VoAIuPg4G0YC4FQLrJAvHyRo1Mg/exec";

// ====================================================
// CONTEST DATA AND INLINE ILLUSTRATIONS (SVG)
// ====================================================
const CONTESTS_DATA = [
  {
    id: "keyring",
    title: "키링 공모전",
    month: 6,
    monthText: "6월",
    period: "2026. 6. 1.(월) ~ 2026. 6. 22.(월)",
    summary: "나만의 예쁜 키링 디자인을 설계하고 실제 키링 굿즈로 탄생시킬 특별한 기회!",
    description: "독창적이고 실용적인 키링 디자인 시안을 공모합니다. 캐릭터, 로고, 타이포그래피 등 자유로운 주제로 참여하세요. 수상작은 실제 고품질 아크릴 키링으로 무료 제작되어 참가자 전원에게 제공됩니다.",
    rules: [
      "참가 대상: 3~6학년 학생 누구나 (개인 참여)",
      "공모 주제: 청주소로초를 상징할 수 있는 것",
      "규격: 최대 50mm x 50mm 이내 규격 (해상도 300dpi 이상 PNG/SVG 권장)",
      "제출물: 키링 앞면 디자인 시안 이미지 파일",
      "시상 계획: 학년에 상관 없이 최우수 1명, 우수 1명, 장려 1명",
      "참고 링크: <a href=\"https://canva.link/7al5bl4pt23j015\" target=\"_blank\" class=\"contest-link\">키링 템플릿(Canva) 바로가기</a>"
    ],
    evaluationCriteria: [
      { category: "주제의 이해 및 표현", desc: "청주소로초와 디지털 활용 수업을 잘 이해하고 표현했는지 평가합니다.", weight: "20%" },
      { category: "창의성", desc: "이미지를 얼마나 창의적이고 독특한 방법으로 디자인했는지 평가합니다.", weight: "20%" },
      { category: "시각적 효과", desc: "색상, 레이아웃, 그림체 등 시각적 요소의 조화와 효과를 평가합니다.", weight: "20%" },
      { category: "메시지 전달력", desc: "디자인을 통해 전달하고자 하는 메시지나 감정이 잘 전달되었는지 평가합니다.", weight: "20%" },
      { category: "제작 적합성", desc: "이미지가 키링 형태에 잘 어울리는지 평가합니다.", weight: "20%" }
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
    activeMonths: [7],
    period: "2026. 6. 15.(월) ~ 2026. 7. 03.(월)",
    summary: "일상 속 안전의 중요성을 재미있고 유익한 4컷 만화로 표현해보세요.",
    description: "학교, 가정, 길거리 등 일상생활 속에서 일어날 수 있는 다양한 안전사고(교통안전, 실험실 안전, 미끄러짐 등)를 예방하기 위한 수칙이나 경각심을 주는 스토리를 4컷~8컷 만화로 공모합니다.",
    rules: [
      "참가 대상: 3~6학년 학생 누구나 (개인 참여)",
      "규격: 4컷~8컷 구성의 이미지 파일 (가로형/세로형 자유)",
      "제출물: 완결된 만화 원고 이미지 파일",
      "심사 기준: 주제 전달력(50%), 흥미성(30%), 표현력(20%)"
    ],
    evaluationCriteria: [
      { category: "주제 전달력", desc: "일상생활 속 안전사고에 대한 경각심과 수칙이 만화 스토리에 잘 드러나는지 평가합니다.", weight: "50%" },
      { category: "흥미성", desc: "독자에게 재미와 교훈을 동시에 줄 수 있는 흥미로운 구성을 가졌는지 평가합니다.", weight: "30%" },
      { category: "표현력", desc: "4컷~8컷 구성의 완성도와 그림체, 폰트 조화 등 시각적 완성도를 평가합니다.", weight: "20%" }
    ],
    submissionType: "image",
    inputLabel: "컷툰 완성 원고 이미지",
    placeholder: "PNG, JPG 형식의 이미지 파일 (최대 5MB)",
    examples: [
      "asset/examples/cuttoon1.png",
      "asset/examples/cuttoon2.png",
      "asset/examples/cuttoon3.png",
      "asset/examples/cuttoon4.png"
    ],
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
    activeMonths: [8, 9],
    period: "2026. 8. 10.(목) ~ 2026. 9. 30.(수)",
    summary: "독서의 달을 맞이하여 내 인생의 책을 소개하고 감동을 나누어 주세요.",
    description: "9월 독서의 달을 기념하여 다른 친구들에게 꼭 추천하고 싶은 책이나 나의 인생에 깊은 영감을 준 도서를 한 편 골라 멋진 한 줄 평과 독서 리뷰를 남기는 비대면 도서 박람회 대회입니다.",
    rules: [
      "참가 대상: 3~6학년 학생 누구나",
      "제출 내용: 추천 책 제목, 저자, 그리고 150자 이내의 마음을 울리는 한 줄 평 및 추천 사유",
      "혜택: 선정된 추천평은 도서관 전시 공간 및 웹 사이트 메인에 배너 형태로 게재됩니다.",
      "특별 혜택: 학급 인원의 2/3 이상이 참여하였을 경우 학급 전체에 소정의 기념품을 지급합니다."
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
      "참가 대상: 아름다운 한글을 사랑하는 3~6학년 학생 누구나",
      "제출 방식: [선택 1] 디지털 기기(아이패드, 갤럭시탭 등)로 필사한 이미지 파일 제출, [선택 2] 제공되는 양식에 타자로 텍스트 타이핑 제출",
      "특별 혜택: 학급 인원의 2/3 이상이 참여하였을 경우 학급 전체에 소정의 기념품을 지급합니다."
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
    description: "레트로 감성을 자극하는 픽셀 도트 그래픽 대회입니다. 웹사이트에 내장된 30×30 도트 에디터에서 직접 작품을 그리거나, 외부에서 제작한 이미지를 업로드해 접수할 수 있습니다.",
    rules: [
      "참가 대상: 도트 그래픽과 레트로 감성을 좋아하는 3~6학년 학생",
      "규격: 30×30 도트 캔버스 (내장 에디터 사용 가능) 또는 자유 사이즈 이미지 업로드",
      "제출물: 내장 도트 에디터로 직접 그린 작품 또는 별도 제작한 이미지 파일",
      "심사 기준: 창의성(40%), 도트 정밀성(30%), 색상 조화(30%)"
    ],
    evaluationCriteria: [
      { category: "창의성", desc: "도트라는 제약을 활용해 자신만의 창의적이고 유니크한 세계를 묘사했는지 평가합니다.", weight: "40%" },
      { category: "도트 정밀성", desc: "어색한 부분 없이 세밀하고 깨끗한 픽셀 터치와 형태 구현력을 평가합니다.", weight: "30%" },
      { category: "색상 조화", desc: "제한된 픽셀 팔레트 내에서 세련되고 감각적인 색상 배합을 이루었는지 평가합니다.", weight: "30%" }
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
      "참가 대상: 3~6학년 동급생 혹은 선후배 등 2인 이상이 함께 촬영한 사진",
      "제출물: 인화 가능한 수준의 선명한 단체/우정 사진 파일 및 사진 소개글",
      "혜택: 선정작들은 12월 말 학교 복도 갤러리에 폴라로이드 감성 스타일로 대대적으로 인화/전시됩니다.",
      "특별 혜택: 학급 인원의 2/3 이상이 참여하였을 경우 학급 전체에 소정의 기념품을 지급합니다."
    ],
    submissionType: "image",
    inputLabel: "친구들과 함께 찍은 소중한 사진 파일",
    placeholder: "JPEG, PNG 원본 사진 파일 (최대 8MB)",
    icon: `<svg class="card-visual-svg" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="10" y="8" width="44" height="48" rx="4" />
      <rect x="14" y="12" width="36" height="32" />
      <circle cx="32" cy="26" r="5" fill="currentColor" fill-opacity="0.15" />
      <path d="M14 40l10-10 8 8 6-6 12 12" />
      <circle cx="32" cy="50" r="2" fill="currentColor" />
    </svg>`
  }
];

// ====================================================
// STATIC GALLERY DATA (2025 KEYRING SUBMISSIONS)
// ====================================================
const RAW_2025_KEYRING_DATA = `3-1,윤정민,https://drive.google.com/open?id=1p6_HRRsGOrqoja43s3-3QU1xiq-F-Owg
3-1,이도,https://drive.google.com/open?id=1GanqBkGLjS5tUcljCkTjkQWOke_S1_yS
3-1,김예은 ,https://drive.google.com/open?id=1xzZiycSCB4o_Wy1gzAhPlyCJLtM9SY6i
3-4,이수지,https://drive.google.com/open?id=1PV9DrKFtY3qjZ09AIVkGhd5YYk84GpkP
3-7,김민서,https://drive.google.com/open?id=11W0x9_A43_sGoLfdkY8aMjdvbIcpp1As
4-1,이예서,https://drive.google.com/open?id=14RVLCB3NTjbZ-J8B1dLK2o8GBTsRI6_d
4-1,신아윤 ,https://drive.google.com/open?id=1OonJHLjYlCUQeqCYL5eAkRrYdimDJJVI
4-3,김별,https://drive.google.com/open?id=1-9CE9QOGCJ9L5f_y3nFhfO2qg18UkV7W
4-3,윤성준,https://drive.google.com/open?id=1jJxzoLKRp6-A76XIoEY29RTK8IsW_Crj
4-3,이서은,https://drive.google.com/open?id=1XXm-zmLWsJdCZyim5bEygDOUcweiZxAP
4-3,신지아,https://drive.google.com/open?id=1QE48dS8EnNzO1bOz7w5ezQfrKke9Hslh
4-3,김우희,https://drive.google.com/open?id=1aRBOqeirvAdvobnmlPSYyv0dhQiI_KBQ
4-6,정윤채,https://drive.google.com/open?id=1O1RcNBqEOnhq2qtZIoDj9nkzPDzbcE_l
4-6,김다은,https://drive.google.com/open?id=1_wtCpaQZgvFYpLccIQ8yul6fBMScOmDu
5-2,남승민,https://drive.google.com/open?id=1qzQv6PtrNI1NH2rsnnmWen5V5QiePL0U
5-2,이예슬,https://drive.google.com/open?id=1Q7ukx4s6L3r0Aif8EDJM9TPOasNKJ_q3
5-2,김재윤,https://drive.google.com/open?id=1azlnKIwm43FNla9AL7A6A7Ym6_VV-8xF
5-2,홍지유,https://drive.google.com/open?id=17o2OwBpPnMF_KomfOtHBa1dR4cgYDMPD
5-2,김영준,https://drive.google.com/open?id=1Z3WgzmNGtfMgtJbDuH33RuJeTQw03o0q
5-2,남승민,https://drive.google.com/open?id=1qDgBMCu5ZnKo6Tmb_1DDS4Bu0xD8VZb4
5-2,홍지유,https://drive.google.com/open?id=1lmSbD2oKn7rCc4Yf2lFlyzvNzd7gQyOX
5-2,김영준,https://drive.google.com/open?id=1waNGFqlgcBYlfrSpvd65QV8iTpZ9Ue4X
5-2,유선우,https://drive.google.com/open?id=10G5Fh2TU6uAIZ_WoU9h27gc0cKclLZRP
5-2,유선우,https://drive.google.com/open?id=1wAGBi4_A8Ny3JSUA16nbDC9JSB94COnT
5-2,김영준,https://drive.google.com/open?id=1qCqZk5Zv3itgbiJOSuE5oZ9MmXqfOikE
5-2,이예슬,https://drive.google.com/open?id=1SZayQ-FLUtydJH6HdVDcMbc_7VjXDPxj
5-2,공도윤,https://drive.google.com/open?id=1K2f2Nd8T7h7F6LNVfHpf4ymuGvll8GX2
5-2,김민선,https://drive.google.com/open?id=1JjAY3JJsd4Q9PtEpbCTxr4g2ZAxgGWFF
5-2,김보빈,https://drive.google.com/open?id=1-VOfs_P4Xu2f4BPqMWKjd9PjBulNJB5c
5-2,김시완,https://drive.google.com/open?id=1LfYtpyMzekL5_FaxnIIdKycuFwr_99rt
5-2,김지율,https://drive.google.com/open?id=15FxyIkJi7IM8oucELYci9big5lVgWgmD
5-2,박나경,https://drive.google.com/open?id=1DbI0lLm02-_1iWxGU32BE6pe1YZFsFCl
5-2,박지후,https://drive.google.com/open?id=17vs8roUvLnyqUNDBEb7UlfKCmqR4yDa_
5-2,박지후2,https://drive.google.com/open?id=159_dpFKwuU-uXT-aLc0KtncV2f2RXmNK
5-2,방채민,https://drive.google.com/open?id=16IlFfENgBrA-lUq64NKichSxUfpAWDsz
5-2,백지민,https://drive.google.com/open?id=1RJc1mJUZsHq8MIXtBqFia4geTN25Ilyg
5-2,백지민,https://drive.google.com/open?id=16_rRTWuZfhnhff4PvH7RrpRGkAGUbmEa
5-2,유다은,https://drive.google.com/open?id=1tG_3tnVtLzGHs6J3MGjpDSoAV1Lv1Tkf
5-2,이건형,https://drive.google.com/open?id=1RH19vXf3l0AiHWHObqfXFacs30Z_kziQ
5-2,이재령,https://drive.google.com/open?id=1x-PhZLK_I_tCPoPE6cGN6FGamkK-KUqi
5-2,이재령,https://drive.google.com/open?id=1rlGkuFDiqlBMwfQZAtUzxTcry0EarOYd
5-2,임우현,https://drive.google.com/open?id=1MQX0M0p1fdbEun-buNjCHiqL1tAScLre
5-2,정하윤,https://drive.google.com/open?id=1RGqli6Ykvt4crdaiQw8fCpifXXNOv0zN
5-2,지준영,https://drive.google.com/open?id=1cDDjjL43fPt_GCeQDS7jZPtI_3vHIjOP
5-2,황주연,https://drive.google.com/open?id=1msqDyU0H9ZRrYEvcIj5in_qI3ZZGgRNF
5-2,황주연,https://drive.google.com/open?id=1-Y44EhbEOY4re5fzJWI2ZcNx4wp3FXkC
5-2,권대현,https://drive.google.com/open?id=1RrzRXKYpoEIoNqe0q33j4wlC1eOFSxy6
5-2,마준민,https://drive.google.com/open?id=1haJkab5JK26OOYZwpOxltAs5-M9NELsZ
5-2,마준민,https://drive.google.com/open?id=1uj0wBZTZvUPFnpYMgmsngCaNY_2_4vi9
5-3,조하준 ,https://drive.google.com/open?id=16SQT0S7azBPtD5nI4eJ1wSBE11nfT9r3
5-3,김하루 ,https://drive.google.com/open?id=1vexfwpbc7tKd_xIsjpvVWzOuxyq_yccj
5-3,김채빈,https://drive.google.com/open?id=1IlI9fZM1U3Cp_3_cWPPa7YsLTlHKeK_B
5-3,고윤서,https://drive.google.com/open?id=1xzcVhhZPvi38jcpURR_s3Noo2K35bt86
5-3,김서윤,https://drive.google.com/open?id=1MiVKmQAIL4jh-CQ92afpKcl6NJGft9dV
5-3,김서윤,https://drive.google.com/open?id=1PkaZnjINFSx_kX8QJSGbsk3dsaw4MRix
5-3,김서윤,https://drive.google.com/open?id=1OdvhE8dcnAmdU3eC_eCroWQEErm7PQL7
5-3,방채현,https://drive.google.com/open?id=1FKO2gPIwQLjH9PLZzu19jZE8SHCC8Ci-
5-3,정서현,https://drive.google.com/open?id=1eY8nLEkEl4hq3wKlWaeK6ZyGU25bvaM6
5-3,유서린,https://drive.google.com/open?id=10gsjoqaRTv9LsH8p5YYMyx70u0sp0_ju
5-3,이라임,https://drive.google.com/open?id=1lpbtGNhTYbchCGTmjD02Fqlx8fZR5Xz6
5-3,이효민,https://drive.google.com/open?id=1G7E1zKwrX6JW6gdSeQ9i5UNK-cPw6P4j
5-3,이은서,https://drive.google.com/open?id=1BzoajAIuGNdpGP3IEt18yTPrPRmWuKUv
5-3,이하빈 ,https://drive.google.com/open?id=1qJjWfmP7jAC2QZpUXtcu1i9iI_pAWpf2
3-6,김범준,https://drive.google.com/open?id=1okuiUWogXz8BWMWiKdZOAbEzXmLL1iTq
3-4,최예원,https://drive.google.com/open?id=1Ti4HIfP9MNR7Ew8c1I31bekzQYdut7a0
3-3,박홍비,https://drive.google.com/open?id=1jBFcCAYV6gpYC0ocjnPXJvOJPas1eH6X
4-6,양수아,https://drive.google.com/open?id=1ZfrhWLYU8T5xUU9pdeL196QYDuZKjNi5
5-1,곽로희,https://drive.google.com/file/d/1zUpqwg5N_ThduldaYIpVMIQHcPNrQz_O/
5-1,곽호영,https://drive.google.com/file/d/1YDGn3nots8gS2PoHyUs3u6DewlmUFtHd
5-1,김가현,https://drive.google.com/file/d/1T3vh5O9Fgoz_Wg76Ck5rOISA1cQRpDn-
5-1,김건우,https://drive.google.com/file/d/1T4T1EZzBf_WSkisGbSqXhnaVK0MOmtqk
5-1,김라임,https://drive.google.com/file/d/15pVserNg7-mir3xQJn3zg1ku0Gp5argx/view?usp=drive_link
5-1,김시유,https://drive.google.com/file/d/1bagLFa4zwvI8Tz5jDeoMTTYNuBYgsPAg/view?usp=drive_link
5-1,김하윤,https://drive.google.com/file/d/1QnRf3ll4QTOAw-luIZBFZUPpQpCUBZVu/view?usp=drive_link
5-1,문재현,https://drive.google.com/file/d/1T-kpv270q0dr3RxdTzICcJ0DmgCoAKUT/view?usp=drive_link
5-1,어현준,https://drive.google.com/file/d/1xjb4u9Yj1TbbWKNwBQDPfzHkZPSx5DHr/view?usp=drive_link
5-1,이종호,https://drive.google.com/file/d/1zSJMD37SNP0ymeKZMV-XIM7F_DbpDMtp/view?usp=drive_link
5-1,이지호,https://drive.google.com/file/d/1dgtM3HfVBs0ZNShTAx1yODzsnMrqaBWO/view?usp=drive_link
5-1,이하늘,https://drive.google.com/file/d/1Wx8oQkQV12NnbYrLgdWDtJXDtuUHJ66s/view?usp=drive_link
5-1,임예서,https://drive.google.com/file/d/19kL4Nm2bCbvMYNnc3dQK4HG5iGQlbH3X/view?usp=drive_link
5-1,임재열,https://drive.google.com/file/d/1yWfrLxU89g4nIqZoBgNwH_1MZNJ1oIGU/view?usp=drive_link
5-1,임채연,https://drive.google.com/file/d/1LuBmm5_vd0JgD3kWVaI2pot86ERCMm0Z/view?usp=drive_link
5-1,전서현,https://drive.google.com/file/d/1QNwyAfY88D5TeFV9bmvk35Eq7JR15ZoU/view?usp=drive_link
5-1,정은명,https://drive.google.com/file/d/1Gcn0aPhdOh48UFNwec67vOrhCqqlNCx9/view?usp=drive_link
5-1,정지후,https://drive.google.com/file/d/11lCwNooH_O2bUZJqbtCl-JKdYoW4lUXj/view?usp=drive_link
5-1,조하늬,https://drive.google.com/file/d/1gWqytQWilFffJjw4L_2ssUgrv4_uDfAp/view?usp=drive_link
5-1,최지유,https://drive.google.com/file/d/1j84Fzs5C_OO4IHGlUZeoNAIyXRsbR3Db/view?usp=drive_link
5-1,양온유,https://drive.google.com/file/d/1-Ce_BsEI_XFrY6XcMEZFs5O4a70fq0tX/view?usp=drive_link
5-1,박소율,https://drive.google.com/file/d/1Ce7nTT6jJd5cz0Mr3YJ_xqKHfUPls2Gj`;

function extractDriveId(url) {
  let id = "";
  if (url.includes("id=")) {
    id = url.split("id=")[1].split("&")[0];
  } else if (url.includes("/file/d/")) {
    id = url.split("/file/d/")[1].split("/")[0];
  }
  return id.trim();
}

function getGoogleDriveDirectLink(url) {
  const id = extractDriveId(url);
  return id ? `https://drive.google.com/thumbnail?id=${id}&sz=w600` : url;
}

const GALLERY_2025_DATA = RAW_2025_KEYRING_DATA.trim().split("\n").map(line => {
  const [gradeClass, name, url] = line.split(",");
  const grade = parseInt(gradeClass.split("-")[0], 10);
  return {
    gradeClass,
    grade,
    name: name.trim(),
    imageUrl: getGoogleDriveDirectLink(url)
  };
});

// ====================================================
// STATE MANAGEMENT & USER SESSION CONFIGURATION
// ====================================================
let currentVirtualMonth = 6;
const FORCE_ACTIVE_CONTESTS = [];

function getContestStatus(contestOrMonth) {
  const contestMonth = typeof contestOrMonth === "object" ? contestOrMonth.month : contestOrMonth;
  const contestId = typeof contestOrMonth === "object" ? contestOrMonth.id : null;

  if (contestId && FORCE_ACTIVE_CONTESTS.includes(contestId)) {
    return "active";
  }

  if (typeof contestOrMonth === "object" && contestOrMonth.activeMonths?.includes(currentVirtualMonth)) {
    return "active";
  }

  if (contestMonth === currentVirtualMonth) {
    return "active";
  } else if (contestMonth > currentVirtualMonth) {
    return "pending";
  } else {
    return "closed";
  }
}

let activeContest = null;
let uploadBase64Data = null;

// User Authentication States
let currentUser = null;
let GOOGLE_SHEET_API_URL_error = false;

// Auth Form Grade/Class/Number dropdown config
const GRADE_CLASS_LIMITS = {
  "3": 6,
  "4": 7,
  "5": 6,
  "6": 5
};

function setupAuthFormDropdowns() {
  const loginGrade = document.getElementById("login-grade");
  const loginClass = document.getElementById("login-class");
  const loginNumber = document.getElementById("login-number");

  const signupGrade = document.getElementById("signup-grade");
  const signupClass = document.getElementById("signup-class");
  const signupNumber = document.getElementById("signup-number");

  // Populate number options (1 to 27)
  function populateNumbers(selectElement) {
    if (!selectElement) return;
    selectElement.innerHTML = '<option value="" disabled selected>선택</option>';
    for (let i = 1; i <= 27; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${i}번`;
      selectElement.appendChild(opt);
    }
  }

  // Populate class options dynamically based on grade
  function updateClassDropdown(gradeVal, classSelectElement) {
    if (!classSelectElement) return;
    classSelectElement.innerHTML = '<option value="" disabled selected>선택</option>';
    
    if (!gradeVal) {
      const disabledOpt = document.createElement("option");
      disabledOpt.value = "";
      disabledOpt.disabled = true;
      disabledOpt.selected = true;
      disabledOpt.textContent = "학년 선택 필요";
      classSelectElement.appendChild(disabledOpt);
      return;
    }

    const maxClass = GRADE_CLASS_LIMITS[gradeVal] || 0;
    for (let i = 1; i <= maxClass; i++) {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = `${i}반`;
      classSelectElement.appendChild(opt);
    }
  }

  // Initialize Numbers
  populateNumbers(loginNumber);
  populateNumbers(signupNumber);

  // Initialize dynamic class updates
  if (loginGrade && loginClass) {
    loginGrade.addEventListener("change", (e) => {
      updateClassDropdown(e.target.value, loginClass);
    });
    updateClassDropdown("", loginClass);
  }

  if (signupGrade && signupClass) {
    signupGrade.addEventListener("change", (e) => {
      updateClassDropdown(e.target.value, signupClass);
    });
    updateClassDropdown("", signupClass);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initVirtualTime();
  initUserSession();
  renderContestGrid();
  setupEventListeners();
  setupAuthFormDropdowns();
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
  if (!themeIcon) return;
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
// PRODUCTION TIME CONFIGURATION (JUNE ONLY)
// ====================================================
function initVirtualTime() {
  // 실제 프로덕션 환경의 진행 월을 6월로 고정합니다.
  currentVirtualMonth = 6;
  sessionStorage.removeItem("soro_virtual_month"); // 가상 오버라이드 제거

  const statMonthEl = document.getElementById("stat-current-month");
  if (statMonthEl) {
    statMonthEl.textContent = `${currentVirtualMonth}월`;
  }
}

// ====================================================
// USER SESSION (SIGNUP / LOGIN / LOGOUT) LOGIC
// ====================================================
function initUserSession() {
  const savedUser = localStorage.getItem("soro_current_user");
  if (savedUser) {
    currentUser = JSON.parse(savedUser);
    
    // [보안/오류 방어] 만약 구버전 세션 정보로 인해 userKey가 누락되어 있다면 자동 복구하여 기입합니다.
    if (currentUser && !currentUser.userKey && currentUser.grade && currentUser.classNum && currentUser.number && currentUser.name) {
      currentUser.userKey = `${currentUser.grade}_${currentUser.classNum}_${currentUser.number}_${currentUser.name}`;
      localStorage.setItem("soro_current_user", JSON.stringify(currentUser));
    }
    
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

  // Format: 학년-반 번호 이름
  infoText.textContent = `${currentUser.grade}-${currentUser.classNum} ${currentUser.number}번 ${currentUser.name}`;
  profileBadge.style.display = "inline-flex";

  closeAuthDrawer();
}

function updateUIForLoggedOutState() {
  document.getElementById("auth-trigger-btn").style.display = "inline-flex";
  document.getElementById("logout-btn").style.display = "none";
  document.getElementById("lookup-toggle-btn").style.display = "none";
  document.getElementById("user-profile-badge").style.display = "none";
  const levelContainer = document.getElementById("lookup-level-container");
  if (levelContainer) {
    levelContainer.innerHTML = "";
  }
}

function executeLogout() {
  localStorage.removeItem("soro_current_user");
  currentUser = null;
  updateUIForLoggedOutState();
  updateLiveCounters();

  if (activeContest) {
    openContestDetails(activeContest.id);
  }

  showToast("로그아웃 되었습니다.", "info");
}

// REST API or Local Sign Up
async function handleSignUp(grade, classNum, number, name, password) {
  const userKey = `${grade}_${classNum}_${number}_${name}`; // Unique Identifier Key

  const payload = {
    action: "signUp",
    userKey: userKey,
    grade: grade,
    classNum: classNum,
    number: number,
    name: name,
    password: password
  };

  // 1. Remote DB Cloud Mode (Google Sheets Apps Script API URL active)
  if (GOOGLE_SHEET_API_URL) {
    showToast("클라우드 서버에 등록하고 있습니다...", "info");
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (result.status === "error") {
        showToast(result.message, "error");
        return false;
      }

      const loggedUser = { userKey, grade, classNum, number, name };
      currentUser = loggedUser;
      localStorage.setItem("soro_current_user", JSON.stringify(loggedUser));
      updateUIForLoggedInState();
      updateLiveCounters();
      if (activeContest) openContestDetails(activeContest.id);
      showToast(`${name} 학생의 가입과 로그인이 완료되었습니다! 🎉`, "success");
      return true;
    } catch (error) {
      console.error(error);
      showToast("원격 구글 서버 접속이 원활하지 않습니다. 로컬 저장을 이용합니다.", "error");
    }
  }

  // 2. Fallback Local Mode
  const users = JSON.parse(localStorage.getItem("soro_users") || "[]");
  const exists = users.find(u => u.userKey === userKey);
  if (exists) {
    showToast("이미 동일한 정보로 가입된 학생 계정이 존재합니다.", "error");
    return false;
  }

  const newUser = {
    userKey: userKey,
    grade: grade,
    classNum: classNum,
    number: number,
    name: name,
    password: password
  };

  users.push(newUser);
  localStorage.setItem("soro_users", JSON.stringify(users));

  currentUser = newUser;
  localStorage.setItem("soro_current_user", JSON.stringify(newUser));
  updateUIForLoggedInState();
  updateLiveCounters();

  if (activeContest) openContestDetails(activeContest.id);
  showToast(`${name} 학생의 가입과 로그인이 완료되었습니다! 🎉`, "success");
  return true;
}

// REST API or Local Login
async function handleLogin(grade, classNum, number, name, password) {
  const userKey = `${grade}_${classNum}_${number}_${name}`;

  const payload = {
    action: "login",
    userKey: userKey,
    password: password
  };

  // 1. Remote DB Cloud Mode
  if (GOOGLE_SHEET_API_URL) {
    showToast("보안 서버에서 로그인 확인 중...", "info");
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (result.status === "error") {
        showToast(result.message, "error");
        return false;
      }

      const loggedUser = { userKey, grade, classNum, number, name };
      currentUser = loggedUser;
      localStorage.setItem("soro_current_user", JSON.stringify(loggedUser));
      updateUIForLoggedInState();
      updateLiveCounters();
      if (activeContest) openContestDetails(activeContest.id);
      showToast(`${name} 학생, 로그인 성공을 환영합니다! 🚀`, "success");
      return true;
    } catch (error) {
      console.error(error);
      showToast("클라우드 접속 지연. 로컬 저장소를 활용합니다.", "error");
    }
  }

  // 2. Fallback Local Mode
  const users = JSON.parse(localStorage.getItem("soro_users") || "[]");
  const user = users.find(u => u.userKey === userKey && u.password === password);

  if (!user) {
    showToast("학년/반/번호/이름 또는 비밀번호가 일치하지 않습니다.", "error");
    return false;
  }

  currentUser = user;
  localStorage.setItem("soro_current_user", JSON.stringify(user));
  updateUIForLoggedInState();
  updateLiveCounters();

  if (activeContest) openContestDetails(activeContest.id);
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

  // Reset dynamic class dropdowns to '학년 선택 필요' state
  const loginClass = document.getElementById("login-class");
  if (loginClass) {
    loginClass.innerHTML = '<option value="" disabled selected>학년 선택 필요</option>';
  }
  const signupClass = document.getElementById("signup-class");
  if (signupClass) {
    signupClass.innerHTML = '<option value="" disabled selected>학년 선택 필요</option>';
  }

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
    const status = getContestStatus(contest);
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
    card.className = "contest-card" + (status === "active" ? " active-contest" : "");
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
        <span class="card-period">기간: ${contest.period || `2026년 ${contest.month}월 한 달 간`}</span>
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

// ====================================================
// CONTEST DRAWER DETAILS & LOGGED-IN CONDITIONAL FORM
// ====================================================


function renderGallery2025(gradeFilter = "all") {
  const gridContainer = document.getElementById("gallery-grid-list");
  if (!gridContainer) return;

  gridContainer.innerHTML = "";

  const filteredData = gradeFilter === "all" 
    ? GALLERY_2025_DATA 
    : GALLERY_2025_DATA.filter(item => item.grade === parseInt(gradeFilter, 10));

  if (filteredData.length === 0) {
    gridContainer.innerHTML = `<div class="helper-text" style="text-align: center; grid-column: span 2; padding: 40px;">해당 학년의 작품이 존재하지 않습니다.</div>`;
    return;
  }

  filteredData.forEach(item => {
    const card = document.createElement("div");
    card.className = "gallery-card";
    
    // Check for '4-6' '김다은' to attach Special '최우수' (Grand Prize) title badge
    const isSpecialAward = (item.gradeClass === "4-6" && item.name === "김다은");
    const awardBadgeHtml = isSpecialAward 
      ? `<span class="gallery-card-award" style="position: absolute; top: 8px; left: 8px; background: #eab308; color: #000; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; z-index: 10; border: 1px solid #000;">🏆 최우수</span>` 
      : "";
    
    card.innerHTML = `
      <div class="gallery-card-img-wrapper loading" style="position: relative;">
        ${awardBadgeHtml}
        <img class="gallery-card-img" src="${item.imageUrl}" alt="${item.name}" loading="lazy" onload="this.parentElement.classList.remove('loading')" onerror="this.src='https://placehold.co/150/0c0c0e/ffffff?text=No+Image'; this.parentElement.classList.remove('loading')">
      </div>
      <div class="gallery-card-info">
        <span class="gallery-card-class">${item.gradeClass}</span>
        <span class="gallery-card-name">${item.name}</span>
      </div>
    `;
    gridContainer.appendChild(card);
  });
}

function switchDrawerTab(tabName) {
  const tabGuide = document.getElementById("drawer-tab-guide");
  const tabCriteria = document.getElementById("drawer-tab-criteria");
  const tabGallery = document.getElementById("drawer-tab-gallery");
  const tabExamples = document.getElementById("drawer-tab-examples");
  
  const guideContainer = document.getElementById("drawer-guide-container");
  const criteriaContainer = document.getElementById("drawer-criteria-container");
  const galleryContainer = document.getElementById("drawer-gallery-container");
  const examplesContainer = document.getElementById("drawer-examples-container");
  
  const formContainer = document.getElementById("submission-form-container");
  const noticeContainer = document.getElementById("submission-notice");

  if (!activeContest) return;
  const status = getContestStatus(activeContest);

  tabGuide.classList.remove("active");
  tabCriteria.classList.remove("active");
  tabGallery.classList.remove("active");
  if (tabExamples) tabExamples.classList.remove("active");

  if (tabName === "guide") {
    tabGuide.classList.add("active");
    
    guideContainer.style.display = "block";
    criteriaContainer.style.display = "none";
    galleryContainer.style.display = "none";
    if (examplesContainer) examplesContainer.style.display = "none";
    
    if (status === "active") {
      formContainer.style.display = "block";
      noticeContainer.style.display = "none";
    } else {
      formContainer.style.display = "none";
      noticeContainer.style.display = "block";
    }
  } else if (tabName === "criteria") {
    tabCriteria.classList.add("active");
    
    guideContainer.style.display = "none";
    criteriaContainer.style.display = "block";
    galleryContainer.style.display = "none";
    if (examplesContainer) examplesContainer.style.display = "none";
    formContainer.style.display = "none";
    noticeContainer.style.display = "none";
  } else if (tabName === "gallery") {
    tabGallery.classList.add("active");
    
    guideContainer.style.display = "none";
    criteriaContainer.style.display = "none";
    galleryContainer.style.display = "block";
    if (examplesContainer) examplesContainer.style.display = "none";
    formContainer.style.display = "none";
    noticeContainer.style.display = "none";
    
    renderGallery2025("all");
    
    document.querySelectorAll(".gallery-filter-badge").forEach(badge => {
      if (badge.getAttribute("data-grade") === "all") {
        badge.classList.add("active");
      } else {
        badge.classList.remove("active");
      }
    });
  } else if (tabName === "examples") {
    if (tabExamples) tabExamples.classList.add("active");
    
    guideContainer.style.display = "none";
    criteriaContainer.style.display = "none";
    galleryContainer.style.display = "none";
    if (examplesContainer) examplesContainer.style.display = "block";
    formContainer.style.display = "none";
    noticeContainer.style.display = "none";
  }
}

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
  document.getElementById("dynamic-fields-container").innerHTML = "";
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
    li.innerHTML = rule;
    guideList.appendChild(li);
  });

  // Render Dynamic Evaluation Criteria Cards
  const criteriaListContainer = document.getElementById("criteria-cards-list");
  criteriaListContainer.innerHTML = "";
  
  if (contest.evaluationCriteria && contest.evaluationCriteria.length > 0) {
    const tabCriteria = document.getElementById("drawer-tab-criteria");
    if (tabCriteria) tabCriteria.style.display = "flex";
    contest.evaluationCriteria.forEach(item => {
      const card = document.createElement("div");
      card.className = "criteria-card";
      card.innerHTML = `
        <div class="criteria-card-header">
          <span class="criteria-card-name">${item.category}</span>
          <span class="criteria-card-weight">${item.weight}</span>
        </div>
        <p class="criteria-card-desc">${item.desc}</p>
      `;
      criteriaListContainer.appendChild(card);
    });
  } else {
    const tabCriteria = document.getElementById("drawer-tab-criteria");
    if (tabCriteria) tabCriteria.style.display = "none";
    criteriaListContainer.innerHTML = `<div class="helper-text" style="text-align: center; padding: 20px;">심사 기준 정보가 등록되지 않았습니다.</div>`;
  }

  const status = getContestStatus(contest);
  document.getElementById("form-contest-id").value = contest.id;

  if (status === "active") {
    drawerStatus.textContent = "접수 진행 중 (Active)";
    drawerStatus.className = "status-indicator status-active";

    // Asynchronously check and render the submission area (existing submission vs empty form)
    checkAndRenderSubmissionArea(contest);
  } else if (status === "pending") {
    drawerStatus.textContent = "접수 대기 중 (Upcoming)";
    drawerStatus.className = "status-indicator status-pending";
    noticeText.innerHTML = `🔒 <strong>이 대회는 아직 접수 기간이 아닙니다.</strong><br>대회 접수 기간은 ${contest.period || `2026년 ${contest.month}월 1일부터 시작됩니다.`}`;
  } else {
    drawerStatus.textContent = "접수 마감됨 (Closed)";
    drawerStatus.className = "status-indicator status-closed";
    noticeText.innerHTML = `🔒 <strong>이 대회의 접수가 종료되었습니다.</strong><br>${contest.period || `2026년 ${contest.month}월 한 달 간`} 진행되었던 작품 접수가 완료되었습니다.`;
  }



  // Show 3rd tab only for keyring contest
  const tabGallery = document.getElementById("drawer-tab-gallery");
  if (tabGallery) {
    if (contest.id === "keyring") {
      tabGallery.style.display = "flex";
    } else {
      tabGallery.style.display = "none";
    }
  }

  // Dynamic Examples Tab
  let tabExamples = document.getElementById("drawer-tab-examples");
  if (!tabExamples) {
    tabExamples = document.createElement("button");
    tabExamples.type = "button";
    tabExamples.id = "drawer-tab-examples";
    tabExamples.className = "drawer-tab-btn";
    tabExamples.textContent = "예시 작품 👀";
    const drawerTabs = document.querySelector(".drawer-tabs");
    if (drawerTabs) drawerTabs.appendChild(tabExamples);
    tabExamples.addEventListener("click", () => switchDrawerTab("examples"));
  }

  let examplesContainer = document.getElementById("drawer-examples-container");
  if (!examplesContainer) {
    examplesContainer = document.createElement("div");
    examplesContainer.id = "drawer-examples-container";
    examplesContainer.className = "contest-gallery";
    examplesContainer.style.display = "none";
    const drawerBody = document.querySelector(".drawer-body");
    if (drawerBody) drawerBody.appendChild(examplesContainer);
  }

  if (contest.examples && contest.examples.length > 0) {
    tabExamples.style.display = "flex";
    examplesContainer.innerHTML = `
      <h3 class="gallery-title">예시 작품 👀</h3>
      <p class="gallery-desc">공모전 준비를 도와줄 훌륭한 예시 작품들입니다. 참고해서 멋진 작품을 완성해 보세요!</p>
      <div class="gallery-grid">
        ${contest.examples.map(img => `
          <div class="gallery-card" onclick="window.openImageModal('${img}')" style="cursor: zoom-in;">
            <div class="gallery-card-img-wrapper" style="position: relative; overflow: hidden; padding-bottom: 75%;">
              <img class="gallery-card-img" src="${img}" alt="예시 작품" loading="lazy" style="position: absolute; top:0; left:0; width:100%; height:100%; object-fit: contain;">
            </div>
          </div>
        `).join("")}
      </div>
    `;
  } else {
    tabExamples.style.display = "none";
    examplesContainer.innerHTML = "";
  }

  // Always initialize to the guide & submission tab
  switchDrawerTab("guide");

  drawer.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

window.openImageModal = function(src) {
  let modal = document.getElementById("image-fullscreen-modal");
  if (!modal) {
    modal = document.createElement("div");
    modal.id = "image-fullscreen-modal";
    modal.style.position = "fixed";
    modal.style.top = "0";
    modal.style.left = "0";
    modal.style.width = "100vw";
    modal.style.height = "100dvh";
    modal.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
    modal.style.zIndex = "99999";
    modal.style.display = "flex";
    modal.style.alignItems = "center";
    modal.style.justifyContent = "center";
    modal.style.cursor = "zoom-out";
    
    const img = document.createElement("img");
    img.id = "image-fullscreen-img";
    img.style.maxWidth = "90%";
    img.style.maxHeight = "90%";
    img.style.objectFit = "contain";
    img.style.borderRadius = "8px";
    img.style.boxShadow = "0 10px 30px rgba(0,0,0,0.5)";
    
    modal.appendChild(img);
    document.body.appendChild(modal);
    
    modal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }
  
  const img = document.getElementById("image-fullscreen-img");
  img.src = src;
  modal.style.display = "flex";
};


function closeContestDrawer() {
  const drawer = document.getElementById("contest-drawer");
  drawer.setAttribute("aria-hidden", "true");
  drawer.classList.remove("pixel-fullscreen");
  document.body.style.overflow = "";

  document.getElementById("submission-form").reset();
  document.querySelectorAll("#submission-form .form-group.has-error").forEach(e => e.classList.remove("has-error"));

  // [오류 방어] 서랍이 닫힐 때 기존 미리보기 및 로딩 요소를 말끔히 제거합니다.
  const existingView = document.getElementById("existing-submission-view");
  if (existingView) existingView.remove();
  const loader = document.getElementById("submission-loading-indicator");
  if (loader) loader.remove();
}

// ====================================================
// ASYNCHRONOUS CHECK AND RENDER SUBMISSION PROCESS
// ====================================================
async function checkAndRenderSubmissionArea(contest) {
  const formContainer = document.getElementById("submission-form-container");
  const subForm = document.getElementById("submission-form");
  const authNotice = document.getElementById("auth-required-notice");
  formContainer.classList.remove("has-existing-submission");
  formContainer.classList.add("is-loading");

  // 기존 뷰/로더 잔여물 소거
  const existingView = document.getElementById("existing-submission-view");
  if (existingView) existingView.remove();
  const loader = document.getElementById("submission-loading-indicator");
  if (loader) loader.remove();

  if (!currentUser) {
    formContainer.classList.remove("is-loading");
    authNotice.style.display = "flex";
    subForm.style.display = "none";
    return;
  }

  authNotice.style.display = "none";
  subForm.style.display = "none";

  // 로딩 인디케이터 표시
  const loadingIndicator = document.createElement("div");
  loadingIndicator.id = "submission-loading-indicator";
  loadingIndicator.className = "submission-loading";
  loadingIndicator.innerHTML = `
    <div class="spinner"></div>
    <p style="margin-top: 8px;">제출 내역을 확인하고 있습니다...</p>
  `;
  formContainer.appendChild(loadingIndicator);

  // 1. 원격 또는 로컬 제출 목록 조회
  let mySubmissions = [];
  if (GOOGLE_SHEET_API_URL) {
    const payload = {
      action: "getSubmissions",
      studentUsername: currentUser.userKey
    };
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.status === "success") {
        mySubmissions = result.data;
      }
    } catch (e) {
      console.error("제출 내역 원격 조회 에러:", e);
    }
  }

  if (!GOOGLE_SHEET_API_URL || mySubmissions.length === 0) {
    const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
    mySubmissions = allSubmissions.filter(entry =>
      entry.studentUsername.toLowerCase() === currentUser.userKey.toLowerCase()
    );
  }

  // 로더 제거
  const activeLoader = document.getElementById("submission-loading-indicator");
  if (activeLoader) activeLoader.remove();
  formContainer.classList.remove("is-loading");

  const existingSubmission = mySubmissions.find(s => s.contestId === contest.id);

  if (existingSubmission) {
    formContainer.classList.add("has-existing-submission");
    // 2. 이미 제출한 작품이 있을 때: 상세 정보 노출 및 삭제 유도
    const viewDiv = document.createElement("div");
    viewDiv.id = "existing-submission-view";
    viewDiv.className = "existing-submission-view";

    let contentHtml = "";
    let entryData = {};
    try {
      entryData = typeof existingSubmission.data === "string" ? JSON.parse(existingSubmission.data) : (existingSubmission.data || {});
    } catch (err) {
      if (existingSubmission.data) entryData = { image: existingSubmission.data };
    }

    if (entryData.image) {
      const isDrive = entryData.image.includes("drive.google.com");
      const displayUrl = isDrive ? getGoogleDriveDirectLink(entryData.image) : entryData.image;
      const driveId = isDrive ? extractDriveId(entryData.image) : "";
      const downloadUrl = isDrive ? `https://drive.google.com/uc?export=download&id=${driveId}` : entryData.image;

      contentHtml += `
        <div class="submitted-media-preview-container" style="margin-top: 12px; display: flex; flex-direction: column; gap: 8px;">
          <div class="submitted-media-preview" style="border: 1px solid var(--border-color); padding: 8px; background: var(--bg-tertiary); display: flex; justify-content: center; overflow: hidden; max-height: 240px;">
            <img src="${displayUrl}" alt="제출 작품 이미지" style="max-width: 100%; max-height: 220px; object-fit: contain; border: 1px solid var(--border-color); transition: transform var(--transition-smooth);">
          </div>
          <div style="text-align: center;">
            <a href="${downloadUrl}" target="_blank" download="submission_art.png" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.75rem; font-weight: 700; padding: 6px 14px; border-radius: 0; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); text-decoration: none; cursor: pointer; transition: all var(--transition-fast);">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
              </svg>
              제출 작품 다운로드
            </a>
          </div>
        </div>
      `;
    } else if (entryData["book-title"]) {
      contentHtml += `
        <div class="submitted-text-preview">
          <p><strong>📖 추천 도서:</strong> ${entryData["book-title"]} (${entryData["book-author"] || "저자 미상"})</p>
          <p style="margin-top: 6px;"><strong>✍️ 추천 사유:</strong> "${entryData["book-review"]}"</p>
        </div>
      `;
    } else if (entryData.type === "text") {
      contentHtml += `
        <div class="submitted-text-preview">
          <p><strong>✍️ 필사 구절:</strong></p>
          <blockquote style="font-family: serif; white-space: pre-line; background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin: 8px 0; border: 1px solid var(--border-color); color: var(--text-primary);">
            ${entryData.text}
          </blockquote>
        </div>
      `;
    }

    viewDiv.innerHTML = `
      <div class="submitted-badge-success">🎨 접수 완료됨</div>
      <p class="submitted-notice-title">이 대회에 이미 작품을 제출하셨습니다.</p>
      <p class="submitted-notice-time">제출 시각: ${existingSubmission.timestamp}</p>
      
      ${contentHtml}

      <div class="submitted-actions">
        <p class="submitted-actions-info">⚠️ 다른 작품을 새로 제출하시려면, 기존 접수를 취소하셔야 합니다.</p>
        <button type="button" class="btn btn-danger btn-block" onclick="cancelSubmissionInDrawer('${existingSubmission.id}')">
          접수 취소하기 (영구 삭제)
        </button>
      </div>
    `;
    formContainer.appendChild(viewDiv);
  } else {
    // 3. 제출한 작품이 없을 때: 정상 제출 폼 렌더링
    subForm.style.display = "block";
    document.getElementById("student-name").value = currentUser.name;
    document.getElementById("student-grade").value = `${currentUser.grade}학년`;
    document.getElementById("student-class").value = `${currentUser.classNum}반`;
    document.getElementById("student-number").value = `${currentUser.number}번`;
    setupDynamicFormFields(contest);
  }
}

// 서랍(Drawer) 내에서 직접 취소를 처리하는 전역 핸들러
window.cancelSubmissionInDrawer = async function (entryId) {
  if (confirm("정말 이 작품의 접수를 취소하고 삭제하시겠습니까? 한 번 지워진 접수 데이터는 복구할 수 없습니다.")) {
    // 1. Remote DB Cloud Mode
    if (GOOGLE_SHEET_API_URL) {
      showToast("클라우드에서 접수를 파기하고 있습니다...", "info");
      const payload = {
        action: "deleteSubmission",
        id: entryId
      };
      try {
        const response = await fetch(GOOGLE_SHEET_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (result.status === "error") {
          showToast(result.message, "error");
          return;
        }
      } catch (e) {
        console.error("원격 삭제 에러:", e);
        showToast("원격 서버 통신 지연. 로컬 삭제를 실행합니다.", "error");
      }
    }

    // 2. Fallback Local Mode
    const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
    const updatedSubmissions = allSubmissions.filter(entry => entry.id !== entryId);
    localStorage.setItem("soro_submissions", JSON.stringify(updatedSubmissions));

    showToast("작품 접수 정보가 성공적으로 취소 및 삭제 처리되었습니다. ✨", "success");
    updateLiveCounters();
    
    // 서랍 내용 리프레시
    if (activeContest) {
      checkAndRenderSubmissionArea(activeContest);
    }
  }
};

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
  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) submitBtn.style.display = contest.id === "pixelart" ? "none" : "block";

  if (contest.submissionType === "image" && contest.id === "pixelart") {
    // ===== PIXEL ART EXTENDED EDITOR UI =====
    container.innerHTML = `
      <div id="toggle-pixel-draw" class="active" style="display: none;"></div>
      <div id="toggle-pixel-upload" style="display: none;"></div>

      <div id="pixel-draw-container" class="pixel-editor-shell" style="display: none;">
        <!-- Left Toolbar -->
        <div class="pixel-toolbar">
          <!-- Back button reinstated at the top of Left Toolbar -->
          <button type="button" class="pixel-tool-btn pixel-back-tool-btn" id="pixel-close-editor" title="업로드 화면으로 돌아가기">
            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2.5" fill="none"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          </button>
          <div class="pixel-tool-separator"></div>

          <div class="pixel-tool-group">
            <button type="button" class="pixel-tool-btn active" data-tool="pencil" title="연필">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path><circle cx="11" cy="11" r="2"></circle></svg>
            </button>
            <button type="button" class="pixel-tool-btn" data-tool="brush" title="브러시">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn" data-tool="eraser" title="지우개">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21"></path><path d="M22 21H7"></path><path d="m5 11 9 9"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn" data-tool="bucket" title="채우기">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"></path><path d="m5 2 5 5"></path><path d="M2 13h15"></path><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn" data-tool="eyedropper" title="스포이트">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="m2 22 1-1h3l9-9"></path><path d="M3 21v-3l9-9"></path><path d="m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn" data-tool="special-shape" title="특별 도형 도구 (우측에서 선택)">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26"></polygon></svg>
            </button>
          </div>
          <div class="pixel-tool-separator"></div>
          <div class="pixel-tool-group">
            <button type="button" class="pixel-tool-btn action" id="pixel-undo" title="되돌리기">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M3 7v6h6"></path><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn action" id="pixel-redo" title="다시 실행">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><path d="M21 7v6h-6"></path><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7"></path></svg>
            </button>
            <button type="button" class="pixel-tool-btn action" id="pixel-grid-toggle" title="격자 토글">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="3" y1="15" x2="21" y2="15"></line><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line></svg>
            </button>
            <button type="button" class="pixel-tool-btn action pixel-btn-danger" id="pixel-clear" title="전체 지우기">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
            </button>
          </div>
        </div>

        <!-- Center Stage -->
        <div class="pixel-stage">
          <div class="pixel-grid-wrapper">
            <div class="pixel-grid-board" id="pixel-grid-board"></div>
          </div>
        </div>

        <!-- Right Side Panel -->
        <div class="pixel-side-panel">
          <!-- 1단: 현재 색상 -->
          <div class="pixel-panel-section">
            <div class="pixel-panel-label">현재 색상</div>
            <div class="pixel-color-swatches-section">
              <div class="pixel-overlapping-swatches">
                <!-- Background Swatch (Right click) -->
                <div class="pixel-swatch-rect secondary" id="pixel-secondary-swatch" style="background-color: #ffffff;" title="오른쪽 클릭 색상 (배경색)"></div>
                <!-- Foreground Swatch (Left click) -->
                <div class="pixel-swatch-rect primary active" id="pixel-primary-swatch" style="background-color: #111111;" title="왼쪽 클릭 색상 (전경색 - 클릭하여 활성화)"></div>
                
                <!-- Swap arrow button (Photoshop style) -->
                <button type="button" class="pixel-swatch-swap-btn" id="pixel-swatch-swap" title="전경색/배경색 전환 (단축키: X)">
                  <svg viewBox="0 0 24 24" width="12" height="12" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M16 3h5v5"></path><path d="M4 20h5v5"></path><path d="M21 3C14.5 3 9.5 8 9.5 14.5"></path><path d="M3 21C9.5 21 14.5 16 14.5 9.5"></path></svg>
                </button>
                
                <!-- Reset button (D hotkey) -->
                <button type="button" class="pixel-swatch-reset-btn" id="pixel-swatch-reset" title="기본값 검정/흰색 리셋 (단축키: D)">
                  <div class="reset-black"></div>
                  <div class="reset-white"></div>
                </button>
              </div>
              <div class="pixel-custom-picker-btn">
                <input type="color" class="pixel-custom-color" id="pixel-custom-color" value="#111111" title="자유 색상 선택">
              </div>
            </div>
          </div>

          <!-- 2단: 팔레트 -->
          <div class="pixel-panel-section">
            <div class="pixel-panel-label">팔레트</div>
            <div class="pixel-palette-grid" id="pixel-palette-row">
              <div class="color-chip active" data-color="#111111" style="background:#111111;" title="검정 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#ffffff" style="background:#ffffff;" title="흰색 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#ef4444" style="background:#ef4444;" title="빨강 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#f97316" style="background:#f97316;" title="주황 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#eab308" style="background:#eab308;" title="노랑 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#22c55e" style="background:#22c55e;" title="연두 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#3b82f6" style="background:#3b82f6;" title="파랑 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#8b5cf6" style="background:#8b5cf6;" title="보라 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#ec4899" style="background:#ec4899;" title="핑크 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#92400e" style="background:#92400e;" title="갈색 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#6b7280" style="background:#6b7280;" title="회색 (마우스 우클릭 시 배경색 지정)"></div>
              <div class="color-chip" data-color="#67e8f9" style="background:#67e8f9;" title="하늘 (마우스 우클릭 시 배경색 지정)"></div>
            </div>
          </div>

          <!-- 세로 구분선 (Divider Line) -->
          <div class="pixel-tool-separator horizontal"></div>

          <!-- 3단: 도구 옵션 -->
          <div class="pixel-panel-section">
            <div class="pixel-panel-label">도구 옵션</div>
            <div class="pixel-brush-size-container-vertical">
              <span class="pixel-size-title">브러시/지우개 크기</span>
              <div class="pixel-size-buttons" id="pixel-brush-size-container">
                <button type="button" class="pixel-size-btn active" data-size="1" title="1 픽셀 (1x1)">1px</button>
                <button type="button" class="pixel-size-btn" data-size="2" title="2 픽셀 (2x2)">2px</button>
                <button type="button" class="pixel-size-btn" data-size="3" title="3 픽셀 (3x3)">3px</button>
                <button type="button" class="pixel-size-btn" data-size="4" title="4 픽셀 (4x4)">4px</button>
              </div>
            </div>
          </div>

          <!-- 세로 구분선 (Divider Line) -->
          <div class="pixel-tool-separator horizontal"></div>

          <!-- 4단: 특별 도형 (28종) -->
          <div class="pixel-panel-section">
            <div class="pixel-panel-label">특별 도형 선택 (28종)</div>
            <div class="pixel-special-shapes-grid" id="pixel-special-shapes-grid">
              <!-- Dynamically populated from JS -->
            </div>
          </div>
        </div>

        <!-- Bottom Action Bar & Status Bar -->
        <div class="pixel-bottom-bar">
          <div class="pixel-status-info">
            <span class="pixel-status-tool">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2" fill="none"><path d="M12 19l7-7 3 3-7 7-3-3z"></path><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path><path d="M2 2l7.586 7.586"></path></svg>
              <span id="pixel-tool-label-bottom">PENCIL</span>
            </span>
            <span class="pixel-status-coords" id="pixel-coords">X: -, Y: -</span>
          </div>
          <div class="pixel-action-buttons">
            <button type="button" class="btn btn-secondary" id="pixel-save-draft" style="color: #3b82f6;">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg>
              임시저장
            </button>
            <button type="button" class="btn btn-primary" id="pixel-submit-draw">
              <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" stroke-width="2" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              작품 최종 제출
            </button>
          </div>
        </div>
      </div>

      <div id="pixel-upload-container" style="display: block; padding: 20px 0;">
        <label style="margin-bottom: 8px;">작품 이미지 업로드</label>
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
        <div id="upload-preview-wrapper" style="display: none; margin-top: 12px;"></div>
        <div style="display: flex; gap: 10px; margin-top: 16px;">
          <button type="button" class="btn btn-secondary btn-block" id="pixel-switch-draw">픽셀아트 에디터</button>
          <button type="button" class="btn btn-primary btn-block" id="pixel-submit-upload">업로드 파일 제출하기</button>
        </div>
        <span class="error-message">응모할 디자인 시안 이미지를 꼭 업로드해 주세요.</span>
      </div>
      <canvas id="pixel-export-canvas" class="pixel-canvas-hidden" width="300" height="300"></canvas>
    `;

    // Init pixel art editor
    initPixelArtEditor();
    // Init file uploader for the upload tab
    setupFileUploader();

    const drawToggle = document.getElementById("toggle-pixel-draw");
    const drawContainer = document.getElementById("pixel-draw-container");
    const uploadContainer = document.getElementById("pixel-upload-container");
    const drawer = document.getElementById("contest-drawer");

    function setPixelMode(mode) {
      const isDraw = mode === "draw";
      drawer.classList.toggle("pixel-fullscreen", isDraw);
      drawToggle.classList.toggle("active", isDraw);
      drawContainer.style.display = isDraw ? "grid" : "none";
      uploadContainer.style.display = isDraw ? "none" : "block";
      if (isDraw) {
        const drawerContent = drawer.querySelector(".drawer-content");
        if (drawerContent) {
          drawerContent.scrollTop = 0;
        }
      }
    }

    document.getElementById("pixel-switch-draw").addEventListener("click", () => setPixelMode("draw"));
    document.getElementById("pixel-switch-upload")?.addEventListener("click", () => setPixelMode("upload"));
    document.getElementById("pixel-close-editor").addEventListener("click", () => setPixelMode("upload"));
    document.getElementById("pixel-submit-draw").addEventListener("click", () => {
      drawToggle.classList.add("active");
      if (validateSubmissionForm()) executeSubmit();
    });
    document.getElementById("pixel-submit-upload").addEventListener("click", () => {
      drawToggle.classList.remove("active");
      if (validateSubmissionForm()) executeSubmit();
    });

  } else if (contest.submissionType === "image") {
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

  function preventDefaults(e) {
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
// PIXEL ART INTERACTIVE EDITOR (30x30 Grid)
// ====================================================
function initPixelArtEditor() {
  const GRID_SIZE = 30;
  const board = document.getElementById("pixel-grid-board");
  if (!board) return;

  const totalCells = GRID_SIZE * GRID_SIZE;
  let pixelData = Array(totalCells).fill("");
  let activeBuffer = pixelData; // Double-buffering target pointer for shape previews
  
  // Photoshop Style Swatch Color State
  let primaryColor = "#111111";
  let secondaryColor = "#ffffff";
  let currentColor = primaryColor; // default fallback
  let activeColorSlot = "primary"; // "primary" or "secondary"
  
  let activeSpecialShape = "rect-outline"; // Default special shape
  const SPECIAL_SHAPES = [
    { id: "line", name: "직선", icon: `<line x1="3" y1="21" x2="21" y2="3" stroke="currentColor" stroke-width="2"/>` },
    { id: "rect-outline", name: "사각형 테두리", icon: `<rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "rect-fill", name: "채운 사각형", icon: `<rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor"/>` },
    { id: "circle-outline", name: "원 테두리", icon: `<circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "circle-fill", name: "채운 원", icon: `<circle cx="12" cy="12" r="9" fill="currentColor"/>` },
    
    { id: "triangle-up-outline", name: "삼각형 테두리(▲)", icon: `<polygon points="12 3 2 21 22 21" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "triangle-up-fill", name: "채운 삼각형(▲)", icon: `<polygon points="12 3 2 21 22 21" fill="currentColor"/>` },
    { id: "triangle-down-outline", name: "삼각형 테두리(▼)", icon: `<polygon points="12 21 2 3 22 3" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "triangle-down-fill", name: "채운 삼각형(▼)", icon: `<polygon points="12 21 2 3 22 3" fill="currentColor"/>` },
    
    { id: "right-triangle-tl-outline", name: "직각삼각형(↖)", icon: `<polygon points="3 3 21 3 3 21" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "right-triangle-tl-fill", name: "채운 직각삼각형(↖)", icon: `<polygon points="3 3 21 3 3 21" fill="currentColor"/>` },
    { id: "right-triangle-br-outline", name: "직각삼각형(↘)", icon: `<polygon points="21 21 3 21 21 3" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "right-triangle-br-fill", name: "채운 직각삼각형(↘)", icon: `<polygon points="21 21 3 21 21 3" fill="currentColor"/>` },
    
    { id: "diamond-outline", name: "마름모 테두리", icon: `<polygon points="12 2 22 12 12 22 2 12" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "diamond-fill", name: "채운 마름모", icon: `<polygon points="12 2 22 12 12 22 2 12" fill="currentColor"/>` },
    
    { id: "heart-outline", name: "하트 테두리", icon: `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "heart-fill", name: "채운 하트", icon: `<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>` },
    
    { id: "star-outline", name: "별 테두리", icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "star-fill", name: "채운 별", icon: `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26" fill="currentColor"/>` },
    
    { id: "cross-outline", name: "십자가 테두리", icon: `<polygon points="9 3 15 3 15 9 21 9 21 15 15 15 15 21 9 21 9 15 3 15 3 9 9 9" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "cross-fill", name: "채운 십자가", icon: `<polygon points="9 3 15 3 15 9 21 9 21 15 15 15 15 21 9 21 9 15 3 15 3 9 9 9" fill="currentColor"/>` },
    
    { id: "arrow-up-outline", name: "화살표(↑) 테두리", icon: `<polygon points="12 3 4 11 9 11 9 21 15 21 15 11 20 11" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "arrow-up-fill", name: "채운 화살표(↑)", icon: `<polygon points="12 3 4 11 9 11 9 21 15 21 15 11 20 11" fill="currentColor"/>` },
    { id: "arrow-down-outline", name: "화살표(↓) 테두리", icon: `<polygon points="12 21 4 13 9 13 9 3 15 3 15 13 20 13" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "arrow-down-fill", name: "채운 화살표(↓)", icon: `<polygon points="12 21 4 13 9 13 9 3 15 3 15 13 20 13" fill="currentColor"/>` },
    
    { id: "hexagon-outline", name: "육각형 테두리", icon: `<polygon points="12 2 22 7.5 22 18.5 12 24 2 18.5 2 7.5" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "hexagon-fill", name: "채운 육각형", icon: `<polygon points="12 2 22 7.5 22 18.5 12 24 2 18.5 2 7.5" fill="currentColor"/>` },
    { id: "pentagon-outline", name: "오각형 테두리", icon: `<polygon points="12 2 22 9.5 18 22 6 22 2 9.5" stroke="currentColor" stroke-width="2" fill="none"/>` },
    { id: "pentagon-fill", name: "채운 오각형", icon: `<polygon points="12 2 22 9.5 18 22 6 22 2 9.5" fill="currentColor"/>` }
  ];
  
  let currentBrushSize = 1;
  let currentTool = "pencil";
  let isDrawing = false;
  let startIndex = null;
  let undoStack = [];
  let redoStack = [];
  let currentColorForDraw = primaryColor; // color used for active stroke

  board.innerHTML = "";
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "pixel-cell";
    cell.dataset.index = i;
    board.appendChild(cell);
  }

  function xy(index) {
    return { x: index % GRID_SIZE, y: Math.floor(index / GRID_SIZE) };
  }

  function idx(x, y) {
    return y * GRID_SIZE + x;
  }

  function inBounds(x, y) {
    return x >= 0 && y >= 0 && x < GRID_SIZE && y < GRID_SIZE;
  }

  function pushUndo() {
    undoStack.push([...pixelData]);
    if (undoStack.length > 60) undoStack.shift();
    redoStack = [];
  }

  // ==== Load Draft (Local Backup First) ====
  if (currentUser) {
    const draftKey = `soro_pixelart_draft_${currentUser.userKey}`;
    const draftData = localStorage.getItem(draftKey);
    if (draftData) {
      try {
        const parsed = JSON.parse(draftData);
        if (Array.isArray(parsed) && parsed.length === totalCells) {
          pixelData = parsed;
          activeBuffer = pixelData;
        }
      } catch (e) {}
    }
  }

  function renderGrid(buffer = pixelData) {
    board.querySelectorAll(".pixel-cell").forEach((cell, index) => {
      cell.style.backgroundColor = buffer[index] || "";
    });
  }

  // Swatch Elements & Controls
  const primarySwatchEl = document.getElementById("pixel-primary-swatch");
  const secondarySwatchEl = document.getElementById("pixel-secondary-swatch");
  const swapBtn = document.getElementById("pixel-swatch-swap");
  const resetBtn = document.getElementById("pixel-swatch-reset");
  const customPicker = document.getElementById("pixel-custom-color");

  function updateSwatchUI() {
    if (primarySwatchEl) {
      primarySwatchEl.style.backgroundColor = primaryColor;
      primarySwatchEl.classList.toggle("active", activeColorSlot === "primary");
    }
    if (secondarySwatchEl) {
      secondarySwatchEl.style.backgroundColor = secondaryColor;
      secondarySwatchEl.classList.toggle("active", activeColorSlot === "secondary");
    }
    if (customPicker) {
      customPicker.value = activeColorSlot === "primary" ? primaryColor : secondaryColor;
    }
  }

  if (primarySwatchEl) {
    primarySwatchEl.addEventListener("click", () => {
      activeColorSlot = "primary";
      updateSwatchUI();
      updatePaletteHighlight();
    });
  }
  if (secondarySwatchEl) {
    secondarySwatchEl.addEventListener("click", () => {
      activeColorSlot = "secondary";
      updateSwatchUI();
      updatePaletteHighlight();
    });
  }

  function swapColors() {
    const temp = primaryColor;
    primaryColor = secondaryColor;
    secondaryColor = temp;
    updateSwatchUI();
    updatePaletteHighlight();
  }

  function resetColors() {
    primaryColor = "#111111";
    secondaryColor = "#ffffff";
    activeColorSlot = "primary";
    updateSwatchUI();
    updatePaletteHighlight();
  }

  if (swapBtn) swapBtn.addEventListener("click", (e) => { e.stopPropagation(); swapColors(); });
  if (resetBtn) resetBtn.addEventListener("click", (e) => { e.stopPropagation(); resetColors(); });

  // Keyboard Shortcuts (X and D)
  const handleKeyboardShortcuts = (e) => {
    const activeEl = document.activeElement;
    if (activeEl && (activeEl.tagName === "INPUT" || activeEl.tagName === "TEXTAREA")) return;
    const container = document.getElementById("pixel-draw-container");
    if (!container || container.style.display === "none") return;

    if (e.code === "KeyX") {
      e.preventDefault();
      swapColors();
    } else if (e.code === "KeyD") {
      e.preventDefault();
      resetColors();
    }
  };
  document.removeEventListener("keydown", handleKeyboardShortcuts); // prevent duplicate binding
  document.addEventListener("keydown", handleKeyboardShortcuts);

  // Palette Row Highlighting and Left/Right click selection
  function updatePaletteHighlight() {
    const activeColor = activeColorSlot === "primary" ? primaryColor : secondaryColor;
    document.querySelectorAll(".color-chip").forEach(chip => {
      chip.classList.toggle("active", chip.dataset.color.toLowerCase() === activeColor.toLowerCase());
    });
  }

  document.querySelectorAll(".color-chip").forEach(chip => {
    // Left click color selection (Primary)
    chip.addEventListener("click", (e) => {
      e.preventDefault();
      const color = chip.dataset.color;
      primaryColor = color;
      activeColorSlot = "primary";
      updateSwatchUI();
      updatePaletteHighlight();
      if (currentTool === "eraser") setTool("pencil");
    });
    
    // Right click color selection (Secondary)
    chip.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      const color = chip.dataset.color;
      secondaryColor = color;
      activeColorSlot = "secondary";
      updateSwatchUI();
      updatePaletteHighlight();
      if (currentTool === "eraser") setTool("pencil");
    });
  });

  if (customPicker) {
    customPicker.addEventListener("input", (e) => {
      const color = e.target.value;
      if (activeColorSlot === "primary") {
        primaryColor = color;
      } else {
        secondaryColor = color;
      }
      updateSwatchUI();
      updatePaletteHighlight();
    });
  }

  // Brush Size Button Group
  document.querySelectorAll(".pixel-size-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".pixel-size-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentBrushSize = parseInt(btn.dataset.size) || 1;
    });
  });

  // Dynamic Size Draw Math
  function getBrushOffsets(size) {
    const offsets = [];
    const start = -Math.floor((size - 1) / 2);
    const end = Math.floor(size / 2);
    for (let dy = start; dy <= end; dy++) {
      for (let dx = start; dx <= end; dx++) {
        offsets.push([dx, dy]);
      }
    }
    return offsets;
  }

  function setPixel(x, y, color = currentColorForDraw) {
    if (!inBounds(x, y)) return;
    activeBuffer[idx(x, y)] = color;
  }

  function setPixelWithSize(x, y, color) {
    const offsets = getBrushOffsets(currentBrushSize);
    offsets.forEach(([dx, dy]) => {
      setPixel(x + dx, y + dy, color);
    });
  }

  function drawLine(x0, y0, x1, y1, color) {
    let dx = Math.abs(x1 - x0);
    let dy = Math.abs(y1 - y0);
    let sx = x0 < x1 ? 1 : -1;
    let sy = y0 < y1 ? 1 : -1;
    let err = dx - dy;
    while (true) {
      setPixelWithSize(x0, y0, color);
      if (x0 === x1 && y0 === y1) break;
      const e2 = 2 * err;
      if (e2 > -dy) { err -= dy; x0 += sx; }
      if (e2 < dx) { err += dx; y0 += sy; }
    }
  }

  function drawRect(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        if (fill) {
          setPixel(x, y, color);
        } else {
          if (x === minX || x === maxX || y === minY || y === maxY) {
            setPixelWithSize(x, y, color);
          }
        }
      }
    }
  }

  function drawCircle(x0, y0, x1, y1, fill, color) {
    const cx = Math.round((x0 + x1) / 2);
    const cy = Math.round((y0 + y1) / 2);
    const rx = Math.max(1, Math.abs(x1 - x0) / 2);
    const ry = Math.max(1, Math.abs(y1 - y0) / 2);
    for (let y = 0; y < GRID_SIZE; y++) {
      for (let x = 0; x < GRID_SIZE; x++) {
        const value = ((x - cx) ** 2) / (rx ** 2) + ((y - cy) ** 2) / (ry ** 2);
        if (fill) {
          if (value <= 1) setPixel(x, y, color);
        } else {
          if (Math.abs(value - 1) < 0.18) setPixelWithSize(x, y, color);
        }
      }
    }
  }

  function floodFill(start, replacement) {
    const target = activeBuffer[start] || "";
    if (target === replacement) return;
    const stack = [start];
    while (stack.length) {
      const current = stack.pop();
      if ((activeBuffer[current] || "") !== target) continue;
      activeBuffer[current] = replacement;
      const { x, y } = xy(current);
      [[x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]].forEach(([nx, ny]) => {
        if (inBounds(nx, ny)) stack.push(idx(nx, ny));
      });
    }
  }

  function isShapeTool(tool) {
    return ["line", "rect-outline", "rect-fill", "circle-outline", "circle-fill", "triangle-outline", "triangle-fill", "right-triangle-outline", "right-triangle-fill", "diamond-outline", "diamond-fill", "special-shape"].includes(tool);
  }

  function drawTriangle(x0, y0, x1, y1, direction, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const midX = Math.round((x0 + x1) / 2);
    
    if (fill) {
      const height = maxY - minY + 1;
      for (let y = minY; y <= maxY; y++) {
        let progress;
        if (direction === "up") {
          progress = height > 1 ? (y - minY) / (height - 1) : 1;
        } else {
          progress = height > 1 ? (maxY - y) / (height - 1) : 1;
        }
        const width = Math.round((maxX - minX) * progress);
        const startX = midX - Math.floor(width / 2);
        const endX = startX + width - 1;
        for (let x = startX; x <= endX; x++) {
          setPixel(x, y, color);
        }
      }
    } else {
      const peakY = direction === "up" ? minY : maxY;
      const baseY = direction === "up" ? maxY : minY;
      drawLine(midX, peakY, minX, baseY, color);
      drawLine(midX, peakY, maxX, baseY, color);
      drawLine(minX, baseY, maxX, baseY, color);
    }
  }

  function drawRightTriangle(x0, y0, x1, y1, corner, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    if (fill) {
      for (let y = minY; y <= maxY; y++) {
        const dy = y - minY;
        const progress = h > 0 ? dy / h : 1;
        if (corner === "tl") {
          const endX = minX + Math.round(w * (1 - progress));
          for (let x = minX; x <= endX; x++) {
            setPixel(x, y, color);
          }
        } else {
          const startX = minX + Math.round(w * (1 - progress));
          for (let x = startX; x <= maxX; x++) {
            setPixel(x, y, color);
          }
        }
      }
    } else {
      if (corner === "tl") {
        drawLine(minX, minY, maxX, minY, color);
        drawLine(minX, minY, minX, maxY, color);
        drawLine(maxX, minY, minX, maxY, color);
      } else {
        drawLine(minX, maxY, maxX, maxY, color);
        drawLine(maxX, minY, maxX, maxY, color);
        drawLine(minX, maxY, maxX, minY, color);
      }
    }
  }

  function drawDiamond(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const midX = Math.round((x0 + x1) / 2);
    const midY = Math.round((y0 + y1) / 2);
    
    if (fill) {
      const halfH = midY - minY;
      for (let y = minY; y <= maxY; y++) {
        const dy = Math.abs(y - midY);
        const progress = halfH > 0 ? (1 - dy / halfH) : 1;
        const width = Math.round((maxX - minX) * progress);
        const startX = midX - Math.floor(width / 2);
        const endX = startX + width - 1;
        for (let x = startX; x <= endX; x++) {
          setPixel(x, y, color);
        }
      }
    } else {
      drawLine(midX, minY, minX, midY, color);
      drawLine(midX, minY, maxX, midY, color);
      drawLine(midX, maxY, minX, midY, color);
      drawLine(midX, maxY, maxX, midY, color);
    }
  }

  function drawHeart(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    if (w === 0 || h === 0) {
      setPixel(x0, y0, color);
      return;
    }
    
    const cx = (minX + maxX) / 2;
    const cy = minY + h * 0.38;
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const nx = ((x - cx) / (w / 2)) * 1.25;
        const ny = (((cy - y) / (h / 2)) * 1.2) + 0.15;
        const equation = (nx*nx + ny*ny - 1)**3 - nx*nx * ny*ny*ny;
        
        if (fill) {
          if (equation <= 0) {
            setPixel(x, y, color);
          }
        } else {
          if (equation <= 0) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (nx_n < minX || nx_n > maxX || ny_n < minY || ny_n > maxY) {
                isBorder = true;
                break;
              }
              const nnx = ((nx_n - cx) / (w / 2)) * 1.25;
              const nny = (((cy - ny_n) / (h / 2)) * 1.2) + 0.15;
              const n_eq = (nnx*nnx + nny*nny - 1)**3 - nnx*nnx * nny*nny*nny;
              if (n_eq > 0) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function drawStar(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    if (w === 0 || h === 0) {
      setPixel(x0, y0, color);
      return;
    }
    
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const nx = Math.abs(x - cx) / (w / 2);
        const ny = Math.abs(y - cy) / (h / 2);
        const value = Math.sqrt(nx) + Math.sqrt(ny);
        
        if (fill) {
          if (value <= 1.0) {
            setPixel(x, y, color);
          }
        } else {
          if (value <= 1.0) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (nx_n < minX || nx_n > maxX || ny_n < minY || ny_n > maxY) {
                isBorder = true;
                break;
              }
              const nnx = Math.abs(nx_n - cx) / (w / 2);
              const nny = Math.abs(ny_n - cy) / (h / 2);
              const n_val = Math.sqrt(nnx) + Math.sqrt(nny);
              if (n_val > 1.0) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function drawCross(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    const cx = Math.round((minX + maxX) / 2);
    const cy = Math.round((minY + maxY) / 2);
    
    const thickX = Math.max(1, Math.round(w / 3));
    const thickY = Math.max(1, Math.round(h / 3));
    
    const xStart = cx - Math.floor(thickX / 2);
    const xEnd = xStart + thickX - 1;
    const yStart = cy - Math.floor(thickY / 2);
    const yEnd = yStart + thickY - 1;
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const inVertBar = (x >= xStart && x <= xEnd);
        const inHorizBar = (y >= yStart && y <= yEnd);
        const inside = inVertBar || inHorizBar;
        
        if (fill) {
          if (inside) setPixel(x, y, color);
        } else {
          if (inside) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (nx_n < minX || nx_n > maxX || ny_n < minY || ny_n > maxY) {
                isBorder = true;
                break;
              }
              const n_inVert = (nx_n >= xStart && nx_n <= xEnd);
              const n_inHoriz = (ny_n >= yStart && ny_n <= yEnd);
              if (!(n_inVert || n_inHoriz)) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function drawArrow(x0, y0, x1, y1, direction, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    const cx = Math.round((minX + maxX) / 2);
    const headHeight = Math.max(2, Math.round(h * 0.5));
    const shaftWidth = Math.max(1, Math.round(w / 3));
    const shaftStart = cx - Math.floor(shaftWidth / 2);
    const shaftEnd = shaftStart + shaftWidth - 1;
    
    function isInside(x, y) {
      if (x < minX || x > maxX || y < minY || y > maxY) return false;
      
      if (direction === "up") {
        if (y < minY + headHeight) {
          const dy = y - minY;
          const progress = headHeight > 1 ? dy / (headHeight - 1) : 1;
          const halfW = Math.round((w / 2) * progress);
          return (x >= cx - halfW && x <= cx + halfW);
        }
        return (x >= shaftStart && x <= shaftEnd);
      } else {
        if (y > maxY - headHeight) {
          const dy = maxY - y;
          const progress = headHeight > 1 ? dy / (headHeight - 1) : 1;
          const halfW = Math.round((w / 2) * progress);
          return (x >= cx - halfW && x <= cx + halfW);
        }
        return (x >= shaftStart && x <= shaftEnd);
      }
    }
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const inside = isInside(x, y);
        if (fill) {
          if (inside) setPixel(x, y, color);
        } else {
          if (inside) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (!isInside(nx_n, ny_n)) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function drawHexagon(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    if (w === 0 || h === 0) {
      setPixel(x0, y0, color);
      return;
    }
    
    const cx = (minX + maxX) / 2;
    const cy = (minY + maxY) / 2;
    
    function isInside(x, y) {
      if (x < minX || x > maxX || y < minY || y > maxY) return false;
      const dy = Math.abs(y - cy) / (h / 2);
      const limitW = w * (1 - dy * 0.5);
      return Math.abs(x - cx) <= limitW / 2;
    }
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const inside = isInside(x, y);
        if (fill) {
          if (inside) setPixel(x, y, color);
        } else {
          if (inside) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (!isInside(nx_n, ny_n)) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function drawPentagon(x0, y0, x1, y1, fill, color) {
    const minX = Math.min(x0, x1);
    const maxX = Math.max(x0, x1);
    const minY = Math.min(y0, y1);
    const maxY = Math.max(y0, y1);
    const w = maxX - minX;
    const h = maxY - minY;
    
    if (w === 0 || h === 0) {
      setPixel(x0, y0, color);
      return;
    }
    
    const cx = (minX + maxX) / 2;
    const splitY = minY + h * 0.4;
    
    function isInside(x, y) {
      if (x < minX || x > maxX || y < minY || y > maxY) return false;
      if (y < splitY) {
        const progress = (y - minY) / (splitY - minY || 1);
        const limitW = w * progress;
        return Math.abs(x - cx) <= limitW / 2;
      }
      return true;
    }
    
    for (let y = minY; y <= maxY; y++) {
      for (let x = minX; x <= maxX; x++) {
        const inside = isInside(x, y);
        if (fill) {
          if (inside) setPixel(x, y, color);
        } else {
          if (inside) {
            let isBorder = false;
            const neighbors = [[x+1, y], [x-1, y], [x, y+1], [x, y-1]];
            for (const [nx_n, ny_n] of neighbors) {
              if (!isInside(nx_n, ny_n)) {
                isBorder = true;
                break;
              }
            }
            if (isBorder) {
              setPixelWithSize(x, y, color);
            }
          }
        }
      }
    }
  }

  function applyPoint(index, color) {
    const { x, y } = xy(index);
    if (currentTool === "pencil" || currentTool === "brush") {
      setPixelWithSize(x, y, color);
    } else if (currentTool === "eraser") {
      setPixelWithSize(x, y, "");
    } else if (currentTool === "bucket") {
      floodFill(index, color);
    } else if (currentTool === "eyedropper") {
      const picked = activeBuffer[index] || "#ffffff";
      if (activeColorSlot === "primary") {
        primaryColor = picked;
      } else {
        secondaryColor = picked;
      }
      updateSwatchUI();
      updatePaletteHighlight();
    }
  }

  function commitShape(endIndex, color) {
    if (startIndex === null) return;
    const a = xy(startIndex);
    const b = xy(endIndex);
    
    const shape = activeSpecialShape;
    
    if (shape === "line") drawLine(a.x, a.y, b.x, b.y, color);
    else if (shape === "rect-outline") drawRect(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "rect-fill") drawRect(a.x, a.y, b.x, b.y, true, color);
    else if (shape === "circle-outline") drawCircle(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "circle-fill") drawCircle(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "triangle-up-outline") drawTriangle(a.x, a.y, b.x, b.y, "up", false, color);
    else if (shape === "triangle-up-fill") drawTriangle(a.x, a.y, b.x, b.y, "up", true, color);
    else if (shape === "triangle-down-outline") drawTriangle(a.x, a.y, b.x, b.y, "down", false, color);
    else if (shape === "triangle-down-fill") drawTriangle(a.x, a.y, b.x, b.y, "down", true, color);
    
    else if (shape === "right-triangle-tl-outline") drawRightTriangle(a.x, a.y, b.x, b.y, "tl", false, color);
    else if (shape === "right-triangle-tl-fill") drawRightTriangle(a.x, a.y, b.x, b.y, "tl", true, color);
    else if (shape === "right-triangle-br-outline") drawRightTriangle(a.x, a.y, b.x, b.y, "br", false, color);
    else if (shape === "right-triangle-br-fill") drawRightTriangle(a.x, a.y, b.x, b.y, "br", true, color);
    
    else if (shape === "diamond-outline") drawDiamond(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "diamond-fill") drawDiamond(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "heart-outline") drawHeart(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "heart-fill") drawHeart(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "star-outline") drawStar(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "star-fill") drawStar(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "cross-outline") drawCross(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "cross-fill") drawCross(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "arrow-up-outline") drawArrow(a.x, a.y, b.x, b.y, "up", false, color);
    else if (shape === "arrow-up-fill") drawArrow(a.x, a.y, b.x, b.y, "up", true, color);
    else if (shape === "arrow-down-outline") drawArrow(a.x, a.y, b.x, b.y, "down", false, color);
    else if (shape === "arrow-down-fill") drawArrow(a.x, a.y, b.x, b.y, "down", true, color);
    
    else if (shape === "hexagon-outline") drawHexagon(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "hexagon-fill") drawHexagon(a.x, a.y, b.x, b.y, true, color);
    
    else if (shape === "pentagon-outline") drawPentagon(a.x, a.y, b.x, b.y, false, color);
    else if (shape === "pentagon-fill") drawPentagon(a.x, a.y, b.x, b.y, true, color);
  }

  function setTool(tool) {
    currentTool = tool;
    document.querySelectorAll(".pixel-tool-btn[data-tool]").forEach(btn => btn.classList.toggle("active", btn.dataset.tool === tool));
    const labelBottom = document.getElementById("pixel-tool-label-bottom");
    const labelTop = document.getElementById("pixel-tool-label");
    if (labelBottom) labelBottom.textContent = tool.toUpperCase();
    if (labelTop) labelTop.textContent = tool.toUpperCase();
  }

  document.querySelectorAll(".pixel-tool-btn[data-tool]").forEach(btn => {
    btn.addEventListener("click", () => {
      const tool = btn.dataset.tool;
      setTool(tool);
    });
  });

  function cellFromEvent(e) {
    const point = e.touches?.[0] || e.changedTouches?.[0] || e;
    if (typeof point.clientX !== "number" || typeof point.clientY !== "number") return null;
    const el = document.elementFromPoint(point.clientX, point.clientY);
    return el?.classList.contains("pixel-cell") ? el : null;
  }

  function startDraw(e) {
    const cell = cellFromEvent(e);
    if (!cell) return;
    e.preventDefault();
    pushUndo();
    isDrawing = true;
    startIndex = Number(cell.dataset.index);

    if (e.button === 2) {
      currentColorForDraw = secondaryColor;
    } else {
      currentColorForDraw = primaryColor;
    }

    if (["eyedropper"].includes(currentTool)) {
      activeColorSlot = e.button === 2 ? "secondary" : "primary";
    }

    if (isShapeTool(currentTool)) return;
    applyPoint(startIndex, currentColorForDraw);
    renderGrid();
  }

  function moveDraw(e) {
    const cell = cellFromEvent(e);
    if (!cell) return;
    const index = Number(cell.dataset.index);
    const { x, y } = xy(index);
    const coords = document.getElementById("pixel-coords");
    if (coords) coords.textContent = `X: ${x}, Y: ${y}`;
    if (!isDrawing) return;
    e.preventDefault();

    if (isShapeTool(currentTool)) {
      const tempBuffer = [...pixelData];
      activeBuffer = tempBuffer;
      commitShape(index, currentColorForDraw);
      renderGrid(tempBuffer);
      activeBuffer = pixelData;
    } else if (["bucket", "eyedropper"].includes(currentTool)) {
      return;
    } else {
      applyPoint(index, currentColorForDraw);
      renderGrid();
    }
  }

  function endDraw(e) {
    if (!isDrawing) return;
    const cell = cellFromEvent(e) || document.querySelector(`.pixel-cell[data-index="${startIndex}"]`);
    const index = Number(cell.dataset.index);
    if (isShapeTool(currentTool)) {
      activeBuffer = pixelData;
      commitShape(index, currentColorForDraw);
      renderGrid();
    }
    isDrawing = false;
    startIndex = null;
  }

  board.addEventListener("mousedown", startDraw);
  board.addEventListener("mouseover", moveDraw);
  document.addEventListener("mouseup", endDraw);
  board.addEventListener("contextmenu", (e) => e.preventDefault()); // Prevent browser default right click

  board.addEventListener("touchstart", (e) => {
    currentColorForDraw = primaryColor;
    startDraw(e);
  }, { passive: false });
  board.addEventListener("touchmove", moveDraw, { passive: false });
  board.addEventListener("touchend", endDraw, { passive: false });

  document.getElementById("pixel-undo")?.addEventListener("click", () => {
    if (!undoStack.length) return;
    redoStack.push([...pixelData]);
    pixelData = undoStack.pop();
    renderGrid();
  });
  document.getElementById("pixel-redo")?.addEventListener("click", () => {
    if (!redoStack.length) return;
    undoStack.push([...pixelData]);
    pixelData = redoStack.pop();
    renderGrid();
  });
  document.getElementById("pixel-grid-toggle")?.addEventListener("click", () => board.classList.toggle("no-grid"));
  document.getElementById("pixel-clear")?.addEventListener("click", () => {
    if (!confirm("도트 그림판을 전체 지우시겠습니까?")) return;
    pushUndo();
    pixelData = Array(totalCells).fill("");
    renderGrid();
  });

  // ==== Save Draft to 구글 클라우드 & 로컬 백업 ====
  const saveDraftBtn = document.getElementById("pixel-save-draft");
  if (saveDraftBtn) {
    saveDraftBtn.addEventListener("click", async () => {
      if (!currentUser) return;

      // 1. Local backup first
      const draftKey = `soro_pixelart_draft_${currentUser.userKey}`;
      localStorage.setItem(draftKey, JSON.stringify(pixelData));

      // 2. Remote sheets database cloud sync
      if (GOOGLE_SHEET_API_URL) {
        showToast("임시저장 파일을 클라우드에 안전하게 보관하고 있습니다...", "info");
        const draftId = `pixelart_draft_${currentUser.userKey}`;
        
        // delete previous draft first
        const delPayload = {
          action: "deleteSubmission",
          id: draftId
        };

        try {
          await fetch(GOOGLE_SHEET_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(delPayload)
          });

          // save new draft
          const newDraftEntry = {
            id: draftId,
            contestId: "pixelart_draft",
            contestTitle: "픽셀아트 임시저장",
            studentUsername: currentUser.userKey,
            studentName: currentUser.name,
            studentGrade: currentUser.grade,
            studentClass: currentUser.classNum,
            studentNumber: currentUser.number,
            timestamp: new Date().toLocaleString("ko-KR"),
            data: {
              type: "pixel_draft",
              pixelData: pixelData
            }
          };

          const savePayload = {
            action: "submitContest",
            entry: newDraftEntry
          };

          const response = await fetch(GOOGLE_SHEET_API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: JSON.stringify(savePayload)
          });
          const result = await response.json();
          if (result.status === "success") {
            showToast("픽셀아트 작업 내역이 클라우드에 보관 완료되었습니다! ☁️💾", "success");
            setTimeout(() => {
              document.getElementById("pixel-close-editor")?.click();
            }, 300);
          } else {
            showToast("클라우드 임시저장에 실패했습니다. 브라우저 보관본을 유지합니다.", "error");
          }
        } catch (e) {
          console.error("Cloud save draft error:", e);
          showToast("네트워크 지연으로 임시저장에 실패했습니다. 브라우저 보관본을 유지합니다.", "error");
        }
      } else {
        showToast("픽셀아트 작업 내역이 로컬 저장소에 임시 저장되었습니다. 💾", "success");
        setTimeout(() => {
          document.getElementById("pixel-close-editor")?.click();
        }, 300);
      }
    });
  }

  // ==== Load Draft from Cloud quietly in the background ====
  async function loadCloudDraft() {
    if (!currentUser || !GOOGLE_SHEET_API_URL) return;
    const payload = {
      action: "getSubmissions",
      studentUsername: currentUser.userKey
    };
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.status === "success" && Array.isArray(result.data)) {
        const cloudDraft = result.data.find(entry => entry.id === `pixelart_draft_${currentUser.userKey}`);
        if (cloudDraft && cloudDraft.data && Array.isArray(cloudDraft.data.pixelData)) {
          pixelData = cloudDraft.data.pixelData;
          renderGrid();
          // update local backup
          const draftKey = `soro_pixelart_draft_${currentUser.userKey}`;
          localStorage.setItem(draftKey, JSON.stringify(pixelData));
          showToast("클라우드에서 이전 작업 내역을 동기화했습니다. ☁️✨", "success");
        }
      }
    } catch (err) {
      console.error("Cloud draft load failed:", err);
    }
  }

  // Initial updates
  updateSwatchUI();
  updatePaletteHighlight();
  renderGrid();

  // Load cloud draft quietly after load
  setTimeout(loadCloudDraft, 400);

  // Initialize Special Shapes Grid in Right Panel
  const shapesGrid = document.getElementById("pixel-special-shapes-grid");
  if (shapesGrid) {
    shapesGrid.innerHTML = SPECIAL_SHAPES.map(shape => `
      <div class="pixel-shape-item${activeSpecialShape === shape.id ? ' active' : ''}" data-shape="${shape.id}" title="${shape.name}">
        <svg viewBox="0 0 24 24">${shape.icon}</svg>
      </div>
    `).join("");
    
    shapesGrid.querySelectorAll(".pixel-shape-item").forEach(item => {
      item.addEventListener("click", () => {
        activeSpecialShape = item.dataset.shape;
        shapesGrid.querySelectorAll(".pixel-shape-item").forEach(i => i.classList.remove("active"));
        item.classList.add("active");
        setTool("special-shape");
      });
    });
  }
}

// Exports the pixel art grid to a base64 PNG string
function exportPixelArtToBase64() {
  const board = document.getElementById("pixel-grid-board");
  const canvas = document.getElementById("pixel-export-canvas");
  if (!board || !canvas) return null;

  const GRID_SIZE = 30;
  const CELL_SIZE = 10; // Each pixel = 10px in the exported image (300x300)
  canvas.width = GRID_SIZE * CELL_SIZE;
  canvas.height = GRID_SIZE * CELL_SIZE;
  const ctx = canvas.getContext("2d");

  // Clear with white background
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const cells = board.querySelectorAll(".pixel-cell");
  let hasContent = false;
  cells.forEach((cell, index) => {
    const bg = cell.style.backgroundColor;
    if (bg) {
      hasContent = true;
      ctx.fillStyle = bg;
      const col = index % GRID_SIZE;
      const row = Math.floor(index / GRID_SIZE);
      ctx.fillRect(col * CELL_SIZE, row * CELL_SIZE, CELL_SIZE, CELL_SIZE);
    }
  });

  if (!hasContent) return null;
  return canvas.toDataURL("image/png");
}

function setupEventListeners() {
  document.getElementById("contest-drawer-overlay").addEventListener("click", closeContestDrawer);
  document.getElementById("contest-drawer-close").addEventListener("click", closeContestDrawer);
  
  // Drawer Tab Switcher Event Listeners
  document.getElementById("drawer-tab-guide").addEventListener("click", () => switchDrawerTab("guide"));
  document.getElementById("drawer-tab-criteria").addEventListener("click", () => switchDrawerTab("criteria"));
  document.getElementById("drawer-tab-gallery").addEventListener("click", () => switchDrawerTab("gallery"));

  // 2025 Gallery Filter Badges Event Listeners
  document.querySelectorAll(".gallery-filter-badge").forEach(badge => {
    badge.addEventListener("click", (e) => {
      document.querySelectorAll(".gallery-filter-badge").forEach(b => b.classList.remove("active"));
      e.currentTarget.classList.add("active");
      const grade = e.currentTarget.getAttribute("data-grade");
      renderGallery2025(grade);
    });
  });

  document.getElementById("auth-trigger-btn").addEventListener("click", () => openAuthDrawer("login"));
  document.getElementById("auth-redirect-btn").addEventListener("click", () => {
    closeContestDrawer();
    openAuthDrawer("login");
  });

  document.getElementById("auth-drawer-overlay").addEventListener("click", closeAuthDrawer);
  document.getElementById("auth-drawer-close").addEventListener("click", closeAuthDrawer);

  document.getElementById("tab-login-btn").addEventListener("click", () => switchAuthTab("login"));
  document.getElementById("tab-signup-btn").addEventListener("click", () => switchAuthTab("signup"));

  document.getElementById("logout-btn").addEventListener("click", executeLogout);

  const lookupDrawer = document.getElementById("lookup-drawer");
  document.getElementById("lookup-toggle-btn").addEventListener("click", () => {
    lookupDrawer.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    executeLoggedInLookup();
  });
  document.getElementById("lookup-drawer-overlay").addEventListener("click", closeLookupDrawer);
  document.getElementById("lookup-drawer-close").addEventListener("click", closeLookupDrawer);

  function closeLookupDrawer() {
    lookupDrawer.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  // Handle Login submission
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateLoginForm()) {
      const grade = document.getElementById("login-grade").value;
      const classNum = document.getElementById("login-class").value.trim();
      const number = document.getElementById("login-number").value.trim();
      const name = document.getElementById("login-name").value.trim();
      const pass = document.getElementById("login-password").value;
      handleLogin(grade, classNum, number, name, pass);
    }
  });

  // Handle Signup submission
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (validateSignupForm()) {
      const grade = document.getElementById("signup-grade").value;
      const classNum = document.getElementById("signup-class").value.trim();
      const number = document.getElementById("signup-number").value.trim();
      const name = document.getElementById("signup-name").value.trim();
      const pass = document.getElementById("signup-password").value;
      handleSignUp(grade, classNum, number, name, pass);
    }
  });

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

  const grade = document.getElementById("login-grade");
  const classNum = document.getElementById("login-class");
  const number = document.getElementById("login-number");
  const name = document.getElementById("login-name");
  const pass = document.getElementById("login-password");

  document.querySelectorAll("#login-form .form-group").forEach(g => g.classList.remove("has-error"));

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
  if (!name.value.trim()) {
    name.parentElement.classList.add("has-error");
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

  const grade = document.getElementById("signup-grade");
  const classNum = document.getElementById("signup-class");
  const number = document.getElementById("signup-number");
  const name = document.getElementById("signup-name");
  const pass = document.getElementById("signup-password");

  document.querySelectorAll("#signup-form .form-group").forEach(g => g.classList.remove("has-error"));

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
  if (!name.value.trim()) {
    name.parentElement.classList.add("has-error");
    isValid = false;
  }
  if (!pass.value || pass.value.length < 4) {
    pass.parentElement.classList.add("has-error");
    isValid = false;
  }

  return isValid;
}

function validateSubmissionForm() {
  let isValid = true;
  document.querySelectorAll("#submission-form .form-group").forEach(g => g.classList.remove("has-error"));

  if (activeContest.submissionType === "image" && activeContest.id === "pixelart") {
    const isDrawActive = document.getElementById("toggle-pixel-draw")?.classList.contains("active");
    if (isDrawActive) {
      const testExport = exportPixelArtToBase64();
      if (!testExport) {
        const editorContainer = document.querySelector(".pixel-editor-shell");
        if (editorContainer) editorContainer.parentElement.classList.add("has-error");
        isValid = false;
      }
    } else {
      if (!uploadBase64Data) {
        const dropzone = document.getElementById("file-dropzone");
        if (dropzone) dropzone.parentElement.classList.add("has-error");
        isValid = false;
      }
    }
  } else if (activeContest.submissionType === "image") {
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
async function executeSubmit() {
  if (!currentUser) return;

  const contestId = document.getElementById("form-contest-id").value;
  const entryId = `${activeContest.id}_${Date.now()}`;

  const newEntry = {
    id: entryId,
    contestId: contestId,
    contestTitle: activeContest.title,
    studentUsername: currentUser.userKey,
    studentName: currentUser.name,
    studentGrade: currentUser.grade,
    studentClass: currentUser.classNum,
    studentNumber: currentUser.number,
    timestamp: new Date().toLocaleString("ko-KR"),
    data: {}
  };

  if (activeContest.submissionType === "image" && activeContest.id === "pixelart") {
    const isDrawActive = document.getElementById("toggle-pixel-draw")?.classList.contains("active");
    if (isDrawActive) {
      newEntry.data.type = "pixel_draw";
      newEntry.data.image = exportPixelArtToBase64();
    } else {
      newEntry.data.type = "image";
      newEntry.data.image = uploadBase64Data;
    }
  } else if (activeContest.submissionType === "image") {
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

  // 1. Remote DB Cloud Mode
  if (GOOGLE_SHEET_API_URL) {
    showToast("작품을 클라우드에 업로드 중...", "info");
    const payload = {
      action: "submitContest",
      entry: newEntry
    };
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (result.status === "error") {
        showToast(result.message, "error");
        return;
      }

      showToast(`${activeContest.title} 대회의 작품 접수가 성공적으로 클라우드에 기록되었습니다! 🎨`, "success");
      closeContestDrawer();
      updateLiveCounters();
      return;
    } catch (e) {
      console.error(e);
      showToast("원격 서버 연동 지연. 로컬 브라우저에 임시 백업됩니다.", "error");
    }
  }

  // 2. Fallback Local Mode
  const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
  allSubmissions.push(newEntry);
  localStorage.setItem("soro_submissions", JSON.stringify(allSubmissions));

  showToast(`${activeContest.title} 대회의 작품 접수가 성공적으로 완료되었습니다! 🎨`, "success");
  closeContestDrawer();
  updateLiveCounters();
}

// ====================================================
// LOOKUP SUBMISSIONS FROM REMOTE OR LOCAL DB
// ====================================================
async function executeLoggedInLookup() {
  if (!currentUser) return;

  const container = document.getElementById("results-container");
  container.innerHTML = `<div class="empty-results">내역을 안전하게 불러오고 있습니다...</div>`;

  let mySubmissions = [];

  // 1. Remote DB Cloud Mode
  if (GOOGLE_SHEET_API_URL) {
    const payload = {
      action: "getSubmissions",
      studentUsername: currentUser.userKey
    };
    try {
      const response = await fetch(GOOGLE_SHEET_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();
      if (result.status === "success") {
        mySubmissions = result.data;
      }
    } catch (e) {
      console.error(e);
      showToast("원격 서버 데이터 수신 실패. 로컬 백업을 조회합니다.", "error");
      GOOGLE_SHEET_API_URL_error = true;
    }
  }

  // 2. Fallback Local Mode
  if (!GOOGLE_SHEET_API_URL || mySubmissions.length === 0) {
    const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
    mySubmissions = allSubmissions.filter(entry =>
      entry.studentUsername.toLowerCase() === currentUser.userKey.toLowerCase()
    );
  }

  // 임시저장 본은 제출 목록 리스트에서 제외
  mySubmissions = mySubmissions.filter(entry => entry.contestId !== "pixelart_draft");

  // === [신설] 게이미피케이션 레벨링 시스템 렌더링 ===
  const levelContainer = document.getElementById("lookup-level-container");
  if (levelContainer) {
    const completedContests = new Set();
    mySubmissions.forEach(entry => {
      completedContests.add(entry.contestId);
    });
    
    const completedCount = completedContests.size;
    const totalCount = CONTESTS_DATA.length;
    const progressPercent = Math.round((completedCount / totalCount) * 100);

    const levels = [
      { title: "소로 새싹 🌱", desc: "도전을 준비하는 파릇파릇한 새싹 단계입니다. 공모전에 참여해 첫 작품을 등록해 보세요!", icon: "🌱" },
      { title: "도전 시작 🚀", desc: "첫 걸음을 떼었습니다! 계속해서 상상의 나래를 펼쳐 다른 미션도 완료해 보세요.", icon: "🚀" },
      { title: "꿈꾸는 크리에이터 ✨", desc: "멋진 창의성으로 벌써 두 개의 미션을 완료하셨네요! 자신만의 작품 세계를 구축 중입니다.", icon: "✨" },
      { title: "창작 탐험가 🗺️", desc: "세 개의 미션 클리어! 새로운 한계를 뛰어넘어 창작의 진정한 묘미를 알아가는 중입니다.", icon: "🗺️" },
      { title: "아이디어 발전기 ⚡", desc: "네 개의 미션 클리어! 반짝이는 아이디어가 쉴 새 없이 샘솟는 학급 대표 창의력 대장!", icon: "⚡" },
      { title: "디지털 마스터 🎓", desc: "다섯 개의 미션 완료! 다양한 디지털 창작 도구를 완벽에 가깝게 다루는 디지털 마스터 수준입니다.", icon: "🎓" },
      { title: "전설의 크리에이터 🏆", desc: "경배하라! 6개의 모든 공모전 미션을 완벽 정복한 청주소로초 최고의 크리에이티브 히어로!", icon: "🏆" }
    ];

    const currentLevelInfo = levels[completedCount] || levels[0];
    const nextLevelInfo = levels[completedCount + 1] || null;

    let stageBadgesHtml = CONTESTS_DATA.map(contest => {
      const isCompleted = completedContests.has(contest.id);
      return `
        <div class="stage-badge ${isCompleted ? 'completed' : 'locked'}">
          <div class="badge-icon">${contest.icon}</div>
          <div class="badge-title" title="${contest.title}">${contest.title}</div>
          <div class="badge-status">${isCompleted ? '완료 🟢' : '대기 중 🔒'}</div>
        </div>
      `;
    }).join("");

    let nextLevelMessage = nextLevelInfo 
      ? `다음 레벨 <strong>[${nextLevelInfo.title}]</strong>까지 미션 <strong>1개</strong> 더 완료하기!`
      : `🎉 모든 공모전 미션을 정복하여 최고 레벨에 도달했습니다!`;

    levelContainer.innerHTML = `
      <div class="level-card">
        <div class="level-card-header">
          <div class="level-info">
            <span class="level-badge">LV.${completedCount}</span>
            <h3 class="level-title">${currentLevelInfo.title}</h3>
            <span class="student-grade-name">(${currentUser.grade}학년 ${currentUser.classNum}반 ${currentUser.name})</span>
          </div>
          <div class="level-desc">${currentLevelInfo.desc}</div>
        </div>
        
        <div class="level-xp-section">
          <div class="level-xp-label">
            <span>미션 진행도 (XP)</span>
            <span>${completedCount} / ${totalCount} (${progressPercent}%)</span>
          </div>
          <div class="xp-bar-container">
            <div class="xp-bar-fill" id="xp-bar-fill-dynamic" style="width: 0%;"></div>
          </div>
          <div class="level-next-tip">${nextLevelMessage}</div>
        </div>
        
        <div class="level-stages-grid">
          <div class="stages-grid-title">미션 달성 보드 (Mission Board)</div>
          <div class="stages-grid-container">
            ${stageBadgesHtml}
          </div>
        </div>
      </div>
    `;

    // Trigger width animation after rendering
    setTimeout(() => {
      const bar = document.getElementById("xp-bar-fill-dynamic");
      if (bar) bar.style.width = `${progressPercent}%`;
    }, 100);
  }

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

    // Parse data structure depending on how it was stored
    let entryData = {};
    try {
      entryData = typeof entry.data === "string" ? JSON.parse(entry.data) : (entry.data || {});
    } catch (err) {
      console.error("Error parsing entry data:", err, entry.data);
      if (entry.data) {
        entryData = { image: entry.data };
      }
    }

    if (entryData && entryData.image) {
      const isDrive = entryData.image.includes("drive.google.com");
      const displayUrl = isDrive ? getGoogleDriveDirectLink(entryData.image) : entryData.image;
      const driveId = isDrive ? extractDriveId(entryData.image) : "";
      const downloadUrl = isDrive ? `https://drive.google.com/uc?export=download&id=${driveId}` : entryData.image;

      contentHtml += `
        <div style="margin-top: 10px;"><strong>제출한 이미지 시안:</strong></div>
        <div class="submitted-media-preview-container" style="margin-top: 8px; display: flex; flex-direction: column; gap: 8px;">
          <div style="border: 1px solid var(--border-color); padding: 6px; background: var(--bg-tertiary); display: flex; justify-content: center; overflow: hidden; max-height: 180px;">
            <img class="submission-thumbnail" src="${displayUrl}" alt="제출 이미지" style="max-width: 100%; max-height: 160px; object-fit: contain; border: 1px solid var(--border-color);">
          </div>
          <div>
            <a href="${downloadUrl}" target="_blank" download="submission_art.png" class="btn btn-secondary btn-sm" style="display: inline-flex; align-items: center; justify-content: center; gap: 6px; font-size: 0.7rem; font-weight: 700; padding: 4px 10px; border-radius: 0; background: var(--bg-secondary); border: 1px solid var(--border-color); color: var(--text-primary); text-decoration: none; cursor: pointer; transition: all var(--transition-fast);">
              <svg width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"></path>
              </svg>
              제출 이미지 다운로드
            </a>
          </div>
        </div>
      `;
    }

    else if (entryData && entryData["book-title"]) {
      contentHtml += `
        <div><strong>추천 도서:</strong> ${entryData["book-title"]} (${entryData["book-author"] || "저자 미상"})</div>
        <div><strong>추천 사유 & 평점:</strong> "${entryData["book-review"]}"</div>
      `;
    }

    else if (entryData && entryData.type === "text") {
      contentHtml += `
        <div><strong>필사 텍스트 구절:</strong></div>
        <div style="font-family: serif; white-space: pre-line; background: var(--bg-tertiary); padding: 12px; border-radius: 6px; margin-top: 4px; border: 1px solid var(--border-color); color: var(--text-primary);">
          ${entryData.text}
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
        <div><strong>소속 인적 사항:</strong> ${entry.studentGrade}학년 ${entry.studentClass} ${entry.studentNumber}</div>
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

// Global deletion call (Supports Remote/Local)
window.confirmDeleteEntry = async function (entryId) {
  if (confirm("정말 이 작품의 접수를 취소하고 삭제하시겠습니까? 한 번 지워진 접수 데이터는 복구할 수 없습니다.")) {

    // 1. Remote DB Cloud Mode
    if (GOOGLE_SHEET_API_URL) {
      showToast("클라우드에서 접수를 파기하고 있습니다...", "info");
      const payload = {
        action: "deleteSubmission",
        id: entryId
      };
      try {
        const response = await fetch(GOOGLE_SHEET_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();

        if (result.status === "error") {
          showToast(result.message, "error");
          return;
        }
      } catch (e) {
        console.error(e);
        showToast("원격 서버 통신 지연. 로컬 삭제를 실행합니다.", "error");
      }
    }

    // 2. Fallback Local Mode
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

    showToast("작품 접수 정보가 성공적으로 취소 및 삭제 처리되었습니다.", "success");
    updateLiveCounters();
  }
};

// ====================================================
// COUNTERS & TOAST NOTIFICATION UTILITIES
// ====================================================
async function updateLiveCounters() {
  let count = 0;

  if (currentUser) {
    if (GOOGLE_SHEET_API_URL) {
      // Quietly query count from Google Sheets
      const payload = {
        action: "getSubmissions",
        studentUsername: currentUser.userKey
      };
      try {
        const response = await fetch(GOOGLE_SHEET_API_URL, {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: JSON.stringify(payload)
        });
        const result = await response.json();
        if (result.status === "success") {
          const filtered = result.data.filter(entry => entry.contestId !== "pixelart_draft");
          count = filtered.length;
          document.getElementById("stat-my-submissions").textContent = `${count}개`;
          return;
        }
      } catch (e) {
        // Fallback silently to local
      }
    }

    const allSubmissions = JSON.parse(localStorage.getItem("soro_submissions") || "[]");
    const mySubmissions = allSubmissions.filter(entry =>
      entry.studentUsername.toLowerCase() === currentUser.userKey.toLowerCase() &&
      entry.contestId !== "pixelart_draft"
    );
    count = mySubmissions.length;
    document.getElementById("stat-my-submissions").textContent = `${count}개`;
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

/*
========================================================================
[원클릭 연동] GOOGLE APPS SCRIPT 백엔드 소스코드 가이드라인 (드라이브 이미지 저장 기능 강화)
========================================================================
구글 스프레드시트를 생성하고 [확장 프로그램] -> [Apps Script]를 클릭한 뒤,
기존 코드를 모두 삭제하고 아래 코드를 복사해서 붙여넣으세요!

1. 스프레드시트에 "Users" 시트와 "Submissions" 시트를 각각 새 탭으로 추가해 주세요.
2. 아래 코드를 붙여넣은 뒤, 상단의 [배포] -> [새 배포]를 클릭합니다.
3. 유형 선택에서 [웹 앱]을 선택합니다.
4. 설명에 "SORO DB API" 입력 후, [액세스 권한이 있는 사용자]를 [모든 사용자(Anyone)]로 설정하고 배포합니다.
5. 배포 완료 시 생성되는 "웹 앱 URL"을 복사하여 본 app.js 파일의 최상단 'GOOGLE_SHEET_API_URL'에 붙여넣으세요.
※ 이 스크립트는 학생들이 업로드한 대용량 그림 파일(Base64)을 자동으로 본인 구글 드라이브의 "SORO_Submissions" 폴더에 저장하고, 시트에는 해당 이미지의 다운로드/뷰어 링크만 깔끔하게 저장하여 구글 시트의 셀 용량 제한(5만자) 에러를 방지하고 편리하게 관리할 수 있게 해줍니다.

====================== 복사할 Apps Script 코드 시작 ======================

function doPost(e) {
  var response = { status: "error", message: "알 수 없는 요청" };
  
  try {
    var requestData = JSON.parse(e.postData.contents);
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    // 1. 회원가입 액션 (Users 시트)
    if (requestData.action === "signUp") {
      var sheet = ss.getSheetByName("Users");
      if (!sheet) {
        sheet = ss.insertSheet("Users");
        sheet.appendRow(["UserKey", "Grade", "ClassNum", "Number", "Name", "Password"]);
      }
      
      var data = sheet.getDataRange().getValues();
      var exists = false;
      for (var i = 1; i < data.length; i++) {
        if (data[i][0] === requestData.userKey) {
          exists = true;
          break;
        }
      }
      
      if (exists) {
        response = { status: "error", message: "이미 동일한 정보로 가입된 계정이 존재합니다." };
      } else {
        sheet.appendRow([
          requestData.userKey,
          requestData.grade,
          requestData.classNum,
          requestData.number,
          requestData.name,
          requestData.password
        ]);
        response = { status: "success", message: "가입 완료" };
      }
    }
    
    // 2. 로그인 액션 (Users 시트 검증)
    else if (requestData.action === "login") {
      var sheet = ss.getSheetByName("Users");
      var authenticated = false;
      
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          if (data[i][0] === requestData.userKey && String(data[i][5]) === String(requestData.password)) {
            authenticated = true;
            break;
          }
        }
      }
      
      if (authenticated) {
        response = { status: "success", message: "인증 성공" };
      } else {
        response = { status: "error", message: "학년/반/번호/이름 또는 비밀번호가 틀렸습니다." };
      }
    }
    
    // 3. 작품 응모 액션 (Submissions 시트 + 구글 드라이브 이미지 저장)
    else if (requestData.action === "submitContest") {
      var sheet = ss.getSheetByName("Submissions");
      if (!sheet) {
        sheet = ss.insertSheet("Submissions");
        sheet.appendRow(["ID", "ContestID", "ContestTitle", "StudentUsername", "StudentName", "StudentGrade", "StudentClass", "StudentNumber", "Timestamp", "DataJSON"]);
      }
      
      var entry = requestData.entry;
      
      // [핵심] 만약 이미지(Base64) 데이터가 존재한다면, 구글 드라이브에 파일을 생성하고 시트에는 URL 링크만 기입
      if (entry.data && entry.data.image && entry.data.image.indexOf("data:image/") === 0) {
        var fileExtension = getExtensionFromBase64(entry.data.image);
        var customFileName = entry.contestTitle + "_" + entry.studentGrade + "학년" + entry.studentClass + "반" + entry.studentNumber + "번_" + entry.studentName + "_" + entry.id + fileExtension;
        
        var uploadedFileUrl = saveBase64ToDrive(entry.data.image, customFileName);
        if (uploadedFileUrl) {
          entry.data.image = uploadedFileUrl; // Base64 스트링 대신 구글 드라이브 링크 대입!
        }
      }
      
      sheet.appendRow([
        entry.id,
        entry.contestId,
        entry.contestTitle,
        entry.studentUsername,
        entry.studentName,
        entry.studentGrade,
        entry.studentClass,
        entry.studentNumber,
        entry.timestamp,
        JSON.stringify(entry.data)
      ]);
      response = { status: "success", message: "접수 성공" };
    }
    
    // 4. 작품 내역 조회 액션 (Submissions 시트)
    else if (requestData.action === "getSubmissions") {
      var sheet = ss.getSheetByName("Submissions");
      var results = [];
      
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = 1; i < data.length; i++) {
          if (data[i][3] === requestData.studentUsername) {
            results.push({
              id: data[i][0],
              contestId: data[i][1],
              contestTitle: data[i][2],
              studentUsername: data[i][3],
              studentName: data[i][4],
              studentGrade: data[i][5],
              studentClass: data[i][6],
              studentNumber: data[i][7],
              timestamp: data[i][8],
              data: (function() {
                try { return JSON.parse(data[i][9]); }
                catch(e) { return { image: data[i][9] }; }
              })()
            });
          }
        }
      }
      response = { status: "success", data: results };
    }
    
    // 5. 작품 접수 취소 액션 (Submissions 시트 행 삭제)
    else if (requestData.action === "deleteSubmission") {
      var sheet = ss.getSheetByName("Submissions");
      var deleted = false;
      
      if (sheet) {
        var data = sheet.getDataRange().getValues();
        for (var i = data.length - 1; i >= 1; i--) {
          if (data[i][0] === requestData.id) {
            sheet.deleteRow(i + 1);
            deleted = true;
          }
        }
      }
      
      if (deleted) {
        response = { status: "success", message: "삭제 완료" };
      } else {
        response = { status: "error", message: "삭제 대상을 찾을 수 없음" };
      }
    }
    
  } catch (error) {
    response = { status: "error", message: error.toString() };
  }
  
  // CORS 우회 응답 설정
  return ContentService.createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

// [헬퍼] Base64 데이터를 파싱하여 구글 드라이브에 이미지로 저장하는 함수
function saveBase64ToDrive(base64Data, fileName) {
  try {
    var split = base64Data.split(',');
    var contentType = split[0].match(/:(.*?);/)[1];
    var base64String = split[1];
    var decodedBytes = Utilities.base64Decode(base64String);
    var fileBlob = Utilities.newBlob(decodedBytes, contentType, fileName);
    
    var folderName = "SORO_Submissions";
    var folders = DriveApp.getFoldersByName(folderName);
    var folder;
    
    if (folders.hasNext()) {
      folder = folders.next();
    } else {
      folder = DriveApp.createFolder(folderName);
    }
    
    var createdFile = folder.createFile(fileBlob);
    // 외부 링크가 있는 누구나 뷰어로 조회할 수 있도록 권한 부여
    createdFile.setSharing(DriveApp.Access.ANYONE_WITH_LINK, DriveApp.Permission.VIEW);
    return createdFile.getUrl();
  } catch (err) {
    Logger.log("Error in saveBase64ToDrive: " + err.toString());
    return null;
  }
}

// [헬퍼] Base64 데이터의 마임타입을 감지하여 확장자를 반환하는 함수
function getExtensionFromBase64(base64Data) {
  try {
    var match = base64Data.match(/data:image\/(.*?);base64/);
    if (match && match[1]) {
      var ext = match[1];
      if (ext === "jpeg") return ".jpg";
      return "." + ext;
    }
  } catch (e) {}
  return ".png";
}

====================== 복사할 Apps Script 코드 끝 ======================
*/
