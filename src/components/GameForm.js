import React from "react";
import PropTypes from "prop-types";
import ReactImageFallback from "react-image-fallback";
import InLineMessege from "./InlineErrorMessege";

// const tags=[
//     {
//         _id:1,
//         name:"Dice"
//     },
//     {
//         _id:2,
//         name:"Economic"
//     },
//     {
//         _id:3,
//         name:"Family"
//     }
// ]

// const genres=[
//     {
//         _id:1,
//         name:"SOLO"
//     },
//     {
//         _id:2,
//         name:"Classic"
//     },
//     {
//         _id:3,
//         name:"RAve"
//     }
// ]
var initalData={
    title:'',
    description:"",
    price:0,
    time:0,
    player:0,
    featured:false,
    publisher:0,
    image:""
};

class GameForm extends React.Component{
    state={
        data:initalData,
        loading:false,
        err:{}        
    }
    componentDidMount(){
        if(this.props.selectedGame.title)
        this.setState({data: this.props.selectedGame});
        else
        this.setState({data:initalData});
        //console.log(this.state);
    }
    componentWillReceiveProps(newProps){
        if(newProps.selectedGame._id&&this.state.data._id!=newProps.selectedGame._id)
        this.setState({data:newProps.selectedGame});
        else
        this.setState({data:initalData});
    }
    validate = data =>{
        var error={};
        if(!data.title) error.name="Cannot be Empty";
        if(!data.description) error.description="Cannot be Empty";
        if(!data.image) error.image="Cannot be Empty";
        if(data.time<=0) error.time="Too short! Isn't it?";
        if(data.price<0) error.price="Too cheap! Isn't it?";
        if(data.player<=0) error.player="Too less players! Isn't it?";
        if(data.publisher==0) error.publisher="Select AnyOne";

        return error;
    }
    EventHandler = e =>{
        this.setState({loading:true});
        e.preventDefault();
        const err=this.validate(this.state.data);
        //const err={};
        
        
            if(Object.keys(err).length===0){
                //console.log(this.state.data);
                this.props.submit(this.state.data)
                .catch(err=> this.setState({err: err.response.data.errors,loading : false}));
            }
            else
            this.setState({err:err,loading:false})
        
        
        //console.log(this.state);
    }

    EventChange = e =>{
           // console.log(e.target.value);
            this.setState({data:{...this.state.data,[e.target.name] : e.target.value }
            
        });
        //console.log(this.state)
    }
    EventNumberChange = e =>{
            //console.log(e.target.value);
            this.setState({ data:{...this.state.data,[e.target.name] : parseInt( e.target.value ) }
        });
    }
    EventBooleanChange = e =>{
        this.setState({ data:{ ...this.state.data,[e.target.name] : e.target.checked}
        });
    }
    EventRadioChange = genre =>{
        this.setState({ data:{...this.state.data, genre: genre._id }
        })
    }
    ToggleTag = tag =>{
        this.state.tags.includes(tag._id)? 
            this.setState({ data:{...this.state.data,tags: this.state.tags.filter(id => id !== tag._id)}                
            })
        :
        this.setState({ data:{...this.state.data,tags: [...this.state.tags,tag._id]}
        })
    }
    render()
    {
        const {data,err,loading} =this.state;
        return(
            <form className={ loading? "ui form loading" : "ui form" } onSubmit={this.EventHandler}>
                <div className="ui grid">
                    <div className="twelve wide column">
                                    <div className={err.name===""|| err.name===undefined?("field"):("error field")}>
                                        <label htmlFor="name">Full Game Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Full Game Name" 
                                            name="title" 
                                            id="name"
                                            value={ data.title }
                                            onChange={ this.EventChange }>

                                        </input>
                                        <InLineMessege content={err.name} type="error"/>
                                    </div>
                                    <div className={err.description===""|| err.description===undefined?("field"):("error field")}>
                                        <label htmlFor="description">Full Game Name</label>
                                        <textarea 
                                            type="text" 
                                            placeholder="Full Game Description" 
                                            name="description" 
                                            id="description"
                                            value={ this.state.data.description }
                                            onChange={ this.EventChange }>
                                        </textarea>
                                        <InLineMessege content={err.description} type="error"/>
                                </div>

                    </div>
                    <div className="four wide column">
                        <ReactImageFallback
                            src={this.state.data.image}
                            fallbackImage="https://via.placeholder.com/250"
                            alt="Thumnails"
                        />

                    </div>

                </div>

                <div className={err.image===""|| err.image===undefined?"field":"error field"}>
                                        <label htmlFor="name">Thumnails</label>
                                        <input 
                                            type="text" 
                                            placeholder="Thumnail" 
                                            name="image" 
                                            id="thumnail"
                                            value={ this.state.data.image }
                                            onChange={ this.EventChange }>

                                        </input>
                                        <InLineMessege content={err.image} type="error"/>
                                    </div>
                
                <div className="three fields">
                    <div className={err.price===""|| err.price===undefined?"field":"error field"}>
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            placeholder="Price" 
                            name="price" 
                            id="price"
                            value={ this.state.data.price }
                            onChange={ this.EventNumberChange }>

                        </input>
                        <InLineMessege content={err.price} type="error"/>
                    </div>
                    <div className={err.time===""|| err.time===undefined?"field":"error field"}>
                        <label htmlFor="time">time</label>
                        <input 
                            type="number" 
                            placeholder="time" 
                            name="time" 
                            id="time"
                            value={ this.state.data.time }
                            onChange={ this.EventNumberChange }>
                        </input>
                        <InLineMessege content={err.time} type="error"/>
                    </div>
                    <div className={err.player===""|| err.player===undefined?"field":"error field"}>
                        <label htmlFor="players">Playes</label>
                        <input 
                            type="number" 
                            placeholder="Players" 
                            name="player" 
                            id="player"
                            value={ this.state.data.player }
                            onChange={ this.EventNumberChange }>

                        </input>
                        <InLineMessege content={err.player} type="error"/>                  
                    </div>
                </div>
                {/* <div className="inline field">
                    <input
                        id="featured"
                        type="checkbox"
                        name="featured"
                        checked={this.state.featured}
                        onChange={this.EventBooleanChange}
                    />
                    <label htmlFor="featured">Featured</label>
                </div>
                <div className="field">
                    <label>Tags</label>
                    {
                        tags.map(tag=>(
                            <div key={tag._id} className="inline field">
                                <input
                                    id={`tag-${tag._id}`}
                                    type="checkbox"
                                    checked={ this.state.tags.includes(tag._id) }
                                    onChange={()=> this.ToggleTag(tag)}
                                    
                                />
                                <label htmlFor={`tag-${tag._id}`}>{tag.name}</label>
                            </div>

                            )
                        )
                    }
                </div>
                <div className="field">
                    <label>Genres</label>
                    {
                        genres.map(genre=>(
                            <div key={genre._id} className="inline field">
                                <input
                                    id={`genre-${genre._id}`}
                                    type="radio"
                                    checked={this.state.genre === genre._id}
                                    onChange={() => this.EventRadioChange(genre) }
                                />
                                <label htmlFor={`genre-${genre.id}`}>{genre.name}</label>
                            </div>
                            
                        ))
                    }

                </div> */}
                <div className={err.publisher===""|| err.publisher===undefined?"field":"error field"}>
                    <label>Publishers</label>
                    <select
                        name="publisher"
                        value={this.state.data.publisher}
                        onChange={this.EventNumberChange}    
                    >
                        <option value="0">Select Publisher</option>
                        {
                            this.props.publishers.map(publisher =>(
                            <option key={publisher._id} value={publisher._id}> {publisher.name}</option>
                            ))
                        }


                    </select>
                    <InLineMessege content={err.publisher} type="error"/>

                </div>
                <div className="ui fluid buttons">
                    <button type="submit" className="ui primary button"> Submit </button>
                    <div className="or"></div>
                    <button type="submit" className="ui button" onClick={this.props.hide}> Cancel! </button>
                </div>
            </form>
        )
    }
}
GameForm.propTypes={
    publishers:PropTypes.arrayOf(PropTypes.shape({
        _id:PropTypes.number.isRequired,
        name:PropTypes.string.isRequired
    })).isRequired,
    submit:PropTypes.func.isRequired,
    selectedGame:PropTypes.object.isRequired
} 
GameForm.defaultProps={
    publishers:[]
}
export default GameForm;