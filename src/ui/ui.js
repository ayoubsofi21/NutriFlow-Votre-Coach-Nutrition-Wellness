export function footer() {
  return `  <div class="footer">
           <a href="#/home" data-link><i class="fas fa-home"></i></a>
            <a href="#/detail" data-link><i class="fas fa-utensils"></i></a>
            <a href="#/favorite" data-link><i class="fas fa-heart"></i></a>
    </div>`;
}
export function loader() {
  return `<div class="loader-container">
      <div class="loader"></div>
      <p>Loading...</p>
    </div>`;
}

export function integration() {
  return `<div class="integreContainer">
   <h1 class='goHome'><a href="#/home" data-link>NutriFlow</a><h1>
      <div class="allImage">
        <img src="images/aa.png" alt="big Burger" class="firstImg" />
        <img src="images/smallB.png" alt="small burger" class="secondImg" />
      </div>
    </div>`;
}
export function Header() {
  return `<header>
      <div>
        <h1>NutriFlow</h1>
        <p>Order your favourite food!</p>
      </div>
      <div class="user-profile">
        <img src="images/user.avif" alt="User Profile" />
      </div>
    </header>`;
}
export function home() {
  return `<div class="data-container">
            <div class="search-bar">
              <i class="fas fa-search"></i>
              <input type="text" placeholder="Search" />
              <button class="filter-btn">
                <i class="fas fa-sliders-h"></i>
              </button>
            </div>

            <div class="categories">
              <button class="active">All</button>
              <button>Combos</button>
              <button>Sliders</button>
              <button>Classic</button>
            </div>
               <div class="cards">
                </div>


           
        </div>`;
}
