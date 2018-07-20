# javascript


## topics  




### [] vs ()   
```
[a-z0-9] will match any lowercase letter or number. (a-z0-9) will match the exact string "a-z0-9" and allows two additional things: You can apply modifiers like * and ? and + to the whole group, and you can reference this match after the match with $1 or \1. 
```


[] denotes a character class. () denotes a capturing group.

[a-z0-9] -- One character that is in the range of a-z OR 0-9

(a-z0-9) -- Explicit capture of a-z0-9. No ranges.

a -- Can be captured by [a-z0-9].

a-z0-9 -- Can be captured by (a-z0-9) and then can be referenced in a replacement and/or later in the expression.


```
?   The question mark indicates zero or one occurrences of the preceding element. 
    For example, colou?r matches both "color" and "colour".
*   The asterisk indicates zero or more occurrences of the preceding element. 
    For example, ab*c matches "ac", "abc", "abbc", "abbbc", and so on.
+   The plus sign indicates one or more occurrences of the preceding element. 
    For example, ab+c matches "abc", "abbc", "abbbc", and so on, but not "ac".

.   Matches any single character (many applications exclude newlines, and exactly which characters are considered newlines is flavor-, character-encoding-, and  
    platform-specific, but it is safe to assume that the line feed character is included). Within POSIX bracket expressions, the dot character matches a literal dot. 
    For example, a.c matches "abc", etc., but [a.c] matches only "a", ".", or "c".

\w  Word character(Alphanumeric characters plus "_")    
\W  Non-word characters 

\d  Digits
\D  Non-digits

\s   Whitespace character([ \t\r\n\v\f])   
\S  Non-whitespace characters([^ \t\r\n\v\f])

\l  Lowercase letters
\u  Uppercase letters    

\b assert position at a word boundary  
```

### 1a



```js
(productIds.match(/\((('')?(,?))+\)/g))
```

```js
function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  if (m === null) {
    return 0;
  }
  return m.length;
}
//This just matches against the regex (g makes it search the whole string, i makes it case-insensitive) and returns the number of matches. We check for null incase there are no matches (ie no vowels), and return 0 in that case.
```


```js
(productIds.match(/\((('')?(,?))+\)/g))
```

### 1b


// https://www.hackerrank.com/challenges/js10-regexp-1/problem

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
     */
    const re = /^([aeiou]).*\1$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}


```
.* will match 0 or more of any character.
\1 is a reference to the first capture group (denoted by parentheses). 
```



### 2   


// https://www.hackerrank.com/challenges/js10-regexp-2/problem


function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match a string that starts with 'Mr.', 'Mrs.', 'Ms.', 'Dr.', or 'Er.', 
     * followed by one or more letters.
     */
    const re = /^(Mr|Mrs|Ms|Dr|Er)\.[a-z|A-Z]+$/
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const re =regexVar();
console.log(re.test('Mr.J'));

### 3      


// https://www.hackerrank.com/challenges/js10-regexp-3/problem

function regexVar() {
    /*
     * Declare a RegExp object variable named 're'
     * It must match ALL occurrences of numbers in a string.
     */
     const re = /\d+/g

     // g stands for group?
     // why here we don't need ^ and $ anymore
    
    
    /*
     * Do not remove the return statement
     */
    return re;
}

const tmp = "102, 1948948 and 1.3 and 4.5";
const re = regexVar();
console.log(tmp.match(re));

const tmpAgain = "666.888xxx 34.342 234";
console.log(tmpAgain.match(re));

### parse user dob to int

```
// suppose the main dob has the following three formats(the first two are valid, the third is invalid).
// also,  dob can also has other invalid characters since users may mistakenly input their dobs
//1 1999-12-12
//2 20/08/1991
//3 NULL
// then use the following func to parse user dob to int

const getUserDOBAsInt = (applicant_dob) => {
    if (applicant_dob != null && applicant_dob != false && applicant_dob != undefined) {
      console.log(applicant_dob);
      console.log('applicant_dob.substring(0,4).match(/\d/g)', applicant_dob.substring(0,4).match(/\d/g));
      console.log('applicant_dob.substring(0,4).match(/\d+/g)', applicant_dob.substring(0,4).match(/\d+/g));
      console.log('applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length).match(/\d/g)', applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length).match(/\d/g));
    }
    if (applicant_dob == false || applicant_dob == undefined || applicant_dob.length === 0) {
        return 1918;
    }
    let str1 = applicant_dob.substring(0,4).match(/\d/g);
    if (str1 != null && str1.length === 4) {
        return parseInt(applicant_dob.substring(0,4));
    }
    let str2 = applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length).match(/\d/g);
    if (str2 != null && str2.length === 4) {
        return parseInt(applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length));
    }
    return 1918;
}

const getUserDOBAsIntV2 = (applicant_dob) => { // version 2 is better than version1


    let DEFAULT_DOB_INT = 1918;
    if (applicant_dob == false || applicant_dob == undefined || applicant_dob.length === 0) {
        return DEFAULT_DOB_INT;
    }
    if (applicant_dob.match(/\d\d\d\d\D\d\d\D\d\d/)) {
      return parseInt(applicant_dob.substring(0,4));
    }
    if (applicant_dob.match(/\d\d\D\d\d\D\d\d\d\d/)) {
      return parseInt(applicant_dob.substring(applicant_dob.length - 4, applicant_dob.length));
    }
    return DEFAULT_DOB_INT;
}
```


### _   

```
What does the underscore mean in the following regex?

[a-zA-Z0-9_]

It means to match the underscore character in addition to lowercase letters, uppercase letters, and numbers.

```

The underscore means an underscore.




### \$  
\$ just escapes the $ character so it will match $ literally


### start and end    


```

https://www.hackerrank.com/challenges/matching-anything-but-new-line/problem


var Regex_Pattern = /^...\....\....\....$/; 

or

var Regex_Pattern = /^...\....\....\....$/g; 

```

### Matching Digits & Non-Digit Characters   

```
https://www.hackerrank.com/challenges/matching-digits-non-digit-character/problem

var Regex_Pattern = /\d\d\D\d\d\D\d\d\d\d/;      // "06-11-2015" 

```

### Matching Whitespace & Non-Whitespace Character   


```

https://www.hackerrank.com/challenges/matching-whitespace-non-whitespace-character/problem

var Regex_Pattern = /\S\S\s\S\S\s\S\S/;          //   "12 11 15"

```

### Matching Word & Non-Word Character      

 
```
https://www.hackerrank.com/challenges/matching-word-non-word/problem

var Regex_Pattern = /\w\w\w\W\w\w\w\w\w\w\w\w\w\w\W\w\w\w/;    // "www.hackerrank.com"

```


### Matching Start & End          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```


### Matching Specific Characters   
          

```
https://www.hackerrank.com/challenges/matching-specific-characters/problem

var Regex_Pattern = /[1-3][012][xs0][03aA][xsu][\.,]/;  // 1203x.

 
```



### Matching {x, y} Repetitions
          

```
https://www.hackerrank.com/challenges/matching-x-y-repetitions/problem

var Regex_Pattern = /^\d{1,2}[a-zA-Z]{3,}\.{0-3}$/; //3threeormorealphabets.

```



### Matching Word Boundaries            

```
https://www.hackerrank.com/challenges/matching-word-boundaries/problem

var Regex_Pattern = /\b[aeiouAEIOU][a-zA-Z]*\b/; // see example Matching Word Boundaries

```

### Excluding Specific Characters   
          
```
https://www.hackerrank.com/challenges/excluding-specific-characters/problem

var Regex_Pattern = /^[^\d][^aeiou][^bcDF][^\s][^AEIOU][^.,]$/; // think?


```

### Matching Character Ranges        

```
https://www.hackerrank.com/challenges/matching-range-of-characters/problem

var Regex_Pattern = /^[a-z][1-9][^z-z][^A-Z][A-Z]/; //h4CkR

```



### Capturing & Non-Capturing Groups   
          

```
https://www.hackerrank.com/challenges/capturing-non-capturing-groups/problem

var Regex_Pattern = /((ok){3,})/; //  okokok! cya

```
///////////////////////////////////////////////////////



### Matching start and end
          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```



///////////////////////////////////////////////////////

### Matching Same Text Again & Again             

```
https://www.hackerrank.com/challenges/matching-same-text-again-again/problem

// both answers are OK   

var Regex_Pattern = /^(([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S))\1$/; 

var Regex_Pattern = /^([a-z])(\w)(\s)(\W)(\d)(\D)([A-Z])([a-zA-Z])([aeiouAEIOU])(\S)\1\2\3\4\5\6\7\8\9\10$/; 

// ab #1?AZa$ab #1?AZa$
```



///////////////////////////////////////////////////////

### Positive Lookahead
        

```
https://www.hackerrank.com/challenges/positive-lookahead/problem

var Regex_Pattern = /o(?=oo)/g; //Do not delete `/` and `/g`.

// gooooo!

```



///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```



///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```

///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```

///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```

///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```

///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```

///////////////////////////////////////////////////////

### xxx          

```
https://www.hackerrank.com/challenges/matching-start-end/problem

var Regex_Pattern = /^\d\w\w\w\w\.$/;        //"0qwer."
```


///////////////////////////////////////////////////////



Detect HTML links
MediumMax Score: 10Success Rate: 65.77%
Use Regular Expressions to detect links in a given HTML fragment.


Detect HTML Tags
EasyMax Score: 10Success Rate: 91.31%


Find A Sub-Word
EasyMax Score: 10Success Rate: 88.46%


Alien Username
EasyMax Score: 10Success Rate: 92.58%


IP Address Validation
EasyMax Score: 10Success Rate: 91.22%


Find a Word
MediumMax Score: 15Success Rate: 81.94%


Detect the Email Addresses
MediumMax Score: 15Success Rate: 84.28%


Detect the Domain Name
MediumMax Score: 15Success Rate: 83.54%


Building a Smart IDE: Identifying comments
MediumMax Score: 20Success Rate: 82.06%


Detecting Valid Latitude and Longitude Pairs
EasyMax Score: 20Success Rate: 95.48%


HackerRank Tweets
EasyMax Score: 15Success Rate: 96.03%


Build a Stack Exchange Scraper
EasyMax Score: 15Success Rate: 92.71%


Utopian Identification Number
EasyMax Score: 15Success Rate: 95.18%


Valid PAN format
EasyMax Score: 15Success Rate: 96.97%


Find HackerRank
EasyMax Score: 15Success Rate: 97.09%


Saying Hi
EasyMax Score: 15Success Rate: 94.81%


HackerRank Language
EasyMax Score: 15Success Rate: 91.47%

Building a Smart IDE: Programming Language Detection
MediumMax Score: 30Success Rate: 71.53%


Split the Phone Numbers
EasyMax Score: 15Success Rate: 97.40%


Detect HTML Attributes
EasyMax Score: 20Success Rate: 92.00%


The British and American Style of Spelling
EasyMax Score: 15Success Rate: 92.47%


UK and US: Part 2
EasyMax Score: 10Success Rate: 87.47%



