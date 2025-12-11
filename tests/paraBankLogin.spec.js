import { test, expect } from "@playwright/test";

test("Login Feature", async ({ page }) => {
  await page.goto(
    "https://parabank.parasoft.com/parabank/index.htm;jsessionid=077F9C53D8154BC718E3FE46687BD538"
  );

  const username = page.getByRole("textbox").first();
  await username.fill("Gaurav");
  const password = page.getByRole("textbox").nth(1);
  await password.fill("Singh@123");
  await page.getByRole("input", { name: "Log In" });
});
