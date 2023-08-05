import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./Components/SearchBar";
import { Container } from "react-bootstrap";
import { WeatherInfo } from "./Components/WeatherInfo";

function App() {
  return (
    <Container>
      <SearchBar />
      <WeatherInfo />
    </Container>
  );
}

export default App;
