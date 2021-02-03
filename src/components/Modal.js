import React,{Component} from 'react';
import '../assets/css/Modal.scss';


class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <div className="modal-box"> 
                <div className="heading">Build my regime</div>
                <div className="para-text">A custom solution for your whiteheads —and no one else’s</div>
                <div className="primary-btn">
                    <a>Take Quiz</a>
                </div>
            </div>
        )
    }
}
export default Modal;