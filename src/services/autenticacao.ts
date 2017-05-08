
import firebase from 'firebase';

export class AutenticacaoService {

   registra(email: string, senha: string) {

        return firebase.auth().createUserWithEmailAndPassword(email, senha);

    }

    signin(email: string, senha: string) {

        return firebase.auth().signInWithEmailAndPassword(email, senha);

    }

    logout() {
        firebase.auth().signOut();
    }

}