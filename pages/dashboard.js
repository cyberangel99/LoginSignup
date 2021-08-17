import React from 'react';
import { Button } from 'react-bootstrap';
import firebase from '../utils/firebase';
import { useRouter } from 'next/router';
//check to see of token is removed when signing out
export default function Dashboard() {
  //Signout
  const router = useRouter();
  const signout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        router.push('/');
      });
  };
  return (
    <section className="dashboard">
      <h1 className="loginTitle">You successfully signed into Readaway!</h1>
      <Button className="signout" onClick={() => signout()}>
        signout
      </Button>
    </section>
  );
}
