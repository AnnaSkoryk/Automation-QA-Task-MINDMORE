export interface User {
  username: string;
  password: string;
}

export interface Users {
  standardUser: User;
  lockedOutUser: User;
  invalidUser: User;
}

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  postalCode: string;
}