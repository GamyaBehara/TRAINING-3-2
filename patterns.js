//5x5

for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        document.writeln("*");
    }
    document.writeln("<br>");
}

//left triangle
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i>=j)
        document.writeln("*");
    }
    document.writeln("<br>");
}

//x pattern
for(let i=1;i<=5;i++){
    for(let j=1;j<=5;j++){
        if(i==j || i+j==6){
            document.writeln("*");
        }else{
            document.writeln("&nbsp;&nbsp;");
        }
    }
    document.writeln("<br>");
}
