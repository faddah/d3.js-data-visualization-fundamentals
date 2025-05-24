FROM nginx:stable-alpine
LABEL maintainer="Faddah Wolf" \
        version="1.0" \
        description="Minimal NGINX server serving current project directory"

# Create necessary directories
RUN mkdir -p /var/lib/nginx/tmp/client_body && \
    mkdir -p /var/lib/nginx/tmp/proxy && \
    mkdir -p /var/lib/nginx/tmp/fastcgi && \
    mkdir -p /var/lib/nginx/tmp/uwsgi && \
    mkdir -p /var/lib/nginx/tmp/scgi

# Create the web root directory
RUN mkdir -p /usr/share/nginx/html

RUN addgroup -S www-data 2>/dev/null || true && \
    adduser -S -D -H -G www-data -h /var/cache/nginx www-data

# Set the working directory to the NGINX html directory and copy the current project directory to the NGINX html directory
WORKDIR /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]