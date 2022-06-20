
function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function div(a,b){
    let d = a/b;
    d = d.toFixed(2);
    return d;
}
function mult(a,b){
    return a*b;
}

export default add;
export {sub,div,mult};