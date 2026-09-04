import { expect, test } from "@playwright/test";

test.use({ viewport: { width: 375, height: 667 } });

test("hero section is fully visible and usable with no horizontal scrolling on a small screen", async ({
  page,
}) => {
  await page.goto("/");

  const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
  const viewportWidth = page.viewportSize()?.width ?? 375;
  expect(scrollWidth).toBeLessThanOrEqual(viewportWidth);

  const headline = page.getByRole("heading", { level: 1, name: "Wood-Fired Pizza, Delivered Hot" });
  const heroImage = page.getByRole("img", { name: "Wood-fired Margherita pizza fresh from the oven" });
  const orderButton = page.getByRole("button", { name: "Order Online Now" });
  const exploreButton = page.getByRole("button", { name: "Explore Full Menu" });

  for (const locator of [headline, heroImage, orderButton, exploreButton]) {
    await expect(locator).toBeVisible();
    const box = await locator.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(0);
    expect(box!.x + box!.width).toBeLessThanOrEqual(viewportWidth);
  }

  await orderButton.click();
});
