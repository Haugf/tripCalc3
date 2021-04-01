# tripCalc3
Trip cost calculator

## How to run
 There we are two ways to run this application ... 
 
 1. You can go to `fronend/frontend` and run `npm start` and with another terminal `backend/backend` andrun         `npm start`
 2. If you have Docker you can run `docker-compose up --build` from the root directory.

## Future development
 I used Docker-compose to ensure a clean run of the application. By using containers I am opening the door for future CI/CD improvements as well as the potential for future scaling.  Where the application is now, I believe it suffers from a lack of validation on the backend. I would include experss-validator to prevent illegal values from entering the system and corrupting the API. 
 
 I also think that a database solution would be useful to keep track of costs during the entire trip. Then there could be a rolling amount of what everyone owes.
