import React, { useEffect, useState } from 'react';

const Search = (props) => {
  const [val, setVal] = useState('');
  useEffect(() => {
    const keyOutsideFocus = (e) => {
      const { key } = e;

      if (key === 'Escape') {
        setVal('');
        props.setInputSearch('');
      }
    };

    window.addEventListener('keyup', keyOutsideFocus);

    return () => window.removeEventListener('keyup', keyOutsideFocus);
  }, [props]);

  const inputHandler = (e) => {
    setVal(e.target.value);
    props.setInputSearch(e.target.value);
  };

  return (
    <div>
      <input
        className="searchBar"
        type="text"
        name="name"
        id="search"
        placeholder="Search By Name"
        value={val}
        onChange={(e) => inputHandler(e)}
      />
    </div>
  );
};

export default Search;
