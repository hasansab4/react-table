import { render, screen, fireEvent } from "@testing-library/react";
import Table from "./index";

const columns = [
  { key: "s.no", label: "S.No." },
  { key: "percentage.funded", label: "Percentage funded" },
  { key: "amt.pledged", label: "Amount pledged" },
];

const data = [
  { "s.no": 1, "percentage.funded": "50%", "amt.pledged": "₹1000" },
  { "s.no": 2, "percentage.funded": "60%", "amt.pledged": "₹2000" },
  { "s.no": 3, "percentage.funded": "70%", "amt.pledged": "₹3000" },
  { "s.no": 4, "percentage.funded": "80%", "amt.pledged": "₹4000" },
  { "s.no": 5, "percentage.funded": "90%", "amt.pledged": "₹5000" },
  { "s.no": 6, "percentage.funded": "100%", "amt.pledged": "₹6000" },
];

describe("Table Component", () => {
  it("renders the table with data", () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText("S.No.")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("₹1000")).toBeInTheDocument();
  });

  it("handles pagination correctly", () => {
    render(<Table columns={columns} data={data} />);
    expect(screen.getByText("Page 1 of 2")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Next"));
    expect(screen.getByText("Page 2 of 2")).toBeInTheDocument();
  });

  it("changes rows per page correctly", () => {
    render(<Table columns={columns} data={data} rowsPerPageOptions={[5, 10]} />);
    fireEvent.change(screen.getByLabelText(/Rows per page/i), {
      target: { value: "10" },
    });
    expect(screen.getByText("Page 1 of 1")).toBeInTheDocument();
  });
});
