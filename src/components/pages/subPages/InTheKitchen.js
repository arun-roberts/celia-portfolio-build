import React, { useContext } from 'react'
import BlogContext from '../../../context/BlogContext'

const About = () => {
    const { blogPosts } = useContext(BlogContext)

    return (
        <>
            <div className="in-the-kitchen">
                {blogPosts.map(({ imgUrl, imgDescription, blogText, imgWidth, imgHeight }) => (
                    <div className="recipe">
                        <div className="recipe-headings">
                            <h2 className="recipe-headings__main">{blogText.heading}</h2>
                            <div className="recipe-headings__sub">
                                {blogText.subheading ? blogText.subheading : null}
                            </div>
                        </div>
                        <figure className="recipe-figure">
                            <img className="recipe-figure__image" loading="lazy" src={imgUrl} alt={imgDescription} width={imgWidth} height={imgHeight} />
                        </figure>
                        <div className="recipe-time">
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
                            <h4 className="recipe-ingredients__main">Ingredients:</h4>
                            <ul className="recipe-ingredients__list">
                                {blogText.ingredients.main.map(i => (
                                    <li className="recipe-ingredients__ingredient">{i}</li>
                                ))}
                            </ul>
                            <div className="recipe-extras">
                                {
                                    blogText.extras 
                                        ? blogText.extras.map(i => (
                                                <div className="recipe-extras__item">
                                                    <h4 className="recipe-extras__title">{i.title}:</h4>
                                                    {i.items.map(e => <p className="recipe-extra">{e}</p>)}
                                                </div>
                                            ) 
                                        )
                                        : null
                                }
                            </div>
                        </div>
                        <div className="recipe-method">
                            <h4 className="recipe-method__heading">Method:</h4>
                            <ol className="recipe-method__list">
                                {blogText.method.map(i => (
                                    <li className="recipe-method__list-item">{i}</li>
                                ))}
                            </ol>
                            <h4 className="recipe-method__serve">To serve:</h4>
                            <p className="recipe-method__serve-instruction">
                                {blogText.serve}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default About
