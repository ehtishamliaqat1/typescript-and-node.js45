/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
called make_great() that modifies the array of magicians by adding the phrase the Great 
to each magician’s name. Call show_magicians() to see that the list has actually been 
modified.*/


const magicians: string[] = ['osama', 'Dilshad', 'kazim', 'naveed'];


function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}


function make_great(names: string[]): void {
    for (let i = 0; i < names.length; i++) {
        names[i] = `the Great ${names[i]}`;
    }
}


make_great(magicians);
show_magicians(magicians);
