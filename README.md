# vote_widget with Tumblbug
* Movie Vote Widget with express.js & react.js

## Summary
* [vote_widget Wiki](https://github.com/uyu423/vote_widget/wiki)

## Database Schema
### Table:movie
```sql
-- 영화 정보 테이블
CREATE TABLE IF NOT EXISTS `movie` (
	`id`           INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '인덱스', -- 인덱스
	`title`        VARCHAR(255)     NOT NULL     COMMENT '제목', -- 제목
	`directorName` VARCHAR(255)     NULL     COMMENT '감독명', -- 감독명
	`summary`      TEXT             NULL     COMMENT '줄거리', -- 줄거리
	`year`         VARCHAR(255)     NULL     COMMENT '년도', -- 년도
	`posterUrl`    VARCHAR(255)     NULL     COMMENT '포스터URL' -- 포스터URL
)
DEFAULT CHARACTER SET = 'utf8mb4'
DEFAULT COLLATE = 'utf8mb4_unicode_ci'
COMMENT '영화 정보 테이블';
```
#### Dummy Rows
  ```sql
  INSERT INTO `movie` (`id`, `title`, `directorName`, `summary`, `year`, `posterUrl`) VALUES 
    (NULL, '루시 (Lucy)', '뤽 베송', '평범한 삶을 살던 여자 루시(스칼렛 요한슨)는 어느 날 지하세계에서 극악무도하기로 유명한 미스터 장(최민식)에게 납치되어, 몸 속에 강력한 합성 약물을 넣은 채 강제로 운반하게 된다. 다른 운반책들과 같이 끌려가던 루시는 갑작스런 외부의 충격으로 인해 몸 속 약물이 체내로 퍼지게 되면서, 그녀 안의 모든 감각이 깨어나기 시작하는데…', '2014', 'http://cfile17.uf.daum.net/image/2458B3375382F287111B8F'), 
    (NULL, '엑스 마키나 (Ex Machina)', '알렉스 갈린드', '유능한 프로그래머 ‘칼렙’(돔놀 글리슨)은 치열한 경쟁 끝에 인공지능 분야의 천재 개발자 ‘네이든’(오스카 아이삭)의 새로운 프로젝트에 참여하게 된다. 외부엔 알려지지 않은 그의 비밀 연구소로 초대받은 ‘칼렙’은 그 곳에서 네이든이 창조한 매혹적인 A.I. ‘에이바’(알리시아 비칸데르)를 만나게 된다. 그녀의 인격과 감정이 진짜인지 아니면 프로그래밍 된 것인 지를 밝히는 테스트를 진행하지만. 점점 에이바도 그녀의 창조자 네이든도 그리고 자신의 존재조차 믿을 수 없게 되고 모든 것을 의심하게 되는데…', '2015', 'http://cfile116.uf.daum.net/image/227AFF4E5486B719247C67'), 
    (NULL, '트랜센던스 (Transcendence)', '윌리 피스터', '인류가 수억 년에 걸쳐 이룬 지적능력을 초월하고 자각능력까지 가진 슈퍼컴 ‘트랜센던스’의 완성을 목전에 둔 천재 과학자 ‘윌’(조니 뎁)은 기술의 발전은 인류의 멸망이라 주장하는 반(反) 과학단체 ‘RIFT’의 공격을 당해 목숨을 잃는다. 연인 ‘에블린’(레베카 홀)은 윌의 뇌를 컴퓨터에 업로드 시켜 그를 살리는데 성공하지만, 또 다른 힘을 얻은 그는 온라인에 접속해 자신의 영역을 전 세계로 넓혀가기 시작하는데…', '2014', 'http://cfile119.uf.daum.net/image/243A7A4752BB8C5C377EEF');
  ```
### Table:user
```sql
-- 사용자 정보 테이블
CREATE TABLE IF NOT EXISTS `user` (
	`id`       INTEGER UNSIGNED NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT '인덱스', -- 인덱스
	`email`    VARCHAR(255)     NOT NULL     COMMENT '이메일', -- 이메일
	`name`     VARCHAR(255)     NOT NULL     COMMENT '이름', -- 이름
	`movieId` INTEGER UNSIGNED NULL     COMMENT '영화 인덱스' -- 영화 인덱스
)
DEFAULT CHARACTER SET = 'utf8mb4'
DEFAULT COLLATE = 'utf8mb4_unicode_ci'
COMMENT '사용자 정보 테이블';

ALTER TABLE `user`
	ADD CONSTRAINT `FK_movie_TO_user` -- 영화 정보 테이블 -> 사용자 정보 테이블
		FOREIGN KEY (
			`movieId` -- 영화 인덱스
		)
		REFERENCES `movie` ( -- 영화 정보 테이블
			`id` -- 인덱스
		);
```
#### Dummy Rows
  ```sql
  INSERT INTO `user` (`id`, `email`, `name`, `movieId`) VALUES 
  	(NULL, 'foo@bar.com', 'Foo Bar', 3), 
  	(NULL, 'hello@world.com', 'Hello World', 3),
  	(NULL, 'console@log.com', 'console.log', 3), 
  	(NULL, 'king@sejong.co.kr', '한글이름', 1), 
  	(NULL, 'ubuntu@github.com', 'Ubuntu', 1),
  	(NULL, 'developer@tumblbug.com', 'Tumblbug', NULL);
  ```
### View:view-voteResult
```sql
CREATE VIEW `view-voteResult` AS 
  SELECT  M.`id`,  M.`title`,  M.`year`,  M.`directorName`,  M.`posterUrl`,  
    COUNT(U.id) AS `voteCount`,  
    COUNT(U.id) /(SELECT COUNT(id) FROM `user` WHERE `movieId` IS NOT NULL) AS `votePer`
  FROM `movie` M LEFT JOIN `user` U ON M.id = U.`movieId`
  GROUP BY M.`id`
  ORDER BY `voteCount` DESC;
```
* Warnning : MySQL Community Version can NOT using subquery in SELECT query of view DDL
  * If you using MySQL Community version, using next DDL query
  ```sql
  CREATE VIEW `view-voteUserCount` AS
    SELECT COUNT(id) as `count` FROM `user` WHERE `movieId` IS NOT NULL;
    
  CREATE VIEW `view-voteResult` AS 
    SELECT  M.`id`,  M.`title`,  M.`year`,  M.`directorName`,  M.`posterUrl`,  
    COUNT(U.id) AS `voteCount`,  
    COUNT(U.id)/VUC.`count` AS `votePer`
  FROM `movie` M 
  	LEFT JOIN `user` U ON M.id = U.`movieId` 
  	JOIN `view-voteUserCount` VUC
  GROUP BY M.`id`
  ORDER BY `voteCount` DESC;
  ```

### Query:Movies table에 있는 모든 영화의 “영화 제목”, “좋아하는 사람 수"를 보여주는 쿼리문
```sql
SELECT * FROM `view-voteResult`
```

### Query:사용자들이 가장 좋아하는 영화를 보여주는 쿼리문
```sql
SELECT * FROM `view-voteResult` LIMIT 0, 1
```

## Development Enviorment
* Ubuntu 16.04 LTS (x64)
* node@6.3.1
* mariadb@10.0.25

## Require
* npm || npm3
  * installation
  <pre>sudo apt install npm</pre>

## Executiton
* node_modules dependency
<pre>$ npm install</pre>
* .env modify (DB_HOST, PORT, etc...)
<pre>$ cp .env.sample .env</pre>
* server execution
<pre>$ node server</pre>

## Testing
