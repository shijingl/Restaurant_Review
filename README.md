# Restuarant Reviews
---
## Project Overview
This restaurant review is a fully-responsive, accessible, mobile-friendly web application that some offline use. Please [Click Here](https://shijingl.github.io/Restaurant_Review/) for a live demo. 

## Assets
#### 1. JS File 
##### `dbhelper.js`
dbhelper.js includes several functions that asynchronously load data from restaurants.json file through XHR objects and callback. Functions are: </br>
`static fetchRestaurants(callback)` </br>
`static fetchRestaurantById(id, callback)` </br>
`static fetchRestaurantByCuisine(cuisine, callback)` </br>
`static fetchRestaurantByNeighborhood(neighborhood, callback)` </br>
`static fetchRestaurantByCuisineAndNeighborhood(cuisine, neighborhood, callback)` </br>
`static fetchNeighborhoods(callback)` </br>
`static fetchCuisines(callback)` </br>

--Technical
-1.assets
-JS
--dbhelper.js
callback, XHR (implement asynchronously). 

--indexController.js
-navigator.serviceworker.register('sw.js')
-reg.waiting
-reg.installing

--main.js
--restaurant_info.js

--sw.js
-cache.put
-cahce.addALL
-caches.match
-install
-activate
-caches.open(staticCacheName)
-caches.delete
-worker.state
-statechange
-serviceWorker.controller

-HTML
--index.html
--restaurant.html
-CSS
--style.css
-DATA
--restaurants.json


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

## Third Party Library Used
1. `Leftlet.js` (https://leafletjs.com): Leaflet is the leading open-source JavaScript library for mobile-friendly interactive maps. 
2. `Mapbox` (https://www.mapbox.com): An open source mapping platform for custom designed maps. Mapbox's APIs and SDKs are the building blocks to integrate location into any mobile or web app.
