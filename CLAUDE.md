## React + Supabase 블로그를 만들고 있습니다.

### 1. 현재 프로젝트 환경
- React (Vite)
- Supabase
- Vercel 배포 예정
- JavaScript 사용
- 일반 CSS 또는 Tailwind CSS로 디자인
- 모바일/태블릿/PC 반응형

### 2. Supabase posts 테이블 구조
- id
- title
- content
- tag
- created_at
- thumbnail
- excerpt
- updated_at

### 3. 구현할 기능
1. 게시글 목록
   - 제목
   - 썸네일
   - 태그
   - 요약
   - 작성일
   - 최신순 정렬

2. 게시글 상세보기
   - 제목
   - 작성일
   - 수정일
   - 태그
   - 본문 내용

3. 태그 필터
   - 특정 태그 클릭 시 해당 태그 글만 표시

4. 검색 기능
   - 제목 기준 검색
   - 실시간 검색 아님
   - 검색 버튼 클릭 시 실행

5. 페이지네이션
   - 페이지당 10개
   - 이전/다음 버튼 제공

6. 새 글 작성
   - 제목 입력
   - 내용 입력
   - 태그 입력
   - 등록 버튼
   - Supabase INSERT

7. 반응형 디자인
   - 모바일 390px 기준
   - 태블릿 768px 기준
   - PC 1200px 기준

### 4. 추가 요구사항
- React Router 사용
- 컴포넌트 분리 필수
- 재사용 가능한 구조로 작성
- 실제 배포 가능한 수준으로 작성