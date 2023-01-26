import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate"


function Search({onSearchChange}) {
    const [search, setSearch] = useState(null)

    const handleOnChange = (searchDate) => {
        setSearch(searchDate)
        onSearchChange(searchDate)
    }


  return (
    <AsyncPaginate
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
        />
  )
}

export default Search