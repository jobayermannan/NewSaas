// components/Button.tsx
'use client'
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ href, children, className = '' }) => {
  return (
    <Link href={href}>
      <div className={`inline-flex items-center justify-center btn btn-primary ${className}`}>
        {children}
      </div>
    </Link>
  );
};

export default Button;	