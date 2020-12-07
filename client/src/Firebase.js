import firebase from 'firebase';
const settings = { timestampsInSnapshots: true };

const config = {
    projectId: 'chatrealtime-28e2c',
    apiKey: 'AIzaSyB-Iu6leWu8YIq5RZNXx_dExEsuDpaW-MQ',
    databaseURL: 'https://chatdemo-4939f.firebaseio.com'
};

const config1 = {
    projectId: 'chatdemo-4939f',
    apiKey: 'AIzaSyAkTXyrX-o8am7_w8NcGfqKtWzDeEm61Ig',
    databaseURL: 'https://chatrealtime-28e2c.firebaseio.com'
};

firebase.initializeApp(config);
firebase.firestore().settings(settings);
export const auth = firebase.auth;
export const db = firebase.database();

export default firebase;