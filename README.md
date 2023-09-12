# Chef's Kiss
A MERN Stack app that allows users to search for top rated restaurants in an area and save those restaurants. 

## Credits:
Created by Joshua Hsu and James Redden 
Joshua N Hsu [GitHub](https://github.com/jhsu79) | [LinkedIn](htttps://www.linkedin.com/in/joshuanhsu)
James Redden [GitHub](https://github.com/jaredden1) | [LinkedIn](https://www.linkedin.com/in/jamesredden1/)


## Getting Started:

### How Do I Use Chef's Kiss? 
1. Click on this link to access the app: [A Chef's Kiss](https://thechefskiss.netlify.app/)

2. On the search page, enter a location (neighborhood, city, state, country) you'd like to explore.    
![image](https://github.com/jhsu79/chefskiss/assets/137417888/5bb2e8b3-c045-4498-a032-91f4681f37d9)

3. Click Search. This will populate list of 5 restaurants based on your search criteria. 
<img width="1483" alt="Screenshot 2023-09-11 at 10 22 40 PM" src="https://github.com/jhsu79/chefskiss/assets/137417888/9e7a799c-60f1-4e42-8f37-d24ebe3df0ad">

4. Select a restaurant you'd like to save to 'Your Restaurants'. 

5. On the home page, you can view all the details about the restaurants you've saved. 
<img width="1479" alt="Screenshot 2023-09-11 at 10 23 17 PM" src="https://github.com/jhsu79/chefskiss/assets/137417888/0cfad567-0df0-4df5-975c-0ae78ccb6ce8">

6. On each restaurant, you can also add your own impressions or remove the restaurant from your list.
<img width="1496" alt="Screenshot 2023-09-11 at 10 21 33 PM" src="https://github.com/jhsu79/chefskiss/assets/137417888/0360fc8e-7f17-4fee-99c1-d07726377946">


## Technologies Used:
    
1. Mongo DB 
2. Express.js
3. React 
4. Node.js 
5. Yelp Fusion API 

## Acknowledgements:
1. [Inspiration/template for visual design](https://www.figma.com/community/file/1224381031537447660)
2. [Deployment support article by](https://dev.to/stlnick/how-to-deploy-a-full-stack-mern-app-with-heroku-netlify-ncb?utm_source=dormosheio&utm_campaign=dormosheio)
3. [Design for component tree by Reactree](https://marketplace.visualstudio.com/publishers/ReacTreeDev)


## Future Features: 

1. Separate frontend pages into further React Components (i.e. 'Restaurant Lists, Buttons, and Inputs')
2. Add a Show Page and implement a feature to allow users to add their impressions of a restaurant.  
3. Caching search results to avoid unnecessary fetch calls from the API.  
4. Restrict a user from saving restaurants in their list more than once. 
5. Implement Auth0 Authorization. 
6. Implement a Restaurant view that allows users to view all other users' impressions. 
7. Implement the use of an OpenAI API that aggregates and summarizes all users' impressions.  
8. Cloudinary support that allows users to upload images of the food or experience. 
