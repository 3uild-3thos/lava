import { readFileSync, writeFileSync, unlinkSync } from "fs";

const dirName = "./lava-core/pkg/";

const content = readFileSync(dirName + "package.json");

const packageJSON = JSON.parse(String(content));
packageJSON["type"] = "module";

writeFileSync(dirName + "package.json", JSON.stringify(packageJSON));