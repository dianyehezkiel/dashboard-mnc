import Dashboard from "./components/Dashboard";
import NavMenu from "./components/NavMenu";
import TopBar from "./components/TopBar";

function App() {
  return (
    <div className="flex w-screen h-screen bg-[#F5F6FA] text-blackText overflow-hidden">
      <NavMenu />
      <main className="grow-0 shrink-0 w-screen sm:w-[calc(100vw-4rem)] lg:w-[calc(100vw-18.4375rem)] overflow-x-hidden">
        <TopBar />
        <Dashboard />
      </main>
    </div>
  );
}

export default App;
