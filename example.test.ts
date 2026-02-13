import { expect, test } from "vitest";

test("test common matcher", () => {
  const name = "vitest";
  expect(name).toBe("vitest");
});

test("test to be true or false", () => {
  expect(1).toBeTruthy();
  expect(0).toBeFalsy();
});

test("test number", () => {
  expect(4).toBeGreaterThan(3);
  expect(3).toBeLessThan(4);
});

test("test object", () => {
  expect({ a: 1 }).toEqual({ a: 1 });
});
