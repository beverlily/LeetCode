const clumsy = (n) => {
  const nums = Array.from({ length: n }, (_, i) => n - i);

  let finalTotal = 0;
  let groupTotal = nums[0];
  let op = 0;

  for (let i = 1; i < n; i++) {
    switch (op) {
      case 0:
        groupTotal *= nums[i];
        break;
      case 1:
        groupTotal = Math.floor(groupTotal / nums[i]);
        break;
      case 2:
        finalTotal += (finalTotal ? -1 : 1) * groupTotal + nums[i];
        groupTotal = 0;
        break;
      case 3:
        groupTotal = nums[i];
        break;
    }
    op = op === 3 ? 0 : op + 1;
  }

  return (finalTotal += (finalTotal ? -1 : 1) * groupTotal);
};
