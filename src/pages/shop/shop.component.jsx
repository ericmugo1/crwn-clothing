import React from 'react';
import CollectionsOverviewSpinnerContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageSpinnerContainer from '../collection/collection.container';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';


class ShopPage extends React.Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

    render() {
        const { match } = this.props;
        return (
            <div className='shop-page'>
                <Route exact path={ `${match.path}` }
                    component={ CollectionsOverviewSpinnerContainer } />
                <Route path={ `${match.path}/:collectionId` }
                    component={ CollectionPageSpinnerContainer } />
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
});

export default connect(
    null,
    mapDispatchToProps)
    (ShopPage);
