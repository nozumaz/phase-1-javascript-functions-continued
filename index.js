// code your solution here
function saturdayFun(activity) {
    if (activity) return `This Saturday, I want to ${activity}!`;
    return 'This Saturday, I want to roller-skate!';
}

function mondayWork(activity) {
    if (activity) return `This Monday, I will ${activity}.`;
    return 'This Monday, I will go to the office.';
}

function wrapAdjective(flair = "*"){
    const innerFunction = function (adj) {
        return `You are ${flair}${adj}${flair}!`
    }
    return innerFunction;
}