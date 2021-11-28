function myRemove(arr, item) {
    let newArr = [];
    for (let index = 0; index < arr.length; index += 1) {
      if (item !== arr[index]) {
        newArr.push(arr[index]);
      }
    }
    return newArr;
  }
  
  // implemente seus testes aqui

  test('item removido',()=>{
      expect(myRemove([1, 2, 3, 4], 3).toEqual([1,2,4]));
  })  