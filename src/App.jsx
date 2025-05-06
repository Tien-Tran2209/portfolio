
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { CV } from "./components/CV";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Box from "@mui/material/Box";

export default function App() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <Box
      sx={{
        backgroundColor: "#111827", // dark navy
      }}
    >
      <Navbar currentTab={tabIndex} onTabChange={setTabIndex} />
      <main>
        {tabIndex === 0 && <About />}
        {tabIndex === 1 && <Projects />}
        {tabIndex === 2 && <CV />}
        {tabIndex === 3 && <Contact />}

      </main>
    </Box>
  );
}

