// Question 1

const cat = {
    complain : function (){
        console.log("Meow!");
    }
};

// Question 2

var heading = document.querySelector("h3");

heading.innerHTML = "Updated Heading";



// Question 3

heading.style.fontSize = "2em";


// Question 4
S
heading.className = "subHeading";


// Question 5

// grabs all paragraph elements and puts them into array
const paragraphs = document.querySelectorAll("p");

// looping through each element in array
for (var i = 0; i < paragraphs.length; i++){
    // applying style to currently selected element in array
    paragraphs[i].style.color = "red";
}


// Question 6

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>" + "New paragraph" + "</p>";

resultsContainer.style.backgroundcolor = "yellow";


// Question 7 

function logName(list) {
    //looping through each object in passed list
    for (var i = 0; i < list.length; i++){
        //logging name attribute of currently selected object in list
        console.log(list[i].name);
    }
}

//provided cats array
const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];

//calling logName function using supplied array
logName(cats);


// Question 8

function createCats(cats){
    //declaration of html 
    let html = "";
    // looping through each object in cats
    for(var i = 0; i < cats.length; i++){
        // checking if current cat object has an age 
        if(cats[i].age !== null){
            //adding current object properties to html string
            html = html + "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>" + cats[i].age + "</p>" + "</div>";
        } else {
            //adding current object properties to html string
            html = html + "<div>" + "<h5>" + cats[i].name + "</h5>" + "<p>" + "Age Unknown" + "</p>" + "</div>";
        }
    }
    return html;
}

// grabing div with class of cat container
var catContainer = document.querySelector(".cat-container");
// calling createCats function using provided cats array from question 6 and assinging it to div with class of cat-container
catContainer.innerHTML = createCats(cats);