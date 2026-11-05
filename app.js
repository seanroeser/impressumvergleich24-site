(function () {
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var fmtNote = function (n) { return n.toFixed(1).replace(".", ","); };

  function gesamtnote(a) {
    var g = window.GEWICHTE, k = a.kriterien, s = 0;
    for (var key in g) s += (k[key] || 0) * g[key];
    return Math.round(s * 10) / 10;
  }
  function label(n) {
    if (n >= 4.4) return "Sehr gut";
    if (n >= 3.7) return "Gut";
    if (n >= 3.0) return "Befriedigend";
    return "Ausreichend";
  }
  function stars(n) {
    return '<span class="stars" aria-label="' + fmtNote(n) + ' von 5 Sternen">★★★★★<i style="width:' + (n / 5 * 100) + '%">★★★★★</i></span>';
  }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]; }); }

  // Menü (mobil)
  var tg = $(".nav-toggle");
  if (tg) tg.addEventListener("click", function () { $(".main-nav").classList.toggle("open"); });

  // FAQ
  var faq = $("#faq-list");
  if (faq && window.FAQ) {
    faq.innerHTML = window.FAQ.map(function (f) {
      return "<details><summary>" + esc(f[0]) + "</summary><p>" + esc(f[1]) + "</p></details>";
    }).join("");
  }

  var table = $("#compare");
  if (!table || !window.ANBIETER) return;

  var data = window.ANBIETER.map(function (a) {
    a._note = gesamtnote(a);
    return a;
  });

  var state = { zweck: "", rechtsform: "", nutzung: "", sort: "note" };

  function filtered() {
    var list = data.filter(function (a) {
      if (state.zweck && a.zwecke.indexOf(state.zweck) < 0) return false;
      if (state.rechtsform && a.rechtsformen.indexOf(state.rechtsform) < 0) return false;
      if (state.nutzung && a.nutzung.indexOf(state.nutzung) < 0) return false;
      return true;
    });
    list.sort(function (a, b) {
      if (state.sort === "preis") return a.preisMonat - b.preisMonat;
      if (state.sort === "name") return a.name.localeCompare(b.name, "de");
      return b._note - a._note;
    });
    return list;
  }

  var rows = [
    ["Anbieter", ""],
    ["Produkt", ""],
    ["Angebot", ""],
    ["Redaktionsnote", "Gewichtet aus Preis, Recht, Service und Standorten"],
    ["Preis", "Monatlicher Einstiegspreis"],
    ["Postservice", ""],
    ["Standorte", ""],
    ["Geeignet für", ""]
  ];

  function cell(a, i, r, best) {
    var c = best ? ' class="best"' : "";
    switch (r) {
      case 0:
        return "<td" + c + '><div class="rank"><span class="' + (i === 0 && state.sort === "note" ? "tag" : "") + '">' +
          (i + 1) + (i === 0 && state.sort === "note" ? " · Bestnote" : "") + '</span></div>' +
          '<div class="logo-tile" style="background:' + a.logo.bg + ";color:" + a.logo.fg + '">' + esc(a.logo.text) + "</div></td>";
      case 1:
        return "<td" + c + '><a class="product-link" href="' + esc(a.link) + '" rel="sponsored noopener" target="_blank">' + esc(a.produkt) + "*</a></td>";
      case 2:
        return "<td" + c + '><a class="cta" href="' + esc(a.link) + '" rel="sponsored noopener" target="_blank">Zum Angebot*</a></td>';
      case 3:
        return "<td" + c + '><div class="note"><b>' + label(a._note) + " <span>(" + fmtNote(a._note) + ")</span></b>" +
          stars(a._note) + "<small>" + esc(window.STAND) + "</small></div></td>";
      case 4:
        var pk = a.kriterien.preis >= 4.4 ? ["sg", "Sehr günstig"] : a.kriterien.preis >= 3.5 ? ["g", "Günstig"] : ["b", "Premium"];
        return "<td" + c + '><span class="badge ' + pk[0] + '">' + pk[1] + '</span><span class="cell-main">' + esc(a.preisText) +
          '</span><span class="cell-sub">' + esc(a.preisHinweis) + "</span></td>";
      case 5:
        return "<td" + c + '><span class="cell-sub" style="color:#dcdde6">' + esc(a.postservice) + "</span></td>";
      case 6:
        return "<td" + c + '><span class="cell-sub" style="color:#dcdde6">' + esc(a.standorte.join(", ")) + "</span></td>";
      case 7:
        return "<td" + c + '><span class="cell-sub" style="color:#dcdde6">' + esc(a.geeignetFuer) + '</span><span class="pill">' + esc(a.bonus.text) + "</span></td>";
    }
  }

  function render() {
    var list = filtered();
    $("#count").textContent = list.length + " Ergebnis" + (list.length === 1 ? "" : "se");
    if (!list.length) {
      table.innerHTML = '<tbody><tr><td class="empty">Keine Anbieter für diese Auswahl gefunden. Passe die Filter an.</td></tr></tbody>';
      return;
    }
    var html = "<colgroup><col style='width:150px'>" + list.map(function () { return "<col style='width:215px'>"; }).join("") + "</colgroup><tbody>";
    rows.forEach(function (row, r) {
      html += '<tr><th class="rowlabel" scope="row">' + (row[1] ? "<u>" + row[0] + "</u>" : row[0]) +
        (row[1] ? '<span class="tip">' + row[1] + "</span>" : "") + "</th>";
      list.forEach(function (a, i) { html += cell(a, i, r, i === 0 && state.sort === "note"); });
      html += "</tr>";
    });
    table.innerHTML = html + "</tbody>";
    $("#range").textContent = "1–" + list.length + " von " + list.length;
  }

  function bind(id, key, ev) {
    var el = $(id);
    el.addEventListener(ev || "change", function () {
      state[key] = el.type === "checkbox" ? el.checked : el.value;
      render();
    });
  }
  bind("#f-zweck", "zweck");
  bind("#f-rechtsform", "rechtsform");
  bind("#f-nutzung", "nutzung");
  bind("#f-sort", "sort");

  $("#f-reset").addEventListener("click", function () {
    state = { zweck: "", rechtsform: "", nutzung: "", sort: "note" };
    ["#f-zweck", "#f-rechtsform", "#f-nutzung"].forEach(function (s) { $(s).value = ""; });
    $("#f-sort").value = "note";
    render();
  });
  $("#f-go").addEventListener("click", function () {
    $("#vergleich").scrollIntoView({ behavior: "smooth" });
  });

  // Pfeile
  var sc = $(".compare-scroll");
  $(".arrow.right").addEventListener("click", function () { sc.scrollBy({ left: 430 }); });
  $(".arrow.left").addEventListener("click", function () { sc.scrollBy({ left: -430 }); });

  var up = $("#updated");
  if (up) up.textContent = "Aktualisiert: " + window.STAND;

  render();
})();
