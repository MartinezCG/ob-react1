import React from 'react';
import PropTypes from 'prop-types';
import FilterContainer from '../containers/filterContainer';


const FilterOptions = () => {

    return (
        <div className='filter'>
            {/* Filter Containers */}
            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLETED
            </FilterContainer>
        </div>
    );
};




export default FilterOptions;
