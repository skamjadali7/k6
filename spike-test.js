import http from 'k6/http'
import {sleep} from 'k6'
export const options = {
    stages :[
        {
            duration: '30s',  // ramping up 
            target: 100
        },
        {
            duration:"10s", // ramping down
            target : 0
        }
    ]
}

export default function () {
    http.get('https://test.k6.io')
    sleep(1)
}