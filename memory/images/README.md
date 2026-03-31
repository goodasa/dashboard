# 도해 이미지 폴더

도해 이미지는 이 폴더 아래에 과목별로 넣는 것을 권장합니다.

예:

- `memory/images/english/improve.webp`
- `memory/images/science/evaporation.webp`
- `memory/images/social/democracy.webp`

MD 파일의 `도해` 칸에는 아래처럼 적으면 됩니다.

```md
| 단어 | 의미 | 도해 |
| --- | --- | --- |
| improve | 향상시키다 | images/english/improve.webp |
```

또는 md 파일 옆에 생성되는 `.assets` 폴더 상대경로를 그대로 써도 됩니다.

예:

```md
| 단어 | 의미 | 도해 |
| --- | --- | --- |
| achieve | 이루다 | <img src="./english.assets/image-20260331182819470.png" alt="achieve" /> |
```
