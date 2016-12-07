$(function (){

	var recipes = $('#recipes');

	.ajax({
		type: 'GET',
		url: '',
		success: function(recipes) {
			.each(recipes, function(i, recipe){
				recipes.append('<li>Recipe Name: '+ recipe.Name '</li>');
			});
		}
	});

});