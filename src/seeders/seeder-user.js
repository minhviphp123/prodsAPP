'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users', [{
      username: 'EUS',
      password: '123',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'SUE',
      password: '234',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'UES',
      password: '321',
      role: 'user',
      createdAt: new Date(),
      updatedAt: new Date()
    }

    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
