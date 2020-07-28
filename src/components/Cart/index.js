import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Card from '../Card'
import './styles.css'

const Cart = ({pokemonSelected, type, resetCart, filterUpdate}) => {

    const handleOpen = () => {
        filterUpdate("") 
        resetCart()
        setOpen(true);
    };

    const handleClose = () => {
    setOpen(false);
    };



    const [open, setOpen] = React.useState(false);

    return (
        <div className="cart">
            <div className=" cart-header">
                <h1>Carrinho</h1>
            </div>
            <div className="cart-body">
                {pokemonSelected.map((pokemon) => (
                    <div className="item">
                        <img className="item_pokemon-image" alt="image pokemon" src={pokemon.image}/>
                        <strong className="item_pokemon-name">{pokemon.name}<span>{` (x${pokemon.amount})`}</span></strong>
                        <div className="price">
                            <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                        <span className="item__pokemon-price">{pokemon.price * pokemon.amount}</span>
                        </div>
                    </div>
                    // <Card id={}/>
                ))}        
            </div>    
            <div className="cart-footer">
                <div className="item_total-price">
                    <p>Total: </p>
                    <div className="price">
                        <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                        <span className="card_pokemon-price">{pokemonSelected.reduce((totalPrice, pokemon) => {
                            return totalPrice + Number(pokemon.price * pokemon.amount)
                        },0)}</span>
                    </div>
                </div> 
                    
                <button className={`item_cart-button btn-cart-${type}`} href="#" onClick={handleOpen}>Finalizar</button>
            </div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className="modal"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
                <Fade in={open}>
                <div className={`card-modal card-modal-${type}`}>
                    <div className={`box-modal box-modal-${type}`}>
                        <h1 id="transition-modal-title">Obrigado!!!</h1>
                        <p id="transition-modal-description">Você recebeu de volta</p>
                        <span>
                            <img className="pokemon-price-image" alt="image of pokecoin" src={"/img/pokecoin.png"} />
                            {Number(Math.random() * 1000).toFixed(0)}
                        </span>
                    </div>
                </div>
                </Fade>
            </Modal>

        </div>
        
    )
};

export default Cart;