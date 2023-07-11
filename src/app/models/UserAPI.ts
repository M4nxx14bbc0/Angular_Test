export interface UserApi {
  id: number;
  name: string;
  username: string;
  email: string;
  address: UserAddress;
  phone: string;
  website: string;
  company: UserCompany;
}

export interface UserAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoAddress;
}

export interface GeoAddress {
  lat: string;
  lng: string;
}

export interface UserCompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

