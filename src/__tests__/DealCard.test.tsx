import { render, screen, fireEvent } from "@testing-library/react";
import { DealCard } from "@/components/molecules/DealCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} />
  ),
}));

const mockDeal = {
  image: "/test-image.jpg",
  name: "Plataran Menteng",
  cuisine: "Indonesian · Fine Dining",
  location: "Menteng, Jakarta",
  tag: "AYCE",
  price: "IDR 299K",
  originalPrice: "IDR 450K",
  rating: "4.9",
  reviews: "2.4k",
  saved: 3200,
  badge: "Best Seller",
  badgeColor: "text-[#ff3131]",
};

describe("DealCard", () => {
  it("renders restaurant name", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("Plataran Menteng")).toBeInTheDocument();
  });

  it("renders cuisine type", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("Indonesian · Fine Dining")).toBeInTheDocument();
  });

  it("renders price correctly", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("IDR 299K")).toBeInTheDocument();
  });

  it("renders original price", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("IDR 450K")).toBeInTheDocument();
  });

  it("renders discount percentage", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText(/save 34%/i)).toBeInTheDocument();
  });

  it("renders badge text", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("Best Seller")).toBeInTheDocument();
  });

  it("renders location", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText("Menteng, Jakarta")).toBeInTheDocument();
  });

  it("renders saved count", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    expect(screen.getByText(/3,200/)).toBeInTheDocument();
  });

  it("toggles bookmark on click", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={true} />);
    const bookmarkBtn = screen.getByLabelText("Save deal");
    fireEvent.click(bookmarkBtn);
    expect(screen.getByLabelText("Remove from saved")).toBeInTheDocument();
  });

  it("is hidden when isInView is false", () => {
    render(<DealCard deal={mockDeal} index={0} isInView={false} />);
    const article = screen.getByRole("article");
    expect(article).toHaveClass("opacity-0");
  });
});
