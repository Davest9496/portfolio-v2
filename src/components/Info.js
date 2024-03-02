import { Nav } from "./Nav";
import { Social } from "./Social";

export function Info() {
  return (
    <div className="info">
      <div className="info-text">
        <h1>Dave Ejezie</h1>
        <h2>Software Developer</h2>
        <p className="info-statement">
          Building software solutions to empower businesses.
        </p>
        <Nav />
      </div>
      <div className="info-links">
        <Social />
      </div>
    </div>
  );
}