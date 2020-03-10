//Task 1
//Access HTML element with id tag-line.

let tag = document.getElementById("tag-line");

//Access all h2 headings that belong to div with the class name bg-main-content.

let headings = document.querySelectorAll(".bg-main-content h2");

//Create the variable collect and assign it with content of tag-line.

let collect = `${tag.textContent}\n`;

//Loop through the array of headings and append the content of each heading to variable collect

for(let heading of headings){
    collect += `\t${heading.textContent}\n`; 
}

//After the loop, use alert to print collect

alert(collect);




//Task 2
//Access 13th div with class name box that belongs to div with the class name bg-main-content.

let bxs = document.querySelectorAll('.bg-main-content .box');

//You can name the variable when_to_launch.

let when_to_launch = bxs[12];

//Use property children to "scoop" in array all HTML elements that belong to that div.

let scoopedElements = when_to_launch.children;
//Create the variable collect and assign it with content of heading that belongs to gotten array.

let collect = `${scoopedElements[0].innerText}\n${scoopedElements[1].innerText}`

//Loop through the array starting with the second array element (the first one is heading and it is already assigned to variable collect) and append the content of array elements to variable collect.

console.log(collect);

//After the loop, use alert to print collect
alert(collect);




