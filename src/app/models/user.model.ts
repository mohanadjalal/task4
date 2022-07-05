export interface userPreview {
  id: number;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  picture: string;
}

export interface userFull {
  id: number;
  title: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName: string;
  lastName: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: object;
}

export interface List<type> {
  data: Array<type>;
  total: number;
  page: number;
  limit: number;
}

export interface UserCreate {
  firstName: string;
  lastName: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
  picture?: string;
  title?: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
}

export interface UpdateUser {
  title?: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
  firstName?: string;
  lastName?: string;
  gender?: 'male' | 'female' | 'other';
  picture?: string;
}

export interface UserFormModel {
  firstName: string;
  lastName: string;
  email?: string;
  gender?: 'male' | 'female' | 'other';
  picture?: string;
  title?: 'mr' | 'ms' | 'mrs' | 'miss' | 'dr' | '';
}
