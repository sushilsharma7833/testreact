import { BrowserRouter, Route, Routes } from "react-router-dom";

import Comment from "./component/Comment";
import Counter from "./component/Counter";
import FunctionComp from "./component/FunctionComp";
import FormTest from "./component/FormTest";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Comment" element={<Comment />} />
          <Route path="/FormTest" element={<FormTest />} />
          <Route path="/FunctionComp" element={<FunctionComp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
