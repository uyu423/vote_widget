import * as userModel from '../models/user';
import * as viewModel from '../models/view';

/**
 * @api {put} api/vote/:userId 투표하기
 * @apiVersion 0.0.1
 * @apiName putUserMovieId
 * @apiDescription 사용자가 특정 영화에 투표할 수 있다.
 * @apiGroup Vote 
 *
 * @apiHeader {String} token 로그인시 발급받은 세션 토근이다. API 동작 유효 검사에 사용된다.
 * @apiParams {Number} userId URL로 넘어오는 사용자 인덱스 번호다.
 * @apiParams {Number} movieId HTTP BODY로 넘어오는 투표할 영화의 인덱스 번호다.
 *
 * @apiSuccess {Boolean} sucess 투표 성공 여부를 반환한다.
 * @apiSuccess {Object} data MySQL의 업데이트 성공 반환 데이터다.
 *
 * @apiSuccessExample {json} Success-Response :
HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "rows": {
            "fieldCount": 0,
            "affectedRows": 1,
            "insertId": 0,
            "serverStatus": 2,
            "warningCount": 0,
            "message": "(Rows matched: 1  Changed: 0  Warnings: 0",
            "protocol41": true,
            "changedRows": 0
        }
    }
}
 *
 */ 
export function putUserMovieId(req, res) {
	if(req.headers.parseToken.id != req.params.userId) {
		res.status(401).json({
			success : false,
			message : "Error : Can Not Voting at Other User's Id"
		});
	}
	else {
		req.assert('userId', 'user id only integer').isInt(); 	
		req.assert('userId', 'user id not allow empty').notEmpty(); 	
		req.assert('movieId', 'movie id only integer').isInt();
		req.assert('movieId', 'movie id not allow empty').notEmpty();

		const error = req.validationErrors();
		if(error) {
			let parseErr = error.map(function(item, idx) {
				return item.msg;
			});
			res.status(401).json({
				message : "Error : " + parseErr 
			});
		}
		else {
			userModel.updateUserMovieIdById({
				id : req.params.userId,
				movieId : req.body.movieId
			}, (err, rows) => {
				if(err) {
					res.status(500).json({
						success : false,
						message : "Error : UserModel.updateUserMovieIdById"
					});
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
	}
}

/**
 * @api {get} api/vote/ 투표 결과 조회(전체)
 * @apiVersion 0.0.1
 * @apiName getVoteResult
 * @apiDescription 전체 영화의 현재 투표 순위를 보여준다.
 * @apiGroup Vote 
 *
 * @apiSuccessExample {json} Success-Response :
HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "rows": [
            {
                "id": 1,
                "title": "루시 (Lucy)",
                "year": "2014",
                "directorName": "뤽 베송",
                "posterUrl": "http://cfile17.uf.daum.net/image/2458B3375382F287111B8F",
                "voteCount": 4,
                "votePer": 0.8
            },
            {
                "id": 3,
                "title": "트랜센던스 (Transcendence)",
                "year": "2014",
                "directorName": "윌리 피스터",
                "posterUrl": "http://cfile119.uf.daum.net/image/243A7A4752BB8C5C377EEF",
                "voteCount": 1,
                "votePer": 0.2
            },
            {
                "id": 2,
                "title": "엑스 마키나 (Ex Machina)",
                "year": "2015",
                "directorName": "알렉스 갈린드",
                "posterUrl": "http://cfile116.uf.daum.net/image/227AFF4E5486B719247C67",
                "voteCount": 0,
                "votePer": 0
            }
        ]
    }
}

 *
 */ 
export function getVoteResult(req, res) {
	viewModel.selectVoteResultAll(req, (err, rows) => {
		if(err) {
			res.status(500).json({
				message : "Error : ViewModel.selectVoteResultAll"
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

/**
 * @api {get} api/vote/top 투표 결과 조회(TOP 1)
 * @apiVersion 0.0.1
 * @apiName getVoteResultTop
 * @apiDescription 투표 결과 중 현재 득표 수가 제일 높은 1개의 결과를 반환한다.
 * @apiGroup Vote 
 *
 * @apiSuccessExample {json} Success-Response :
HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "rows": [
            {
                "id": 1,
                "title": "루시 (Lucy)",
                "year": "2014",
                "directorName": "뤽 베송",
                "posterUrl": "http://cfile17.uf.daum.net/image/2458B3375382F287111B8F",
                "voteCount": 4,
                "votePer": 0.8
            }
        ]
    }
}

 *
 */ 
export function getVoteResultTop(req, res) {
	viewModel.selectVoteResultTop(req, (err, rows) => {
		if(err) {
			res.status(500).json({
				message : "Error : ViewModel.selectVoteResultTop"
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
