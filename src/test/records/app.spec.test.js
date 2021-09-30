import chai, { expect } from "chai";
import chatHttp from 'chai-http';
import server from "../../server";
import { payload } from "./test.data";

let assert = chai.assert;


chai.should();

chai.use(chatHttp);

const url = "/api/v1";


  describe("it should make a Post Request", () => {
  it("HTTP POST Request", async() => {
    const result = await chai.request(server)
      .post(`${url}/records`)
      .set('Accept', 'application/json')
      .send(payload)
      const status = result.status
      const { code, msg, records } = result.body
      assert.equal(status, 200)
      assert.equal(code, 0)
      assert.equal(msg, 'success')
      assert.exists(records)
  });
  });

