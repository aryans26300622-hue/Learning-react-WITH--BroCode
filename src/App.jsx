import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from"./Food.jsx"
function App() {

    return(
      <>        {/*Since we are using multiple components in our App.jsx file, we need to wrap them in a React fragment. A React fragment is a way to group multiple elements without adding an extra node to the DOM. It is represented by the empty tags <> and </>. */}
      {/* <Footer/> */}
      <Header/> {/* You can either write the syntax of component like this or you can write it like this <Header></Header> */}
      <Food/>   {/* You can either write the syntax of component like this or you can write it like this <Food></Food> */}
      {/* <Food/>   Thee cool thing about React is that you can use the same component multiple times in your app. You can use the same component as many times as you want, and each time it will render a new instance of that component. */}
      <Footer/>
      </>
    )
}

export default App
// You can also rearrange these components howerver you like, like for example you can place the footer in the return statement bfore the Header and it will litterally cahange the order of the components in the DOM. The order of the components in the return statement determines the order in which they are rendered in the DOM.
//React is All about using components to build your app. Components are the building blocks of a React app. They are reusable pieces of code that can be used to build complex UIs.
// A component is a samll section of code that can include HTML, JavaScript.
//Your function will Return that code, and make it reusable. You can use that function in multiple places in your app, and it will render the same code each time. This is the power of components in React.