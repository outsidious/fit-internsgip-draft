import { Injectable } from '@angular/core';

export interface IUser {
  firstName: string,
  lastName: string,
  age: number,
  id: number,
}

@Injectable()
export class ServiceService {

  constructor() {
    console.log('service');
  }

  users: IUser[] = [
    {
      firstName: 'Иван',
      lastName: 'Иванов',
      age: 17,
      id: 1,
    },
    {
      firstName: 'Петр',
      lastName: 'Петров',
      age: 22,
      id: 2,
    },
    {
      firstName: 'Светлана',
      lastName: 'Сидорова',
      age: 77,
      id: 3,
    }
  ];

  delete(id: number) {
    this.users = this.users.filter(user => user.id != id);
  }
}
