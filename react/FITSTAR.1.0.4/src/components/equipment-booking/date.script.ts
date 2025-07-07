export const convertTime = (time: string) => {
    const endDate = new Date(time);
    
    return endDate.toLocaleTimeString('it-IT', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
};

export default convertTime;