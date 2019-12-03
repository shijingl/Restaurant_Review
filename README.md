# Restuarant Reviews
---
## Project Overview
This restaurant review is a fully-responsive, mobile-friendly web application that some offline use. Please [Click Here](https://shijingl.github.io/Restaurant_Review/) for a live demo. 

--What's special?
-1. fully responsive
-2. accessibility
-3. offline use

--Technical
-1.assets
-JS
--dbhelper.js
--indexController.js
--main.js
--restaurant_info.js
--sw.js
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

## Leaflet.js and Mapbox
This repository uses leafletjs with Mapbox. You need to replace mapboxToken: with a token from Mapbox-Access token in main.js and restaurant_info.js. Mapbox is free to use, and does not require any payment information.
