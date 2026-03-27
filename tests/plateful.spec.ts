import { test, expect } from "@playwright/test";

test.describe("Plateful Landing Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test.describe("Navbar", () => {
    test("renders logo and nav links", async ({ page, isMobile }) => {
      const header = page.getByRole("banner", { name: "Site header" });
      await expect(header.getByAltText("Plateful logo")).toBeVisible();

      if (!isMobile) {
        await expect(header.getByText("Why Plateful")).toBeVisible();
        await expect(header.getByText("How it works")).toBeVisible();
        await expect(
          header.getByRole("link", { name: "Deals", exact: true }),
        ).toBeVisible();
      }
    });

    test("hides on scroll down and shows on scroll up", async ({
      page,
      isMobile,
      browserName,
    }) => {
      test.skip(isMobile, "Scroll behavior test desktop only");
      test.skip(
        browserName === "firefox",
        "Firefox scroll timing inconsistent",
      );

      const header = page.getByRole("banner", { name: "Site header" });

      await page.evaluate(() => window.scrollBy(0, 800));
      await page.waitForTimeout(1200);
      await expect(header).toHaveClass(/-translate-y-full/);

      await page.evaluate(() => window.scrollBy(0, -600));
      await page.waitForTimeout(1200);
      await expect(header).not.toHaveClass(/-translate-y-full/);
    });

    test("opens and closes mobile drawer", async ({ page, isMobile }) => {
      test.skip(!isMobile, "Mobile drawer only on mobile");

      await page.getByLabel("Open menu").click();
      await expect(page.getByLabel("Close menu")).toBeVisible();

      await page.getByLabel("Close menu").click();
      await expect(page.getByLabel("Open menu")).toBeVisible();
    });
  });

  test.describe("Hero Section", () => {
    test("renders headline and CTA", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
      await expect(page.getByText("Browse deals now")).toBeVisible();
    });

    test("renders live deals badge", async ({ page }) => {
      await expect(page.getByText("Live deals available now")).toBeVisible();
    });
  });

  test.describe("Featured Deals", () => {
    test("renders deal cards", async ({ page }) => {
      await page.locator("#featured-deals").scrollIntoViewIfNeeded();
      const section = page.locator("#featured-deals");
      await expect(
        section.getByRole("heading", { name: "Plataran Menteng" }),
      ).toBeVisible();
    });

    test("filter tabs work", async ({ page }) => {
      await page.locator("#featured-deals").scrollIntoViewIfNeeded();
      const section = page.locator("#featured-deals");

      await page.getByRole("button", { name: "AYCE" }).click();
      await expect(
        section.getByRole("heading", { name: "Plataran Menteng" }),
      ).toBeVisible();

      await page.getByRole("button", { name: "Set Menu" }).click();
      await expect(
        section.getByRole("heading", { name: "Sushi Tei SCBD" }),
      ).toBeVisible();
    });

    test("bookmark toggle works", async ({ page }) => {
      await page.locator("#featured-deals").scrollIntoViewIfNeeded();
      await page.waitForTimeout(500);

      const bookmark = page.getByLabel("Save deal").first();
      await bookmark.scrollIntoViewIfNeeded();
      await bookmark.click();
      await page.waitForTimeout(500);
      await expect(page.getByLabel("Remove from saved").first()).toBeVisible();
    });
  });

  test.describe("Anchor navigation", () => {
    test("scrolls to How it works section", async ({ page, isMobile }) => {
      test.skip(isMobile, "Desktop nav only");
      const header = page.getByRole("banner", { name: "Site header" });
      await header.getByRole("link", { name: "How it works" }).click();
      await page.waitForTimeout(800);
      await expect(page.locator("#how-it-works")).toBeInViewport();
    });

    test("scrolls to Featured Deals section", async ({ page, isMobile }) => {
      test.skip(isMobile, "Desktop nav only");
      const header = page.getByRole("banner", { name: "Site header" });
      await header.getByRole("link", { name: "Deals", exact: true }).click();
      await page.waitForTimeout(800);
      await expect(page.locator("#featured-deals")).toBeInViewport();
    });
  });

  test.describe("Responsive", () => {
    test("renders heading on all viewports", async ({ page }) => {
      await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    });

    test("shows mobile menu button on mobile", async ({ page, isMobile }) => {
      test.skip(!isMobile, "Mobile only");
      await expect(page.getByLabel("Open menu")).toBeVisible();
    });

    test("shows desktop nav on desktop", async ({ page, isMobile }) => {
      test.skip(isMobile, "Desktop only");
      await expect(
        page.getByRole("navigation", { name: "Main navigation" }),
      ).toBeVisible();
    });
  });
});
