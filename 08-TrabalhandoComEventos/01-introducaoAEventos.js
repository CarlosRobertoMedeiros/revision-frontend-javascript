/*
	Eventos em JavaScript

	Para chamar eventos utilizando JavaScript puro
	Temos que colocá-lo no addEventListener

	Ex.:

	var valorElement = document.getElementById('valor');
	var totalElement = document.getElementById('total');


	valorElement.addEventListener('keyup',function(e){
		var total = 0;
		var valor = parseFloat(valorElement.value ? valorElement.value : 0); //Convertendo a String em Número, ficar atento ao valor zerado


		if (valor>0  && valor<10){
			total = valor + valor *0.3 + 5;
		}else if(valor>=10 && valor<=50){
			total = valor + valor *0.1 + 2;
		}else{
			total =valor;
		}

		
		totalElement.innerHTML = total;

	});

	Para chamar eventos utilizando o jQuery


	on.('click',function(){}_) = usando jQuery

	Ex:

	$(function(){

		var valorElement = $('#valor');
		var totalElement = document.getElementById('total');
		var totalMascara = $('#total-mascara');

		var mascaraConfig = {
			decimal:',',
			thousands:'.',
			prefix:'R$ '
		}

		valorElement.on('keyup',function(e){
			var total = 0;
			var valor = valorElement.maskMoney('unmasked')[0]; //Retorna um float
			//var valor = parseFloat(valorElement.val() ? valorElement.val() : 0); //Convertendo a String em Número, ficar atento ao valor zerado


			if (valor>0  && valor<10){
				total = valor + valor *0.3 + 5;
			}else if(valor>=10 && valor<=50){
				total = valor + valor *0.1 + 2;
			}else{
				total =valor;
			}

			totalMascara.maskMoney(mascaraConfig);
			totalMascara.maskMoney('mask',total);
			totalElement.innerHTML = totalMascara.val();

		});

		valorElement.maskMoney(mascaraConfig);


	});



*/