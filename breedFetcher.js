//import request library
const request = require("request");

//Enter the API endpoint/URL into the browser, searching for the breed Siberian.
const apiUrl = "https://api.thecatapi.com/v1/breeds/search?q=siberian";

//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
const breedData = function () {
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.log("Error: ", error);
      //if status code is any other than 200
    } else if (response.statusCode !== 200) {
      console.log("Status Code Error: ", response.statusCode);
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
        } else {
          console.log("Breed data not found.")
        }

      //if there's an error while parsing json string, log it to the console
      } catch (parseErr) {
        console.log("Error while parsing JSON body: ", parseErr)
      }
    }
  });
};

breedData();