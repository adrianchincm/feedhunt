export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
}

export function timeSince(date) {
    const dateNum = date.getDate();
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });

    var seconds = Math.floor((new Date() - date) / 1000);
  
    var interval = seconds / 31536000;
  
    if (interval > 1) {
        return `${dateNum} ${month} ${year}`
    }
    interval = seconds / 2592000;
    if (interval > 1) {
        return `${dateNum} ${month}`
    }
    interval = seconds / 86400;
    if (interval > 1) {
        return `${dateNum} ${month}`
    }

    interval = seconds / 3600;
    if (interval > 1) {
        return `${Math.floor(interval)}h`
    }
    interval = seconds / 60;
    if (interval > 1) {
        return `${Math.floor(interval)}m`
    }
    return Math.floor(seconds) + "s";
}

export function monthYearDate(date) {    
    const month = date.toLocaleDateString("en-US", { month: "short" });
    const year = date.toLocaleDateString("en-US", { year: "numeric" });

    return `${month} ${year}`
}
