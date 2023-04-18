import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import { useEffect, useState } from "react";
import { getForecastWeather, parseWeatherData } from "../utils/weatherApi";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperaturUnitContext";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { getClothingsItems, addClothingItem, deleteCard } from "../utils/api";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingsItem, setClothingsItem] = useState([]);
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState(0);
  const [cards, setCards] = useState([]);
  const [cardDeleteModal, setCardDeleteModal] = useState(false);

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

  const handleDeleteCard = () => {
    deleteCard(selectedCard.id)
      .then(() => {
        setCards(cards.filter((item) => item.id !== selectedCard.id));
        handleCloseModal();
        setCardDeleteModal(false);
      })
      .catch((err) => console.log(err));
  };
  const openDeleteModal = () => {
    setCardDeleteModal(true);
    handleCloseModal();
  };

  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        const temperature = parseWeatherData(data);
        setTemp(temperature);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <BrowserRouter>
      <div className="page">
        <CurrentTemperatureUnitContext.Provider
          value={{ currentTemperatureUnit, handleTogggleSwitch }}
        >
          <Header onCreateModal={handleCreateModal} />
          <Switch>
            <Route path="/">
              <Main onSelectCard={handleSelectedCard} temp={temp} />
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
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
