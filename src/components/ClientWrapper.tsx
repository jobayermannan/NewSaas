"use client";
import React from 'react';
import { AuthProvider } from '@/context/AuthContext';

import { ReactNode } from 'react';

const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return <AuthProvider>{children}</AuthProvider>;
};

export default ClientWrapper;