
type StringList=Array<string>;

let sl1:StringList=["a","b","c"];
let sl2:StringList=sl1;


type Man={fam:string,im:string,otch:string,age:number};

let friend:Man
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

let friendKey:keyof Man;
friendKey="fam";
//friendKey="fam2"; // ошибка
