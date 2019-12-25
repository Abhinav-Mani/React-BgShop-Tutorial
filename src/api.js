import axios from "axios";

export default { 
    games:{
        fetchAll: ()=> axios.get("http://localhost:2370/api/unsafegames").then( res => res.data.games ),
        createGame: game => axios.post("http://localhost:2370/api/unsafegames",{game}).then(res =>res.data.game),
        update : game =>axios.put(`http://localhost:2370/api/unsafegames/${game._id}`,{game}).then(res => res.data.game),
        delete: game => axios.delete(`http://localhost:2370/api/unsafegames/${game._id}`)
    }
}