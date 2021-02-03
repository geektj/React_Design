import React,{Component} from 'react';
import '../assets/css/Dashboard.scss';
import '../assets/css/style.scss';



class GridBox extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    renderGridBox = (info) => {
        if (info && info.name && info.age && info.city && info.aging && info.skin && info.other && info.bgColor) {
            return (
                <div className="grid-box" style={{'background-color': info.bgColor}}> 
                    <div className="text-box">
                        <div className="person-name text-box-font">{info.name}</div>
                        <div className="age-city text-box-font">{info.age}<span>{info.city}</span></div>
                        <div className="aging text-box-font">{info.aging}<span>{info.skin}</span></div>
                        <div className="others text-box-font">{info.other}</div>
                    </div>
                </div>
            )
        } else if(info && info.bgColor && info.image) {
            return (
                <div className="grid-box grid-box-product" style={{'background-color': info.bgColor}}> 
                    <div className="bottle-box">
                        <img src={info.image} alt="bottle" />
                    </div>
                </div>
            )
        } else if(info.bgColor) {
            return(
                <div className="grid-box" style={{'background-color': info.bgColor}}> 
                    <div className="box"></div>
                </div>
            )
        } else if(info && info.image) {
            return (
                <div className="grid-box person-image" style={{'background-color': info.bgColor}}> 
                    <div className="image-box">
                        <img src={info.image} alt="person" />
                    </div>
                </div>
            )
        }
    }

    render(){
        const { info } = this.props
        return(
            <>{this.renderGridBox(info)}</>
        )
    }
}
export default GridBox;