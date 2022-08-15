const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Dog.create({ name: 'Pug' });
      });
    });

    //-----------TEST EXTRA MODEL----------------
    describe('height_min', () => {
      it('Throw an error if height_min is not a string', (done) =>{
        Dog.create({height_min: "5"})
        .then(() => done (new Error ('Must be a string')))
        .catch(() => done ());
      });
      it("Receives a string", () =>{
        Dog.create({height_min: "5"})
      })
    })
  });
});
