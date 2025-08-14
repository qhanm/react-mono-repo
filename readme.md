## Requirement

- **Node.js** >= 18
- **pnpm** >= 8

##### Install pnpm and check pnpm version

`npm install -g pnpm`
`pnpm -v`

### Install node module root

`pnpm install`

### Install node module for package

`cd apps/[module_name]`
`pnpm install`

##### Run only apps web

`pnpm --filter web dev`

#### Run all app

`pnpm dev`

#### Build all app

`pnpm build`

#### Add new package for a module

`cd apps/[module_name]`
`pnpm add [package_name]`

**Example**
`pnpm add -D @types/react-router-dom`
