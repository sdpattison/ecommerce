import React from "react";
import "./ShopPage.styles.scss";
import CollectionPreview from "../../components/CollectionPreviewComponent/CollectionPreview";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectShopCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => {
    return(
        <div className="shop-page">
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

export default connect(mapStateToProps)(ShopPage);