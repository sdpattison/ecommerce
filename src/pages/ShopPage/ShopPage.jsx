import React from "react";
import "./ShopPage.styles.scss";
import CollectionsOverview from '../../components/CollectionsOverviewComponent/CollectionsOverview';
import Collection from '../CollectionPage/Collection';

import { Route } from 'react-router-dom';

const ShopPage = ({ match }) => {
    return(
        <div className="shop-page">
            <Route exact path={ `${match.path}` } component={ CollectionsOverview }/>
            <Route path={`${match.path}/:collectionId`} component={ Collection }/>
        </div>
    );
}
export default ShopPage;