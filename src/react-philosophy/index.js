/*
 * @Description: React哲学
 * @Author: 管铭钊
 * @Date: 2021/5/17
 */
import React from 'react'
import QueryProductTable from './components/QueryProductTable'

class ReactPhilosophy extends React.Component {
    render() {
        const PRODUCTS = [
            { category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' },
            { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' },
            { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' },
            { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' },
            { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' },
            { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }
        ]

        return (
            <div>
                <h1>React哲学</h1>
                <h2>可查询的产品表格</h2>
                <QueryProductTable products={PRODUCTS}/>
            </div>
        )
    }
}

export default ReactPhilosophy
