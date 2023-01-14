# -------------------------------------------------------------
# Note: Docker build command must be executed in root directory
# -------------------------------------------------------------
FROM node:18

WORKDIR /usr/src/app

# Copy package.json and yarn.lock
COPY yarn.lock ./
COPY package.json ./

# Copy package.json files
COPY apps/api/package.json ./apps/api/
COPY packages/prisma/package.json ./packages/prisma/
COPY packages/types/package.json ./packages/types/
COPY packages/utils/package.json ./packages/utils/

# Install deps
RUN yarn install --frozen-lockfile

# Copy code
COPY apps/api ./apps/api
COPY packages/prisma ./packages/prisma
COPY packages/types ./packages/types
COPY packages/utils ./packages/utils

# Generate PrismaClient
RUN yarn workspace @template/prisma exec prisma generate

# Build packages
RUN yarn workspace @template/prisma build
RUN yarn workspace @template/utils build

# Switch out package.json files
RUN mv packages/prisma/package.build.json packages/prisma/package.json
RUN mv packages/utils/package.build.json packages/utils/package.json

# Build TypeScript
RUN yarn workspace @template/api compile

# Expose port
EXPOSE 3000

# Start server
ENTRYPOINT [ "yarn", "workspace", "@template/api", "start" ]