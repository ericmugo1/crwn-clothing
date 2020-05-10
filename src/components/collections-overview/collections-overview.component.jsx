import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";
import { shopCollectionsSelector } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../collection-preview/collection-preview.component";

import './collections-overview.styles.scss';


const collectionsOverview = ({ collections }) => (
    <div className='collections-overview'>
        { collections.map(({ id,...otherCollectionProps }) =>
            <CollectionPreview key={ id } { ...otherCollectionProps } />
        ) }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: shopCollectionsSelector
});


export default connect(mapStateToProps)(collectionsOverview)
