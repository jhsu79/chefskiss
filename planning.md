Project Title: Chef's Kiss

Project Summary:  A Restaurant Search App that allows you to search for a list of restaurants in a given area based on cuisine criteria save that restaurant to a personalized list and add comments and impressions.  

Team members: Joshua Hsu, James Redden 

Link to Github Repo : 

Link To Trello: https://trello.com/b/ryjCcTMz/the-chefs-kiss

Link to wireframe(s): 

Link to API: https://rapidapi.com/ptwebsolution/api/worldwide-restaurants/


Primary Model / Schema - Post

| Property         | Datatype      |
| -------------    | ------------- |
| _id              | Objectid      |
| Cuisine          | String        |
| Name             | String        |
| LocationID       | String        |
| Phone No.        | String        |
| Restaurant Link  | String        |
| Associated Field | Ref: Comments |

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
| datePosted       | Ref: Date     |

Notes:
User will be able to populate this schema using a form.  

MVP/CRUD RESTFUL ROUTES:

| Route Name    | Crud Ops      | URL endpoint     | Module Name   | Controller Action         | Notes                                                             |
| ------------- | ------------- | -------------    | ------------- | -----------------         | -------------                                                     |
| ROUTES FOR PRIMARY MODEL: RESTAURANTS                                                                                                                            |
| POST          | Create        | /restaurants     | create        | .create()                 | Creates entry for restaurants/Add Button using pre-populated data |
| GET           | Read          | /restaurants     | index         | .find()                   | Show a list of restaurants the user has saved                     |
| GET           | Read          | /restaurants/:id | show          | .findById()               | Display all restaurants with impressions if they exist            |
| DELETE        | Delete        | /restaurants/:id | delete        | .deleteOne()              | Delete restaurant                                                 |


| Route Name    | Crud Ops      | URL endpoint                          | Module Name               | Controller Action           | Notes                                 |                         
| ------------- | ------------- | -------------                         | -------------             | -----------------           | -------------                         |                      
| ROUTES FOR SECONDARY MODEL: IMPRESSIONS                                                                                                                                 |
| POST          | Create        | /restaurants/id/impressions           | create                    | .findByID() .push() .save() |                                       |
| DELETE        | Delete        |  /restaurants/id/impressions/comments | delete                    | .deleteOne                  |                                       |
| GET           | Read          | /restaurants/new                      | new                       |                             |  Display form for editing Impressions |
| GET           | Read          | /restaurants/:id/edit                 | edit:editImpressions      |                             |  Form to edit restaurant Impressions  |
| PUT           | Update        | /restaurants/:id//comments/:commentId | update: updateImpressions | .findById() .save()         |  Update Post                          |                           


BASIC ERD: 



STRETCH GOALS: 



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
