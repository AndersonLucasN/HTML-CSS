/*let valores = [ 8, 1, 7, 4, 2, 9]

for (let pos = 0; pos < valores.length; pos++) {
    console.log('A posição ' + pos + ' tem o valor ' +valores[pos])
}*/

let valores = [ 8, 1, 7, 4, 2, 9]
num.sort()
num.push(1)
console.log(num)
for (let pos in num)
{
    console.log('A posição ' + pos + 'tem o valor ' +num[pos])
    let pos = num.indexOf(8)
    if (pos == -1)
    {
        console.log('O valor não foi encontrado!')
    }else{
        console.log('O valor está na posição ' + pos)
    }
}
