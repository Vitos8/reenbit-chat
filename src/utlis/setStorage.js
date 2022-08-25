export function setSession(obj, key) {
     sessionStorage.setItem(key, JSON.stringify(obj));
     return true;
}
