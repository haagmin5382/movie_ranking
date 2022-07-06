import type { NextPage } from "next";
import axios from "axios";
import Title from "../components/Title";
const Home: NextPage = ({ movieData }: any) => {
  console.log("axios data : ", movieData);
  return (
    <div>
      <Title />
      <div>
        {movieData.dailyBoxOfficeList.map((obj: any) => {
          return (
            <div key={obj.movieCd}>
              <div>
                {obj.rank}. {obj.movieNm}
              </div>
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
