/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "./users.type";
import db from "../../database";

export default class UsersDAL {
  async getUsers(): Promise<Response> {
    return await db.user.findAll({});
  }

  async getUserByEmailAndPassword({ email, password }: any): Promise<Response> {
    return await db.user.findOne({ where: { email, password } });
  }

  async getUserById({ id }: any): Promise<Response> {
    return await db.user.findOne({ where: { id } });
  }

  async createUser(payload: any): Promise<Response> {
    return await db.user.create(payload);
  }

  async updateUser({ id, email, password }: any): Promise<Response> {
    return await db.user.update({ email, password }, { where: { id } });
  }

  async deleteUserById({ id }: any): Promise<Response> {
    return await db.user.destroy({ where: { id } });
  }

  async getUserWithContacts(payload: any): Promise<Response> {
    const result = await db.user.findAll({
      where: payload,
      include: [
        {
          model: db.contact,
          as: "contacts",
          include: [{ model: db.phoneNumber, as: "phoneNumbers" }]
        }
      ]
    });

    return result;
  }
}
