import React from 'react';
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { isFetchingCollectionsSelector,haveCollectionsLoadedSelector } from "../../redux/shop/shop.selectors";
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {


    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

    render() {
        const { match,isFetchingCollections,haveCollectionsLoaded } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={ `${match.path}` }
                    render={ props => <CollectionsOverviewWithSpinner
                        isLoading={ isFetchingCollections } { ...props } /> } />
                <Route path={ `${match.path}/:collectionId` }
                    render={ props => <CollectionPageWithSpinner
                        isLoading={ !haveCollectionsLoaded } { ...props } /> } />
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    isFetchingCollections: isFetchingCollectionsSelector,
    haveCollectionsLoaded: haveCollectionsLoadedSelector
});

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (ShopPage);
