<a href="#" target="_blank">
  <h1 align="center" style="text-align: center;">Wizard World App Test</h1>
</a>

<p align="center" style="text-align: center;">
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-000000?style=flat&logo=next.js&logoColor=white" alt="Next.js" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/Node.js-68A063?style=flat&logo=node.js&logoColor=white" alt="Node.js"></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/TailwindCSS-38BDF8?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="https://turbo.build/repo"><img src="https://img.shields.io/badge/Turborepo-000000?style=flat&logo=turborepo&logoColor=white" alt="Turborepo" /></a>
  <a href="https://vercel.com/"><img src="https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white" alt="Vercel" /></a>
  <br>
  <strong>A simple frontend & backend app.</strong>
</p>

---

<br>

## Structure

| **Codebase**                               |     **Description**     |
| ------------------------------------------ | :---------------------: |
| [apps/api](apps/api)                       | Node.js Fastify Backend |
| [apps/web](apps/web)                       |    Next.js Frontend     |
| [packages/ui](packages/ui)                 |  Shared UI Components   |
| [packages/validators](packages/validators) |   Validators/Schemas    |

<br>

## Tech Stack

### Frontend

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeBox](https://github.com/sinclairzx81/typebox)
- Deployed on [Vercel](https://vercel.com/)

### Backend

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Fastify](https://fastify.dev/)
- [TypeBox](https://github.com/sinclairzx81/typebox)
- Deployed on [Render](https://render.com/)

### Utilities

- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io)

Monorepo build system: [Turborepo](https://turbo.build/repo)

<br>

## How to build/develop

### Build

To build all apps and packages, navigate to the root of the repo and run the following command:

```
pnpm build
```

### Develop

To develop all apps and packages, navigate to the root of the repo and run the following command:

```
pnpm dev
```

#### Note

Turborepo supports a `--filter` flag that lets you select the workspaces you'd like to execute your task in.
