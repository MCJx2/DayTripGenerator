// //console.log ("Hello World");

// //array of destinations
// let listOfDestinations = ["San Marcos", "Austin", "Kerrville", "New Braunfels"];

// //function that takes in an array(myArray) and returns a random element from the array
// //The "Math.random()" function is a built in Javascript function that "sorts through" an array, and picks a random element
// //Since we want a value returned from this array, we MUST use the "return" keyword
// function randomGenerator(myArray){
//     let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
//     return randomChoice
// }

// function destinationGenerator(){
//   // userIsHappy will determine if we continue looping through our "while" loop
//   let userIsHappy = false
//   // Since userIsHappy equals false by default, it will AUTOMATICALLY  enter into this while loop
//   while(userIsHappy === false){
//     // randomDestination will "catch" whatever value is RETURNED from the randomGenerator function
//       let randomDestination = randomGenerator(listOfDestinations)

//       let userResponse = prompt(`Your randomly generated destination is ${randomDestination}. Are you okay with that?`)

//       if(userResponse.toLowerCase() === 'yes'){
//         alert(`Enjoy your trip to ${randomDestination}`)
//         // Since the "while" loop only runs if userIsHappy is false, as soon as it sees that its switched to "true", it will end the loop
//         userIsHappy = true
//       }else if(userResponse.toLowerCase() === 'no'){
//         userIsHappy = false
//       }
//   }
// }

// destinationGenerator()


// //array of restaurants
// let typesOfRestaurants = ["Chinese", "Italian", "Steak", "Vegan"];

// //function that takes in an array(myArray) and returns a random element from the array
// //The "Math.random()" function is a built in Javascript function that "sorts through" an array, and picks a random element
// //Since we want a value returned from this array, we MUST use the "return" keyword
// function randomGenerator(myArray){
//     let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
//     return randomChoice
// }


// function restaurantGenerator(){
  
//   let userIsHappy = false

//   while(userIsHappy === false){
//       let randomRestaurant = randomGenerator(typesOfRestaurants)

//       let userResponse = prompt(`Your randomly generated type of restaurant is ${randomRestaurant}. Are you okay with that?`)

//       if(userResponse.toLowerCase() === 'yes'){
//         alert(`Enjoy your dinner ${randomRestaurant}`)
       
//         userIsHappy = true
//       }else if(userResponse.toLowerCase() === 'no'){
//         userIsHappy = false
//       }
//   }
// }

// restaurantGenerator()



// //array of modes of transportation
// let modesOfTransportation = ["Uber", "Train", "Car", "Bus"];

// //function that takes in an array(myArray) and returns a random element from the array
// //The "Math.random()" function is a built in Javascript function that "sorts through" an array, and picks a random element
// //Since we want a value returned from this array, we MUST use the "return" keyword
// function randomGenerator(myArray){
//     let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
//     return randomChoice
// }

// function transportationGenerator(){
  
//     let userIsHappy = false
  
//     while(userIsHappy === false){
//         let randomTransportation = randomGenerator(modesOfTransportation)
  
//         let userResponse = prompt(`Your mode of transportation is ${randomTransportation}. Are you okay with that?`)
  
//         if(userResponse.toLowerCase() === 'yes'){
//           alert(`Enjoy your ${randomTransportation}`)
         
//           userIsHappy = true
//         }else if(userResponse.toLowerCase() === 'no'){
//           userIsHappy = false
//         }
//     }
//   }
  
//   transportationGenerator()


//   //array forms of entertainment
// let formsOfEntertainment = ["Movies", "Tubing", "Karoke", "City Tour"];

// //function that takes in an array(myArray) and returns a random element from the array
// //The "Math.random()" function is a built in Javascript function that "sorts through" an array, and picks a random element
// //Since we want a value returned from this array, we MUST use the "return" keyword
// function randomGenerator(myArray){
//     let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
//     return randomChoice
// }

// function entertainmentGenerator(){
  
//     let userIsHappy = false
  
//     while(userIsHappy === false){
//         let randomEntertainment = randomGenerator(formsOfEntertainment)
  
//         let userResponse = prompt(`Your form of entertainment is ${randomEntertainment}. Are you ready for that?`)
  
//         if(userResponse.toLowerCase() === 'yes'){
//           alert(`Enjoy your ${randomEntertainment}`)
         
//           userIsHappy = true
//         }else if(userResponse.toLowerCase() === 'no'){
//           userIsHappy = false
//         }
//     }
//   }
  
//   entertainmentGenerator()



  


  //array dayTripGenerator


//function that takes in an array(myArray) and returns a random element from the array
//The "Math.random()" function is a built in Javascript function that "sorts through" an array, and picks a random element
//Since we want a value returned from this array, we MUST use the "return" keyword
// function randomGenerator(myArray){
//     let randomChoice = myArray[Math.floor(Math.random() * myArray.length)]
//     return randomChoice
//}
let destination = []
destination.push ["San Marcos", "Austin", "Kerrville", "New Braunfels"];

function destinationChecker(destinationList){
  let user_choice =  prompt("Select your destination")
  for (let index = 0; index < destinationList.length; index++) {
    if (destinationList[index] === user_choice){
        console.log ("You found a destination")
    }
  }
}
destinationChecker(destination)

// let restaurant = []
// restaurant.push ["Chinese", "Italian", "Steak", "Vegan"];

// let transportation = []
// transportation.push ["Uber", "Train", "Car", "Bus"];

// let entertainment
// entertainment.push ["Movies", "Tubing", "Karoke", "City Tour"];