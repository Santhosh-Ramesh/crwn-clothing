// import React,{useState,useEffect} from 'react';
// import './sign-in.styles.scss';


// import FormInput from '../form-input/form-input.component';

// import CustomButton from  '../custom-button/custom-button.component'

// // import { getAuth } from "firebase/auth";
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";




// function SignIn() {
   
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');


// useEffect(
//    ()=>{
//     const auth = getAuth();
//     auth.languageCode = 'it';
//    }
// );

//   const signWithGoogle = (auth)=>{
   
   
//     // provider.setCustomParameters({
//     //     'login_hint': 'user@example.com'
//     //   });
      
// signInWithPopup(auth)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//   });
//   }



//  const  handleSubmit = (e) => {
//     e.preventDefault();
//     // setState({ email: '', password: '' });
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
   
//   };


//   return(
//     <div className="sign-in">
//     <h2>I already have an account</h2>
//     <span>Sign in with your email and password</span>
//     <form onSubmit={handleSubmit}>
//       <FormInput
//         name="setEmail"
//         type="email"
//         handleChange={handleChange}
//         value={email}
//         label="Email"
//         required
//       />
//       <FormInput
//         name="setPassword"
//         type="password"
//         handleChange={handleChange}
//         value={password}
//         label="password"
//         required
//       />
//       <CustomButton type="submit"> Sign in</CustomButton>

//    <br/>
// <h1>new</h1>
      
//     </form>
   
//    {/* <>
//    {
//      verified ?  <CustomButton onClick={OnsignOut}> Sign  out</CustomButton> :  
//    }
//    </>


//    <>
//    extra sign out
//    <CustomButton onClick={OnsignOut}> Sign  out</CustomButton>
//    </> */}
// <CustomButton onClick={signWithGoogle()}> Sign in with Google</CustomButton>
   
//   </div>
//   );
// }

// export default SignIn;


import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {email,password} = this.state;
    try{
        await auth.signInWithEmailAndPassword(email,password)
        this.setState({email:'',password:''})
    }catch(err){
        console.log(err);
    }
    this.setState({ email: '', password: '' });
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;