import React from 'react'
import {FaCrown} from 'react-icons/fa'
import {AiFillCaretRight} from 'react-icons/ai'
import SectionHead from './SectionHead'
import {products} from '../data'
import Card from '../UI/Card'
import {Link} from 'react-router-dom'


const Product = () => {
  return (
    <section className="product">
        <div className="container product_container">
            <SectionHead icon={<FaCrown/>} title="Product"/>
        <div className="product_wrapper">
            {
                products.map(({id, icon, title, info, path}) => {
                    return (
                        <Card className="products_product" key={id}>
                            <span>{icon}</span>
                            <h4>{title}</h4>
                            <small>{info}</small>
                            <Link to={path} className='btn-sm'>Learn More <AiFillCaretRight/></Link>
                        </Card>
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Product