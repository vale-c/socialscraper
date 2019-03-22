/* 
export function uniqueCount(scrapes) {
   return scrapes.reduce((acc, scrape) => {
        //check if this one is already in the accumulator
        //if there us already one in the doc
         if(!acc.find(el => el.count === scrape.count)) {
           return [...acc, scrape];
         }
         return acc;
    }, []);
}

 */

export function uniqueCount(scrapes) {
  return scrapes.filter((item,i, arr) => {
    if( i=== 0) return true;// keep if it's first one!
      const lastItem = arr[i-1];
    return !(item.count === lastItem.count);
   });
}