/*Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original 
list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original 
order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its 
order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list 
to show that its order has changed.
*/

let PlaceToVisit:string[] = ["Australia","United Kingdom","Germany","Canada","Norway"];
//print in original order
console.log("original order:",PlaceToVisit.slice().sort());

//print array in alphabetical order
console.log("alphabetical order.",PlaceToVisit.slice().sort() );

//arry is still in its original order
console.log("original order after sorting:",PlaceToVisit);

//print arry in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetic order:", PlaceToVisit.slice().sort().reverse());

//reverse the order of list
PlaceToVisit.reverse();
console.log("Reverse order:", PlaceToVisit);

//Reverse the order of list again
PlaceToVisit.reverse();
console.log("Back to the original order:", PlaceToVisit);

//sort arry so it's stored in alphabetical order
console.log("Sorted in alphabetical order:",PlaceToVisit.slice().sort().reverse());

//sort to change arry so it's stored in reverse alphbetical order
console.log("Stored in reverse alphabetical order:", PlaceToVisit.slice().sort().reverse());