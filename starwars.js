// Seu javascript aqui :)
// Use a Star Wars API: https://swapi.co/
// para carregar:
//  - A lista de filmes
//  - A introdução de cada filme, quando ele for clicado
function leEpsodio(e){
  $.ajax({
    url: $(e.target).data("data-episode-url"),
    dataType: 'json',
    success: function(resposta) {
        $(".reading-animation").html("EPISÓDIO " +  resposta.episode_id + "\n\n" + resposta.title + "\n\n" + resposta.opening_crawl);
      }

  });
};
$.ajax({
  url: 'https://swapi.co/api/films/',
  dataType: 'json',
  success: function(resposta) {
     console.log(resposta);
    resposta.results.forEach(adiciona);
    function adiciona(episodio){
    let $li = $("<li></li>");
    $li.html("Episódio "+ episodio.episode_id + ": " + episodio.title);
    $li.data("data-episode-url","https://swapi.co/api/films/" + episodio.episode_id);
    $li.appendTo( "#movies ul" );
    $li.click(leEpsodio);



    }
  }
});
