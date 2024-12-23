import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";

global.fetch = vi.fn();

describe("App Component", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("displays a loading message while fetching data", async () => {
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => [],
    });

    render(<App />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();

    await waitFor(() => expect(screen.queryByText("Loading...")).not.toBeInTheDocument());
  });

  it("displays an error message when the fetch fails", async () => {
    fetch.mockRejectedValueOnce(new Error("Fetch failed"));

    render(<App />);
    await waitFor(() => expect(screen.getByText(/Error: Fetch failed/i)).toBeInTheDocument());
  });

  it("renders the table with fetched data", async () => {
    const mockData = [
      {
        "s.no": 1,
        "percentage.funded": "80%",
        "amt.pledged": "₹500",
      },
      {
        "s.no": 2,
        "percentage.funded": "90%",
        "amt.pledged": "₹600",
      },
    ];

    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockData,
    });

    render(<App />);

    // Wait for the table to render
    await waitFor(() => {
      expect(screen.getByText("S.No.")).toBeInTheDocument();
      expect(screen.getByText("Percentage funded")).toBeInTheDocument();
      expect(screen.getByText("Amount pledged")).toBeInTheDocument();
      expect(screen.getByText("80%")).toBeInTheDocument();
      expect(screen.getByText("₹500")).toBeInTheDocument();
    });
  });
});
