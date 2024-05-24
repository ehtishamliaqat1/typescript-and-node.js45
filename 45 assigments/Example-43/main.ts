/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great()
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each 
array to show that you have one array of the original names and one array with the Great
added to each magician’s name.*/


const magicians: string[] = ['osama', 'khadim', 'ahmad', 'aslam'];


function show_magicians(names: string[]): void {
    names.forEach(name => console.log(name));
}


function make_great(names: string[]): string[] {
    let greatMagicians: string[] = [];
    for (let name of names) {
        greatMagicians.push(`the Great ${name}`);
    }
    return greatMagicians;
}


const greatMagicians = make_great([...magicians]);


console.log("Original magicians:");
show_magicians(magicians);

console.log("\nGreat magicians:");
show_magicians(greatMagicians);
