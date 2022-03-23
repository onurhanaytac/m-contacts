/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from "./contacts.type";
import db from "../../database";
import { Op } from "sequelize";

export default class ContactsDAL {
  splitSearchText(searchText: string) {
    return searchText.split(" ").map((str) => {
      return {
        [Op.or]: [
          {
            firstName: { [Op.like]: `%${str}%` }
          },
          {
            lastName: { [Op.like]: `%${str}%` }
          },
          {
            company: { [Op.like]: `%${str}%` }
          },
          {
            "$phoneNumbers.number$": { [Op.like]: `%${str}%` }
          },
          {
            "$phoneNumbers.type$": { [Op.like]: `%${str}%` }
          }
        ]
      };
    });
  }

  async getContacts(): Promise<Response> {
    return await db.contact.findAll({
      include: [{ model: db.phoneNumber, as: "phoneNumbers" }]
    });
  }

  async getContactsWithSearchText({
    searchText,
    userId
  }: {
    searchText: string;
    userId: string | number;
  }): Promise<Response> {
    return await db.contact.findAll({
      include: [{ model: db.phoneNumber, as: "phoneNumbers" }],
      where: {
        userId: userId,
        [Op.and]: this.splitSearchText(searchText)
      }
    });
  }

  async getContactById({ id }: any): Promise<Response> {
    return await db.contact.findOne({
      include: [{ model: db.phoneNumber, as: "phoneNumbers" }],
      where: { id }
    });
  }

  async createContact(payload: any): Promise<Response> {
    return await db.contact.create(payload, {
      include: [{ model: db.phoneNumber, as: "phoneNumbers" }]
    });
  }

  async updateContact({
    id,
    firstName,
    lastName,
    company,
    phoneNumbers,
    userId
  }: any): Promise<Response> {
    return await db.contact.update(
      { firstName, lastName, company, phoneNumbers },
      { where: { id, userId } }
    );
  }

  async deleteContactById({ id }: any): Promise<Response> {
    return await db.contact.destroy({ where: { id } });
  }

  async getContactsByUserId({ userId }: any): Promise<Response> {
    const result = await db.contact.findAll({
      include: [{ model: db.phoneNumber, as: "phoneNumbers" }],
      where: { userId }
    });

    return result;
  }
}
