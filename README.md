# Ca$h Money

## Purpose

Full-stack application where users can create a budget, track spending, and plan for upcoming bills.

## How to Use

To start, the user will only be allowed access to the Register or Login pages. Upon registering as a new user or logging in as an existing user, they will be able to access all of the application's pages. They will also have a personalized greeting with their first name printed to the navbar for all subsequent pages. 

## Sitemap

### **Home**

Here is where a basic overview of one's budget and upcoming bills will be displayed. For further details on either, the user can click the relevant component in the main window, or use the navbar.

### **Login**

This is a basic login page using email and password associated with a user's index in the appropriate MongoDB collection. If they match, the user will be logged in and returned to [Home].  

If the user has not yet created an account, they can click on the link to the [Register] page.

### **Register**

Here, the user creates an account using four pieces of information: First name, desired username, e-mail address, and desired password. This will create a corresponding User file in the MongoDB collection.  

For pre-registered users, there will also be a link to the [Login] page.

### **My Budget**

Here, the user has access to their detailed budget, showing planned and current expenses for each category. As they near their planned spending for the month, the progress bar will fill and change colors.

There will also be a link to the [Build Budget] page.

### **Build Budget** 

This is where users can create their budget, adding their estimated total monthly income and line items for various expense types. The page will display a comparision of the income and spending.

### **Add Bills**

Here, the user can add recurring bills, so that they can be tracked on the calendar. Each bill will have an associated amount, category, and frequency.

### **My Bills**

Here the user can see a deatiled view of their upcoming bills, so as to be prepared for any impending charges.  

There will also be a link to the [Add Bills] page.


## Technologies/Libraries Used

- MERN Stack (MongoDB, Express, React, Node.js)

### CSS
- Bootstrap
- Materialize

### NPM Packages
- Axios
- dotenv
- Passport
- React-Calendar NPM package

## Team
- Roy Davis
    - React Components
    - APIs
- Elliott Dodge
    - Project Management
    - CSS
    - README


<!-- # Create React Express App

## About This Boilerplate

This setup allows for a Node/Express/React app which can be easily deployed to Heroku.

The front-end React app will auto-reload as it's updated via webpack dev server, and the backend Express app will auto-reload independently with nodemon.

## Starting the app locally

Start by installing front and backend dependencies. While in this directory, run the following command:

```
npm install
```

This should install node modules within the server and the client folder.

After both installations complete, run the following command in your terminal:

```
npm start
```

Your app should now be running on <http://localhost:3000>. The Express server should intercept any AJAX requests from the client.

## Deployment (Heroku)

To deploy, simply add and commit your changes, and push to Heroku. As is, the NPM scripts should take care of the rest. -->
