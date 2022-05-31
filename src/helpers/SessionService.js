import {SESSION_TRANSACTIONAL_OBJECT, SESSION_TRANSACTIONAL_SKELETON} from '../helpers/Constants'

export const checkSessionObject = () => {
  const sessionObject = sessionStorage.getItem("sessionTransactionalObject");
  if( sessionObject ){
    const { burgers, salads, drinks } = JSON.parse(sessionObject);
    if( burgers.length > 0 || salads.length > 0 || drinks.length > 0  ){
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
export const sessionObjectToArray = () => {
  const sessionObject = sessionStorage.getItem("sessionTransactionalObject");
  const json = JSON.parse(sessionObject);
  const { burgers, salads, drinks } = json;
  let arrayOfOrders = [];
  arrayOfOrders.push(burgers);
  arrayOfOrders.push(salads);
  arrayOfOrders.push(drinks);
  return arraysAsListsWithId(arrayOfOrders);
};
const arraysAsListsWithId = (arrayOfLists) => {
  let arrayOfElements = [];
  let extraString = '';
  arrayOfLists.forEach( element => {
    element.forEach( listPosition => {
      listPosition.menuExtras.forEach( extra => {
        extraString = extraString.concat(extra, ", ");
      });
      let extraStringWoSpaceInTheEnd = extraString.slice(0, extraString.lastIndexOf(" ") - 1);
      listPosition.menuExtras = extraStringWoSpaceInTheEnd;
      arrayOfElements.push(listPosition);
    })
  });
  return arrayOfElements;
};
