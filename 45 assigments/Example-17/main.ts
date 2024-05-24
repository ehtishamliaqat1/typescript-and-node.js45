/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in 
time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying 
that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them 
 know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know 
they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list 
to make sure you actually have an empty list at the end of your program.
*/

let guestslist : string[] = ["Sameer","Sqlain","Muzamil","Ali","Asad","Tanzeel"]

//print a message
console.log("Unfortunately! The new dinner table won't arrive so we can invite only two guest");

//remove guest from the list
while(guestslist.length > 2) {
      let removedguests : string | undefined = guestslist.pop();
      if (removedguests !== undefined) {
        console.log(`Sorry ${removedguests}, we can't invite you.`);
      }
}

/*print a message to each of the two people still on my list,
letting them know they are still invited*/
    guestslist.forEach(guest => {
    console.log(`Dear ${guest}, You are still invited for the dinner`);
    })

    //remove last two names from the list
    guestslist.splice(0,guestslist.length)

    //print updated empty list
    console.log("updated list of guest:", guestslist);