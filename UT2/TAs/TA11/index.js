function duplicates(nums) {
  const seen = new Set();
    const duplicates = new Set();

    for (const num of nums) {
        if (seen.has(num)) {
            duplicates.add(num);
        }
        seen.add(num);
    }

  return duplicates.size;
}

console.log(duplicates([1, 2, 2, 4, 5])); 