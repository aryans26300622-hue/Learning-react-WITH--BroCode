import profilePic from "./assets/ProfilePicture.jpg"

function Card(){
    return(
        <div className="card">
            <img className= "card-img"src={profilePic} alt="THIS IS A PROFILE PICTURE"></img>
            <h2 className="card-title">Aryan</h2>
            <p className="card-text">I like to learn new things and read Manhwa.</p>
        </div>
    )
}

export default Card;

//With JSX we use className instead of class to define a class for an element. This is because class is a reserved keyword in JavaScript, and JSX is a syntax extension of JavaScript. So, to avoid confusion, we use className instead of class in JSX.