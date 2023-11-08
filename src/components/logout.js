import { GoogleLogout } from 'react-google-login';

const clientId = "246111570105-kmldrfvpkn5i08vil96arof76a99260c.apps.googleusercontent.com";
// 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


const LogOut = () => {

    const onSuccess =  (res) => {
        console.log("Log out Successful");
    }

    return(
        <div id = "signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText={"LogOut"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default LogOut;