import { render, screen, fireEvent } from "@testing-library/react";
import { Navbar } from "@/components/organisms/Navbar";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({
    children,
    href,
  }: {
    children: React.ReactNode;
    href: string;
  }) => <a href={href}>{children}</a>,
}));

jest.mock("@/assets", () => ({
  Assets: {
    Plateful: "/mock-logo.svg",
  },
}));

describe("Navbar", () => {
  it("renders logo", () => {
    render(<Navbar />);
    // Logo appears in both desktop navbar and mobile drawer — use getAllBy
    const logos = screen.getAllByAltText("Plateful logo");
    expect(logos.length).toBeGreaterThan(0);
  });

  it("renders desktop nav links", () => {
    render(<Navbar />);
    // Links appear in both desktop and mobile — use getAllBy
    expect(screen.getAllByText("Why Plateful").length).toBeGreaterThan(0);
    expect(screen.getAllByText("How it works").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Deals").length).toBeGreaterThan(0);
    expect(screen.getAllByText("Download").length).toBeGreaterThan(0);
  });

  it("renders Browse deals CTA button", () => {
    render(<Navbar />);
    expect(screen.getAllByText(/Browse deals/i).length).toBeGreaterThan(0);
  });

  it("renders hamburger button", () => {
    render(<Navbar />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("shows close button when hamburger is clicked", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });

  it("shows hamburger again after closing drawer", () => {
    render(<Navbar />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    fireEvent.click(screen.getByLabelText("Close menu"));
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });
});
