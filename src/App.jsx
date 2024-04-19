import { useRef } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Login from "./pages/Authentication/components/Login";
import { Component } from "react";
import Parent from "./pages/Parent";
import Product from "./pages/Product/Product";
import ListProduct from "./pages/Product/component/ListProduct";
import Header from "./shared/Header/Header";
import Sidebar from "./shared/Sidebar/Sidebar";
import Dashboard from "./shared/Dashboard/Dashboard";
import Todo from "./shared/Todo/Todo";

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // name : 'Imam'
  //     // count: 0,
  //     // isVisible : true
  //     textSize: 16, // nilai awal ukuran text
  //   };
  // }

  // toggleVisibility = () =>{
  //   this.setState(prevState =>({
  //     isVisible : !prevState.isVisible
  //   }))
  // }
  // state = { count: 0 };

  // incrementCount = () => {
  //   this.setState((prevState) => ({
  //     count: prevState.count + 1,
  //   }));
  // };

  // increaseFont = () => {
  //   this.setState((prevState) => ({
  //     textSize: prevState.textSize + 1,
  //   }));
  // };

  // decreaseFont = () => {
  //   this.setState((prevState) => ({
  //     textSize: prevState.textSize - 1,
  //   }));
  // };

  state = {
    page : <Todo/>
  }

  navigateTo = (component) =>{
    this.setState({page : component})
  }

  render() {
    return (
      <div className="d-flex">
        <Sidebar navigateTo={this.navigateTo}/>
        <main className="w-100 flex-grow-1">
          <Header />
          {this.state.page}
        </main>
      </div>
    );
  }
}

export default App;
