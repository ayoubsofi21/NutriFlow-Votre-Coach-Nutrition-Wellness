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
  return `<div class="home-container">

  <!-- 🔍 Search Bar -->
  <div class="search-bar">
    <i class="fas fa-search"></i>
    <input type="text" placeholder="Search" />
    <button class="filter-btn">
      <i class="fas fa-sliders-h"></i>
    </button>
  </div>

  <!-- 🟢 Categories -->
  <div class="categories">
    <button class="active">All</button>
    <button>Combos</button>
    <button>Sliders</button>
    <button>Classic</button>
  </div>

  <!-- 🍔 Cards Grid -->
  <div class="cards">

    <div class="card">
      <img src="images/pizza.png" />
      <h3>Cheeseburger</h3>
      <p>Wendy's Burger</p>
      <div class="card-footer">
        <span class="cal green">cal : 200</span>
        <i class="far fa-heart"></i>
      </div>
    </div>

    <div class="card">
      <img src="images/burger1.png" />
      <h3>Hamburger</h3>
      <p>Veggie Burger</p>
      <div class="card-footer">
        <span class="cal orange">cal : 401</span>
        <i class="far fa-heart"></i>
      </div>
    </div>

  </div>

</div>`;
}
export function render() {
  window.location.reload();
}
