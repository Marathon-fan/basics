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

[^ ]    Matches a single character that is not contained within the brackets. For example, [^abc] matches any character other than "a", "b", or "c". [^a-z] matches any single character that is not a lowercase letter from "a" to "z". Likewise, literal characters and ranges can be mixed.



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

^   Matches the starting position within the string. In line-based tools, it matches the starting position of any line.
$   Matches the ending position of the string or the position just before a string-ending newline. In line-based tools, it matches the ending position of any line.

```

greedy vs non-greedy
```js

Consider the input 101000000000100.

Using 
"1.*1", * is greedy - it will match all the way to the end, and then backtrack until it can match  1, leaving you with 1010000000001.

"1.*?1" is non-greedy. * will match nothing, but then will try to match extra characters until it matches  1, eventually matching 101.

All quantifiers have a non-greedy mode: .*?, .+?, .{2,6}?, and even .??.

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
    const DEFAULT_DOB_INT = 1918;
    if (applicant_dob == false || applicant_dob == undefined || applicant_dob.length === 0) {
        return DEFAULT_DOB_INT;
    }
    if (applicant_dob.match(/\d\d\d\d\D\d\d\D\d\d/) || applicant_dob.match(/\d\d\d\d\D\d\D\d/) || applicant_dob.match(/\d\d\d\d\D\d\D\d\d/) || applicant_dob.match(/\d\d\d\d\D\d\d\D\d/)) {
        return parseInt(applicant_dob.substring(0,4));
    }
    if (applicant_dob.match(/\d\d\D\d\d\D\d\d\d\d/) || applicant_dob.match(/\d\D\d\D\d\d\d\d/) || applicant_dob.match(/\d\D\d\d\D\d\d\d\d/) || applicant_dob.match(/\d\d\D\d\D\d\d\d\d/) ) {
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

### Detect HTML links  
          

```js
https://www.hackerrank.com/challenges/detect-html-links/problem

console.log('-----');

function processData(input) {
    var regex1=/<a.*?href="(.*?)".*?>(.*?)<\/a>/ig;  // use non-greedy mode
    var regex2=/<a.*href="(.*)".*>(.*)<\/a>/ig;      // greedy mode will give the wrong result

    var output1=[];
    //console.log(input.match(regex));
    console.log('///////////');
    input.replace(regex1, function(_, href, text) {
        console.log('_:', _);
        console.log('href:', href);
        console.log('text:', text);
        output1.push(href.trim()+','+text.replace(/<.*?>/g,'').trim())
    });
    console.log(output1.join('\n')); 
    console.log('///////////');

    var output2=[];
    input.replace(regex2, function(_, href, text) {
        //console.log('+++,',_);
        console.log('_:', _);
        console.log('href:', href);
        console.log('text:', text);
        output2.push(href.trim()+','+text.replace(/<.*?>/g,'').trim())
    });
    console.log(output2.join('\n'));   
} 

let inputProcessData='\
2\
<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm"><tag1>Example Link</tag1></a></p>\
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm"><tag2>More Link Examples...</tag2></a></div>\
';

console.log(processData(inputProcessData));




let inputProcessData2='\
13\
<div class="portal" role="navigation" id=\'p-navigation\'>\
<h3>Navigation</h3>\
<div class="body">\
<ul>\
 <li id="n-mainpage-description"><a href="/wiki/Main_Page" title="Visit the main page [z]" accesskey="z">Main page</a></li>\
 <li id="n-contents"><a href="/wiki/Portal:Contents" title="Guides to browsing Wikipedia">Contents</a></li>\
 <li id="n-featuredcontent"><a href="/wiki/Portal:Featured_content" title="Featured content  the best of Wikipedia">Featured content</a></li>\
<li id="n-currentevents"><a href="/wiki/Portal:Current_events" title="Find background information on current events">Current events</a></li>\
<li id="n-randompage"><a href="/wiki/Special:Random" title="Load a random article [x]" accesskey="x">Random article</a></li>\
<li id="n-sitesupport"><a href="//donate.wikimedia.org/wiki/Special:FundraiserRedirector?utm_source=donate&utm_medium=sidebar&utm_campaign=C13_en.wikipedia.org&uselang=en" title="Support us">Donate to Wikipedia</a></li>\
</ul>\
</div>\
</div>\
';

console.log(processData(inputProcessData2));```
```


///////////////////////////////////////////////////////

### Detect HTML Tags
          

```
https://www.hackerrank.com/challenges/detect-html-tags/problem


function processData(input) {
    const regex1 = /<\s*(\w+).*?>/ig;
    let tmpRes = new Set();
    input.replace(regex1, function(_, x) {
        tmpRes.add(x.trim());
    });
    let res = Array.from(tmpRes).sort().join(';');
    console.log(res);
} 



let input = '2\
<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>\
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>\
';


```

```

2
<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>

a;div;p


```

///////////////////////////////////////////////////////

### Find A Sub-Word
          


version1
```
https://www.hackerrank.com/challenges/find-substring/problem

function calOccurence(s, wordArray) {
    let res = 0;
    wordArray.forEach(word => {
        const index = word.indexOf(s);
        if (index != -1 && index != 0 && index != word.length - s.length) {
            res++;
        }    
    });
    return res;
}

function processData(input) {
    let newInput = input.split(/\n/g);
    const N = parseInt(newInput[0]);  // the number of lines
    let words = [];
    const regex = /[\w|\d]+/g;
    for (let i = 0; i < N; i++) {
        const tmpRes = newInput[1 + i].match(regex);
        tmpRes.forEach(word => {
            words.push(word);
        });
    }
    let Q = parseInt(newInput[1 + N]);  // the number the queries
    for (let i = 0; i < Q; i++) {
        const s = newInput[2 + N + i];
        console.log(calOccurence(s, words));
    }
} 
```




version2(better than version1)
```

function processData(input) {
    let newInput = input.split(/\n/g);
    const N = parseInt(newInput[0]);  // the number of lines
    let words = [];
    const regex = /[\w|\d]+/g;
    for (let i = 0; i < N; i++) {
        const tmpRes = newInput[1 + i].match(regex);
        tmpRes.forEach(word => {
            words.push(word);
        });
    }
    let Q = parseInt(newInput[1 + N]);  // the number the queries
    for (let i = 0; i < Q; i++) {
        const s = newInput[2 + N + i];
        const regex2 = new RegExp(`\\w+(${s})\\w+`,"g");
        let count = 0;
        words.forEach(
            word => {
                const tmpRes = word.match(regex2);
                if (tmpRes != null) {
                    count += tmpRes.length;
                }
            }
        );
        console.log(count);
    }
} 

```



///////////////////////////////////////////////////////

### alien-username             

```
https://www.hackerrank.com/challenges/alien-username/problem

console.log('////////////////////////////////');

function processDataForAlienUsername(input) {
    let newInput = input.split(/\n/g);
    const N = parseInt(newInput[0]);
    let regex = /^[_|\.][\d]+([a-zA-Z]*)_?$/; 
    for (let i = 0; i < N; i++) {
        if (newInput[1 + i].match(regex)) {
            console.log('VALID');
        } else {
            console.log('INVALID');
        }
    }

} 

const inputForAlienUsername = '3\n\
_0898989811abced_\n\
_abce\n\
_09090909abcD0';

processDataForAlienUsername(inputForAlienUsername);
```

///////////////////////////////////////////////////////

### ip-address-validation          

```js
https://www.hackerrank.com/challenges/ip-address-validation/problem

function processDataForIPAddressValidation(input) {
    let newInput = input.split(/\n/g);
    const N = parseInt(newInput[0]);
    let regexIpV4 = /^([\d]{1,3})\.([\d]{1,3})\.([\d]{1,3})\.([\d]{1,3})$/g;
    let regexIpV6 = /^([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4}):([\d|a-fA-F]{1,4})$/g;
    let words = newInput.slice(1);
    words.forEach( word => {
        word = word.trim();
        let ipV4Words = [];
        let ipV4Matches = word.replace(regexIpV4, function(_, w1, w2, w3, w4) {
            ipV4Words.push(w1);
            ipV4Words.push(w2);
            ipV4Words.push(w3);
            ipV4Words.push(w4);
        });
        //console.log(ipV4Words);
        if (ipV4Words != null && ipV4Words.length === 4) {
            let ipV4Flag = true;
            ipV4Words.forEach(
                    item => {
                    let intValue = parseInt(item);
                    ipV4Flag = (intValue >= 0 && intValue <=255) ? (ipV4Flag && true) : false;
                }
            );
            if (ipV4Flag) {
              console.log('IPv4');
              return; // return the word => func
            }
        }
        if (word.match(regexIpV6) != null) {
            console.log('IPv6');
            return; // return the word => func
        }
        console.log('Neither');
    });
} 
```

a better version
```
const Ipv4Pattern =/^((([0-1]?[0-9]?[0-9])|([2]?(([0-4]?[0-9])|(5?[0-5]))))\.){3}(([0-1]?[0-9]?[0-9])|([2]?(([0-4]?[0-9])|(5?[0-5]))))$/;
const Ipv6Pattern =/^((([a-f0-9])?){3}[a-f0-9]\:){7}((([a-f0-9])?){3}[a-f0-9])$/;

```

///////////////////////////////////////////////////////

### find-a-word          

```js
https://www.hackerrank.com/challenges/find-a-word/problem



function processDataForFindAWord(input) {
    const regex1 = /[\w|\d]+/g;
    let inArr = input.split(/\n/g);
    const N = parseInt(inArr[0]);
    let wArr = [];
    inArr.slice(1, 1 + N).forEach(line => {
        let tmp = line.match(regex1);
        wArr = wArr.concat(tmp);
    });
    const T = parseInt(inArr[1 + N]);
    for (let i = 0; i < T; i++) {
        let target = inArr[1 + N + 1 + i];
        let count = 0;
        wArr.forEach(word => {
            count += (word == target ? 1 : 0);
        });
        console.log(count);
        // let regex2 = new RegExp(`^${target}$`, 'g');
        // wArr.forEach(word => {
        //     console.log(word.match(regex2));
        // })
    }
} 

```
///////////////////////////////////////////////////////

### detect-the-email-addresses            

```
https://www.hackerrank.com/challenges/detect-the-email-addresses/problem

function processData(input) {
    let inArr = input.split(/\n/g);
    const N = parseInt(inArr[0]);
    const regex = new RegExp(`\\w+@\\w+\\.\\w+`, 'g'); // if we use RegExp, we don't need the slash '/' for the start and end of regex
                                                       // also, slash should escape
    //const regex =  /\w+@\w+\.\w+/g;

    let res = new Set();
    inArr.slice(1, 1 + N).forEach(line => {
        let tmp = line.match(regex);
        //console.log('line:', line, ' tmp:', tmp);
        if (tmp != null) {
            tmp.forEach(item => {
                res.add(item);
            });
        }
    });
    console.log(Array.from(res).sort().join(';'));
} 
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



