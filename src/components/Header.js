import "../blocks/header.css";

const Header = ({ cityName, onCreateModal }) => {
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  return (
    <header className="header">
      <div className="header__logo">
        <div>
          <img src={require("../images/logo.svg").default} alt="logo" />
        </div>
        <p className="header__info">
          {currentDate}, {cityName}
        </p>
      </div>
      <div className="header__info-container">
        <div>
          <button
            type="text"
            onClick={onCreateModal}
            className="header__button"
          >
            + Add New Clothes
          </button>
        </div>
        <div className="header__info">Terrence Tegegne</div>
        <img src={require("../images/avatar.svg").default} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;

<img src={require("../images/avatar.svg").default} alt="avatar" />;
