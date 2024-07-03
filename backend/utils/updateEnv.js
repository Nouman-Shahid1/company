const fs = require("fs");
const path = require("path");
require("dotenv").config();

const updateEnv = (key, value) => {
  const envFilePath = path.resolve(__dirname, "../.env");
  const envFileContent = fs.readFileSync(envFilePath, "utf8");

  const newEnvFileContent = envFileContent
    .split("\n")
    .map((line) => {
      if (line.startsWith(`${key}=`)) {
        return `${key}=${value}`;
      }
      return line;
    })
    .join("\n");

  fs.writeFileSync(envFilePath, newEnvFileContent, "utf8");
};

module.exports = updateEnv;
