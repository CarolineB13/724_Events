import { useEffect, useState } from "react";
import { useData } from "../../contexts/DataContext";
import { getMonth } from "../../helpers/Date";

import "./style.scss";

const Slider = () => {
  const { data } = useData();
  const [index, setIndex] = useState(0);
  const byDateDesc = data?.focus.sort((evtA, evtB) =>
    new Date(evtA.date) < new Date(evtB.date) ? -1 : 1
  )|| [];// Initialise à un tableau vide si data.focus est undefined
  useEffect(() => {
  const nextCard = setTimeout(
      () => setIndex(index < byDateDesc.length -1 ? index + 1 : 0), // ajout de -1 pour ne pas dépasser la taille du tableau
      5000
    );
    return () => clearTimeout(nextCard);
  }, [index, byDateDesc.length]);
  return (
    <div className="SlideCardList">
      {byDateDesc?.map((event, idx) => (
        <>
          <div
            key={event.title}
            className={`SlideCard SlideCard--${
              index === idx ? "display" : "hide"
            }`}
          >
            <img src={event.cover} alt="forum" />
            <div className="SlideCard__descriptionContainer">
              <div className="SlideCard__description">
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <div>{getMonth(new Date(event.date))}</div>
              </div>
            </div>
          </div>
          <div className="SlideCard__paginationContainer">
            <div className="SlideCard__pagination">
              {byDateDesc.map((_, radioIdx) => (
                <input
                  key={event.title.id} // Modif de l'id pour éviter les erreurs de clé
                  type="radio"
                  name="radio-button"
                  checked={idx === radioIdx}
                  onChange={() => setIndex(radioIdx)} // Met à jour l'index de la carte active
                />
              ))}
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Slider;
