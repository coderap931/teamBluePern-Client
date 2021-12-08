# Client Side: Localhost<->Heroku Testing Instructions
## How to switch between localhost:3000 and Heroku.

- This is a small instruction guide on how to change from localhost <-> Heroku.
- Always make sure to change your files back to using Heroku URL before committing.
    - This ensures that it will work when fully deployed at all times.

## Files Needing Changed in Client

- Home.js
- Login.js
- Signup.js
- GameCreateModal.js
- GameEditDeleteModal.js
- GameUpdateModal.js
- GameViewerModal.js

## Client Side: Code that needs changed for Client:localhost testing
All files effected are mentioned in "Files Needing Changed"
- Comment 
    - // import APIURL from '../helpers/environment';
- Uncomment
    - const APIURL = 'http://localhost:3000'
    - 
## Client Side: Code that needs changed before committing
All files effected are mentioned in "Files Needing Changed"
- Uncomment 
    - import APIURL from '../helpers/environment';
- Comment
    - // const APIURL = 'http://localhost:3000'

# Server Side: Localhost<->Heroku Testing Instructions
## Files Needing Changed in Server

- db.js
- .env

## Server Side: Code that needs changed for Server:localhost testing
- db.js
    - Comment out the Heroku database object. Uncomment the local database section.
- .env
    - Comment out the Heroku database object that should be the variable named "DATABASE_URL". Ask Adam for that variable info if needed.
    - Uncomment your local database object that should be the same name as the Heroku variable, "DATABASE URL".
        - Ex: DATABASE_URL = "postgres://postgres:<yourPersonalPassword>@localhost/<nameYouGaveYourLocalDatabase>"
## Server Side: Code that needs changed before committing
- db.js
    - Uncomment the Heroku database object. Comment the local database section.
- .env
    - Comment out the Heroku database object that should be the variable named "DATABASE_URL". Ask Adam for that variable info if needed.
    - Uncomment your local database object that should be the same name as the Heroku variable, "DATABASE URL".
        - Ex: DATABASE_URL = "postgres://postgres:<yourPersonalPassword>@localhost/<nameYouGaveYourLocalDatabase>"