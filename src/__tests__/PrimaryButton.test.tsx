import { render, screen, fireEvent } from "@testing-library/react";
import { PrimaryButton } from "@/components/atoms/PrimaryButton";

describe("PrimaryButton", () => {
  it("renders children correctly", () => {
    render(<PrimaryButton size="md">Browse deals</PrimaryButton>);
    expect(screen.getByText("Browse deals")).toBeInTheDocument();
  });

  it("applies md size classes", () => {
    render(<PrimaryButton size="md">Click me</PrimaryButton>);
    const button = screen.getByRole("link", { name: /click me/i });
    expect(button).toHaveClass("px-7");
  });

  it("applies lg size classes", () => {
    render(<PrimaryButton size="lg">Click me</PrimaryButton>);
    const button = screen.getByRole("link", { name: /click me/i });
    expect(button).toHaveClass("px-9");
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(
      <PrimaryButton size="md" onClick={handleClick}>
        Click me
      </PrimaryButton>,
    );
    fireEvent.click(screen.getByRole("link", { name: /click me/i }));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("renders as link with href by default", () => {
    render(<PrimaryButton size="md">Click me</PrimaryButton>);
    expect(screen.getByRole("link", { name: /click me/i })).toBeInTheDocument();
  });
});
