const fetchBreedDescription = require("./breedFetcher");


//Allow the user to specify the breed name using command-line arguments.
const breedName = process.argv[2];

//if the specified breed name is not present, log it and exit
if (!breedName) {
  console.log("Invalid breed name provided.");
  process.exit(1);
}


fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log("Description: ", desc);
  }
});