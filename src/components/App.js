import "../blocks/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import AddItemModal from "./AddItemModal";
import ItemModal from "./ItemModal";
import DeleteCardModal from "./DeleteCardModal";
import Profile from "./Profile";
import RegisterModal from "./RegisterModal";
import LoginModal from "./LoginModal";
import EditProfileModal from "./EditProfileModal";
import LogoutModal from "./LogOutModal";
import ProtectedRoute from "./ProtectedRoute";
import CurrentTemperatureUnitContext from "../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { signUp, signIn, checkToken } from "../utils/auth";
import { useEffect, useState } from "react";
import {
  getWeatherCard,
  getForecastWeather,
  parseWeatherData,
} from "../utils/weatherApi";
import { Route, Switch } from "react-router-dom";
import {
  getClothingItems,
  addClothingItem,
  deleteCard,
  editProfile,
  addCardLike,
  removeCardLike,
} from "../utils/api";
import { HashRouter } from "react-router-dom/cjs/react-router-dom";

function App() {
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [temp, setTemp] = useState({ F: 32, C: 0 });
  const [cards, setCards] = useState([]);
  const [city, setCity] = useState("");
  const [weatherInfo, setWeatherInfo] = useState("");
  const [deleteCardModal, setDeleteCardModal] = useState(false);
  const [userRegisterModal, setUserRegisterModal] = useState(false);
  const [userLogInModal, setUserLogInModal] = useState(false);
  const [userEditProfileModal, setUserEditProfileModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [logoutModal, setLogoutModal] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState();

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

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  const handleAddItemSubmit = ({ name, imageUrl, weather }) => {
    addClothingItem({ name, imageUrl, weather, token })
      .then((newCard) => {
        setCards([newCard, ...cards]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = () => {
    deleteCard(selectedCard._id, token)
      .then(() => {
        setCards(cards.filter((item) => item._id !== selectedCard._idid));
        handleCloseModal();
        setDeleteCardModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogin = ({ email, password }) => {
    signIn(email, password)
      .then((res) => {
        if (res && res.token) {
          localStorage.setItem("jwt", res.token);
          const userinfo = checkToken(res.token);
          setToken(res.token);

          return userinfo;
        } else {
          throw { message: "Error: Invalid credentials entered" };
        }
      })
      .then((userinfo) => {
        setCurrentUser({
          data: {
            name: userinfo?.data?.name,
            avatar: userinfo?.data?.avatar,
            _id: userinfo?.data?._id,
          },
        });
        setIsLoggedIn(true);
        handleCloseModal();
        setUserLogInModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser({});
    localStorage.removeItem("jwt");
    setLogoutModal(false);
  };

  const handleRegistration = ({ name, avatar, email, password }) => {
    signUp(name, avatar, email, password)
      .then((res) => {
        handleLogin({ email, password });
        handleCloseModal();
        setUserRegisterModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEditProfile = ({ name, avatar }) => {
    editProfile({ name, avatar, token })
      .then((res) => {
        return res;
      })
      .then((res) => {
        setCurrentUser(res);
        handleCloseModal();
        setUserEditProfileModal(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const openDeleteModal = () => {
    setDeleteCardModal(true);
    handleCloseModal();
  };

  const openRegistrationModal = () => {
    setUserRegisterModal(true);
    handleCloseModal();
  };

  const openLoginModal = () => {
    setUserLogInModal(true);
    handleCloseModal();
  };

  const openEditProfileModal = () => {
    setUserEditProfileModal(true);
    handleCloseModal();
  };
  const handleLikeClick = (id, isLiked, user) => {
    const token = localStorage.getItem("jwt");
    isLiked
      ? removeCardLike(id, user, token)
          .then((updatedCard) => {
            setCards((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err))
      : addCardLike(id, user, token)
          .then((updatedCard) => {
            setCards((cards) =>
              cards.map((c) => (c._id === id ? updatedCard : c))
            );
          })
          .catch((err) => console.log(err));
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

  useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("jwt");
    if (storedToken) {
      setToken(storedToken);
      checkToken(storedToken)
        .then((res) => {
          if (res) {
            setIsLoggedIn(true);
          }
          return res;
        })
        .then((userdata) => {
          setCurrentUser(userdata);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <HashRouter>
        <div className="page">
          <CurrentTemperatureUnitContext.Provider
            value={{ currentTemperatureUnit, handleToggleSwitchChange }}
          >
            <Header
              onCreateModal={handleCreateModal}
              cityName={city}
              isLoggedIn={isLoggedIn}
              handleRegistration={openRegistrationModal}
              handleLogin={openLoginModal}
            />
            <Switch>
              <ProtectedRoute path="/profile" userLoggedIn={isLoggedIn}>
                <Profile
                  cards={cards}
                  onCreateModal={handleCreateModal}
                  onSelectCard={handleSelectedCard}
                  onEditProfile={openEditProfileModal}
                  userLoggedIn={isLoggedIn}
                  onLogOut={handleLogout}
                  onCardLike={handleLikeClick}
                />
              </ProtectedRoute>
              <Route path="/">
                <Main
                  onSelectCard={handleSelectedCard}
                  weatherTemp={temp}
                  cards={cards}
                  weatherCard={weatherInfo}
                  onCardLike={handleLikeClick}
                  userLoggedIn={isLoggedIn}
                />
              </Route>
            </Switch>
            <Footer />
            {activeModal === "create" && (
              <AddItemModal
                isOpen={activeModal === "create"}
                onAddItem={handleAddItemSubmit}
                onClose={handleCloseModal}
                token={token}
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
            {userLogInModal && (
              <LoginModal
                isOpen={userLogInModal}
                onUserLogin={handleLogin}
                onClose={() => {
                  setUserLogInModal(false);
                }}
                switchToRegisterModal={() => {
                  setUserLogInModal(false);
                  setUserRegisterModal(true);
                }}
              />
            )}
            {userRegisterModal && (
              <RegisterModal
                isOpen={userRegisterModal}
                onRegisterUser={handleRegistration}
                onClose={() => {
                  setUserRegisterModal(false);
                }}
                switchToLoginModal={() => {
                  setUserLogInModal(true);
                  setUserRegisterModal(false);
                }}
              />
            )}
            {userEditProfileModal && (
              <EditProfileModal
                isOpen={userEditProfileModal}
                onClose={() => {
                  setUserEditProfileModal(false);
                }}
                onEditProfile={handleEditProfile}
              />
            )}
            {logoutModal && (
              <LogoutModal
                isOpen={userLogInModal}
                onClose={() => {
                  setLogoutModal(false);
                }}
                handleLogout={handleLogout}
              />
            )}
          </CurrentTemperatureUnitContext.Provider>
        </div>
      </HashRouter>
    </CurrentUserContext.Provider>
  );
}

export default App;
