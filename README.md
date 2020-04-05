# Restuarant Reviews
---
## Project Overview
This restaurant review is a fully-responsive, accessible, mobile-friendly web application that support some offline use. Please [Click Here](https://shijingl.github.io/Restaurant_Review/) for a live demo. 

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

## Accessibility
All content-related images in this project include appropriate alternate text that clearly describes the content of the image. </br>
Focus in this project is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus. </br>
Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined. </br>
`<select id="cuisines-select" name="cuisines" onchange="updateRestaurants()" aria-label="Select Cuisines" aria-describedby="cuisines-select-help">` </br>
`<select id="neighborhoods-select" name="neighborhoods" onchange="updateRestaurants()" aria-label="Select Neighborhoods" aria-describedby="neighborhoods-select-help">` </br>

## Offline Use
In Lie-Fi or even Offline environment, user can still visit the page he/she has visited before. </br>
If the page was not cached before, the user will be returned a page: "You seems to be offline, and we didn't find any old cache for the URL."

## How to Run Locally?
Using Python HTTP server In the project folder, start up a simple HTTP server to serve up the site files on your local computer.
1. If you have Python 2.x, spin up the server with python -m SimpleHTTPServer 8080
2. For Python 3.x, you can use python3 -m http.server 8080
With your server running, visit the site: http://localhost:8080

## Library/API Used
1. `Leftlet.js` (https://leafletjs.com): Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. 
2. `Mapbox` (https://www.mapbox.com): An open source mapping platform for custom designed maps. Mapbox's APIs and SDKs are the building blocks to integrate location into any mobile or web app.
