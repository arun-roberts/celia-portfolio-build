import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BlogContext from '../../../context/BlogContext'
import '../../../styling/InTheKitchenMenu.css'


const InTheKitchenMenu = () => {
    const { blogPosts } = useContext(BlogContext)
    let location = useLocation()

    return (
        <>
            <div className="recipe-container">
                {blogPosts.map(blogPost => (
                    <Link key={blogPost.id} className="recipe-item" to={"/inthekitchen/" + blogPost.id}>
                        <figure className="recipe-item__figure">
                            <img className="recipe-item__image" src={blogPost.img.small.imgUrl} alt={blogPost.imgDescription} />
                        </figure>
                        <h4 className="recipe-item__header">{blogPost.imgDescription}</h4>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default InTheKitchenMenu
