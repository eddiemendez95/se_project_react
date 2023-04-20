import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import DeleteCardModal from "./DeleteCardModal";
import Profile from "./Profile";
import { useEffect, useState } from "react";
import {
  getWeatherCard,
  getForecastWeather,
  parseWeatherData,
} from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperaturUnitContext";
import { Route, Switch } from "react-router-dom";
import { getClothingItems, addClothingItem, deleteCard } from "../utils/api";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({ F: 32, C: 0 });
  const [cards, setCards] = useState([]);
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState();
  const [deleteCardModal, setDeleteCardModal] = useState(false);

  const handleCreateModal = () => {
    setActiveModal("create");
  };
  const handleCloseModal = () => {
    setActiveModal("");
  };
  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleTogggleSwitch = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    addClothingItem({ name, imageUrl, weather })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = () => {
    deleteCard(selectedCard.id)
      .then(() => {
        setCards(cards.filter((item) => item.id !== selectedCard.id));
        handleCloseModal();
        setDeleteCardModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openDeleteModal = () => {
    setDeleteCardModal(true);
    handleCloseModal();
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const cityname = data && data.name;
        setCity(cityname);
        const temperature = parseWeatherData(data);

        setTemp({ F: temperature, C: temperature - 32 * (4 / 9) });
        const weatherCardInfo = getWeatherCard(data);
        setWeatherInfo(weatherCardInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setTemp]);

  useEffect(() => {
    getClothingItems()
      .then((data) => {
        setCards(data);
        handleCloseModal();
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <HashRouter>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleTogggleSwitch }}
        >
          <Header onCreateModal={handleCreateModal} cityName={city} />
          <Switch>
            <Route path="/profile">
              <Profile
                cards={cards}
                onCreateModal={handleCreateModal}
                onSelectCard={handleSelectedCard}
              />
            </Route>
            <Route path="/">
              <Main
                onSelectCard={handleSelectedCard}
                weatherTemp={temp}
                cards={cards}
                weatherCard={weatherInfo}
              />
            </Route>
          </Switch>
          <Footer />
          {activeModal === "create" && (
            <AddItemModal
              isOpen={activeModal === "create"}
              onAddItem={handleAddItemSubmit}
              onClose={handleCloseModal}
            />
          )}
          {activeModal === "preview" && (
            <ItemModal
              selectedCard={selectedCard}
              onClose={handleCloseModal}
              onOpenDeleteModal={openDeleteModal}
            />
          )}
          {deleteCardModal && (
            <DeleteCardModal
              onClose={() => {
                setDeleteCardModal(false);
              }}
              handleDelete={handleCardDelete}
              onCardDeleted={handleCloseModal}
            />
          )}
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </HashRouter>
  );
}

export default App;
