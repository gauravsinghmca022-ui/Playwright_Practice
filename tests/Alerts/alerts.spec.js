import { test, expect } from "@playwright/test";

test("Handle alerts", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/ingredients/alert");

  page.on("dialog", async (d) => {
    expect(d.message()).toContain("Airfryers can make anything!");

    await d.accept();
  });

  await page.getByRole("button", { name: "Trigger an Alert" }).click();
});
