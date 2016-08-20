// account.postLogin
/**
 * @api {post} api/account/login 로그인
 * @apiVersion 0.0.1
 * @apiName postLogin
 * @apiDescription E-Mail로 로그인하여 결과를 JSON 형태로 반환한다.
 * @apiGroup Account
 *
 * @apiParam {String} email 사용자 이메일, empty, isEmail 체크를 수행한다.
 *
 * @apiSuccess {Boolean} success 로그인 성공 여부를 반환한다.
 * @apiSuccess {Object} data 로그인 성공 시 사용자 데이터와 세션 토큰 값을 가진다.
 * @apiSuccess {String} data.token SECRET_KEY로 인코딩된 jwt 값
 * @apiSuccess {Object} data.row 사용자 정보
 * @apiSuccess {Number} data.row.id 사용자 인덱스 번호
 * @apiSuccess {String} data.row.email 사용자 이메일
 * @apiSuccess {String} data.row.name 사용자 이름
 * @apiSuccess {Number} data.row.movidId 사용자가 투표한 영화 인덱스 번호
 *
 * @apiSuccess (500) {Boolean} success 로그인 성공 여부를 반환한다.
 * @apiSuccess (500) {String} message 다양한 이유로 Success 실패시 Error 메시지 출력
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "row": {
            "id": 1,
            "email": "foo@bar.com",
            "name": "Foo Bar",
            "movieId": 3
        },
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZXhwaXJlIjoiMjAxNi0wOC0xMVQxNzo0OToyNy4yNTVaIn0.j21zelfT8ERdGeedm78y2NUBAiQsuhTsyePdsU66t-k"
    }
}
*/


// account.getUserInfo
/**
 * @api {get} api/account/:id 단일 사용자 정보 획득
 * @apiVersion 0.0.1
 * @apiName getUserInfo
 * @apiDescription 사용자의 id 값으로 정보를 조회한다. jwt token 테스트 용도로 작성되었다. 
 * @apiGroup Account
 *
 * @apiHeader {String} token 로그인시 발급 받은 세션 토큰 값. 본인 정보가 아니면 조회할 수 없다.
 * @apiParam {Number} id 정보를 조회할 사용자 id 
 *
 * @apiSuccess {Boolean} success 성공 여부를 반환한다.
 * @apiSuccess {Object} data 성공 시 사용자 데이터 값을 가진다.
 * @apiSuccess {Object} data.row 사용자 정보
 * @apiSuccess {Number} data.row.id 사용자 인덱스 번호
 * @apiSuccess {String} data.row.email 사용자 이메일
 * @apiSuccess {String} data.row.name 사용자 이름
 * @apiSuccess {Number} data.row.movidId 사용자가 투표한 영화 인덱스 번호
 *
 * @apiSuccess (500) {Boolean} success 로그인 성공 여부를 반환한다.
 * @apiSuccess (500) {String} message 다양한 이유로 Success 실패시 Error 메시지 출력
 *
 * @apiSuccessExample {json} Success-Response:
 * HTTP/1.1 200 OK
{
    "success": true,
    "data": {
        "row": {
            "id": 1,
            "email": "foo@bar.com",
            "name": "Foo Bar",
            "movieId": 3
        }
    }
}
 */
