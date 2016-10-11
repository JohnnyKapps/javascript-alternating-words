function SearchPokemon(){
  var pokemon = $("#search").val();

  if(pokemon != ""){
       $.ajax({
         url: 'http://pokeapi.co/api/v2/pokemon/' + pokemon,
         success: function (data){
           console.log(data)
           var content = '<div class="poke-card">' +
                           '<a><img src="' + data.sprites.front_default + '">' +
                             '<h2>' + data.name + '</h2>' +
                             '<span></span>' +
                           '</a>' +
                         '</div>'
           $('.content').append(content)
         }
       });
  }




}
