import http from 'k6/http'
import {sleep} from 'k6'

export const options = {
    stages : [
        {
            duration:"30s",  // Ramping up
            target:10
        },
        {
            duration:"60s", // Saturation point
            target:10
        },
        {
            duration:"30s",  // Ramping down
            target:0
        }
    ]
}

export default function (){
    http.get('https://test.k6.io')
    sleep(1)
}