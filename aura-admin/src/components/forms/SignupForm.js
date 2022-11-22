import { useState } from 'react';
import { signup } from '../../utils/users-api';



const SignupForm = (props) => {
    const url = "http://localhost:3001/users/create-account/" 
    


    const [formState, setFormState] = useState({
        username: '',
        email: '',
        age: null,
       password: '',
        name: '',
    });

    const handleOnchange = (e) => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value, terms:true })
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let user = await signup(formState)
        props.setUser(user);
    }

    return (
        <form onSubmit={handleOnSubmit} style={{display:'flex', flexDirection:'column',justifyContent: 'center'}}>
            <input onChange={handleOnchange} type="text" name="username" placeholder="username"></input>
            <input onChange={handleOnchange} type="text" name="name" placeholder="name"></input>
            <input onChange={handleOnchange} type="text" name="email" placeholder="email"></input>
            <input onChange={handleOnchange} type="password" name="password" placeholder="password"></input>
            {/* <input onChange={handleOnchange} type="password" name="confirm_password" placeholder="password"></input> */}
            <input onChange={handleOnchange} type="number" name="age" placeholder="age"></input>
            {/* <input onChange={handleOnchange} type="text" name="street" placeholder="street address"></input>
            <input onChange={handleOnchange} type="text" name="aptNumber" placeholder="apartment number"></input>
            <input onChange={handleOnchange} type="text" name="zipCode" placeholder="zipcode"></input>
            <input onChange={handleOnchange} type="text" name="state" placeholder="state"></input>
            <input onChange={handleOnchange} type="text" name="city" placeholder="city"></input> */}
            <span><label>Agree to term</label><input type="checkbox" name="terms"></input></span>
            
            <button type="submit">Signup</button>
            <button onClick={() => {
                props.setNewUser(false);
            }} >login</button>
            
        </form>
    )
}
export default SignupForm;