import React from 'react'

const Form = ({handleInput, handleRobotAdd, input}) => {
    return (
        <form onSubmit={handleRobotAdd}>
            <p>What is your new robot's name?</p>
            <input 
                type='text' 
                placeholder='name' onChange={handleInput} value={input}/>
            <button>Create Robot</button>
        </form>
    )
}

export default Form