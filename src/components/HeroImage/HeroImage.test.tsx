import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import HeroImage from "./HeroImage";

describe("HeroImage", () => {
  it("resolves its src to a bundled asset instead of the non-existent .arc/designs path", () => {
    render(<HeroImage />);

    const image = screen.getByAltText("Wood-fired Margherita pizza fresh from the oven");
    const src = image.getAttribute("src");

    expect(src).toBeTruthy();
    expect(src).not.toContain(".arc/designs");
  });
});
