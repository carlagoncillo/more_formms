import React, { useState } from  'react';
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");  
    const [confirmPassword, setConfirmPassword] = useState("");

    const createUser = (e) => {
        e.preventDefault();
        if(firstName.length >= 2 && lastName >= 2 && email.length >= 5 && password.length >= 8 && confirmPassword == password){
        const newUser = { firstName, lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        }
    };

    const formMessage1 = () => {
        if( firstName.length < 2 && firstName.length !== 0) {
            return "*First Name must be atleast 2 characters."
        }
    };

    const formMessage2 = () => {
        if( lastName.length < 2 && lastName.length !== 0) {
            return "*Last Name must be atleast 2 characters."
        }
    };

    const formMessage3 = () => {
        if( email.length < 5 && email.length !== 0) {
            return "*Email must be atleast 5 characters."
        }
    };

    const formMessage4 = () => {
        if( password.length < 8 && password.length !== 0) {
            return "*Password must be atleast 8 characters."
        }
    };

    const formMessage5 = () => {
        if( confirmPassword !== password && confirmPassword.length !== 0) {
            return "*Passwords dont match."
        }
    };


    return(
        <form onSubmit={ createUser }>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setFirstName(e.target.value) } />
                <p>{formMessage1()}</p>
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setLastName(e.target.value) } />
                <p>{formMessage2()}</p>
            </div>
            <div>
                <label>Email: </label> 
                <input type="email" onChange={ (e) => setEmail(e.target.value) } />
                <p>{formMessage3()}</p>
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={ (e) => setPassword(e.target.value) } />
                <p>{formMessage4()}</p>
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={ (e) => setConfirmPassword(e.target.value) } />
                <p>{formMessage5()}</p>
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;