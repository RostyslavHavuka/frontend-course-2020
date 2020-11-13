/* eslint-disable no-use-before-define */
// eslint-disable-next-line no-unused-vars
export function getFridays(date) {
    const friday = [];
    const monthData = daysOfMonth(date);
    // eslint-disable-next-line no-undef
    for (let i = 1; i <= monthData; i++) {
        // eslint-disable-next-line no-undef
        const dateFridays = new Date(date.getFullYear(), date.getMonth(), i);
        if (dateFridays.getDay() === 5) {
            friday.push(dateFridays.getDate());
        }
    }
    return friday;
}

function daysOfMonth(date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}

// eslint-disable-next-line no-unused-vars
export function longMonth(date) {
    // eslint-disable-next-line no-undef
    return daysOfMonth(date) === 31;
}

// eslint-disable-next-line no-unused-vars
export function shortestWeek(date) {
    // eslint-disable-next-line no-undef
    const weekDaysNumber = daysOfMonth(date);
    let weekDays = 0;
    let daysNumber = 7;
    for (let i = 1; i <= weekDaysNumber; i++) {
        // eslint-disable-next-line no-undef
        const dateFridays = new Date(date.getFullYear(), date.getMonth(), i);
        // eslint-disable-next-line no-cond-assign
        if (dateFridays.getDay() === 1 ? daysNumber > weekDays : daysNumber = weekDays) {
            weekDays = 0;
        }
        weekDays++;
    }
    return daysNumber;
}

export function fullWeeks(date) {
    let fullWeeksInMonth = 0;
    // eslint-disable-next-line no-shadow
    const daysOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();

    for (let i = 1; i <= daysOfMonth; i++) {
        const newData = new Date(date.getFullYear(), date.getMonth(), i);
        if (newData.getDay() === 1) {
            newData.setDate(newData.getDate() + 6);
            if (newData.getMonth() === date.getMonth()) {
                fullWeeksInMonth++;
            }
        }
    }
    return fullWeeksInMonth;
}
