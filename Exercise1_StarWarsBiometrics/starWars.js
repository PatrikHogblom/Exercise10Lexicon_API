document.getElementById("inputName-btn").addEventListener('click', getApi);

function getApi()
{
    let serachInput = document.getElementById("inputName").value.trim();

    //if imput is empty, dont add anything
    if (serachInput ==="") 
    {
        alert("Please enter a value before adding");
        return;
    }

    //check if we get result Array[1] or Array[0], 1 is exists, 0 is not found 


    let urlToApi = "https://www.swapi.tech/api/people/?name=" + serachInput; // Using wildcard to match any sequence of characters

    fetch(urlToApi)
    .then(res => res.json())
    .then(data => {
        console.log(data.result); 
        if(data && data.result && data.result.length > 0)
        {
            let informationString = "";
            document.getElementById("outputInfo").style.color = "black";
            data.result.forEach(element => {
                let character = element.properties;
                informationString += `Name: ${character.name}, Height: ${character.height}, Mass: ${character.mass} Gender: ${character.gender}, Hair-color: ${character.hair_color}\n\n`;
            });
            document.getElementById("outputInfo").value = informationString;
        }
        else
        {
            document.getElementById("outputInfo").style.color = "red";
            document.getElementById("outputInfo").value = "Character not found";
        }
    })
    .catch(err => console.error(err))
}