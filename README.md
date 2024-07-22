# The Joy of Painting

## Regex - Parsing the Data

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