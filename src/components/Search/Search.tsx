import { format } from 'path'
import React from 'react'

const Search = () => {
  return (
    <div className='search-form'>
      <form>
        <input className='search-field' type='text' placeholder='Search for a character'></input>
        <input className='submit-button' type='submit' value='submit'></input>
      </form>
    </div>
  )
}

export default Search;