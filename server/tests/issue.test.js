const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server"); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe("Issues API", () => {
  // Sample issue for testing
  const sampleIssue = {
    title: "Test Issue",
    description: "This is a test issue",
  };

  it("should create a new issue", (done) => {
    chai
      .request(app)
      .post("/api/issues")
      .send(sampleIssue)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("id");
        expect(res.body.title).to.equal(sampleIssue.title);
        expect(res.body.description).to.equal(sampleIssue.description);
        done();
      });
  });

  it("should get all issues", (done) => {
    chai
      .request(app)
      .get("/api/issues")
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an("array");
        done();
      });
  });

  it("should update an issue", (done) => {
    chai
      .request(app)
      .get("/api/issues")
      .end((err, res) => {
        const issueId = res.body[0].id;

        chai
          .request(app)
          .put(`/api/issues/${issueId}`)
          .send({ title: "Updated Title", description: "Updated Description" })
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.title).to.equal("Updated Title");
            expect(res.body.description).to.equal("Updated Description");
            done();
          });
      });
  });

  it("should delete an issue", (done) => {
    chai
      .request(app)
      .get("/api/issues")
      .end((err, res) => {
        const issueId = res.body[0].id;

        chai
          .request(app)
          .delete(`/api/issues/${issueId}`)
          .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body.id).to.equal(issueId);
            done();
          });
      });
  });
});
