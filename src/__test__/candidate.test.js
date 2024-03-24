import { render, screen } from "@testing-library/react";

import { Candidate } from "../components/candidate";
import { MemoryRouter } from "react-router-dom";

const user = {
  id: 1,
  name: "foo",
  address: {
    city: "London",
  },
};

it("Should render Candidate", () => {
  render(
    <MemoryRouter
      initialEntries={[{ pathname: "/candidate/1", state: { user: user } }]}
    >
      <Candidate />
    </MemoryRouter>
  );
  const image = screen.getByAltText("profile_image");
  expect(image.src).toContain(
    "https://image.freepik.com/free-photo/river-foggy-mountains-landscape_1204-511.jpg"
  );

  expect(screen.getByRole("heading", { name: "foo" })).toBeInTheDocument();

  expect(screen.getByRole("link", { name: "Go Back" })).toBeInTheDocument();
});
