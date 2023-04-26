function axiosQuotes() {
  const url = `https://thesimpsonsquoteapi.glitch.me/quotes`;
  axios
    .get(url)
    .then(function (response) {
      return response.data[0]; // response.data instead of response.json() with fetch
    })
    .then(function (data) {
      console.log("data decoded from JSON:", data);

      // Build a block of HTML
      const quoteHTML = `
      <h4><strong>${data.character}</strong></h4>
        <p><strong>${data.quote}</strong></p>
        <img src="${data.image}" />
      `;
      document.querySelector("#quote").innerHTML = quoteHTML;
    });
}

axiosQuotes();
