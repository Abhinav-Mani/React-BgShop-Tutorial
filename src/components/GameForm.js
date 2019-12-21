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

class GameForm extends React.Component{
    state={
        data:{
            name:'',
            description:"",
            price:0,
            duration:0,
            player:0,
            featured:false,
            publisher:0,
            image:""
        },
        err:{
            name:"Cannot be Empty"
        }        
    }
    EventHandler = e =>{
        e.preventDefault();
        console.log(this.state)
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
        const {data,err} =this.state;
        return(
            <form className="ui form" onSubmit={this.EventHandler}>
                <div className="ui grid">
                    <div className="twelve wide column">
                                    <div className={err.name===""?("field"):("error field")}>
                                        <label htmlFor="name">Full Game Name</label>
                                        <input 
                                            type="text" 
                                            placeholder="Full Game Name" 
                                            name="name" 
                                            id="name"
                                            value={ data.name }
                                            onChange={ this.EventChange }>

                                        </input>
                                        <InLineMessege content={err.name} type="error"/>
                                    </div>
                                    <div className="field">
                                        <label htmlFor="description">Full Game Name</label>
                                        <textarea 
                                            type="text" 
                                            placeholder="Full Game Description" 
                                            name="description" 
                                            id="description"
                                            value={ this.state.data.description }
                                            onChange={ this.EventChange }>

                                        </textarea>
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

                <div className="field">
                                        <label htmlFor="name">Thumnails</label>
                                        <input 
                                            type="text" 
                                            placeholder="Thumnail" 
                                            name="image" 
                                            id="thumnail"
                                            value={ this.state.data.image }
                                            onChange={ this.EventChange }>

                                        </input>
                                    </div>
                
                <div className="three fields">
                    <div className="field">
                        <label htmlFor="price">Price</label>
                        <input 
                            type="number" 
                            placeholder="Price" 
                            name="price" 
                            id="price"
                            value={ this.state.data.price }
                            onChange={ this.EventNumberChange }>

                        </input>
                    </div>
                    <div className="field">
                        <label htmlFor="duration">Duration</label>
                        <input 
                            type="number" 
                            placeholder="Duration" 
                            name="duration" 
                            id="duration"
                            value={ this.state.data.duration }
                            onChange={ this.EventNumberChange }>

                        </input>
                    </div>
                    <div className="field">
                        <label htmlFor="players">Playes</label>
                        <input 
                            type="number" 
                            placeholder="Players" 
                            name="player" 
                            id="player"
                            value={ this.state.data.player }
                            onChange={ this.EventNumberChange }>

                        </input>                  
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
                <div className="field">
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
    })).isRequired
} 
GameForm.defaultProps={
    publishers:[]
}
export default GameForm;