$(function (){

	var recipes = $('#recipes');		//an id for storing the recipes that will be inserted into the html later
	var recipeName = $('#recipeName');		//an id just for recipe name strings

	function addRecipe(recipe) {
		$recipes.append('<li>recipeName: '+ recipe.recipeName'</li>');
	}

	.ajax({								//API call (needs JSON elements to be specified)
		type: 'GET',
		url: '',
		success: function(recipes) {
			.each(recipes, function(i, recipe){
				// recipes.append('<li>Recipe Name: '+ recipe.recipeName '</li>');
				addRecipe(recipe);
			});
		}

	});

	$('#addRecipe').on('click', function()	{

	var recipe = {
		recipeName: $recipeName.val(),
	};

	.ajax({
		type: 'POST',
		url: '';
		data: recipe,
		success: function(newRecipe)	{
			// recipes.append('<li>Recipe Name: '+ newRecipe.recipeName '</li>');
			addRecipe(newRecipe);
		}
	})

	});

});