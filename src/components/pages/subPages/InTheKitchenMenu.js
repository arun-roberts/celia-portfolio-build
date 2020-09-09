import React, { useContext, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import BlogContext from '../../../context/BlogContext'
// import Recipe from './RecipeDisplay'
import '../../../styling/InTheKitchenMenu.css'

// const findWidth = () => {
//     let currentWidth = window.innerWidth;
//     if(currentWidth < 600) {
//         return 'small'
//     } else if (currentWidth < 1500) {
//         return 'medium'
//     } else {
//         return 'large'
//     }
// } 

const InTheKitchenMenu = () => {
    const { blogPosts } = useContext(BlogContext)
    // let imgSize = findWidth();
    let location = useLocation()
    useEffect(() => console.log(location))

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
