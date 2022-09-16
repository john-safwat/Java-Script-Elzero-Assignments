window.onload = function() {
    document.write("<h1>Elzero</h1>");
    document.querySelector("h1").style.color="blue";
    document.querySelector("h1").style.fontSize="80px";
    document.querySelector("h1").style.fontWeight="bold";
    document.querySelector("h1").style.textAlign="center";
    document.querySelector("h1").style.fontFamily="Arial";
}

console.log("%cElzero %cWeb %cSchool","color:red;font-size:40px","color:green;font-size:40px","background:blue;font-size:40px" );
console.groupCollapsed("Group 1");
    console.log("message One");
    console.log("message Two");
    console.groupCollapsed("Child Group");
        console.log("message one")
        console.log("message two")
        console.groupCollapsed("Grand Child Group");
            console.log("message one")
            console.log("message two")
        console.groupEnd();
    console.groupEnd();
console.groupEnd();
console.groupCollapsed("Group 2");
    console.log("Message One");
    console.log("Message Two");
console.groupEnd();

console.table(["Elzero" , "Ahmed" , "Sameh" , "Gamal" , "Aya"] );
