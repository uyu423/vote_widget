var request = require("request");
var baseUrl = "http://localhost:4000/";

describe("AccountController.login Test", function() {
	describe("POST /api/account/login", function() {
		it("returns status code 200", function() {
			request.post({
				url : baseUrl + "api/account/login",
				form : {
					email : "foo@bar.com"
				}
			}, function(err, res, body) {
				expect(res.statusCode).toBe(200);
				done();
			});
		});
		it("returns email in body", function() {
			request.post({
				url : baseUrl + "api/account/login",
				form : {
					email : "foo@bar.com"
				}
			}, function(err, res, body) {
				expect(body.data.row.email).toEqual("foo@bar.com");
				done();
			});
		});
		it("returns status code 401 (invaild email type)", function() {
			request.post({
				url : baseUrl + "api/account/login",
				form : {
					email : "foo@bar"
				}
			}, function(err, res, body) {
				expect(res.statusCode).toBe(401);
				done();
			});
		});
		it("returns status code 401 (empty email type)", function() {
			request.post({
				url : baseUrl + "api/account/login",
				form : { }
			}, function(err, res, body) {
				expect(res.statusCode).toBe(401);
				done();
			});
		});
		it("returns status code 401 (not exist email)", function() {
			request.post({
				url : baseUrl + "api/account/login",
				form : { 
					email : "not@exist.email"
				}
			}, function(err, res, body) {
				expect(res.statusCode).toBe(401);
				done();
			});
		});
	});
});
