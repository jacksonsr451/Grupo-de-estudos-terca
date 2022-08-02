$(document).ready(function(){
    $(function(){
        $("#header").load("partials/header.html"); 
    });
    
    $(function(){
        $("#aside").load("partials/aside.html"); 
    });
    
    $(function(){
        $("#footer").load("partials/footer.html"); 
    });

    $("#home-logo").click(function(){
          
        $(function(){
            $("#container").load("pages/home.html"); 
        });
    })
    $("#home-header").click(function(){
          
        $(function(){
            $("#container").load("pages/home.html"); 
        });
    })
    $("#about-header").click(function(){
          
        $(function(){
            $("#container").load("pages/about.html"); 
        });
    })
    $("#images-header").click(function(){
        $(function(){
            $("#container").load("pages/images.html"); 
        });
    })
});