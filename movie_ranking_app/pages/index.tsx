import type { NextPage } from "next";
import axios from "axios";
import Title from "../components/Title";

interface movieDataProps {
  movieData: { dailyBoxOfficeList: Array<dailyBoxOfficeListProps> };
}
interface dailyBoxOfficeListProps {
  rank: string;
  movieCd: string;
  movieNm: string;
  openDt: string;
}

const Home: NextPage<movieDataProps> = ({ movieData }) => {
  console.log("axios data : ", movieData);
  return (
    <div>
      <Title />
      <div>
        {movieData.dailyBoxOfficeList.map((obj: dailyBoxOfficeListProps) => {
          return (
            <div key={obj.movieCd}>
              <div>
                {obj.rank}. {obj.movieNm}
              </div>
              <div>개봉일 : {obj.openDt}</div>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .movieContainer {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
        }
      `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const movieData = await axios.get(`http://localhost:3000/api/movies`);
  const movieData2 = movieData.data.boxOfficeResult;

  return {
    props: {
      movieData: movieData2,
    },
  };
}

export default Home;
