import Image from 'next/image';
import Logo from '@/assets/logosaas.png'; // Update this path to the actual path of your logo

import Link from 'next/link';

const LogoButton: React.FC = () => {
  return (
    <>
    <Link href="/" className="flex justify-center items-center gap-[3px]">
              <Image src={Logo} alt="Saas Logo" height={40} width={40} />
              <h1 className="nav-title">Ziro</h1>
              </Link>
              </>
  );
};

export default LogoButton;
