

//import _ from 'lodash';

var _ = require('lodash');


var object = {
  'a': [{ 'b': 2 }, { 'd': 4 }]
};
 
var other1 = {
  'a': [{ 'c': 3 }, { 'e': 5 }]
};
 
var other2 = {
  'a': [{ 'm': 8 }, { 'n': 9 }, {'l': 1}]
};
 



const res = _.merge(object, other1, other2);

console.log(res);

let users = {user1:'lily', user2:'Jim'};
let usersExpend = {users};
usersExpend.passwd = ['pass1', 'pass2'];
usersExpend.DOB= ['1999', '1998'];

console.log(usersExpend);


////////////////merge example
var _ = require('lodash');

beforeMerge = {};
afterMerge = _.merge(beforeMerge, {key1:'value1'});
console.log('afterMerge 1:', afterMerge);
afterMerge = _.merge(beforeMerge, {key2:'value2'});
console.log('afterMerge 2:', afterMerge);

////////////////stringify and parse example

let employee = {name:"Lily", DOB:"1999"};
console.log('employee:',employee);
let stringifiedEmployee = JSON.stringify(employee);
console.log('stringifiedEmployee:',stringifiedEmployee);
let backFromStringifiedEmployee = JSON.parse(stringifiedEmployee);
console.log('backFromStringifiedEmployee:',backFromStringifiedEmployee);

//////////////test regular expression

const constructCollection = (collectionObject) => {
    let ret = '';
    for(let item of collectionObject) {
        if(!item) break;
        ret += ",'" + item + "'";
    }
    ret = '(' + ret.substring(1) + ')';
    return ret;
}

let input2 = [2,3,4];
let res2 = constructCollection(input2);
console.log('res2',res2);

let input3 = [];
let res3 = constructCollection(input3);
console.log('res3',res3);



console.log(res2.match(/\((('')?(,?))+\)/g));
console.log(res3.match(/\((('')?(,?))+\)/g));

let input4 = '()';
let input5 = '(,)';
let input6 = '(,,)';
let input7 = '(\'\')';
let input8 = '(\'\'\'\')';
let input9 = '(\'\',)';
let input10 = '(\'\',\'\',)';
console.log('input4 res:',input4.match(/\((('')?(,?))+\)/g));
console.log('input5 res:',input5,input5.match(/\((('')?(,?))+\)/g));
console.log('input6 res:',input6.match(/\((('')?(,?))+\)/g));
console.log('input7 res:',input7.match(/\((('')?(,?))+\)/g));
console.log('input8 res:',input8.match(/\((('')?(,?))+\)/g));
console.log('input9 res:',input9.match(/\((('')?(,?))+\)/g));
console.log('input10 res:',input10.match(/\((('')?(,?))+\)/g));

console.log('[ \'()\' ]' ? true : false);


//////////////test regular expression

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

const getUserDOBAsIntV2 = (applicant_dob) => {

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

const dob1 = '1999-12-12';
const dob2 = '20/08/1991';
const dob3 = '';
const dob4 = 'abc';
const dob5 = null;

console.log(getUserDOBAsInt(dob1));
console.log(getUserDOBAsInt(dob2));
console.log(getUserDOBAsInt(dob3));
console.log(getUserDOBAsInt(dob4));
console.log(getUserDOBAsInt(dob5));

console.log('-----');

console.log(getUserDOBAsIntV2(dob1));
console.log(getUserDOBAsIntV2(dob2));
console.log(getUserDOBAsIntV2(dob3));
console.log(getUserDOBAsIntV2(dob4));
console.log(getUserDOBAsIntV2(dob5));


/////////////////////////////////////////////////////test regular expression

let testGreedyInput = '101000000000100';

let regexGreedy = /1.*1/;
let regexNonGreedy = /1.*?1/;

console.log(testGreedyInput.match(regexGreedy));
console.log(testGreedyInput.match(regexNonGreedy));

/////////////////////////////////////////////////////test regular expression
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

console.log(processData(inputProcessData2));
////////////////////


var strForReplace = "Mr Blue has a blue house and a blue car";
var resForReplace = strForReplace.replace(/blue|house|car/gi, function (x) {
    return x.toUpperCase();
});
console.log(resForReplace);

///////////////////
console.log('////////////////////////////////');

function processData2(input) {
    //Enter your code here
    const regex1 = /<\s*(\w+).*?>/ig;
    let tmpRes = new Set();
    input.replace(regex1, function(_, x) {
        console.log(x);
        tmpRes.add(x.trim());
    });
    // remove duplicate
    let res = Array.from(tmpRes).sort().join(';');
    console.log(res);
} 

let inputProcessData2a = '2\n\
<p><a href="http://www.quackit.com/html/tutorial/html_links.cfm">Example Link</a></p>\n\
<div class="more-info"><a href="http://www.quackit.com/html/examples/html_links_examples.cfm">More Link Examples...</a></div>';


console.log(processData2(inputProcessData2a));
///////////////////

let set = new Set();
set.add('s');
set.add(['a',['a','b']]);
console.log(set);

/////////////////

console.log('////////////////////////////////');

function processDataFindASubWord(input) {
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
        const regex2 = new RegExp(`\\w+(${s})\\w+`, 'g');
        let count = 0;
        words.forEach(
            word => {
                const tmpRes = word.match(regex2);
                if (tmpRes != null) {
                    count += tmpRes.length;
                }
            }
        );
        console.log(s, ':', count);
    }
} 

const inputForFindASubWord = '1\n\
existing pessimist optimist this is\n\
4\n\
is\n\
im\n\
ssi\n\
this';

processDataFindASubWord(inputForFindASubWord);


/////////////////https://www.hackerrank.com/challenges/alien-username/problem

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


/////////////////https://www.hackerrank.com/challenges/ip-address-validation/forum

console.log('////////////////////////////////');

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

const inputForIPAddressValidation = '10\n\
This line has junk text.  \n\
121.18.19.20  \n\
2001:0db8:0000:0000:0000:ff00:0042:8329\n\
1050:1000:1000:a000:5:600:300c:326b\n\
1050:1000:2000:ab00:5:600:300c:326a\n\
1050:1000:3000:abc0:5:600:300c:326c\n\
1051:1000:4000:abcd:5:600:300c:326b\n\
22.231.113.64\n\
22.231.113.164\n\
222.231.113.64';
processDataForIPAddressValidation(inputForIPAddressValidation);

//a better version
const Ipv4Pattern =/^((([0-1]?[0-9]?[0-9])|([2]?(([0-4]?[0-9])|(5?[0-5]))))\.){3}(([0-1]?[0-9]?[0-9])|([2]?(([0-4]?[0-9])|(5?[0-5]))))$/;
const Ipv6Pattern =/^((([a-f0-9])?){3}[a-f0-9]\:){7}((([a-f0-9])?){3}[a-f0-9])$/;

/////////////////https://www.hackerrank.com/challenges/find-a-word/problem

console.log('////////////////////////////////');

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

const inputForFindAWord = '1\n\
foo bar (foo) bar foo-bar foo_bar foo\'bar bar-foo bar, foo.\n\
1\n\
foo';

processDataForFindAWord(inputForFindAWord);


/////////////////https://www.hackerrank.com/challenges/detect-the-email-addresses/problem

console.log('////////////////////////////////');

function processDataForDetectEmailAddresses(input) {
    let inArr = input.split(/\n/g);
    const N = parseInt(inArr[0]);
    const regex = new RegExp(`\\w+@\\w+\\.\\w+`, 'g'); // if we use RegExp, we don't need the slash '/' for the start and end of regex
                                                       // also, slash should escape
    //const regex =  /\b\w+@\w+\.\w+\b/g;

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

const inputForDetectEmailAddresses = '19\n\
HackerRank is more than just a company\n\
    We are a tight group of hackers, bootstrappers, entrepreneurial thinkers and innovators. We are building an engaged community of problem solvers. Imagine the intelligence and value that a room would hold if it contained hackers/problem solvers from around the world? We\'re building this online.\n\
Hypothesis: Every hacker loves a particular type of challenge presented in a certain set of difficulty. If we build a large collection of real world challenges in different domains with an engaging interface, it is going to be incredible! Join us to create history.\n\
Available Positions\n\
Product Hacker product@hackerrank.com\n\
Challenge Curator\n\
Product Evangelist\n\
Product Designer\n\
Content Creator\n\
ACM World Finals Hacker\n\
Backend C++ Hacker\n\
Mail us at hackers@hackerrank.com to chat more. Or you can write to us at interviewstreet@hackerrank.com!\n\
HACKERRANK PERKS\n\
Working for a startup is hard work, but there are plenty of benefits of working for a small, fun, growing team.\n\
[Image] Perk: Get tools for the jobAll the Right ToolsWe know that everyone\'s perfect workspace is unique to them. We will get you set up with whatever equipment you need to start hacking - a new 15” Macbook Pro or iMac, or a computer of your choice plus a display if you need it. Additionally, if you require any software or other tools, we\'ve got it covered.[Image] Perk: Flexible HoursFlexible HoursBecause we work so hard, we encourage our employees to keep flexible hours and don\'t require them to track their time. A morning scrum and open communication ensures that the job gets done on time, and we rely on the honor system so that you can work on your own pace.[Image] Perk: HealthcareWellness SupportTo work hard, you have to be healthy. We will cover your health, dental, and visual insurance with no wait period. That means instant benefits from the day you\'re hired.[Image] Perk: Choice of LocationLocation, Location, LocationWe are the first Indian company to be backed by Y-Combinator, and as a result we have a thriving office in Bangalore and a growing office in Mountain View, CA. Depending on your residency or visa status, we will get you situated in one of our two offices, both of which are located in the heart of their country\'s tech industry.[Image] Perk: Choice of LocationCreative SupportIf you have a cool side project that you want to launch, we will pay for EC2/heroku servers to get it off the ground. Side projects fuel creativity and learning, which are crucial to the HackerRank culture.\n\
CULTURE\n\
The culture of a startup is reflective of the founders\’ DNA. Larry Page & Sergey Brin were PhD’s from Stanford and that’s why Google is filled with high scoring graders from top schools and is very hard to get in if you’re not a CS major. Similarly, the hacker culture at Facebook is inspired by Zuckerberg, a hacker, the design culture by Steve Jobs and so on.\n\
The adjective to describe the environment/founders here is relentless hardworkers. It might be a general trait of a startup but I’m pretty sure it’s a notch higher here and defines the culture. This is what has taken us this far. It’s not working in weekends or allnighters that count, but the effort that goes into building something intellectually engaging for hackers and making it fun is high.\n\
You’ll have to embrace randomness and chaos. There’s some level of discipline (eg: daily scrums) but only so much. We push boundaries everyday, stretch our limits but no one complains because there’s a feeling of doing something great at the end of the day, every single day.';


processDataForDetectEmailAddresses(inputForDetectEmailAddresses);


/////////////////https://www.hackerrank.com/challenges/detect-the-domain-name/problem

///////////???????


console.log('////////////////////////////////');

function processDataForDetectDomainName(input) {
    let inArr = input.split(/\n/g);
    const N = parseInt(inArr[0]);
    const regex = new RegExp(`(http|https):\/\/((www|ww2)\.)?(([a-zA-Z0-9]+\.)+([a-zA-Z\-])+)`, 'g');
    let set = new Set();
    inArr.slice(1, 1 + N).forEach( line => {
        line = line.trim();
        line.replace(regex, function(_, p1, p2, p3, p4, p5) {
            // console.log(_);
            // console.log(p1);
            // console.log(p2);
            // console.log(p3);
            // console.log(p4);
            set.add(p4);
        });
    });
    console.log(Array.from(set).sort().join(';'));
} 

     //   Pattern pa = Pattern.compile("http[s]?:\\/\\/(ww[w2]\\.)?(([a-zA-Z0-9\\-]+\\.)+([a-zA-Z\\-])+)");



const inputForDetectDomainName = '10\n\
<div class="reflist" style="list-style-type: decimal;">\n\
<ol class="references">\n\
<li id="cite_note-1"><span class="mw-cite-backlink"><b>^ ["Train (noun)"](http://www.askoxford.com/concise_oed/train?view=uk). <i>(definition – Compact OED)</i>. Oxford University Press<span class="reference-accessdate">. Retrieved 2008-03-18</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Train+%28noun%29&rft.genre=article&rft_id=http%3A%2F%2Fwww.askoxford.com%2Fconcise_oed%2Ftrain%3Fview%3Duk&rft.jtitle=%28definition+%E2%80%93+Compact+OED%29&rft.pub=Oxford+University+Press&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>\n\
<li id="cite_note-2"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Atchison, Topeka and Santa Fe Railway (1948). <i>Rules: Operating Department</i>. p. 7.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.aulast=Atchison%2C+Topeka+and+Santa+Fe+Railway&rft.btitle=Rules%3A+Operating+Department&rft.date=1948&rft.genre=book&rft.pages=7&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>\n\
<li id="cite_note-3"><span class="mw-cite-backlink"><b>^ [Hydrogen trains](http://www.hydrogencarsnow.com/blog2/index.php/hydrogen-vehicles/i-hear-the-hydrogen-train-a-comin-its-rolling-round-the-bend/)</span></li>\n\
<li id="cite_note-4"><span class="mw-cite-backlink"><b>^ [Vehicle Projects Inc. Fuel cell locomotive](http://www.bnsf.com/media/news/articles/2008/01/2008-01-09a.html)</span></li>\n\
<li id="cite_note-5"><span class="mw-cite-backlink"><b>^</b></span> <span class="reference-text"><span class="citation book">Central Japan Railway (2006). <i>Central Japan Railway Data Book 2006</i>. p. 16.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.au=Central+Japan+Railway&rft.aulast=Central+Japan+Railway&rft.btitle=Central+Japan+Railway+Data+Book+2006&rft.date=2006&rft.genre=book&rft.pages=16&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Abook" class="Z3988"><span style="display:none;"> </span></span></span></li>\n\
<li id="cite_note-6"><span class="mw-cite-backlink"><b>^ ["Overview Of the existing Mumbai Suburban Railway"](http://web.archive.org/web/20080620033027/http://www.mrvc.indianrail.gov.in/overview.htm). _Official webpage of Mumbai Railway Vikas Corporation_. Archived from [the original](http://www.mrvc.indianrail.gov.in/overview.htm) on 2008-06-20<span class="reference-accessdate">. Retrieved 2008-12-11</span>.</span><span title="ctx_ver=Z39.88-2004&rfr_id=info%3Asid%2Fen.wikipedia.org%3ATrain&rft.atitle=Overview+Of+the+existing+Mumbai+Suburban+Railway&rft.genre=article&rft_id=http%3A%2F%2Fwww.mrvc.indianrail.gov.in%2Foverview.htm&rft.jtitle=Official+webpage+of+Mumbai+Railway+Vikas+Corporation&rft_val_fmt=info%3Aofi%2Ffmt%3Akev%3Amtx%3Ajournal" class="Z3988"><span style="display:none;"> </span></span></span></li>\n\
</ol>\n\
</div>';

processDataForDetectDomainName(inputForDetectDomainName);
// datastore05.rediff.com;hosting.rediff.com
// datastore05.rediff.com;dealhojaye.rediff.com;hosting.rediff.com


/////////////////https://www.hackerrank.com/challenges/detect-the-domain-name/problem
