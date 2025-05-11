import React from 'react'
import Title from '../components/Title'

const Collection = () => {
  return (
    <section>
      <div>
        {/* Filter options */}
        <div>
          {/* Search Box */}

          {/* Category Filter */}
          <div>
            <h5>Categorier</h5>
            <div>
              {["Men", "Women", "Kids"].map((cat) => (
                <label key={cat} className="">
                  <input type="checkbox" value={cat} className="w-3" />
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div>
          <h5>Types</h5>
            <div>
              {["Topwear", "Bottomwear", "Winterwear"].map((subCat) => (
                <label key={subCat} className="">
                  <input type="checkbox" value={subCat} className="w-3" />
                  {subCat}
                </label>
              ))}
            </div>
          </div>

          {/* Sort By */}
          <select>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low">Sort by: Low</option>
            <option value="high">Sort by: High</option>
          </select>
        </div>
        {/* right side */}
        <div>
            <Title title={'Our Collection'}/>
            {/* product container */}
        </div>
      </div>
    </section>
  )
}

export default Collection