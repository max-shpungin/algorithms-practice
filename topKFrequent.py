class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:
        # build a freq counter of values
        # return keys of highest k values as array
        top_k_values = []

        def _get_counter(nums: list[int]) -> dict[int, int]:
            out = {}
            for num in nums:
                out[num] = out.get(num) + 1 if out.get(num) else 1
            return out

        counter = _get_counter(nums)
        for i in range(k):
            max = float('-inf')
            for val in counter:
                max = max if counter.get(max, float('-inf')) > counter[val] else val
            top_k_values.append(max)
            counter[max] = 0
        return top_k_values
