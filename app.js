
var scores, roundScore, activePlayer, dice , gamePlaying;

 init();
// function made below not to repeat the code
// scores = [0,0];
// roundScore = 0;
// activePlayer = 0;




    

    document.querySelector('.btn-roll').addEventListener('click',function(){

        if(gamePlaying){

        
        // 1. logic for generating random number 
        var dice = Math.floor(Math.random()*6)+1;
        //2. Display the result in image file.
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + dice + '.png';
        //3. update round score if rolled score not 1 

            if(dice !== 1){
                //add score to current score if on one is repeated
                roundScore += dice; 
                document.querySelector('#current-' + activePlayer).textContent = roundScore;
            }

            else{
                //switch to next player
                nextPlayer();
                //use of ternery operator
                // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                // roundScore = 0;

                // document.getElementById('current-0').textContent = '0';
                // document.getElementById('current-1').textContent = '0';

                // // document.querySelector('.player-0-panel').classList.remove('active');
                // // document.querySelector('.player-1-panel').classList.add('active');

                // document.querySelector('.player-0-panel').classList.toggle('active');
                // document.querySelector('.player-1-panel').classList.toggle('active');
 
                // document.querySelector('.dice').style.display = 'none';

                 }



        }
 });

        document.querySelector('.btn-hold').addEventListener('click',function(){
            if(gamePlaying){
                
                
                //add current score to global score
                scores[activePlayer] += roundScore;
                
                //update in user interface panel
                    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
                
                // Checks if player won the game 
            
        if(scores[activePlayer]>= 50){
            document.querySelector('#name-' + activePlayer).textContent = 'winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
            
        } else {
            //next player
            nextPlayer();
    
        }
    
    
                //next player switch
    
             
                // avoiding function repeatation by defining the function below
    
                //  //use of ternery operator
                //  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
                //  roundScore = 0;
    
                //  document.getElementById('current-0').textContent = '0';
                //  document.getElementById('current-1').textContent = '0';
    
                //  // document.querySelector('.player-0-panel').classList.remove('active');
                //  // document.querySelector('.player-1-panel').classList.add('active');
    
                //  document.querySelector('.player-0-panel').classList.toggle('active');
                //  document.querySelector('.player-1-panel').classList.toggle('active');
    
                //  document.querySelector('.dice').style.display = 'none';
          }
        });


            function nextPlayer(){

             activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
             roundScore = 0;

             document.getElementById('current-0').textContent = '0';
             document.getElementById('current-1').textContent = '0';

             // document.querySelector('.player-0-panel').classList.remove('active');
             // document.querySelector('.player-1-panel').classList.add('active');

             document.querySelector('.player-0-panel').classList.toggle('active');
             document.querySelector('.player-1-panel').classList.toggle('active');

             document.querySelector('.dice').style.display = 'none';


            }

    document.querySelector('.btn-new').addEventListener('click', init);

   
        
    
        function init(){
            scores = [0,0];
            activePlayer = 0;
            roundScore = 0;
            gamePlaying = true;

            document.querySelector('.dice').style.display = 'none';

            document.getElementById('score-0').textContent = '0';
            document.getElementById('score-1').textContent = '0';
            document.getElementById('current-0').textContent = '0';
            document.getElementById('current-1').textContent = '0';
            document.getElementById('name-0').textContent = 'player 1';
            document.getElementById('name-1').textContent = 'player 2';

            document.querySelector('.player-0-panel').classList.remove('winner');
            document.querySelector('.player-1-panel').classList.remove('winner');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.add('active');


        };


    //  dice = Math.floor(Math.random()*6)+1;

    //  document.querySelector('#current-'+ activePlayer).textContent = dice;

    // var x = document.querySelector('#score-0').textContent;
    // console.log(x);



    
   
