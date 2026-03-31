# 맥북에어 실행 설명서

이 문서는 지금 이 맥북에어에서 `dashboard` 현황판을 바로 실행하기 위한 설명서입니다.

GitHub로 자료를 올리고 `업데이트` 버튼으로 반영하는 전체 흐름은 `GITHUB_UPDATE_AND_DOWNLOAD_GUIDE.md`를 함께 보시면 됩니다.

중요:
그냥 아래 명령을 복사해서 터미널에 붙여넣으면 됩니다.

---

## 1. 가장 쉬운 실행 방법

맥의 `터미널` 앱을 열고 아래 두 줄을 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
./start_dashboard.command
```

정상이라면 다음이 자동으로 됩니다.

- 현황판용 작은 로컬 서버 실행
- 브라우저 앱 창 또는 브라우저 탭 열기
- 주소: `http://127.0.0.1:8426/index.html`

이 맥북에는 이미 `Python 3.12.12`가 있어서 지금 바로 실행 가능한 상태입니다.

- 브라우저가 열리면 Cmd + Shift + R로 새로고침 한 번만 해주세요. 

---

## 2. 만약 위 방법이 안 되면

아래 명령을 한 번에 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
python3 serve_dashboard.py
```

그다음 새 터미널 창이나 같은 맥의 브라우저에서 아래 주소를 여세요.

```bash
open http://127.0.0.1:8426/index.html
```

---

## 3. 포트가 이미 사용 중이라고 나오면

아래 명령을 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
python3 serve_dashboard.py --port 8427
```

그다음 아래 주소를 여세요.

```bash
open http://127.0.0.1:8427/index.html
```

---

## 4. 실행 후 수정이 바로 반영되는 파일

맥북에서 화면을 띄운 상태로 아래 파일들을 수정하면 새로고침 후 바로 확인할 수 있습니다.

- 학원 일정: `cram/cram.md`
- 암기 카드들: `memory` 폴더 안의 `*.md`
- 학교 시간표 / 날씨 지역: `dashboard-config.js`

Gemini로 매일 의미 있게 2개를 고르고 싶다면 아래 파일도 사용합니다.

- `local_secrets.env`
- `GEMINI_STUDYSET_SETUP.md`

---

## 5. 암기 카드 속도 바꾸는 방법

예를 들어 어떤 카드 파일이 3초마다 바뀌는데, 5초로 바꾸고 싶다면
그 md 파일 안의 아래 줄만 바꾸면 됩니다.

```md
@interval: 5
```

다른 카드 파일도 같은 방식으로 `@interval:`만 바꾸면 됩니다.

---

## 6. 학원 일정 수정 방법

`cram/cram.md` 파일은 아래 형식을 꼭 지켜야 합니다.

```md
# cram schedule

## 월요일
- 16:30-18:00 | 수학
- 18:10-19:40 | 영어
```

규칙:

- 요일은 반드시 `## 월요일` 형태
- 일정은 반드시 `- HH:MM-HH:MM | 수업명` 형태

---

## 7. 암기 카드 수정 방법

`memory` 폴더 안의 모든 카드 파일은 아래 형식을 사용합니다.

```md
# memory deck
@subject: 영어
@interval: 3

- achieve | 이루다
- compare | 비교하다
```

규칙:

- `@subject:`는 과목 이름
- `@interval:`는 몇 초마다 화면이 바뀌는지
- `- 단어 | 뜻` 형식으로 한 줄씩 추가

즉, 단어를 더 넣고 싶으면 같은 형식의 줄만 계속 추가하면 됩니다.

Gemini 설정이 필요하면 `GEMINI_STUDYSET_SETUP.md`를 보면 됩니다.

---

## 8. 종료 방법

`python3 serve_dashboard.py`로 직접 실행한 경우:
그 터미널 창에서 `Ctrl + C`

이미 백그라운드로 켜진 서버를 한 번에 정리하고 싶다면:

```bash
pkill -f 'serve_dashboard.py'
```

---

## 9. 정말 최소한의 요약

지금 이 맥북에어에서 바로 보려면 아래 두 줄만 실행하면 됩니다.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
./start_dashboard.command
```
