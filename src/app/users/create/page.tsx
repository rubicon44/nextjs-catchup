'use client';

import { FC, useState } from 'react';
import { postUser } from '../../../infra/api';

const UserCreate: FC = () => {
  const [firebaseId, setFirebaseId] = useState('');
  const [bio, setBio] = useState('');
  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const userData = {
        firebase_id: firebaseId,
        bio,
        username,
        nickname,
        email,
      };
      const createdUser = await postUser(userData);
      console.log('新しいユーザーが作成されました:', createdUser);
      setFirebaseId('');
      setBio('');
      setUsername('');
      setNickname('');
      setEmail('');
    } catch (error) {
      console.error('ユーザーの作成に失敗しました:', error);
    }
  };

  return (
    <div>
      <h1>User Create</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firebase_id">Firebase Id:</label>
          <input
            type="text"
            id="firebase_id"
            value={firebaseId}
            onChange={(e) => setFirebaseId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="bio">Bio:</label>
          <input
            type="text"
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <input
            type="text"
            id="nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default UserCreate;
