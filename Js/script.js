$(document).ready(function () {
  $(".clipboard").click(function () {
    var tooltip = $(this).next(".tooltiptext");
    tooltip.css({
      visibility: "visible",
      opacity: "1",
    });

    var command = $(this).siblings(".commandtext").find("code").text();
    copyToClipboard(command);

    // Set opacity to 0 after 2 seconds
    setTimeout(() => {
      tooltip.css("opacity", "0");
    }, 3000);
  });

  $(".showgit").click(function () {
    $(".github").show();
    $(".magento").hide();
    $(".jquery").hide();
  });

  $(".showmagento").click(function () {
    $(".magento").show();
    $(".github").hide();
    $(".jquery").hide();
  });

  $(".showjquery").click(function () {
    $(".jquery").show();
    $(".magento").hide();
    $(".github").hide();
  });

  function copyToClipboard(text) {
    var $temp = $("<textarea>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // Tooltip
  $(".clipboard").hover(
    function () {
      $(this).siblings(".tooltiptext").css("visibility", "visible");
    },
    function () {
      $(this).siblings(".tooltiptext").css("visibility", "hidden");
    }
  );

  // Get current date
  var currentDate = new Date();

  // Array of month names
  var monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Get day, month, and year
  var day = currentDate.getDate();
  var monthIndex = currentDate.getMonth();
  var year = currentDate.getFullYear();

  // Format the date
  var formattedDate = day + "-" + monthNames[monthIndex] + "-" + year;

  $(".gitbranchname").text("git branch " + formattedDate);

  $("#scrollToTopBtn").click(function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });

  // Show scroll-to-top button when user scrolls down 20px from the top of the document
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("scrollToTopBtn").style.display = "block";
    } else {
      document.getElementById("scrollToTopBtn").style.display = "none";
    }
  }
});
