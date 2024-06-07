import { API_URL } from "../app/(home)/page";
import styles from "../styles/movie-info.module.css";

export async function getMovie(id: string) {
    console.log(`Fetching movies : ${Date.now()}`);
    const response = await fetch(`${API_URL}/${id}`);
    return await response.json();
  }

  export default async function MovieInfo({id}: {id: string}) {
    const movie = await getMovie(id)
    return <div className={styles.container}>
      <img src={movie.poster_path} className={movie.poster} alt={movie.title} />
      <div className={movie.info}>
        <h1 className={movie.title}>{movie.title}</h1>
        <h3>⭐{movie.vote_average.toFixed(1)}</h3>
        <p>{movie.overview}</p>
        <a href = {movie.homepage} target = "_blank" rel = "noreferrer">Homepage &rarr;</a>
      </div>
    </div>
}