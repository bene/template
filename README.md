# @bene/template

> Work in progress

Project template for building fullstack TypeScript applications in a monorepo.

## Components

### Apps

| Name   | Description                      |
| ------ | -------------------------------- |
| api    | Empty package folder with Prisma |
| web    | React Web App (SPA)              |
| mobile | ReactNative App using Expo       |

### Packages

| Name  | Description                                                         |
| ----- | ------------------------------------------------------------------- |
| sdk   | An SDK packages which is intended to be published on npm            |
| utils | Code which is used in multiple packages in the project              |
| types | TypeScript types which are used in multiple packages in the project |

## Usage

### 0. Close repo

```shell
git clone git@github.com:bene/template.git
```

### 1. Rename project

Replace all occurrences of `@template` with the name of the project.

### 2. Customize

Often not all of the default packages are needed.

```shell
rm -rf apps/mobile
```

Or packages should have a different name

```shell
mv packages/utils packages/shared
```

### 3. Update deps

The dependencies are not updated automatically and will be outdated most of the
time.

```shell
yarn
yarn outdated
```

### 4. Start development

To start all apps [Turborepo](https://turbo.build/) is used.

```shell
yarn dev
```
