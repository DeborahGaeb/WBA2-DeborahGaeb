const stunde = 14;
const wochentag = 5;
var stundenplan = new Array[stunde][wochentag];

function stundenplanErstellen(){
    var option;
    
    while(option == exit){
         console.log("ap2");
         console.log("AVM-GdvK");
         console.log("bwl1");
         console.log("bwl2");
         console.log("bs");
         console.log("mathe2");
         console.log("st");
         console.log("ti2");
         console.log("wba2");
        
        switch(option){
            case "ap2":
                stundenplan[1][1]= "Algorithmen und Programmieren 2";
                stundenplan[2][1]= "Algorithmen und Programmieren 2";
                stundenplan[1][2] = "Algorithmen und Programmieren 2";
                stundenplan[2][2] = "Algorithmen und Programmieren 2";
            break;
            case "AVM-GdvK":
                stundenplan[7][3] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[8][3] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[9][3] ="Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[10][3] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[6][4] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[7][4] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[8][4] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
                stundenplan[9][4] = "Audiovisuelles Medienprojekt 1 und Grundlagen der visuellen Kommikation";
            break;
             case "bwl1":
                stundenplan[3][4] = "Betriebswirtschaftslehre 1";
                stundenplan[4][4] = "Betriebswirtschaftslehre 1";
                stundenplan[5][4] = "Betriebswirtschaftslehre 1";
                stundenplan[6][4] = "Betriebswirtschaftslehre 1";
                break;
             case bwl2:
                stundenplan[1][4] = "Betriebswirtschaftslehre 1";
                stundenplan[2][4] = "Betriebswirtschaftslehre 1";
                break;
             case bs:
                stundenplan[5][4] = "Betriebssystem";
                stundenplan[6][4] = "Betriebssystem";
            break;
            case mathe2: 
                stundenplan[3][0] = "Mathematik 2";
                stundenplan[4][0] = "Mathematik 2";
                stundenplan[3][2] = "Mathematik 2";
                stundenplan[4][2] = "Mathematik 2";
            break;               
             case "st":
                stundenplan[3][1] ="Softwaretechnik";
                stundenplan[3][1] = "Softwaretechnik";
            break;
            case "ti2":
                stundenplan[9][2] = "Theoretische Informatik 2";
                stundenplan[10][2] = "Theoretische Informatik 2";
            case "wba2":
                stundenplan[1][0] = "Webbasierte Anwendungen 2";
                stundenplan[2][0] = "Webbasierte Anwendungen 2";
                stundenplan[3][0] = "Webbasierte Anwendungen 2";
                stundenplan[4][0] = "Webbasierte Anwendungen 2";
            break;
            case "exit":
            break;
            default:
         }
};
    stPraktikum[stunde][wochentag] = new Array[stunde][wochentag];
	bsPraktikum[stunde][wochentag] = new Array[stunde][wochentag];
    
function praktikaAnmelden(){
    console.log("Bitte Wählen Sie ihr Praktika aus: ");
    switch(praktium){
        case "bs":
            if(stundenplan[0][1] != bsPraktikum[0][1] && stundenplan[1][1] != bsPraktikum[1][1] && stundenplan[2][1] != bsPraktikum[2][1]) {
                console.log("BS Praktikum T1 und T2");
                return true;
            }
            if(stundenplan[5][2] != bsPraktikum[5][2] && stundenplan[6][2] != bsPraktikum[6][2] && stundenplan[7][2] != bsPraktikum[7][2]){
              console.log("BS Praktikum T3 und T4");
                return true;  
            } 
        
        if(stundenplan[3][4] != bsPraktikum[3][4] & stundenplan[4][4] != bsPraktikum[3][4] && bsPraktikum[5][4]) {
            console.log("BS Praktikum T5 und T6");
            return true;
        }
        break;
           
        case "st":
            if(stundenplan[6][0] != st1Praktikum[6][0] &&  stundenplan[7][0] != st1Praktikum[7][0]){ 
                console.log("ST Praktikum T1");
                return true;
            }
            
            if(stundenplan[8][0] != st1Praktikum[8][0] && stundenplan[9][0] != st1Praktikum[9][0]){ 
                console.log("St Praktikum T2 passt");
                return true;
            }
            
            if(stundenplan[10][0] != st1Praktikum[10][0] && stundenplan[11][0] != st1Praktikum[11][0]){ 
                console.log("ST Praktikum T3 passt");
                return true;
            }
            
            if(stundenplan[1][1] != st1Praktikum[1][1] && stundenplan[2][1] != st1Praktikum[2][1]){ 
                console.log("ST Praktikum T4 passt");
                return true;
            }
            
            if(stundenplan[7][1] != st1Praktikum[7][1] && stundenplan[8][1] != st1Praktikum[8][0]){ 
                console.log("ST Praktikum T5 passt");
                return true;
            }
            
            if(stundenplan[9][1] != st1Praktikum[9][1] && stundenplan[10][1] != st1Praktikum[10][1]){ 
                console.log("ST Praktikum T6 passt");
                return true;
            }
            break;            
    }   
}
exports.stundenplanErstellen = stundenplanErstellen;