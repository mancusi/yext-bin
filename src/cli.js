#!/usr/bin/env node
"use strict";

import { spawn } from "child_process";
import yext from "../index.js";

const input = process.argv.slice(2);
spawn(yext, input, { stdio: "inherit" }).on("exit", process.exit);
