import Association from "../Components/Association";
import Banner from "../Components/Banner";
import Events from "../Components/Events";
import Explore from "../Components/Explore";
import Grid from "../Components/Grid";
import Journey from "../Components/Journey";

import News from "../Components/News";
import Program from "../Components/Program";
import Teach from "../Components/Teach";
import VideoGallery from "../Components/VideoGallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Association />
      <Program />
      <Events />
      <Journey />
      <Grid />
      <Teach />
      <VideoGallery />
      <News />
      <Explore />
    </div>
  );
};

export default Home;
