const array = [];

function push(newElement){
    array[array.length] = newElement;
}

function pop(){
    var newArray = [];
    for(var i = 0; i < array.length - 1; i++){
        newArray[i] = array[i];
    }
    return newArray;
}

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

push(43);
console.log(array);
console.log(pop());
console.log(toString());
console.log(join("/"));
var testArray = [7, 69, 70];
console.log(array.concat(testArray));