import { MainLayout } from "@ui";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route>
          <Route path="/test" element={<>test 3</>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
