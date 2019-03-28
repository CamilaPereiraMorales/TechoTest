let url = (`http://proyectos.chile.techo.org/2019/php/select_campamentos.php`)

fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data);
       regionCampamento = []
       campamento = []
       for(let i=0; i<data.length; i++){

           ubicacionCampamento=data[i][0]
           regionCampamento.push(ubicacionCampamento)

           nombreCampamento=data[i][2]
           campamento.push(nombreCampamento)

        
           console.log(regionCampamento[i] , campamento[i]);
       }
       
      //console.log(nombreCampamento);
      // console.log(ubicacionCampamento + nombreCampamento);
      //console.log(campamento);
      
      
       
      
       
   
       


       
       
       
       


       
       
       
       
        
    })