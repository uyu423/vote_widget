import * as movieModel from '../models/movie';

export function getMovies(req, res) {
	movieModel.selectMovies(req, (err, rows) => {
		if(err) {
			res.status(500).json({
				success : false,
				message : "Error : MovieModel.selectMovies"
			})
		}
		else {
			res.status(200).json({
				success : true,
				data : {
					rows : rows
				}
			});
		}
	});
}
