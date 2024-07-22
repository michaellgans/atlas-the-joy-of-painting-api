# The Joy of Painting

### Regex - Parsing the Data

<strong>This symbol means the preceding character is...</strong>

- Repeaters - * + { } - used more than one time.
- `*` - used 0 or more times.
```
Input: ab*c
Output: ac, abc, abbc, abbbbbc
```

- `+` - used at least one or more times.
```
Input: ab*c
Output: abc, abbc, abbbbbc
```

- `{#}` - means repeat the character the number of times inside the bracket.
```
Input: a{2}, a{2,}, a{2, 4}
Output: aa, aa or MORE, min aa MAX aaaa
```

- Wildcard - `.` - used to represent any character any number of times.
- Optional - `?` - used to say the character may or may not be present.
- Start Position - `^` - used to match at the start of a string
- End Position - `$` - used to match at the end of a string