//This a new COMPONENT that I am going to use to display footer in my app.
//The componnet can be exported from this filw into any other file for use. The component is a functional component that returns a footer element with a copyright notice and a link to the website's privacy policy. 
// The Footer component is exported as the default export of the module, so it can be imported and used in other files.

function Footer(){
        return(
            <footer> 
                <p>&copy; {new Date().getFullYear()} Your Website name.</p>
            </footer>
        );
}

export default Footer

// Inside our return statement we can use JavasScript expressions by using {JavaScript Code Here} curly braces.
// Why do we need to do this?
// We use curly braces {} in a React component's return statement because curly braces act as a delimiter that signals the JSX compiler to temporarily step out of "HTML mode" and evaluate the content as a JavaScript expression.

//• Without Braces: <h1>username</h1> will literally display the word "username" on the screen.
//• With Braces: <h1>{username}</h1> tells React to look for the JavaScript variable named username and render its value (e.g., "Alex").

//Because whatever is inside the curly braces must compute down to a single value, you can only put JavaScript expressions inside them, not statements.
//For example, loops (for) and conditional blocks (if/else) are statements, so writing {if (true) { ... }} will throw a syntax error. 
//If you need conditional logic or loops inside your JSX, you must use expressions like ternary operators (? :), logical short-circuits (&&), or array mappings (.map()