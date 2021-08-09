"use strict";
const bin = await import("./src/setup/bin.js");

export default bin.default(process.cwd()).path();
