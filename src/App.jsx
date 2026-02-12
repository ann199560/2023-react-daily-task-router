import "./App.css";
import {
  Routes,
  Route,
  HashRouter,
  NavLink,
  useNavigate,
} from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  return <button onClick={() => navigate("/login")}>登出</button>;
};

const Homepage = () => {
  return (
    <>
      <a href="https://hackmd.io/vt5PCuDoTUewI4Rj5UlQvQ?view">
        Day43 - React 路由練習 (1) - React Router 建立
      </a>
      <a href="https://hackmd.io/Q8hWng_-Q3yCE5rPk1iatg">
        Day44 - React 路由練習 (2) - React Router Navigate
      </a>
      <p>這是首頁</p>
    </>
  );
};
const Todo = () => {
  return (
    <>
      <p>這是 Todo 頁面</p>
      <LogOut />
    </>
  );
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>There's nothing here!</p>
              </main>
            }
          />
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div>
  );
}

export default App;
