const { DATE } = require("sequelize");

module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'José Alexandre',
        email: 'trybe@trybe.com',
        password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyeWJlQHRyeWJlLmNvbSIsInBhc3N3b3JkIjoiam9zZVRyeWJlQDEyMyJ9.7Bdxgth2oFw7P37HHOg6cXjaTpatWCnj-ADiKHzdv6U',
        createdAt: new Date(), 
        updatedAt: new Date()
        // senha: joseTrybe@123
      },
      {
        name: 'Trybe dev',
        email: 'devTrybe@trybe.com',
        password: 'eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6IlRyeWJlIGRldiIsInBhc3N3b3JkIjoiZGV2VHJ5YmVAdHJ5YmUuY29tIn0.sEI97P6JBzLfrlStbk2rF6mI4V39ELSk2aWRz625jI0',
        createdAt: new Date(), 
        updatedAt: new Date()
        // senha: trybeDev@123
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};