.# Similar Apps Module

## PostgreSQL

* SELECT * FROM updates WHERE id=1000000;
* Planning Time: 1.767 ms
* Execution Time: 0.073 ms

* Query Result 10000000	"Tuna"	"Geraldine Altenwerth"	"https://loremflickr.com/160/160?lock=595"	"Social"	"Sat Jan 11 2020 03:06:54 GMT-0800 (Pacific Standard Time)"	"27014MB"	false	3	39745	8.18	10364	"Fri Mar 27 2020 04:45:08 GMT-0700 (Pacific Daylight Time)"


## Cassandra

* SELECT * FROM updates WHERE id=1000000;
* Query Time: 25.739 ms
* id       | author         | category | createdat                       | currentversion | editorchoice | imageurl                                 | installs | name  | rating | ratings | size    | updatedat
----------+----------------+----------+---------------------------------+----------------+--------------+------------------------------------------+----------+-------+--------+---------+---------+---------------------------------
 10000000 | Drew Rodriguez |   Social | 2019-09-15 07:32:25.892000+0000 |           3.73 |         True | https://loremflickr.com/160/160?lock=764 |    75121 | Shoes |      2 |   82444 | 94661MB | 2020-06-28 09:44:45.165000+0000

