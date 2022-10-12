//my solution
/*
!Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]
FUNDAMENTALSARRAYS
*/
function arrayDiff(a, b) {
    let c=a
    for (const item of b) {
        c=c.map((val)=>{
            if(val!=item) return  val 
            
        })   
    }
    return c.filter(a=>a!=undefined)
}
console.log(arrayDiff([3,4,4,5,3,8], [3,5]))
//best solution
function array_diff(a, b) {
    return a.filter(e => !b.includes(e));
}
console.log(array_diff([3,4,4,5,3,8], [3,5]))