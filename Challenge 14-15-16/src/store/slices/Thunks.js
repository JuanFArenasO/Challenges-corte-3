import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/config";
import { register } from "./AuthSlice";

export const registerAuth = (email, password) => {
    return async ( dispatch ) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        if (response) {
            await updateProfile( auth.currentUser, {
                displayName: 'Juan',
                photoURL: ''
            });

            const { email } = response.user;
            dispatch( register( {email} ) );
        } else {
            throw new Error("Login Fallido");
        }
    }
}