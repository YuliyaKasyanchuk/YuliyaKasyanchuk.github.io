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
        item = document.querySelector('.main-cards-item'),
        items = document.querySelectorAll('.main-cards-item'),

        
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
        // let candidate = item.cloneNode(true);
        // item.parentNode.insertBefore(candidate, item.nextSibling);

    var flag = true;
    var check = 'false';
    console.log('check -***********-  '+check)
    age.addEventListener('keyup',function(e) {
        age.value = age.value.replace( /[\D\+\-]/g, "");
    });
    age.addEventListener('change',function(e) {
    
        
        if(parseInt(age.value) < 35 || parseInt(age.value) > 70){

            alert('Введите корректный возраст! Возраст может быть больше 70лет и меньше 35лет!');
            this.value = '';
             console.log(typeof(parseInt(age.value)))
        console.log(age.value)
            return;
        }
        
    });
    name.addEventListener('change',function(e) {
        var regexp = /^[А-Яа-яЁё\s\-]+$/i;
       if(!regexp.test(this.value)) {
           e.preventDefault();
           alert("Введите имя кириллицей! Использовать можно только '-'");
           this.value = '';
           return false;
       }
    
    });

    bio.addEventListener('change',function(e) {
        var regexp = /^[А-Яа-яЁё\0-9\s\-]+$/i;
       if(!regexp.test(this.value)) {
           e.preventDefault();
           alert("Введите текст кириллицей! Минимум 30 символов");
           this.value = '';
           return false;
       }
       if(this.value.length < 30){
            alert("Минимум 30 символов");
           return false;

       }
    
    });





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
        sex = document.getElementsByName('sex'),
        skinDiv =  document.querySelector('.skin');




    radioBlock.addEventListener('change', function() {

        if (event.target.value === 'Женский') {
            pesronSkin.style.background = 'url("./img/skin/skin-5.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("./img/hair/construct/hair-5.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("./img/clothes/construct/clothes-5.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
            check = 'true';
            this.checked = true;
            currentSlideForWomen(5);
            

        } else {

            pesronSkin.style.background = 'url("./img/skin/skin-1.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("./img/hair/construct/hair-1.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("./img/clothes/construct/clothes-1.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover'
            check = 'false';
            this.checked = false;
            currentSlide(1);
        }
    });
    select.addEventListener('click', function() {
        candidateViews.innerHTML = select.options[select.selectedIndex].value;


    });

   

    /////////////////////////////////////////////////////////////////////////////////////////////////////

    function sexCheck() {
        if (radioBlock.value === 'Женский') {
            flag = false;
        } else {
            flag = true;
        }
        return flag;
    }
    console.log('flag/////////// ' + flag)

    // SLIDER//////////////////////////////////////////////////////////////////////////////////////////////

    
 


    for (let i = 0; i < 3; i++) {

        function showSkinSlides(n) {

            if (n > skinSlides.length/2) {
                slideIndex = 1;
                skinIndex = 1;

            };
            if (n < 1) {
                slideIndex = skinSlides.length/2;
                skinIndex = skinSlides.length/2;
            };
           
                for (let i = 0; i < skinSlides.length/2; i++) {
                skinSlides[i].style.display = "none";
                  // console.log('i= '+ i);
             console.log('index= '+ skinIndex);
              console.log('slide= '+ slideIndex);
            }
               for (let i = 3; i < skinSlides.length; i++) {
                skinSlides[i].style.display = "none";
            }

                
                 skinSlides[skinIndex - 1].style.display = 'block';
              
            
            
            
            
        }
        function showSkinSlidesForWomen(n) {

            if (n > skinSlides.length) {
                slideIndex = 4;
                skinIndex = 4;

            };
            if (n < 4) {
                slideIndex = skinSlides.length;
                skinIndex = skinSlides.length;
            };

     for (let i = 3; i < skinSlides.length; i++) {
                skinSlides[i].style.display = "none";
             console.log('index= '+ skinIndex);
              console.log('slide= '+ slideIndex);
    }
    for (let i = 0; i < skinSlides.length/2; i++) {
                skinSlides[i].style.display = "none";
                  console.log('i= '+ i);
             console.log('index= '+ skinIndex);
    }
    
            if(skinIndex === 4 ||skinIndex === 5 || skinIndex === 6){

             skinSlides[skinIndex - 1].style.display = 'block';
            }

        }
        

        function showClothesSlides(n) {
            if (n > clothesSlides.length/2) {
                slideIndex = 1;
                clothesIndex = 1;
            };
            if (n < 1) {
                slideIndex = clothesSlides.length/2;
                clothesIndex = clothesSlides.length/2;
            };
            for (let i = 0; i < clothesSlides.length/2; i++) {
                clothesSlides[i].style.display = "none";
            }
             for (let i = 3; i < clothesSlides.length; i++) {
                clothesSlides[i].style.display = "none";
            }

            clothesSlides[clothesIndex - 1].style.display = 'block';
        }

        function showClothesSlidesForWomen(n) {

            if (n > clothesSlides.length) {
                slideIndex = 4;
                clothesIndex = 4;

            };
            if (n < 4) {
                slideIndex = clothesSlides.length;
                clothesIndex = clothesSlides.length;
            };

     for (let i = 3; i < clothesSlides.length; i++) {
                clothesSlides[i].style.display = "none";
             
    }
    for (let i = 0; i < clothesSlides.length/2; i++) {
                clothesSlides[i].style.display = "none";
    }
    
            if(clothesIndex === 4 ||clothesIndex === 5 || clothesIndex === 6){

             clothesSlides[clothesIndex - 1].style.display = 'block';
            }

        }
        function showHairSlides(n) {
            if (n > hairSlides.length/2) {
                slideIndex = 1;
                hairIndex = 1;
            };
            if (n < 1) {
                slideIndex = hairSlides.length/2;
                hairIndex = hairSlides.length/2;
            };
            for (let i = 0; i < hairSlides.length/2; i++) {
                hairSlides[i].style.display = "none";
            }
            for (let i = 3; i < hairSlides.length; i++) {
                hairSlides[i].style.display = "none";
            }


            hairSlides[hairIndex - 1].style.display = 'block';
        }
        function showHairSlidesForWomen(n) {

            if (n > hairSlides.length) {
                slideIndex = 4;
                hairIndex = 4;

            };
            if (n < 4) {
                slideIndex = hairSlides.length;
               hairIndex = hairSlides.length;
            };

     for (let i = 3; i < hairSlides.length; i++) {
                hairSlides[i].style.display = "none";
             
    }
    for (let i = 0; i < hairSlides.length/2; i++) {
                hairSlides[i].style.display = "none";
    }
    
            if(hairIndex === 4 ||hairIndex === 5 || hairIndex === 6){

             hairSlides[hairIndex - 1].style.display = 'block';
            }

        }

        function plusSkinSlides(n) {
            showSkinSlides(skinIndex += n);
        }
        function plusSkinSlidesForWomen(n) {
            showSkinSlidesForWomen(skinIndex += n);
        }
       

        function plusClothesSlides(n) {
            showClothesSlides(clothesIndex += n);

        }
        function plusClothesSlidesForWomen(n) {
            showClothesSlidesForWomen(clothesIndex += n);

        }


        function plusHairSlides(n) {
            showHairSlides(hairIndex += n);

        }
        function plusHairSlidesForWomen(n) {
            showHairSlidesForWomen(hairIndex += n);

        }

        function currentSlide(n) {
            showSkinSlides(skinIndex = n);
            showClothesSlides(clothesIndex = n);
            showHairSlides(hairIndex = n);
        }
        function currentSlideForWomen(n) {
            showSkinSlidesForWomen(skinIndex = n);
            showClothesSlidesForWomen(clothesIndex = n);
            showHairSlidesForWomen(hairIndex = n);
        }


       console.log(construct)

        prev[i].addEventListener('click', function() {
            if (i === 0) {

               

                console.log('skinInd - ' + skinIndex);
                console.log('check ***************//////////--------' + check);
                 console.log(skinSlides);
                if (check === 'true') {
                plusSkinSlidesForWomen(-1);
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
                plusSkinSlides(-1);
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
    			
    			if (check === 'true') {
                    plusHairSlidesForWomen(-1);
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
                    plusHairSlides(-1);
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


                

                if (check === 'true') {
                    plusClothesSlidesForWomen(-1);
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
                    plusClothesSlides(-1);
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

                

                console.log('skinInd' + skinIndex);
                console.log('check ' + check)
                if (check === 'true') {
                plusSkinSlidesForWomen(1);
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
                    plusSkinSlides(1);
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
    			
    			if (check === 'true') {
                    plusHairSlidesForWomen(1);
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
                    plusHairSlides(1);
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


              

                if (check === 'true') {
                     plusClothesSlidesForWomen(1);
                	
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
                	  plusClothesSlides(1);
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

    /////////////////////////////////////////////ЗАПИСЬ В ГЛАВНУЮ КАРТУ////////////////////////////////

    let progressBar = document.getElementsByClassName('progress-bar'),
    	resultCount = document.getElementsByClassName('result-count');
    var t = 0;
 
    readyBtn.addEventListener('click', function() {
        if(name.value === '' || age.value=== '' || bio.value === ''){
            alert('Заполните все поля формы!');
            return;
        }

    var candidate = item.cloneNode(true);

       
console.log(t)
        if(t === 0){
            item.parentNode.insertBefore(candidate, item.nextSibling);
            item.classList.remove('main-cards-item-active');
        }
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
        t = 1;
        
    });


    // СБРОСИТЬ РЕЗУЛЬТАТОВ

    let resetBtn = document.getElementById('reset');

    resetBtn.addEventListener('click', function(){
        
        female.checked = false;
        male.checked = true;


    	// clickBtn= 1;
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

            pesronSkin.style.background = 'url("./img/skin/skin-1.png") center no-repeat';
            pesronSkin.style.backgroundSize = 'cover';
            personHair.style.background = 'url("./img/hair/construct/hair-1.png") center no-repeat';
            personHair.style.backgroundSize = 'cover';
            personClothes.style.background = 'url("./img/clothes/construct/clothes-1.png") center no-repeat';
            personClothes.style.backgroundSize = 'cover';
            currentSlide(1);


        }, 200);
    });


// ЧЕСТНОЕ ГОЛОСОВАНИЕ/////////////////////////////////////////////////////////////////////////
function random(num){
    res = Math.floor(Math.random()*num) +1;
    return res;
}
let voting = document.getElementById('voting');


	voting.addEventListener('click', function(){
		var max= 75,
			summ = 0,
			randomSumm = 0,
            res = 0,
            res2 = 0,
            res_2 = 0,
			arr = [],
            mas = [];


			

                var res_1 = random(74);
                  res2 = 100 - res_1;
          
                    var t = 0;
                    res_2 = random(res2);
                     t = res_1+res_2;
                    var res_3 = 100-(t);
			arr.push(res_1,res_2,res_3);
            console.log('ARR +++++' +arr)
            
		for(let i = 0; i < progressBar.length; i++){

    		resultCount[i].innerHTML = arr[i]  + ' %';
    		var result = parseInt(resultCount[i].textContent);
           
    		progressBar[i].style.height = (result*1.6) + 'px';
            var max = Math.max.apply(null, arr);
            if(arr[i]=== max){
                card[i].classList.add('main-cards-item-active');

            }
            else{
                card[i].classList.remove('main-cards-item-active');
            }

        }

	});


	
	
console.log('res'+resultCount[0].textContent)


// ВМЕШАТЬСЯ В ВЫБОРЫ/////////////////////////////////////////////////////////////////////////
let card = document.getElementsByClassName('main-cards-item');
let crime = document.getElementById('crime');
	// clickBtn = 1;

	

	crime.addEventListener('click', function(){
        // console.log('clickBtn ' + clickBtn);
		// if(clickBtn ===1){
            var max= 75,
            summ2 = 0,
            randomSumm2 = 0,
            result = 0,
            result2 = 0,
            result_2 = 0,
            arr2 = [];


            

                var result_1 = 25+random(74);
                console.log('RES1      ++++' +result_1)
                  result2 = 100 - result_1;
          
                    var t = 0;
                    result_2 = random(result2);
                     t = result_1+result_2;
                    var result_3 = 100-(t);
                    if(result_3 === 0){
                        return
                    }
            arr2.push(result_1,result_2,result_3);

            console.log('RES1      ++++' +arr2)
        for(let i = 0; i < progressBar.length; i++){

            resultCount[i].innerHTML = arr2[i]  + ' %';
            var result3 = parseInt(resultCount[i].textContent);
           
            progressBar[i].style.height = (result3 * 1.6) + 'px';
            var max = Math.max.apply(null, arr2);
            if(arr2[i]=== max){
                card[i].classList.add('main-cards-item-active');

            }
            else{
                card[i].classList.remove('main-cards-item-active');
            }

        }
			// var result_1 = parseInt(resultCount[0].textContent)+25,
			// 	result_2 = parseInt(resultCount[1].textContent),
   //              result_3 = parseInt(resultCount[2].textContent),
   //              random_1 = random(25),
   //              random_2 = 25 - random_1;
   //              if(result_2-random_1 < 0){
   //                  result_3 -=random_1;
   //              }
   //              else if(result_2-random_1 > 0){
   //                  result_2 -=random_1;
   //              }
   //              if(result_3-random_2 < 0){
   //                  result_2 -=random_2;
   //              }
                
   //              else if(result_3-random_2 > 0){
   //                 result_3 -=random_2; 
   //              }
   //              arr2.push(result_1, result_2, result_3);

   //              for(let i = 0; i < progressBar.length; i++){

   //          resultCount[i].innerHTML = arr2[i]  + ' %';
   //          var result = parseInt(resultCount[i].textContent);
           
   //          progressBar[i].style.height = (result*1.6) + 'px';
   //          var max = Math.max.apply(null, arr2);
   //          if(arr2[i]=== max){
   //              card[i].classList.add('main-cards-item-active');

   //          }
   //          else{
   //              card[i].classList.remove('main-cards-item-active');
   //          }

   //      }      progressBar[2].style.height = (result_3*1.6) + 'px';
            
    		// clickBtn = 0;
    	
    // }
    // else{
    // 	return false;
    // }

	});

});