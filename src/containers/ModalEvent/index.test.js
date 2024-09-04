import { render, screen } from "@testing-library/react";
import ModalEvent from "./index";

const data = {
  type: "soirée entreprise",
  date: "2022-04-29T20:28:45.744Z",
  title: "Conférence #productCON",
  cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
  description:
    "Présentation des outils analytics aux professionnels du secteur",
  nb_guesses: 1300,
  periode: "24-25-26 Février",
  prestations: [
    "1 espace d’exposition",
    "1 scéne principale",
    "2 espaces de restaurations",
    "1 site web dédié",
  ],
};

describe("When Modal data is created", () => {
  it("a list of mandatories data is displayed", async () => {
    render(<ModalEvent event={data} />);
    await screen.findByText("1 espace d’exposition");
    await screen.findByText("24-25-26 Février");
    await screen.findByText(
      "Présentation des outils analytics aux professionnels du secteur"
    );
    await screen.findByText("Conférence #productCON");
  });
// nouveau test
it("displays the event cover image with correct src and alt attributes", () => {
  render(<ModalEvent event={data} />);
  
  // Récupère l'image par son data-testid
  const imageElement = screen.getByTestId("card-image-testid");

  // Vérifie que l'image a le bon src
  expect(imageElement).toHaveAttribute("src","/images/stem-list-EVgsAbL51Rk-unsplash.png");

  // Vérifie que l'image a le bon alt
  expect(imageElement).toHaveAttribute("alt", "Conférence #productCON");
});
});
