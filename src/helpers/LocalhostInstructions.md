# Localhost Instructions
## How to Switch to localhost3000 instead of Heroku, vice versa before commit.



- This is a small instruction guide on how to change from localhost <-> Heroku.
- Always make sure to change your files back to using Heroku URL before committing.
    - This ensures that it will work when fully deployed at all times.

## Files Needing Changed

- Home.js
- Login.js
- Signup.js
- GameCreateModal.js
- GameEditDeleteModal.js
- GameUpdateModal.js
- GameViewerModal.js

## Code that needs changed for localhost testing
All files effected are mentioned in "Files Needing Changed"
- Comment 
    - // import APIURL from '../helpers/environment';
- Uncomment
    - const APIURL = 'http://localhost:3000'
    - 
## Code that needs changed before committing
All files effected are mentioned in "Files Needing Changed"
- Uncomment 
    - import APIURL from '../helpers/environment';
- Comment
    - // const APIURL = 'http://localhost:3000'