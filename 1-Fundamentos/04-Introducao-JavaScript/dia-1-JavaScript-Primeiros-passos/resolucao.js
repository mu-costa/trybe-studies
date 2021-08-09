let nomePeca;
let movimento;

nomePeca = "PEON";

switch (nomePeca.toLowerCase()){

    case "peon":
        console.log("frent");
        break;
    case "bishop":
        console.log("diagonals");
        break;
    case "tower":
        console.log("forward and sideways");
        break;
    case "horse":
        console.log("L movement");
        break;
    case "queen":
        console.log("any straight line");
        break;
    case "king":
        console.log("any side on your perimeter");
        break;
    default:
        console.log("This part donst exist")
        break;
}