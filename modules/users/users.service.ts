/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import UsersDAL from "./users.dal";
import { Response } from "./users.type";

export default class UsersService {
  usersDAL: UsersDAL;

  constructor(_usersDAL: UsersDAL) {
    this.usersDAL = _usersDAL;
  }

  async getUsers(): Promise<Response> {
    return this.usersDAL
      .getUsers()
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getUserByEmailAndPassword(payload: any): Promise<Response> {
    return this.usersDAL
      .getUserByEmailAndPassword(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getUserById(payload: any): Promise<Response> {
    return this.usersDAL
      .getUserById(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async createUser(payload: any): Promise<Response> {
    return this.usersDAL
      .createUser(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async updateUser(payload: any): Promise<Response> {
    return this.usersDAL
      .updateUser(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async deleteUserById(payload: any): Promise<Response> {
    return this.usersDAL
      .deleteUserById(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getUserWithContacts(payload: any): Promise<Response> {
    return await this.usersDAL
      .getUserWithContacts(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }
}
