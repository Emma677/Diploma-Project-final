// import Firebase from "./firebaseConfig";
import firebase from 'firebase';

export const AddUser = async (name,email,image,uid) => {
    try{
        return await firebase.database().ref(`users/${uid}`)
        .set({
            name: name,
            email: email,
            image: image,
            uuid: uid
        })
    }catch(error){
        return error;
    }
}


// import database from '@react-native-firebase/database';

// export const reference = database().ref('users/' + uid );