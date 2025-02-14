function findFactors(n) {
   const factors = [];
   const factors1 = []
   const factors2 = []
   const pairedFactors = []
   function arrange(array) {
       while (array.length > 0) {
       factors2.push(array.shift())
       factors2.push(array.pop())
   }
   }
   if (n < 0) {
       n = n*-1
       for (let i = 1; i <= n; i++) {
       if (n % i === 0) {
           factors.push(i);
       }
   }
   for (let i = 0; i < factors.length; i++) {
       factors1.push(factors[i]*-1)
   }
   for (let i = 0; i < factors.length; i++) {
       factors1.push(factors[i])
   }
   arrange(factors1);
   }
   else {
   for (let i = 1; i <= n; i++) {
       if (n % i === 0) {
           factors.push(i);
       }
   }
   arrange(factors);
   }

if (factors2[factors2.length - 1] == undefined) {
       factors2.pop()
       factors2.push(factors2[factors2.length - 1])
   }
if (n>0) {
    const num = factors2.length
    for (let i = 0; i < num; i++) {
        factors2.push(factors2[i]*(-1))
    }
}
while (factors2.length > 0) {
    pairedFactors.push({first: factors2[0], second: factors2[1]})
    factors2.splice(0, 2)
}
    return pairedFactors;
}
function quadEquat(a, b, c) {
    x1 = (-b+(Math.sqrt(b*b-4*a*c)))/(2*a)
    x2 = (-b-(Math.sqrt(b*b-4*a*c)))/(2*a)
    equation = a+"x^2+"+b+"x+"+c
    console.log(equation)
    findFactors(a)
    afactors = (findFactors(a))
    findFactors(b)
    bfactors = (findFactors(b))
    findFactors(c)
    cfactors = (findFactors(c))
    afact: for (let i = 0; i < afactors.length; i++) {
       cfact: for (let l = 0; l < cfactors.length; l++) {
            demsthefacts = (afactors[i].first*cfactors[l].first) + (cfactors[l].second*afactors[i].second)
            if (demsthefacts == b) {
                console.log("("+afactors[i].first+"x+"+cfactors[l].second+")("+afactors[i].second+"x+"+cfactors[l].first+")")
                break afact;
                break cfact;
            }
        }
    }
    console.log("x = "+x1+" or "+x2)
}

quadEquat(5, 25, -30)
