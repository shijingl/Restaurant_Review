# Restuarant Reviews
---
## Project Overview
This restaurant review is a fully-responsive, accessible, mobile-friendly web application that some offline use. Please [Click Here](https://shijingl.github.io/Restaurant_Review/) for a live demo. 

## Project Assets
#### 1. HTML File
##### `index.html`: the html file for the main page. 
##### `restaurant.html`: the html file for the restaurant detail page.

#### 2. JS File 
##### `dbhelper.js`: asynchronously load data from restaurants.json file through XHR objects and callback. Functions included are: </br>
`static fetchRestaurants(callback)` </br>
`static fetchRestaurantById(id, callback)` </br>
`static fetchRestaurantByCuisine(cuisine, callback)` </br>
`static fetchRestaurantByNeighborhood(neighborhood, callback)` </br>
`static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback)` </br>
`static fetchNeighborhoods(callback)` </br>
`static fetchCuisines(callback)` </br>
##### `main.js`: a wrapper for dbhelper.js that directly interact with the event listeners in index.html 
##### `restaurant_info.js`: a wrapper for dbhelper.js that directly interact with the event listeners in restaurant.html
##### `sw.js`: the script that installs, activates service worker, and manipulates cache through cache.put, cache.addALL, cache.match, cache.delete. 
##### `indexController.js`: a wrapper that register sw.js file and control service worker's status through reg.installing and reg.waiting. 

#### 3. CSS File
##### `style.css`: the css file for this project. 

#### 4. DATA
##### `restaurants.json`: the raw data file for this project in JSON format.  


-2.How it's implemented
--1) get map on screen through mapbox API
--2) convert the site to responsive design
--3) implement accessibility features in the site HTML
--4) add service worker script

## How to Run Locally?
Using Python HTTP server In the project folder, start up a simple HTTP server to serve up the site files on your local computer.
1. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8080
2. For Python 3.x, you can use python -m http.server 8080
With your server running, visit the site: http://localhost:8080

## Library/API Used
1. `Leftlet.js` (https://leafletjs.com): Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. 
2. `Mapbox` (https://www.mapbox.com): An open source mapping platform for custom designed maps. Mapbox's APIs and SDKs are the building blocks to integrate location into any mobile or web app.
