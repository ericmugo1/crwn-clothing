import React,{ useEffect } from 'react';
import CollectionsOverviewSpinnerContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageSpinnerContainer from '../collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart,match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Route exact path={ `${match.path}` }
                component={ CollectionsOverviewSpinnerContainer } />
            <Route path={ `${match.path}/:collectionId` }
                component={ CollectionPageSpinnerContainer } />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(
    null,
    mapDispatchToProps)
    (ShopPage);
