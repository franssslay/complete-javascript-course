'use strict';

const getDate = function (year) {
    return `year is ${year} and time is ${Date.now()}`;
}

const thisYear = (year, date) => {
    console.log("123123");
    console.log(`${year} year ${date}`);
    return year + date;
};

console.log(thisYear(2020, 1991));