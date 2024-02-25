//import request library
const request = require("request");


//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
const fetchBreedDescription = function(breedName, callback) {
 
  //Enter the API endpoint/URL into the browser, searching for the breed Siberian.
  //q=${specifyBreedName} takes in the query of breedname specified in the node by the user
  const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(apiUrl, (error, response, body) => {
    if (error) {
      //call callback with error if error occurs
      callback(new Error("Error Occurred: "+ error), null);
      //if status code is any other than 200, call the callback with error
    } else if (response.statusCode !== 200) {
      callback(new Error("Status Code Error: "+ response.statusCode), null);
    } else {
      try {
        //to convert the json string to an object
        const data = JSON.parse(body);
        console.log(data);
        //to check the type of data after its parsed
        console.log(typeof data);
        // Access the first entry in the data array and print out the description for the user.
        if (data.length > 0) {
          console.log("First entry description: ", data[0].description);
          //call the callback with null and description if error occurs
          callback(null, data[0].description);
        } else {
          //call the callback with custom error if breed is not found
          callback(new Error(`Breed ${breedName} not found.`), null);
        }

      //if there's an error while parsing json string, log it to the console
      } catch (parseErr) {
        callback(parseErr, null);
      }
    }
  });
};


module.exports = fetchBreedDescription;