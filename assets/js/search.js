document.addEventListener("DOMContentLoaded", function () {
  const pages = [
    { title: "House Ghostwind", url: "/houses/house-ghostwind.html", content: "Freedom shadows assassination" },
    { title: "Catfolk", url: "/races/catfolk.html", content: "Nine lives dexterity agility" },
    { title: "Multiclassing", url: "/rules/multiclassing.html", content: "Racial bonuses do not transfer" }
  ];

  const idx = lunr(function () {
    this.ref("url");
    this.field("title");
    this.field("content");

    pages.forEach(function (doc) {
      this.add(doc);
    }, this);
  });

  const searchBox = document.getElementById("searchBox");
  const resultsDiv = document.getElementById("searchResults");

  searchBox.addEventListener("input", function () {
    const query = this.value;
    resultsDiv.innerHTML = "";

    if (query.length > 2) {
      const results = idx.search(query);
      results.forEach(function (result) {
        const match = pages.find(p => p.url === result.ref);
        const link = document.createElement("a");
        link.href = match.url;
        link.textContent = match.title;
        resultsDiv.appendChild(link);
        resultsDiv.appendChild(document.createElement("br"));
      });
    }
  });
});
