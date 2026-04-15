# 교훈 기록 (Lessons Learned)

코딩 및 전략 교훈. /wrap 세션에서 기록됩니다.
#coding 태그 항목은 SessionStart 시 자동 주입됩니다.
반복 패턴은 /wrap HITL 승급을 통해 적절한 vehicle로 적용됩니다.

## Tooling

### Claude Code 플러그인 수동 설치 시 4곳 업데이트 필요 #coding #tooling
마켓플레이스에 없는 플러그인을 수동 설치할 때는 `cache/` 디렉토리, `installed_plugins.json`, `known_marketplaces.json`, `settings.json` enabledPlugins 4곳을 모두 업데이트해야 플러그인 시스템이 인식한다.

## Deployment

### Vercel 기존 프로젝트 배포 전 vercel link 필수 #coding #deployment
`.vercel/project.json`이 없는 상태에서 `vercel --prod`를 실행하면 새 프로젝트로 생성된다. 기존 프로젝트에 배포할 때는 반드시 `vercel link`로 먼저 연결한 후 배포해야 한다.
