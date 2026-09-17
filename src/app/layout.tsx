import { GeistSans, GeistMono } from '@geist-ui/core';
import { cn } from '@/shared/lib/utils';
import { Providers } from '@/components/Providers';
import { QueryClientProvider } from 'react-query';
import { QueryClient } from 'react-query';
import { useState } from 'react';

export default function RootLayout({ children }: LayoutProps<"/">) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Providers>
        <html
          lang="en"
          className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
        >
          <head>
            <link rel="icon" href="/frontend.png" />
          </head>
          <body className="min-h-full flex flex-col">
            {children}
          </body>
        </html>
      </Providers>
    </QueryClientProvider>
  );
}
