import "./Navbar.css";
function Navbar() {
  return (
    <div class="navbar">
      <div class="logo">
        <span class="dot"></span>
        Coffee <br />
        Shop
        <span class="dot"></span>
      </div>
      <input type="checkbox" id="check" />
      <label for="check" class="menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          class="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
          />
        </svg>
      </label>
      <div class="nav-links">
        <a href="#" class="active"></a>
        <a href="#">Our Coffee's</a>
        <a href="#">Our Tea's</a>
        <a href="#">Equipements</a>
        <a href="#">About</a>
        <a href="#">Talk to Us</a>
      </div>
    </div>
  );
}
export default Navbar;
