import { test, expect } from "@playwright/test";

test("@regression Handle Multiple tab", async ({ context, page }) => {
  await page.goto("https://rahulshettyacademy.com/AutomationPractice/");

  const [newPage] = await Promise.all([
    context.waitForEvent("page"),
    page.getByRole("button", { name: "Open Window" }).click(),
  ]);

  await newPage.waitForLoadState("networkidle");
  await expect(
    newPage.getByRole("link", { name: "Access all our Courses" })
  ).toBeVisible();
});
