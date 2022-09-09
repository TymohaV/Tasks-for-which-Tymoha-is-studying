function includes(array, value) {
    // Change code below this line
    for (let i = 0; i < array.length; i++) {
          if (array[i] === value) {
              return true;
          }
      }
      return false;
    // Change code above this line
  }