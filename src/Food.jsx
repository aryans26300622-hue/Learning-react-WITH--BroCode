function Food(){
    
    const food1 ="Orange";
    const food2 = "Banana";
    
    return (
        <ul>
            <li>Apple</li> {/*Here, if we are simplly writing Apple without the curly braces, to literally display the word "Apple" on the screen. */}
            <li>{food1}</li> {/*Here because we are in the return statement, if we simplly write food1 without the curly braces, it will literally display the word "food1" on the screen. But if we use curly braces, it will use javascript to display the value of the variable food1, which is "orange". */}
            <li>{food2.toUpperCase()}</li> {/*Here, we are using the toUpperCase() method to convert the value of the variable food2 to uppercase. If we simplly write food2.toUpperCase() without the curly braces, it will literally display the word "food2.toUpperCase()" on the screen. But if we use curly braces, it will use javascript to display the value of the variable food2 in uppercase, which is "BANANA". */}
        </ul>
    );
}

export default Food

// Normally if you use js code inside the return statement, you meed to use curly braces{}, but OUTSIDE of the return statement you don't need to use the curly braces. You can use the js code directly. 
// For example, if you want to use a VARIABLE inside the return statement, you need to use curly braces, but if you want to declare a variable outside of the return statement, you don't need to use curly braces.