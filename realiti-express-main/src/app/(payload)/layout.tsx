/* /* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. 
import configPromise from '@payload-config'
import '@payloadcms/next/css'
import { RootLayout } from '@payloadcms/next/layouts'
/* DO NOT MODIFY IT BECAUSE IT COULD BE REWRITTEN AT ANY TIME. 
import React from 'react'

import './custom.scss'

type Args = {
  children: React.ReactNode
}

const Layout = ({ children }: Args) => <RootLayout config={configPromise}>{children}</RootLayout>

export default Layout */

// Layout.tsx

import React from 'react';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="root-layout">
          {children}
        </div>
      </body>
    </html>
  );
};

export default Layout;

