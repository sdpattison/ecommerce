import './collectionsoverview.styles.scss';
import CollectionPreview from '../CollectionPreviewComponent/CollectionPreview';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopCollections } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({ collections }) =>{
    return(
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) =>{
                return(
                    <CollectionPreview key={id} {...otherCollectionProps} />
                );
            })}
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    collections: selectShopCollections
});

export default connect(mapStateToProps)(CollectionsOverview);