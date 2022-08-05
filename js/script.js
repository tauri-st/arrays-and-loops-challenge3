var groceries = [
  "milk",
  "coffee",
  "oranges",
  "yogourt",
  "bread",
  "juice",
  "lettuce",
  "flour",
  "apples",
  "milk",
  "cat food",
  "juice",
  "ice cream",
  "potatoes",
  "bananas",
  "coffee",
  "olive oil",
  "mustard"
];


//Create function called list, an array space for all nonduplicates to load
//For of loop where each element is named item, checks each item and conditional cleanList DOES NOT include already it is added
//Return the cleanList
var deleteDuplicates = function (list) {
  var cleanList = [];
  for (var item of list) {
    if (!cleanList.includes(item)) {
      cleanList.push(item);
    }
  }
    return cleanList;
  };

//Call to deleteDuplicates function with groceries as arguement
var newGroceries = deleteDuplicates(groceries);

//Log out index of groceries minus the items that were pulled from last function
groceries.forEach(function (item, index) {
  console.log(`#${index + 1} - ${item}`)
});