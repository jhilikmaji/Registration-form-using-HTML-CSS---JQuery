$(function(){
    $("#fnameErrorMessage").hide();
    $("#lnameErrorMessage").hide();
    $("#dateErrorMessage").hide();
    $("#genderErrorMessage").hide();
    $("#addressErrorMessage").hide();
    $("#emailErrorMessage").hide();
    $("#phoneErrorMessage").hide();
    $("#passwordErrorMessage").hide();
    $("#repasswordErrorMessage").hide();

    var cfname=false;
    var clname=false;
    var cdate=false;
    var cgender=false;
    var caddress=false;
    var cemail=false;
    var cphone=false;
    var cpass=false;
    var crepass=false;


    
    $("#fname").focusout(function(){check_fname();});
    $("#lname").focusout(function(){check_lname();});
    $("#date").focusout(function(){check_date();});
    $("#gender").focusout(function(){check_gender();});
    $("#address").focusout(function(){check_address();});
    $("#email").focusout(function(){check_email();});
    $("#phone").focusout(function(){check_phone();});
    $("#password").focusout(function(){check_password();});
    $("#repassword").focusout(function(){check_repassword();});


    //firstname validation
    function check_fname(){
        var pattern=/^[a-zA-Z]*$/;
        var name= $("#fname").val();
        if(name!=='' )
        {
            if(pattern.test(name)){
                $("#fnameErrorMessage").hide();
                $('#fname').css("border-bottom","2px solid  #99ff99");
            }
            else{
                $("#fnameErrorMessage").html("Should contained only characters");
                $("#fnameErrorMessage").show();
                $('#fname').css("border-bottom","2px solid rgb(253, 29, 29)");
                cfname=true;
                           }
        }
        else
        {
            $("#fnameErrorMessage").html("This field must be filled");
            $("#fnameErrorMessage").show();
            $('#fname').css("border-bottom","2px solid rgb(253, 29, 29)");
            cfname=true;
                   }
        
    }

    //lasttname validation
    function check_lname(){
        var pattern=/^[a-zA-Z]*$/;
        var name= $("#lname").val();
        if(name!=='' )
        {
            if(pattern.test(name)){
                $("#lnameErrorMessage").hide();
                $('#lname').css("border-bottom","2px solid  #99ff99");
            }
            else{
                $("#lnameErrorMessage").html("Should contained only characters");
                $("#lnameErrorMessage").show();
                $('#lname').css("border-bottom","2px solid rgb(253, 29, 29)");
                clname=true;
                           }
        }
        else
        {
            $("#lnameErrorMessage").html("This field must be filled");
            $("#lnameErrorMessage").show();
            $('#lname').css("border-bottom","2px solid rgb(253, 29, 29)");
            clname=true;
        }
        
    }


    //date validation
    
    function check_date(){
        var date=$("#date").val();
        if(date!='')
        {
            $("#dateErrorMessage").hide();
            $('#date').css("border-bottom","2px solid  #99ff99");
        }
        else{
            $("#dateErrorMessage").html("This field must be filled");
            $("#dateErrorMessage").show();
            $('#date').css("border-bottom","2px solid rgb(253, 29, 29)");
            cdate=true;
        }
    }

    //gender validation
  
    function check_gender(){
        var gender=$("#gender").val();
       
        var second=$("#option2").val();
        var third=$("#option3").val();
        var fourth=$("#option4").val();
        if((gender!=second)&&(gender!=third)&&(gender!=fourth))
        {
            $("#genderErrorMessage").html("This field must be filled");
            $("#genderErrorMessage").show();
            $('#gender').css("border-bottom","2px solid rgb(253, 29, 29)");
            cgender=true;
        
        }
        else{
            $("#genderErrorMessage").hide();
            $('#gender').css("border-bottom","2px solid  #99ff99");
        
        }
    }

    //address validation
   
    function check_address(){
        var address=$("#address").val();
        if(address!='')
        {
            $("#addressErrorMessage").hide();
            $('#address').css("border-bottom","2px solid  #99ff99");
        }
        else{
            $("#addressErrorMessage").html("This field must be filled");
            $("#addressErrorMessage").show();
            $('#address').css("border-bottom","2px solid rgb(253, 29, 29)");
            caddress=true;
        
        }
    }

     //email validaton
    
     function check_email(){
         var email=$("#email").val();
         var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
         if(email!='')
         { if(pattern.test(email)){
            $("#emailErrorMessage").hide();
             $('#email').css("border-bottom","2px solid  #99ff99");
        }
        else{
            $("#emailErrorMessage").html("enter valid email");
            $("#emailErrorMessage").show();
            $('#email').css("border-bottom","2px solid rgb(253, 29, 29)");
            cphone=true;
                       }
            
         }
         else{
             $("#emailErrorMessage").html("This field must be filled");
             $("#emailErrorMessage").show();
             $('#email').css("border-bottom","2px solid rgb(253, 29, 29)");
             cemail=true;
         }
     }
 


    //contact no validation
   
    function check_phone(){
        var phone=$("#phone").val();
        var pattern=/^[0-9]{10}$/;
        if(phone!='')
        {
            if(pattern.test(phone)) {
                $("#phoneErrorMessage").hide();
                $('#phone').css("border-bottom","2px solid  #99ff99");
            }
            else{
                $("#phoneErrorMessage").html("only 10 numbers");
                $("#phoneErrorMessage").show();
                $('#phone').css("border-bottom","2px solid rgb(253, 29, 29)");
                cphone=true;
                           }
           
        }
        else{
            $("#phoneErrorMessage").html("This field must be filled");
            $("#phoneErrorMessage").show();
            $('#phone').css("border-bottom","2px solid rgb(253, 29, 29)");
            cphone=true;
        
        }
    }

   //password validation
   function check_password(){
    var password=$("#password").val();
    if(password!='')
    {
        $("#passwordErrorMessage").hide();
        $('#password').css("border-bottom","2px solid  #99ff99");
    }
    else{
        $("#passwordErrorMessage").html("This field must be filled");
        $("#passwordErrorMessage").show();
        $('#password').css("border-bottom","2px solid rgb(253, 29, 29)");
        cpass=true;
       
    }
}

//reenter password
function check_repassword(){
    var repassword=$("#repassword").val();
    var password=$("#password").val();
    if(repassword!='')
    {   if(repassword==password){
        $("#repasswordErrorMessage").hide();
        $('#repassword').css("border-bottom","2px solid  #99ff99");
    }
    else{
        $("#repasswordErrorMessage").html("Password not matched");
        $("#repasswordErrorMessage").show();
        $('#repassword').css("border-bottom","2px solid rgb(253, 29, 29)");
        crepass=true;
    }
        
    }
    else{
        $("#repasswordErrorMessage").html("This field must be filled");
        $("#repasswordErrorMessage").show();
        $('#repassword').css("border-bottom","2px solid rgb(253, 29, 29)");
        crepass=true;
       
    }
}

$("#registrationForm").submit(function(){
    cfname=false;
    clname=false;
    cdate=false;
    cgender=false;
    caddress=false;
    cemail=false;
    cphone=false;
    cpass=false;
    crepass=false;

check_fname();
check_lname();
check_date();
check_gender();
check_address();
check_email();
check_phone();
check_password();
check_repassword();

if( cfname==false && clname==false && cdate==false && cgender==false && caddress==false && cemail==false && cphone==false && cpass==false && crepass==false){
   
        alert("You're Successfully Registered");
       
}
else{
    alert("please fill the form correctly");
}
});

});