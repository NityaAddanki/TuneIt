
import * as AuthSession from 'expo-auth-session';
import * as SecureStore from 'expo-secure-store';


// spotify oauth 

const client_id = 'a37e482757564470a1b84b9fcb22ba07';
const redirect_uri = "http://127.0.0.1:8081";



const discovery = {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token'
}



export async function request_spotify_oauth() {

    console.log("Redirect URI:", redirect_uri);
    
    // create auth request
    const request = new AuthSession.AuthRequest({
        clientId: client_id,
        scopes: ['user-read-email', 'playlist-modify-public', 'playlist-modify-private'],
        redirectUri: redirect_uri,
        responseType: 'code',
        usePKCE: true,
    });

    // builds full authorization url from  information above
    await request.makeAuthUrlAsync(discovery);
    const result = await request.promptAsync(discovery);
   
    if (result.type === 'success') {
        console.log("Authorization code:", result.params.code);
        const tokenResponse = await AuthSession.exchangeCodeAsync(
            {
                clientId: client_id,
                redirectUri: redirect_uri,
                code: result.params.code,
                extraParams: {
                    code_verifier: request.codeVerifier!,
                }
            },
            discovery
        )

        const accessToken = tokenResponse.accessToken;
        console.log("Access Token: ", accessToken);

        await SecureStore.setItemAsync('spotify_token', accessToken);
        await SecureStore.setItemAsync('spotify_logged_in', 'true');

    } else {
        console.log("Auth failed or canceled:", result);
    }
}