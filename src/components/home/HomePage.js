import React from 'react';
// Components
import IntroSection from './presentation/IntroSection';

class HomePage extends React.Component {
  render()
  {
    return (
      <div id="home">
        <div className="page-section">
            <div className="section">
              <div className="container">
                <h3>Sample Class Component</h3>
            </div>
          </div>
        </div>
        <IntroSection/>
      </div>
    )
  }
}
export default HomePage;
