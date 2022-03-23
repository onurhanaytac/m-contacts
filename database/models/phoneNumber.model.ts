/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from "sequelize";

interface PhoneNumberAttr {
  id: number;
  contactId: number;
  type: string;
  number: string;
}

export default (sequelize: any, DataTypes: any) => {
  class PhoneNumber extends Model<PhoneNumberAttr> implements PhoneNumberAttr {
    id!: number;
    contactId!: number;
    type!: string;
    number!: string;
    static associate({ contact }: any) {
      PhoneNumber.belongsTo(contact, {
        foreignKey: "contactId",
        foreignKeyConstraint: true
      });
    }
  }
  PhoneNumber.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      contactId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "contacts",
          key: "id"
        }
      },
      type: DataTypes.STRING,
      number: {
        type: DataTypes.STRING,
        validate: {
          isAlphanumeric: true,
          is: /\d{3}\d{3}\d{4}/
        }
      }
    },
    {
      sequelize,
      modelName: "phoneNumber"
    }
  );
  return PhoneNumber;
};
