export interface User {
  name: string;
  age: number;
}

export interface User2 {
  id: number;
  name: string;
  username: string;
  email: string;
  website: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}
export interface JsonPlaceHolderUser extends User2 {
  address: Address;
  website: string;
  company: Company;
}
