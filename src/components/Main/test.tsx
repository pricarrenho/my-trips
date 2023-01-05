import { render, screen } from "@testing-library/react";

import { Main } from ".";

describe("<Main />", () => {
  it("should render the heading", () => {
    render(<Main />);

    const HeaderGlobal = screen.getByRole("heading", {
      name: /react avançado/i,
    });

    expect(HeaderGlobal).toBeInTheDocument();
  });
});
