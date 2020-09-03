
import React from 'react'

const AddRecipe = () => {
    return (
        <div>
            <form>
                <textarea onChange={e => console.log(e.target.value.split('\n'))}></textarea>
            </form>
        </div>
    )
}

export default AddRecipe