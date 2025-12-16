// import { test, expect } from "@playwright/test";
// import fs from "fs";
// import path from "path";

// test("handle Download file", async ({ page }) => {
//   const downloadPath = "./download";

//   // Create folder if not exists
//   if (!fs.existsSync(downloadPath)) {
//     fs.mkdirSync(downloadPath);
//   }

//   // Navigate with extended timeout
//   await page.goto("https://demoqa.com/upload-download", {
//     waitUntil: "load",
//     timeout: 60000,
//   });

//   // Wait for download event
//   const downloadPromise = page.waitForEvent("download");

//   //click on the download link
//   await page.getByRole("link", { name: "Download" }).click();

//   // Wait for the actual download
//   const download = await downloadPromise;

//   const fileName = download.suggestedFilename();
//   const filePath = path.join(downloadPath, fileName);

//   // Save the file
//   await download.saveAs(filePath);

//   // Validate file exists
//   expect(fs.existsSync(filePath)).toBeTruthy();

//   console.log("File downloaded and exists at:", filePath);
// });

// Practice 2

import { test, expect } from "@playwright/test";
import fs from "fs";
import path from "path";

test("handle download", async ({ page }) => {
  const downloadPath = "./downloadss";

  if (!fs.existsSync(downloadPath)) {
    fs.mkdirSync(downloadPath);
  }

  //Navigate the url
  await page.goto("https://demoqa.com/upload-download", {
    waitUntil: "load",
    timeout: "60000",
  });

  //wait for download event

  const downloadPromise = page.waitForEvent("download");

  await page.getByRole("link", { name: "Download" }).click();

  //actual download
  const download = await downloadPath;
});
