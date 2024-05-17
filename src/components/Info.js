import { Social } from "./Social";

export function Info() {
  return (
    <div className="info">
      <div>
        <div className="info-image">
          <img src="/dp.jpeg" alt="Dave in a black jacket and white shirt" />
        </div>
        <div className="info-text">
          <h1 className="info-primary">Dave Ejezie</h1>
          <h2 className="info-secondary">Software Developer</h2>
          <p className="info-statement">
            Building digital solutions to empower businesses.
          </p>
          <div className="action-call">
            <button className="cta-contact">Contact Me</button>
            <button className="cta-cv">Download CV</button>
          </div>
        </div>
      </div>
      <div className="info-links">
        <Social />
      </div>
    </div>
  );
}