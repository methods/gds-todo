const request = require("supertest");
const app = require("./routes");

// describe("test the root path and receive Hello World reponse", () => {
// 	test("it should respond with the GET method", () => {
// 		return request(routes)
// 			.get("/")
// 			.then((response) => {
// 				expect(response.statusCode).toBe(200);
// 			});
// 	});
// });

describe("test the root path", () => {
	test("it should respond with the status code 200", (done) => {
		request(app)
			.get("/")
			.then((response) => {
				expect(response.statusCode).toBe(200);
				done();
			});
	});
});
