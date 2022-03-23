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
          userId: {
            allowNull: boolean;
            type: any;
          };
          firstName: { type: any };
          lastName: { type: any };
          company: { type: any };
          createdAt: { allowNull: boolean; type: any };
          updatedAt: { allowNull: boolean; type: any };
        }
      ) => any;
    },
    Sequelize: { INTEGER: any; STRING: any; DATE: any }
  ) {
    await queryInterface.createTable("contacts", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      company: {
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
    await queryInterface.dropTable("contacts");
  }
};
