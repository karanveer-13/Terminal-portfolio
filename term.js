var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('head')[0].appendChild(script);

function focus_input() {
    document.getElementById("input").focus();
}
 var i = document.getElementById("input");

function cpy(){
    navigator.clipboard.writeText("karanveermalik13@gmail.com");
} 

n =  new Date();
y = n.getFullYear();
m = n.getMonth() + 1;
d = n.getDate();
document.getElementById("date").innerHTML ="Today is, " + m + "/" + d + "/" + y;
var c = "<a href='https://github.com/karanveer-13'>GitHub</a> <a href='https://www.linkedin.com/in/karanveer-malik-596075275/'>LinkedIn</a><br> karanveermalik13@gmail.com <img id='copyimg' src='copy.png' onclick='cpy()'><br>8791236323</br>"; 
var ki = "It symbolizes my commitment to perfection and my enthusiasm for developing influential answers. Created with a simple and sleek design influenced by CLI, Terminal Portfolio provides visitors with a one-of-a-kind opportunity to discover my profile. This endeavor showcases my dedication to constantly learning and my proficiency in staying updated on new technologies. My goal in creating Terminal Portfolio is to showcase my skills in web development, user experience design, and project management. Additionally, it acts as proof of my ingenuity and focus on specifics. With Terminal Portfolio, I encourage you to explore my path, uncover my successes, and delve into the scope of my abilities. It not only displays my professional accomplishments but also shows my passion for technology and innovation.<br><br>";
 i.addEventListener("keypress", function(event) {
    if(event.key === "Enter")
    {
        event.preventDefault();
        var k = i.value;
        $("#text").append(">>"+k);
        if(k==="help" || k==="ls")
        {
            $("#text").append("<p><b>bio</b> &emsp;&emsp;     show my bio information</p><p><b>skills</b> &emsp;&emsp;   list all of my skills</p><p><b>contact</b> &emsp; list of all contacts</p><p><b>about</b> &emsp;&emsp;   to see what is terminal portfolio</p><p><b>cls</b> &emsp;&emsp;&emsp;    to clear screen</p><br>");
        }
        else if(k==="bio")
        {
            $("#text").append("<br><img id='me' src='Diwali_2021-19 (1).jpg'></img><br><small><small>Joined the world 20 years ago</small></small><p>Hello I am B.Tech IT student at VIT Vellore. Passionate about web development and filled</p><p> with curiosity about new things realted to coding.</p><br>");
        }
        else if(k==="skills")
        {
            $("#text").append("<p>Programming Languages: JavaScript, Python, Java, C, C++</p><p>Web and Database: Html, CSS, MySQL, SQLPlus, MongoDB</p><p>Frameworks: Bootstrap, Node JS, React JS, React Native</p><p>Technologies: Git, VSCode, MS Office</p><p>Languages: English, Hindi, Japanese</p><br>");
        }
        else if(k==="cls")
        {
            document.getElementById("text").innerHTML = "";
        }   
        else if(k==="about")
        {
            $("#text").append("<br>Terminal Portfolio is a project crafted to showcase my professional skills and accomplishments in an innovative and interactive manner."+ki);
        }  
        else if(k==="contact")
        {
            $("#text").append("<br>"+c+"<br>");
        }  
        else
        {
            $("#text").append("<p>>>not a valid command</p> <br>");
        }

        i.value = "";
    }
    document.getElementById("win").scrollTop = document.getElementById("win").scrollHeight;
 });

//  $(document).ready(function(){
//     $(".container").draggable({
//         handle: ".topbar"
//     });
// });
