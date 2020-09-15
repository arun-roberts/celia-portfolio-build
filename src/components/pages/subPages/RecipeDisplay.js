import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import BlogContext from '../../../context/BlogContext'

const findWidth = () => {
    let currentWidth = window.innerWidth;
    if(currentWidth < 600) {
        return 'small'
    } else if (currentWidth < 1500) {
        return 'medium'
    } else {
        return 'large'
    }
} 

const Recipe = () => {
    const { blogPosts } = useContext(BlogContext)
    let imgSize = findWidth(),
        { id } = useParams(),
        current = blogPosts.findIndex(e => e.id === Number(id)),
        previous = current > 0 ? blogPosts[current - 1] : null,
        next = current < blogPosts.length ? blogPosts[current + 1] : null,
        { imgDescription, blogText, img: { [imgSize]: { imgUrl, imgWidth, imgHeight } } } = blogPosts[current]

    return (
        <>
            <div className="in-the-kitchen">
                <div className="recipe">
                    <div className="recipe-headings mb-one">
                        <h2 className="recipe-headings__main">{blogText.heading}</h2>
                        <div className="recipe-headings__sub">
                            {blogText.subheading ? blogText.subheading : null}
                        </div>
                    </div>
                    <figure className="recipe-figure">
                        <img className="recipe-figure__image" loading="lazy" src={imgUrl} alt={imgDescription} width={imgWidth} height={imgHeight} />
                    </figure>
                    <div className="recipe-time mb-one">
                        <h4 className="recipe-time__item">
                            Preparation time: {blogText.sectionHeadings.prepTime} minutes
                        </h4>
                        <h4 className="recipe-time__item">
                            {
                                blogText.sectionHeadings.cookTime 
                                    ? `Cooking time: ${blogText.sectionHeadings.cookTime} minutes`
                                    : null
                            }
                        </h4>
                    </div>
                    <p className="recipe-serves">
                        {
                            blogText.sectionHeadings.serves 
                                ? `Serves: ${blogText.sectionHeadings.serves}`
                                : null
                        }
                    </p>
                    <div className="recipe-ingredients">
                        <h4 className="recipe-ingredients__main mb-one">Ingredients:</h4>
                        <ul className="recipe-ingredients__list mb-one">
                            {blogText.ingredients.main.map(i => (
                                <li className="recipe-ingredients__ingredient">{i}</li>
                            ))}
                        </ul>
                        <div className="recipe-extras">
                            {
                                blogText.extras 
                                    ? blogText.extras.map(i => (
                                            <div className="recipe-extras__item">
                                                <h4 className="recipe-extras__title mb-one">{i.title}:</h4>
                                                {i.items.map(e => <p className="recipe-extras__ingredient">{e}</p>)}
                                            </div>
                                        ) 
                                    )
                                    : null
                            }
                        </div>
                    </div>
                    <div className="recipe-method mb-one">
                        <h4 className="recipe-method__heading">Method:</h4>
                        <ol className="recipe-method__list mb-one">
                            {blogText.method.map(i => (
                                <li className="recipe-method__list-item">{i}</li>
                            ))}
                        </ol>
                        {blogText.sides && blogText.sides.map(side => (<>
                                <h4 className="recipe-method__heading">{side.title}</h4>
                                <ol className="recipe-method__list">
                                    {side.method.map(i => (
                                        <li className="recipe-method__list-item">{i}</li>
                                    ))}
                                </ol>
                            </>))
                        }
                    </div>
                    <div className="to-serve">
                        <h4 className="to-serve__title mb-one">To serve:</h4>
                        <p className="to-serve__instruction">
                            {blogText.serve}
                        </p>
                    </div>
                </div>
                <div className="kitchen-nav">
                        <ul className="kitchen-nav-list">
                            <li className="kitchen-nav__list-item">
                                {
                                    previous 
                                    ? <Link className="kitchen-nav__link" to={"/inthekitchen/" + previous.id}>
                                        <p className="kitchen-nav__arrow">{"<"}</p>
                                        <p className="kitchen-nav__text">{previous.imgDescription.toUpperCase()}</p>
                                    </Link> 
                                    : null
                                }
                            </li>
                            <li className="kitchen-nav__list-item kitchen-nav__list-item--main"><Link to="/inthekitchen" className="kitchen-nav__link">IN THE KITCHEN</Link></li>
                            <li className="kitchen-nav__list-item">
                                {
                                    next 
                                    ? <Link className="kitchen-nav__link" to={"/inthekitchen/" + next.id}>
                                        <p className="kitchen-nav__text">{next.imgDescription.toUpperCase()}</p>
                                        <p className="kitchen-nav__arrow">{">"}</p>
                                    </Link> 
                                    : null
                                }
                            </li>
                        </ul>
                </div>
            </div>
        </>
    )
}

export default Recipe