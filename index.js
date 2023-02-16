// important jQuery methods

// $ == jQuery == document.querySelector
// $(".main_heading") selelcts all HTML elements with class main_heading

// .css("property_name", "value")  sets value of property_name
// .css("property_name") returns value of property_name
// .css({"propertyname":"value","propertyname":"value",...});sets values of multiple properties

$("h1").css("color", "red");

// +------------------------------------------------------------------------------------------------------------------------------------+

// $(selector).addClass("class1 class2 class3...")
$("h1").addClass("main_heading cursive"); // adds main_heading and cursive classes to h1 tag

// $(selector).removeClass("class1 class2 class3...")
$("h1").removeClass("cursive"); // removes cursive class from h1 tag

// .hasClass("class_name") returns true or false on whether the class is attached or not to the selected tag

$("h1").hasClass("main_heading");

$("h1").hasClass("cursive");

// +------------------------------------------------------------------------------------------------------------------------------------+

$("button").text(); // returns text of selected elements // returns for all buttons

$("button").text("Don't Click Me"); // sets text of selected elements // sets for all buttons

$("button").html(); // works similar to .innerHTML

$("button").html("<strong>Click Me</strong>");

$("h1").before("<button>Before</button>")
$("h1").after("<button>After</button>")
$("h1").prepend("<button>Prepend</button>")
$("h1").append("<button>Append</button>")
// $("button").remove(); // deletes all selected elements

// +------------------------------------------------------------------------------------------------------------------------------------+

console.log($("a").attr("href")); // returs the value of href

$("a").attr("href", "https://www.bing.com"); // sets the value of href
// note that class is also an attribute

// +------------------------------------------------------------------------------------------------------------------------------------+

// short for addEventListener("click", funcion(){});
// note that the code below adds EventListener to all the buttons
// no need to use any loops
$("button").click(function() {
    $("h1").css("color", "green");
});

$("input").keydown(function(event){
    $("h1").text(event.key);
});

$("button").on("mouseover", function(){
    $("button").css("color", "blue");
});

// +------------------------------------------------------------------------------------------------------------------------------------+

$("h1").slideUp();
$("h1").slideDown();
$("h1").slideToggle();

$("h1").fadeToggle().slideUp().slideDown().animate({opacity: 0.5});

$("button").click(function(){
    $("h1").slideToggle();
});
