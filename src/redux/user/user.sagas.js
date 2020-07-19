import { takeLatest,put,all,call } from 'redux-saga/effects';

import UserActionTypes from './user.types';

import {
    signInSuccess,
    signInFailure,
    signOutSuccess,
    signOutFailure,
    SignUpSuccess,
    SignUpFailure
} from './user.actions';

import {
    auth,
    googleProvider,
    createUserProfile,
    getCurrentUser
} from '../../firebase/firebase.utils';

function* getSnapshotFromUserAuth(userAuth,additionalData) {
    try {
        const userRef = yield call(
            createUserProfile,
            userAuth,
            additionalData
        );
        const userSnapshot = yield userRef.get();
        yield put(signInSuccess({ id: userSnapshot.id,...userSnapshot.data() }));
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithGoogle() {
    try {
        const { user } = yield auth.signInWithPopup(googleProvider);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signInWithEmail({ payload: { email,password } }) {
    try {
        const { user } = yield auth.signInWithEmailAndPassword(email,password);
        yield getSnapshotFromUserAuth(user);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* isUserAuthenticated() {
    try {
        const userAuth = yield getCurrentUser();
        if (!userAuth) return;
        yield getSnapshotFromUserAuth(userAuth);
    } catch (error) {
        yield put(signInFailure(error));
    }
}

function* signOut() {
    try {
        yield auth.signOut();
        yield put(signOutSuccess());
    } catch (error) {
        yield put(signOutFailure(error));
    }
}

function* SignUp({ payload: { email,password,displayName } }) {
    try {
        const { user } = yield auth.createUserWithEmailAndPassword(email,password);
        yield put(SignUpSuccess({ user,additionalData: { displayName } }));
    } catch (error) {
        yield put(SignUpFailure(error));
    }
}

function* SignInAfterSignUp({ payload: { user,additionalData } }) {
    yield getSnapshotFromUserAuth(user,additionalData);
}


function* onGoogleSignInStart() {
    yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START,signInWithGoogle);
}

function* onEmailSignInStart() {
    yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START,signInWithEmail);
}

function* onCheckUserSession() {
    yield takeLatest(UserActionTypes.CHECK_USER_SESSION,isUserAuthenticated);
}

function* onSignOutStart() {
    yield takeLatest(UserActionTypes.SIGN_OUT_START,signOut);
}

function* onSignUpStart() {
    yield takeLatest(UserActionTypes.SIGN_UP_START,SignUp)
}

function* onSignUpSuccess() {
    yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS,SignInAfterSignUp)
}

export function* userSagas() {
    yield all([
        call(onGoogleSignInStart),
        call(onEmailSignInStart),
        call(onCheckUserSession),
        call(onSignOutStart),
        call(onSignUpStart),
        call(onSignUpSuccess)
    ]);
}