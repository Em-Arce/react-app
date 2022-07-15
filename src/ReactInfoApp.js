import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./Components/RIANavBar";

function Page(){
  return(
    <div>
    <NavBar />

    </div>
  )
};

ReactDOM.render(<Page />, document.getElementById("root"));
