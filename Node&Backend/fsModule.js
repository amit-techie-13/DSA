// fileExplorer.js
const fs = require("fs");
const path = require("path");

const command = process.argv[2];      // command name (list, view, create, delete)
const fileName = process.argv[3];     // file name (if needed)
const input = process.argv[4];        // text input (for create/append)

switch (command) {
  case "list":
    fs.readdir(".", (err, files) => {
      if (err) return console.error("Error reading directory:", err);
      console.log("Files in current directory:");
      files.forEach(f => console.log("📄", f));
    });
    break;

  case "view":
    if (!fileName) return console.error("❌ Please provide a file name.");
    fs.readFile(path.join(__dirname, fileName), "utf8", (err, data) => {
      if (err) return console.error("Error reading file:", err);
      console.log("File contents:\n", data);
    });
    break;

  case "create":
    if (!fileName || !input) return console.error("❌ Usage: node fileExplorer.js create <fileName> <text>");
    fs.writeFile(path.join(__dirname, fileName), input, (err) => {
      if (err) return console.error("Error creating file:", err);
      console.log(`✅ File '${fileName}' created with content: ${input}`);
    });
    break;

  case "delete":
    if (!fileName) return console.error("❌ Please provide a file name.");
    fs.unlink(path.join(__dirname, fileName), (err) => {
      if (err) return console.error("Error deleting file:", err);
      console.log(`🗑️ File '${fileName}' deleted.`);
    });
    break;

  default:
    console.log("Usage:");
    console.log("  node fileExplorer.js list");
    console.log("  node fileExplorer.js view <fileName>");
    console.log("  node fileExplorer.js create <fileName> <text>");
    console.log("  node fileExplorer.js delete <fileName>");
}
