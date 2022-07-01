const request = require("supertest");
const app = require("../server");
// const router = require('./routes')

// describe("test the root path and receive Hello World reponse", () => {
// 	test("it should respond with the GET method", () => {
// 		return request(routes)
// 			.get("/")
// 			.then((response) => {
// 				expect(response.statusCode).toBe(200);
// 			});
// 	});
// });

// describe("test the root path", () => {
// 	test("it should respond with the status code 200", (done) => {
// 		request(app)
// 			.get("/")
// 			.then((response) => {
// 				expect(response.statusCode).toBe(200);
// 				done();
// 			});
// 	});
// });

describe("Test GET /wellbeing-todo", () => {
	test("it should respond with 200 success", async () => {
		const response = await request(app)
			.get("/todo/wellbeing-todo")
			.expect("Content-Type", /html/)
			.expect(200);
		// expect(response.statusCode).toBe(200)
	});
});

describe("Test POST /steps", () => {
	test("it should respond with 200/201 success", async () => {
		const response = await request(app)
			.post("/todo/wellbeing-todo/steps")
			.expect(302); // 302 ? found
	});
	// test('it should catch invalid dates')
});

// testing the water-intake route to see file content returned
describe("Test GET /water-intake", () => {
	test("it should respond with a html file", async () => {
		const response = await request(app);
		response
			.get("/todo/wellbeing-todo/water-intake")
			.expect("Content-Type", /html/);
	});
});
