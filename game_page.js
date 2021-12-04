player1_score=0;
player2_score=0;
player1_name=localStorage.getItem("player1_name");
player2_name=localStorage.getItem("player2_name");
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player1_name").innerHTML=player1_name+":";
document.getElementById("player2_name").innerHTML=player2_name+":";
document.getElementById("player_question").innerHTML="Question Turn - " + player1_name ;
document.getElementById("player_answer").innerHTML="Answer Turn - " + player2_name ;    
function send()
{
    get_word=document.getElementById("word").value;
    word= get_word.toLowerCase();
    c1=word.charAt(1);
    mid=Math.floor(word.length/2);
    c2=word.charAt(mid);
    last=word.length-1;
    c3=word.charAt(last);
    removec1=word.replace(c1,"_");
    removec2=removec1.replace(c2,"_");
    removec3=removec2.replace(c3,"_");
    console.log(removec3);
    question='<h4 id="word_display"> Q.'+removec3+'</h4>';
    box='<br> answer:<input id="input_check_box">';
    check_button='<br><br><button class="btn btn-info" onclick="check()"> Check </button>';
    row=question+box+check_button;
    document.getElementById("output").innerHTML=row;
    document.getElementById("word").value="";
}