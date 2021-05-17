/*
 * @Description: 可查询的产品表格
 * @Author: 管铭钊
 * @Date: 2021/5/17
 */
import React from 'react'

class QueryProductTable extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            inStockOnly: false
        }
        this.onFilterTextChange = this.onFilterTextChange.bind(this)
        this.onStockOnlyChange = this.onStockOnlyChange.bind(this)
    }

    onFilterTextChange(filterText) {
        this.setState({ filterText: filterText })
    }

    onStockOnlyChange(inStockOnly) {
        this.setState({ inStockOnly: inStockOnly })
    }

    render() {
        return (
            <div>
                <QueryBar
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    onFilterTextChange={this.onFilterTextChange}
                    onStockOnlyChange={this.onStockOnlyChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                />
            </div>
        )
    }
}

class QueryBar extends React.Component {
    render() {
        const { filterText, inStockOnly } = this.props
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={filterText}
                    onChange={event => this.props.onFilterTextChange(event.target.value)}
                />
                <p>
                    <input
                        type="checkbox"
                        checked={inStockOnly}
                        onChange={(event) => this.props.onStockOnlyChange(event.target.checked)}
                    />
                    {' '}
                    Only show products in stock
                </p>
            </form>
        );
    }
}

class ProductTable extends React.Component {
    render() {
        const { filterText, inStockOnly } = this.props
        const rows = []
        let lastCategory = null

        this.props.products.forEach((product) => {
            if (product.name.indexOf(filterText) === -1) {
                return;
            }
            if (inStockOnly && !product.stocked) {
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(
                    <CategoryRow
                        category={product.category}
                        key={product.category}
                    />
                );
            }
            rows.push(
                <ProductRow
                    product={product}
                    key={product.name}
                />
            );
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}

class CategoryRow extends React.Component {
    render() {
        const { category } = this.props
        return (
            <tr>
                <th colSpan="2">
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
        const { product } = this.props
        const name = product.stocked
            ? product.name
            : <span style={{ color: 'red' }}>{product.name}</span>

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        );
    }
}

export default QueryProductTable
