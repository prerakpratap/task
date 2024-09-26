# task

- To start server by install modules ( npm i)
- Use comment to serve npm start

description :-

- No decryption password used because from frontend or postman need to encryption.
- if wanna use decryption password just uncomment line of code and comment some code in code that i already created .

* User can signup by provided using
  POST API :
  URL: http://localhost:4000/api/signup
  {
  "email":"xyz@gmail.com",
  "password":"hello@123",
  "username":"xyz"
  }

* User can login by provided using

POST API :
URL: http://localhost:4000/api/login
{
"email":"xyz@gmail.com",
"password":"hello@123",
}

curl request:-
curl --location 'http://localhost:4000/api/signup' \
--header 'Content-Type: application/json' \
--data-raw '{
"email":"prerakpratap@gmail.com",
"password":"hello@123",
"username":"prerak"
}'

curl --location 'http://localhost:4000/api/login' \
--header 'Content-Type: application/json' \
--data-raw '{
"email":"prerakpratap@gmail.com",
"password":"hello@123"
}'
