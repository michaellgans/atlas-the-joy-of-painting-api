# The Joy of Painting

### Regex - Parsing the Data

<strong>This symbol means the preceding character is...</strong>

| Name | Symbol | Notes |
| --- | --- | --- |
| Repeaters | `* + {}` | used more than one time. |
| --- | `*` | used 0 or more times. |
| --- | `+` | used at least one or more times. |
| --- | `{x}` | used x number of times. |
| --- | `{x,}` | used a minimum of x times. |
| --- | `{x,y}` | used between x and y times. |
| Wildcard | `.` | any character any number of times. |
| Optional | `?` | an optional character. |
| Start Position | `^` | matched at the start of a string. |
| End Position | `$` | matched at the end of a string. |

Astrisk Example:
```
Expression: ab*c
True: ac, abc, abbc, abbbbbc
```

Plus Example:
```
Expression: \w+
True: "hello", "world123"
False: "hello-world"

Expression: /W+ (capital W)
True: "@#$"
False: "hello" or "123"
```

Start and End Positions Example:
```
// Note the ^ is before the pattern 901
^\d{3} will match with patterns like "901" in "901-333-".

// Note the $ is after the pattern -333
-\d{3}$  will match with patterns like "-333" in "-901-333".
```

Wildcard Example:
```
Expression: a.b
True: "acb", "a-b"
False: "ab" or "a\nb"
```

<strong> Character Classes: This matches any... </strong>
Note: The capitals can be negated to mean the lowercase.

| Name | Symbol | True | False |
| --- | --- | --- | --- |
| Whitespace | `/s` | `" " (space), "\t" (tab)` | `"a" or "1"` |
| Non-whitespace | `/S` | `"a" or "1"` | `" " (space), "\t" (tab)` |
| Numbers | `/d` | `"123"` | `"asd"` |
| Non-numbers | `/D` | `"asd"` | `"123"` |
| Alpha-numeric | `/W` | `"hello", "world123"` | `@#$%` |
| Non-alpha-numeric | `/w` | `@#$` | `"Hello" or "123"` |

<strong> Custom Character Classes: This matches any character... </strong>

| Name | Symbol | True | False |
| --- | --- | --- | --- |
| Custom | `[abc]` | `"a", "b", or "c"` | `anything else` |
| Negated | `[^abc]` | `Do NOT include a, b, or c` | `"a", "b", or "c"` |
| Range | `[a-z]` | `Any lowercase` | `Anything not lowercase` |

#### Regex Notes

- To search for characters that are used in Regex pattners, they will need to be escaped. `\d+[\+-x\*]\d+` This pattern is looking for a digit repeated at least once, then a `+-x*`, and another digit repeated at least once.  Both `+` and `*` are escaped.