import {
  SESSION_TRANSACTIONAL_OBJECT,
  SESSION_TRANSACTIONAL_SKELETON,
} from "../helpers/Constants";

export const checkSessionObject = () => {
  const sessionObject = sessionStorage.getItem("sessionTransactionalObject");
  if (sessionObject) {
    const sessionObj = JSON.parse(sessionObject);
    if (sessionObj.length > 0) {
      return true;
    } else {
      return false;
    }
  }
};
export const callSessionObject = () => {
  const sessionObject = sessionStorage.getItem("sessionTransactionalObject");
  const string = JSON.stringify(sessionObject);
  const json = JSON.parse(string);
  return json;
};
export const createSessionObject = () => {
  sessionStorage.setItem(
    SESSION_TRANSACTIONAL_OBJECT,
    JSON.stringify(SESSION_TRANSACTIONAL_SKELETON)
  );
};
