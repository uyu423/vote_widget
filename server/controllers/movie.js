import * as movieModel from '../models/movie';

/**
 * @api {get} api/movie 영화 정보들 가져오기
 * @apiVersion 0.0.1
 * @apiName getMovies
 * @apiDescription 현재 데이터베이스에 등록된 영화의 목록들을 가져온다.
 * @apiGroup Movie
 *
 * @apiSuccess {Boolean} success API 성공 여부를 반환한다.
 * @apiSuccess {Object} data API의 결과 값이 포함된 오브젝트다.
 * @apiSuccess {Array} data.rows 데이터베이스에서 가져온 결과 값의 배열.
 * @apiSuccess {Number} data.rows.id 영화의 인덱스 번호
 * @apiSuccess {String} data.rows.title 영화의 제목.
 * @apiSuccess {String} data.rows.directorName 영화의 감독 이름.
 * @apiSuccess {String} data.rows.summary 영화 줄거리.
 * @apiSuccess {String} data.rows.year 영화의 년도.
 * @apiSuccess {String} data.rows.posterUrl 영화 포스터의 URL.
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "rows": [
            {
                "id": 1,
                "title": "루시 (Lucy)",
                "directorName": "뤽 베송",
                "summary": "평범한 삶을 살던 여자 루시(스칼렛 요한슨)는…",
                "year": "2014",
                "posterUrl": "http://cfile17.uf.daum.net/image/2458B3375382F287111B8F"
            },
            {
                "id": 2,
                "title": "엑스 마키나 (Ex Machina)",
                "directorName": "알렉스 갈린드",
                "summary": "유능한 프로그래머 ‘칼렙’(돔놀 글리슨)은…",
                "year": "2015",
                "posterUrl": "http://cfile116.uf.daum.net/image/227AFF4E5486B719247C67"
            },
            {
                "id": 3,
                "title": "트랜센던스 (Transcendence)",
                "directorName": "윌리 피스터",
                "summary": "인류가 수억 년에 걸쳐 이룬 지적능력…",
                "year": "2014",
                "posterUrl": "http://cfile119.uf.daum.net/image/243A7A4752BB8C5C377EEF"
            }
        ]
    }
}
*/
export function getMovies(req, res) {
	movieModel.selectMovies(req, (err, rows) => {
		if(err) {
			res.status(500).json({
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
