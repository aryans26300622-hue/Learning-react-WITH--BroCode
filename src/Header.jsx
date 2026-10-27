// Header.jsx is the component that we are going to use in our App.jsx file. 
// It is a functional component that returns a header element with a title and a navigation menu. 
// The Header component is exported as the default export of the module, so it can be imported and used in other files.
function Header(){
    return(
        <header>
            <h1>My website</h1>
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <hr></hr>
        </header>
    );

}

export default Header