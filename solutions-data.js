const DATA = [
  {
    id: `arrays`,
    name: `Arrays`,
    emoji: `🔢`,
    questions: [
      {
        n: 1,
        lc: 1,
        title: `Two Sum`,
        problem: `Find two numbers in the array that add up to a specific target.`,
        codeCpp: `vector<int> twoSum(vector<int>& nums, int target) {
    unordered_map<int, int> map; // Value to index map
    for (int i = 0; i < nums.size(); ++i) {
        int complement = target - nums[i];
        if (map.find(complement) != map.end()) {
            return {map[complement], i};
        }
        map[nums[i]] = i;
    }
    return {};
}`,
        codeJs: `function twoSum(nums, target) {
    const map = new Map(); // value -> index
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}`,
        codePy: `def twoSum(nums, target):
    seen = {}  # value -> index
    for i, num in enumerate(nums):
        need = target - num
        if need in seen:
            return [seen[need], i]
        seen[num] = i
    return []`
      },
      {
        n: 2,
        lc: 121,
        title: `Best Time to Buy and Sell Stock`,
        problem: `Maximize profit by choosing one day to buy and another to sell.`,
        codeCpp: `int maxProfit(vector<int>& prices) {
    int minPrice = INT_MAX, maxProfit = 0;
    for (int price : prices) {
        minPrice = min(minPrice, price);
        maxProfit = max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
        codeJs: `function maxProfit(prices) {
    let minPrice = Infinity, maxProfit = 0;
    for (const price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }
    return maxProfit;
}`,
        codePy: `def maxProfit(prices):
    min_price = float('inf')
    max_profit = 0
    for price in prices:
        min_price = min(min_price, price)
        max_profit = max(max_profit, price - min_price)
    return max_profit`
      },
      {
        n: 3,
        lc: 88,
        title: `Merge Sorted Array`,
        problem: `Merge two sorted arrays into one sorted array.`,
        codeCpp: `void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
    int i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = (nums1[i] > nums2[j]) ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}`,
        codeJs: `function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i >= 0 && j >= 0) {
        nums1[k--] = nums1[i] > nums2[j] ? nums1[i--] : nums2[j--];
    }
    while (j >= 0) nums1[k--] = nums2[j--];
}`,
        codePy: `def merge(nums1, m, nums2, n):
    i, j, k = m - 1, n - 1, m + n - 1
    while i >= 0 and j >= 0:
        if nums1[i] > nums2[j]:
            nums1[k] = nums1[i]; i -= 1
        else:
            nums1[k] = nums2[j]; j -= 1
        k -= 1
    while j >= 0:
        nums1[k] = nums2[j]; j -= 1; k -= 1`
      },
      {
        n: 4,
        lc: 217,
        title: `Contains Duplicate`,
        problem: `Check if an array contains duplicates.`,
        codeCpp: `bool containsDuplicate(vector<int>& nums) {
    unordered_set<int> set;
    for (int num : nums) {
        if (set.count(num)) return true;
        set.insert(num);
    }
    return false;
}`,
        codeJs: `function containsDuplicate(nums) {
    const seen = new Set();
    for (const num of nums) {
        if (seen.has(num)) return true;
        seen.add(num);
    }
    return false;
}`,
        codePy: `def containsDuplicate(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return True
        seen.add(num)
    return False`
      },
      {
        n: 5,
        lc: 238,
        title: `Product of Array Except Self`,
        problem: `Return an array where each element is the product of all other elements.`,
        codeCpp: `vector<int> productExceptSelf(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, 1);
    int left = 1, right = 1;
    for (int i = 0; i < n; ++i) {
        res[i] *= left;
        left *= nums[i];
        res[n - 1 - i] *= right;
        right *= nums[n - 1 - i];
    }
    return res;
}`,
        codeJs: `function productExceptSelf(nums) {
    const n = nums.length;
    const res = new Array(n).fill(1);
    let left = 1, right = 1;
    for (let i = 0; i < n; i++) {
        res[i] *= left;
        left *= nums[i];
        res[n - 1 - i] *= right;
        right *= nums[n - 1 - i];
    }
    return res;
}`,
        codePy: `def productExceptSelf(nums):
    n = len(nums)
    res = [1] * n
    left = right = 1
    for i in range(n):
        res[i] *= left
        left *= nums[i]
        res[n - 1 - i] *= right
        right *= nums[n - 1 - i]
    return res`
      },
      {
        n: 6,
        lc: 53,
        title: `Maximum Subarray`,
        problem: `Find the contiguous subarray with the largest sum.`,
        codeCpp: `int maxSubArray(vector<int>& nums) {
    int maxSum = nums[0], currentSum = nums[0];
    for (int i = 1; i < nums.size(); ++i) {
        currentSum = max(nums[i], currentSum + nums[i]);
        maxSum = max(maxSum, currentSum);
    }
    return maxSum;
}`,
        codeJs: `function maxSubArray(nums) {
    let maxSum = nums[0], currentSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
        codePy: `def maxSubArray(nums):
    max_sum = cur = nums[0]
    for i in range(1, len(nums)):
        cur = max(nums[i], cur + nums[i])
        max_sum = max(max_sum, cur)
    return max_sum`
      },
      {
        n: 7,
        lc: 15,
        title: `3Sum`,
        problem: `Find all unique triplets in the array which gives the sum of zero.`,
        codeCpp: `vector<vector<int>> threeSum(vector<int>& nums) {
    sort(nums.begin(), nums.end());
    vector<vector<int>> res;
    for (int i = 0; i < nums.size() - 2; ++i) {
        if (i > 0 && nums[i] == nums[i - 1]) continue;
        int left = i + 1, right = nums.size() - 1;
        while (left < right) {
            int sum = nums[i] + nums[left] + nums[right];
            if (sum == 0) {
                res.push_back({nums[i], nums[left], nums[right]});
                while (left < right && nums[left] == nums[left + 1]) ++left;
                while (left < right && nums[right] == nums[right - 1]) --right;
                ++left; --right;
            } else if (sum < 0) {
                ++left;
            } else {
                --right;
            }
        }
    }
    return res;
}`,
        codeJs: `function threeSum(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;
                left++; right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return res;
}`,
        codePy: `def threeSum(nums):
    nums.sort()
    res = []
    for i in range(len(nums) - 2):
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        left, right = i + 1, len(nums) - 1
        while left < right:
            s = nums[i] + nums[left] + nums[right]
            if s == 0:
                res.append([nums[i], nums[left], nums[right]])
                while left < right and nums[left] == nums[left + 1]: left += 1
                while left < right and nums[right] == nums[right - 1]: right -= 1
                left += 1; right -= 1
            elif s < 0:
                left += 1
            else:
                right -= 1
    return res`
      },
      {
        n: 8,
        lc: 56,
        title: `Merge Intervals`,
        problem: `Merge overlapping intervals.`,
        codeCpp: `vector<vector<int>> merge(vector<vector<int>>& intervals) {
    sort(intervals.begin(), intervals.end());
    vector<vector<int>> merged;
    for (auto& interval : intervals) {
        if (merged.empty() || merged.back()[1] < interval[0]) {
            merged.push_back(interval);
        } else {
            merged.back()[1] = max(merged.back()[1], interval[1]);
        }
    }
    return merged;
}`,
        codeJs: `function merge(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [];
    for (const interval of intervals) {
        if (!merged.length || merged[merged.length - 1][1] < interval[0]) {
            merged.push(interval);
        } else {
            merged[merged.length - 1][1] = Math.max(merged[merged.length - 1][1], interval[1]);
        }
    }
    return merged;
}`,
        codePy: `def merge(intervals):
    intervals.sort(key=lambda x: x[0])
    merged = []
    for start, end in intervals:
        if not merged or merged[-1][1] < start:
            merged.append([start, end])
        else:
            merged[-1][1] = max(merged[-1][1], end)
    return merged`
      },
      {
        n: 9,
        lc: 11,
        title: `Container With Most Water`,
        problem: `Find the maximum water that can be trapped between two lines.`,
        codeCpp: `int maxArea(vector<int>& height) {
    int left = 0, right = height.size() - 1, maxWater = 0;
    while (left < right) {
        maxWater = max(maxWater, min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) ++left;
        else --right;
    }
    return maxWater;
}`,
        codeJs: `function maxArea(height) {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left < right) {
        maxWater = Math.max(maxWater, Math.min(height[left], height[right]) * (right - left));
        if (height[left] < height[right]) left++;
        else right--;
    }
    return maxWater;
}`,
        codePy: `def maxArea(height):
    left, right = 0, len(height) - 1
    max_water = 0
    while left < right:
        max_water = max(max_water, min(height[left], height[right]) * (right - left))
        if height[left] < height[right]:
            left += 1
        else:
            right -= 1
    return max_water`
      },
      {
        n: 10,
        lc: 48,
        title: `Rotate Image`,
        problem: `Rotate a matrix 90 degrees clockwise.`,
        codeCpp: `void rotate(vector<vector<int>>& matrix) {
    int n = matrix.size();
    for (int i = 0; i < n; ++i) {
        for (int j = i; j < n; ++j) {
            swap(matrix[i][j], matrix[j][i]);
        }
    }
    for (auto& row : matrix) {
        reverse(row.begin(), row.end());
    }
}`,
        codeJs: `function rotate(matrix) {
    const n = matrix.length;
    // Transpose
    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    // Reverse each row
    for (const row of matrix) row.reverse();
}`,
        codePy: `def rotate(matrix):
    n = len(matrix)
    for i in range(n):
        for j in range(i, n):
            matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
    for row in matrix:
        row.reverse()`
      }
    ]
  },
  {
    id: `strings`,
    name: `Strings`,
    emoji: `🔤`,
    questions: [
      {
        n: 1,
        lc: 20,
        title: `Valid Parentheses`,
        problem: `Determine if the input string of brackets is valid.`,
        codeCpp: `bool isValid(string s) {
    stack<char> st;
    unordered_map<char, char> map = {{')', '('}, {'}', '{'}, {']', '['}};
    for (char c : s) {
        if (map.count(c)) {
            if (st.empty() || st.top() != map[c]) return false;
            st.pop();
        } else {
            st.push(c);
        }
    }
    return st.empty();
}`,
        codeJs: `function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (const c of s) {
        if (map[c]) {
            if (!stack.length || stack.pop() !== map[c]) return false;
        } else {
            stack.push(c);
        }
    }
    return stack.length === 0;
}`,
        codePy: `def isValid(s):
    stack = []
    pairs = {')': '(', '}': '{', ']': '['}
    for c in s:
        if c in pairs:
            if not stack or stack.pop() != pairs[c]:
                return False
        else:
            stack.append(c)
    return len(stack) == 0`
      },
      {
        n: 2,
        lc: 125,
        title: `Valid Palindrome`,
        problem: `Check if a string is a palindrome, considering only alphanumeric characters.`,
        codeCpp: `bool isPalindrome(string s) {
    int left = 0, right = s.size() - 1;
    while (left < right) {
        while (left < right && !isalnum(s[left])) ++left;
        while (left < right && !isalnum(s[right])) --right;
        if (tolower(s[left]) != tolower(s[right])) return false;
        ++left; --right;
    }
    return true;
}`,
        codeJs: `function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    const isAlnum = c => /[a-z0-9]/i.test(c);
    while (left < right) {
        while (left < right && !isAlnum(s[left])) left++;
        while (left < right && !isAlnum(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
        left++; right--;
    }
    return true;
}`,
        codePy: `def isPalindrome(s):
    left, right = 0, len(s) - 1
    while left < right:
        while left < right and not s[left].isalnum(): left += 1
        while left < right and not s[right].isalnum(): right -= 1
        if s[left].lower() != s[right].lower():
            return False
        left += 1; right -= 1
    return True`
      },
      {
        n: 3,
        lc: 242,
        title: `Valid Anagram`,
        problem: `Check whether two strings are anagrams of each other.`,
        codeCpp: `bool isAnagram(string s, string t) {
    if (s.size() != t.size()) return false;
    vector<int> count(26, 0);
    for (char c : s) count[c - 'a']++;
    for (char c : t) {
        if (--count[c - 'a'] < 0) return false;
    }
    return true;
}`,
        codeJs: `function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i < s.length; i++) {
        count[s.charCodeAt(i) - 97]++;
        count[t.charCodeAt(i) - 97]--;
    }
    return count.every(c => c === 0);
}`,
        codePy: `def isAnagram(s, t):
    if len(s) != len(t):
        return False
    count = [0] * 26
    for a, b in zip(s, t):
        count[ord(a) - 97] += 1
        count[ord(b) - 97] -= 1
    return all(c == 0 for c in count)`
      },
      {
        n: 4,
        lc: 49,
        title: `Group Anagrams`,
        problem: `Group strings that are anagrams of each other.`,
        codeCpp: `vector<vector<string>> groupAnagrams(vector<string>& strs) {
    unordered_map<string, vector<string>> map;
    for (string s : strs) {
        string sorted = s;
        sort(sorted.begin(), sorted.end());
        map[sorted].push_back(s);
    }
    vector<vector<string>> result;
    for (auto& pair : map) result.push_back(pair.second);
    return result;
}`,
        codeJs: `function groupAnagrams(strs) {
    const map = new Map();
    for (const s of strs) {
        const key = s.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(s);
    }
    return [...map.values()];
}`,
        codePy: `def groupAnagrams(strs):
    from collections import defaultdict
    groups = defaultdict(list)
    for s in strs:
        key = ''.join(sorted(s))
        groups[key].append(s)
    return list(groups.values())`
      },
      {
        n: 5,
        lc: 5,
        title: `Longest Palindromic Substring`,
        problem: `Find the longest palindromic substring in a string.`,
        codeCpp: `string longestPalindrome(string s) {
    int n = s.size(), start = 0, maxLength = 1;
    vector<vector<bool>> dp(n, vector<bool>(n, false));
    for (int i = 0; i < n; ++i) dp[i][i] = true;
    for (int i = n - 1; i >= 0; --i) {
        for (int j = i + 1; j < n; ++j) {
            if (s[i] == s[j] && (j - i == 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLength) {
                    start = i;
                    maxLength = j - i + 1;
                }
            }
        }
    }
    return s.substr(start, maxLength);
}`,
        codeJs: `function longestPalindrome(s) {
    const n = s.length;
    let start = 0, maxLen = 1;
    const dp = Array.from({ length: n }, () => new Array(n).fill(false));
    for (let i = 0; i < n; i++) dp[i][i] = true;
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j] && (j - i === 1 || dp[i + 1][j - 1])) {
                dp[i][j] = true;
                if (j - i + 1 > maxLen) { start = i; maxLen = j - i + 1; }
            }
        }
    }
    return s.slice(start, start + maxLen);
}`,
        codePy: `def longestPalindrome(s):
    n = len(s)
    start, max_len = 0, 1
    dp = [[False] * n for _ in range(n)]
    for i in range(n):
        dp[i][i] = True
    for i in range(n - 1, -1, -1):
        for j in range(i + 1, n):
            if s[i] == s[j] and (j - i == 1 or dp[i + 1][j - 1]):
                dp[i][j] = True
                if j - i + 1 > max_len:
                    start, max_len = i, j - i + 1
    return s[start:start + max_len]`
      },
      {
        n: 6,
        lc: 76,
        title: `Minimum Window Substring`,
        problem: `Find the minimum window in s which contains all characters of t.`,
        codeCpp: `string minWindow(string s, string t) {
    unordered_map<char, int> freq;
    for (char c : t) freq[c]++;
    int left = 0, minLen = INT_MAX, count = 0, start = 0;
    for (int right = 0; right < s.size(); ++right) {
        if (--freq[s[right]] >= 0) ++count;
        while (count == t.size()) {
            if (minLen > right - left + 1) {
                minLen = right - left + 1;
                start = left;
            }
            if (++freq[s[left++]] > 0) --count;
        }
    }
    return minLen == INT_MAX ? "" : s.substr(start, minLen);
}`,
        codeJs: `function minWindow(s, t) {
    const freq = new Map();
    for (const c of t) freq.set(c, (freq.get(c) || 0) + 1);
    let left = 0, minLen = Infinity, count = 0, start = 0;
    for (let right = 0; right < s.length; right++) {
        const c = s[right];
        if (freq.has(c) && --freq.get(c) >= 0) count++;
        while (count === t.length) {
            if (right - left + 1 < minLen) { minLen = right - left + 1; start = left; }
            const lc = s[left++];
            if (freq.has(lc) && ++freq.get(lc) > 0) count--;
        }
    }
    return minLen === Infinity ? '' : s.slice(start, start + minLen);
}`,
        codePy: `def minWindow(s, t):
    from collections import Counter
    freq = Counter(t)
    left = start = 0
    min_len = float('inf')
    count = len(t)
    for right, c in enumerate(s):
        if c in freq:
            if freq[c] > 0:
                count -= 1
            freq[c] -= 1
        while count == 0:
            if right - left + 1 < min_len:
                min_len = right - left + 1
                start = left
            lc = s[left]
            left += 1
            if lc in freq:
                freq[lc] += 1
                if freq[lc] > 0:
                    count += 1
    return '' if min_len == float('inf') else s[start:start + min_len]`
      },
      {
        n: 7,
        lc: 28,
        title: `Find the Index of the First Occurrence in a String`,
        problem: `Return the index of the first occurrence of needle in haystack, or -1.`,
        codeCpp: `int strStr(string haystack, string needle) {
    int m = haystack.size(), n = needle.size();
    for (int i = 0; i <= m - n; ++i) {
        if (haystack.substr(i, n) == needle) return i;
    }
    return -1;
}`,
        codeJs: `function strStr(haystack, needle) {
    const m = haystack.length, n = needle.length;
    for (let i = 0; i <= m - n; i++) {
        if (haystack.slice(i, i + n) === needle) return i;
    }
    return -1;
}`,
        codePy: `def strStr(haystack, needle):
    m, n = len(haystack), len(needle)
    for i in range(m - n + 1):
        if haystack[i:i + n] == needle:
            return i
    return -1`
      },
      {
        n: 8,
        lc: 443,
        title: `String Compression`,
        problem: `Compress the characters array in-place and return the new length.`,
        codeCpp: `int compress(vector<char>& chars) {
    int index = 0, n = chars.size();
    for (int i = 0; i < n;) {
        char c = chars[i];
        int count = 0;
        while (i < n && chars[i] == c) {
            ++i;
            ++count;
        }
        chars[index++] = c;
        if (count > 1) {
            for (char digit : to_string(count)) chars[index++] = digit;
        }
    }
    return index;
}`,
        codeJs: `function compress(chars) {
    let index = 0;
    for (let i = 0; i < chars.length;) {
        const c = chars[i];
        let count = 0;
        while (i < chars.length && chars[i] === c) { i++; count++; }
        chars[index++] = c;
        if (count > 1) {
            for (const digit of String(count)) chars[index++] = digit;
        }
    }
    return index;
}`,
        codePy: `def compress(chars):
    index = i = 0
    while i < len(chars):
        c = chars[i]
        count = 0
        while i < len(chars) and chars[i] == c:
            i += 1
            count += 1
        chars[index] = c
        index += 1
        if count > 1:
            for digit in str(count):
                chars[index] = digit
                index += 1
    return index`
      },
      {
        n: 9,
        lc: 14,
        title: `Longest Common Prefix`,
        problem: `Find the longest common prefix string amongst an array of strings.`,
        codeCpp: `string longestCommonPrefix(vector<string>& strs) {
    if (strs.empty()) return "";
    string prefix = strs[0];
    for (int i = 1; i < strs.size(); ++i) {
        while (strs[i].find(prefix) != 0) {
            prefix = prefix.substr(0, prefix.size() - 1);
            if (prefix.empty()) return "";
        }
    }
    return prefix;
}`,
        codeJs: `function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);
            if (!prefix) return '';
        }
    }
    return prefix;
}`,
        codePy: `def longestCommonPrefix(strs):
    if not strs:
        return ''
    prefix = strs[0]
    for s in strs[1:]:
        while not s.startswith(prefix):
            prefix = prefix[:-1]
            if not prefix:
                return ''
    return prefix`
      },
      {
        n: 10,
        lc: 459,
        title: `Repeated Substring Pattern`,
        problem: `Check if the string can be constructed by repeating a substring.`,
        codeCpp: `bool repeatedSubstringPattern(string s) {
    string doubled = s + s;
    return doubled.substr(1, doubled.size() - 2).find(s) != string::npos;
}`,
        codeJs: `function repeatedSubstringPattern(s) {
    const doubled = s + s;
    return doubled.slice(1, -1).includes(s);
}`,
        codePy: `def repeatedSubstringPattern(s):
    doubled = s + s
    return s in doubled[1:-1]`
      }
    ]
  },
  {
    id: `linkedlists`,
    name: `Linked Lists`,
    emoji: `🔗`,
    questions: [
      {
        n: 1,
        lc: 206,
        title: `Reverse Linked List`,
        problem: `Reverse a singly linked list.`,
        codeCpp: `ListNode* reverseList(ListNode* head) {
    ListNode* prev = nullptr;
    while (head) {
        ListNode* nextNode = head->next;
        head->next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function reverseList(head) {
    let prev = null;
    while (head) {
        const nextNode = head.next;
        head.next = prev;
        prev = head;
        head = nextNode;
    }
    return prev;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def reverseList(head):
    prev = None
    while head:
        nxt = head.next
        head.next = prev
        prev = head
        head = nxt
    return prev`
      },
      {
        n: 2,
        lc: 21,
        title: `Merge Two Sorted Lists`,
        problem: `Merge two sorted linked lists into one sorted list.`,
        codeCpp: `ListNode* mergeTwoLists(ListNode* list1, ListNode* list2) {
    if (!list1) return list2;
    if (!list2) return list1;
    if (list1->val < list2->val) {
        list1->next = mergeTwoLists(list1->next, list2);
        return list1;
    } else {
        list2->next = mergeTwoLists(list1, list2->next);
        return list2;
    }
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let cur = dummy;
    while (list1 && list2) {
        if (list1.val <= list2.val) { cur.next = list1; list1 = list1.next; }
        else { cur.next = list2; list2 = list2.next; }
        cur = cur.next;
    }
    cur.next = list1 || list2;
    return dummy.next;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def mergeTwoLists(list1, list2):
    dummy = cur = ListNode()
    while list1 and list2:
        if list1.val <= list2.val:
            cur.next = list1; list1 = list1.next
        else:
            cur.next = list2; list2 = list2.next
        cur = cur.next
    cur.next = list1 or list2
    return dummy.next`
      },
      {
        n: 3,
        lc: 19,
        title: `Remove Nth Node From End of List`,
        problem: `Remove the n-th node from the end of the list.`,
        codeCpp: `ListNode* removeNthFromEnd(ListNode* head, int n) {
    ListNode dummy(0, head);
    ListNode* slow = &dummy, *fast = &dummy;
    for (int i = 0; i <= n; ++i) fast = fast->next;
    while (fast) {
        slow = slow->next;
        fast = fast->next;
    }
    slow->next = slow->next->next;
    return dummy.next;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0, head);
    let slow = dummy, fast = dummy;
    for (let i = 0; i <= n; i++) fast = fast.next;
    while (fast) { slow = slow.next; fast = fast.next; }
    slow.next = slow.next.next;
    return dummy.next;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def removeNthFromEnd(head, n):
    dummy = ListNode(0, head)
    slow = fast = dummy
    for _ in range(n + 1):
        fast = fast.next
    while fast:
        slow = slow.next
        fast = fast.next
    slow.next = slow.next.next
    return dummy.next`
      },
      {
        n: 4,
        lc: 141,
        title: `Linked List Cycle`,
        problem: `Determine if a linked list has a cycle.`,
        codeCpp: `bool hasCycle(ListNode* head) {
    ListNode* slow = head, *fast = head;
    while (fast && fast->next) {
        slow = slow->next;
        fast = fast->next->next;
        if (slow == fast) return true;
    }
    return false;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function hasCycle(head) {
    let slow = head, fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def hasCycle(head):
    slow = fast = head
    while fast and fast.next:
        slow = slow.next
        fast = fast.next.next
        if slow is fast:
            return True
    return False`
      },
      {
        n: 5,
        lc: 2,
        title: `Add Two Numbers`,
        problem: `Add two numbers represented by linked lists.`,
        codeCpp: `ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
    ListNode dummy, *current = &dummy;
    int carry = 0;
    while (l1 || l2 || carry) {
        int sum = carry;
        if (l1) sum += l1->val, l1 = l1->next;
        if (l2) sum += l2->val, l2 = l2->next;
        carry = sum / 10;
        current->next = new ListNode(sum % 10);
        current = current->next;
    }
    return dummy.next;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let cur = dummy, carry = 0;
    while (l1 || l2 || carry) {
        let sum = carry;
        if (l1) { sum += l1.val; l1 = l1.next; }
        if (l2) { sum += l2.val; l2 = l2.next; }
        carry = Math.floor(sum / 10);
        cur.next = new ListNode(sum % 10);
        cur = cur.next;
    }
    return dummy.next;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def addTwoNumbers(l1, l2):
    dummy = cur = ListNode()
    carry = 0
    while l1 or l2 or carry:
        s = carry
        if l1: s += l1.val; l1 = l1.next
        if l2: s += l2.val; l2 = l2.next
        carry, digit = divmod(s, 10)
        cur.next = ListNode(digit)
        cur = cur.next
    return dummy.next`
      },
      {
        n: 6,
        lc: 160,
        title: `Intersection of Two Linked Lists`,
        problem: `Find the node at which two linked lists intersect.`,
        codeCpp: `ListNode* getIntersectionNode(ListNode* headA, ListNode* headB) {
    ListNode* a = headA, *b = headB;
    while (a != b) {
        a = a ? a->next : headB;
        b = b ? b->next : headA;
    }
    return a;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function getIntersectionNode(headA, headB) {
    let a = headA, b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def getIntersectionNode(headA, headB):
    a, b = headA, headB
    while a is not b:
        a = a.next if a else headB
        b = b.next if b else headA
    return a`
      },
      {
        n: 7,
        lc: 234,
        title: `Palindrome Linked List`,
        problem: `Check whether a linked list is a palindrome.`,
        codeCpp: `bool isPalindrome(ListNode* head) {
    ListNode* slow = head, *fast = head, *prev = nullptr;
    while (fast && fast->next) {
        fast = fast->next->next;
        ListNode* temp = slow->next;
        slow->next = prev;
        prev = slow;
        slow = temp;
    }
    if (fast) slow = slow->next;
    while (slow) {
        if (slow->val != prev->val) return false;
        slow = slow->next;
        prev = prev->next;
    }
    return true;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function isPalindrome(head) {
    let slow = head, fast = head, prev = null;
    while (fast && fast.next) {
        fast = fast.next.next;
        const temp = slow.next;
        slow.next = prev;
        prev = slow;
        slow = temp;
    }
    if (fast) slow = slow.next;
    while (slow) {
        if (slow.val !== prev.val) return false;
        slow = slow.next;
        prev = prev.next;
    }
    return true;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def isPalindrome(head):
    slow = fast = head
    prev = None
    while fast and fast.next:
        fast = fast.next.next
        nxt = slow.next
        slow.next = prev
        prev = slow
        slow = nxt
    if fast:
        slow = slow.next
    while slow:
        if slow.val != prev.val:
            return False
        slow = slow.next
        prev = prev.next
    return True`
      },
      {
        n: 8,
        lc: 25,
        title: `Reverse Nodes in k-Group`,
        problem: `Reverse the nodes of a linked list k at a time.`,
        codeCpp: `ListNode* reverseKGroup(ListNode* head, int k) {
    ListNode* temp = head;
    for (int i = 0; i < k; ++i) {
        if (!temp) return head;
        temp = temp->next;
    }
    ListNode* prev = nullptr, *current = head, *next = nullptr;
    for (int i = 0; i < k; ++i) {
        next = current->next;
        current->next = prev;
        prev = current;
        current = next;
    }
    head->next = reverseKGroup(next, k);
    return prev;
}`,
        codeJs: `// ListNode: function ListNode(val, next) { this.val = val; this.next = next ?? null; }
function reverseKGroup(head, k) {
    let temp = head;
    for (let i = 0; i < k; i++) {
        if (!temp) return head;
        temp = temp.next;
    }
    let prev = null, current = head, next = null;
    for (let i = 0; i < k; i++) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    head.next = reverseKGroup(current, k);
    return prev;
}`,
        codePy: `# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val; self.next = next
def reverseKGroup(head, k):
    temp = head
    for _ in range(k):
        if not temp:
            return head
        temp = temp.next
    prev, cur = None, head
    for _ in range(k):
        nxt = cur.next
        cur.next = prev
        prev, cur = cur, nxt
    head.next = reverseKGroup(cur, k)
    return prev`
      }
    ]
  },
  {
    id: `stacksqueues`,
    name: `Stacks and Queues`,
    emoji: `📚`,
    questions: [
      {
        n: 1,
        lc: 232,
        title: `Implement Queue Using Stacks`,
        problem: `Implement a FIFO queue using two stacks.`,
        codeCpp: `class MyQueue {
    stack<int> s1, s2;
public:
    void push(int x) {
        s1.push(x);
    }
    int pop() {
        peek();
        int top = s2.top();
        s2.pop();
        return top;
    }
    int peek() {
        if (s2.empty()) {
            while (!s1.empty()) {
                s2.push(s1.top());
                s1.pop();
            }
        }
        return s2.top();
    }
    bool empty() {
        return s1.empty() && s2.empty();
    }
};`,
        codeJs: `class MyQueue {
    constructor() { this.s1 = []; this.s2 = []; }
    push(x) { this.s1.push(x); }
    pop() { this.peek(); return this.s2.pop(); }
    peek() {
        if (!this.s2.length) {
            while (this.s1.length) this.s2.push(this.s1.pop());
        }
        return this.s2[this.s2.length - 1];
    }
    empty() { return !this.s1.length && !this.s2.length; }
}`,
        codePy: `class MyQueue:
    def __init__(self):
        self.s1, self.s2 = [], []
    def push(self, x):
        self.s1.append(x)
    def pop(self):
        self.peek()
        return self.s2.pop()
    def peek(self):
        if not self.s2:
            while self.s1:
                self.s2.append(self.s1.pop())
        return self.s2[-1]
    def empty(self):
        return not self.s1 and not self.s2`
      },
      {
        n: 2,
        lc: 225,
        title: `Implement Stack Using Queues`,
        problem: `Implement a LIFO stack using queues.`,
        codeCpp: `class MyStack {
    queue<int> q1, q2;
public:
    void push(int x) {
        q2.push(x);
        while (!q1.empty()) {
            q2.push(q1.front());
            q1.pop();
        }
        swap(q1, q2);
    }
    int pop() {
        int top = q1.front();
        q1.pop();
        return top;
    }
    int top() {
        return q1.front();
    }
    bool empty() {
        return q1.empty();
    }
};`,
        codeJs: `class MyStack {
    constructor() { this.q = []; }
    push(x) {
        this.q.push(x);
        for (let i = 0; i < this.q.length - 1; i++) {
            this.q.push(this.q.shift());
        }
    }
    pop() { return this.q.pop(); }
    top() { return this.q[this.q.length - 1]; }
    empty() { return this.q.length === 0; }
}`,
        codePy: `from collections import deque
class MyStack:
    def __init__(self):
        self.q = deque()
    def push(self, x):
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())
    def pop(self):
        return self.q.pop()
    def top(self):
        return self.q[-1]
    def empty(self):
        return len(self.q) == 0`
      },
      {
        n: 3,
        lc: 155,
        title: `Min Stack`,
        problem: `Design a stack that supports retrieving the minimum element in O(1).`,
        codeCpp: `class MinStack {
    stack<int> s, minS;
public:
    void push(int val) {
        s.push(val);
        if (minS.empty() || val <= minS.top()) minS.push(val);
    }
    void pop() {
        if (s.top() == minS.top()) minS.pop();
        s.pop();
    }
    int top() {
        return s.top();
    }
    int getMin() {
        return minS.top();
    }
};`,
        codeJs: `class MinStack {
    constructor() { this.s = []; this.minS = []; }
    push(val) {
        this.s.push(val);
        if (!this.minS.length || val <= this.minS[this.minS.length - 1]) {
            this.minS.push(val);
        }
    }
    pop() {
        if (this.s[this.s.length - 1] === this.minS[this.minS.length - 1]) this.minS.pop();
        this.s.pop();
    }
    top() { return this.s[this.s.length - 1]; }
    getMin() { return this.minS[this.minS.length - 1]; }
}`,
        codePy: `class MinStack:
    def __init__(self):
        self.s, self.min_s = [], []
    def push(self, val):
        self.s.append(val)
        if not self.min_s or val <= self.min_s[-1]:
            self.min_s.append(val)
    def pop(self):
        if self.s[-1] == self.min_s[-1]:
            self.min_s.pop()
        self.s.pop()
    def top(self):
        return self.s[-1]
    def getMin(self):
        return self.min_s[-1]`
      },
      {
        n: 4,
        lc: 739,
        title: `Daily Temperatures`,
        problem: `For each day, find how many days until a warmer temperature.`,
        codeCpp: `vector<int> dailyTemperatures(vector<int>& temperatures) {
    stack<int> s;
    vector<int> res(temperatures.size(), 0);
    for (int i = 0; i < temperatures.size(); ++i) {
        while (!s.empty() && temperatures[i] > temperatures[s.top()]) {
            int index = s.top();
            s.pop();
            res[index] = i - index;
        }
        s.push(i);
    }
    return res;
}`,
        codeJs: `function dailyTemperatures(temperatures) {
    const stack = [];
    const res = new Array(temperatures.length).fill(0);
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const idx = stack.pop();
            res[idx] = i - idx;
        }
        stack.push(i);
    }
    return res;
}`,
        codePy: `def dailyTemperatures(temperatures):
    stack = []
    res = [0] * len(temperatures)
    for i, t in enumerate(temperatures):
        while stack and t > temperatures[stack[-1]]:
            idx = stack.pop()
            res[idx] = i - idx
        stack.append(i)
    return res`
      },
      {
        n: 5,
        lc: 150,
        title: `Evaluate Reverse Polish Notation`,
        problem: `Evaluate the value of an arithmetic expression in RPN.`,
        codeCpp: `int evalRPN(vector<string>& tokens) {
    stack<int> s;
    for (string& token : tokens) {
        if (token == "+" || token == "-" || token == "*" || token == "/") {
            int b = s.top(); s.pop();
            int a = s.top(); s.pop();
            if (token == "+") s.push(a + b);
            else if (token == "-") s.push(a - b);
            else if (token == "*") s.push(a * b);
            else s.push(a / b);
        } else {
            s.push(stoi(token));
        }
    }
    return s.top();
}`,
        codeJs: `function evalRPN(tokens) {
    const stack = [];
    const ops = new Set(['+', '-', '*', '/']);
    for (const token of tokens) {
        if (ops.has(token)) {
            const b = stack.pop(), a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
}`,
        codePy: `def evalRPN(tokens):
    stack = []
    ops = {'+', '-', '*', '/'}
    for token in tokens:
        if token in ops:
            b, a = stack.pop(), stack.pop()
            if token == '+': stack.append(a + b)
            elif token == '-': stack.append(a - b)
            elif token == '*': stack.append(a * b)
            else: stack.append(int(a / b))  # truncate toward zero
        else:
            stack.append(int(token))
    return stack[0]`
      },
      {
        n: 6,
        lc: 496,
        title: `Next Greater Element I`,
        problem: `Find the next greater element for each element of nums1 in nums2.`,
        codeCpp: `vector<int> nextGreaterElement(vector<int>& nums1, vector<int>& nums2) {
    unordered_map<int, int> map;
    stack<int> s;
    for (int num : nums2) {
        while (!s.empty() && s.top() < num) {
            map[s.top()] = num;
            s.pop();
        }
        s.push(num);
    }
    vector<int> res;
    for (int num : nums1) {
        res.push_back(map.count(num) ? map[num] : -1);
    }
    return res;
}`,
        codeJs: `function nextGreaterElement(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for (const num of nums2) {
        while (stack.length && stack[stack.length - 1] < num) {
            map.set(stack.pop(), num);
        }
        stack.push(num);
    }
    return nums1.map(num => map.get(num) ?? -1);
}`,
        codePy: `def nextGreaterElement(nums1, nums2):
    nge = {}
    stack = []
    for num in nums2:
        while stack and stack[-1] < num:
            nge[stack.pop()] = num
        stack.append(num)
    return [nge.get(num, -1) for num in nums1]`
      },
      {
        n: 7,
        lc: 503,
        title: `Next Greater Element II`,
        problem: `Find the next greater element for each element in a circular array.`,
        codeCpp: `vector<int> nextGreaterElements(vector<int>& nums) {
    int n = nums.size();
    vector<int> res(n, -1);
    stack<int> s;
    for (int i = 0; i < 2 * n; ++i) {
        while (!s.empty() && nums[s.top()] < nums[i % n]) {
            res[s.top()] = nums[i % n];
            s.pop();
        }
        if (i < n) s.push(i);
    }
    return res;
}`,
        codeJs: `function nextGreaterElements(nums) {
    const n = nums.length;
    const res = new Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < 2 * n; i++) {
        while (stack.length && nums[stack[stack.length - 1]] < nums[i % n]) {
            res[stack.pop()] = nums[i % n];
        }
        if (i < n) stack.push(i);
    }
    return res;
}`,
        codePy: `def nextGreaterElements(nums):
    n = len(nums)
    res = [-1] * n
    stack = []
    for i in range(2 * n):
        while stack and nums[stack[-1]] < nums[i % n]:
            res[stack.pop()] = nums[i % n]
        if i < n:
            stack.append(i)
    return res`
      },
      {
        n: 8,
        lc: 622,
        title: `Design Circular Queue`,
        problem: `Design a circular queue with enqueue/dequeue operations.`,
        codeCpp: `class MyCircularQueue {
    vector<int> q;
    int head, tail, size;
public:
    MyCircularQueue(int k) : q(k), head(-1), tail(-1), size(k) {}
    bool enQueue(int value) {
        if (isFull()) return false;
        if (isEmpty()) head = 0;
        tail = (tail + 1) % size;
        q[tail] = value;
        return true;
    }
    bool deQueue() {
        if (isEmpty()) return false;
        if (head == tail) head = tail = -1;
        else head = (head + 1) % size;
        return true;
    }
    int Front() {
        return isEmpty() ? -1 : q[head];
    }
    int Rear() {
        return isEmpty() ? -1 : q[tail];
    }
    bool isEmpty() {
        return head == -1;
    }
    bool isFull() {
        return (tail + 1) % size == head;
    }
};`,
        codeJs: `class MyCircularQueue {
    constructor(k) {
        this.q = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.size = k;
    }
    enQueue(value) {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.head = 0;
        this.tail = (this.tail + 1) % this.size;
        this.q[this.tail] = value;
        return true;
    }
    deQueue() {
        if (this.isEmpty()) return false;
        if (this.head === this.tail) this.head = this.tail = -1;
        else this.head = (this.head + 1) % this.size;
        return true;
    }
    Front() { return this.isEmpty() ? -1 : this.q[this.head]; }
    Rear() { return this.isEmpty() ? -1 : this.q[this.tail]; }
    isEmpty() { return this.head === -1; }
    isFull() { return (this.tail + 1) % this.size === this.head; }
}`,
        codePy: `class MyCircularQueue:
    def __init__(self, k):
        self.q = [0] * k
        self.head = self.tail = -1
        self.size = k
    def enQueue(self, value):
        if self.isFull():
            return False
        if self.isEmpty():
            self.head = 0
        self.tail = (self.tail + 1) % self.size
        self.q[self.tail] = value
        return True
    def deQueue(self):
        if self.isEmpty():
            return False
        if self.head == self.tail:
            self.head = self.tail = -1
        else:
            self.head = (self.head + 1) % self.size
        return True
    def Front(self):
        return -1 if self.isEmpty() else self.q[self.head]
    def Rear(self):
        return -1 if self.isEmpty() else self.q[self.tail]
    def isEmpty(self):
        return self.head == -1
    def isFull(self):
        return (self.tail + 1) % self.size == self.head`
      }
    ]
  },
  {
    id: `binarysearch`,
    name: `Binary Search`,
    emoji: `🎯`,
    questions: [
      {
        n: 1,
        lc: 704,
        title: `Binary Search`,
        problem: `Search a target value in a sorted array.`,
        codeCpp: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
        codeJs: `function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}`,
        codePy: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[mid] < target:
            left = mid + 1
        else:
            right = mid - 1
    return -1`
      },
      {
        n: 2,
        lc: 34,
        title: `Find First and Last Position of Element in Sorted Array`,
        problem: `Find the starting and ending position of a given target value.`,
        codeCpp: `vector<int> searchRange(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    vector<int> result(2, -1);

    // Find the first position
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] < target) left = mid + 1;
        else right = mid - 1;
        if (nums[mid] == target) result[0] = mid;
    }

    left = 0, right = nums.size() - 1;
    // Find the last position
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] <= target) left = mid + 1;
        else right = mid - 1;
        if (nums[mid] == target) result[1] = mid;
    }

    return result;
}`,
        codeJs: `function searchRange(nums, target) {
    const findBound = (findFirst) => {
        let left = 0, right = nums.length - 1, bound = -1;
        while (left <= right) {
            const mid = left + Math.floor((right - left) / 2);
            if (nums[mid] === target) { bound = mid; if (findFirst) right = mid - 1; else left = mid + 1; }
            else if (nums[mid] < target) left = mid + 1;
            else right = mid - 1;
        }
        return bound;
    };
    return [findBound(true), findBound(false)];
}`,
        codePy: `def searchRange(nums, target):
    def find_bound(first):
        left, right, bound = 0, len(nums) - 1, -1
        while left <= right:
            mid = left + (right - left) // 2
            if nums[mid] == target:
                bound = mid
                if first: right = mid - 1
                else: left = mid + 1
            elif nums[mid] < target:
                left = mid + 1
            else:
                right = mid - 1
        return bound
    return [find_bound(True), find_bound(False)]`
      },
      {
        n: 3,
        lc: 74,
        title: `Search a 2D Matrix`,
        problem: `Search a target in a row- and column-sorted matrix.`,
        codeCpp: `bool searchMatrix(vector<vector<int>>& matrix, int target) {
    int rows = matrix.size(), cols = matrix[0].size();
    int left = 0, right = rows * cols - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        int midElement = matrix[mid / cols][mid % cols];
        if (midElement == target) return true;
        if (midElement < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
        codeJs: `function searchMatrix(matrix, target) {
    const rows = matrix.length, cols = matrix[0].length;
    let left = 0, right = rows * cols - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const val = matrix[Math.floor(mid / cols)][mid % cols];
        if (val === target) return true;
        if (val < target) left = mid + 1;
        else right = mid - 1;
    }
    return false;
}`,
        codePy: `def searchMatrix(matrix, target):
    rows, cols = len(matrix), len(matrix[0])
    left, right = 0, rows * cols - 1
    while left <= right:
        mid = left + (right - left) // 2
        val = matrix[mid // cols][mid % cols]
        if val == target:
            return True
        if val < target:
            left = mid + 1
        else:
            right = mid - 1
    return False`
      },
      {
        n: 4,
        lc: 33,
        title: `Search in Rotated Sorted Array`,
        problem: `Search a target in a rotated sorted array.`,
        codeCpp: `int search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return mid;

        // Check which side is sorted
        if (nums[left] <= nums[mid]) { // Left side is sorted
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else { // Right side is sorted
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,
        codeJs: `function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return mid;
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return -1;
}`,
        codePy: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return mid
        if nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return -1`
      },
      {
        n: 5,
        lc: 81,
        title: `Search in Rotated Sorted Array II`,
        problem: `Search a target in a rotated sorted array that may contain duplicates.`,
        codeCpp: `bool search(vector<int>& nums, int target) {
    int left = 0, right = nums.size() - 1;
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) return true;

        // Handle duplicates
        if (nums[left] == nums[mid] && nums[right] == nums[mid]) {
            left++;
            right--;
        } else if (nums[left] <= nums[mid]) { // Left side is sorted
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else { // Right side is sorted
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return false;
}`,
        codeJs: `function search(nums, target) {
    let left = 0, right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) return true;
        if (nums[left] === nums[mid] && nums[right] === nums[mid]) { left++; right--; }
        else if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) right = mid - 1;
            else left = mid + 1;
        } else {
            if (nums[mid] < target && target <= nums[right]) left = mid + 1;
            else right = mid - 1;
        }
    }
    return false;
}`,
        codePy: `def search(nums, target):
    left, right = 0, len(nums) - 1
    while left <= right:
        mid = left + (right - left) // 2
        if nums[mid] == target:
            return True
        if nums[left] == nums[mid] == nums[right]:
            left += 1; right -= 1
        elif nums[left] <= nums[mid]:
            if nums[left] <= target < nums[mid]:
                right = mid - 1
            else:
                left = mid + 1
        else:
            if nums[mid] < target <= nums[right]:
                left = mid + 1
            else:
                right = mid - 1
    return False`
      },
      {
        n: 6,
        lc: 162,
        title: `Find Peak Element`,
        problem: `Find a peak element (an element strictly greater than its neighbors).`,
        codeCpp: `int findPeakElement(vector<int>& nums) {
    int left = 0, right = nums.size() - 1;
    while (left < right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
}`,
        codeJs: `function findPeakElement(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }
    return left;
}`,
        codePy: `def findPeakElement(nums):
    left, right = 0, len(nums) - 1
    while left < right:
        mid = left + (right - left) // 2
        if nums[mid] > nums[mid + 1]:
            right = mid
        else:
            left = mid + 1
    return left`
      }
    ]
  },
  {
    id: `trees`,
    name: `Trees`,
    emoji: `🌳`,
    questions: [
      {
        n: 1,
        lc: 104,
        title: `Maximum Depth of Binary Tree`,
        problem: `Find the maximum depth of a binary tree.`,
        codeCpp: `int maxDepth(TreeNode* root) {
    if (!root) return 0;
    return 1 + max(maxDepth(root->left), maxDepth(root->right));
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def maxDepth(root):
    if not root:
        return 0
    return 1 + max(maxDepth(root.left), maxDepth(root.right))`
      },
      {
        n: 2,
        lc: 100,
        title: `Same Tree`,
        problem: `Check whether two binary trees are the same.`,
        codeCpp: `bool isSameTree(TreeNode* p, TreeNode* q) {
    if (!p && !q) return true;
    if (!p || !q || p->val != q->val) return false;
    return isSameTree(p->left, q->left) && isSameTree(p->right, q->right);
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def isSameTree(p, q):
    if not p and not q:
        return True
    if not p or not q or p.val != q.val:
        return False
    return isSameTree(p.left, q.left) and isSameTree(p.right, q.right)`
      },
      {
        n: 3,
        lc: 101,
        title: `Symmetric Tree`,
        problem: `Check whether a binary tree is a mirror of itself.`,
        codeCpp: `bool isMirror(TreeNode* t1, TreeNode* t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2 || t1->val != t2->val) return false;
    return isMirror(t1->left, t2->right) && isMirror(t1->right, t2->left);
}

bool isSymmetric(TreeNode* root) {
    return isMirror(root, root);
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (!t1 || !t2 || t1.val !== t2.val) return false;
    return isMirror(t1.left, t2.right) && isMirror(t1.right, t2.left);
}
function isSymmetric(root) {
    return isMirror(root, root);
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def isMirror(t1, t2):
    if not t1 and not t2:
        return True
    if not t1 or not t2 or t1.val != t2.val:
        return False
    return isMirror(t1.left, t2.right) and isMirror(t1.right, t2.left)

def isSymmetric(root):
    return isMirror(root, root)`
      },
      {
        n: 4,
        lc: 144,
        title: `Binary Tree Preorder Traversal`,
        problem: `Return the preorder traversal of a binary tree's nodes.`,
        codeCpp: `vector<int> preorderTraversal(TreeNode* root) {
    vector<int> result;
    stack<TreeNode*> st;
    if (root) st.push(root);
    while (!st.empty()) {
        TreeNode* curr = st.top();
        st.pop();
        result.push_back(curr->val);
        if (curr->right) st.push(curr->right);
        if (curr->left) st.push(curr->left);
    }
    return result;
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function preorderTraversal(root) {
    const result = [], stack = [];
    if (root) stack.push(root);
    while (stack.length) {
        const curr = stack.pop();
        result.push(curr.val);
        if (curr.right) stack.push(curr.right);
        if (curr.left) stack.push(curr.left);
    }
    return result;
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def preorderTraversal(root):
    if not root:
        return []
    res, stack = [], [root]
    while stack:
        node = stack.pop()
        res.append(node.val)
        if node.right:
            stack.append(node.right)
        if node.left:
            stack.append(node.left)
    return res`
      },
      {
        n: 5,
        lc: 94,
        title: `Binary Tree Inorder Traversal`,
        problem: `Return the inorder traversal of a binary tree's nodes.`,
        codeCpp: `vector<int> inorderTraversal(TreeNode* root) {
    vector<int> result;
    stack<TreeNode*> st;
    TreeNode* curr = root;
    while (curr || !st.empty()) {
        while (curr) {
            st.push(curr);
            curr = curr->left;
        }
        curr = st.top();
        st.pop();
        result.push_back(curr->val);
        curr = curr->right;
    }
    return result;
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function inorderTraversal(root) {
    const result = [], stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) { stack.push(curr); curr = curr.left; }
        curr = stack.pop();
        result.push(curr.val);
        curr = curr.right;
    }
    return result;
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def inorderTraversal(root):
    res, stack, cur = [], [], root
    while cur or stack:
        while cur:
            stack.append(cur)
            cur = cur.left
        cur = stack.pop()
        res.append(cur.val)
        cur = cur.right
    return res`
      },
      {
        n: 6,
        lc: 145,
        title: `Binary Tree Postorder Traversal`,
        problem: `Return the postorder traversal of a binary tree's nodes.`,
        codeCpp: `vector<int> postorderTraversal(TreeNode* root) {
    vector<int> result;
    stack<TreeNode*> st;
    TreeNode* lastVisited = nullptr;
    while (root || !st.empty()) {
        if (root) {
            st.push(root);
            root = root->left;
        } else {
            TreeNode* node = st.top();
            if (node->right && node->right != lastVisited) {
                root = node->right;
            } else {
                result.push_back(node->val);
                lastVisited = node;
                st.pop();
            }
        }
    }
    return result;
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function postorderTraversal(root) {
    const result = [], stack = [];
    let lastVisited = null;
    while (root || stack.length) {
        if (root) { stack.push(root); root = root.left; }
        else {
            const node = stack[stack.length - 1];
            if (node.right && node.right !== lastVisited) root = node.right;
            else { result.push(node.val); lastVisited = stack.pop(); }
        }
    }
    return result;
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def postorderTraversal(root):
    res, stack = [], [root] if root else []
    last = None
    while stack:
        node = stack[-1]
        if node.left and last is not node.left and last is not node.right:
            stack.append(node.left)
        elif node.right and last is not node.right:
            stack.append(node.right)
        else:
            res.append(node.val)
            last = stack.pop()
    return res`
      },
      {
        n: 7,
        lc: 102,
        title: `Binary Tree Level Order Traversal`,
        problem: `Return the level order traversal of a binary tree's nodes.`,
        codeCpp: `vector<vector<int>> levelOrder(TreeNode* root) {
    vector<vector<int>> result;
    if (!root) return result;
    queue<TreeNode*> q;
    q.push(root);
    while (!q.empty()) {
        int size = q.size();
        vector<int> level;
        for (int i = 0; i < size; ++i) {
            TreeNode* node = q.front();
            q.pop();
            level.push_back(node->val);
            if (node->left) q.push(node->left);
            if (node->right) q.push(node->right);
        }
        result.push_back(level);
    }
    return result;
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function levelOrder(root) {
    if (!root) return [];
    const result = [], queue = [root];
    while (queue.length) {
        const level = [], size = queue.length;
        for (let i = 0; i < size; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
from collections import deque
def levelOrder(root):
    if not root:
        return []
    res, q = [], deque([root])
    while q:
        level = []
        for _ in range(len(q)):
            node = q.popleft()
            level.append(node.val)
            if node.left: q.append(node.left)
            if node.right: q.append(node.right)
        res.append(level)
    return res`,
        note: `Source image was cut off here — this is the standard, correct BFS solution.`
      },
      {
        n: 8,
        lc: 110,
        title: `Balanced Binary Tree`,
        problem: `Determine if a binary tree is height-balanced.`,
        codeCpp: `int height(TreeNode* root) {
    if (!root) return 0;
    int left = height(root->left);
    if (left == -1) return -1;
    int right = height(root->right);
    if (right == -1) return -1;
    if (abs(left - right) > 1) return -1;
    return 1 + max(left, right);
}

bool isBalanced(TreeNode* root) {
    return height(root) != -1;
}`,
        codeJs: `// TreeNode: function TreeNode(val, left, right) { this.val = val; this.left = left ?? null; this.right = right ?? null; }
function height(root) {
    if (!root) return 0;
    const left = height(root.left);
    if (left === -1) return -1;
    const right = height(root.right);
    if (right === -1) return -1;
    if (Math.abs(left - right) > 1) return -1;
    return 1 + Math.max(left, right);
}
function isBalanced(root) {
    return height(root) !== -1;
}`,
        codePy: `# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val; self.left = left; self.right = right
def height(root):
    if not root:
        return 0
    left = height(root.left)
    if left == -1:
        return -1
    right = height(root.right)
    if right == -1:
        return -1
    if abs(left - right) > 1:
        return -1
    return 1 + max(left, right)

def isBalanced(root):
    return height(root) != -1`,
        note: `Not shown in the source images — this is the standard O(n) solution.`
      }
    ]
  }
];
