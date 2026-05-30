export const work = {
  intro: {
    pre: "여행 플랫폼",
    tourvis: "투어비스",
    privia: "프리비아",
    post: "에서 작업했던 주요 작업입니다.",
  },
  projects: [
    {
      no: 5,
      titleLines: ["모바일 예약상세 페이지 개선:", "iOS/WebView 핸들링"],
      about:
        "iOS Safari 및 인앱 웹뷰 환경에서 PDF 다운로드가 외부 뷰어를 강제로 실행시켜 흐름이 끊기는 문제가 있었습니다. Blob API와 미들웨어를 이용하여 pdf 링크를 우회해서 파일 다운로드가 매끄럽게 연결되도록 UX를 개선시켰습니다.",
    },
    {
      no: 4,
      titleLines: [
        "모바일 예약상세 페이지 개선:",
        "Google Maps·네이티브 캘린더 연동",
      ],
      about:
        "예약 상세 페이지에서 여행 장소 및 날짜를, 구글맵과 캘린더 앱으로 딥링크시켜 사용자가 등록할 수 있도록 했습니다. 기존에 예약 후 정보를 복사·붙여넣기하던 번거로운 과정을 대체했습니다.",
    },
    {
      no: 3,
      titleLines: ["최근 검색어: TanStack Query 도입"],
      about:
        "최근 검색어 등록, 삭제, 모두 삭제 기능을 TanStack Query를 도입하여 중복 요청을 줄이고 불필요한 지연 현상을 줄였습니다.",
    },
    {
      no: 2,
      titleLines: ["Redux 기반 재입고 알림"],
      about:
        "캘린더에서 원하는 날짜를 선택하면 재고가 돌아오는 즉시 알림을 받을 수 있는 기능입니다. 다중 모달로 되어있는 기능을, Redux 기반 상태 관리를 통해 효율적으로 클라이언트 데이터를 다루도록 처리했습니다.",
    },
    {
      no: 1,
      titleLines: ["Vue.js → Next.js 마이그레이션"],
      about:
        "서비스 중단 없이 레거시 Vue.js 프론트엔드를 Next.js(App Router)로 재구축했습니다. 아웃소싱으로 인해 스파게티 소스로 이뤄졌던 코드베이스를 React 기반으로 리팩토링하고, SEO 및 성능을 개선해 LightHouse 지표를 큰 폭으로 향상시켰습니다.",
    },
  ],
};

export const experience = {
  tourvisLabel: "투어비스",
  priviaLabel: "프리비아",
  company: "TIDESQUARE · 온라인 여행 플랫폼 · 서울",
  presentLabel: "현재",
  bullets: [
    "월 45만 명이 이용하는 여행 플랫폼 {tourvis}, {privia}의 투어&티켓 카테고리 프론트엔드 담당",
    "React, Next.js, Vue.js를 활용해 웹 서비스 개발 및 유지보수",
    "레거시 Vue.js 코드베이스를 Next.js SSR로 마이그레이션하여 성능과 SEO 개선",
    "모바일 환경에서의 PDF 뷰어 및 다운로드 문제 해결로 크로스 브라우저 사용자 경험 향상",
    "TanStack Query 도입으로 중복 API 호출 감소 및 응답성 개선",
    "프레임워크 마이그레이션(React → Svelte)으로 번들 크기 축소 및 로딩 속도 향상",
    "재입고 알림, 최근 검색어, 예약 관리 플로우 등 기능 구현으로 UX 개선",
    "Google Analytics를 활용한 사용자 행동 추적으로 데이터 기반 제품 개선 지원",
  ],
};

export const contact = {
  heading: "Contact",
  bodyPrefix: "새로운 기회와 아이디어를 나누고 싶으시다면 —",
  bodyHighlight: "언제나 환영합니다!",
  cvLabel: "이력서",
  cvFile: "euiyeon_lee_resume.pdf",
};

export const about = {
  leftParagraphs: [
    "4년 이상의 프론트엔드 엔지니어링 경험을 바탕으로,",
    "빠르고, 매끄러운 사용자 환경을 제공하는 데 집중합니다.",
  ],
  rightParagraphs: [
    "사용자 중심적인 사고방식으로 문제에 접근하며,",
    "기기와 브라우저에 상관없이 원활한 서비스를 제공하고자 노력합니다.",
  ],
};
