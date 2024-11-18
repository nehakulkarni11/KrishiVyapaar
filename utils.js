export function getHumanReadableDate(
    date,
    { showTime = true, utc = false } = {}
) {
    if (!date) return "";
    let d = typeof date.toDate === "function" ? date.toDate() : new Date(date);
    if (utc) {
        d = new Date(
            Date.UTC(d.getFullYear(), d.getMonth(), d.getDate(), d.getHours())
        );
    }

    let options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    if (showTime) {
        options = {
            ...options,
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: true,
        };
    }
    const dateTimeString = d.toLocaleString(false, options);
    return dateTimeString;
}
