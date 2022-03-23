$(function(){
    $('#button1').click(function(){
		$("#special").css("background-color","maroon");
        $(".highlight").css("background-color","gold");
        $(".animation").css({"background-color": "black", "border":"5px solid gold", "color": "white","position": "absolute","height":"70px","width":"70px","display":"block"})
        $("p").each(function(){
            $("p").css({"background-color": "black", "border":"5px solid gold", "color": "white"});
            alert($(this).text())
        });
	});
    $('#hide').click(function(){
        $("img").hide();
    });
    $('#show').click(function(){
        $("img").show();
    });
    $('#fade').click(function(){
        $("img").fadeOut("slow");
    });
    let x=0;
    $('#animate').click(function() {
    		// animate the div
            if(x%2==0){
			$(".animation").animate({
            left: '300px',
            opacity: '0.1',
            height: '90px',
            width: '90px' });   
            }
            if(x%2!=0){
            $(".animation").animate({
            left: '300px',
            opacity: '0.5',
            height: '55px',
            width: '55px' });   
            }  
         x+=1;
    });

    $("input").focus(function(){
        $(this).css("background-color", "#cccccc");
    });
    $("input").blur(function(){
       if($(this).val()==""){
        $(this).css("background-color", "yellow");
        alert("Please enter a value");
       }
       else if($("#uname").val()!="" && $("#pword").val()!=""){
           $("#demo").html("Username: "+$("#uname").val() +"<br> Password: " + $("#pword").val());
       }
    });

});