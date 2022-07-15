const even = () => {
  const nums = [];
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
      nums.push(i);
    }
  }
  return nums;
};

even();
