import { Header } from "../components/Header.js";
import { Slider } from "../components/slider/Slider.js";
import { Footer } from "../components/footer/Footer.js";

function Home() {
    return (
      <>
        <Header />
        <div className="top-news-wrapper">
          <div className="top-news-header">
            <h1>Top News</h1>
          </div>
          <Slider />
        </div>
        <Footer />
      </>
    );
  };

  export default Home