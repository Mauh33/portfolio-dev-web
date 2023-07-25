import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DropdownProvider } from "./utils/hooks/dropdownContext";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <DropdownProvider>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </DropdownProvider>
    </BrowserRouter>
  );
}

export default App;
