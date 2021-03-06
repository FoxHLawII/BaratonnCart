import React from 'react';

const MainNav = (props) => {
  const renderCategories = () => {
    const { categories } = props.categories;
    if (categories) {
      return categories.map(categorie => {
        return (
          <li
            key={categorie.id}
            className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-expanded="false"
            > {categorie.name} </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink">
              {
                categorie.sublevels.map(lvl =>
                  <a
                    key={lvl.id}
                    className="dropdown-item"
                    href="#">{lvl.name}</a>
                )
              }
            </div>
          </li>
        )
      });
    }
  }
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        className="navbar-brand"
        href="#">Baratón!</a>
      <img
        style={{ cursor: "pointer" }}
        className="d-lg-none"
        src="/shoppingCart.png"
        width="30"
        data-toggle="collapse" data-target="#cartWrapper" aria-expanded="false" aria-controls="cartWrapper"></img>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span
          className="navbar-toggler-icon"></span>
      </button>
      <div
        className="collapse navbar-collapse justify-content-between"
        id="navbarNavDropdown">
        <ul
          className="navbar-nav">
          {
            renderCategories()
          }
        </ul>
        <img
          style={{ cursor: "pointer" }}
          className="d-none d-lg-block"
          src="/shoppingCart.png"
          width="30"
          data-toggle="collapse" data-target="#cartWrapper" aria-expanded="false" aria-controls="cartWrapper"></img>
      </div>
    </nav>
  );
}

export default MainNav; 
