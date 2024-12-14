import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="text-black font-poppins">
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-5">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-18">
        <aside>Left Navbar</aside>
        <section>Main Content</section>
        <aside>Right Content</aside>
      </main>
    </div>
  );
};

export default HomeLayout;
