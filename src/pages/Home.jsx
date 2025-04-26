import HeroSection from "../components/HeroSection";
import CourseCategoryNav from "../components/CourseCategoryNav";
import CourseList from "../components/CourseList";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <main className="bg-warning-background/30 min-h-screen">
      <HeroSection />
      <section className="w-full">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-8 py-8 md:pb-16">
          <div className="flex flex-col gap-4 md:px-4">
            <h1 className="text-text-dark-primary text-2xl font-semibold tracking-tight md:text-3xl md:leading-[1.25]">
              Koleksi Video Pembelajaran Unggulan
            </h1>
            <span className="text-text-dark-secondary text-base font-normal tracking-tight">
              Jelajahi Dunia Pengetahuan Melalui Pilihan Kami!
            </span>
          </div>
          <CourseCategoryNav />
          <CourseList />
        </div>
      </section>
      <Newsletter />
    </main>
  );
};

export default Home;
