import ArrowRight from "@/assets/arrow-right.svg";
import Logo from "@/assets/logosaas.png";
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";


interface HeaderProps {
  showStreamlineText?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ showStreamlineText = true }) => {
  return (
    <header className="sticky top-0 backdrop-blur-sm z-20">
      {showStreamlineText && (
        <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
          <p className="text-white/60 hidden md:block">
            Streamline your workflow and boost your productivity
          </p>
          <div className="inline-flex gap-1 items-center">
            <Link href="/signin">Get started for free</Link>
            <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
          </div>
        </div>
      )}
      <div className="py-5">
        <div className="container">
          <div className="flex items-center justify-between">
        
            <Link href="/" className="flex justify-center items-center gap-[3px]">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
              <h1 className="nav-title">Ziro</h1>
              </Link>
            

            <MenuIcon className="h-5 w-5 md:hidden" />
            <nav className="hidden md:flex gap-6 text-black/60 items-center">
             
              <a href="/features">Features</a>
              <a href="/#customers">Customers</a>
              <a href="/#pricing">Pricing</a>
              <a href="/help">Help</a>
              
                <Link href="/signin" ><button className="bg-black btn-primary text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center tracking-tight" >Get for free</button></Link>
              
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};