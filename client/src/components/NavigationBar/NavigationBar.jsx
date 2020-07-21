import React from "react";
import "./NavigationBar.scss";

const NavigationBar = ({ arrayLengthCharacters }) => {
  return (
    <nav>
      <header>
        <div className="container">
          {arrayLengthCharacters.length === 0 ? (
            <div>
              <h1>
                You only have {arrayLengthCharacters.length} items
                <span role="img" aria-label="sad">
                  😔
                </span>
              </h1>
            </div>
          ) : (
            ""
          )}
          {arrayLengthCharacters.length === 1 ? (
            <div>
              <h1>
                You have {arrayLengthCharacters.length} item
                <span role="img" aria-label="smirk">
                  😏
                </span>
              </h1>
            </div>
          ) : (
            ""
          )}
          {arrayLengthCharacters.length > 1 ? (
            <div>
              <h1>
                You have {arrayLengthCharacters.length} items
                <span role="img" aria-label="happy">
                  😄
                </span>
              </h1>
            </div>
          ) : (
            ""
          )}
        </div>
      </header>
    </nav>
  );
};

export default NavigationBar;
