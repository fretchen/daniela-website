/**
 * Moves all the content from build/client directory to the build directory
 * and removes leftover assets.json file.
 */

import fs from "fs";

const clientDirectory = "./build/client";
const assetsFile = "./build/assets.json";

const moveFiles = (source: string, destination: string) => {
  fs.readdirSync(source).forEach((file) => {
    fs.renameSync(`${source}/${file}`, `${destination}/${file}`);
  });
};

export function cleanVike() {
  if (fs.existsSync(assetsFile)) {
    fs.unlinkSync(assetsFile);
  }
}

moveFiles(clientDirectory, "./build");
cleanVike();
