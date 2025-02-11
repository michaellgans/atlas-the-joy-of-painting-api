# The Joy of Painting

## Table of Contents
- [Code Snips](#code-snips)
- [Regex Research](#regex---parsing-the-data)
- [PowerBI](#powerbi)
- [Lessons Learned](#lessons-learned)

## Code Snips
Shows the transformation of `episode_dates.txt` into a Map Dictionary.
```
michaellgans@Victoria:~/atlas-the-joy-of-painting-api$ node regexEpisodeDates.js | head -8
File has been read!
Size of dictionary: 403
Map {
  1 => { paintingTitle: 'A Walk in the Woods', paintingMonth: 'January' },
  2 => { paintingTitle: 'Mount McKinley', paintingMonth: 'January' },
  3 => { paintingTitle: 'Ebony Sunset', paintingMonth: 'January' },
  4 => { paintingTitle: 'Winter Mist', paintingMonth: 'January' },
  5 => { paintingTitle: 'Quiet Stream', paintingMonth: 'February' },
```
Demonstrates a test for writing a new CSV file and Data Validation.
```
michaellgans@Victoria:~/atlas-the-joy-of-painting-api$ node regexSubjectMatter.js
File has been read!
Size of dictionary: 403
File successfully written!
Size of new CSV: 403
```
Refines CSV file creation!
```
michaellgans@Victoria:~/atlas-the-joy-of-painting-api$ node createCSVScripts/media.js
File has been read!
File successfully written!
Size of new CSV: 403
```
Creates final Map by combining multiple imported Maps!
```
michaellgans@Victoria:~/atlas-the-joy-of-painting-api$ node createCSVScripts/episodes.js | head -12 | tail +5
Size of dictionary: 403
Map {
  '1' => {
    paintingTitle: 'A Walk in the Woods',
    season: '1',
    episoide: '1',
    month: 'January'
  },
```

## Regex - Parsing the Data

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
| Vertical Bar | `th(e\|is\|at)` | one of the options inside. |

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
<br>Note: The capitals can be negated to mean the lowercase.

| Name | Symbol | True | False |
| --- | --- | --- | --- |
| Whitespace | `/s` | `" " (space), "\t" (tab)` | `"a" or "1"` |
| Non-whitespace | `/S` | `"a" or "1"` | `" " (space), "\t" (tab)` |
| Numbers | `/d` | `"123"` | `"asd"` |
| Non-numbers | `/D` | `"asd"` | `"123"` |
| Alpha-numeric | `/W` | `"hello", "world123"` | `@#$%` |
| Non-alpha-numeric | `/w` | `@#$` | `"Hello" or "123"` |
| Word Boundary | `/b` | ` -,;` | `abc123` |

<strong> Custom Character Classes: This matches any character... </strong>

| Name | Symbol | True | False |
| --- | --- | --- | --- |
| Custom | `[abc]` | `"a", "b", or "c"` | `anything else` |
| Negated | `[^abc]` | `Do NOT include a, b, or c` | `"a", "b", or "c"` |
| Range | `[a-z]` | `Any lowercase` | `Anything not lowercase` |

#### Regex Notes

- To search for characters that are used in Regex pattners, they will need to be escaped. `\d+[\+-x\*]\d+` This pattern is looking for a digit repeated at least once, then a `+-x*`, and another digit repeated at least once.  Both `+` and `*` are escaped.

## PowerBI
The transformed CSVs are loaded into PowerBI as Data. <br><br>
![image](https://github.com/user-attachments/assets/a3a5a69f-fff8-4e55-9a84-c21c360fbead) <br><br>
Each CSV becomes a table and establishes a relationship. <br><br>
![image](https://github.com/user-attachments/assets/ddbaf439-94b5-4801-b5b8-179cfb57ea8f) <br><br>
Because of the relationships, an interactive dashboard can be developed and designed for user interaction! <br><br>
![image](https://github.com/user-attachments/assets/b7ee50fb-09e4-4bec-bafb-03f4a44e5495) <br><br>
Example of searching by Month: <br><br>
![image](https://github.com/user-attachments/assets/b31ce68f-b177-46c6-917c-8449411c45eb) <br><br>
Example of searching by Color: <br><br>
![image](https://github.com/user-attachments/assets/e07f6f21-3229-4fd1-8dd9-67b5c29c3ecd) <br><br>
Example of searching by Subject: <br><br>
![image](https://github.com/user-attachments/assets/ada4dba9-9ac7-4fae-b1cf-50c58b409966) <br><br>

## Transformation Consistency Checklist
- CSV headers will have the first letter capitalized only.
- Painting Titles will have the first letter capitalized only.

## Lessons Learned

- Dictionaries do not maintain their order, but a Map Dictionary does
- A dictionary will automatically overwrite a key that is not unique if you add that in.  In this case, a subsiquent painting had the same name and overwrote a previous dictionary entry.  This threw off the count from 403 to 401 in Data Validation.
- When setting the path to a file you're writing, it starts from the root of the directory.  It doesn't matter where the file is that you're writing from.
