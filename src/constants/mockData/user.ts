export type IUser = {
  id: string;
  email: string;
  name: string;
  age: number;
};

export const MOCK_CURRENT_USER_PROFILE: IUser = {
  id: 'ID_123123123',
  name: 'John Doe',
  age: 25,
  email: 'johndoe@gmail.com',
};
