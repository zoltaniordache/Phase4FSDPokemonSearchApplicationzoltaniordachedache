import React, { useState } from 'react';
import Style from '../style_module/Header.module.css';
import SearchIcon from '../../img/lupa.svg';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');
  const { onSearch } = props;

  const onChangeHandler = (e) => {
    let input_Search = e.target.value;
    let result_Search = input_Search.toLowerCase();
    setSearch(result_Search);
    if (input_Search.length === 0) {
      onSearch(undefined);
    }
  };

  const onButtonClickHandler = () => {
    onSearch(search);
  };

  return (
    <>
      <section className={Style.section_search}>
        <div className="contain" >
          <div className={Style.search_wrapper}>
            <h2>Select your Pokémon</h2>
            <div className={Style.search_input}>
              <input  id='search'
                type="text"
                placeholder="Search name or ID"
                onChange={onChangeHandler}
              />
              <button
                type="button"
                className={Style.search_input_icon}
                onClick={onButtonClickHandler}
              >
                <img src={SearchIcon} alt="search" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchBar;
