
import React, { useState } from 'react'
// import mongoose from 'mongoose'
import { Dropbox } from 'dropbox'
import '../../../styling/AddRecipe.css'

const accessToken = 'sl.AhXPTXLStQdc2QVvbfdmx8Xe-6F5YlHLomP6WXVmw5VLu0RycRK9n09Z4OXZfTuspYo0JHfgXisZQrt0q9sADWbeJWaHK0DpXsld-sYWN7mFvCjADM8Zc5eQ--ASVc6trcECdBYI'

const dbx = new Dropbox({
    accessToken,
    fetch
})

const getFiles = async () => {
    const response = await dbx.filesGetMetadata({  
          path: '/500px/19Icecream-tub.jpg',  
          include_media_info: true
      })
    return response
}
const getOtherFiles = async () => {
    const response = await dbx.sharingCreateSharedLinkWithSettings({  
          path: '/500px/19Icecream-tub.jpg',  
        //   include_media_info: true
      })
    return response
}
// mongoose.connect("mongodb+srv://celia_arun:<password>@cluster0.wa86j.mongodb.net/<dbname>?retryWrites=true&w=majority", { 
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false, 
//     useCreateIndex: true  
// })
// .then(() => console.log("Connected to DB"))
// .catch(err => console.log("ERROR:", err.message));

const AddRecipe = () => {
    const [ title, setTitle ] = useState('')
    const [ subtitle, setSubtitle] = useState('')
    const [ prepCook, setPrepCook ] = useState('')
    const [ ingredients, setIngredients ] = useState('')
    const [ sides, setSides ] = useState([
        { title: '', ingredients: ''},
        { title: '', ingredients: ''},
        { title: '', ingredients: ''}
    ])
    const [ method, setMethod ] = useState('')
    const [ toServe, setToServe ] = useState('')
    const image = getFiles()
    const image2 = getOtherFiles()
    // const [ showImage, setShowImage ] = useState(false)
    const recipeSubmit = e => {
        e.preventDefault()
        // sides = sides.map(({ingredients}) => ingredients.split(''))
        console.log({
            title,
            subtitle: subtitle.length ? subtitle : null,
            prepCook: prepCook.split('\n'),
            ingredients: ingredients.split('\n'),
            sides,
            method: method.split('\n'),
            toServe 
        })
    }
    // const addSides = () => {
    //     console.dir(sides.one.ingredients)
    // }


    return (
        <div className="add-recipe">
            <button onClick={() => { console.log(image2) } }>Click me</button>
            {/* {showImage && <img loading="lazy" src={`data:image/png;base64,`} />} */}
            <form className="add-recipe-form" onSubmit={recipeSubmit}>
                {/* // dropbox image interface x 3 */}
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label" >Recipe title</label>
                    <input 
                        className="add-recipe-item__input" 
                        type="text" 
                        placeholder="Recipe title" 
                        onChange={e => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label">Recipe subtitle</label>
                    <input 
                        className="add-recipe-item__input" 
                        type="text" 
                        placeholder="Recipe subtitle" 
                        onChange={e => setSubtitle(e.target.value)}
                        value={subtitle}
                    />
                </div>
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label">Prep / Cook time</label>
                    <textarea 
                        className="add-recipe-item__textarea" 
                        placeholder="Prep / cook time" 
                        onChange={e => setPrepCook(e.target.value)}
                        value={prepCook}
                    ></textarea>
                </div>
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label">Main ingredients</label>
                    <textarea 
                        className="add-recipe-item__textarea" 
                        placeholder="Ingredients" 
                        onChange={e => setIngredients(e.target.value)}
                        value={ingredients}
                    ></textarea>
                </div>
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label">Extras / sides</label>
                    <div className="add-recipe-extras" >
                        <input 
                            className="add-recipe-extras__title" 
                            type="text" 
                            placeholder="Title" 
                            onChange={e => setSides(...sides, sides[0].title = e.target.value)}
                            value={sides[0].title}
                        />
                        <textarea
                            className="add-recipe-extras__textarea"
                            placeholder="Extras / sides"
                            onChange={e => setSides(...sides, sides[0].ingredients = e.target.value)}
                            value={sides[0].ingredients}
                        ></textarea>
                        <input 
                            className="add-recipe-extras__title" 
                            type="text" 
                            placeholder="Title" 
                            onChange={e => setSides(...sides, sides[1].title = e.target.value)}
                            value={sides[1].title}
                        />
                        <textarea
                            className="add-recipe-extras__textarea"
                            placeholder="Extras / sides"
                            onChange={e => setSides(...sides, sides[1].ingredients = e.target.value)}
                            value={sides[1].ingredients}
                        ></textarea>
                        <input 
                            className="add-recipe-extras__title" 
                            type="text" 
                            placeholder="Title" 
                            onChange={e => setSides(...sides, sides[2].title = e.target.value)}
                            value={sides[2].title}
                        />
                        <textarea
                            className="add-recipe-extras__textarea"
                            placeholder="Extras / sides"
                            onChange={e => setSides(...sides, sides[2].ingredients = e.target.value)}
                            value={sides[2].ingredients}
                        ></textarea>
                    </div>
                </div>
                <div className="add-recipe-item">
                    <label className="add-recipe-item__label">Method</label>
                    <textarea 
                        className="add-recipe-item__textarea" 
                        placeholder="Method" 
                        onChange={e => setMethod(e.target.value)}
                        value={method}
                    ></textarea>
                </div>
                <div className="add-recipe-item">   
                    <label className="add-recipe-item__label">To serve</label>
                    <textarea 
                        className="add-recipe-item__textarea" 
                        placeholder="To serve" 
                        onChange={e => setToServe(e.target.value)}
                        value={toServe}
                    ></textarea>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>
    )
}

export default AddRecipe