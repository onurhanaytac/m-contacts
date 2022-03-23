/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import ContactsDAL from "./contacts.dal";
import { Response } from "./contacts.type";

export default class ContactsService {
  contactsDAL: ContactsDAL;

  constructor(_contactsDAL: ContactsDAL) {
    this.contactsDAL = _contactsDAL;
  }

  async getContacts(): Promise<Response> {
    return this.contactsDAL
      .getContacts()
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getContactsWithSearchText(params: {
    searchText: string;
    userId: string | number;
  }): Promise<Response> {
    return this.contactsDAL
      .getContactsWithSearchText(params)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getContactById(payload: any): Promise<Response> {
    return this.contactsDAL
      .getContactById(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async createContact(payload: any): Promise<Response> {
    return this.contactsDAL
      .createContact(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async updateContact(payload: any): Promise<Response> {
    return this.contactsDAL
      .updateContact(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async deleteContactById(payload: any): Promise<Response> {
    return this.contactsDAL
      .deleteContactById(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }

  async getContactsByUserId(payload: any): Promise<Response> {
    return await this.contactsDAL
      .getContactsByUserId(payload)
      .then((data) => {
        return { data, error: undefined };
      })
      .catch((error) => {
        return { data: null, error };
      });
  }
}
