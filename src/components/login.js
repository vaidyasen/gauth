import { GoogleLogin } from 'react-google-login';

const clientId = "246111570105-kmldrfvpkn5i08vil96arof76a99260c.apps.googleusercontent.com";
// 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


const Login = () => {

    const onSuccess =  (res) => {
        console.log("Login Successful:) Current User: ", res.profileObj);
    }
    
    const onFailure =  (res) => {
        console.log("Login Failed! res:", res.profileObj);
    }

    return(
        <div id = "signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;