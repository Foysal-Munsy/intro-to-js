const readline = require("readline-sync");
function calcAvg()
{
    let math =parseFloat( readline.question("math: "));
    let bio =parseFloat( readline.question("bio: "));
    let chem =parseFloat( readline.question("chem: "));
    let phy =parseFloat( readline.question("phy: "));
    let bang =parseFloat( readline.question("bang: "));

    let avg = (math+bio+chem+phy+bang)/5;
    console.log("avg marks:",avg.toFixed(2));
}
calcAvg();