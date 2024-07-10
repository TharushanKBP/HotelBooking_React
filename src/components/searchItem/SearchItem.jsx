import "./searchItem.css";

export const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/1/1a/24701-nature-natural-beauty.jpg"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Tower Street Apartments</h1>
        <span className="siDistance">500m from center</span>
        <span className="siTaxiOp">Free airport taxi</span>
        <span className="siSubtitle">
          Studio Apartment with Air conditioning
        </span>
        <span className="siFeatures">
          <i className="zmdi zmdi-smartphone-landscape-lock"></i>
        </span>
      </div>
      <div className="siDetails">
        <span>Entire studio * 1 bathroom * 21m² * 1 full bed</span>
        <span className="siCancelOp">Free cancellation</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
    </div>
  );
};

export default SearchItem;
