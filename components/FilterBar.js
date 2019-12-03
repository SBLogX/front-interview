import React from "react";

import styled from "styled-components";

const Root = styled.div`
  margin-top: 3rem;
  display: flex;
`;

const Search = styled.div`
  width: 50%;
  padding: 1rem;

  input,
  select {
    width: 100%;
    height: 42px;
    background-color: rgb(255, 255, 255);
    font-size: 16px;
    color: rgb(169, 169, 169);
    padding-left: 5px;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-radius: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(221, 223, 231);
  }
`;

const FilterBar = ({ handleSearch, handleSort }) => (
  <Root>
    <Search>
      <h4>Search</h4>
      <input type="text" onChange={handleSearch} />
    </Search>
    <Search>
      <h4>Sort by</h4>
      <select onChange={handleSort}>
        <option value="desc">Newest</option>
        <option value="asc">Oldest</option>
      </select>
    </Search>
  </Root>
);

export default FilterBar;
