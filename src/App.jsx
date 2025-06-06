import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
