'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Products', [{
      code: 'ip1',
      prodName: 'iphone1',
      prodPrice: 123,
      desc: '...',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      code: 'ip2',
      prodName: 'iphone2',
      prodPrice: 123,
      desc: '...',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      code: 'ip3',
      prodName: 'iphone3',
      prodPrice: 123,
      desc: '...',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
