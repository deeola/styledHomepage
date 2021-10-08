import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import GlobalStyles from "./components/styled/Global";

function App() {
  return (
    <>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </>
  );
}

export default App;
