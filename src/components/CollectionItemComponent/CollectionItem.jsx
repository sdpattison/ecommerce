import "./CollectionItem.styles.scss";
import CustomButton from '../CustomButtonComponent/CustomButton';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, item: { name, price, imageUrl }, addItem }) =>{
    return(
        <div className="collection-item">
            <div className="image" style={{ backgroundImage: `url(${imageUrl})`}}>
            </div>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton onClick={() => addItem(item)} inverted> Add to cart </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch =>({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);