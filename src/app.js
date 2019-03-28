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

        let select1 = document.getElementById("exampleFormControlSelect1");

           select1.innerHTML +=`
           <select class="form-control" id="exampleFormControlSelect1">
           <option id="campamentoSelect">${regionCampamento[i]} / ${campamento[i]}</option>
           
 `
           console.log(regionCampamento[i] , campamento[i]);
       }
       
    })

    function next() {
        location="";
     }
