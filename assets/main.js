    var usuario = prompt("cual es tu peso?");
    var planeta = parseInt(prompt("elige tu planeta\n1 es marte\n2 es jupiter"));
    var peso = parseInt(usuario);
    var g_tierra = 9.8;
    var g_marte = 3.7;
    var g_jupiter = 24.8;
    var peso_final;
    if (planeta == 1)
    {
      peso_final = peso * g_marte / g_tierra;
    }
    else if (planeta == 2)
    {
      peso_final = peso * g_jupiter / g_tierra;
    }
    else
    {
      peso_final = 1000000;
    }
    peso_final = parseInt(peso_final);
    document.write("tu peso en marte es <strong>" + peso_final + " kilos</strong>");
    

function calcularPeso(){// desde aqui parte el codigo de anisen
    var peso=document.getElementById("peso").value;
    var division=peso/9.78;
    var resultado="Mercurio: "+(division*3.7 ).toFixed(2)+"\nVenus: "+(division*8.87).toFixed(2)+"\nMartes: "+(division*3.711).toFixed(2)+"\nJupiter: "+(division*24.79).toFixed(2)+"\nSaturno: "+(division*10.44).toFixed(2)+"\nUrano: "+(division*8.86).toFixed(2)+"\nNeptuno: "+(division*11.09).toFixed(2)+"\nPluton(planeta enano): "+(division*0.6).toFixed(2);
    alert(resultado);
}//aqui termina anisen