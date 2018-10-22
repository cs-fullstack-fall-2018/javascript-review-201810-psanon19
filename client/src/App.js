import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NumberRange from './NumberRange';
import MultiTable from './MultiTable';

class App extends Component {
    render() {

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">October - JavaScript Review</h1>
                </header>
              <div className="ProblemSolver">
                <h1>Integer Numbers Range</h1>
                <div id="q1">
                <NumberRange/>
                </div>
                  <hr/>
              </div>

              <div className="ProblemSolver">
                <h1>Multiplications table</h1>
                <MultiTable/>
                <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>Multiplications Table On Demand</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>Calculation</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>max() Function</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>maxOfThree() Function</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>isVowel() Function</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>Hexadecimal</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

              <div className="ProblemSolver">
                  <h1>Hexadecimal Enhanced</h1>
                  {/*<MultiTable/>*/}
                  <hr/>
              </div>

            </div>
        );
    }
}

export default App;
