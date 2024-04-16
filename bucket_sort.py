class Solution:
    def sortColors(self, nums: List[int]) -> None:
        """
        Do not return anything, modify nums in-place instead.
        """
        buckets = [0,0,0]
        for num in nums:
            buckets[num] += 1

        nums_pointer = 0
        for i in range(len(buckets)):
            for j in range(buckets[i]):
                nums[nums_pointer] = i
                nums_pointer += 1