import { GithubAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';
import { auth, db} from './firebaseConfig';

const provider = new GithubAuthProvider();

export const GithubAuth = async () => {

    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;

        if (user) {
            await setDoc(doc(db, 'users', user.uid), {
                user_id: user.uid,
                name: user.displayName,
                email: user.email,
                avatar_url: user.photoURL,
                providerId: user.providerData[0].providerId

            },{ merge: true });
            return {
                uid: user.uid,
                name: user.displayName,
                email: user.email
            };
                  }
    } catch (err) {
        console.error("Error signing in with GitHub: ", err);
    }
};