import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="container absolute left-2/4 z-10 mx-auto -translate-x-2/4 p-4">
        <Header />
      </div>
        <main>
          {children}
        </main>
      <Footer />
    </>
  );
};

export default DefaultLayout;