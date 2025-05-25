import Head from 'next/head';
import Header from '../layout/Header';
import Sidebar from './Sidebar';

export default function WorkspaceLayout({ title, children }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>{title ? `${title} | Forever Together` : 'Forever Together'}</title>
        <meta name="description" content="Plan your perfect wedding day with our easy-to-use tools" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        
        <div className="flex-1">
          <main className="p-4 md:p-8">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
