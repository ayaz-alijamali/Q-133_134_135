// Question _______________ 133


// Define a TypeScript object
const person = {
    firstName: "Ayaz",
    lastName: "Ali",
    age: 24,
    hobbies: ["reading", "gaming", "hunting"],
    address: {
      street: "ImamBux jamali",
      city: "shahdadkot",
      state: "Larkana",
      zip: "77300"
    }
  };
  
  // Convert the TypeScript object into a JSON string
  const jsonString = JSON.stringify(person);
  
  // Print the JSON string
  console.log(jsonString);
  

  // Question _________________ 134 ------- same Question 


  // Question _________________ 135


  // Define a TypeScript object
const individuals = {
    firstName: "faheem",
    lastName: "Ali",
    age: 18,
    hobbies: ["reading", "gaming", "traveling"],
    address: {
      street: "ImamBux jamali",
      city: "shahdadkot",
      state: "Larkana",
      zip: "77300"
    }
  };
  
  // Convert the TypeScript object into a formatted JSON string with 2 spaces for indentation
  const formattedJsonSpaces = JSON.stringify(person, null, 2);
  console.log("Formatted JSON with spaces:\n", formattedJsonSpaces);
  
  // Convert the TypeScript object into a formatted JSON string with tab indentation
  const formattedJsonTabs = JSON.stringify(person, null, "\t");
  console.log("Formatted JSON with tabs:\n", formattedJsonTabs);
  