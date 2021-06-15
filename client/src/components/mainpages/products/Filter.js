import React,{useContext} from 'react'
import {GlobalState} from "../../../GlobalState"

function Filter() {
    const state = useContext(GlobalState)
    const [sort, setSort]= state.productAPI.sort
    const [search, setSearch]= state.productAPI.search

    

    return (
        <div className="filter_menu">
                <input type="text" 
                    value={search} 
                    className="form-control"
                    placeholder="enter your search"
                    onChange={e => setSearch(e.target.value.toLowerCase())}  />

                    <div className="row">
                        <span> Sort By : </span>
                        <select  value={sort} 
                        onChange={e => setSort(e.target.value)}>
                            <option value=''> Newest </option>
                            <option value='sort=oldest'> Oldest </option>
                            <option value='sort=sold'> Best Sales </option>
                            <option value='sort=-price'> Price: High - Low </option>
                            <option value='sort=price'> Price: Low - High</option>
                           
                        </select>
                    </div>
        </div>
    )
}

export default Filter
