// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
	$(".change-devoured").on("click", function (event) {
		var id = $(this).data("id");
		// Send the PUT request.
		$.ajax("/api/burgers/" + id, {
			type: "PUT"
		}).then(function () {
			console.log("changed devoured status to true");
			// Reload the page to get the updated list
			location.reload();
		});
	});
});