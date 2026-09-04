import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CHEF_RECOMMENDATIONS_SECTION_ID } from "../../lib/constants";
import HeroSection from "./HeroSection";

function renderHeroSection() {
  return render(
    <>
      <HeroSection />
      <div id={CHEF_RECOMMENDATIONS_SECTION_ID} />
    </>,
  );
}

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe("HeroSection", () => {
  it("renders the headline, hero image, and both CTA buttons", () => {
    renderHeroSection();

    expect(
      screen.getByRole("heading", { level: 1, name: "Wood-Fired Pizza, Delivered Hot" }),
    ).toBeInTheDocument();
    expect(
      screen.getByAltText("Wood-fired Margherita pizza fresh from the oven"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Order Online Now" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Explore Full Menu" })).toBeInTheDocument();
  });

  it("renders supporting value-proposition copy distinct from the headline", () => {
    renderHeroSection();

    const body = screen.getByText(
      "Baked at 900°F in our stone ovens to perfect charred perfection. Handcrafted sourdough bases fermented for 48 hours. Order now for fast, direct thermal-bag delivery.",
    );
    expect(body).toBeInTheDocument();
    expect(body.tagName).not.toBe("H1");
    expect(screen.getByText("Authentic Neapolitan Woodfired")).toBeInTheDocument();
  });

  it("smooth-scrolls to the Chef Recommendations section when Order Online Now is clicked", async () => {
    renderHeroSection();
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Order Online Now" }));

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("smooth-scrolls to the Chef Recommendations section when Explore Full Menu is clicked", async () => {
    renderHeroSection();
    const user = userEvent.setup();

    await user.click(screen.getByRole("button", { name: "Explore Full Menu" }));

    expect(window.HTMLElement.prototype.scrollIntoView).toHaveBeenCalledWith({
      behavior: "smooth",
      block: "start",
    });
  });

  it("makes both CTA buttons reachable via Tab in order with descriptive accessible labels", async () => {
    renderHeroSection();
    const user = userEvent.setup();

    await user.tab();
    expect(screen.getByRole("button", { name: "Order Online Now" })).toHaveFocus();

    await user.tab();
    expect(screen.getByRole("button", { name: "Explore Full Menu" })).toHaveFocus();
  });

  it("activates the focused CTA via Enter and Space", async () => {
    renderHeroSection();
    const user = userEvent.setup();
    const scrollSpy = window.HTMLElement.prototype.scrollIntoView as ReturnType<typeof vi.fn>;

    screen.getByRole("button", { name: "Order Online Now" }).focus();
    await user.keyboard("{Enter}");
    expect(scrollSpy).toHaveBeenCalledTimes(1);

    screen.getByRole("button", { name: "Explore Full Menu" }).focus();
    await user.keyboard(" ");
    expect(scrollSpy).toHaveBeenCalledTimes(2);
  });

  it("exposes descriptive alt text on the hero image for assistive technology", () => {
    renderHeroSection();

    expect(
      screen.getByRole("img", { name: "Wood-fired Margherita pizza fresh from the oven" }),
    ).toBeInTheDocument();
  });
});
