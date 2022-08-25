let date = new Date();     
export const messageDate  = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear();
export const chatDate =  new Date().toString().slice(0, 3) + ' ' + new Date().getDate() + "," + new Date().getFullYear();

