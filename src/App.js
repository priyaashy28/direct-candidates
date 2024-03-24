import "./App.css";

import { Route, Routes } from "react-router-dom";

import { APIContextProvider } from "./context/apiContext";
import { Candidate } from "./components/candidate";
import { CandidatesList } from "./components/candidatesList";

function App() {
  return (
    <APIContextProvider>
      <Routes>
        <Route path="/" element={<CandidatesList />} />
        <Route path="/candidate/:id" element={<Candidate />} />
      </Routes>
    </APIContextProvider>
  );
}

export default App;
