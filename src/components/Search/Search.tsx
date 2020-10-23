import React from 'react';
import './Search.scss';

//TODO setup 2 additional search fields as dropdown lists for status (alive, dead, unknown) and gender (female, male, genderless, or unknown)

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