import React, { useState, useEffect } from 'react';
import './sign-in.styles.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

// google sign in
import { onAuthStateChanged } from 'firebase/auth';
import { signInWithRedirect } from 'firebase/auth';
import { getAuth, getRedirectResult, GoogleAuthProvider } from 'firebase/auth';
import { signOut } from 'firebase/auth';

// class SignIn extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//       verified: false
//     };
//   }

//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({ email: '', password: '' });
//   };

//   handleChange = (e) => {
//     const { name, value } = e.target;
//     this.setState({
//       [name]: value,
//     });
//   };

//  signWithGoogle = () => {
//   const auth = getAuth();
//   this.setState({
//     verified: true
//   });
//     const provider = new GoogleAuthProvider();
//     signInWithRedirect(auth, provider);
//     getRedirectResult(auth)
//       .then((result) => {
//         // setVerified(true);
//         // This gives you a Google Access Token. You can use it to access Google APIs.
//         const credential = GoogleAuthProvider.credentialFromResult(result);
//         const token = credential.accessToken;

//         // The signed-in user info.
//         const user = result.user;
//         // console.log('ulla auth', auth);
//       })
//       .catch((error) => {
//         // Handle Errors here.
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // The email of the user's account used.
//         const email = error.email;
//         // The AuthCredential type that was used.
//         const credential = GoogleAuthProvider.credentialFromError(error);
//         // ...
//       });
//   };

//    OnsignOut = () => {
//     const auth = getAuth();
//     signOut(auth)
//       .then(() => {
//         this.setState({
//           verified: false
//         })
//         // Sign-out successful.
//         console.log('signout success pa');
//         // setVerified(false);
//       })
//       .catch((error) => {
//         // An error happened.
//         console.log('errorin signout', error);
//       });
//   };

//   render() {
//     return (
//       <div className="sign-in">
//         <h2>I already have an account</h2>
//         <span>Sign in with your email and password</span>
//         <form onSubmit={this.handleSubmit}>
//           <FormInput
//             name="email"
//             type="email"
//             handleChange={this.handleChange}
//             value={this.state.email}
//             label="Email"
//             required
//           />
//           <FormInput
//             name="password"
//             type="password"
//             handleChange={this.handleChange}
//             value={this.state.password}
//             label="password"
//             required
//           />
//           <CustomButton type="submit"> Sign in</CustomButton>

//        <br/>
// <h1>new</h1>

//         </form>

//        <>
//        {
//          this.verified ?  <CustomButton onClick={this.OnsignOut}> Sign  out</CustomButton> :  <CustomButton onClick={this.signWithGoogle}> Sign in with Google</CustomButton>
//        }
//        </>

//        <>
//        extra sign out
//        <CustomButton onClick={this.OnsignOut}> Sign  out</CustomButton>
//        </>

//       </div>
//     );
//   }
// }

// export default SignIn;

function SignIn1() {
  const auth = getAuth();
  const [verified, setVerified] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = () => {};

  const onSignup = () => {};

  const onEmail = (event) => {
    setEmail(event.target.value);
  };
  const onPassword = (event) => {
    setPassword(event.target.value);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log('success');
        console.log('username', user);
        setVerified(true);
        // ...
      } else {
        // User is signed out
        // console.log('fail');
        // ...
        setVerified(false);
      }
    });
  }, [verified]);

  const signWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
    getRedirectResult(auth)
      .then((result) => {
        setVerified(true);
        // This gives you a Google Access Token. You can use it to access Google APIs.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;
        // console.log('ulla auth', auth);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // setState({ email: '', password: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
  };

  const OnsignOut = () => {
    signOut(auth)
      .then(() => {
        setVerified(false);
        // Sign-out successful.
        console.log('signout success pa');
        // setVerified(false);
      })
      .catch((error) => {
        // An error happened.
        console.log('errorin signout', error);
      });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="setEmail"
          type="email"
          handleChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="setPassword"
          type="password"
          handleChange={handleChange}
          value={password}
          label="password"
          required
        />
        <CustomButton type="submit"> Sign in</CustomButton>

        <br />
        <h1>new</h1>
      </form>

      <>
        {verified ? (
          <CustomButton onClick={OnsignOut}> Sign out</CustomButton>
        ) : (
          <CustomButton onClick={signWithGoogle}>
            {' '}
            Sign in with Google
          </CustomButton>
        )}
      </>

      <>
        extra sign out
        <CustomButton onClick={OnsignOut}> Sign out</CustomButton>
      </>
    </div>
  );
}

export default SignIn1;
