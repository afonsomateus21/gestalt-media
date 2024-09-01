import { Outlet, ScrollRestoration } from "react-router-dom";

function App() {
  return (
    <main className="bg-gradient-to-b from-blue-800 to-violet-900 h-auto">
      <Outlet />
      <ScrollRestoration />
    </main>
  )
}

export default App
