class MovieController {
    constructor(Movie) {
        this.Movie = Movie;
    }

    async createMovie(req, res) {
        try {
            const data = req.body;
            if (req.file) {
                data.posterUrl = '/' + req.file.path.replace(/\\/g, '/');
            }
            data.duration = Number(data.duration);
            data.ageLimit = Number(data.ageLimit);
            data.rating = Number(data.rating);
            data.releaseDate = new Date(data.releaseDate);
            const movie = new this.Movie(data);
            await movie.save();
            res.status(201).json(movie);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async getMovies(req, res) {
        try {
            const movies = await this.Movie.find();
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getMovieById(req, res) {
        try {
            const movie = await this.Movie.findById(req.params.id);
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(200).json(movie);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateMovie(req, res) {
        try {
            const movie = await this.Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(200).json(movie);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    async deleteMovie(req, res) {
        try {
            const movie = await this.Movie.findByIdAndDelete(req.params.id);
            if (!movie) {
                return res.status(404).json({ message: 'Movie not found' });
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = MovieController;