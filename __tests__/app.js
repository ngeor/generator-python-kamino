"use strict";
const path = require("path");
const assert = require("yeoman-assert");
const helpers = require("yeoman-test");

describe("generator-python-kamino:app", () => {
  beforeAll(() =>
    helpers
      .run(path.join(__dirname, "../generators/app"))
      .withPrompts({ name: "foo", description: "My new generator" })
  );

  it("creates files", () => {
    assert.file(["Pipfile"]);
  });
});
