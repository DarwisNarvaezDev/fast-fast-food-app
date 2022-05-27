export const callSessionObject = () => {
    const sessionObject = sessionStorage.getItem('sessionTransactionalObject');
    const string = JSON.stringify(sessionObject);
    const json = JSON.parse(string);

    return json;
};