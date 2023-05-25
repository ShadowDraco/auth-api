"use strict";

process.env.SECRET = "TEST_SECRET";

const supertest = require("supertest");
const { server } = require("../../src/server.js");
const { db } = require("../../src/models/index");

const permissions = require("../../src/auth/middleware/acl");
const basic = require("../../src/auth/middleware/basic");
const bearer = require("../../src/auth/middleware/bearer");

beforeAll(async () => {
  await db.sync();
});

afterAll(async () => {
  await db.drop();
});

let userData = {
  testUser: { username: "user", password: "password" },
  testAdmin: { username: "admin", password: "admin", role: "admin" },
};

let accessToken = null;

const request = supertest(server);

describe("Server", () => {
  test("runs", async () => {
    const response = await request.get("/");

    expect(response.status).toEqual(200);
    expect(response.text).toEqual("Home route!");
  });
});
