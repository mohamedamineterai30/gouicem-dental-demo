// Demo privée : tet7all ghir b lien li fih ?k=<code>. Na77i had l-fichier ki site ywelli réel.
(function () {
  var K = "gdc-d4e9c530";
  try {
    var u = new URL(location.href);
    if (u.searchParams.get("k") === K) {
      localStorage.setItem("acces", K);
      u.searchParams.delete("k");
      history.replaceState(null, "", u.pathname + u.search + u.hash);
    }
    if (localStorage.getItem("acces") !== K) document.documentElement.className = "locked";
  } catch (e) {
    document.documentElement.className = "locked";
  }
})();
