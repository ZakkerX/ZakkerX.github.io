$(function(){

	$('.btn').on('click', function () {

		var i, YY, M, NN, CNTi, result, answer, err;

		i = parseInt($('#select option:selected').val());
		console.log(i);

		
		YY = parseInt($('#age').val());

		M = parseInt($('#month').val());

		NN = parseInt($('#numGD').val());

		err = $('.err');

		answer = $("#out");

		$('input[type=text]').each(function(){
			
		var inp = $(this);




		if(inp.val() == '' || isNaN(inp.val())){
			inp.addClass('err');
			answer.css('color', 'red');
			i = 'stop';
		} else{
			inp.removeClass('err');
			answer.css('color', 'green');
		}
		});
		
		switch (i)
			{
				case 2:
					CNTi = 13;
					break;
				case 3:
					CNTi = 12;
					break;
				case 4:
					CNTi = 14;
					break;
				case 5:
					CNTi = 11;
					break;
					
				default:
					CNTi = 0;
					break;
			}
			
		result = ((((YY*10+M)*100+NN)*10+i)*10+NN)%CNTi+1;

			if(result !== result){
				answer.text('Вы ввели неверные значения');
			} else{
				answer.text('№ ' + result);
			}
	
	
	});

});
