const reformat = (s) => {
   if (!s) return "";
   if (s.length === 1) return s;

   const nums = [];
   const strings = [];

   for (const char of [...s]) {
      isNaN(char) ? strings.push(char) : nums.push(char);
   }

   if (nums.length === s.length
      || strings.length === s.length
      || Math.abs(nums.length - strings.length) > 1
   ) return "";

   const [largerArr, smallerArr] = (nums.length > strings.length) ? [nums, strings] : [strings, nums];

   return largerArr.map((elem, i) => `${elem}${smallerArr[i] || ''}`).join('');
}
