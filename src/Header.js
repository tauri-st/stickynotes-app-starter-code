import React from "react";

const Header = (props) => (
    <header className="app-header__title">
        <h1>Super Sticky Notes</h1>
        <aside className="app-header__controls">
            <button className="add-new">+ New Note</button>
            <input className="search" type="text" placeholder="Type here to search..." value={props.searchText} />
        </aside>
    </header>
);

export default Header;