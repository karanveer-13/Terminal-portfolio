var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.7.1.min.js';
document.getElementsByTagName('body')[0].append(script);

function focus_input() {
    document.getElementById("input").focus();
}
 var i = document.getElementById("input");

function cpy(){
    navigator.clipboard.writeText("karanveermalik13@gmail.com");
} 

const validCommands = ['help', 'bio', 'skills', 'contact', 'about', 'cls'];


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
            var s = suggestCommand(k);
            if (s) {
                $("#text").append('<p>Did you mean '+s+' ?</p>');
            } else {
                $("#text").append("<p>>>not a valid command</p> <br>");
            }
        }

        i.value = "";
    }
    document.getElementById("win").scrollTop = document.getElementById("win").scrollHeight;
 });

 dragElement(document.getElementsByClassName("container"));
 function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var topbars = document.getElementsByClassName("topbar");
    for (var i = 0; i < topbars.length; i++) {
        topbars[i].onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        for (var i = 0; i < elmnt.length; i++) {
            elmnt[i].style.top = (elmnt[i].offsetTop - pos2) + "px";
            elmnt[i].style.left = (elmnt[i].offsetLeft - pos1) + "px";
        }
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

function suggestCommand(command) {
    let minDistance = Infinity;
    let closestCommand = '';

    // Calculate the Levenshtein distance for each command
    validCommands.forEach(validCommand => {
        const distance = levenshteinDistance(command.toLowerCase(), validCommand.toLowerCase());
        if (distance < minDistance) {
            minDistance = distance;
            closestCommand = validCommand;
        }
    });

    // If the closest command is similar enough, suggest it
    if (minDistance <= 2) { // Adjust the threshold as needed
        return closestCommand;
    } else {
        return null; // No suggestion found
    }
}

// Function to calculate the Levenshtein distance between two strings
function levenshteinDistance(a, b) {
    if (a.length === 0) return b.length;
    if (b.length === 0) return a.length;

    const matrix = [];

    // Initialize the matrix
    for (let i = 0; i <= b.length; i++) {
        matrix[i] = [i];
    }

    for (let j = 0; j <= a.length; j++) {
        matrix[0][j] = j;
    }

    // Calculate the distance
    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            if (b.charAt(i - 1) === a.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1, // Substitution
                    matrix[i][j - 1] + 1,     // Insertion
                    matrix[i - 1][j] + 1      // Deletion
                );
            }
        }
    }

    return matrix[b.length][a.length];
}
