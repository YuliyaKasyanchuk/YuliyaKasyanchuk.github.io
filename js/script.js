window.addEventListener('DOMContentLoaded', function() {
    // MODAl
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


    // PRINT INFO
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
        photo = document.getElementsByClassName('photo'),
        person = document.querySelector('.person'),
        pesronSkin = document.getElementById('person-skin'),
        personHair = document.getElementById('person-hair'),
        personClothes = document.getElementById('person-clothes'),
        personShoes = document.getElementById('person-shoes'),
        construct = document.querySelector('.construct'),
        radioBlock = document.querySelector('.radio'),
        skinNumber = 0;
    var flag = false;

    radioBlock.addEventListener('change', function() {
    	sexCheck();
        if (event.target.value === 'Женский') {
            pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-4.png") center no-repeat';
pesronSkin.style.backgroundSize = 'cover';
personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-6.png") center no-repeat';
personHair.style.backgroundSize = 'cover';
personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-5.png") center no-repeat';
personClothes.style.backgroundSize = 'cover';
console.log(flag);


        } else {
            
            pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-1.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-1.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-1.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
            console.log(flag);
        }

console.log(flag);
return flag;
    });
    select.addEventListener('click', function() {
        candidateViews.innerHTML = select.options[select.selectedIndex].value;


    });
    function sexCheck(){
    	if(document.getElementById('female').checked) {
  flag = true;
}else if(document.getElementById('male').checked) {
  flag = false;
}
return flag;
    }


    // SLIDER

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



        prev[i].addEventListener('click', function() {
            if (i === 0) {
            	 var check = sexCheck();
            	plusSkinSlides(-1);
            	console.log('skinInd'+skinIndex);
            		 console.log('check '+check)
	                // if(skinIndex === 1 || skinIndex === 2 || skinIndex ===3 ){
	                	if(check ==='false'){
		                
		             
		                pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-'+skinIndex+'.png") center no-repeat';
		                pesronSkin.style.backgroundSize = 'cover';
		                
		            }
		            
	                // }
	                // else if(skinIndex === 4  || skinIndex === 5 || skinIndex === 6){
	                	if(check ==='true'){

	                	pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-' +skinIndex+ '.png") center no-repeat';
		                pesronSkin.style.backgroundSize = 'cover';
		                console.log(0)
		            // }
	                }
            } else if (i === 1) {
                console.log('!888!!' + hairIndex);
                
                for(let t = 0; t < 6; t++){
                	if(hairIndex === 1  || hairIndex === 2 || hairIndex === 3){
                		if(flag === 'false'){
                			plusHairSlides(-1);
	                	personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                	personHair.style.backgroundSize = 'cover';
	                }
	                
                	}
                	else{
                		personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
	                	personHair.style.backgroundSize = 'cover';
                	}
                }
            } else if (i === 2) {

                
                plusClothesSlides(-1);
                for(let t = 0; t < 6; t++){
                	if(clothesIndex === 1 || clothesIndex === 2 || clothesIndex === 3){
                personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                personClothes.style.backgroundSize = 'cover';
} else{
	personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                personClothes.style.backgroundSize = 'cover';
}
                }

            }


        });
        next[i].addEventListener('click', function() {
                if (flag === 1) {



                    if (i === 0) {
                        plusSkinSlides(1);
                        pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-' + skinIndex + '.png") center no-repeat';
                        pesronSkin.style.backgroundSize = 'cover';
                    } else if (i === 1) {
                        console.log('!!!' + hairIndex)
                        // if (hairIndex === 0 || hairIndex === 1 || hairIndex === 2) {
                        console.log(hairIndex)
                        plusHairSlides(1);
                        personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                        personHair.style.backgroundSize = 'cover';
                        // }

                    } else if (i === 2) {

                        // if (clothesIndex === 0 || clothesIndex === 1 || clothesIndex === 2) {
                        plusClothesSlides(1);
                        personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                        personClothes.style.backgroundSize = 'cover';

                    }

                }

                // // } else {
                //     if (i === 0) {
                //         plusSkinSlides(1);
                //         pesronSkin.style.background = 'url("../Diploma_full/img/skin/skin-' + skinIndex + '.png") center no-repeat';
                //         pesronSkin.style.backgroundSize = 'cover';
                //     } else if (i === 1) {
                //         console.log('!!!' + hairIndex)
                //         if (hairIndex === 3 || hairIndex === 4 || hairIndex === 5) {
                //             plusHairSlides(1);
                //             personHair.style.background = 'url("../Diploma_full/img/hair/construct/hair-' + hairIndex + '.png") center no-repeat';
                //             personHair.style.backgroundSize = 'cover';
                //         }

                //     } else if (i === 2) {

                //         if (clothesIndex === 3 || clothesIndex === 4 || clothesIndex === 5) {
                //             plusClothesSlides(1);
                //             personClothes.style.background = 'url("../Diploma_full/img/clothes/construct/clothes-' + clothesIndex + '.png") center no-repeat';
                //             personClothes.style.backgroundSize = 'cover';

                //         }

                //     }
                // }
            
        });

}




// if(skinNumber)


/////////////////////////////////////////////

readyBtn.addEventListener('click', function() {
    custom.style.display = 'none';
    main.classList.add('fadeIn');
    main.style.display = 'block';
    candidateName.innerHTML = name.value;
    candidateAge.innerHTML = age.value;


    if (male.checked === true) {
        candidateSex.innerHTML = male.value;
        photo[0].classList.add('photo-1');
    } else {
        candidateSex.innerHTML = female.value;
        photo[0].classList.add('photo-2');
    }

    candidateBio.innerHTML = bio.value;
});



});