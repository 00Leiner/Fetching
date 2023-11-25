export interface User {
  _id?: string;
  username?: string;
  password?: string;
}
export interface Users {
  users: User[]; // Assuming there is a User type representing an individual user
}