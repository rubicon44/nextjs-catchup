'use client';

import { FC } from 'react';
import { useUser } from '../../hooks/useUser';

const UserPage: FC = () => {
  const users = useUser();

  if (!users) {
    return <div>User not found.</div>;
  }

  if (!users || users.user === null) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{users.user.nickname}</h1>
      <p>Firebase Id: {users.user.firebase_id}</p>
      <p>bio: {users.user.bio}</p>
      <p>Username: {users.user.username}</p>
      <p>Email: {users.user.email}</p>
    </div>
  );
};

export default UserPage;
