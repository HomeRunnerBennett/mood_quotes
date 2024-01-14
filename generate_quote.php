<?php
// Retrieve mood from POST request
$mood = $_POST['mood'];

// Generate a cheerful quote incorporating the mood words
$quote = "Remember, even when you're feeling " . $mood . ", there's always something to smile about. Keep your head up and focus on the good things in life!";

// Consider using a quotes API or database for more variety

// Output the generated quote
echo $quote;
?>
