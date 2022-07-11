function fetchData() {
  fetch("https://api.covid19api.com/summary")
    .then((res) => {
      if (!res.ok) {
        throw Error("404");
      }
      return res.json();
    })
    .then((data) => {
      console.log(data.Global);
      const today = data.Global;
      // todays

      const newconf = `<p>today's cases: ${today.NewConfirmed.toLocaleString()}</p>`;
      const newdeaf = `<p>today's deaths: ${today.NewDeaths.toLocaleString()}</p>`;
      const totalcases = `<p>total confirmed cases: ${today.TotalConfirmed.toLocaleString()}</p>`;
      const totaldeaths = `<p>total confirmed deaths: ${today.TotalDeaths.toLocaleString()}</p>`;

      var h1 = document.getElementById("app");
      h1.insertAdjacentHTML(
        "afterend",
        `${newconf} ${newdeaf} ${totalcases} ${totaldeaths}`
      );
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
