import React, { useState } from 'react';

function Movie() {
    const [movieName, setName] = useState('');
    const [moviePlot, setPlot] = useState('');
    const [movieDirector, setDirector] = useState('');
    const [movieActors, setActors] = useState('');
    const [movieDuration, setDuration] = useState('');
    const [movieIMDB, setIMDB] = useState(0);
    const [movieCategory, setCategory] = useState('');
    const [movieDate, setDate] = useState(new Date());
    const [movieLanguage, setLanguage] = useState('');
    const [movieBudget, setBudget] = useState('');
    const [movieId, setId] = useState(0);
    const [editId, setEditId] = useState();
    const [movieImage, setImage] = useState('');
    const [mode, setMode] = useState(false);

    const [movies, setMovies] = useState([
        {
            movieId: 1,
            movieName: "Film1",
            moviePlot: "Film1",
            movieDirector: "director",
            movieActors: "Actor1",
            movieDuration: "2 saat",
            movieIMDB: 7.0,
            movieCategory: "Film1",
            movieDate: "1999-12-29",
            movieLanguage: "English",
            movieBudget: '3 milyon',
            movieImage: 'https://example.com/film1.jpg',
        },
        {
            movieId: 2,
            movieName: "Film2",
            moviePlot: "Film2",
            movieDirector: "director",
            movieActors: "Actor2",
            movieDuration: "1.5 saat",
            movieIMDB: 8.0,
            movieCategory: "Film2",
            movieDate: "2000-01-15",
            movieLanguage: "Turkish",
            movieBudget: '2 milyon',
            movieImage: 'https://example.com/film2.jpg',
        }
    ]);

    const addMovie = () => {
        if (movieName && movieActors) {
            setId(movieId + 1);
            setMovies([...movies, {
                movieId,
                movieName,
                moviePlot,
                movieDirector,
                movieActors,
                movieDuration,
                movieIMDB,
                movieCategory,
                movieDate,
                movieLanguage,
                movieBudget,
                movieImage
            }])
            setName('');
            setPlot('');
            setDirector('');
            setActors('');
            setDuration('');
            setIMDB('');
            setCategory('');
            setDate('');
            setLanguage('');
            setBudget('');
            setImage('');
            setMode(false);
        }
    }

    const deleteMovie = (dmovieId) => {
        setMovies(movies.filter((movie) => movie.movieId !== dmovieId))
    }

    const editMovie = (e) => {
        setName(e.movieName);
        setActors(e.movieActors);
        setLanguage(e.movieLanguage);
        setDirector(e.movieDirector);
        setBudget(e.movieBudget);
        setCategory(e.movieCategory);
        setDuration(e.movieDuration);
        setDate(e.movieDate);
        setIMDB(e.movieIMDB);
        setPlot(e.moviePlot);
        setImage(e.movieImage);
        setEditId(e.movieId);
        setMode(true);
    }

    const updateMovie = () => {
        const newMovies = movies.map((m) => {
            return m.movieId === editId ?
                {
                    movieId: editId,
                    movieName,
                    moviePlot,
                    movieDirector,
                    movieActors,
                    movieDuration,
                    movieIMDB,
                    movieCategory,
                    movieDate,
                    movieLanguage,
                    movieBudget,
                    movieImage
                } : m;
        });
        setMovies(newMovies);
        setName('');
        setPlot('');
        setDirector('');
        setActors('');
        setDuration('');
        setIMDB('');
        setCategory('');
        setDate('');
        setLanguage('');
        setImage('');
        setBudget('');
        setMode(false);
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }

    return (
        <div className='container'>
            <h2 className="mt-3 mb-3">MOVIES</h2>
            <div className="row">
                <div className="col-md-6">
                    <input placeholder='Movie Name' type="text" className="form-control" value={movieName} onChange={(n) => setName(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Plot' type="text" className="form-control" value={moviePlot} onChange={(n) => setPlot(n.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input placeholder='Movie Director' type="text" className="form-control" value={movieDirector} onChange={(n) => setDirector(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Actors' type="text" className="form-control" value={movieActors} onChange={(n) => setActors(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Duration' type="text" className="form-control" value={movieDuration} onChange={(n) => setDuration(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie IMDB' type="number" className="form-control" value={movieIMDB} onChange={(n) => setIMDB(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Category' type="text" className="form-control" value={movieCategory} onChange={(n) => setCategory(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Date' type="date" className="form-control" value={movieDate} onChange={(n) => setDate(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Language' type="text" className="form-control" value={movieLanguage} onChange={(n) => setLanguage(n.target.value)} />
                </div>
                <div className="col-md-6">
                    <input placeholder='Movie Budget' type="text" className="form-control" value={movieBudget} onChange={(n) => setBudget(n.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <input type="file" accept="image/*" onChange={handleImageChange} className="form-control mt-3" />
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-md-6">
                    {mode === true ? (
                        <button className='btn btn-dark' onClick={updateMovie}>Update Movie</button>
                    ) :
                        (<button className='btn btn-dark' onClick={addMovie}>Add Movie</button>)
                    }
                </div>
            </div>

            <div className="row mt-3">
                {movies.map((movie) => (
                    <div key={movie.movieId} className="col-md-6 mb-3">
                        <div className="card">
                            {movie.movieImage && (
                                <img src={movie.movieImage} className="card-img-top" alt={movie.movieName} />
                            )}
                            <div className="card-body">
                                <h5 className="card-title">{movie.movieName}</h5>
                                <p className="card-text">Plot: {movie.moviePlot}</p>
                                <p className="card-text">Director: {movie.movieDirector}</p>
                                <p className="card-text">Actors: {movie.movieActors}</p>
                                <p className="card-text">Duration: {movie.movieDuration}</p>
                                <p className="card-text">IMDB: {movie.movieIMDB}</p>
                                <p className="card-text">Category: {movie.movieCategory}</p>
                                <p className="card-text">Date: {movie.movieDate}</p>
                                <p className="card-text">Language: {movie.movieLanguage}</p>
                                <p className="card-text">Budget: {movie.movieBudget}</p>
                                <button type="button" onClick={() => deleteMovie(movie.movieId)} className="btn btn-danger mt-2">Delete Movie</button>
                                <button type="button" onClick={() => editMovie(movie)} className="btn btn-info mt-2 ml-2">Edit Movie</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Movie;
