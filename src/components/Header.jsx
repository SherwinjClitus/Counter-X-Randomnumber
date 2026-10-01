import "../App.css";
import "./Header.css";

function Header() {
  return (
    <>
      <div>
        <h1 className="hero-title">
          <span className="title-counter">COUNTER</span>
          <span className="title-x">×</span>
          <span className="title-random">RANDOM NUMBER</span>
        </h1>
      </div>
    </>
  );
}

export default Header;
