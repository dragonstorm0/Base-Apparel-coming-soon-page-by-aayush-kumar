
                // fetching the declared id of forms
                 var email = document.getElementById("email");
                 var message = document.getElementById("errorMessage");
                 var submit = document.getElementById("submitBtn");
                // process to cheak that either email is valid or not
                 function checkEmail() {
                    if (!email.checkValidity()) {
                         email.classList.add("error");
                         message.classList.add("error-message");
                         submit.classList.add("submit");
                         return false;
                         }
                     };
           
            // <!-- script for changing the image when a certain width is paased. -->
           
                const heroImage = document.querySelector(`#hero-img`); //fetched the id of img

               window.onload = swapImage();
               window.addEventListener(`resize`, swapImage);


             function swapImage() {
	               const windowWidth = window.innerWidth;
                    // applying the condition for swapping
	                 if(windowWidth >=900) {
                        //  deploying the code that is to be swapped
		              heroImage.setAttribute(`src`, `images/hero-desktop.jpg`);
	                }	else {
		               heroImage.setAttribute(`src`, `images/hero-mobile.jpg`);
	                 }
                     }

           