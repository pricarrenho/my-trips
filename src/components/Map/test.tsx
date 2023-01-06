import Map from ".";
import { render, screen } from "@testing-library/react";

describe("<Map/>", () => {
  it("should render without any marker", () => {
    const { container } = render(<Map />);

    const marker = container.querySelector(".leaflet-marker-icon");

    expect(marker).not.toBeInTheDocument();
  });

  it("should render with the marker in correct place", () => {
    const place = {
      id: "1",
      name: "Petrópolis",
      slug: "petropolis",
      location: {
        latitude: 0,
        longitude: 0,
      },
    };

    render(<Map places={[place]} />);

    const city = screen.getByTitle(/petrópolis/i);

    expect(city).toBeInTheDocument();
  });
});
