import { Outlet } from "react-router-dom";

function App() {
  return (
    <main className="bg-blue-800 h-screen flex items-center">
      <Outlet />
    </main>
  )
}

export default App
