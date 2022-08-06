import star_img from "./Star1.png";

function Card(prop) {
  let badgeText;
  if (prop.item.openSpots === 0) {
    badgeText = "Sold Out";
  } else if (prop.item.location === "Online") {
    badgeText = "";
  }

  return (
    <div className="card_component">
      {badgeText && <div className="image-badge">Sold Out</div>}
      <img src={prop.item.coverImg} alt="image1" className="images"></img>
      <div className="img_text">
        <img src={star_img} alt="starimg" className="star_img"></img>
        <span>{prop.item.stats.rating}</span>
        <span className="grey-text">
          ({prop.item.stats.reviewCount}) • {prop.item.location}
        </span>
        <p>{prop.item.title}</p>

        <span className="price">
          ${prop.item.price} / <span>person</span>
        </span>
      </div>
    </div>
  );
}

export default Card;
