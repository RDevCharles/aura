import { useState } from 'react';
import * as usersService from '../utils/users-service';
const Form = (props) => {

    const [formState, setFormState] = useState({});

    const handleOnchange = (e) => {
        e.preventDefault();
        setFormState({ ...formState, [e.target.name]: e.target.value })
    }

    const handleOnSubmit = async (e) => {
        try {
            e.preventDefault();
            let user = await usersService.login(formState);
            console.log(user);
            props.setUser(user);
        //setUser(user);
        } catch (err) {
            // set actual error 
            console.warn(err.message);
        }
        
    }

   
    return (
        <div style={{display:"flex", flexDirection:"column", width:"25vw"}} class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>

        
            <form class="mt-8 space-y-6" onSubmit={handleOnSubmit}>
            <div class="-space-y-px rounded-md shadow-sm">
            <input class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" onChange={handleOnchange} type="text" name="email" placeholder="email"></input>
            <input class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" onChange={handleOnchange} type="password" name="password" placeholder="password"></input>
            </div>
            {/* <input onChange={handleOnchange} type="text" name="confirm" placeholder="password"></input> */}
            <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" type='submit' >login</button>
            <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => {
                props.setNewUser(true);
            }} >Signup</button>
            
            </form>
            </div>
    )
}
export default Form;