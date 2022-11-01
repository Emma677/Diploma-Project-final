import { USER_STATE_CHANGE } from '../constants/index'
import firebase from 'firebase'



// export const  fetchUser = () => {
//     return((dispatch) => {
//         firebase.firestore()
//             .collection('users')
//             .doc(firebase.auth().currentUser.uid)
//             .get()
//             .then((snapshot) =>{
//                 if(snapshot.exists){
//                     console.log(snapshot.data())
//                     dispatch({type: USER_STATE_CHANGE, currentUser: snapshot.data()})
//                 }
//                 else{
//                     console.log('does not exist')
//                 }
//             })
//     })
// }

export const fetchUser = () => {
    firebase.firestore()
    .collection('users')
    .doc(firebase.auth().currentUser.uid)
    .onSnapshot((res) =>{
        if (res.exist){
            return dispatch({type: USER_STATE_CHANGE,
            currentUser: res.data(),
            loaded: true
            })
        }
    })
}



