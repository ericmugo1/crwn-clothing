import React from "react";
import { connect } from "react-redux";
import { collectionCategorySelector } from "../../redux/shop/shop.selectors";
import CollectionItem from "../../components/collection-item/collection-item.component";
import {
    CollectionPageContainer,
    CollectionTitle,
    CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    const { title,items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{ title } </CollectionTitle>
            <CollectionItemsContainer>
                { items.map(item => <CollectionItem key={ item.id } item={ item } />) }
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
}

const mapStateToProps = (state,ownProps) => ({
    collection: collectionCategorySelector(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);