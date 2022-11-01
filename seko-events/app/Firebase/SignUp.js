import Firebase from "./firebaseConfig";

export const SignUp = async (email,password) => {
    try{
         return Firebase.auth().createUserWithEmailAndPassword(email,password)
    } catch(error){
        return error;
    }
}