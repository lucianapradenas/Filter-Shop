import React from 'react';

class ProductCategoryRow extends React.Component {
    render() {
    const category = this.props.category;
    return (
        <tr>
            <th colSpan="2">
            {category}
            {console.log(category)}
            </th>
        </tr>
        );
    }
}

export default ProductCategoryRow;