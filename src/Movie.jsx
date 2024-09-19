import { Image } from "react-bootstrap";
function Movies(props){
    return(
        <section>
            {props.movie.map((movie,index)=>(
                <div key={index}>
                    <h2> {movie.title}</h2>
                    <p> overview:{movie.overview}</p>
                    <p> average_votes: {movie.average_vote} </p>
                    <p> total_votes:  {movie.total_votes} </p>
                    <p> image: </p>
                    <Image src={movie.image_url}/>
                    <p> popularity: {movie.popularity}   </p>
                    <p> released_on: {movie.released_on}  </p>
                </div>
            ))}
        </section>
    );
}
export default Movies;