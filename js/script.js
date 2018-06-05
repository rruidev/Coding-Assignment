
$(document).ready(function(){
    var data = [
		    {
				"category": "fruit",
				"item": "apples",
				"type": "Honey Crisp",
				"brand": "Little cuties",
				"qty": 10
			},
			{
				"category": "beverage",
				"item": "milk",
				"type": "2 % ",
				"brand": "generic",
				"qty": "1 gallon"
			}, {
				"category": "pasta",
				"item": "Pasta",
				"type": "Penne",
				"brand": "Barilla",
				"qty": 3
			}, {
				"category": "dessert",
				"item": "Gelatin dessert",
				"type": "Green",
				"brand": "Jello",
				"qty": 3
			}, {
				"category": "dairy",
				"item": "Yogurt",
				"type": "Assorted flavors",
				"brand": "Chobani",
				"qty": 12
			}, {
				"category": "pasta",
				"item": "Pasta",
				"type": "Linguini",
				"brand": "Barilla",
				"qty": 3
			}, {
			    "category": "beverage",
				"item": "Apple juice",
				"type": "regular",
				"brand": "Happy Farms",
				"qty": 2
			}, {
				"category": "beverage",
				"item": "Vodka",
				"type": "Tangerine",
				"brand": "Grey Goose",
				"qty": 1
			}
];
var html='';     
data.forEach(function(user,index){ 
                     html += '<div class="column container fade-in" style="animation-delay:'+ index * 0.5+'s">'
                          +'<header class="accentTextColor">'+ user.category.toUpperCase() + '</header>'
                          +'<span>' + user.type+ '</span>'
                          +'<div>' + user.item+ '</div>'
                          +'<span>' + user.brand.toUpperCase() + '</span>'
                          +'<footer>' + 'Qty / '+  user.qty + '</footer>' 
                          + '</div>' });
                          $('.mainproducts').html(html);
                    });