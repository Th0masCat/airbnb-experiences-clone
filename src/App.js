import Nav from "./nav";
import Content from "./content";
import Card from "./Card";

import data from "./data";

function App() {
  const cards = data.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <Nav />
      <Content />
      <div className="card_container">{cards}</div>
    </div>
  );
}

export default App;
