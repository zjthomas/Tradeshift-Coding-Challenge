# tradshift

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
1. [Discussion](#discussion)

## Usage

```bash
$ npm install
$ npm start
$ open http://localhost:3000 

```

## Requirements

- Node >=8.15.1

## Development

```bash
$ npm install
$ npm run build
$ npm run start-dev
$ open http://localhost:3000 
$ npm test

```

## Discussion

For this prompt, I chose to make a small react app that is served up from an express server. The front end verifies that 3 side lengths are specified and then sends a GET request with a query containing the three side lengths. The request is routed to a controller which calls a function to determine the type of triangle. The output is a string which is then sent back to the front end and rendered on the page. The actual logic for determining the type of triangle is found in the /server/lib/triangle.js file. 

The typeOfTriangle function takes in three side lengths, checks if they make a valid triangle, and then goes on to check if the triangle is equilateral or isosceles with scalene being a default option. The function will then return a string of the type of triangle. If the side lengths do not make a valid triangle a string stating that is returned. I wrote unit tests for all of the logic determining the type of triangle. These tests can be found in the /server/lib/tests directory and can be run using jest by typing in “npm test” after running “npm install” in the root directory.

The logic is handled on the server as opposed to the front end for simplicity. While this calculation is simple and could be run on the front end, if this was expanded to have more complex calculations, they would need to be run on the server. Setting things up to work keeps everything consistent. Additionally, it’s easier to debug when all calculations are performed in one place and results can be easily tested.


