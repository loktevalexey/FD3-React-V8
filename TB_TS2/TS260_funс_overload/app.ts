
function add(s1:string,s2:string):string;
function add(n1:number,n2:number):number;
function add(v1:any,v2:any):any {
    return v1+v2;
}

console.log( add(5,7) ); // 12
console.log( add("a","b") ); // "ab"
// console.log( add(5,"b") ); // ошибка - нет подходящего варианта перегрузки
