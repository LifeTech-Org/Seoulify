import { useState } from "react";
import "./App.css";
import {
  Header,
  Hero,
  Info,
  Subscribe,
  Share,
  Actions,
  Footer,
  FashionCards,
  Ads,
} from "./components";
import ButtonWithLoading from "./HOC";
import withFoo from "./HOC";

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Header />
      <Hero />
      <Info />
      <Ads />
      <Subscribe />
      <Share />
      <FashionCards />
      <Actions />
      <Footer />
      {/* <ButtonWithLoading
        isLoading={isLoading}
        onClick={() => setIsLoading(true)}
      >
        More
      </ButtonWithLoading> */}
    </>
  );
};

export default App;
