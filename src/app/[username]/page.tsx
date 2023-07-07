'use client';

import { FC } from 'react';
import { useUser } from '../hooks/useUser';

const UserPage: FC = () => {
  const user = useUser();

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>{user.nickname}</h1>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default UserPage;
