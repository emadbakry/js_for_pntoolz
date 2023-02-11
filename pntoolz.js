console.log('hello, I am js')





function ALLCODES() {
  try {
    // start if location, to apply styles for homepage only
    if (
      location.href == "https://pntoolz.com/" ||
      location.href ==
        "http://127.0.0.1:5500/%D8%A8%D9%80%D9%86%D9%80%D8%AA%D9%80%D9%88%D9%84.html" ||
      true
    ) {
      const icons = document.querySelectorAll(".gallery-section .gallery-item");
      //   const products_div = document.querySelectorAll(
      //     "section .products-listing"
      //   );
      window.addEventListener("scroll", () => scroll_effect());
      function scroll_effect() {
        icons.forEach((e) => {
          e.getBoundingClientRect().top <= window.innerHeight - 300
            ? e.parentElement.parentElement.classList.add("scrolled")
            : e.parentElement.parentElement.classList.remove("scrolled");
        });
        // products_div.forEach((e) => {
        //   e.getBoundingClientRect().top <= window.innerHeight - 400
        //     ? e.classList.add("scrolled")
        //     : e.classList.remove("scrolled");
        // });
      }
      // run on time before scroll, to correct first banner
      scroll_effect();
    } // End if location
  } catch (e) {
    console.log(`Error,
        

      reason:${e}`);
  } // End catch

  test2 = performance.now();
  console.log(`time to excute Emad's code:
  
  ${test2 - test1} `);
} // End of Codes, please dont remove or play with the below codes
var test2 = 55;
var test1 = 99;
setTimeout(() => {
  if (document.readyState === "loading") {
    // Loading hasn't finished yet
    test1 = performance.now();
    document.addEventListener("DOMContentLoaded", ALLCODES);
  } else {
    // `DOMContentLoaded` has already fired
    ALLCODES();
  }
}, 0);




