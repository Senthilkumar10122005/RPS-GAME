    const rocks =document.getElementById("rock");
    const papers =document.getElementById("paper");
    const scissorss=document.getElementById("scissors");
    const resetscore=document.getElementById("reset");
    const matchresult=document.getElementById("result");
    const  answer=document.getElementById("picked");
    let computer="";
    let result="";

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    loses: 0,
    ties: 0
};

document.getElementById("total").innerText = `wins: ${score.wins}  loses: ${score.loses} ties: ${score.ties}`;    
    function random(){
        const randomnumber = Math.random();
            if (randomnumber <= 1 / 3) 
             {
                computer = 'Rock ✊';
                
            } 
            else if (randomnumber <= 2 / 3)
                 {
                computer = 'Paper 🤚';
               
            } 
            else 
            {
                computer = 'Scissors ✌️';    
               localStorage.setItem('score', JSON.stringify(score));
               }
    }


    function scorepredict(){
        if(result==='You Won😍')
            {
             score.wins += 1;
             document.getElementById("total")
               .innerText=`wins: ${score.wins}  loses: ${score.loses} ties: ${score.ties}`;
            }
           else if(result==='You Lose😞')
             {
              score.loses += 1;
              document.getElementById("total")
               .innerText=`wins: ${score.wins}  loses: ${score.loses} ties: ${score.ties}`;
             }
            else if(result==='Tie😌')
             {
              score.ties += 1;
              document.getElementById("total")
               .innerText=`wins: ${score.wins}  loses: ${score.loses} ties: ${score.ties}`;
             }
       }
        rocks.addEventListener("click", function ()
         {
            random();
            if (computer === 'Rock ✊') 
            {
                result = 'Tie😌';
            } 
            else if (computer === 'Paper 🤚')
             {
                result = 'You Lose😞';
            }
             else if (computer === 'Scissors ✌️') 
            {
                result = 'You Won😍';
            }
            document.getElementById("picked").innerText=` You Picked Rock✊ and Computer Picked ${computer}`;    scorepredict();
            displayresult();
        
            alert(`You picked rock and computer picked ${computer}
 ${result} 
 wins:${score.wins}  loses:${score.loses} ties:${score.ties}`);
        });

        papers.addEventListener("click", function ()
         {
            random();
            if (computer === 'Rock ✊') 
            {
                result = 'You Won😍';
            } 
            else if (computer === 'Paper 🤚')
             {
                result = 'Tie😌';
            }
             else if (computer === 'Scissors ✌️') 
            {
                result = 'You Lose😞';
            }
            document.getElementById("picked").innerText=`You Picked Paper🤚 and computer picked ${computer}`;
            scorepredict();
            displayresult();
        
           alert(`You picked Paper 📄 and computer picked ${computer}
${result}
wins:${score.wins}  loses:${score.loses} ties:${score.ties}`);
        });

        scissorss.addEventListener("click", function ()
        {
           random();
           if (computer === 'Rock ✊') 
           {
               result = 'You Lose😞';
           } 
           else if (computer === 'Paper 🤚')
            {
               result = 'You Won😍';
           }
            else if (computer === 'Scissors ✌️') 
           {
               result = 'Tie😌';
           }
           document.getElementById("picked").innerText=`You picked scissors✌️ and computer picked ${computer}`;
           scorepredict();
           displayresult();
       
           alert(`You picked Scissors ✂️ and computer picked ${computer}
${result}
wins:${score.wins}  loses:${score.loses} ties:${score.ties}`);
       });

resetscore.addEventListener("click", function () {
    matchresult.textContent='RESULT 🤔';
    document.getElementById("picked").innerText="";
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;
    localStorage.setItem('score', JSON.stringify(score));
    document.getElementById("total").innerText = `wins: ${score.wins}  loses: ${score.loses} ties: ${score.ties}`;
});

function displayresult(){
    if(result === 'You Won😍')
        {
            matchresult.innerText="YOU WON🤩";
        } 
        else if(result === 'You Lose😞')
         {
             matchresult.innerText="YOU LOSE😫";
         } 
        else if(result==='Tie😌'){
             matchresult.innerText="TIE😕";
        }
        else{
            matchresult.innerText="RESULT🤔";
        }
        
 
}
const autoplayButton = document.getElementById("autoplay");
let autoplayInterval;

autoplayButton.addEventListener("click", function () {
    if (autoplayButton.textContent === "Start Auto Play") {
        autoplayButton.textContent = "Stop Auto Play";
        autoplayInterval = setInterval(() => {
            const choices = ["rock", "paper", "scissors"];
            const randomChoice = choices[Math.floor(Math.random() * choices.length)];
            document.getElementById(randomChoice).click();
        }, 3000);
    } else {
        autoplayButton.textContent = "Start Auto Play";
        clearInterval(autoplayInterval);
    }
});