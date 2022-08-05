import React from 'react';

function TableFilters() {
    return (
        <div className="table-filters">
            <div className="table-filters-container">
                <div className="stable-checkbox-container">
                    <input type="checkbox" id="stableCoin" defaultChecked={true} />
                    <label htmlFor="stableCoin">With Stable Coin</label>
                </div>
                <div className="no-list-btn">
                    <p>None list</p>
                </div>
                <div className="fav-list">
                    <p>Fav list</p>
                    <img src="./assets/star-full.svg" alt="icon star" />
                </div>
            </div>
        </div>
    );
}

export default TableFilters;