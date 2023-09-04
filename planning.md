Project Title: Chef's Kiss

Project Summary:  A Restaurant Search App that allows you to search for a list of restaurants in a given area based on cuisine criteria save that restaurant to a personalized list and add comments and impressions.  

Team members: Joshua Hsu, James Redden 

Link to Github Repo : https://github.com/jhsu79/chefskiss

Link To Trello: https://trello.com/b/ryjCcTMz/the-chefs-kiss

Wireframes
![image](https://github.com/jhsu79/chefskiss/assets/137417888/3e20b9ca-09f4-49f2-8f6d-dcd727f5a386)
![image](https://github.com/jhsu79/chefskiss/assets/137417888/0e1a7b97-b4bd-4013-b799-3d2cf3af7ce5)
![image](https://github.com/jhsu79/chefskiss/assets/137417888/3ca4a775-1ed0-4d26-bd0d-af7707a21acb)



Link to API: https://rapidapi.com/ptwebsolution/api/worldwide-restaurants/


Primary Model / Schema - Post

| Property         | Datatype      |
| -------------    | ------------- |
| _id              | Objectid      |
| cuisine          | String        |
| name             | String        |
| locationId       | String        |
| phoneNumber      | String        |
| restaurantLink   | String        |
| associatedField  | Ref: Comments |

Notes:
Use the Search function to generate data from a 3rd Party API that can be added to populate values. 

Secondary Model / Schema - Impressions

| Property         | Datatype      |
| -------------    | ------------- |
| _id              | Objectid      |
| parentId         | Objectid      |
| hasVisited       | Boolean       |
| favorite         | Boolean       |
| requireRes       | Boolean       |
| comments         | String        |
| datePosted       | Date          |

Notes:
User will be able to populate this schema using a form.  

MVP/CRUD RESTFUL ROUTES:

| Route Name    | Crud Ops      | URL endpoint   | Module Name   | Controller Action  | Notes                                                     |              
| ------------- | ------------- | -------------  | ------------- | -----------------  | -------------                                             |
| ROUTES FOR PRIMARY MODEL: RESTAURANTS                                                                                                                  |
| POST          | Create        | /restaurants    | Create        | .create()          | Creates entry for restaurants/Add Button using pre-populated data |
| GET           | Read          | /restaurants    | Index         | .find()            | Show a list of restaurants the user has saved                     |
| GET           | Read          | /restaurants/:id| Show          | .findById()        | Display all restaurants with impressions if they exist            |
| DELETE        | Delete        | /restaurants/:id | Delete        | .deleteOne()       | Delete restaurant                                                 |


| Route Name    | Crud Ops      | URL endpoint                          | Module Name               | Controller Action           | Notes                                 |                         
| ------------- | ------------- | -------------                         | -------------             | -----------------           | -------------                         |                      
| ROUTES FOR SECONDARY MODEL: IMPRESSIONS                                                                                                                                 |
| POST          | Create        | /restaurants/:id/impressions           | Create                    | .findByID() .push() .save() |                                       |
| DELETE        | Delete        |  /restaurants/:id/impressions/:impressionId | Delete                    | .deleteOne                  |                                       |
| GET           | Read          | /restaurants/new                      | New                       |                             |  Display form for editing Impressions |
| GET           | Read          | /restaurants/:id/edit                 | Edit:editImpressions      |                             |  Form to edit restaurant Impressions  |
| PUT           | Update        | /restaurants/:id/impressions/:impressionId | Update: updateImpressions | .findById() .save()         |  Update Post                          |                           


BASIC ERD: 
![image](https://github.com/jhsu79/chefskiss/assets/137831358/94ebebbf-7bc8-48d6-84dc-1066e367103e)

STRETCH GOALS: 
![image](https://github.com/jhsu79/chefskiss/assets/137831358/599b3c0c-67ea-42ac-b898-3f2da874ccba)

User Story

As a user, I want to:  
Search an area for a list of restaurants.  
See the information and descriptions for all those restaurants. 
Save the information/description for a specific restaurant
See a list of restaurants I’ve saved.  
Personalize impressions of that restaurant. 
Edit and save impressions.

Optional 
Icebox Features -
As a user 
Ensure that I don’t create duplicate entries of the same restaurant. 
Sign in using Google OAuth2 and save my impressions. 
See all the comments other users have left on a restaurant. 
See a summary of all posted reviews.  




Icebox Routes (Optional)



Links to documentation for Stretch Goals. 
https://auth0.com/docs/quickstart/spa/react/01-login
https://git.generalassemb.ly/SEIR-710-EC/express-react-jwt
https://platform.openai.com/docs/introduction
