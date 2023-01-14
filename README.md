# @bene/template

> Work in progress

Project template for building fullstack TypeScript applications.

## Components

### Apps

| Name   | Description                |
| ------ | -------------------------- |
| api    | Empty Node.js app          |
| web    | React Web app (SPA)        |
| mobile | ReactNative app using Expo |

### Packages

| Name  | Description                                                         |
| ----- | ------------------------------------------------------------------- |
| sdk   | An SDK packages which is intended to be published on npm            |
| utils | Code which is used in multiple packages in the project              |
| types | TypeScript types which are used in multiple packages in the project |

## Usage

### 0. Clone repo and re-init

```shell
git clone git@github.com:bene/template.git
rm -rf .git
git init
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

## Deployment

### API

| Option    | Description                     | Requirements                                                                                                                                              |
| --------- | ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dokku     | CI/CD to Dokku                  | `SSH_PRIVATE_KEY` repo secret containing an SSH key to access the Dokku server<br> `deploy-dokku.yml` must be updated to use the correct `git_remote_url` |
| Cloud Run | Serverless platform from Google | Setup in Cloud Console                                                                                                                                    |
| Docker    | Run Docker image manually       | None                                                                                                                                                      |

### Web

| Option      | Description                             | Requirements             |
| ----------- | --------------------------------------- | ------------------------ |
| Netlify     | Static site hosting platform            | Setup in console         |
| Self-hosted | Traditionally way of deploying web apps | File server (e.g. Caddy) |
