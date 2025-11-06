# CampusMatch

Educational platform monorepo built with PNPM and Turborepo.

## Overview

CampusMatch is a modern educational platform that connects students with learning opportunities, mentors, and resources. This monorepo contains all applications and shared packages.

## Tech Stack

- **Package Manager**: [PNPM](https://pnpm.io/) (>=8.0.0)
- **Monorepo**: [Turborepo](https://turbo.build/)
- **TypeScript**: Latest version with strict configuration
- **Node.js**: >=18.0.0

## Workspace Layout

```
campusmatch/
├── apps/
│   ├── web/          # Main frontend application
│   ├── admin/        # Admin dashboard
│   └── api/          # Backend API service
├── packages/
│   ├── ui/           # Shared UI components
│   ├── shared/       # Shared utilities and types
│   └── config/       # Shared configuration files
├── package.json      # Root package configuration
├── pnpm-workspace.yaml # PNPM workspace configuration
├── turbo.json        # Turborepo configuration
└── README.md         # This file
```

## Prerequisites

- Node.js >=18.0.0 (use `.nvmrc` for exact version)
- PNPM >=8.0.0

## Quick Start

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Start development mode:
   ```bash
   pnpm dev
   ```

3. Build all packages:
   ```bash
   pnpm build
   ```

## Available Scripts

- `pnpm dev` - Start all applications in development mode
- `pnpm build` - Build all packages and applications
- `pnpm lint` - Run linting across all packages
- `pnpm test` - Run tests across all packages
- `pnpm format` - Format code across all packages
- `pnpm typecheck` - Type check all packages
- `pnpm clean` - Clean build artifacts and dependencies

## Working with Workspaces

### Running commands for specific packages:

```bash
# Run dev for web app only
pnpm --filter @campusmatch/web dev

# Run build for all apps
pnpm --filter "apps/*" build

# Run test for all packages
pnpm --filter "packages/*" test
```

### Adding dependencies:

```bash
# Add to specific package
pnpm --filter @campusmatch/web add react

# Add as dev dependency to specific package
pnpm --filter @campusmatch/ui add -D @types/react

# Add to root (shared dev dependencies)
pnpm add -D -w eslint
```

## Development Workflow

1. Create a new feature branch
2. Make changes to relevant packages/apps
3. Run `pnpm lint` and `pnpm typecheck` to ensure code quality
4. Run `pnpm test` to verify tests pass
5. Run `pnpm build` to ensure everything builds correctly
6. Commit changes and create pull request

## Configuration

- **TypeScript**: Shared configuration in `packages/config/tsconfig.json`
- **Turborepo**: Pipeline configuration in `turbo.json`
- **PNPM**: Workspace configuration in `pnpm-workspace.yaml`
- **Editor**: Editor configuration in `.editorconfig`

## Getting Help

- [PNPM Documentation](https://pnpm.io/)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)