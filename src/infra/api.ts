export const postUser = async (userData: { firebase_id: string; bio: string; username: string; nickname: string; email: string }) => {
  try {
    const response = await fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error('ユーザーの作成に失敗しました。');
    }

    const createdUser = await response.json();
    return createdUser;
  } catch (error) {
    console.error(error);
    throw new Error('ユーザーの作成に失敗しました。');
  }
};

export const getUser = async (username: string) => {
  try {
    const response = await fetch(`http://localhost:3000/${username}`);
    if (!response.ok) {
      throw new Error('ユーザーの取得に失敗しました。');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error(error);
    throw new Error('ユーザーの取得に失敗しました。');
  }
};