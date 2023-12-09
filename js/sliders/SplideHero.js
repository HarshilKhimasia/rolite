import Splide from "@splidejs/splide";
// splideHero start

const splideHero = new Splide(".splideHero");

splideHero.on("pagination:mounted", function (data) {
  // Add a custom class to the UL element of the pagination
  data.list.classList.add("splide__pagination--custom");

  // Iterate through each pagination item (dot) and set its content to the formatted page number
  data.items.forEach(function (item) {
    // Format the page number with a leading zero if it's a single digit
    item.button.textContent = (item.page + 1).toString().padStart(2, "0");
  });
});

// splideHero end

splideHero.mount();
