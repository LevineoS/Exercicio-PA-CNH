var idade = parseInt(prompt("Digite sua idade: "));
var cnh = (prompt("Você tem CNH?: "));
var condespecial= (prompt("Possui condição especial para dirigir?: "))



if(idade >= 18 && cnh == 'sim' || condespecial == 'sim'){;
    console.log("Você pode dirigir. ");
    alert("Você pode dirigir. ");
    
}else if(idade < 18 && cnh == 'sim' || condespecial == 'sim'){;
    console.log("Você pode dirigir. ");
    alert("Você pode dirigir. ");

}else if(idade >= 18 && cnh == 'nao' || condespecial == 'nao'){;
    console.log("Você não pode dirigir. ");
    alert("Você não pode dirigir. ");

}else if(idade < 18 && cnh == 'nao' || condespecial == 'nao'){;
    console.log("Você não pode dirigir. ");
    alert("Você não pode dirigir. ");

}else if (idade >= 18 && cnh == 'sim' || condespecial == 'nao'){;
    console.log("Você pode dirigir. ");
    alert("Você pode dirigir. ");

}else if (idade < 18 && cnh == 'nao' || condespecial == 'sim'){;
    console.log("Você não pode dirigir. ");
    alert("Você não pode dirigir. ")

}