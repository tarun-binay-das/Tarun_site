import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const App: React.FC = () => {
  return (
    <div className="bg-bg text-white">
      <Navbar />
      <main className="pt-16">
        <Hero />
      </main>
    </div>
  );
};

export default App;
