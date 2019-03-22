import { useContext } from 'react';
import { ScrapeContext } from './ScrapeContext';

export default function Data() {
   const scrapeData = useContext(ScrapeContext);
   console.log(scrapeData);

    return (
      <div>
        <h2>Your Data: </h2>
         <p>Hey {scrapeData.hey} </p> 
         <p>Lets {scrapeData.lets} </p>
         <p>Bless {scrapeData.bless} </p>
      </div>
    );
}