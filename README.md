# Application

The web application is to search for Country names and get search results from multiple sources.

## Installation

- Clone the project
- Install the Dependencies
```
$ npm i 
```
- Run the express server
```
$ npm run server 
```
- Run the web app and your application automatically opens on your default browser.
```
$ npm start
```

- Run the front end test cases
```
$ npm test
```

## Technology

- React JS - Frontend
- Node JS - Server
- ExpressJS - Nodejs framework
- Jest - Unit testing


## Application behavior

Front end is developed using React JS. On the web page,  you have an option to search your query. Since I wanted to implement type ahead functionality, I have limited the search to country names ( since, as of now I could not find a reliable api providing good auto suggest features). Once you start entering a country name, you get suggestions as a drop down. Using throttle-debounce , it is made sure that api calls go only once in a second while you type. After you select a country from the dropdown, search results based on the country names are displayed in the main content section. The search results are displayed only once you select a country from the dropdown of suggestions. Some general search results are provided from an api I have developed along with this and rest of the search results comes from duck duck go. So total 2 APIs are called in parallel to get the results. On clicking the results you will be redirected to the corresponding pages.


The server side is developed using NodeJS and Express JS is used as its framework. The data for type ahead ( list of country names ) is stored on the server itself and I haven't used DB since there are not Create or Update methods required with the data. The server will start on port 3001, presently 3 APIs are written.  
 * "http://localhost:3001/typeahead" which will fetch the data for type ahead.  
* "http://localhost:3001/getdata?search=<countryname>"  which will fetch some default links of wikipedia, youtube and weather based on the country you have selected.  
* "http://localhost:3001/getDuckResults?search=<countryname>" which will fetch search results from the duck duck go search API.



Test cases are written using Jest.

