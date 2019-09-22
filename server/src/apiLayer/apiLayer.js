/* File name : apilayer.js
 File Description: Handling all the API request and its response back */
const data = require('./../data/data');
// const config = require('./../../config/config');
const request = require('request');

const apilayer = {
    typeahead: function (req, res) {
        
        const str1 = req.query.search;
        var filteredData = [];
        if(str1.length > 0) {
            filteredData = data.filter( (country) => {
                
            return country.toLowerCase().startsWith(str1.toLowerCase());
            } );
        }      
        const countries = {
            countries: filteredData
        }
        
        return res.send(countries);

    },
    getData: function (req, res) {

        // const url = 'https://www.googleapis.com/customsearch/v1?key=' + config.apikey +  '&q=' + req.query.search;
        // request(url, function (error, response, body) {  
        //     return res.send(body);
        // }); 

        const country = req.query.search || '';
        const googleData =[ {
                      title : country + ' Wikipedia',
                      link : 'https://en.wikipedia.org/wiki/' + country, 
                      type: 'google'
                    }, {
                      title: country + '  Youtube',
                      link: 'https://www.youtube.com/results?search_query=' + country,
                      type: 'google'
                    }, 
                    {
                      title: country + '  Weather',
                      link: 'https://www.timeanddate.com/weather/' + country,
                      type: 'google' 
                    }];
        return res.send({ result: googleData });


    }, 
    getDuckResutls: function(req, res) {
        const search = req.query.search || '';
        const url = 'http://api.duckduckgo.com/?q=' + search + '&format=json';
        request(url, function (error, response, body) { 
            if(!error) {
                const data = JSON.parse(body);
                const filteredResults = data.RelatedTopics.map( (item) => {
                    const icon = item.Icon ? (item.Icon.URL ? item.Icon.URL: '' ) : ''; 
                    const searchURL = item.FirstURL ? item.FirstURL : ( item.Topics ? item.Topics[0].FirstURL :'' ) ;
                    const searhText = item.Text ? item.Text : ( item.Topics ? item.Topics[0].Text :'' ) ;
                    const obj = {
                        link: searchURL,
                        icon: icon,
                        title: searhText,
                        type: 'duck'
                    }
                    return obj;
                } );
                const filteredData = {
                    result: filteredResults
                }
                
                return res.send(filteredData);
            } else {
                res.send({result: []});
            }
           
    });

    }
};

module.exports = apilayer;