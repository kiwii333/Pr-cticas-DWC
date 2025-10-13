let nota = 0;

switch(nota){
    case 0:
        if(nota >=9){
            return "SOBRESALIENTE,  FELICIDADES!!";
        }
        break;
    case 1:
        if(nota == 7 || 8){
            return "Notable";
        }
        break;
    case 2:
        if(nota ==5 || 6){
            return "Aprobado";
        }
        break;
    case 3:
        if(nota <5){
            return "Suspenso";
        }
        break;
    default:
        return "El alumno no tiene nota";
    
}