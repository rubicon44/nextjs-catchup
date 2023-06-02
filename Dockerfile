FROM node:18.13.0-alpine

RUN apk update && apk add --no-cache git

RUN mkdir /nextjs-catchup
ENV FRONT_ROOT /nextjs-catchup
WORKDIR $FRONT_ROOT

COPY package.json yarn.lock $FRONT_ROOT/
RUN yarn install --frozen-lockfile --ignore-optional

COPY . $FRONT_ROOT

CMD [ "yarn", "dev" ]