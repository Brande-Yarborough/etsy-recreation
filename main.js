(function () {
  "use strict";

  const source = document.getElementById("etsy-item-template").innerHTML;
  const template = Handlebars.compile(source); //gets back function

  const context = {
    results: [
      {
        title:
          "Jake and the Neverland Pirates Baking Cups, Jake and the Neverland Pirates Cupcake Papers, Jake and the Neverland picks",
        price: "2.99",
        image:
          "https://i.etsystatic.com/10142837/r/il/b52411/2996794025/il_fullxfull.2996794025_eo4g.jpg",
      },
      {
        title:
          "Valentine Weekly Planner Sticker Set Planner Stickers Pretty Photo Stickers Erin Condren Happy Planner Cupcake Hearts Love Recollections",

        price: "5.49",

        image:
          "https://i.etsystatic.com/33752473/r/il/68010a/3595863924/il_fullxfull.3595863924_tlqf.jpg",
      },

      {
        title: "Police Mix Collection Stand Up Cake Toppers (12 pack)",
        price: "2.95",
        image:
          "https://i.etsystatic.com/21158344/r/il/00f9f7/2212034670/il_fullxfull.2212034670_5dss.jpg",
      },

      {
        title:
          "Coffee Mug, Ceramic Mugs, Patriotic Mugs, Memorial Day Gifts, Cupcakes, Balloons and Ice Cream Cones Print, 4th of July Gift Ideas",
        price: "17.76",
        image:
          "https://i.etsystatic.com/29880907/r/il/0bf6d4/3843483410/il_fullxfull.3843483410_4gq9.jpg",
      },
      {
        title:
          "Custom Edible Image Cake Topper Your Photo Logo Cupcakes Cookies Cake Strips Personalized",
        price: "5.00",
        image:
          "https://i.etsystatic.com/15970685/r/il/c41d7f/4038351408/il_fullxfull.4038351408_gb0p.jpg",
      },
      {
        title:
          "Pink JUMBO Hearts Natural Colour Cup Cake Valentines Sprinkles Suitable for Vegans Halal Kosher Gluten Dairy Free Mixed Baking Gifts",
        price: "3.99",
        image:
          "https://i.etsystatic.com/13701759/r/il/ebf27c/3155009325/il_fullxfull.3155009325_rks8.jpg",
      },
      {
        title:
          "Winter Dessert Tealights // Set of 4, Whipped tealights, Winter gift set, Tealight sampler set, Cute small candles, Dessert candles,Gift box",
        price: "14.99",
        image:
          "https://i.etsystatic.com/30417522/r/il/1cfc99/4395295833/il_fullxfull.4395295833_1om9.jpg",
      },
      {
        title:
          "Lemony Lemon Sprinkle Mix, Yellow Royal Icing Lemons Birthday Mother\u2019s Day Wedding Cake Sprinkles Jimmies, Cakes Cupcakes, Edible",
        price: "4.25",
        image:
          "https://i.etsystatic.com/20317757/r/il/06bfb0/3619162173/il_fullxfull.3619162173_er80.jpg",
      },
      {
        title:
          "1.5&quot;, 3\u201d wide 1 Yard (3 feet) Minnie Mouse Red Dress with Bear on Grosgrain Ribbon, Character Ribbon, Cut to Size",
        price: "1.98",
        image:
          "https://i.etsystatic.com/36218820/r/il/7c09f4/4075815042/il_fullxfull.4075815042_kkwd.jpg",
      },
      {
        title:
          "Champagne and Glasses Flexible Silicone Mold-for polymer clay, resin, wax, fondant, etc.",
        price: "6.49",
        image:
          "https://i.etsystatic.com/8305136/r/il/fd6a43/1062804089/il_fullxfull.1062804089_gfen.jpg",
      },
      {
        title:
          "12 Dallas Cowboys Football Cupcake Toppers - Cake Toppers also available - Ships Fast!",
        price: "10.00",
        image:
          "https://i.etsystatic.com/20831273/r/il/1a38ce/4261966293/il_fullxfull.4261966293_93ui.jpg",
      },
      {
        title:
          "12 DALLAS COWBOYS Cupcake Rings NFL Cake Toppers for Birthday Party Decoration Craft Supply",
        price: "4.48",
        image:
          "https://i.etsystatic.com/20832114/r/il/154619/2537157462/il_fullxfull.2537157462_qqxg.jpg",
      },
      {
        title:
          "Unicorn Cupcake or Cake Topper SVG, Digital Download, Birthday Topper",
        price: "2.50",
        image:
          "https://i.etsystatic.com/23992730/r/il/e48404/2471399528/il_fullxfull.2471399528_8pbj.jpg",
      },
      {
        title:
          "Blue Gingham Cupcake Wrapper Template & Blue Polka Dot Cupcake Wrapper Template | Cupcake Wrapper Printable Download | 1027 1023 1028 1050",
        price: "8.00",
        image:
          "https://i.etsystatic.com/20131301/r/il/448177/2936445300/il_fullxfull.2936445300_8yvo.jpg",
      },
      {
        title:
          "Puppy Dog Cupcake Toppers | Watercolor Puppy Birthday Printable Cupcake Toppers Download 1027 | Blue Gingham Puppy Party | Snips and Snails",
        price: "8.00",
        image:
          "https://i.etsystatic.com/20131301/r/il/700669/2981895429/il_fullxfull.2981895429_rzjl.jpg",
      },
      {
        title:
          "CUSTOM Baby Name Cookie Biscuit Stamp Fondant Cake Decorating Icing Cupcakes Stencil",
        price: "6.99",
        image:
          "https://i.etsystatic.com/23936522/r/il/415f66/3423455992/il_fullxfull.3423455992_cqje.jpg",
      },
      {
        title:
          "Personalised Cupcake Toppers - Baby Shower- Eucalyptus & Baby Green Theme - Party Topper",
        price: "5.00",
        image:
          "https://i.etsystatic.com/32365862/r/il/a4d65b/4604131523/il_fullxfull.4604131523_tbq9.jpg",
      },
      {
        title: "bee honeycomb hive mold for fondant chocolate candy clay resin",
        price: "6.99",
        image:
          "https://i.etsystatic.com/30146862/r/il/c7b645/3244687775/il_fullxfull.3244687775_qhxh.jpg",
      },
      {
        title:
          "Cupid Cupcakes ~ Cloud Cream Slime ~ Slime Shop ~ Scented Slime ~ Sprinkles ~ Valentine&#39;s Day Gift",
        price: "10.99",
        image:
          "https://i.etsystatic.com/16170918/r/il/4ac01a/4499703356/il_fullxfull.4499703356_x2i4.jpg",
      },
      {
        title:
          "Peter Rabbit Cup Cake Pick Toppers 12 assorted Designs Non Edible Double Sided",
        price: "2.95",
        image:
          "https://i.etsystatic.com/16400144/r/il/e78454/4057577344/il_fullxfull.4057577344_aiu6.jpg",
      },
    ],
  };

  const html = template(context); //function we got back from handlebars.compile. then call function and pass in JS that we want to merge in HTML
  console.log(html);

  document.getElementById("etsy-cards").insertAdjacentHTML("afterbegin", html); //inject hmtl into dom so can see in browser
})();
