import { MainLayout } from "@ui";
import { Row } from "antd";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route>
          <Route path="/test" element={<Row>test 311</Row>} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
