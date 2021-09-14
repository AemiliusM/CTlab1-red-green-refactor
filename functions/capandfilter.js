const capAndFilt = (arr) => {
  const newArr = arr.map((string) => string.toUpperCase());
  const filtArr = newArr.filter(string => !string.startsWith('F'));
   
    
  return filtArr;
  

};
    
          
    


export default capAndFilt;
