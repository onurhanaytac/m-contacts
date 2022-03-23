/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Model } from "sequelize";

interface UserAttr {
  id: string;
  email: string;
  password: string;
}

const User = (sequelize: any, DataTypes: any) => {
  class User extends Model<UserAttr> implements UserAttr {
    id!: string;
    email!: string;
    password!: string;
    static associate({ contact }: any) {
      User.hasMany(contact, {
        foreignKey: "userId",
        onDelete: "cascade"
      });
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          isEmail: true
        },
        unique: true
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      sequelize,
      modelName: "user"
    }
  );
  return User;
};

export default User;
