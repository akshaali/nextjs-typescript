import {
  addFunction,
  isNull,
  checkFalsy,
  checkForObject,
  fetchData,
} from "@utils";

test("adds 1 + 2 to equal 3", () => {
  expect(addFunction(1, 2)).toBe(3);
});

test("adds 1 + 2 to NOT equal 2", () => {
  expect(addFunction(1, 2)).not.toBe(2);
});

test("Should be null", () => {
  expect(isNull()).toBeNull();
});

test("should check for false", () => {
  expect(checkFalsy(false)).toBeFalsy();
});

test("return an object and checks", () => {
  expect(checkForObject("aksha", "ali")).toEqual({
    firstName: "aksha",
    lastName: "ali",
  });
});

//regex
test("test for regex", () => {
  expect("testing").not.toMatch(/I/);
});

//Array
test("test for regex", () => {
  const usernames = ["aksha", "ali"];
  expect(usernames).toContain("ali");
});

//Async functions - Promise
test("Test for checking async functions", () => {
  expect.assertions(1);
  return fetchData().then((data) => {
    expect(data.name).toBe("Leanne Graham");
  });
});

// Async functions - asyn-await
test("the fetch fails with an error", async () => {
  expect.assertions(0);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch("error");
  }
});

test("the data is peanut butter", async () => {
  await expect(fetchData()).resolves.toContain("name");
});

test("the fetch fails with an error", async () => {
  await expect(fetchData()).rejects.toMatch("error");
});
