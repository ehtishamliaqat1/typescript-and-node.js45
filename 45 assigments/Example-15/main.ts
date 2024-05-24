/*Changing Guest List: You just heard that one of your guests can’t make the dinner,
so you need to send out a new set of invitations. You’ll have to think of someone else 
to invite.

* start with your program from exercise-14. add a print statement at the end of 
your program starting the name of the guest who can't make it.

* modify your list, replacing the name of the guest who can't make it with
the of the new person you are inviting.

*print a second set of invitation messages, one for each person who is still in your list.
*/

let guestlist : string[] = ["Sameer","sqlain","muzamil"];

//print the name who is not invited for dinner
let unableAttend : string  = guestlist.splice(0,1)[0];
console.log(`${unableAttend} not invited for dinner`)

//push
guestlist.push("ali");

//print a message
guestlist.forEach(guest =>{
    console.log(`Dear ${guest},you are invited to dinner`);
})
