

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

// let testStr1 = 'abc';
// let testStr2 = '153';
// console.log('testStr1.match(/\d/g)', testStr1.match(/\d/g));
// console.log('testStr2.match(/\d/g)', testStr2.match(/\d/g));
