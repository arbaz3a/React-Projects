const localstoragekey = "todo";

export const Getlocalstorage = ()=>{
    const getDatatodo = localStorage.getItem(localstoragekey); //get data from brwoser local storage
    if(!getDatatodo) return []; //return if its empty data assign empty array []
    return JSON.parse(getDatatodo); //convert json string into object for use
}
export const Setlocalstorage = (todoslist)=>{
    localStorage.setItem(localstoragekey, JSON.stringify(todoslist)); //convert javascript strings into json format strings
}