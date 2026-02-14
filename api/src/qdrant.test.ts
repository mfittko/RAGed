import { describe, it, expect } from "vitest";
import { collectionName } from "./qdrant.js";

describe("collectionName", () => {
  it("returns the provided name when given", () => {
    expect(collectionName("my-collection")).toBe("my-collection");
  });

  it("returns the default collection when name is undefined", () => {
    expect(collectionName(undefined)).toBe("docs");
  });

  it("returns the default collection when name is empty string", () => {
    expect(collectionName("")).toBe("docs");
  });
});
