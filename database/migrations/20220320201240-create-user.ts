/* eslint-disable */

export default {
  async up(
    queryInterface: {
      createTable: (
        arg0: string,
        arg1: {
          id: {
            allowNull: boolean;
            autoIncrement: boolean;
            primaryKey: boolean;
            type: any;
          };
          email: { allowNull: boolean; type: any };
          password: { allowNull: boolean; type: any };
          createdAt: { allowNull: boolean; type: any };
          updatedAt: { allowNull: boolean; type: any };
        }
      ) => any;
    },
    Sequelize: { INTEGER: any; STRING: any; DATE: any }
  ) {
    await queryInterface.createTable("users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(
    queryInterface: { dropTable: (arg0: string) => any },
    Sequelize: any
  ) {
    await queryInterface.dropTable("users");
  }
};
