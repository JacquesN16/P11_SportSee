import {CONFIG} from '../../config'
import axios from "axios";




export default class mainApi {
    static async getUserByID (id) {
        const res = await axios({
            method:'get',
            url: CONFIG.baseURL + `/user/${id}`
        })

        return res.data
    }

    static async getUserActivity(id){
        const res = await axios({
            method:'get',
            url : CONFIG.baseURL + `/user/${id}/activity`
        })

        return res.data
    }

    static async getUserAverageSession(id){
        const res = await axios({
            method:'get',
            url: CONFIG.baseURL + `/user/${id}/average-sessions`
        })

        return res.data
    }
}
