FROM nginx:alpine

COPY ProjetoTCC/ /usr/share/nginx/html

EXPOSE 80

CMD [ "nginx", "-g", "daemon off;"]