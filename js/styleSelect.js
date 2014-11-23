/*---------------------------------------------
 Autor: Esteban Vera
 Twitter : @kiokotzu
 Github : https://github.com/kiokotzu/styleSelect
 Correo : esteban.vg@outlook.com
 Name Plugin: styleSelect.js
 version : 1.0.1
 ---------------------------------------------*/

 $(function(){
	jQuery.fn.styleSelect = function(){

		this.each(function(){
			var el =  $(this);

			el.wrap(function() {
			  return "<div class='select'></div>";
			});

			el.parent('.select').append("<div class='arrow'></div>");

			var textSelect = el.parent('.select').find('option[value=""]').text();
			el.parent('.select').find('.arrow').text(textSelect);

			function select(q){
				value = q.find('option:selected').text();
				q.parent().children('.arrow').text(value);
			}

			el.on('change',function(){
		      select(el);
			});
		});
	}
});
