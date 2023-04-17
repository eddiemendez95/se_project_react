import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ModalWithForm from "./ModalWithForm";
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

  const handleAddItemSubmit = (item) => {
    api
      .addItem(item)
      .then((newItem) => {
        setClothingsItem([newItem, ...clothingsItem]);
        closeAllModals();
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
            <ModalWithForm
              title="New garment"
              buttonText="Add garment"
              onClose={handleCloseModal}
            >
              <label>
                <h3 className="modal__label">Name</h3>
                <input
                  className="modal__input"
                  type="text"
                  name="name"
                  placeholder="Name"
                  minLength="1"
                  maxLength="30"
                  required
                ></input>
              </label>
              <label>
                <h3 className="modal__label">Image</h3>
                <input
                  className="modal__input"
                  type="text"
                  name="link"
                  placeholder="Image Url"
                  minLength="1"
                  maxLength="30"
                  required
                ></input>
              </label>
              <p className="modal__radio">Select the Weather Type</p>
              <div className="modal__radio-button">
                <div>
                  <input
                    type="radio"
                    id="hot"
                    value="hot"
                    required
                    className="modal__radio-buttons"
                  />
                  <label>Hot</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="warm"
                    value="warm"
                    className="modal__radio-buttons"
                  />
                  <label>Warm</label>
                </div>
                <div>
                  <input
                    type="radio"
                    id="cold"
                    value="cold"
                    className="modal__radio-buttons"
                  />
                  <label>Cold</label>
                </div>
              </div>
            </ModalWithForm>
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
