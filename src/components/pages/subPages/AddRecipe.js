
import React, { useState } from 'react'
import mongoose from 'mongoose'
import { Dropbox } from 'dropbox'
import '../../../styling/AddRecipe.css'

const accessToken = 'sl.AhDlscue3z27HB9385I_g-Glinfo8KBoFXqxJPDnb8bf09DrLmqqSE_qonCfHHUZlQ2s_n0ezaAJP-COe490_fiHVspbGQeN9cJhCpOAwin9dFDn_yHLXLWAyzFJbDsiuLPelBc'

const dbx = new Dropbox({
    accessToken,
    fetch
})

const getFiles = async () => {
    const response = await dbx.filesGetThumbnailBatch({  
        entries: [{  
          path: '/500px/19Icecream-tub.jpg',  
        //   size: 'w32h32',  
          format: 'png',  
        }]  
      })
    const maybe = await response.json()
    return maybe
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
    const [ showImage, setShowImage ] = useState(false)
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
    const addSides = () => {
        console.dir(sides.one.ingredients)
    }


    return (
        <div className="add-recipe">
            <button onClick={() => console.log(typeof image)}>Click me</button>
            {showImage && <img loading="lazy" src={`data:image/png;base64,${image}`} />}
            <form className="add-recipe-form" onSubmit={recipeSubmit}>
                // dropbox image interface x 3
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