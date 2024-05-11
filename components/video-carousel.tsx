import { Movie, movies, randomMoviesSet1, randomMoviesSet2 } from "@/movies";
import Container from "./container";

export const VideoCarousel = () => {
  return (
    <div className="bg-background pb-8">
      <div className="overflow-clip">
        <div className="flex gap-5 mb-5 left-1/2 -translate-x-1/2 ">
          <div className="shrink-0 w-[60vw]  rounded-2xl overflow-clip">
            <img
              src={movies[0].poster}
              alt={movies[0].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shrink-0 w-[60vw] rounded-2xl overflow-clip">
            <img
              src={movies[1].poster}
              alt={movies[1].name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="shrink-0 w-[60vw] aspect-video rounded-2xl overflow-clip">
            <img
              src={movies[2].poster}
              alt={movies[2].name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <div className="">
        <SmallVideoCarousel movies={randomMoviesSet1} />
      </div>

      <div className="">
        <SmallVideoCarousel movies={randomMoviesSet2} />
      </div>
    </div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex gap-3 overflow-clip ">
      {movies.map((movie, index) => (
        <div className="w-[23vw] shrink-0" key={`${movie.name}-${index}`}>
          <img
            className="w-full aspect-video h-full object-cover rounded-xl"
            src={movie.poster}
            alt={movie.name}
          />
        </div>
      ))}
    </div>
  );
};
