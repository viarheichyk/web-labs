import React, { Component } from 'react';
import Card from './Card';
import CardsCreationForm from './CardsCreationForm'
import { mockedApiCall } from '../../api/mockedApi';
import style from './CardsContainer.module.scss';

export default class CardsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            showCardsCreationForm: false,
            fields: {
                name: '',
                description: '',
                category: '',
                imgPath: '',
                price: ''
            },
            errors: {},
        }

        this.removeCard = this.removeCard.bind(this);
        this.showCardsCreationForm = this.showCardsCreationForm.bind(this);
        this.addCard = this.addCard.bind(this);
        this.inputChange = this.inputChange.bind(this);
    }

    removeCard(id) {
        const { cards } = this.state;
        
        const newCards = cards.filter((card) => {
            return card.id !== id;
        });

        this.setState({ cards: newCards });
    }

    inputChange (field, event) {
        let { fields } = this.state;
        fields[field] = event.target.value;

        this.setState({ fields });
    }

    addCard(e) {
        e.preventDefault();
        
        if(this.isCardCreationFormValid()) {
            const { cards } =  this.state;
            const { name, description, price, category, imgPath } = this.state.fields;
            const newCards = cards.concat({
                id: cards[cards.length - 1].id + 1,
                name: name,
                description: description,
                category: category,
                imgPath: imgPath,
                price: price
            });

            this.setState({ 
                cards: newCards, 
                fields: {
                    name: '', 
                    description: '',
                    category: '',
                    imgPath: '',
                    price: '' 
                }
            });
        }
    }

    isCardCreationFormValid() {
        const { name, description, price, category, imgPath } = this.state.fields;
        let errors = {};
        let isValid = true;

        if(!name) {
            isValid = false;
            errors.name = 'Error! Field is empty';
        }
        else {
            if(!name.match(/^[a-zA-Z]+$/)){
                isValid = false;
                errors.name = "Only letters";
            }  
        }

        if(!description) {
            isValid = false;
            errors.description = 'Error! Field is empty';
        } 
        else {
            if(!description.match(/^[a-zA-Z0-9]+$/)){
                isValid = false;
                errors.description = "Only letters and numbers";
            }
        }

        if(!imgPath) {
            isValid = false;
            errors.imgPath = 'Error! Field is empty';
        }
        else {
            if(!imgPath.match(/(https?:\/\/[^\s]+)/g)){
                isValid = false;
                errors.imgPath = "Wrong url";
            }
        }

        if(!category) {
            isValid = false;
            errors.category = 'Error! Field is empty';
        }
        else {
            if(!category.match(/^[a-zA-Z]+$/)){
                isValid = false;
                errors.category = "Only letters";
            }
        }

        if(!price) {
            isValid = false;
            errors.price = 'Error! Field is empty';
        }
        else {
            if(!price.match(/^[+-]?\d+(\.\d+)?$/)){
                isValid = false;
                errors.price = "Only integer and float numbers";
            }
            if(price < 0) {
                isValid = false;
                errors.price = "Value should be positive";
            }
        }

        this.setState({ errors });

        return isValid;
    }

    showCardsCreationForm() {
        const { cardsCreationForm } = this.state;

        this.setState({ cardsCreationForm: !cardsCreationForm });
    }

    componentDidMount() {
        mockedApiCall().then(result => {
            this.setState({ cards: result });
        });
    }

    renderCards = (cards) => (
        cards.map((card, index) => <Card data={card} key={index} removeCardClick={this.removeCard} />)
    );

    render() {
        const { cards, cardsCreationForm, fields, errors } = this.state;

        return(
            <div>
                { cardsCreationForm ? <CardsCreationForm 
                        fields={fields}
                        inputChange={this.inputChange} 
                        addCardSubmit={this.addCard} 
                        errors={errors}
                    /> : null }
                    <a href="#" className={style.addCardLink} onClick={this.showCardsCreationForm}>Add Card</a>
                <section className={style.goods_list}>
                    {cards.length > 0 ? this.renderCards(cards) : 'No cards yeat'}
                </section>
            </div>
        );
    }
}