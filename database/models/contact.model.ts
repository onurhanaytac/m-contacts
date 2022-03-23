/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from "sequelize";

interface ContactAttr {
  id: number;
  userId: number;
  firstName?: string;
  lastName?: string;
  company?: string;
}

export default (sequelize: any, DataTypes: any) => {
  class Contact extends Model<ContactAttr> implements ContactAttr {
    id!: number;
    userId!: number;
    firstName?: string;
    lastName?: string;
    company?: string;
    static associate({ user, phoneNumber }: any) {
      Contact.belongsTo(user, {
        foreignKey: "userId",
        foreignKeyConstraint: true
      });
      Contact.hasMany(phoneNumber, {
        foreignKey: "contactId",
        onDelete: "cascade"
      });
    }
  }
  Contact.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      company: DataTypes.STRING
    },
    {
      sequelize,
      modelName: "contact"
    }
  );
  return Contact;
};
