  FROM node:20.11-bookworm-slim AS base
  RUN mkdir -p /home/node/app
  RUN chown -R node:node /home/node && chmod -R 770 /home/node
  WORKDIR /home/node/app

  # build
  FROM base AS builder
  COPY --chown=node:node package.json yarn.lock ./
  USER node
  RUN yarn
  COPY . .
  RUN yarn build

  # production
  FROM base AS production
  WORKDIR /home/node/app
  USER node

  COPY --chown=node:node src/db ./src/db
  COPY --chown=node:node package.json yarn.lock ./

  # Install production dependencies
  RUN yarn

  # Copy built files from the builder stage
  COPY --chown=node:node --from=builder /home/node/app/dist ./dist/
  ENV NODE_ENV=prod
  EXPOSE 5001

  CMD yarn migrate \
      & yarn start:prod
