document.querySelector(".questionForm").addEventListener("submit", function (event){
    
    event.preventDefault();

    let inputs = document.getElementsByTagName("input");
    console.log(inputs);
    let count = 0;
    let questionCount = 0;
    
    for(i = 0; i<inputs.length; i++){
        let id = inputs[i].getAttribute("id");
        let answers = document.getElementsByClassName("answers");
        
        if(id !="right" && inputs[i].checked){
                console.log("respuesta incorrecta");
                // inputs[i].style.backgroundColor = "red";
                // inputs[i].style.color = "red";
               questionCount++;
                inputs[i].style.backgroundColor = "red";
                // document.answers[Math.ceil(i/4)].style.backgroundColor = "red";
        }
        else if(id == "right" && inputs[i].checked){
            console.log("respuesta correcta"); 
            // document.answers[Math.ceil(i/4)].style.backgroundColor = "green";
            inputs[i].style.backgroundColor = "green";
            count++;
            questionCount++;
        }
        else{
            console.log("nada");
        }
    }
    
    let resultText = document.querySelector("#resultado");
    if(questionCount == 10){
       
        resultText.innerHTML = `*RESULTADO: ${count} / 10`;
    }
    else{
        resultText.innerHTML = `Solo has contestado ${questionCount} preguntas`;
    }


    
    count == 10 ? event.target.submit() : console.log("nope");
    

})


// inputs[i].getAttribute("id")

