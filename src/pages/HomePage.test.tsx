import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import HomePage from "./HomePage";

beforeEach(() => {
  window.HTMLElement.prototype.scrollIntoView = vi.fn();
});

describe("HomePage", () => {
  it("renders a Chef Recommendations section as the scroll target", () => {
    const { container } = render(<HomePage />);

    const heading = screen.getByRole("heading", { name: "Popular Sourdough Pizzas" });
    expect(heading.closest("section")).toBe(container.querySelector("#chef-recommendations"));
  });

  it("scrolls the Chef Recommendations section into view when Order Online Now is clicked", async () => {
    const { container } = render(<HomePage />);
    const user = userEvent.setup();
    const section = container.querySelector("#chef-recommendations");

    await user.click(screen.getByRole("button", { name: "Order Online Now" }));

    expect(section?.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth", block: "start" });
  });
});
