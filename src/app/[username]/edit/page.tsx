'use client';

import { FC, useState, useEffect } from 'react';
import { useUser } from '../../../hooks/useUser';

const UserEdit: FC = () => {
  const user = useUser();

  const [username, setUsername] = useState('');
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      setUsername(user.username);
      setNickname(user.nickname);
      setEmail(user.email);
    }
  }, [user]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // フォームのデータを送信する処理を実装する
    // 例: APIリクエストを行うなど
    if (username.trim() === '' || nickname.trim() === '' || email.trim() === '') {
      setErrorMessage('All fields are required.');
    } else {
      // ユーザー編集処理
      console.log('Form submitted:', { username, nickname, email });
      // フォーム送信後にフォームをリセットする
      setErrorMessage('');
    }
  };

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h1>User Edit</h1>
      <form onSubmit={handleSubmit}>
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
        {errorMessage && <div>{errorMessage}</div>}
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default UserEdit;
