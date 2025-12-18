import { test, expect } from "@playwright/test";

test("handle alert confirmation ", async ({ page }) => {
  await page.goto("https://kitchen.applitools.com/ingredients/alert");

  page.on("dialog", async (d) => {
    expect(d.message()).toContain("Proceed with adding garlic?");
    await d.dismiss();
  });
  await page.getByRole("button", { name: "Trigger a Confirmation" }).click();

  await expect(page.getByText("No")).toBeVisible();
});
