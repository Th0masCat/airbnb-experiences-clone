import collage from "./collage.png";

function Content() {
  return (
    <div className="content">
      <img src={collage} alt="collage_img" className="collage_img"></img>
      <div className="middle_text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}

export default Content;
