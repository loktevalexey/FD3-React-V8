let friend:{fam:string,im:string,otch:string,age:number}
    ={fam:"Иванов",im:"Иван",otch:"Иванович",age:25};

console.log(friend);

friend.fam="Петров";
// friend.fam2="Сидоров"; // ошибка

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

// а если мы хотим старый добрый объект с произвольными парами ключ-значение:

let father:Record<string,any>={}; // т.е. ключом будет строка, значением - что угодно
father.fio="Сидоров Сидор Сидорович";
