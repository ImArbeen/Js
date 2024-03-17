const prompt = require(`prompt-sync`)();




      const person={
            firstName: "Arbeen",
            lastName: "Shrestha ",
            address: " Palungtar-8 Gorkha",
            Education: " Bachelor in Information Technology",
            Level: " 4th Semister",
            parentsName: {
                  fatherName: "Tarzan Shrestha",
                  motherName: "Amita Shrestha",
            }
            
      }
      // updating the value 
      
      person.firstName="Radhika"
      person.parentsName.motherName = "Shyamphulu Shrestha "
      console.log(person["parentsName"]["motherName"])

      // Delete 

      delete person.firstName
      console.log(person)



// updating the value of the key 
// person.Level="3rd Semister";
// person.firstName = "Khom Kumar Shrestha";
// console.log(person.firstName)

// // changing the mother name 

// person.parentsName.motherName = "Man Kumari Shrestha ";
// console.log(person ["parentsName"]["motherName"])

// // nested object accessig

// console.log(person["parentsName"]["motherName"])

// // deleting the value of the key in the object
// delete person.firstName
// console.log(person)

// delete person
// console.log(person)

