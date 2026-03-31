# GitHub 업데이트 / 다운로드 설명서

이 문서는 아래 3가지를 한 번에 설명합니다.

1. 맥북에서 현황판을 띄운 상태로 `업데이트` 버튼을 누르면 무슨 일이 일어나는지
2. 맥북에어에서 처음부터 GitHub에 올리는 방법
3. 윈도우즈에서 GitHub 저장소에서 현황판을 내려받는 방법

---

## 1. 맥북에서 `업데이트` 버튼을 누르면 어떻게 되나요

맥북에서 현황판을 띄운 상태로 우측 상단 `업데이트` 버튼을 누르면 화면을 닫지 않고 그대로 아래 순서로 진행됩니다.

1. 버튼 글자가 잠깐 `업데이트 중`으로 바뀝니다.
2. 맥북 안에서 실행 중인 작은 로컬 서버가 GitHub 저장소 `https://github.com/goodasa/dashboard`에 접속합니다.
3. 저장소 안의 `memory` 폴더를 내려받습니다.
4. 맥북의 `dashboard/memory` 폴더 안 파일들을 새 내용으로 교체합니다.
5. `studyset-force.txt`는 보존합니다.
6. 성공하면 화면 아래쪽에 `업데이트 성공: memory 파일 n개를 반영했습니다.` 같은 메시지가 뜹니다.
7. `StudySet 01`, `StudySet 02`도 다시 읽어서 바로 바뀝니다.

즉, 맥북에서 눌러도 CHUWI에서 눌렀을 때와 똑같이 동작합니다.

중요:

- 이 버튼은 `memory` 데이터만 갱신합니다.
- 화면 레이아웃 파일인 `index.html`, `dashboard.js`, `dashboard.css`까지 바꾸는 버튼은 아닙니다.
- GitHub 저장소에 아직 파일이 없거나, `memory` 폴더가 아직 안 올라가 있으면 실패 메시지가 뜹니다.

---

## 2. 맥북에어에서 처음 한 번만 해야 하는 준비

### 2-1. GitHub 비밀번호가 안 되는 이유

GitHub는 이제 `git push` 할 때 계정 비밀번호를 받지 않습니다.

즉:

- 아이디 입력: 가능
- 비밀번호 입력: 불가
- 대신 `GitHub CLI` 로그인 또는 `토큰`을 사용해야 함

가장 쉬운 방법은 `GitHub CLI`를 쓰는 것입니다.

---

## 3. 맥북에어에서 처음부터 끝까지 복붙용 명령어

### 3-1. GitHub CLI 설치

맥의 `터미널` 앱을 열고 아래를 그대로 붙여넣으세요.

```bash
brew install gh
```

만약 `brew: command not found`가 나오면 Homebrew가 없는 상태입니다.
그 경우에는 Homebrew를 먼저 설치하거나, GitHub Desktop을 써도 됩니다.
하지만 가장 간단한 흐름은 `brew + gh` 조합입니다.

### 3-2. GitHub 로그인

아래를 그대로 붙여넣으세요.

```bash
gh auth login --web --hostname github.com --git-protocol https
gh auth setup-git
```

그러면 브라우저가 열리거나 코드가 표시됩니다.
그때 GitHub 계정 `goodasa`로 로그인해서 승인하면 됩니다.

### 3-3. 현재 `dashboard` 폴더를 GitHub 저장소에 연결

아래를 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git init
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/goodasa/dashboard.git
```

### 3-4. 첫 업로드

아래를 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git add .
git commit -m "Initial dashboard upload"
git push -u origin main
```

성공하면 이제 GitHub 저장소에 현황판 파일과 `memory` 폴더가 올라갑니다.

브라우저에서 아래 주소를 열어 확인해 보세요.

- [goodasa/dashboard](https://github.com/goodasa/dashboard)

정상이라면 저장소 첫 화면에 아래 같은 파일과 폴더가 보여야 합니다.

- `index.html`
- `dashboard.js`
- `dashboard.css`
- `memory`
- `cram`
- `start_dashboard.bat`

---

## 4. 맥북에서 매번 자료 수정 후 올리는 가장 쉬운 방법

예를 들어 맥북에서 아래를 수정했다고 가정하겠습니다.

- `memory/*.md`
- `cram/cram.md`

수정 후에는 아래만 하면 됩니다.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git add .
git commit -m "Update dashboard data"
git push
```

이제 GitHub 저장소 내용이 최신으로 올라갑니다.

그 다음:

- 맥북 현황판에서 `업데이트` 버튼 클릭
- 또는 CHUWI 현황판에서 `업데이트` 버튼 클릭

그러면 GitHub에 올라간 최신 `memory` 데이터가 내려옵니다.

중요:

- `업데이트` 버튼은 현재는 `memory` 폴더를 가져오는 용도입니다.
- `cram/cram.md`나 전체 코드까지 원격에서 바꾸고 싶다면 별도 확장이 필요합니다.

---

## 5. 맥북에서 정말 최소한의 순서만 다시 요약

처음 1번만:

```bash
brew install gh
gh auth login --web --hostname github.com --git-protocol https
gh auth setup-git
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git init
git branch -M main
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/goodasa/dashboard.git
git add .
git commit -m "Initial dashboard upload"
git push -u origin main
```

그 다음부터는 자료를 수정할 때마다:

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git add .
git commit -m "Update dashboard data"
git push
```

---

## 6. 윈도우즈에서 현황판을 GitHub 저장소에서 내려받는 가장 쉬운 방법

초보자 기준으로는 `Download ZIP`이 제일 쉽습니다.

### 6-1. 윈도우에서 ZIP으로 내려받기

1. 브라우저에서 [goodasa/dashboard](https://github.com/goodasa/dashboard) 열기
2. 초록색 `Code` 버튼 클릭
3. `Download ZIP` 클릭
4. 다운로드된 ZIP 파일 압축 풀기
5. 압축을 푼 폴더 열기
6. 안에 있는 `start_dashboard.bat` 더블클릭

그러면 현황판이 열립니다.

추천:

- 압축을 푼 폴더 이름이 `dashboard-main`처럼 보여도 괜찮습니다.
- 헷갈리면 폴더 이름을 `dashboard`로 바꿔도 됩니다.

### 6-2. 윈도우에서 이후 업데이트하는 방법

처음 한 번만 ZIP으로 내려받으면 됩니다.

그 다음부터는:

1. 맥북에서 자료 수정
2. 맥북에서 `git push`
3. CHUWI 현황판에서 `업데이트` 버튼 클릭

이 흐름으로 계속 쓸 수 있습니다.

즉, 매번 ZIP을 다시 받을 필요는 없습니다.

---

## 7. 윈도우에서 Git으로 직접 내려받는 방법

이 방법은 조금 더 익숙한 사람에게 추천합니다.

1. `Git for Windows` 설치
2. `명령 프롬프트` 또는 `PowerShell` 열기
3. 아래 명령 실행

```bash
git clone https://github.com/goodasa/dashboard.git
cd dashboard
start_dashboard.bat
```

장점:

- 나중에 다시 받을 때도 편합니다.

하지만 초보자라면 ZIP 방식이 더 쉽습니다.

---

## 8. 자주 생기는 문제

### 8-1. `Invalid username or token`

원인:

- GitHub 비밀번호를 입력했기 때문입니다.

해결:

- `gh auth login`으로 브라우저 로그인
- 또는 GitHub 토큰 사용

### 8-2. `업데이트` 버튼을 눌렀는데 실패 메시지가 뜸

원인 후보:

- GitHub 저장소에 아직 파일이 없음
- `memory` 폴더가 아직 안 올라감
- 인터넷 연결 문제
- GitHub 주소가 바뀜

### 8-3. 맥북에서 수정했는데 CHUWI에서 안 바뀜

확인 순서:

1. 맥북에서 `git push`를 했는지 확인
2. GitHub 웹에서 파일이 실제로 바뀌었는지 확인
3. CHUWI에서 `업데이트` 버튼 클릭
4. 필요하면 현황판 새로고침

---

## 9. 저장소를 완전히 새로 시작하고 싶을 때

현재처럼 API 키가 한 번이라도 공개 저장소에 올라갔다면,
가장 안심되는 방법은 아래 순서로 새로 시작하는 것입니다.

### 9-1. 먼저 할 일

1. Google AI Studio에서 기존 Gemini API 키 삭제
2. GitHub에서 기존 `goodasa/dashboard` 저장소 삭제
3. 새 Gemini API 키 발급
4. 새 GitHub 저장소 생성
5. 맥북의 로컬 `dashboard` 폴더 파일로 다시 업로드

GitHub 저장소 삭제 방법은 GitHub 공식 문서에 있습니다.

- [Deleting a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/deleting-a-repository)

GitHub는 `.gitignore` 파일로 업로드 제외 파일을 관리할 수 있다고 공식 문서에서 안내합니다.

- [Ignoring files](https://docs.github.com/ko/get-started/getting-started-with-git/ignoring-files)

### 9-2. 지금 이 폴더에 이미 반영된 안전장치

이 `dashboard` 폴더에는 이미 아래 파일이 들어 있습니다.

- `.gitignore`
- `local_secrets.env.example`

현재 `.gitignore`에는 아래 항목이 들어 있습니다.

```gitignore
local_secrets.env
.env
.env.local
__pycache__/
.DS_Store
```

즉:

- `local_secrets.env`는 GitHub에 올리지 않음
- 대신 `local_secrets.env.example`만 GitHub에 올림

### 9-3. 새 저장소로 다시 시작할 때 복붙용 순서

먼저 GitHub 웹사이트에서 기존 저장소를 삭제한 뒤,
새로운 비어 있는 `goodasa/dashboard` 저장소를 다시 만드세요.

그 다음 맥북 터미널에서 아래를 그대로 붙여넣으세요.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
rm -rf .git
git init
git branch -M main
git remote add origin https://github.com/goodasa/dashboard.git
cp local_secrets.env.example local_secrets.env
git add .
git commit -m "Initial dashboard upload"
git push -u origin main
```

중요:

- `cp local_secrets.env.example local_secrets.env`는 로컬에만 파일을 만드는 것입니다.
- `local_secrets.env`는 `.gitignore`에 들어 있어서 `git add .`를 해도 GitHub에 올라가지 않습니다.
- 실제 키는 `local_secrets.env` 안에만 넣고, `local_secrets.env.example`에는 넣지 마세요.

### 9-4. 업로드 전에 마지막 확인

아래 명령 결과에 `local_secrets.env`가 보이지 않으면 안전한 상태입니다.

```bash
cd '/Users/choiyb/Documents/codex/(260330)8fold_opus_codex_dashboard/dashboard'
git status
git ls-files | grep local_secrets.env
```

정상 상태라면:

- `git status`에 `local_secrets.env`가 안 보이거나
- `git ls-files | grep local_secrets.env` 결과가 비어 있어야 합니다.

---

## 10. 가장 쉬운 추천 사용 흐름

제일 편한 흐름은 아래입니다.

1. 맥북에어에서 `memory/*.md` 수정
2. 맥북에어에서 `git add .`
3. 맥북에어에서 `git commit -m "Update dashboard data"`
4. 맥북에어에서 `git push`
5. CHUWI 현황판에서 `업데이트` 버튼 클릭

이렇게 하면 자료 편집은 맥북에서 하고, 표시 갱신은 현황판에서 바로 할 수 있습니다.
