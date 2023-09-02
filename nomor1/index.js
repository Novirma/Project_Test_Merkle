const perhitungan = () => {
    let hasil ="";
    for (let index = 1; index <= 25; index++) {
        if(index % 5 == 0 ) { 
           hasil = hasil + " " + index +  " \n";
        }
        else { 
            hasil = hasil + " " + index;
        }
       
        
    }
    return hasil;
}

console.log(perhitungan());