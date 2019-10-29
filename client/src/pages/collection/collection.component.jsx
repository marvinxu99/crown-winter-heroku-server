import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.component';

import PageNotFound from '../../pages/page-not-found/page-not-found.component';

import './collection.styles.scss';

const CollectionPage = ({ collection }) => {
  if (!collection) return <PageNotFound />;
  
  const { title, items } = collection;
  return(
    <div className='collection-page'>
      <h2 className='title'>{ title }</h2>
      <div className='items'>
        {
          items.map(item => (
            <CollectionItem 
              className='collection-item' 
              key={ item.id } 
              item={ item } 
            /> 
          ))
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);