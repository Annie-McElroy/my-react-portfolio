// Import IntroCard
import IntroCard from "../components/Home/IntroCard";
import ImageBorder from "../components/ImageBorder";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Home">
      <ImageBorder />
      <IntroCard />
    </div>
  );
}

export default Home;
