/**
 * Moves all the content from build/client directory to the build directory
 * and removes leftover server directory and assets.json file.
 */

import fs from "fs";
import path from "path";

const buildDir = "./build";
const clientDirectory = "./build/client";
const serverDirectory = "./build/server";
const assetsFile = "./build/assets.json";

function removeDir(dir: string) {
  if (fs.existsSync(dir)) {
    fs.rmSync(dir, { recursive: true });
  }
}

function copyRecursive(source: string, destination: string) {
  fs.readdirSync(source).forEach((file) => {
    const srcPath = path.join(source, file);
    const destPath = path.join(destination, file);
    if (fs.statSync(srcPath).isDirectory()) {
      if (!fs.existsSync(destPath)) {
        fs.mkdirSync(destPath, { recursive: true });
      }
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Remove server build and leftover assets
removeDir(serverDirectory);
if (fs.existsSync(assetsFile)) {
  fs.unlinkSync(assetsFile);
}

// Copy client files to build root
copyRecursive(clientDirectory, buildDir);

// Remove the now-empty client directory
removeDir(clientDirectory);
