# rnd-pnpm-deps

rnd pnpm dependency clash

## test commands

```bash
pnpm --filter test-pkg1 run generate-docs
pnpm --filter test-pkg2 run generate-docs
npx ts-node ./src/typedoc.ts
node ./src/typedoc.js
```
