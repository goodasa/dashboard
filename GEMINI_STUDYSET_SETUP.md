# Gemini StudySet 설정 설명서

이 문서는 `memory` 폴더 안의 여러 md 파일 중에서
Gemini가 매일 의미 있게 2개를 골라 `StudySet 01`, `StudySet 02`에 보여주도록 설정하는 방법입니다.

## 1. 가장 안전한 API 키 넣는 방법

브라우저 코드에 Gemini API 키를 직접 넣지 마세요.

이 대시보드는 `serve_dashboard.py`가 Gemini를 대신 호출하도록 만들어져 있습니다.

즉:

- 브라우저는 키를 모름
- 로컬 서버만 키를 읽음
- 키는 `local_secrets.env` 파일에만 넣음

## 2. 실제로 할 일

`dashboard` 폴더 안에서 실제 키는 `local_secrets.env`에만 넣고,
GitHub에는 `local_secrets.env.example`만 올리는 방식을 추천합니다.

순서:

1. `local_secrets.env.example`를 복사해서 `local_secrets.env` 파일 생성
2. 실제 키는 `local_secrets.env`에만 입력
3. `local_secrets.env`는 GitHub에 올리지 않기

파일명:

`local_secrets.env.example`

내용 예시:

```env
GEMINI_API_KEY=여기에_새_GEMINI_API_KEY_입력
GEMINI_MODEL=gemini-2.5-flash
```

실제 사용 파일:

`local_secrets.env`

내용 예시:

```env
GEMINI_API_KEY=여기에_새_GEMINI_API_KEY_입력
GEMINI_MODEL=gemini-2.5-flash
```

## 3. 이 파일이 안전한 이유

- `local_secrets.env`는 브라우저에 전달되지 않습니다.
- 서버가 이 파일을 읽고 Gemini를 호출합니다.
- 정적 HTML/JS 파일에는 키가 들어가지 않습니다.

## 4. memory 폴더는 어떻게 쓰나요

이 폴더 안의 `*.md` 파일은 자동으로 전부 후보가 됩니다.

예:

- `english.md`
- `korean.md`
- `science.md`
- `social.md`
- `idiom.md`
- `hanmun.md`

파일을 추가해도 되고, 삭제해도 됩니다.

## 5. md 파일 권장 형식

```md
# memory deck
@title: 중등 기초 영어 단어
@subject: 영어
@category: vocabulary
@tags: 영어,단어,중등,기초
@priority: 8
@interval: 3

- achieve | 이루다
- compare | 비교하다
```

## 6. Gemini는 무엇을 보고 고르나요

서버는 아래 정보를 합쳐서 Gemini에게 보냅니다.

- 오늘 날짜와 요일
- 오늘 학교 과목
- 오늘 학원 과목
- memory 폴더 안의 md 파일 목록과 메타데이터
- 최근 StudySet 선택 이력

그래서 매일 아무 의미 없이 랜덤으로 뽑지 않고,
오늘 일정과 최근 이력을 반영해서 2개를 고르게 됩니다.

## 7. 이력은 어디에 저장되나요

`data/studyset_state.json`

이 파일 안에 오늘 선택 결과와 최근 이력이 저장됩니다.

필요하면 이 파일을 지워서 선택 기록을 초기화할 수 있습니다.

## 8. 초간단 사용법

1. `local_secrets.env` 파일에 Gemini 키 입력
2. `memory` 폴더에 md 파일 넣기
3. 현황판 실행
4. `StudySet 01`, `StudySet 02`에 그날 선택된 2개가 표시됨

## 9. studyset-force.txt로 강제 지정하기

가끔 특정 과목을 수동으로 꼭 띄우고 싶다면
`memory/studyset-force.txt` 파일에 파일명을 적으면 됩니다.

예:

```txt
science.md
english.md
```

동작 방식:

- 파일이 비어 있으면 Gemini 또는 규칙 기반 자동 선택을 사용합니다.
- 파일명이 1개면 그 파일이 `StudySet 01`에 우선 배정됩니다.
- 파일명이 2개면 두 파일이 `StudySet 01`, `StudySet 02`에 바로 배정됩니다.
- 파일명이 3개 이상이어도 에러는 나지 않습니다.
- 이 경우 위에서부터 앞의 2개만 사용합니다.
- 빈 줄과 `#`으로 시작하는 줄은 무시합니다.

즉, `studyset-force.txt`에 적힌 파일명이 Gemini 선택보다 먼저 적용됩니다.
