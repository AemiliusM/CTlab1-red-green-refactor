const capAndFilt = (arr) => {
  const newArr = [];
  for (const string of arr) {
    const upString = string.toUpperCase();
    if (!upString.startsWith('F')) {
      newArr.push(upString);
    } 
    console.log(newArr);
  }
  return newArr;

};
    
          
//   const newArr = arr.filter((string) => !string.startsWith('f'));
    


export default capAndFilt;
