import test from "node:test";
import assert from "node:assert/strict";

import { findTree } from "./trees";

const mockState = () => [
  {
    uuid: "1234",
    address: "704 Shift Street",
    completed: false,
  },
  {
    uuid: "5678",
    address: "49 26th Street",
    completed: true,
  },
  {
    uuid: "9123",
    address: "1222 Orange Avenue",
    completed: false,
  },
];

test("findTree", () => {
  const trees = mockState();
  const treeId = "5678";

  const result = findTree(trees, treeId);

  assert.equal(result, {
    uuid: "5678",
    address: "49 26th Street",
    completed: true,
  });
});
