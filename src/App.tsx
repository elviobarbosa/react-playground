import "./App.css";
import { Contact, Home, Plus } from "lucide-react";
import Menu from "./shared/components/Menu";
import Header from "./shared/components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterUserNew from "./features/register-user/container/RegisterUserNew";
import ScrollToTop from "./shared/lib/helpers/scroll-top.helper";
import { TitleProvider } from "./shared/lib/context/TitleContext";

function App() {
  return (
    <>
      <TitleProvider>
        <Router>
          <ScrollToTop />
          <Header />
          <div className="flex min-h-screen">
            <Menu />
            <div className="flex flex-col flex-grow ml-64">
              <main className="p-4 flex-grow">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/register-user" element={<RegisterUserNew />} />
                </Routes>
              </main>
              {/* <Footer />   */}
            </div>
          </div>
        </Router>
      </TitleProvider>
    </>
  );
}

export default App;
