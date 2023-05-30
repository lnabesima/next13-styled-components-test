'use client';

import {ReactNode} from 'react';
import StyledComponentsRegistry from '@/app/registry';
import {GlobalStyle} from '@/styles/Globals';

export default function RootLayout({children}: { children: ReactNode }) {
  return (<html lang={'pt-br'}>
  <body>
  <main>
    <nav>
      <ul>
        <li>a1</li>
        <li>a2</li>
        <li>a3</li>
      </ul>
    </nav>
    <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
  </main>
  <GlobalStyle />
  </body>
  </html>);
}