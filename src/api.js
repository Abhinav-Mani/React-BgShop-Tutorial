import axios from "axios";

export default { 
    games:{
        fetchAll: ()=> axios.get("http://localhost:2370/api/authgames").then( res => res.data.games ),
        createGame: game => axios.post("http://localhost:2370/api/authgames",{game}).then(res =>res.data.game),
        update : game =>axios.put(`http://localhost:2370/api/authgames/${game._id}`,{game}).then(res => res.data.game),
        delete: game => axios.delete(`http://localhost:2370/api/authgames/${game._id}`),
        fetchById: id => axios.get(`http://localhost:2370/api/authgames/${id}`).then(res=> res.data.game)
    },
    users:{
        create: user => axios.post("http://localhost:2370/api/users",{user}),
        login: credentials => axios.post("http://localhost:2370/api/auth",{credentials}).then(res => res.data.token)
    }
}