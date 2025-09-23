
import * as AuthSession from 'expo-auth-session';
// spotify oauth 

const client_id = 'a37e482757564470a1b84b9fcb22ba07';
// const redirect_uri = 'https://auth.expo.io/@nityaadd/TuneIt';


const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token'
}


export async function request_spotify_oauth() {

    const redirectUri = AuthSession.makeRedirectUri({scheme: 'tuneit'});
    console.log("Redirect URI:", redirectUri);
    
    // create auth request
    const request = new AuthSession.AuthRequest({
        clientId: client_id,
        scopes: ['user-read-email', 'playlist-modify-public', 'playlist-modify-private'],
        redirectUri,
        responseType: 'code',
        usePKCE: true,
    });

    // builds full authorization url from  information above
    const result = await request.promptAsync(discovery);

    if (result.type === 'success') {

    }
    console.log("Auth result: ", result);
}