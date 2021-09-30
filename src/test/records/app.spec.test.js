import chai, { expect } from "chai";
import chatHttp from 'chai-http';
import server from "../../server";
import { payload } from "./test.data";

let assert = chai.assert;


chai.should();

chai.use(chatHttp);

const url = "/api/v1";


  describe("it should make a Post Request", () => {
    it("HTTP POST Request", (done) => {
      chai
        .request(server)
        .post(`${url}/records`)
       .set('Accept', 'application/json')
       .send(payload)
        .end((err, result) => {
          const status = result.status
          const { code, msg, records } = result.body
          expect(status).to.equal(200)
          expect(code).to.equal(0)
          expect(msg).to.equal('success')
          expect(records).to.contain.property('key')
          expect(records).to.contain.property('createdAt')
          expect(records).to.contain.property('totalCount')
          done();
        })
    });
  // it("HTTP POST Request", async () => {
  //   const result = await chai.request(server)
  //     .post(`${url}/records`)
  //     .set('Accept', 'application/json')
  //     .send(payload)
  //     const status = result.status
  //     const { code, msg, records } = result.body
  //     expect(status).to.equal(200)
  //     expect(code).to.equal(0)
  //     expect(msg).to.equal('success')
  //     expect(records).to.contain.property('key')
  //     expect(records).to.contain.property('createdAt')
  //     expect(records).to.contain.property('totalCount')
  //     // assert.equal(status, 200)
  //     // assert.equal(code, 0)
  //     // assert.equal(msg, 'success')
  //     // assert.exists(records)
  // })
  });

