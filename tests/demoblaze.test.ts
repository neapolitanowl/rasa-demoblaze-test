import { test, expect } from "@playwright/test";

test.describe("DemoBlaze UI tests", () => {
  test("Should be able to login", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Log in" }).click();
    await page.locator("#loginusername").fill("username");
    await page.locator("#loginpassword").fill("password");
    await page.getByRole("button", { name: "Log in" }).click();
    await expect(page.getByRole("link", { name: "PRODUCT STORE" })).toBeVisible();
  });

  test("Should be able to navigate through product categories", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Phones" }).click();
    await expect(page.getByText("Phones")).toBeVisible();
    await page.getByRole("link", { name: "Laptops" }).click();
    await expect(page.getByText("Laptops")).toBeVisible();
    await page.getByRole("link", { name: "Monitors" }).click();
    await expect(page.getByText("Monitors")).toBeVisible();
  });

  test("Should be able to add a product to the cart", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Samsung galaxy s6" }).click();
    await page.getByRole("link", { name: "Add to cart" }).click();
    await page.waitForTimeout(1000); // wait for alert to appear
    await page.on('dialog', dialog => dialog.accept());
    await page.goto("https://www.demoblaze.com/cart.html");
    await expect(page.getByText("Samsung galaxy s6")).toBeVisible();
  });

  test("Should be able to send a message to support team", async ({ page }) => {
    await page.goto("https://www.demoblaze.com/");
    await page.getByRole("link", { name: "Contact" }).click();
    await page.locator("#recipient-email").fill("something@email.com");
    await page.locator("#recipient-name").fill("John Doe");
    await page.locator("#message-text").fill("Why is my order taking so long to be delivered");
    await page.getByRole("button", { name: "Send message" }).click();
  });
});
