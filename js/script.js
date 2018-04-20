window.addEventListener('DOMContentLoaded', function() {


    // MODAl////////////////////////////////////////////////////////////////
    let popupBtn = document.getElementById('popup-btn'),
        overlay = document.querySelector('.overlay'),
        popup = document.querySelector('.popup'),
        main = document.querySelector('.main'),
        custom = document.querySelector('.custom'),
        customInfo = document.querySelector('.custom-info'),
        customChar = document.querySelector('.custom-char'),
        customStyle = document.querySelector('.custom-style');

    popupBtn.addEventListener('click', function(event) {
        overlay.classList.add('fadeOut');
        setTimeout(function() {
            overlay.style.display = 'none';
        }, 2000);

        popup.classList.add('fadeOut');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 1000);

        main.classList.add('fadeOut');
        setTimeout(function() {
            main.style.display = 'none';
        }, 2000);
        setTimeout(function() {
            custom.classList.add('fadeIn');
            custom.style.display = 'flex';
            customInfo.style.display = 'block';
            customChar.style.display = 'block';
            customStyle.style.display = 'block';
        }, 2000);
    });
//////////////////////////////////////////////////////////////////////////////////////////

    // PRINT INFO/////////////////////////////////////////////////////////////////////////
    let name = document.getElementById('name'),
        age = document.getElementById('age'),
        male = document.getElementById('male'),
        female = document.getElementById('female'),
        select = document.getElementById('select'),
        bio = document.getElementById('bio'),
        candidateName = document.querySelector('.name'),
        candidateAge = document.querySelector('.age'),
        candidateSex = document.querySelector('.sex'),
        candidateViews = document.querySelector('.views'),
        candidateBio = document.querySelector('.bio'),
        readyBtn = document.getElementById('ready'),
        photo = document.getElementsByClassName('photo')[0],
        person = document.querySelector('.person'),
        pesronSkin = document.getElementById('person-skin'),
        personHair = document.getElementById('person-hair'),
        personClothes = document.getElementById('person-clothes'),
        personShoes = document.getElementById('person-shoes'),
        construct = document.querySelector('.construct'),
        radioBlock = document.querySelector('.radio'),
        skinNumber = 0;

    var flag = false;
    var check = sexCheck();

    age.addEventListener('keyup',function(e) {
    	this.value = this.value.replace( /\D/g, "")
    });

    radioBlock.addEventListener('change', function() {

        if (event.target.value === 'Женский') {
            pesronSkin.style.background = 'url("./img/skin/skin-4.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("./img/hair/construct/hair-6.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("./img/clothes/construct/clothes-5.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';

            check = 'false';
            


        } else {

            pesronSkin.style.background = 'url("./img/skin/skin-1.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("./img/hair/construct/hair-1.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("./img/clothes/construct/clothes-1.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
            check = 'true';
        }
    });
    console.log('flag-check ' + check)
    select.addEventListener('click', function() {
        candidateViews.innerHTML = select.options[select.selectedIndex].value;


    });

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    function sexCheck() {
        if (document.getElementById('female').checked) {
            flag = true;
        } else if (document.getElementById('male').checked) {
            flag = false;
        }
        return flag;
    }
    console.log('flag ' + flag)

    // SLIDER//////////////////////////////////////////////////////////////////////////////////////////////

    let slideIndex = 1,
        skinIndex = 1,
        clothesIndex = 1,
        hairIndex = 1,
        skinSlides = document.getElementsByClassName('skin-color'),
        hairSlides = document.getElementsByClassName('hair-style'),
        clothesSlides = document.getElementsByClassName('clothes-style'),
        prev = document.querySelectorAll('.prev'),
        next = document.querySelectorAll('.next')
    	female = document.getElementById('female'),
        male = document.getElementById('male'),
        sex = document.getElementsByName('sex');


    for (let i = 0; i < 3; i++) {

        function showSkinSlides(n) {

            if (n > skinSlides.length) {
                slideIndex = 1;
                skinIndex = 1;

            };
            if (n < 1) {
                slideIndex = skinSlides.length;
                skinIndex = skinSlides.length;
            };

            for (let i = 0; i < skinSlides.length; i++) {
                skinSlides[i].style.display = "none";
            }

            skinSlides[skinIndex - 1].style.display = 'block';


        }

        function showClothesSlides(n) {
            if (n > clothesSlides.length) {
                slideIndex = 1;
                clothesIndex = 1;
            };
            if (n < 1) {
                slideIndex = clothesSlides.length;
                clothesIndex = clothesSlides.length;
            };
            for (let i = 0; i < clothesSlides.length; i++) {
                clothesSlides[i].style.display = "none";
            }

            clothesSlides[clothesIndex - 1].style.display = 'block';
        }

        function showHairSlides(n) {
            if (n > hairSlides.length) {
                slideIndex = 1;
                hairIndex = 1;
            };
            if (n < 1) {
                slideIndex = hairSlides.length;
                hairIndex = hairSlides.length;
            };
            for (let i = 0; i < hairSlides.length; i++) {
                hairSlides[i].style.display = "none";
            }

            hairSlides[hairIndex - 1].style.display = 'block';
        }

        function plusSkinSlides(n) {
            showSkinSlides(skinIndex += n);

        }

        function plusClothesSlides(n) {
            showClothesSlides(clothesIndex += n);

        }

        function plusHairSlides(n) {
            showHairSlides(hairIndex += n);

        }

        function currentSlide(n) {
            showSkinSlides(skinIndex = n);
            showClothesSlides(slideIndex = n);
        }


       console.log(construct)

        prev[i].addEventListener('click', function() {
            if (i === 0) {

                plusSkinSlides(-1);

                console.log('skinInd' + skinIndex);
                console.log('check ' + check)
                if (check === 'false') {

                    switch (skinIndex) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 5:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 6:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;

                        default:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + 4 + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


                } else {
                    switch (skinIndex) {
                        case 1:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + 1 + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


                }
            } else if (i === 1) {
    			plusHairSlides(-1);
    			if (check === 'false') {
	            	switch (hairIndex) {
	                        case 1:
	                            break;
	                        case 2:
	                            break;
	                        case 3:
	                            break;
	                        case 4:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;
	                        case 5:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;
	                        case 6:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;

	                        default:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';

	                            break;
	                    }


                } else {
                    switch (hairIndex) {
                        case 1:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


}


            } 
            else if (i === 2) {


                plusClothesSlides(-1);

                if (check === 'false') {
	            	switch (clothesIndex) {
	                        case 1:
	                            break;
	                        case 2:
	                            break;
	                        case 3:
	                            break;
	                        case 4:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;
	                        case 5:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;
	                        case 6:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;

	                        default:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';

	                            break;
	                    }


                } else {
                    switch (clothesIndex) {
                        case 1:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }

				}
			}
        });

// ПО УМОЛЧАНИЮ - М//////////////////////////////////////////////////////////////////////////////////
	pesronSkin.style.background = 'url("./img/skin/skin-' + 1 + '.png") center no-repeat';
	pesronSkin.style.backgroundSize = 'cover';
	personHair.style.background = 'url("./img/hair/construct/hair-' + 1 + '.png") center no-repeat';
	personHair.style.backgroundSize = 'cover';
	personClothes.style.background = 'url("./img/clothes/construct/clothes-' + 1 + '.png") center no-repeat';
	personClothes.style.backgroundSize = 'cover';
	////////////////////////////////////////////////////////////////////////////////////////////////////



        next[i].addEventListener('click', function() {
               if (i === 0) {

                plusSkinSlides(1);

                console.log('skinInd' + skinIndex);
                console.log('check ' + check)
                if (check === 'false') {

                    switch (skinIndex) {
                        case 1:
                            break;
                        case 2:
                            break;
                        case 3:
                            break;
                        case 4:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 5:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 6:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;

                        default:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + 4 + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


                } else {
                    switch (skinIndex) {
                        case 1:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + skinIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/skin/skin-' + 1 + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


                }
            } else if (i === 1) {
    			plusHairSlides(1);
    			if (check === 'false') {
	            	switch (hairIndex) {
	                        case 1:
	                            break;
	                        case 2:
	                            break;
	                        case 3:
	                            break;
	                        case 4:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;
	                        case 5:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;
	                        case 6:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';
	                            break;

	                        default:
	                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                            personHair.style.backgroundSize = 'cover';

	                            break;
	                    }


                } else {
                    switch (hairIndex) {
                        case 1:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            personHair.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            personHair.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


}


            } 
            else if (i === 2) {


                plusClothesSlides(1);

                if (check === 'false') {
                	
	            	switch (clothesIndex) {
	                        case 1:
	                            break;
	                        case 2:
	                            break;
	                        case 3:
	                            break;
	                        case 4:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;
	                        case 5:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;
	                        case 6:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';
	                            break;

	                        default:
	                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + 4 + '.png") center no-repeat';
	                            personClothes.style.backgroundSize = 'cover';

	                            break;
	                    }


                } else {
                	
                    switch (clothesIndex) {
                        case 1:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 2:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 3:
                            personClothes.style.background = 'url("./img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                            personClothes.style.backgroundSize = 'cover';
                            break;
                        case 4:
                            break;
                        case 5:
                            break;
                        case 6:
                            break;
                        default:
                            pesronSkin.style.background = 'url("./img/clothes/construct/clothes-' + 1+ '.png") center no-repeat';
                            pesronSkin.style.backgroundSize = 'cover';

                            break;
                    }


				}
				console.log(construct)

        console.log('////////////////////////')
    	console.log(clone)
    	 console.log('////////////////////////')
			}

        });
	var clone = construct;
	
    }

    /////////////////////////////////////////////ЗАПИСЬ В ГЛАВНУЮ КАРТУ
    let progressBar = document.getElementsByClassName('progress-bar'),
    	resultCount = document.getElementsByClassName('result-count');
    console.log(progressBar)

    readyBtn.addEventListener('click', function() {
        custom.style.display = 'none';
        main.classList.add('fadeIn');
        main.style.display = 'block';
        candidateName.innerHTML = name.value;
        candidateAge.innerHTML = (age.value + ' лет');



        if (male.checked === true) {
            candidateSex.innerHTML = male.value;
            // photo.style.background = 'none';
            // if(personSkin.value === '' && personHair.value = '' && personClothes.value = ''){
            // 	photo.classList.add('photo-1');
            // }
            // photo.appendChild(construct);
            photo.appendChild(clone);
            photo.style.background = 'none';
        } else {
            candidateSex.innerHTML = female.value;
            // photo.style.background = 'none';
            // photo.appendChild(construct);
            photo.appendChild(clone);
            photo.style.background = 'none';
        }

        candidateBio.innerHTML = bio.value;
        for(let i = 0; i < progressBar.length; i++)
        {
        	progressBar[i].style.height = '0%';
        	resultCount[i].innerHTML = '0%';
        }
        
    });


    // СБРОСИТЬ РЕЗУЛЬТАТОВ

    let resetBtn = document.getElementById('reset');
    	// customChar = document.querySelector('custom-char');

    resetBtn.addEventListener('click', function(){
    	main.classList.add('fadeOut');
        setTimeout(function() {
            main.style.display = 'none';
        }, 200);
        setTimeout(function() {
            custom.classList.add('fadeIn');
            custom.style.display = 'flex';
            customInfo.style.display = 'block';
            customChar.style.display = 'block';
            customStyle.style.display = 'block';
            customChar.insertBefore(construct, readyBtn);
            bio.value = '';
            name.value = '';
            age.value = '';
        }, 200);
    });


// ЧЕСТНОЕ ГОЛОСОВАНИЕ/////////////////////////////////////////////////////////////////////////

let voting = document.getElementById('voting');
	

	voting.addEventListener('click', function(){
		var max= 75,
			summ = 0,
			randomSumm = 0,
			arr = [];

			function random(){
				var res = Math.floor(Math.random()*75);
				return res;
			}

			var res = random();
			
			arr.push(res);
			arr.push(100-res);
		for(let i = 0; i < progressBar.length; i++){

    		resultCount[i].innerHTML = arr[i]  + ' %';
    		var result = parseInt(resultCount[i].textContent);
    		progressBar[i].style.height = (result*1.6) + 'px';

        	
        }

	});

// ВМЕШАТЬСЯ В ВЫБОРЫ/////////////////////////////////////////////////////////////////////////

let crime = document.getElementById('crime'),
	clickBtn = 1;
	

	crime.addEventListener('click', function(){
		if(clickBtn ===1){
    		console.log(parseInt(resultCount[0].textContent+25))
			var result = parseInt(resultCount[0].textContent)+25,
				resultMin = parseInt(resultCount[1].textContent)-25;

    		resultCount[0].innerHTML = result + ' %';
    		progressBar[0].style.height = (result*1.6) + 'px';
    		resultCount[1].innerHTML = resultMin + ' %';
    		progressBar[1].style.height = (resultMin*1.6) + 'px';
    		clickBtn = 0;
    	
    }
    else{
    	return false;
    }

	});



});