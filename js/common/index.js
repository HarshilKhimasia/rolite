export default document.addEventListener("DOMContentLoaded", function () {
  let countingElements = document.querySelectorAll(".counting");
  let options = {
    threshold: 0.5, // Adjust the threshold as needed
  };

  let observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        startIncrement(entry.target);
      } else {
        stopIncrement(entry.target);
      }
    });
  }, options);

  countingElements.forEach(function (element) {
    observer.observe(element);
  });

  function startIncrement(element) {
    let countTarget = parseInt(element.getAttribute("data-count"), 10);
    let count = 0;
    let increment = 1;

    // Adjust the interval duration based on the count target
    let intervalDuration =
      element.getAttribute("data-count") === "125" ? 50 : 100;

    let intervalId = setInterval(function () {
      if (count < countTarget) {
        element.textContent = count;
        count += increment;
      } else {
        clearInterval(intervalId);
        element.textContent = countTarget; // Set the final count
      }
    }, intervalDuration); // Adjust the interval duration (in milliseconds) as needed

    element.intervalId = intervalId; // Store intervalId on the element for future reference
  }

  function stopIncrement(element) {
    if (element.intervalId) {
      clearInterval(element.intervalId);
    }
  }
});
