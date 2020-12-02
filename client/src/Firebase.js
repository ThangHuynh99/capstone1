import firebase from 'firebase';
const settings = { timestampsInSnapshots: true };
const config = {
    projectId: 'chatdemo-4939f',
    apiKey: 'AIzaSyB-Iu6leWu8YIq5RZNXx_dExEsuDpaW-MQ',
    databaseURL: 'https://chatdemo-4939f.firebaseio.com'
};
firebase.initializeApp(config);
firebase.firestore().settings(settings);
export const auth = firebase.auth;
export const db = firebase.database();

export default firebase;