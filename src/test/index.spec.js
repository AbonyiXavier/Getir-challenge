import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import server from "../server";

chai.should();

chai.use(chaiHttp);

describe("Display Home page Route", () => {
  it("it should get the home page", async () => {
   const result = await chai
      .request(server)
      .get("/")
      expect(result.status).to.equal(200)
  });

  it("it should return 404 error not found for no existing routes", async () => {
    const result = await chai
      .request(server)
      .get("/abc_zyx")
      expect(result.status).to.equal(404)
  });
});
