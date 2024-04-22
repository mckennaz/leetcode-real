// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2, carry) {
    if(!l1 && !l2 && !carry) return null;

    var total = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (carry || 0);
    carry = parseInt(total / 10);
    return new ListNode(total % 10, addTwoNumbers(l1?.next, l2?.next, carry));
};
