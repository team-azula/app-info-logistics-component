import http from 'k6/http';
import { sleep } from 'k6';


var id = Math.floor(Math.random() * 10000000);

export let options = {
  vus: 1000,
  duration: '300s',
};

export default function() {
  http.get(`http://localhost:3004/apps/${id}`);
  sleep(1);
}


// export default function() {
//   http.post(`http://localhost:3004/?id=${id}`);
//   sleep(1);
// }

//In Terminal Run $ k6 run script.js