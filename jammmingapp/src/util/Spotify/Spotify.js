let accessToken;
const clientID = "56ec434e1fac4a55a999d74597fb1077";
const redirectURI = "http://localhost:3000/";

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        const tokenInURL = window.location.href.match(/access_token=([^&]*)/);
        const expiryTime = window.location.href.match(/expires_in=([^&]*)/);

        if(tokenInURL && expiryTime) {
        //Setting access token and expire time variables
            accessToken = tokenInURL[1];
            const expiresIn = Number(expiryTime[1]);
        //Setting the function which will reset the access token when it expires
            window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
        //Clearing the url after the access token expires
            window.history.pushState("Access token", null, "/");
            return accessToken;
        }
        const redirect = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectURI}`;
        window.location = redirect;
    },
    search(term) {
        accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
            method: 'GET',
            headers: { Authorization: `bearer ${accessToken}` },
        }).then((response) => response.json())
        .then((jsonResponse) => {
            if(!jsonResponse) {
                console.log("Response Error");
            }
            //console.log(accessToken);
            console.log(jsonResponse);
            return jsonResponse.tracks.items.map((t) => ({
                id: t.id,
                name: t.name,
                artist: t.artists[0].name,
                album: t.album.name,
                uri: t.uri

            }));
        });
    }
};

export { Spotify };