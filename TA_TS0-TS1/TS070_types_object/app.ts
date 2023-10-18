let friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

console.log(friend);

{
    let friendKey:keyof {fam:string,im:string,otch:string,age:number};
    friendKey="fam";
    // friendKey="fam2"; // ошибка
}

{
    let friendKey:keyof typeof friend;
    friendKey="fam";
    // friendKey="fam2"; // ошибка
}
