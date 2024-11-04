import { useState } from "react";
import NavBar from "./scenes/navbar";
import { Page } from "./shared/types";

function App() {
  const [selectedPage, setSelectedPage] = useState<Page>(Page.Home);
  return (
    <div className="app bg-gray-20">
      <NavBar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    </div>
  );
}

export default App;
