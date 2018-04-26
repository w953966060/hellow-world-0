       var i = 0;

       function lb() {
       	var oimg = document.getElementById("bg");
       	i++;
       	if(i == 9) {
       		i = 1;
       	}
       	oimg.style.backgroundImage = "url(img/00" + i + ".jpg)";
       	setTimeout("lb()", 3000);
       }