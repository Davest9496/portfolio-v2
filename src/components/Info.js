import { Social } from "./Social";
import { Nav } from "./Nav";

export function Info() {
  return (
    <div className="info">
        <div className="info-image">
          <img src="/dp.jpeg" alt="Dave in a black jacket and white shirt" />
        </div>
        <Nav/>
      <div className="info-links">
        <Social />
      </div>
    </div>
  );
}