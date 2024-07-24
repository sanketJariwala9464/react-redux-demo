import Header from "../Components/layouts/Header";
import Footer from "../Components/layouts/Footer";

const DefaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
        <main>
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;