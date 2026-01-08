# 사이언스메디 홈페이지

## 실행
- ZIP 압축 해제 후 `index.html`을 더블클릭하면 바로 확인할 수 있습니다.

## 배포(정적 호스팅)
- Netlify / Vercel / GitHub Pages 등 정적 호스팅에 그대로 업로드하면 됩니다.

## 로고 교체
- `assets/img/logo.png`
- `assets/img/logo-icon.png`

## 상담 폼(구글폼) iframe
- `contact.html`의 iframe `src`에 현재 링크가 들어가 있습니다:
  - `https://forms.gle/r38L2B3HiV8fpKgMA`
- **iframe이 안 보이면**, 구글폼에서 “보내기 → <> 임베드”로 얻는
  `https://docs.google.com/forms/d/e/.../viewform?embedded=true`
  형태의 URL로 `src`를 교체하면 가장 안정적입니다.
