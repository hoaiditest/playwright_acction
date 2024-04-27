// @ts-check
const { test, expect } = require("@playwright/test");

test("has title", async ({ page }) => {
  const url = "https://test.engibase.com/customer/";
  await page.goto(url);
  await page.locator("#email").fill("nesv025@learningift.com");
  await page.locator("#email").press("Tab");
  await page.getByLabel("パスワード").fill("Duywasd123");
  await page.getByRole("button", { name: "ログイン" }).click();
  await page.waitForTimeout(2000);
});
