import './collection.styles.scss';

import CollectionItem from '../../components/CollectionItemComponent/CollectionItem';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const Collection = ({ collection: { items, title } }) =>{
    return(
        <div className='collection-page'>
            <span className='title'> { title  } </span>
            <div className='items'>
                {
                    items.map(item =>
                        <CollectionItem key={item.id} item={ item } />
                    )
                }
            </div>
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);