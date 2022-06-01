// 経路を作る
import {BrowserRouter, Route, Routes} from "react-router-dom";

// パスを通す
import Login from "../routes/Login/";

// appの構成
function App() {
    return (
        <div>
            <Main />
        </div>
    );
}

// 経路図みたいな
function Main() {
    return (
        <BrowserRouter>
          <Routes>
              <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
    );
}

export default App;