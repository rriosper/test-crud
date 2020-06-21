import { strPath } from "ramdu";

import values from "./values";

export const getThemeNode = (key) => strPath(key, values);
