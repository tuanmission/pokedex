//Tuan Luong-I Declare this is my original work.
//Project was to create a pokedex. 
function getPokemon() { //Method to get pokemon
    var query = document.getElementById('search_query').value; //Gets pokemon by name or number
    $.ajax({
        type: "GET", //Jquery ajax to fetch pokedex data from the Pokeapi.
        url: "https://pokeapi.co/api/v2/pokemon/" + query,
        dataType: "json"
    }).done(function(data) {
        var poke_Title = document.getElementById('poke_title');
        var poke_Weight = document.getElementById('poke_weight');
        var poke_Height = document.getElementById('poke_height'); //Assigning variables from the data
        var weight = data.weight;
        var height = data.height;
        var title = data.name;
        title = title.charAt(0).toUpperCase() + title.slice(1); //Upper case the name of the pokemon
        var number = data.id;
        var types = data.types;
        var pokeimg = data.sprites.other;
        var baseStats = data.stats;
        pokeimg = pokeimg['official-artwork'].front_default;
        poke_Title.innerHTML = title + "  #" + number; //Putting data into the html
        $("#poke_img").attr("src", pokeimg);
        poke_Weight.innerHTML = "Weight: " + weight;
        poke_Height.innerHTML = "Height: " + height; //Putting weight and height into the html code
        var list = ""
        for (let t of types) { //Method to assign data to type table
            var typename = t.type.name
            typename = typename.charAt(0).toUpperCase() + typename.slice(1);
            list = list + `<li>` + typename + `</li>`;
        }

        var statTable = "";

        for (let statistic of baseStats) {
            statTable = statTable + "<tr>" + "<td>" + statistic.stat.name.toUpperCase() + "</td>"

            +
            "<td>" + statistic.base_stat + "</td>" + "</tr>"; //Taking data from pokedex for base stats and putting it in table code
        }

        document.getElementById('poke_type').innerHTML = list; //Putting the table data into the html
        document.getElementById('poke_stats').innerHTML = statTable;






    });

}