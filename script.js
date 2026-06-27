// ShopVerse JavaScript

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".card button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const product = button.parentElement.querySelector("h3").innerText;
      const price = button.parentElement.querySelector("p").innerText;

      const message =
        `Hello ShopVerse!%0A%0AI want to order:%0A${product}%0APrice: ${price}`;

      // Instagram profile
      window.open("https://instagram.com/ShopVerse08", "_blank");

      alert("Thanks for your interest!\nPlease message us on Instagram to place your order.");
    });
  });
});
