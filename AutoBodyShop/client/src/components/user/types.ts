export interface User {
  username: string;
  password: string;
}

export interface NewUser extends User {
  id: string;
}
