
import { CardHeroe } from "./components/card-heroe";
//import { FlexBox } from "./components/flex-box";
import heroes from "./data/heroes.json";
import "bootstrap/dist/css/bootstrap.css";
//import "./Grid.css";
import "./Heroes.css"

function App() {
  return (
    <div className="App">
      {/* <FlexBox /> */}
      {heroes.map((heroe) => {
        console.log(heroe);
        return <CardHeroe {...heroe} />;
      })}
    </div>
  );
}

export default App;
