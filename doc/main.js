const CLIENT_ID = '103880374360-vei3q9qe7l7rf97icvs7p0d8ptgeoq9o.apps.googleusercontent.com';

// Array of API discovery doc URLs for APIs used by the quickstart
      const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest"];

      // Authorization scopes required by the API. If using multiple scopes,
      // separated them with spaces.
      const SCOPES = 'https://www.googleapis.com/auth/youtube.readonly';

      const authorizeButton = document.getElementById('authorize-button');
      const signoutButton = document.getElementById('signout-button');

const content = document.getElementById('content');
const channelForm = document.getElementById('channel-form');
const channelInput = document.getElementById('channel-input');
const videoContainer = document.getElementById('video-container');
const defaultChannel = 'techguyweb';

//Load auth2 library
function handleClientLoad() {
	gapi.load('client:auth2', initClient);
}

function initClient() {
	gapi.client.init({
		discoveryDocs: DISCOVERY_DOCS,
		clientId: CLIENT_ID,
		scope: SCOPES

	}).then(() => {
		gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
		updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

		authorizeButton.onClick = handleAuthClick;
		signoutButton.onClick = handleSignoutClick;
	});
}

function updateSigninStatus(isSignedIn){
	if (isSignedIn){
		authorizeButton.style.display = 'none';
		signoutButton.style.display = 'block';
		content.style.display = 'block';
		videoContainer.style.display = 'block';
		getChannel(defaultChannel);
	} else {
		authorizeButton.style.display = 'block';
		signoutButton.style.display = 'none';
		content.style.display = 'none';
		videoContainer.style.display = 'none';
	}
}

function handleAuthClick(){
	gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick() {
	gapi.auth2.getAuthInstance().signOut();
}

function getChannel(channel) {
	console.log(channel);
}
