//https://leetcode.com/problems/permutations-ii/
function permuteUnique(nums: number[]): number[][] {
    if (nums.length === 1) {
        return [nums]
    }

    const combinations = [];
    const final = [];
    let clone = [...nums]

    for (let i = 0; i < nums.length; i++) {
        clone = shift(clone)
        combinations.push(clone);
    }

    for (let i = 0; i < combinations.length; i++) {
        const result = permuteUnique(combinations[i].slice(1));

        for (let j = 0; j < result.length; j++) {
            final.push([combinations[i][0], ...result[j]])
        }
    }

    return uniqueArrays(final);
}

function uniqueArrays(array: number[][]): number[][] {
    const seen = new Set();
    return array.filter((item) => {
        const key = JSON.stringify(item);
        return !seen.has(key) && seen.add(key);
    });
}

function shift(nums: number[]): number[] {
    return [...nums.slice(1),nums[0]]
}

console.log(permuteUnique([1,2,1]))
