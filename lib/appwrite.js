import { Account, Client, ID } from 'react-native-appwrite';

export const config = {

    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.agenciasombra.app',
    projectId: '671a91e100051133ed0e',
    databaseId: '671a93f6000bea2683c0',
    userCollectionId: '671a944300170e9e7962',
    videosCollectionId: '671a948600192cbb6dad',
    storageId: '671a964c000841095b55'

}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) 
    .setProject(config.projectId) 
    .setPlatform(config.platform) 
;

const account = new Account(client);

export const createUser = () =>{
    // Register User
account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

}

