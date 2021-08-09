import bin from "./bin.js";

try {
  await bin().run(["version"]);
  console.log("Successfully installed yext cli.");
} catch (e) {
  console.error("Failed to install the yext cli");
}
