/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length === 0) return 0;

    let i = 0; // pointer for the position of the last unique element
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;            // move the unique pointer forward
            nums[i] = nums[j]; // overwrite the next position with new unique element
        }
    }

    return i + 1; // total count of unique elements
};