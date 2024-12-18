# 🕹️welcome to LOL-DEX🕹️

### Riot API를 활용한 리그 오브 레전드 정보 앱
배포 링크: [https://lol-dex-sand.vercel.app/](https://lol-dex-sand.vercel.app/)

<br />

<img width="1884" alt="스크린샷 2024-12-18 오후 7 52 53" src="https://github.com/user-attachments/assets/e01b6125-6cb7-4fc9-8167-50793c64e630" />

<br />

# 🕹️ 프로젝트 설명
### 1️⃣ 페이지 별 다양한 렌더링 방식 적용
- 챔피언 목록 페이지(`/champions`): ISR 방식으로 구현, 챔피언 목록 표시
- 챔피언 상세 페이지(`/champions/[id]`): 동적 렌더링 방식으로 구현, 챔피언의 상세 정보 표시
- 챔피언 로테이션 페이지(`/rotation`): CSR 방식으로 구현, 챔피언 로테이션 정보 표시
- 아이템 목록 페이지(`/itmes`): SSG 방식으로 구현, 아이템 목록 표시

### 2️⃣ Tanstack Query를 활용한 데이터 관리
- 상태 관리와 데이터 요청/캐싱을 위해 Tanstack Query 활용
- 클라이언트 사이드에서 `useQuery` 훅을 사용하여 데이터 요청
- `isPending`, `isError`, `data` 상태를 활용하여 로딩 및 에러 처리 구현
- 제네릭을 활용해 API 응답의 타입을 정의하여 타입 안정성 보장
  
### 3️⃣ 성능 최적화
- Next.js의 `<Image>` 컴포넌트를 활용하여 이미지 로딩 최적화 및 자동 서식 변경 적용
- Tanstack Query의 staleTime 및 revalidate 설정으로 불필요한 요청 감소 및 데이터 최신화 유지
  
### 4️⃣ 로딩 및 에러 핸들링
- `React Suspense`를 활용하여 비동기 컴포넌트 로딩 상태 처리
- 각 페이지별 로딩 화면을 `loading.tsx`로 구현
- `error.tsx` 파일에서 페이지별 에러 처리 및 사용자 피드백 제공
- `gloabl-error.tsx` 파일을 생성하여 전역 에러 관리
- `useRouter`와 `startTransition`을 활용하여 에러 발생 시 페이지 새로고침 및 재시도 기능 제공
  
### 5️⃣ 반응형 디자인 및 UI 개선
- Tailwind CSS의 유틸리티 클래스를 활용하여 화면 크기에 따른 반응형 레이아웃 구현
- 모바일 환경에서도 사용하기 편리한 인터페이스 제공

### 6️⃣ 다크 모드 기능 구현
- 헤더에 다크 모드 토글 스위치를 제공하여 테마 전환 기능 구현
- `next-themes` 라이브러리를 활용하여 사용자 설정에 따라 다크/라이트 모드 상태 유지

<br />

# 📅 Development Period
2024.12.16 ~ 2024.12.18

<br />

# ⚙️ Tech Stack & Tools ⚙️
<div>
  
### ✔️ Language

<img src="https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white"> 

### ✔️ Framework & Libraries

<img src="https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white"> 
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=white">
<img src="https://img.shields.io/badge/Tanstack Query-FF4154?style=for-the-badge&logo=TanstackQuery&logoColor=white">
<img src="https://img.shields.io/badge/tailwind css-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white">

### ✔️ API Integration

<img src="https://img.shields.io/badge/Riot Games API-EB0029?style=for-the-badge&logo=Riot Games&logoColor=white">

### ✔️ Theming

<img src="https://img.shields.io/badge/next themes-000000?style=for-the-badge&logo=NextThemes&logoColor=white"> 

### ✔️ Hosting & Deployment

<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white">

### ✔️ Version Control

<img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">

</div>

<br />

# 🌳 프로젝트 구조
```bash
📦src
 ┣ 📂app
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📂rotation
 ┃ ┃ ┃ ┗ 📜route.ts
 ┃ ┣ 📂champions
 ┃ ┃ ┣ 📂[id]
 ┃ ┃ ┃ ┗ 📜page.tsx
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂items
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📂rotation
 ┃ ┃ ┣ 📜error.tsx
 ┃ ┃ ┗ 📜page.tsx
 ┃ ┣ 📜global-error.tsx
 ┃ ┣ 📜layout.tsx
 ┃ ┣ 📜loading.tsx
 ┃ ┣ 📜not-found.tsx
 ┃ ┗ 📜page.tsx
 ┣ 📂components
 ┃ ┣ 📂champions
 ┃ ┣ 📂items
 ┃ ┗ 📂layout
 ┣ 📂lib
 ┃ ┣ 📂constants
 ┃ ┣ 📂providers
 ┃ ┣ 📂types
 ┃ ┗ 📂utils
 ┗ 📂styles
```
