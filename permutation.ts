//https://leetcode.com/problems/permutations/description/
function permute(nums: number[]): number[][] {
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
        const result = permute(combinations[i].slice(1));

        for (let j = 0; j < result.length; j++) {
            final.push([combinations[i][0], ...result[j]])
        }
    }
    
    return final
}

function shift(nums: number[]): number[] {
    return [...nums.slice(1),nums[0]]
}

console.log(permute([1,2,3]))
