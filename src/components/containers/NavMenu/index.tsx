'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

function AuthButton() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session?.user?.name} <br></br>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }
  return (
    <>
      Not signed in <br></br>
      <button onClick={() => signIn()}>SignIn</button>
    </>
  );
}
export default AuthButton;
