import Splide from "@splidejs/splide";
// splideType starts
var splideType = new Splide(".splideType", {
  type: "loop",
  perPage: 3,
  perMove: 1,
  pagination: false,
  breakpoints: {
    0: {
      perPage: 1,
    },
    750: {
      perPage: 1,
    },
    1440: {
      perPage: 3,
    },
  },
});

splideType.mount();
// splideType end
