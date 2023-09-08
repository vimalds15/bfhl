export const findHighest =(data)=> {
    let highest = null;
    const alphabets = [];
  
    for (const item of data) {
      if ((item >= 'A' && item <= 'Z') || (item >= 'a' && item <= 'z')) {
        alphabets.push(item);
  
        if (!highest || item > highest) {
          highest = item;
        }
      }
    }
    return { highest, alphabets };
  }