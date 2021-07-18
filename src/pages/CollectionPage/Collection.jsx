import './collection.styles.scss';

import CollectionItem from '../../components/CollectionItemComponent/CollectionItem';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selectors';

const Collection = ({ collection }) =>{
    return(
        <div className='collection-page'>
            { collection.title }
        </div>
    );
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(Collection);