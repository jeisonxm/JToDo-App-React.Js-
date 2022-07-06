import React from "react";
import "./TodoFilter.css";
export default function TodoFilter() {
  return (
    <>
      <button className="filterButon">
        <i className="fa-solid fa-filter"></i>
      </button>
      <section className="filters-window">
        <article className="filters-title-container">
          <h1 className="filters-title">FILTERS</h1>
        </article>
        <article className="filters-container">
          {/* SEARCH FILTER  */}
          <div className="filters-search filters-items inactiveForm">
            <h3 className="filters-search-title">SEARCH</h3>
            <input
              type="text"
              name=""
              id="filters-search-input"
              placeholder="Write here"
            />
            <span className="filters-search-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>

          {/* PRIORITY FILTER */}
          <div className="filters-priority filters-items filter-items--inactive">
            <div className="filter-priority-inactiveForm inactiveForm">
              <h3 className="filters-priority-title">PRIORITY</h3>
              <span className="filter-icon--expand">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            {/* PRIORITY ACTIVE FORM */}
            <div className="filter-priority-activeForm">
              <h3 className="filters-priority-title">PRIORITY</h3>
              <span className="filter-icon--contract">
                <i className="fa-solid fa-x"></i>
              </span>
              <select name="" id="filter-priority-select">
                <option value="Important">Important</option>
                <option value="Normal">Normal</option>
                <option value="Inessential">Inessential</option>
              </select>
            </div>
          </div>

          {/* DATE FILTER */}
          <div className="filters-date filters-items filter-items--inactive">
            <div className="filter-date-inactiveForm inactiveForm">
              <h3 className="filters-priority-title">DATE</h3>
              <span className="filter-icon--expand">
                <i className="fa-solid fa-plus"></i>
              </span>
            </div>
            {/* DATE ACTIVE FORM */}
            <div className="filters-date-activeForm inactive">
              <h3 className="filters-priority-title">DATE</h3>
              <span className="filter-icon--contract">
                <i className="fa-solid fa-x"></i>
              </span>
              <form className="filters-date-form" action="">
                <label htmlFor="day" className="filters-date-day">
                  <h3>DAY:</h3>
                  <input className="filters-date-input" id="day" type="date" />
                </label>
                <label htmlFor="week" className="filters-date-week">
                  <h3>WEEK:</h3>
                  <input className="filters-date-input" id="week" type="week" />
                </label>
                <label htmlFor="month" className="filters-date-month">
                  <h3>MONTH:</h3>
                  <input
                    className="filters-date-input"
                    id="month"
                    type="month"
                  />
                </label>
              </form>
            </div>
          </div>
          {/* FILTER BUTTON */}
          <article className="filters-footer">
            <div className="circle-logo"></div>
            <button className="filter-add-button">ADD</button>
          </article>
        </article>
      </section>
    </>
  );
}
