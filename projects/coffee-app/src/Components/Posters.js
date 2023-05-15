import "./Posters.css";
import beans from "../assets/coffee1_beans.jpg";
import beans5 from "../assets/coffee5_beans.jpg";
import beans6 from "../assets/coffee6_beans.jpg";
function Posters() {
  return (
    <div class="posters-wrapper">
      <div class="posters">
        <div class="posters-left-section">
          <img class="img" src={beans} alt="Coffee Beans" />
        </div>
        <div class="posters-right-section">
          <h2>The Light Roast</h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            temporibus animi odio, perspiciate consequuntur molestias quo
            officia ab vero, sed autem, voluptatos quibusdam saepo deleniti? Ea
            sapitanie ut fugit quia.
          </p>
        </div>
      </div>
      <div class="posters">
        <div class="posters-left-section">
          <h2>The Middle Roast</h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            temporibus animi odio, perspiciate consequuntur molestias quo
            officia ab vero, sed autem, voluptatos quibusdam saepo deleniti? Ea
            sapitanie ut fugit quia.
          </p>
        </div>
        <div class="posters-right-section">
          <img class="img" src={beans5} alt="Coffee Beans" />
        </div>
      </div>
      <div class="posters">
        <div class="posters-left-section">
          <img class="img" src={beans6} alt="Coffee Beans" />
        </div>
        <div class="posters-right-section">
          <h2>The Light Roast</h2>
          <p>
            lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            temporibus animi odio, perspiciate consequuntur molestias quo
            officia ab vero, sed autem, voluptatos quibusdam saepo deleniti? Ea
            sapitanie ut fugit quia.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Posters;
