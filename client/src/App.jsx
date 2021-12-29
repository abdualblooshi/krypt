import React from "react";
import {
  Navbar,
  Welcome,
  Footer,
  Loader,
  Transactions,
  Services,
} from "./components";

import "./index.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
    </div>
  );
};

export default App;
