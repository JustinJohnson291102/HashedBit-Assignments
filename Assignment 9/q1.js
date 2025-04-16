//Write a JavaScript function that declares a variable using let, const, and var. What is the difference in scope for each?

function Scopes() {
    // Declaring variables with var, let, and const

    var varVariable = "I am a var variable"; 
    let letVariable = "I am a let variable";
    const constVariable = "I am a const variable"; 

    console.log("Inside function:");
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 

    {
        var blockVar = "I am a block var variable"; 
        let blockLet = "I am a block let variable"; 
        const blockConst = "I am a block const variable"; 
        console.log(blockVar); 
        console.log(blockLet);
    }

    console.log("Outside block:");
    console.log(blockVar); 
}

// Call the function to see the behavior
Scopes();