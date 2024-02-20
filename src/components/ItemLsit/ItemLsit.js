import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ products }) => {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {products.map((prod) => (
        <div key={prod.id} className="col">
          <div className="card border shadow-sm h-100">
            <div className="card-body">
              <Item {...prod} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
