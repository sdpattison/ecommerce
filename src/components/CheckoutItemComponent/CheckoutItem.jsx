import './checkoutItem.styles.scss';
import { connect } from 'react-redux';
import { clearItem, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem = ({ item, item: { imageUrl, name, price, quantity }, clearItem, removeItem, addItem  }) =>{
    return(
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={ imageUrl } alt="item" />
            </div>
            <span className='name'>{ name  }</span>
            <span className='quantity'>
                <span className='arrow-left' onClick={ () => removeItem(item) }>&#10094;</span> 
                <span className='value'> { quantity } </span>
                <span className='arrow-right' onClick={ () => addItem(item) }>&#10095;</span>
            </span>
            <span className='price'>${ price  }</span>
            <div className='remove-button' onClick={ () => clearItem(item) }>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItem(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);