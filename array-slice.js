// slice holo kuno akti array ar moddo khan take koyekti element barkora
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const part = nums.slice(2, 5);
console.log(part);
console.log(nums);

// splice kuno akti element remove kore and j jaiga teke remove kore tik sai jaiga te aber element add kore
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const remove = nums.splice(2, 3, 77, 88, 99);
console.log(remove);
console.log(nums);

// join holo array golo ke add kore number a convert kore
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
const remove = nums.splice(2, 3, 77, 88, 99);
const together =  nums.join(",");
console.log(together);