import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

// cleanup runs after each test case
afterEach(() => {
  cleanup();
});
