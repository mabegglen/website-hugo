ARG HUGO_VERSION=0.70.0

FROM acend/hugo:${HUGO_VERSION} AS builder

EXPOSE 8080

RUN mkdir -p /opt/app/src/static && \
    chmod -R og+rwx /opt/app

WORKDIR /opt/app/src

COPY . /opt/app/src

RUN npm install && npm run build

FROM nginxinc/nginx-unprivileged:alpine

COPY --from=builder  /opt/app/src/dist /usr/share/nginx/html
COPY --from=builder  /opt/app/src/nginx.conf /etc/nginx/conf.d/default.conf