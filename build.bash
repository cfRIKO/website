# /bin/bash

id=$(cat dockerid)

docker kill $id

docker build -t cfriko/website .

rm dockerid

docker run -p 3000:8080 -d cfriko/website >> dockerid
