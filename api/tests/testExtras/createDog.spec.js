const {expect} = require("chai");
// var should = require("chai").should();
const session = require("supertest-session");
const app = require("../../src/app.js");

const agent = session(app);

describe('POST /dog', () =>{
    before(async () => {
        await agent.get("/dogs")
    })
    let dog
    beforeEach(()=>{
        dog={name:"NewDog", height_min: 4, height_max: 5, weight_min: 6, weight_max: 8,
        life_span: 10, temperaments:["Curious"]}
    })
    it("should create a dog", async () =>{
        await agent.post("/dogs").send(dog).expect(201)
    })
})