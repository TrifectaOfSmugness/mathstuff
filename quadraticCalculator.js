function square(number) {
    return number*number
}
function findFactors(n) {
   const factors = [];
   const arrangedFactors = []
   const pairedFactors = []
   function arrange(array) {
       while (array.length > 0) {
       arrangedFactors.push(array.shift())
       arrangedFactors.push(array.pop())
   }
   }
   if (n < 0) {
       n = n*-1
       for (let i = 1; i <= n; i++) {
       if (n % i === 0) {
           factors.push(i);
       }
   }
   const no = factors.length 
   for (let i = 0; i < no; i++) {
       factors.push(factors[i]*-1)
   }
   arrange(factors);
   }
   else {
   for (let i = 1; i <= n; i++) {
       if (n % i === 0) {
           factors.push(i);
       }
   }
   arrange(factors);
   }

if (arrangedFactors[arrangedFactors.length - 1] == undefined) {
       arrangedFactors.pop()
       arrangedFactors.push(arrangedFactors[arrangedFactors.length - 1])
   }
if (n>0) {
    const num = arrangedFactors.length
    for (let i = 0; i < num; i++) {
        arrangedFactors.push(arrangedFactors[i]*(-1))
    }
}
while (arrangedFactors.length > 0) {
    pairedFactors.push({first: arrangedFactors[0], second: arrangedFactors[1]})
    arrangedFactors.splice(0, 2)
}
    return pairedFactors;
}
function quadEquat(a, b, c) {
    equation = a+"x^2+"+b+"x+"+c
    console.log(equation)
    // quadratic formula
    x1 = (-b+(Math.sqrt(square(b)-4*a*c)))/(2*a)
    x2 = (-b-(Math.sqrt(square(b)-4*a*c)))/(2*a)
    // factorisation
    findFactors(a)
    afactors = (findFactors(a))
    findFactors(b)
    bfactors = (findFactors(b))
    findFactors(c)
    cfactors = (findFactors(c))
    afact: for (let i = 0; i < afactors.length; i++) {
       cfact: for (let l = 0; l < cfactors.length; l++) {
            demsthefacts = (afactors[i].first*cfactors[l].first) + (cfactors[l].second*afactors[i].second)
            demsthefacts2 = (afactors[i].first*cfactors[l].second) + (cfactors[l].first*afactors[i].second)
            if (demsthefacts == b || demsthefacts2 == b) {
               if (demsthefacts2 == b) {
                  console.log("("+afactors[i].first+"x+"+cfactors[l].first+")("+afactors[i].second+"x+"+cfactors[l].second+")")
               }
               else {               
                console.log("("+afactors[i].first+"x+"+cfactors[l].second+")("+afactors[i].second+"x+"+cfactors[l].first+")")
               }
                break afact;
                break cfact;
            }
        }
    }
    // completing the square
    if (a == 1) {
       console.log("(x+"+(b/2)+")^2+"+(-(square(b/2))+c)) 
    }
    else {
        let bda = b/a
        console.log(a+"(x+"+(bda/2)+")^2+"+(-a*(square(bda/2))+c))
    }
    console.log("x = "+x1+" or "+x2)
}
quadEquat(5, 25, -30)
