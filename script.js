$(document).ready(function() {
    $("#submit-button").click(function() {
        var moodText = $("#mood-textbox").val();

        // Validation (ensure some text is entered)
        if (moodText.trim() === "") {
            alert("Please describe your mood before submitting.");
            return;
        }

        $.ajax({
            url: "generate_quote.php",
            type: "POST",
            data: { mood: moodText },
            success: function(response) {
                $("#quote-display").text(response);
            },
            error: function() {
                alert("Error fetching quote. Please try again.");
            }
        });
    });
});
