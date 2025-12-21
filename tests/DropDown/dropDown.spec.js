import { test, expect } from "@playwright/test";

test("@smoke handle DropDown", async ({ page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  await page.selectOption("#dropdown-class-example", "option2");

  await expect(page.locator("#dropdown-class-example")).toHaveValue("option2");
  await page.screenshot({
    path: "screenshots/DropDown.png",
    fullPage: true,
  });
});
