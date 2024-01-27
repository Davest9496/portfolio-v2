import { Nav } from "./Nav";
import { Social } from "./Social";

export function Info() {
  return (
    <div className="info">
      <div className="info-text">
        <h1>Dave Ejezie</h1>
        <h2>software developer</h2>
        <p className="info-statement">
          Building AI powered softwares to enable businesses maximise resources
          and improved productivity.
        </p>
        <Nav />
      </div>
      <div className="info-links">
        <Social />
      </div>
    </div>
  );
}
