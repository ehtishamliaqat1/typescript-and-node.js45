/*Magicians: Make a array of magician’s names. Pass the array to a function called
show_magicians(), which prints the name of each magician in the array.*/



const magicians: string[] = ['osama', 'Dilshad', 'kazim', 'naveed'];


function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}


show_magicians(magicians);
