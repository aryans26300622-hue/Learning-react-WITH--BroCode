//props = read-only properties that are shared between components
//         A parent component can send data to a child component.
//        <Component key=value />
import Student from './Students.jsx'

function App(){
 return(
  <>
  <Student name="Tony Stark" age={30} isStudent={true}/>  
  <Student name = "Thor" age={600} isStudent = {false}/>
  <Student name= "Scarlet johanson" age={45} isStudnet={false}/>
  </>
 )
}
// see now you can pass as many of the same component but with different set of values for the props object
export default App

{/* Now what we are doing here is that we are sending data to our student component, meaning stuent is going to be the child here and app.jsx is our parent component */}
// we will need to list key=value pais in side the <Student/> tag to send the data to our student component . For example here our key is name and the value associated to it is "Tony Stark"
// When we send information regarding key=value pair form parent to a child thay all get stored in our props object in the child component, to get the value associated with a key we write {props.NameOfTheKey} , this will give us the associated value with our key
// so kya ho raha  hai , it is like ki, jab hum <Student/> component ko call kar rahe into the app.jsx file, 
// agar uss same hum key-value  pair send/pass karte hai into the <Student name="Tony Stark" age={26} etc./> , 
// toh jitne bhi key-value pairs hote hai woh hamare props(koi aur naam bhi ho sakta hai) naam ke ek object mai jake store ho jate hai , jinko phir hum student component mai access kar sakte hai using javascript dot notation.


// props sirf ek zariya hai for pass karne ke liye key-value iformation from ek component to another