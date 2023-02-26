var a = async function xys() {
  var returnObj;
  // var obj = document.getElementById("1").value;
  // console.log(obj);
  // var links;
  // var myHeaders = new Headers();
  // myHeaders.append(
  //   "X-RapidAPI-Key",
  //   "debfc8e845mshe875590c876e7d8p1a7054jsnd5aeb9769c0c"
  // );
  // myHeaders.append("X-RapidAPI-Host", "google-search72.p.rapidapi.com");

  // var requestOptions = {
  //   method: "GET",
  //   headers: myHeaders,
  //   redirect: "follow",
  // };

  // await fetch(
  //   "https://google-search72.p.rapidapi.com/search?query=" +
  //     obj +
  //     "&gl=us&lr=en&num=5&start=0&sort=relevance",
  //   requestOptions
  // )
  //   .then((response) => response.json())
  //   .then((success) => (links = success))
  //   .catch((error) => console.log("error", error));
  // console.log(links["status"]);

  var links = {
    status: "success",
    estimatedResultCount: 8710000000,
    items: [
      {
        title: "Value Definition & Meaning - Merriam-Webster",
        htmlTitle: "<b>Value</b> Definition &amp; Meaning - Merriam-Webster",
        link: "https://www.merriam-webster.com/dictionary/value",
        displayLink: "www.merriam-webster.com",
        snippet:
          "noun · 1. : the monetary worth of something : market price · 2. : a fair return or equivalent in goods, services, or money for something exchanged · 3. : relative ...",
        htmlSnippet:
          "noun &middot; 1. : the monetary worth of something : market price &middot; 2. : a fair return or equivalent in goods, services, or money for something exchanged &middot; 3. : relative&nbsp;...",
      },
      {
        title: "Savers: Second Hand Used Clothing Thrift & Vintage Store",
        htmlTitle:
          "Savers: Second Hand Used Clothing Thrift &amp; Vintage Store",
        link: "https://www.savers.com/",
        displayLink: "www.savers.com",
        snippet:
          "Savers · Value Village US · Value Village CA · Village des Valeurs · Savers AU. Shopping in our stores does not support any nonprofit.",
        htmlSnippet:
          "Savers &middot; <b>Value</b> Village US &middot; <b>Value</b> Village CA &middot; Village des Valeurs &middot; Savers AU. Shopping in our stores does not support any nonprofit.",
      },
      {
        title: "Orlando Area Hotels & Resorts | Walt Disney World Resort",
        htmlTitle:
          "Orlando Area Hotels &amp; Resorts | Walt Disney World Resort",
        link: "https://disneyworld.disney.go.com/resorts/",
        displayLink: "disneyworld.disney.go.com",
        snippet:
          "Value Resort Hotels; Campgrounds; Other Select Deluxe Hotels; More Great Accommodations. Clear Filters. Resort Characteristics. Disney Story Rooms",
        htmlSnippet:
          "<b>Value</b> Resort Hotels; Campgrounds; Other Select Deluxe Hotels; More Great Accommodations. Clear Filters. Resort Characteristics. Disney Story Rooms",
      },
      {
        title: "True Value Hardware - Your Local Home Improvement Experts ...",
        htmlTitle:
          "True <b>Value</b> Hardware - Your Local Home Improvement Experts ...",
        link: "https://www.truevalue.com/",
        displayLink: "www.truevalue.com",
        snippet:
          "True Value brings your local hardware store online. Shop now & choose Ship-to-Store for free shipping to your nearest participating True Value store.",
        htmlSnippet:
          "True <b>Value</b> brings your local hardware store online. Shop now &amp; choose Ship-to-Store for free shipping to your nearest participating True <b>Value</b> store.",
      },
      {
        title: "Value Definition & Meaning | Dictionary.com",
        htmlTitle: "<b>Value</b> Definition &amp; Meaning | Dictionary.com",
        link: "https://www.dictionary.com/browse/value",
        displayLink: "www.dictionary.com",
        snippet:
          "value ; relative worth, merit, or importance: the value of a college education; the value of a queen in chess. ; monetary or material worth, as in commerce or ...",
        htmlSnippet:
          "<b>value</b> ; relative worth, merit, or importance: the <b>value</b> of a college education; the <b>value</b> of a queen in chess. ; monetary or material worth, as in commerce or&nbsp;...",
      },
    ],
  };
  var returnObj = [
    links["items"][0]["link"],
    links["items"][1]["link"],
    links["items"][2]["link"],
    links["items"][3]["link"],
    links["items"][4]["link"],
  ];
  console.log(returnObj);
  return returnObj;
};
console.log(a());
var ab = a();
console.log(ab);
var menu = document.getElementById("menu");
var lis = menu.getElementsByTagName("li");

for (var i = 0; i < 5; i++) {
  var li = lis[i];
  console.log("hihi");
  var aTag = document.createElement("a");
  aTag.setAttribute("href", ab[i]);
  aTag.innerText = ab[i];
  li.appendChild(aTag);
  aTag.target = "xyz";
}
