

            window.addEventListener("keyup", function(event) {
                checkGuess(event.key);
                console.log(event.key);
            });            
           // Create an array of words
            var dog = ["lab", "husky", "greyhound"];
            // var dogImg = ["a.jpg", "b.jpg", "c.jpg"];
            var lives = 10;                
            var word;
            var answerArray;
            var remainingLetters;
            var answerId = document.getElementById("answerArray");
            var livesText = document.getElementById("lives");

            // Reset and start game
            function startGame() {
                lives = 10
                livesText.innerHTML = lives;
            
             // pick a (random) word
                // word = dog[0]
                word = dog[Math.floor(Math.random() * dog.length)]; 
            // Set up the answer array
                answerArray = [];
                for (i = 0; i < word.length; i++) {
                        answerArray[i] = "_";
                }
                answerId.innerHTML = answerArray;
                answerId.innerHTML = answerArray.join(" ");
                remainingLetters = word.length;
                }

            // The game loop
            function checkGuess(guess) {
            if (remainingLetters != 0) {
                for (j = 0; j < word.length; j++) {
                    if (word[j] === guess) {
                        answerArray[j] = guess;
                        remainingLetters--;
                    }
                }
                if (word.includes(guess) == false) {
                    
                    lives--;
                    livesText.innerHTML = lives;
                }
                answerId.innerHTML = answerArray.join(" ");
                if (remainingLetters == 0) {
                    answerId.innerHTML = answerArray.join(" ");
                    document.getElementById("title").innerHTML = "Good job! The answer was " + word;
                   // document.getElementById("imagePlaceHolder").innerHTML = dogImg[0]; //comment from Ed.
                }
                if (lives == 0) {
                    document.getElementById("title").innerHTML = "You lose! Please click to start";
                    remainingLetters == 0;
                }
            }              
        }

        function reset() {
            document.location.reload();
        }