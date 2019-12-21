import React from "react";
import GameList from "./GameList"
import _orderBy from "lodash/orderBy" 
import GameForm from "./GameForm"
import NavBar from "./navigation";

const publishers=[
    {
        _id:1,
        name:"Ubisoft"
    },
    {
        _id:2,
        name:"Teshla"
    }
]

var games=
    [
        {
            _id:1,
            publisher:1,
            price:199,
            image:"https://rcmg.in/rc/acquisition/articles/subway-surfers.jpg",
            title:"SubwaySurfer",
            player:1,
            time:60,
            featured:false
        },
        {
            _id:2,
            price:229,
            publisher:2,
            image:"https://cdn.vox-cdn.com/thumbor/hE3S4HcdweSa6dtx-MoAgGn-11Y=/0x0:1920x1080/1200x800/filters:focal(807x387:1113x693)/cdn.vox-cdn.com/uploads/chorus_image/image/63718087/rl_sarpbc10_blog_no_text.f44ca8609585ba611e1277fc600f5cc1.0.jpg",
            title:"Mad Cars",
            player:2,
            time:60,
            featured:true
        },
        {
            _id:3,
            publisher:1,
            price:399,
            image:"https://lh3.googleusercontent.com/hUaunWbtcpuqCqX9whTp2b0ikTnJytY2i5TD1OcJuwVNLJMt5XeYgKYCmkzMhcdSjvI_vL8O3DDk8nzr9hxpHw=rw-w380",
            title:"BorderLand3",
            player:2,
            time:60,
            featured:false
        }

    ];
class App extends React.Component{
    // constructor(props){
    //     super(props);
    //     this.state={
    //         games:[]
    //     };
    //     this.tog=this.tog.bind(this);
    // }
    state={
        games:[],
        showForm: false
    }
    componentDidMount(){
        this.setState({games:this.arr(games)});
    }
    arr(games){
        return _orderBy(games,["featured","title"],["desc","asc"]);
    }
    tog = gameId =>{
        // const newGames=this.state.games.map(game=>{
        //     if(gameId==game._id) return {...game, featured:!game.featured}
        //     return game;
        // });
        //console.log(newGames);
        this.setState({
            games : this.arr(this.state.games.map(
                g=>{
                    if(g._id===gameId) 
                        return {...g,featured: !g.featured};
                    return g;
                }
            ))
            });
        //alert(gameId);
    }
    showForm=()=>{
        this.setState({showForm: true});
    }
    hideForm=()=>{
        this.setState({showForm: false});
    }
    render(){
        return(
            <div className="ui container" >
                <NavBar show={this.showForm}/>
                {this.state.showForm && <GameForm publishers={publishers} hide={this.hideForm}/>}
                <br/>
                <GameList games= {this.state.games} tog={this.tog} />
            </div>
        )
    }
}

export default App;