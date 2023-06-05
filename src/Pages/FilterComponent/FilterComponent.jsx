import React from "react"
import "./FilterComponent.css"
export const FilterComponent = () => {
const filterByPriceRange=(range)=>{
return <div></div>
}
const filterByCategory=(category)=>{
    return <div></div>
}
const filterByRating=(rating)=>{
    return <div>
        {}
    </div>
} 
const filterBySize=(size)=>{
    return <div></div>
}
const filterByOccation=(size)=>{
    return <div></div>
}
const filterByPriceSort=(sort)=>{
    return <div></div>
}
return <div className="filters">
        <div className="filter-head">
            <p ><b>Filters</b></p>
            <p>Clear</p>
        </div>
        <div className="filter-price-range">
            <label for="price-range"><h4>Price</h4></label>
            <input type="range" title="price" id="price-range"  onChange={(e)=>filterByPriceRange(e.target.value)} />
        </div>
        <div className="filter-categories">
            <h4>Category</h4>
            <div className="filter-category">
                <input id="gowns" type="checkbox" value="gowns" title="gowns" onChange={(e)=>filterByCategory(e.target.value)} />
                <label for="gowns">Gowns</label>
            </div>
            <div className="filter-category">
                <input id="jumpsuits" type="checkbox" value="jumpsuits" className="category" title="jumpsuits" onChange={(e)=>filterByCategory(e.target.value)} />
                <label for="jumpsuits">Jumpsuits</label>
            </div>
            <div className="filter-category">
                <input id="t-shirts" type="checkbox" value="t-shirts" className="category" title="t-shirts" onChange={(e)=>filterByCategory(e.target.value)} />
                <label for="t-shirts">T Shirts</label>
            </div>
            <div className="filter-category">
                <input id="kurtha" type="checkbox" value="kurtha" className="category" title="kurtha" onChange={(e)=>filterByCategory(e.target.value)} />
                <label for="kurtha">Kurtha</label>
            </div>
        </div>
        <div className="filter-rating">
            <h4>Rating</h4>
            <div className="filter-rate">
                <input name="rating" id="1&<" title="1&<" type="radio" value="1" onChange={(e)=>filterByRating(e.target.value)} />
                <label for="1&<"> 1 stars & above</label>

            </div>
            <div className="filter-rate">
                <input name="rating" id="2&<" type="radio" title="2&<" value="2" onChange={(e)=>filterByRating(e.target.value)} />
                <label for="2&<">2 stars & above</label>

            </div>
            <div className="filter-rate">

                <input name="rating" type="radio" title="3&<" id="3&<" value="3" onChange={(e)=>filterByRating(e.target.value)} />
                <label for="3&<">3 stars & above</label>

            </div>
            <div className="filter-rate">
                <input name="rating" type="radio" title="4&<" id="4&<" value="4" onChange={(e)=>filterByRating(e.target.value)} />
                <label for="4&<">4 stars & above</label>

            </div>
        </div>


        <div className="filter-occations">
            <h4>Occation</h4>
            <div className="filter-occation">
                <input type="checkbox" id="ceremony" value="ceremony" onChange={(e)=>filterByOccation(e.target.value)} />
                <label htmlFor="ceremony">Ceremony</label>
            </div>
            <div className="filter-occation">
                <input type="checkbox" id="casual" value="casual" onChange={(e)=>filterByOccation(e.target.value)} />
                <label htmlFor="casual">Casual</label>
            </div>

        </div>
        <div className="filter-sizes">
            <h4>Size</h4>
            <div className="filter-size">
                <input type="checkbox" name="Small" id="S"  value="S" onChange={(e)=>filterBySize(e.target.value)}/>
                <label htmlFor="S">Small</label>
            </div>
            <div className="filter-size">
                <input type="checkbox" name="Large" id="L" value="L"  onChange={(e)=>filterBySize(e.target.value)} />
                <label htmlFor="L">Large</label>
            </div>
            <div className="filter-size">
                <input type="checkbox" name="Medium" id="M"  value="M"  onChange={(e)=>filterBySize(e.target.value)} />
                <label htmlFor="M">Medium</label>
            </div>
            <div className="filter-size">
                <input type="checkbox" name="ExtraLarge" id="XL" value="XL"  onChange={(e)=>filterBySize(e.target.value)} />
                <label htmlFor="XL">Extra Large</label>
            </div>
            <div className="filter-size">
                <input type="checkbox" name="ExtraExtraLarge" id="XXL" value="XXL"  onChange={(e)=>filterBySize(e.target.value)} />
                <label htmlFor="XXL">Extra Extra Large</label>
            </div>
            
        </div>
        <div className="filter-price-sort">
            <h4>Sort By</h4>
            <div className="filter-price">
                <label for="LowToHigh">Price-Low to High</label>
                <input type="radio" title="LowToHigh" name="price" id="LowToHigh" value="Low"  onChange={(e)=>filterByPriceSort(e.target.value)} />
            </div>
            <div className="filter-price" onChange={(e)=>filterByPriceSort(e.target.value)} >
                <label for="HighToLow">Price-High to Low</label>
                <input type="radio" title="HighToLow" name="price" id="HighToLow" value="High" onChange={(e)=>filterByPriceSort(e.target.value)} />
            </div>

        </div>
    </div>

}