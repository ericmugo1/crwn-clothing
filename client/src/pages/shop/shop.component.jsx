import React,{ useEffect,lazy,Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewSpinnerContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageSpinnerContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart,match }) => {

    useEffect(() => {
        fetchCollectionsStart();
    },[fetchCollectionsStart]);

    return (
        <div className='shop-page'>
            <Suspense fallback={ <Spinner /> }>
                <Route exact path={ `${match.path}` }
                    component={ CollectionsOverviewSpinnerContainer } />
                <Route path={ `${match.path}/:collectionId` }
                    component={ CollectionPageSpinnerContainer } />
            </Suspense>
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
