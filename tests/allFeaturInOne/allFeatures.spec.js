import { test, expect } from "@playwright/test";

test.describe("All feature are included", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
  });

  //Handle Radio Button

  test("handle Radio Button", async ({ page }) => {
    await page.locator('//input[@type="radio" and @value="radio3" ]').check();
    await expect(
      page.locator('//input[@type="radio" and @value="radio3" ]')
    ).toBeChecked();
  });

  //handle Suggestion Example
  test("handle input suggestion ", async ({ page }) => {
    await page.getByPlaceholder("Type to Select Countries").fill("Ind");

    //await for the selector to display on the screen
    await page.waitForSelector('//ul[@id="ui-id-1"]//li');

    //capture all the dropdown country list using $$
    const countryOptions = await page.$$("//ul[@id='ui-id-1']//li");

    //then iterate over the countryOptions to get each countries
    for (let countries of countryOptions) {
      //get the all country text
      let countryText = await countries.textContent();
      console.log(countryText);
      if (countryText === "India") {
        await countries.click();
        break;
      }
    }
    await page.waitForTimeout(5000);
  });

  test("handle auto suggestion ", async ({ page }) => {
    await page.goto("https://www.google.com/");

    await page.locator("//textarea[@class='gLFyf']").fill("Sac");

    await page.waitForSelector('//ul[@class="G43f7e"]//li');

    const listOption = await page.$$('//ul[@class="G43f7e"]//li');

    for (let options of listOption) {
      let optiontext = await options.textContent();
      if (optiontext.includes("Sachin")) {
        await options.click();
        break;
      }
    }
    await page.waitForTimeout(5000);
  });

  //Handle Drop dropdown
  test("handle DropDown", async ({ page }) => {
    await page.selectOption("#dropdown-class-example", "Option1");
    await expect(page.locator("#dropdown-class-example")).toBeVisible();
    await page.waitForTimeout(5000);
  });

  //handle CheckBox

  test("handle CheckBox", async ({ page }) => {
    await page.locator("#checkBoxOption2").check();
    await expect(page.locator("#checkBoxOption2")).toBeChecked();
  });

  // handle Open multiple window
  test("handle switch window", async ({ context, page }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("button", { name: "Open Window" }).click(),
    ]);

    await newPage.waitForLoadState("networkidle");
    await expect(
      newPage.getByRole("link", { name: "Access all our Courses" })
    ).toBeVisible();
  });

  //Handle Switch Switch Tab Example

  test("handle Switch Tab Example", async ({ context, page }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      page.getByRole("link", { name: "Open Tab" }).click(),
    ]);

    await newPage.waitForLoadState("networkidle");
    await expect(newPage).toHaveURL(/qaclickacademy/);
  });
});
