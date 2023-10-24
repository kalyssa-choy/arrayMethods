//an array
const array = [];

//adds a new element to the array
function push(newElement){
    array[array.length] = newElement;
}

//removes the last element from the array
function pop(){
    var newArray = [];
    for(var i = 0; i < array.length - 1; i++){
        newArray[i] = array[i];
    }
    return newArray;
}

//puts the array content into a string separated by commas
function toString(){
    var theString = "";
    for (var i = 0; i < array.length; i++){
        if (i === array.length - 1){
            theString = theString + array[i];
        }
        else{
            theString = theString + array[i] + ", "; 
        }
        
    }
    return theString;
}

//puts the array content into a string separated by user characters
function join(separator){
    var theJoin = "";
    for (var i = 0; i < array.length; i++){
        if (i === array.length - 1){
            theJoin = theJoin + array[i] + separator
        }
        else{
            theJoin = theJoin + array[i] + separator + " "; 
        }
        
    }
    return theJoin;
}

//puts two array's content together to make a new array
function concat(otherArray){
    var newArray;
    for (var i = 0; i < array.length; i++){
        newArray[i] = array[i];
    }
    for (var i = 0; i < otherArray.length; i++){
        newArray [i + array.length] = otherArray[i];
    }
    return newArray;
}

//testing push function
push(43);
console.log(array);

//testing pop function
console.log(pop());

//testing toString function
console.log(toString());

//testing join function
console.log(join("/"));

//testing the concat function
var testArray = [7, 69, 70];
console.log(array.concat(testArray));