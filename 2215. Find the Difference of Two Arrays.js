// Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:

// answer[0] is a list of all distinct integers in nums1 which are not present in nums2.
// answer[1] is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists may be returned in any order.

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const arr1 = Array.from(new Set(nums1))
    const arr2 = Array.from(new Set(nums2))
    const sm = arr1.length <= arr2.length ? arr1 : arr2
    const lg = arr1.length <= arr2.length ? arr2 : arr1
    let i = 0
    while(i < sm.length){
        if(lg.indexOf(sm[i]) !== -1) {
            lg.splice(lg.indexOf(sm[i]), 1)
            sm.splice(i, 1)
        }else i++
    }
    return arr1.length <= arr2.length ? [sm, lg] : [lg, sm]
};
