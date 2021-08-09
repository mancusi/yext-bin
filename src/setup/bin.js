import BinWrapper from "bin-wrapper";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const yextVersion = "0.1";
const baseUrl = `https://yext-cli-pub.s3.amazonaws.com/cli`;

const directory = dirname(fileURLToPath(import.meta.url));
const dest = join(directory, "../../vendor");

export default () =>
  new BinWrapper()
    .src(`${baseUrl}/${yextVersion}/mac/yext`, "darwin")
    .src(`${baseUrl}/${yextVersion}/linux/yext`, "linux", "x64")
    .src(`${baseUrl}/${yextVersion}/windows/yext`, "windows", "x64")
    .dest(dest)
    .use(`yext`);
