function Student(props){
    return(
        <div>
            <p>Name: {props.name}</p>
            <p>Age : {props.age}</p>
            <p>IsStudent: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    )
}
export default Student

// as we know props is a javascipt object, an object has key,value pairs in them .
// So here we are using dot notation, to acsess the 'name' property of the object named 'props',
// first to do javascript inside the return statement we need to use curly braces , inside it we write the name of the object which is props and hen dot(.) and the name of the property(liek name) whci is stored in the object props
// this will provide us with the value of the propery name, which we wanted to use in our code

// Abhi yaha pe app.jsx file mai jab Student component ko use kiya toh
// kuch key-value pair bhi send huey jo yaha pe present function ke argument mai jake store ho jate hai
// jiski vajha se woh argument abh ek object ki tarha behave karega, here argumemt ka naam props hai toh uske andar jake name = "Tony Stark" ek key valyue pair ki tarha stare ho gaya hai,
// phir jo props object hai uski value ko acces karke hum function mai use karte hai aur function ke result ko vapis bhej dete hai to App.jsx
// For every new Student component , the key reamins same but the value changes and hence we get different values in the result in ou webpage.