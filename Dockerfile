ARG HUGO_VERSION=0.76.5

FROM acend/hugo:${HUGO_VERSION} AS builder

EXPOSE 8080

RUN mkdir -p /opt/app/src/static && \
    chmod -R og+rwx /opt/app

WORKDIR /opt/app/src

# Add package.json before rest of repo for caching
COPY package.json /opt/app/src
RUN npm install

COPY . /opt/app/src

RUN npm run build

FROM nginxinc/nginx-unprivileged:alpine

# The URL of the backend service, see https://github.com/acend/website-backend
ENV BACKEND_URL=http://acend-website-backend:8000

COPY --from=builder  /opt/app/src/dist /usr/share/nginx/html
COPY --from=builder  /opt/app/src/nginx.conf.template /etc/nginx/templates/default.conf.template
