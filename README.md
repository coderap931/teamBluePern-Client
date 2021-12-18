# GameChest

>  A responsive website that allows public users to see a list of video games and their reviews. 
>  Registered users are able to create a new video game entry, create new reviews of games,
>  give a rating number, as well as one day being able to keep a log of their video games.

**Technology Used:**

              React, HTML5, CSS3, Node.js, Express, Heroku, Reactstrap, React-Burger-Menu
----
## Heroku Deploy
[Click me][HerokuURL] to view our live deploy through Heroku.

## Adam Patrick

| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [github.com/coderap931][Adam-Github] |
| LinkedIn | [linkedin.com/in/adam-patrick-06a970159/][Adam-LinkedIn] |
| Portfolio | [coderap931.github.io/][Adam-Portfolio] |

### Assigned Tasks

**Endpoint:** /game/create 
**Completion Date:** 11/29 

**Endpoint:** /game/edit 
**Completion Date:** 11/29 

**Endpoint:** /game/delete 
**Completion Date:** 11/29 

**Additional Tasks**
- Git Master
    - **Completion Date:** Once a Git Master, always a Git Master
- Heroku Deployer
    - **Completion Date:** Final Deploy, morning 12/18

**Client Components:** 
- GameCreateModal.js: Initial completed pass 12/1, no bugs found to date
- GameEditDeleteModal.js: Initial completed pass 12/1, minor styling changes and relocation of certain components to parent elements 12/4
- GameUpdateModal.js: Initial completed pass 12/1, minor styling changes and corrected props passes with team 12/9
----
## Alex Myers
| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [github.com/Alex-Lee-Myers][Alex-Github] |
| LinkedIn | [linkedin.com/in/alexleemyers][Alex-LinkedIn] |
| Portfolio | [alex-lee-myers.github.io/][Alex-Portfolio] |

### Assigned Tasks

**Endpoint:** /user/register   
**Completion Date:** 12/4   
| Date | Files, Commits and Comments |
| ------ | ------ |
| *11/30* | Signup.js working, but buggy, with MDB design. |
| *12/4:*  | Signup.js reformatted and debugged. Fully working. Changed to Reactstrap design for consistency. |
| *12/14:*  | Restyling. Upon clicking the link on sidebar, modal will immediately open and close on formSubmit to redirect to Home. Hidden if signed in on Sidebar.  |
| *12/16:*  | useNavigator incorporated. Whether closing or submitting, the user is taken to the '/home' route. Need to add responses if passwords match as well as prompts for each corresponding field. |

**Endpoint:** /user/login     
**Completion Date:** TBD     

| Date | Files, Commits and Comments |
| ------ | ------ |
| *11/30* | Login.js working, but buggy, with MDB design. |
| *12/4:*  | Login.js reformatted and debugged. Fully working. Changed to Reactstrap design for consistency. |
| *12/14:*  | Restyling. Upon clicking the link on sidebar, modal will immediately open and close on formSubmit to redirect to Home. Hidden if signed in on Sidebar. |
| *12/16:*  | useNavigator incorporated. Whether closing or submitting, the user is taken to the '/home' route. Need to add responses if login is incorrect as well as prompts for each corresponding field. Need to add responses if login is correct on submit as well as prompts for each corresponding field. |

**Additional Tasks**

| Date | Task Performed | Files, Commits and Comments |
| ------ | ------ | ------ |
| *11/29* | React Components Built | Setup all base React component templates for all files so teammates could have base code to build off of!
| *11/30* |  React-Router-Dom Setup and Tokens Functional | App.js: Restructed to route tokens correctly by way of proper React-Router-Dom usage of <Routes> functionality. Upgraded from using <Switch>. 
| *12/4* | Heroku Deployment Began | Heroku deployment began. Due to user management issues from Heroku, Adam took over the deployment. Personal Heroku deployment performed later for practice.
| *12/6* | LocalHost<->Heroku Setup | Debugged and setup a way to quickly switch between local and deployed testing. Local testing worked perfect, Heroku testing is a WIP and will be done with team.
| *12/7* | LocalHost<->Heroku Testing Instructions | Created a [guide][LocalHostInstructions] on how to switch between LocalHost and Heroku fetches to test on all instances. Next up is how to properly do so for Heroku specifically with team.
| *12/7* | ReadMe.md updated completely, reformatted | ReadMe.md updated completely. Reformatted to be more presentable and legible. Updated personal information and commits.
| *12/14* | ReadMe.md styled like Server repo's | Sidebar styling updated and functional. Routing will need updated after other components functional. Needs integrated with teams update to Games components that effected Sidebar and App slightly. 
| *12/14* | Added signout option | Added signout option that clears tokens and resets User to blank string. 
| *12/15* | gameMapper debugged | small debug of making sure our gameMapper function was fully functional before debugging further with team on Thursday night.
| *12/16* Morning | sidebar conditional, modal logic, routing added | React-Router-Dom now incorporates the useNavigator feature. Incorporated in Login and Register modals depending on user input to send the user to a certain, appropriate route. Additionally, sidebar has a working conditional for whether a user is logged in or not and changes whether they see Logout or Register & Signin. 
| *12/16* Team Session | debugged and pushed MVP to Heroku | The entire team debugged heavily from 1-9:30PM. We tested before deploying to Heroku that we could login, signup, that it changes to logout when doing so, you can only edit games you've created, and create a game. All functional. Team will be figuring out why Heroku has CORS issues first. Then breaking up to style components. Adam and Jaylon will be taking on all Games styling tomorrow. I will be sprucing up Sidebar as well as Login/Register UI features I will list in the appropriate above component logs.
| *12/16* After-Class Jaylen+Alex | Jaylon git pull finalized | Helped Jaylon pull everything correctly into his branch to be able to help tomorrow. Fully tested and working locally for him.

**Client components:**
-   App.js
-   Login.js
-   Signup.js (Register)
-   Sidebar.js
-   React-router-dom usage
 ----
## Jaylen Wilson
| Portfolio  Sites | Direct Link |
| ------ | ------ |
| GitHub | [https://github.com/Jaylenwilson][Jaylen-Github] |
| LinkedIn | [https:www.linkedin.com/in/jaylenwilson12][Jaylen-LinkedIn] |
| Portfolio | [https://jaylenwilson.github.io/][Jaylen-Portfolio] |

### Assigned Tasks

**Endpoint:** /game/listAll
**Completion Date:** WIP
| 12/28 | completed list all endpoint no bugs had to remove validateJWT|


**Endpoint:** /game/view/{id}
**Completion Date:** WIP / [completion date]
| 12/28 | Completed view by id endpoint no nugs passed testing |


Client components: 
- [Home.js]
- [App.js]
[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen.)

   [Adam-Github]: <https://github.com/joemccann/dillinger>
   [Adam-LinkedIn]: <https://github.com/joemccann/dillinger.git>
   [Adam-Pokemon]: <http://daringfireball.net>
   [Adam-CSS]: <http://daringfireball.net/projects/markdown/>
   [Adam-Giphy]: <https://github.com/markdown-it/markdown-it>
   [Adam-Portfolio]: <https://coderap931.github.io/>
   [Alex-Github]: <http://ace.ajax.org>
   [Alex-LinkedIn]: <http://nodejs.org>
   [Alex-Portfolio]: <http://twitter.github.com/bootstrap/>
   [Jaylen-GitHub]: <https://github.com/Jaylenwilson>
   [Jaylen-LinkedIn]: <https:www.linkedin.com/in/jaylenwilson12>
   [Jaylen-Portfolio]: <https://jaylenwilson.github.io/>
   [LocalHostInstructions]: <https://github.com/coderap931/teamBluePern-Client/blob/develop/src/helpers/LocalhostInstructions.md>
   [HerokuURL]: <https://amp-my-gamechest-react.herokuapp.com/>
