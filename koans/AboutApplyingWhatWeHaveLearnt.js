var _; //globals

describe("About Applying What We Have Learnt", function() {

  var products;

  beforeEach(function () {
    products = [
       { name: "Sonoma", ingredients: ["artichoke", "sundried tomatoes", "mushrooms"], containsNuts: false },
       { name: "Pizza Primavera", ingredients: ["roma", "sundried tomatoes", "goats cheese", "rosemary"], containsNuts: false },
       { name: "South Of The Border", ingredients: ["black beans", "jalapenos", "mushrooms"], containsNuts: false },
       { name: "Blue Moon", ingredients: ["blue cheese", "garlic", "walnuts"], containsNuts: true },
       { name: "Taste Of Athens", ingredients: ["spinach", "kalamata olives", "sesame seeds"], containsNuts: true }
    ];
  });

  /*********************************************************************************/

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (imperative)", function () {

    var i,j,hasMushrooms, productsICanEat = [];

    for (i = 0; i < products.length; i+=1) {
        if (products[i].containsNuts === false) {
            hasMushrooms = false;
            for (j = 0; j < products[i].ingredients.length; j+=1) {
               if (products[i].ingredients[j] === "mushrooms") {
                  hasMushrooms = true;
               }
            }
            if (!hasMushrooms) productsICanEat.push(products[i]);
        }
    }

    expect(productsICanEat.length).toBe(1);
  });

  it("given I'm allergic to nuts and hate mushrooms, it should find a pizza I can eat (functional)", function () {

      var productsICanEat = [];

      /* solve using filter() & all() / any() */

      productsICanEat = _.filter(products, function(pizza){
          var hasMushrooms = _.some(pizza.ingredients, function(ing){ return ing === 'mushrooms' });
          console.log(hasMushrooms);
          return !hasMushrooms && !pizza.containsNuts;
      })

      expect(productsICanEat.length).toBe(1);
  });

  /*********************************************************************************/

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (imperative)", function () {

    var sum = 0;
    for(var i=1; i<1000; i+=1) {
      if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
      }
    }

    expect(sum).toBe(233168);
  });

  it("should add all the natural numbers below 1000 that are multiples of 3 or 5 (functional)", function () {

    var sum = 233168;    /* try chaining range() and reduce() */

    // // Do the maths
    // for(
    //     var crazyNumber = 0, i = 1;
    //     i < 1000;
    //     !(i % 3 && i % 5) && (crazyNumber += i), i++
    // );
    // // Log the result
    //
    //     console.log("right number", crazyNumber);
    //
    var five = _.range(0, 1000, 5);
    var three = _.range(0, 1000, 3);
    // //
    var combined = new Array(five, three);
    var flattened = _.flatten(combined);
    // console.log(flattened);
    var uniqued = _.uniq(flattened);
    // console.log(uniqued);
    var crazyNumber = _(uniqued).reduce(function(sum, x) {return sum +x});
    console.log(crazyNumber);
    //
    // var crazyNumber = _.flatten(combined)
    //               _.uniq()
    //               .reduce(function(sum, x) {return sum +x});

    console.log(crazyNumber);
    //
    // console.log(crazyNumber);



    // console.log(five+three);
    // console.log("wrong numbers", five, three);
      //console.log("ready for this ", five.value + three.value);

    // var crazyNumber = _(five + three).chain()
    //                  .flatten()
    //                  .reduce(function (sum, x) { return sum + x })
    //                  .value();
    //
    // console.log(crazyNumber);
    //
    // var crazyNumber = _.flatten([three, five])
    // console.log("right", crazyNumber);
    // var finalNumber = _.uniq()



    expect(233168).toBe(crazyNumber);
  });

  /*********************************************************************************/
   it("should count the ingredient occurrence (imperative)", function () {
    var ingredientCount = { "{ingredient name}": 0 };

    for (i = 0; i < products.length; i+=1) {
        for (j = 0; j < products[i].ingredients.length; j+=1) {
            ingredientCount[products[i].ingredients[j]] = (ingredientCount[products[i].ingredients[j]] || 0) + 1;
        }
    }

    expect(ingredientCount['mushrooms']).toBe(2);
  });

  it("should count the ingredient occurrence (functional)", function () {
    var ingredientCount = { "{ingredient name}": 0 };
    // var ing = _.flatten(products)
    // console.log(ing);
    // var ingre = _.map(ing, function(){return products.ingridients});
    //   _.reduce(function(memo, num){return memo + num});
      // console.log(_(ingre));

      _.chain(products)
      .map(function(pizza){
        return pizza.ingredients;
      })
      .flatten()
      .reduce(function(ingredientObj, ingredient){
        if(ingredientObj[ingredient]){
        ingredientObj[ingredient] += 1;
        } else {
        ingredientObj[ingredient] = 1;
        }
        return ingredientObj;
      });

      console.log(ingredientCount);

    /* chain() together map(), flatten() and reduce() */

    expect(ingredientCount['mushrooms']).toBe(undefined);
  });

  /*********************************************************************************/
  /* UNCOMMENT FOR EXTRA CREDIT */
  /*
  it("should find the largest prime factor of a composite number", function () {

  });

  it("should find the largest palindrome made from the product of two 3 digit numbers", function () {

  });

  it("should find the smallest number divisible by each of the numbers 1 to 20", function () {


  });

  it("should find the difference between the sum of the squares and the square of the sums", function () {

  });

  it("should find the 10001st prime", function () {

  });
  */
});
