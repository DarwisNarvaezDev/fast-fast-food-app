export const getCurrentDateAndTime = () => {
    const date = new Date();
    return date.toLocaleString('en-US', { hour12: true })
};