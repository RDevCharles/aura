import { useState } from "react";
import LoginForm from "../components/forms/LoginForm";
import SignupForm from "../components/forms/SignupForm";

const UserAuth = (props) => {
  const [newUser, setNewUser] = useState(false);
  return (
    <div style={{display: 'flex', flexDirection:'row'}}>
     
      {newUser ? ( 
              <SignupForm
          setUser={props.setUser}
                  signUpWithEmail={props.signUpWithEmail}
                  signup={newUser}
                      setNewUser={setNewUser}
        />
      ) : (
        <LoginForm
            setUser={props.setUser}
            signUpWithEmail={props.signUpWithEmail}
            signup={newUser}
            setNewUser={setNewUser}
            user={props.user}
          
              />
      )}
      <img style={{width:"100vw", height:"100vh"}} src={require("../assets/images/controller.jpg")} alt="banner" />


    </div>
  );
};

export default UserAuth;
