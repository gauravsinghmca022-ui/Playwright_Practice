import { test, expect } from "@playwright/test";
import * as XLSX from "xlsx";
import path from "path";

const userDataFile = path.join(__dirname, "../data/userData.xlsx");

test("Read Data from excel", async ({ page }) => {
  const workbook = XLSX.readFile(userDataFile);

//   at the sheet level
  const worksheet = workbook.Sheets["Sheet1"];

  //   convert xlsx to json
  const xlsxToJson = XLSX.utils.sheet_to_json(worksheet);
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").fill(`${xlsxToJson[0].username}`);
  await page.getByPlaceholder("Password").fill(`${xlsxToJson[0].passwprd}`);
  await page.getByRole("button", { name: " Login " }).click();
});
