class Solution:

    roman_numerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }

    def romanToInt(self, s: str) -> int:
        response = 0
        skip = False
        for char in s:
            if skip == False:
                
                char_value = char
                value = self.roman_numerals[char]
                
                next_value_char = s[s.index(char)+1] if s.index(char)+1 < len(s) else ''
                next_value_num = self.roman_numerals[next_value_char] if s.index(char)+1 < len(s) else 0

                if next_value_num > value:
                    char_value = char_value + next_value_char
                    value = next_value_num - value
                    skip = True

                response += value
            else:
                skip = False
        return response
