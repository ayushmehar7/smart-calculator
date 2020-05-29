import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      history: "",
      expression: "",
    };
  }

  buildExpression = (op) => {
    this.setState({ expression: this.state.expression + op });
  };

  clearExpression = () => {
    this.setState({ history: this.state.expression, expression: "" });
  };

  backspaceExpression = () => {
    let exp = this.state.expression;
    exp !== "" ? (exp = exp.slice(0, exp.length - 1)) : (exp = "");
    this.setState({ expression: exp });
  };

  squareRoot = () => {
    const exp = this.state.expression;
    const sqr = Math.sqrt(exp);
    // eslint-disable-next-line use-isnan
    if (sqr !== NaN) {
      this.setState({ history: exp, expression: sqr.toFixed(2).toString() });
    } else {
      alert("Please enter a valid input");
      this.setState({ history: exp, expression: "" });
    }
  };

  evaluateExpresion = () => {
    try {
      // eslint-disable-next-line no-eval
      var result = eval(this.state.expression);
      result = result.toFixed(2);
      this.setState({
        history: this.state.expression,
        expression: result.toString(),
      });
      console.log(this.state.expression, this.state.history);
    } catch (error) {
      alert("Please enter a valid input");
      this.setState({ history: this.state.expression, expression: "" });
    }
  };

  render() {
    return (
      <div className="App">
        <div id="calculator">
          <div id="result">
            <div id="history">
              <button id="history-value">{this.state.history}</button>
            </div>
            <div id="output">
              <button id="output-value">{this.state.expression}</button>
            </div>
          </div>
          <div id="keyboard">
            <button
              className="operator"
              id="clear"
              onClick={() => this.backspaceExpression()}
            >
              C
            </button>
            <button
              className="operator"
              id="backspace"
              onClick={() => this.clearExpression()}
            >
              CE
            </button>
            <button
              className="operator"
              id="percent"
              onClick={() => this.buildExpression("/100*")}
            >
              %
            </button>
            <button
              className="operator"
              id="division"
              onClick={() => this.buildExpression("/")}
            >
              {"\u00f7"}
            </button>
            <button
              className="number"
              id="7"
              onClick={() => this.buildExpression("7")}
            >
              7
            </button>
            <button
              className="number"
              id="8"
              onClick={() => this.buildExpression("8")}
            >
              8
            </button>
            <button
              className="number"
              id="9"
              onClick={() => this.buildExpression("9")}
            >
              9
            </button>
            <button
              className="operator"
              id="multiply"
              onClick={() => this.buildExpression("*")}
            >
              {"\u00d7"}
            </button>
            <button
              className="number"
              id="4"
              onClick={() => this.buildExpression("4")}
            >
              4
            </button>
            <button
              className="number"
              id="5"
              onClick={() => this.buildExpression("5")}
            >
              5
            </button>
            <button
              className="number"
              id="6"
              onClick={() => this.buildExpression("6")}
            >
              6
            </button>
            <button
              className="operator"
              id="subtract"
              onClick={() => this.buildExpression("-")}
            >
              -
            </button>
            <button
              className="number"
              id="1"
              onClick={() => this.buildExpression("1")}
            >
              1
            </button>
            <button
              className="number"
              id="2"
              onClick={() => this.buildExpression("2")}
            >
              2
            </button>
            <button
              className="number"
              id="3"
              onClick={() => this.buildExpression("3")}
            >
              3
            </button>
            <button
              className="operator"
              id="addition"
              onClick={() => this.buildExpression("+")}
            >
              +
            </button>
            <button
              className="operator"
              id="decimal"
              onClick={() => this.buildExpression(".")}
            >
              .
            </button>
            <button
              className="number"
              id="0"
              onClick={() => this.buildExpression("0")}
            >
              0
            </button>
            <button
              className="operator"
              id="sqrt"
              onClick={() => this.squareRoot()}
            >
              {"\u221a"}
            </button>
            <button
              className="operator"
              id="equals"
              onClick={() => this.evaluateExpresion()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
