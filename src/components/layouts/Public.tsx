import Footer from "./Footer";
import Header from "./Header";

interface IPublicLayoutProps {
  component: React.ReactNode;
}

const PublicLayout: React.FC<IPublicLayoutProps> = ({ component }) => {
  return (
    <div className="mx-auto sm:max-w-screen-2xl lg:max-w-[1280px] p-4 sm:p-8">
      <Header />
      {component}
      <Footer />
    </div>
  );
};

export default PublicLayout;
