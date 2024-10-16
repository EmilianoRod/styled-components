import Card from "./Components/Card/Card";
import { Container } from "./Components/styles/Container.styled";
import Footer from "./Components/Footer/Footer";
import GlobalStyles from "./Components/styles/Global.styled";
import Header from "./Components/Header/Header";
import { ThemeProvider } from "styled-components";
import { content } from "./utils/content";

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#669999'
  },
  mobile: '768px'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <Container>
        {
          content.map((item) => {
            return (
              <Card id={item.id} title={item.title} body={item.body} image={item.image} />
            )
          })
        }
      </Container>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
