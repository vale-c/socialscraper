import { ScrapeProvider } from './ScrapeContext';

export default function Page({children}) {
   return (
   <ScrapeProvider
      value={{
       hey: 'ho',
       lets: 'go',
       bless: 'you',
   }}>
      <div className="page">{children}</div>
   </ScrapeProvider>
   );
}

