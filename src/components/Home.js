import React from 'react';
import Header from './Header';
import Modal from './Modal';
import GridBox from './GridBox';
import '../assets/css/style.scss';
import Product from '../assets/Images/Artboard 1 1 (1).svg';
import Person1 from '../assets/Images/Rectangle 167.svg';
import Person2 from '../assets/Images/Rectangle 169.svg';
import Person3 from '../assets/Images/Rectangle 168.svg';
import Person4 from '../assets/Images/Rectangle 170.svg';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.gridBoxes = [
            {
                bgColor: '#EEEEEE'
            },
            {
                bgColor: '#fffffff'
            },
            {
                bgColor: '#fffffff'
            },
            {
                bgColor: '#EEEEEE',
                name: 'Meera Sanyal',
                age: '30y',
                city: 'Banglore',
                aging: 'Aging',
                skin: 'Oily Skin',
                other: '5 step regime A.M.'
            },
            {
                bgColor: '#F2BBAD',
                image: Product,
                
            },
            {
                // bgColor: '#fffffff',
                image: Person1,
            },
            {
                bgColor: '#fffffff',
                
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                image: Person2, 
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                image: Person3,
            },
            {
                bgColor: '#9AB7D3',
                image: Product,
                
            },
            {
                bgColor: '#EEEEEE',
                name: 'Meera Sanyal',
                age: '32y',
                city: 'Delhi',
                aging: 'Aging',
                skin: 'Oily Skin',
                other: '5 step regime A.M.'
            },
            {
                bgColor: '#fffffff',
            },
            {
                image: Person4,
            },
            {
                bgColor: '#EEEEEE',
                name: 'Meera Sanyal',
                age: '32y',
                city: 'Mumbai',
                aging: 'Aging',
                skin: 'Oily Skin',
                other: '5 step regime A.M.'
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#DFCCF1',
                image: Product,
                
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#BDD0C4',
                image: Product,
                
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#fffffff',
            },
            {
                bgColor: '#EEEEEE',
                name: 'Meera Sanyal',
                age: '32y',
                city: 'Chennai',
                aging: 'Aging',
                skin: 'Oily Skin',
                other: '5 step regime A.M.'
            },





        ]
        this.state = {

        }
    }
    render(){
        return(
            <div className="main">
                <Header />
                <div className="container-box">
                    {this.gridBoxes.map((gridBox, index) => <GridBox info={gridBox} key={index} /> )}
                    <Modal />
                </div>
                
            </div>
            
            
            
        )
    }
}
export default Home;