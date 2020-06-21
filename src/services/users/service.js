import { slice } from "ramda";

import users from "./users.json";

const loadChunk = (from = 0, count = 1) => slice(from, from + count, users);

const getNewConnectedId = () => users.length + 1;

const service = {
  loadChunk,
  getNewConnectedId,
};

export default service;
