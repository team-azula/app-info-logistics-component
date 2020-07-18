## Config Details

var id = Math.floor(Math.random() * 10000000);

export let options = {
  vus: 100,
  duration: '300s',
};

export default function() {
  http.get(`http://localhost:3004/apps/${id}`);
  sleep(1);
}



## Sample Results:


    data_received..............: 133 MB 442 kB/s
    data_sent..................: 20 MB  68 kB/s
    http_req_blocked...........: avg=310.83µs min=0s med=4µs      max=246.88ms p(90)=6µs   p(95)=12µs
    http_req_connecting........: avg=302.41µs min=0s med=0s       max=246.74ms p(90)=0s    p(95)=0s
    http_req_duration..........: avg=678.88ms min=0s med=585.44ms max=4.9s     p(90)=1.02s p(95)=1.56s
    http_req_receiving.........: avg=56.67µs  min=0s med=44µs     max=108.93ms p(90)=76µs  p(95)=91µs
    http_req_sending...........: avg=37.37µs  min=0s med=18µs     max=90.24ms  p(90)=31µs  p(95)=40µs
    http_req_tls_handshaking...: avg=0s       min=0s med=0s       max=0s       p(90)=0s    p(95)=0s
    http_req_waiting...........: avg=678.79ms min=0s med=585.36ms max=4.9s     p(90)=1.02s p(95)=1.56s
    http_reqs..................: 222838 739.438444/s
    iteration_duration.........: avg=1.68s    min=1s med=1.58s    max=6.2s     p(90)=2.05s p(95)=2.6s
    iterations.................: 222838 739.438444/s
    vus........................: 463    min=463  max=1250
    vus_max....................: 1250   min=1250 max=1250