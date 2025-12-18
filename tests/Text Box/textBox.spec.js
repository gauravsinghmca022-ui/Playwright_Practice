import { test, expect } from "@playwright/test";

test("Handle Text Box", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");

  await page.getByPlaceholder("Full Name").fill("Gaurav Singh");
  await page.getByPlaceholder("name@example.com").fill("gksky22@gmail.com");
  await page.getByPlaceholder("Current Address").fill("Bangalore");
  await page.locator("#permanentAddress").first().fill("raxaul");
  await page.getByRole("button", { name: "Submit" }).click();

  await expect(page.getByText("Bangalore")).toBeVisible();
});
