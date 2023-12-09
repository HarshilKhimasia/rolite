import Splide from "@splidejs/splide";
// splideFeature start
export default document.addEventListener("DOMContentLoaded", function () {
  new Splide(".splideFeature", {
    type: "loop",
    perPage: 1,
    focus: "center",
    autoplay: true,
    interval: 800000,
    flickMaxPages: 4,
    updateOnMove: true,
    pagination: false,
    padding: "10%",
    throttle: 300,
    breakpoints: {
      0: {
        padding: "0%",
      },
      750: {
        padding: "0%",
      },
      1440: {
        perPage: 1,
        padding: "10%",
      },
    },
  }).mount();
});
// splideFeature end
