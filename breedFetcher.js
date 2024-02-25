//import request library
const request = require("request");

//Allow the user to specify the breed name using command-line arguments.
const specifyBreedName = process.argv.slice(2);

//Enter the API endpoint/URL into the browser, searching for the breed Siberian.
//q=${specifyBreedName} takes in the query of breedname specified in the node by the user
const apiUrl = `https://api.thecatapi.com/v1/breeds/search?q=${specifyBreedName}`;

//if the specified breed name is not present, log it and exit
if (!specifyBreedName) {
  console.log("Invalid breed name.");
  process.exit(1);
}

//Write the logic in breedFetcher.js to fetch the Siberian data from the API endpoint using request.
const breedData = function(specifyBreedName) {
 
  request(apiUrl, (error, response, body) => {
    if (error) {
      console.log("Error Occurred: ", error);
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
          console.log("Breed name not found.");
        }

      //if there's an error while parsing json string, log it to the console
      } catch (parseErr) {
        console.log("Error while parsing JSON body: ", parseErr);
      }
    }
  });
};

breedData(specifyBreedName);