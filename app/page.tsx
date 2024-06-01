import Image from "next/image";
import Logo from "@/assets/logo.svg";
import LandingImg from "@/assets/main.svg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HomePage = () => {
  return (
    <main>
      <header className="mx-auto max-w-6xl px-4 py-6 sm:px-8">
        <Image src={Logo} alt="logo" />
      </header>
      <section className="mx-auto -mt-20 grid h-screen items-center px-4 py-6 sm:px-8 lg:grid-cols-[1fr,400px]">
        <div>
          <h1 className="text-4xl font-bold capitalize md:text-7xl">
            Job <span className="text-primary">tracking</span> app
          </h1>
          <p className="mt-4 max-w-md leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe,
            delectus! Rem labore incidunt delectus laboriosam eos unde numquam!
            Laudantium et voluptate sint tempore, corrupti esse. Perferendis hic
            iste quod accusantium?
          </p>
          <Button asChild className="mt-4">
            <Link href="/add-job">Get Started</Link>
          </Button>
        </div>
        <div>
          <Image
            src={LandingImg}
            alt="landing svg"
            className="hidden lg:block"
          />
        </div>
      </section>
    </main>
  );
};
export default HomePage;
