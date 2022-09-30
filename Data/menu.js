const menu = [
  {
    id: 1,
    name: "Paneer Tikka Masala",
    price: 270,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala.jpg",
    categories: ["Recommended", "Main Course"],
  },
  {
    id: 2,
    name: "Chef Special Veg",
    price: 310,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0e/7a/26/31/chef-special-veg-exotica.jpg",
    categories: ["Recommended", "Main Course"],
  },
  {
    id: 3,
    name: "Veg Shaam Savera",
    price: 300,
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Shaam-Savera-Sanjeev-Kapoor-Kitchen-FoodFood.jpg",
    categories: ["Recommended", "Main Course"],
  },
  {
    id: 4,
    name: "Paneer Pasanda",
    price: 310,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/paneer-pasanda-recipe-500x500.jpg",
    categories: ["Recommended", "Main Course"],
  },
  {
    id: 5,
    name: "Paneer Ball Rangeela",
    price: 300,
    image:
      "https://www.zaykakatadka.com/wp-content/uploads/2017/03/17410425_10155176484558593_1192982162_n.png",
    categories: ["Recommended", "Main Course"],
  },
  {
    id: 6,
    name: "Chapati",
    price: 25,
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chapati-Breads_EXPS_FT20_136906_F_0721_1.jpg",
    categories: ["Recommended", "Breads"],
  },
  {
    id: 7,
    name: "Jeera Rice",
    price: 150,
    image:
      "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
    categories: ["Recommended", "Rice & Biryani"],
  },
  {
    id: 8,
    name: "Dal Khichdi",
    price: 190,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/khichdi-recipe-4-500x500.jpg",
    categories: ["Recommended", "Rice & Biryani"],
  },
  {
    id: 9,
    name: "Dal Khichdi Tadaka",
    price: 170,
    image:
      "https://wp.missmalini.com/wp-content/uploads/2018/09/tadkakhichdi.jpg",
    categories: ["Recommended", "Rice & Biryani"],
  },
  {
    id: 10,
    name: "Veg Biryani",
    price: 220,
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg",
    categories: ["Recommended", "Rice & Biryani"],
  },
  {
    id: 11,
    name: "Paneer Biryani",
    price: 270,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani.jpg",
    categories: ["Recommended", "Rice & Biryani"],
  },
  {
    id: 12,
    name: "Idli Fried",
    price: 80,
    image:
      "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/fried-idli-recipe-step-by-step-instructions.jpg?fit=2485%2C1903&quality=65&strip=all&ssl=1",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 13,
    name: "Butter Idli",
    price: 80,
    image:
      "https://img-global.cpcdn.com/recipes/77aa49b7b62e6a74/680x482cq70/butter-idli-recipe-main-photo.jpg",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 14,
    name: "Masala Dosa",
    price: 130,
    image:
      "https://static.toiimg.com/thumb/54289752.cms?imgsize=495844&width=800&height=800",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 15,
    name: "Paper Masala Dosa",
    price: 170,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 16,
    name: "Rava Masala Dosa",
    price: 130,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1-500x500.jpg",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 17,
    name: "Mysore Masala Dosa",
    price: 150,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-27.jpeg",
    categories: ["Recommended", "South Indian"],
  },
  {
    id: 18,
    name: "Idli Chilli",
    price: 200,
    image:
      "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2019/07/Chilli-Idli-Fry-02.jpg?fit=1024%2C683&ssl=1",
    categories: ["Recommended", "Chinese"],
  },
  {
    id: 19,
    name: "Veg Crispy",
    price: 200,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_veg_crispy,_crispy_fried_vegetables-14684.jpg",
    categories: ["Recommended", "Chinese"],
  },
  {
    id: 20,
    name: "Paneer Crispy",
    price: 220,
    image:
      "https://www.geetakiduniya.com/wp-content/uploads/2021/07/paneer-crispy.jpg",
    categories: ["Recommended", "Chinese"],
  },
  {
    id: 21,
    name: "Paneer Satay",
    price: 260,
    image:
      "https://mytastycurry.com/wp-content/uploads/2020/05/Paneer-Satay-1.jpg",
    categories: ["Recommended", "Chinese"],
  },
  {
    id: 22,
    name: "Veg Fried Rice",
    price: 190,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg",
    categories: ["Recommended", "Fried Rice and Noodles"],
  },
  {
    id: 23,
    name: "Veg Schezwan Fried Rice",
    price: 210,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe.jpg",
    categories: ["Recommended", "Fried Rice and Noodles"],
  },
  {
    id: 24,
    name: "Triple Schezwan Rice",
    price: 270,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/schezwan-rice-recipe-triple-schezwan-fried-rice-triple-schezwan-rice-27.jpeg",
    categories: ["Recommended", "Fried Rice and Noodles"],
  },
  {
    id: 25,
    name: "Butter Pav Bhaji [ 350 gms 2 pav]",
    price: 150,
    image:
      "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Best-Mumbai-Pav-Bhaji-Recipe-Pressure-Cooker.jpg",
    categories: ["Recommended", "Pav Bhaji"],
  },
  {
    id: 26,
    name: "Khada Pav Bhaji",
    price: 160,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_khada_pav_bhaji,_restaurant_style_pav_bhaji-15105.jpg",
    categories: ["Recommended", "Pav Bhaji"],
  },
  {
    id: 27,
    name: "Paneer Pav Bhaji",
    price: 160,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/11/paneer-pav-bhaji-recipe-pav-bhaji-paneer-paneer-pav-recipe-1.jpeg",
    categories: ["Recommended", "Pav Bhaji"],
  },
  {
    id: 28,
    name: "Comida Special Pav Bhaji",
    price: 210,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe.jpg",
    categories: ["Recommended", "Pav Bhaji"],
  },
  {
    id: 29,
    name: "Royal Falooda",
    price: 150,
    image:
      "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
    categories: ["Recommended", "Desserts & Beverages"],
  },
  {
    id: 30,
    name: "Dry Fruit Falooda",
    price: 160,
    image:
      "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
    categories: ["Recommended", "Desserts & Beverages"],
  },
  {
    id: 31,
    name: "Fresh Lime Soda",
    price: 100,
    image:
      "https://www.seriouseats.com/thmb/T_OlO5KsET8FzpEfM2e80o2ulm8=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg",
    categories: ["Recommended", "Desserts & Beverages"],
  },
  {
    id: 32,
    name: "Fresh Lime Water",
    price: 100,
    image:
      "https://cdn.healthyrecipes101.com/wp-content/uploads/2020/02/lime-water-recipe.jpeg",
    categories: ["Recommended", "Desserts & Beverages"],
  },
  {
    id: 33,
    name: "Pav Bhaji + Paneer Fried Rice + Paneer Chilli Dry",
    price: 510,
    image: "https://i.ytimg.com/vi/G7LGfiTn2HI/maxresdefault.jpg",
    categories: ["Combos"],
  },
  {
    id: 34,
    name: "Paneer Crispy + Hyderabadi Biryani",
    price: 400,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
    categories: ["Combos"],
  },
  {
    id: 35,
    name: "2 Veg Spring Roll + Triple Schezwan Rice",
    price: 540,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_triple_schezuan_rice_(_mumbai_roadside_recipes_)-14115.jpg?size=0X0",
    categories: ["Combos"],
  },
  {
    id: 36,
    name: "Manchurian Fried Rice + Veg Schezwan Noodles + Boondi Raita",
    price: 490,
    image:
      "https://ranveerbrar.com/wp-content/uploads/2021/02/Triple-Schezwan-Rice-scaled.jpg",
    categories: ["Combos"],
  },
  {
    id: 37,
    name: "Paneer Biryani + Hong Kong Noodles",
    price: 440,
    image:
      "https://aaradhyachinesecorner.com/wp-content/uploads/2021/09/paneer-hong-kong-noodles-800x800.jpg",
    categories: ["Combos"],
  },
  {
    id: 38,
    name: "8'' Executive Italian Pizza",
    price: 250,
    image:
      "https://artoflivingontheroad.files.wordpress.com/2020/05/pizza-in-italy-vs-america.jpg?w=1200",
    categories: ["Pizza"],
  },
  {
    id: 39,
    name: "8'' Farm House Pizza",
    price: 250,
    image: "https://www.dominos.co.in//files/items/Farmhouse.jpg",
    categories: ["Pizza"],
  },
  {
    id: 40,
    name: "8'' Veg Assorted Pizza",
    price: 270,
    image: "https://static.toiimg.com/thumb/53351352.cms?width=1200&height=900",
    categories: ["Pizza"],
  },
  {
    id: 41,
    name: "8'' Lovely Pizza",
    price: 280,
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/0f/27/0b/86/getlstd-property-photo.jpg",
    categories: ["Pizza"],
  },
  {
    id: 42,
    name: "8'' Indian Spicy Pizza",
    price: 230,
    image: "https://i.ytimg.com/vi/jy0T2pGBv2s/maxresdefault.jpg",
    categories: ["Pizza"],
  },
  {
    id: 43,
    name: "8'' Garlic Bread Pizza",
    price: 150,
    image:
      "https://midwestfoodieblog.com/wp-content/uploads/2021/11/FINAL-garlic-bread-pizza-1-3-1200x1800.jpg",
    categories: ["Pizza"],
  },
  {
    id: 44,
    name: "8'' Veg Cheese Pizza",
    price: 210,
    image:
      "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800",
    categories: ["Pizza"],
  },
  {
    id: 45,
    name: "8'' Margherita Pizza",
    price: 200,
    image: "https://static.toiimg.com/photo/56868564.cms",
    categories: ["Pizza"],
  },
  {
    id: 46,
    name: "8'' Paneer Cheese Pizza",
    price: 220,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg",
    categories: ["Pizza"],
  },
  {
    id: 47,
    name: "8'' Italian Treat Pizza",
    price: 210,
    image:
      "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/103/101/large/Pinsere-copy.jpg?1485308544",
    categories: ["Pizza"],
  },
  {
    id: 48,
    name: "Manchow Soup",
    price: 150,
    image:
      "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 49,
    name: "Cream Of Tomato Soup",
    price: 160,
    image:
      "https://www.asweetpeachef.com/wp-content/uploads/2015/01/easy-soup-recipes-cream-of-fresh-tomato-soup.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 50,
    name: "Cream Of Palak Soup",
    price: 160,
    image:
      "https://www.simplyrecipes.com/thmb/wESegBJXEupSdlPizooGRENtRL0=/5348x4011/smart/filters:no_upscale()/Simply-Recipes-Cream-Of-Spinach-LEAD-15-4c25d56a9c48478283724926705517ce.JPG",
    categories: ["Soups & Salads"],
  },
  {
    id: 51,
    name: "Cream Of Mushroom Soup",
    price: 170,
    image:
      "https://cafedelites.com/wp-content/uploads/2018/11/Cream-of-Mushroom-Soup-IMAGE-135.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 52,
    name: "Sweet Com Soup",
    price: 150,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup-recipe.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 53,
    name: "Sweet Corn Mushroom Soup",
    price: 170,
    image:
      "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2020/11/Creamy-Mushroom-and-Sweet-Corn-Soup.jpg?fit=1600%2C1067&ssl=1",
    categories: ["Soups & Salads"],
  },
  {
    id: 54,
    name: "Clear Soup",
    price: 150,
    image:
      "https://www.aspicyperspective.com/wp-content/uploads/2019/02/japanese-clear-soup-recipe-12.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 55,
    name: "Lemon Coriander Soup",
    price: 160,
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2021/01/lemon-coriander-soup.webp",
    categories: ["Soups & Salads"],
  },
  {
    id: 56,
    name: "Noodle Soup",
    price: 160,
    image:
      "https://www.errenskitchen.com/wp-content/uploads/2018/08/Quick-Easy-Chinese-Noodle-Soup1200.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 57,
    name: "Pineapple Soup",
    price: 170,
    image:
      "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/07/30/Food/Images/PlateLab_0803_ColdPineappleSoup_crop.jpg?t=20170517",
    categories: ["Soups & Salads"],
  },
  {
    id: 58,
    name: "Tomato Coriander Shorba",
    price: 170,
    image:
      "https://vismaifood.com/storage/app/uploads/public/5a0/eb4/375/thumb__700_0_0_0_auto.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 59,
    name: "Dal Coriander Shorba",
    price: 170,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandhini/Dal_Shorba_Yellow_Moong_Dal_Soup.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 60,
    name: "Greek Salad",
    price: 160,
    image:
      "https://www.simplyrecipes.com/thmb/au60mVTA5EPLLknjdtQ9BYO0OC4=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 61,
    name: "Caesar Salad",
    price: 160,
    image:
      "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 62,
    name: "American Pasta Salad",
    price: 200,
    image:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/0/FNK_macaroni-salad_s4x3.jpg.rend.hgtvcom.406.305.suffix/1371597354963.jpeg",
    categories: ["Soups & Salads"],
  },
  {
    id: 63,
    name: "Green Salad",
    price: 100,
    image:
      "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg",
    categories: ["Soups & Salads"],
  },
  {
    id: 64,
    name: "Veg Seekh Kebab",
    price: 220,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2017/03/seekh-kabab-recipe-veg-seekh-kabab-recipe-vegetable-seekh-kabab-2.jpeg",
    categories: ["Starters"],
  },
  {
    id: 65,
    name: "Paneer Pahadi Kebab",
    price: 240,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_pahadi-paneer-tikka-(kebabs-and-tikkis-recipe)-1596.jpg",
    categories: ["Starters"],
  },
  {
    id: 66,
    name: "Paneer Tikka",
    price: 260,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
    categories: ["Starters"],
  },
  {
    id: 67,
    name: "Paneer Pudina Kebab",
    price: 260,
    image: "https://maayeka.com/wp-content/uploads/2012/05/mint-kabab.jpg",
    categories: ["Starters"],
  },
  {
    id: 68,
    name: "Paneer Achari Kebab",
    price: 260,
    image:
      "https://www.ruchiskitchen.com/wp-content/uploads/2015/04/Achari-paneer-tikka-recipe-6-500x500.jpg",
    categories: ["Starters"],
  },
  {
    id: 69,
    name: "Paneer Kurkure",
    price: 260,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_paneer_kurkure,_crispy_kurkure_paneer-16095.jpg",
    categories: ["Starters"],
  },
  {
    id: 70,
    name: "Paneer Malai Kebab",
    price: 260,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/malai-paneer-tikka-recipe-1.jpg",
    categories: ["Starters"],
  },
  {
    id: 71,
    name: "Mushroom Rangeela",
    price: 270,
    image:
      "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/mushroom-202009-1599231835.jpg?impolicy=Medium_Resize&w=1200&h=800",
    categories: ["Starters"],
  },
  {
    id: 72,
    name: "Mushroom Tikka [ 4pcs]",
    price: 270,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Mushroom-Tikka-500x500.jpg",
    categories: ["Starters"],
  },
  {
    id: 73,
    name: "Hara Bhara Kebab",
    price: 230,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-recipe-1.jpg",
    categories: ["Starters"],
  },
  {
    id: 74,
    name: "Baby Corn Tandoori",
    price: 230,
    image:
      "https://rakskitchen.net/wp-content/uploads/2020/05/tandoori-style-babycorn.jpg",
    categories: ["Starters"],
  },
  {
    id: 75,
    name: "Bhindi Sunehari",
    price: 210,
    image: "https://i.ytimg.com/vi/EfUlgqtzXSo/maxresdefault.jpg",
    categories: ["Starters"],
  },
  {
    id: 76,
    name: "Dal Fry",
    price: 130,
    image:
      "https://mytastycurry.com/wp-content/uploads/2021/04/Dal-Tadka-Recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 77,
    name: "Dal Kolhapuri",
    price: 150,
    image:
      "https://img-global.cpcdn.com/recipes/21c416b4905b1535/400x400cq70/photo.jpg",
    categories: ["Main Course"],
  },
  {
    id: 78,
    name: "Dal Tadka",
    price: 150,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 79,
    name: "Dal Palak",
    price: 170,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dal-palak-spinach-dal.jpg",
    categories: ["Main Course"],
  },
  {
    id: 80,
    name: "Butter Dal Fry",
    price: 150,
    image:
      "https://rakskitchen.net/wp-content/uploads/2020/07/butter-dal-fry-recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 81,
    name: "Veg Kolhapuri",
    price: 210,
    image:
      "https://smithakalluraya.com/wp-content/uploads/2020/11/veg-kolhapuri-recipe-1.jpg",
    categories: ["Main Course"],
  },
  {
    id: 82,
    name: "Veg Tawa",
    price: 210,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2020/11/veg-tawa-fry-recipe-tawa-sabzi-tawa-fry-vegetables-tawa-fry-sabji-1-scaled.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 83,
    name: "Badam Handi",
    price: 290,
    image: "https://i.ytimg.com/vi/Tobh4CSm03Q/maxresdefault.jpg",
    categories: ["Main Course"],
  },
  {
    id: 84,
    name: "Deewani Handi",
    price: 250,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/veg-diwani-handi-recipe-1-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 85,
    name: "Veg Malvani",
    price: 240,
    image:
      "https://d3j4nopn8wm92b.cloudfront.net/sites/default/files/styles/recipe_main/public/Veg%20Kurma.jpg?itok=wehqp_P6",
    categories: ["Main Course"],
  },
  {
    id: 86,
    name: "Veg Amritsari",
    price: 240,
    image: "https://i.ytimg.com/vi/vOQh441vbYc/maxresdefault.jpg",
    categories: ["Main Course"],
  },
  {
    id: 87,
    name: "Veg Lahori",
    price: 240,
    image:
      "https://img-global.cpcdn.com/recipes/3e2e0adcdeed4a1d/680x482cq70/vegetarian-lahori-recipe-main-photo.jpg",
    categories: ["Main Course"],
  },
  {
    id: 88,
    name: "Veg Lazeez",
    price: 240,
    image:
      "https://b.zmtcdn.com/data/pictures/chains/3/19758493/39521ee51f5040ceab4da3c256206583.jpg",
    categories: ["Main Course"],
  },
  {
    id: 89,
    name: "Veg Seekh Kebab Masala",
    price: 260,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2017/03/seekh-kabab-recipe-veg-seekh-kabab-recipe-vegetable-seekh-kabab-2.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 90,
    name: "Hara Bhara Kebab Masala",
    price: 260,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/hara-bhara-kabab-recipe-veg-hara-bhara-kabab-veg-kabab-recipe-2.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 91,
    name: "Methi Masala",
    price: 200,
    image:
      "https://someindiangirl.com/wp-content/uploads/2021/02/achar-masala-methi-masala-10-of-10-500x375.jpg",
    categories: ["Main Course"],
  },
  {
    id: 92,
    name: "Methi Mattar",
    price: 210,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai.jpg",
    categories: ["Main Course"],
  },
  {
    id: 93,
    name: "Kaju Methi Masala",
    price: 270,
    image:
      "https://bhavnasfoodjourneys.files.wordpress.com/2021/02/kaju-methi-matar-e1612996739917.jpg",
    categories: ["Main Course"],
  },
  {
    id: 94,
    name: "Paneer Methi Masala",
    price: 250,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2020/03/Methi-Malai-Paneer-2-3.jpg",
    categories: ["Main Course"],
  },
  {
    id: 95,
    name: "Methi Malai Masala",
    price: 230,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai.jpg",
    categories: ["Main Course"],
  },
  {
    id: 96,
    name: "Baby Com Tawa Masala",
    price: 240,
    image:
      "https://mytastycurry.com/wp-content/uploads/2017/12/tawa-mushroom-.jpg",
    categories: ["Main Course"],
  },
  {
    id: 97,
    name: "Baby Corn Handi",
    price: 240,
    image:
      "https://mayagroupjaipur.files.wordpress.com/2015/08/11811517_861873450549054_4371950312501970428_n.jpg",
    categories: ["Main Course"],
  },
  {
    id: 98,
    name: "Baby Corn Kadai",
    price: 240,
    image:
      "https://hetalkamdar.com/wp-content/uploads/2020/09/Kadai-Baby-Corn-f-325x270.jpg",
    categories: ["Main Course"],
  },
  {
    id: 99,
    name: "Mushroom Tawa",
    price: 240,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Tawa_Mushroom_Recipe_.jpg",
    categories: ["Main Course"],
  },
  {
    id: 100,
    name: "Mushroom Handi",
    price: 240,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/kadai-mushroom-recipe-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 101,
    name: "Mushroom Kadai",
    price: 250,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/09/kadai-mushroom-recipe-1.jpg",
    categories: ["Main Course"],
  },
  {
    id: 102,
    name: "Mushroom Butter Masala",
    price: 250,
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2020/03/IMG_3557_11-1024x650-1-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 103,
    name: "Mushroom Makhanwala",
    price: 260,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2015/08/mushroom-butter-masala-recipe-1.jpg",
    categories: ["Main Course"],
  },
  {
    id: 104,
    name: "Paneer Achari Masala",
    price: 270,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/achari-paneer-recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 105,
    name: "Paneer Malvani",
    price: 250,
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Paneer-Malvani-Curry-Turban-Tadka-FoodFood.jpg",
    categories: ["Main Course"],
  },
  {
    id: 106,
    name: "Paneer Lahori",
    price: 260,
    image:
      "https://tastedrecipes.com/wp-content/uploads/2022/02/Paneer-Lahori-01.jpg",
    categories: ["Main Course"],
  },
  {
    id: 107,
    name: "Paneer Methi",
    price: 260,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/methi-paneer-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 108,
    name: "Palak Paneer",
    price: 260,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Palak-Paneer-500x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 109,
    name: "Paneer Mattar",
    price: 260,
    image:
      "https://www.simplyrecipes.com/thmb/A-vGmB56jrEgQ_gbxa1XrNbJ89g=/4160x4160/smart/filters:no_upscale()/Simply-Recipes-Matar-Paneer-LEAD-04-54973561cdb944f587165ecf161acc83.jpg",
    categories: ["Main Course"],
  },
  {
    id: 110,
    name: "Paneer Kadai",
    price: 260,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 111,
    name: "Paneer Handi",
    price: 260,
    image:
      "https://static.toiimg.com/thumb/54713904.cms?imgsize=248047&width=800&height=800",
    categories: ["Main Course"],
  },
  {
    id: 112,
    name: "Paneer Hyderabadi",
    price: 260,
    image: "https://static.toiimg.com/thumb/53519548.cms?width=1200&height=900",
    categories: ["Main Course"],
  },
  {
    id: 113,
    name: "Paneer Makhanwala",
    price: 260,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/paneer-makhani.jpg",
    categories: ["Main Course"],
  },
  {
    id: 114,
    name: "Paneer Masala",
    price: 250,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg",
    categories: ["Main Course"],
  },
  {
    id: 115,
    name: "Paneer Bhurji",
    price: 250,
    image:
      "https://shwetainthekitchen.com/wp-content/uploads/2022/05/Paneer-Bhurji.jpg",
    categories: ["Main Course"],
  },
  {
    id: 116,
    name: "Paneer Chatpata",
    price: 260,
    image:
      "http://www.yourhungerstop.com/wp-content/uploads/2016/01/ChatpataPaneer.jpg",
    categories: ["Main Course"],
  },
  {
    id: 117,
    name: "Paneer Do Pyaza",
    price: 260,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-do-pyaza.jpg",
    categories: ["Main Course"],
  },
  {
    id: 118,
    name: "Paneer Lehsuni",
    price: 260,
    image:
      "https://slurrp.club/wp-content/uploads/2017/09/DSC_0037-2-750x500.jpg",
    categories: ["Main Course"],
  },
  {
    id: 119,
    name: "Veg Kofta",
    price: 240,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/veg-kofta-curry-recipe-7.jpg",
    categories: ["Main Course"],
  },
  {
    id: 120,
    name: "Malai Kofta",
    price: 250,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 121,
    name: "Nargish Kofta",
    price: 250,
    image:
      "https://www.thespruceeats.com/thmb/OGPJvyvH3REpm9gnsPEMpQuSums=/1089x1089/smart/filters:no_upscale()/NargisiKoftas-56a511073df78cf772862ccb.jpg",
    categories: ["Main Course"],
  },
  {
    id: 122,
    name: "Kashmiri Kofta",
    price: 250,
    image:
      "https://lh3.googleusercontent.com/e6x3H4_bGZ4sBcrx95952piTEueApgCSsgD58jIaxZW-9noQes7Fzh4hKqPmv6QI5zNtWEu-46ltn6nQJklxkhnhKTguiT0X",
    categories: ["Main Course"],
  },
  {
    id: 123,
    name: "Dum Aloo Punjabi",
    price: 200,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/08/Punjabi-Dum-Aloo.jpg",
    categories: ["Main Course"],
  },
  {
    id: 124,
    name: "Dum Aloo Kashmiri",
    price: 230,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/04/kashmiri-dum-aloo-recipe-11a-500x375.jpg",
    categories: ["Main Course"],
  },
  {
    id: 125,
    name: "Stuffed Tomato",
    price: 210,
    image:
      "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/stuffed-tomatoes-4.jpg",
    categories: ["Main Course"],
  },
  {
    id: 126,
    name: "Stuffed Capsicum",
    price: 210,
    image:
      "https://hips.hearstapps.com/hmg-prod/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg",
    categories: ["Main Course"],
  },
  {
    id: 127,
    name: "Kaju Masala",
    price: 290,
    image:
      "https://cookingfromheart.com/wp-content/uploads/2020/10/Kaju-Masala-3.jpg",
    categories: ["Main Course"],
  },
  {
    id: 128,
    name: "Kaju Curry",
    price: 290,
    image:
      "https://cookingfromheart.com/wp-content/uploads/2020/10/Kaju-Masala-3.jpg",
    categories: ["Main Course"],
  },
  {
    id: 129,
    name: "Kaju Khoya Masala",
    price: 290,
    image:
      "https://www.spiceupthecurry.com/wp-content/uploads/2014/11/restaurant-style-khoya-kaju-recipe-10.jpg",
    categories: ["Main Course"],
  },
  {
    id: 130,
    name: "Paneer Butter Masala",
    price: 260,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
    categories: ["Main Course"],
  },
  {
    id: 131,
    name: "Bhindi Masala",
    price: 180,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe.jpg",
    categories: ["Main Course"],
  },
  {
    id: 132,
    name: "Bhindi Fried",
    price: 190,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/bhindi-fry.jpg",
    categories: ["Main Course"],
  },
  {
    id: 133,
    name: "Papad Ki Sabzi",
    price: 200,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2017/09/papad-ki-sabzi-recipe-dahi-papad-sabzi-papad-curry-recipe-2.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 134,
    name: "Corn Capsicum Masala",
    price: 210,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/11/corn-capsicum-masala-recipe-corn-capsicum-sabzi-corn-capsicum-gravy-1.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 135,
    name: "Veg Haweli",
    price: 300,
    image: "https://i.ytimg.com/vi/TkTqtTe2AdI/hqdefault.jpg",
    categories: ["Main Course"],
  },
  {
    id: 136,
    name: "Veg Mansuri",
    price: 300,
    image:
      "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=963690960333625",
    categories: ["Main Course"],
  },
  {
    id: 137,
    name: "Paneer Dhaniya",
    price: 300,
    image:
      "https://www.subbuskitchen.com/wp-content/uploads/2019/12/Dhaniya-Paneer_finalforweb2-864x1300.jpg",
    categories: ["Main Course"],
  },
  {
    id: 138,
    name: "Tez Guncha",
    price: 350,
    image:
      "https://avatars.mds.yandex.net/get-altay/5235091/2a000001827dbb57e50c3f9d86fd75f6f225/XXXL",
    categories: ["Main Course"],
  },
  {
    id: 139,
    name: "Aloo Gobhi",
    price: 180,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe-500x375.jpg",
    categories: ["Main Course"],
  },
  {
    id: 140,
    name: "Mixed Veg",
    price: 180,
    image:
      "https://indianambrosia.com/wp-content/uploads/2021/06/mixed-vegetable-curry_3877-2.jpg",
    categories: ["Main Course"],
  },
  {
    id: 141,
    name: "Veg Kadai",
    price: 210,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/veg-kadai-recipe-kadai-vegetable-recipe-vegetable-kadai-sabzi-1.jpeg",
    categories: ["Main Course"],
  },
  {
    id: 142,
    name: "Veg Chilli Milli",
    price: 220,
    image:
      "https://rakskitchen.net/wp-content/uploads/2013/04/8695283046_83b00cd195_z.jpg",
    categories: ["Main Course"],
  },
  {
    id: 143,
    name: "Veg Peshawari",
    price: 220,
    image: "https://i.ytimg.com/vi/PC1ABltU4KE/hqdefault.jpg",
    categories: ["Main Course"],
  },
  {
    id: 144,
    name: "Green Peas Masala",
    price: 190,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/matar-masala-recipe-2.jpg",
    categories: ["Main Course"],
  },
  {
    id: 145,
    name: "Green Peas Tomato",
    price: 200,
    image:
      "https://images.food52.com/W0mfXoP40AY-QWIqdWfEHOQyRs8=/2016x1344/18d61aab-78d9-409f-a895-89df70a5395e--june_10_221.jpg",
    categories: ["Main Course"],
  },
  {
    id: 146,
    name: "Green Peas Mushroom",
    price: 210,
    image: "https://images.media-allrecipes.com/userphotos/147007.jpg",
    categories: ["Main Course"],
  },
  {
    id: 147,
    name: "Roti",
    price: 30,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Roti-Recipe-Indian-flatbread-500x500.jpg",
    categories: ["Breads"],
  },
  {
    id: 148,
    name: "Butter Roti",
    price: 40,
    image:
      "https://www.tamarindnthyme.com/wp-content/uploads/2019/09/Soft-Butter-Roti4.jpg",
    categories: ["Breads"],
  },
  {
    id: 149,
    name: "Missi Roti",
    price: 50,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2014/09/Missi-Roti-4-500x500.jpg",
    categories: ["Breads"],
  },
  {
    id: 150,
    name: "Butter Missi Roti",
    price: 55,
    image: "https://static.toiimg.com/thumb/54504896.cms?width=1200&height=900",
    categories: ["Breads"],
  },
  {
    id: 151,
    name: "Paratha",
    price: 45,
    image:
      "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Paratha%2Fparatha-stacked-top_view",
    categories: ["Breads"],
  },
  {
    id: 152,
    name: "Butter Paratha",
    price: 55,
    image: "https://static.toiimg.com/thumb/53334885.cms?width=1200&height=900",
    categories: ["Breads"],
  },
  {
    id: 153,
    name: "Paneer Paratha",
    price: 140,
    image:
      "https://www.cookwithmanali.com/wp-content/uploads/2013/09/Paneer-Paratha-Homemade.jpg",
    categories: ["Breads"],
  },
  {
    id: 154,
    name: "Stuffed Paratha",
    price: 160,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/aloo-paratha.jpg",
    categories: ["Breads"],
  },
  {
    id: 155,
    name: "Lacha Paratha",
    price: 55,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2016/09/lachha-paratha-recipe-lachha-parantha-recipe-34.jpeg",
    categories: ["Breads"],
  },
  {
    id: 156,
    name: "Butter Lacha Paratha",
    price: 65,
    image:
      "https://www.mydelicious-recipes.com/home/images/78_1200_1200/mydelicious-recipes-lachha-paratha",
    categories: ["Breads"],
  },
  {
    id: 157,
    name: "Naan",
    price: 50,
    image:
      "https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg",
    categories: ["Breads"],
  },
  {
    id: 158,
    name: "Butter Naan",
    price: 60,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
    categories: ["Breads"],
  },
  {
    id: 159,
    name: "Garlic Naan",
    price: 65,
    image:
      "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Garlic-Naan-square-FS-42.jpg",
    categories: ["Breads"],
  },
  {
    id: 160,
    name: "Cheese Garlic Naan [ 4pcs]",
    price: 65,
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2016/08/IMG_2320_-1.jpg",
    categories: ["Breads"],
  },
  {
    id: 161,
    name: "Butter Garlic Naan [ 3 pcs]",
    price: 40,
    image:
      "https://cafedelites.com/wp-content/uploads/2020/06/Garlic-Naan-Recipe-IMAGE-27.jpg",
    categories: ["Breads"],
  },
  {
    id: 162,
    name: "Kulcha",
    price: 40,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/kulcha-recipe-1-500x500.jpg",
    categories: ["Breads"],
  },
  {
    id: 163,
    name: "Butter Kulcha",
    price: 50,
    image: "https://thepepper.in/wp-content/uploads/2019/02/Butter-Kulcha.jpg",
    categories: ["Breads"],
  },
  {
    id: 164,
    name: "Roti Ki Tokri",
    price: 260,
    image:
      "https://i.pinimg.com/originals/a1/b9/56/a1b956e2dde6466e818104149643f0ac.jpg",
    categories: ["Breads"],
  },
  {
    id: 165,
    name: "Stuffed Kulcha",
    price: 100,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Richa_Gupta/Stuffed_Veggie_Kulcha.jpg",
    categories: ["Breads"],
  },
  {
    id: 166,
    name: "Garlic Bread",
    price: 150,
    image:
      "https://www.simplyrecipes.com/thmb/_kfMeM8vmbWkGWn6Y0PDmHdfYu4=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__09__Garlic-Bread-LEAD-1-8b9944bb8e7a4fc49094da4d34f7ba50.jpg",
    categories: ["Breads"],
  },
  {
    id: 167,
    name: "Steam Rice",
    price: 120,
    image:
      "https://assets.epicurious.com/photos/57d70c8ade27564257b657c6/master/pass/perfect-steamed-rice.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 168,
    name: "Palak Khichdi",
    price: 170,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/palak-khichdi-recipe-palak-dal-khichdi-how-to-make-palak-khichdi-1.jpeg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 169,
    name: "Curd Rice",
    price: 170,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 170,
    name: "Ghee Rice",
    price: 170,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2018/12/ghee-rice-recipe-neychoru-recipe-nei-choru-ghee-bhat-1.jpeg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 171,
    name: "Veg Pulao",
    price: 200,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/veg-pulao-recipe.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 172,
    name: "Paneer Pulao",
    price: 210,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2019/08/Paneer-Pulao-1-3.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 173,
    name: "Kashmiri Pulao",
    price: 220,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/kashmiri-pulao-recipe.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 174,
    name: "Tawa Pulao",
    price: 210,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/tawa-pulao.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 175,
    name: "Paneer Dum Biryani",
    price: 260,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 176,
    name: "Hyderabadi Biryani",
    price: 250,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-with-chicken.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 177,
    name: "Mushroom Biryani",
    price: 270,
    image:
      "https://www.indianveggiedelight.com/wp-content/uploads/2019/09/mushroom-biryani-featured-500x500.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 178,
    name: "Veg Dum Biryani",
    price: 250,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2017/07/veg-dum-biryani-hyderabadi-veg-biryani-recipe-hyderabadi-biryani-2.jpeg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 179,
    name: "Paneer Hyderabadi Biryani",
    price: 260,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 180,
    name: "Paneer Tikka Biryani",
    price: 260,
    image:
      "https://www.jcookingodyssey.com/wp-content/uploads/2019/08/paneer-tikka-biryani-2.jpg",
    categories: ["Rice & Biryani"],
  },
  {
    id: 181,
    name: "Idli Sambar",
    price: 70,
    image:
      "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg",
    categories: ["South Indian"],
  },
  {
    id: 182,
    name: "Medu Vada",
    price: 80,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe.jpg",
    categories: ["South Indian"],
  },
  {
    id: 183,
    name: "Idli Vada Sambar",
    price: 80,
    image:
      "https://www.sandyathome.com/wp-content/uploads/2018/11/watermark_09-11-2018_10-51-54AM.png",
    categories: ["South Indian"],
  },
  {
    id: 184,
    name: "Sada Dosa",
    price: 90,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2015/11/dosa-recipe-plain-dosa-recipe-sada-dosa-recipe-1.jpeg",
    categories: ["South Indian"],
  },
  {
    id: 185,
    name: "Paper Sada Dosa",
    price: 140,
    image:
      "https://static.toiimg.com/thumb/53239433.cms?imgsize=247810&width=800&height=800",
    categories: ["South Indian"],
  },
  {
    id: 186,
    name: "Dosa Palak Sada",
    price: 110,
    image: "https://vaya.in/recipes/wp-content/uploads/2019/03/Palak-Dosa.jpg",
    categories: ["South Indian"],
  },
  {
    id: 187,
    name: "Dosa Palak Masala",
    price: 130,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Spinach__Coriander_Dosa.jpg",
    categories: ["South Indian"],
  },
  {
    id: 188,
    name: "Rava Sada Dosa",
    price: 100,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg",
    categories: ["South Indian"],
  },
  {
    id: 189,
    name: "Mysore Sada Dosa",
    price: 120,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_mysore_sada_dosa_(_mumbai_roadside_recipe)-14100.jpg",
    categories: ["South Indian"],
  },
  {
    id: 190,
    name: "Spring Roll Dosa",
    price: 160,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/spring-dosa-recipe-schezwan-dosa-recipe-chinese-dosa-recipe-2.jpeg",
    categories: ["South Indian"],
  },
  {
    id: 191,
    name: "Sada Uttapam",
    price: 90,
    image:
      "https://cdn.tarladalal.com/members/9306/big/big_sada-uttapa-(-mumbai-roadside-recipe)-2161.jpg",
    categories: ["South Indian"],
  },
  {
    id: 192,
    name: "Masala Uttapam",
    price: 120,
    image:
      "https://mydaintykitchen.com/wp-content/uploads/2019/05/20190505_112836-1.jpg",
    categories: ["South Indian"],
  },
  {
    id: 193,
    name: "Onion Uttapam",
    price: 120,
    image:
      "https://rakskitchen.net/wp-content/uploads/2013/03/8527219504_0ddb2cde6f_z.jpg",
    categories: ["South Indian"],
  },
  {
    id: 194,
    name: "Tomato Uttapam",
    price: 120,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg",
    categories: ["South Indian"],
  },
  {
    id: 195,
    name: "Baked Nachos",
    price: 140,
    image:
      "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Queso-Baked-Nachos_EXPS_SDAM18_87888_D12_05_5b.jpg",
    categories: ["Continental"],
  },
  {
    id: 196,
    name: "Mexican Baked Nachos",
    price: 170,
    image:
      "https://www.thewickednoodle.com/wp-content/uploads/2021/03/how-to-make-mexican-nachos-in-the-oven-3.jpg",
    categories: ["Continental"],
  },
  {
    id: 197,
    name: "Alfredo Pasta",
    price: 220,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg",
    categories: ["Continental"],
  },
  {
    id: 198,
    name: "Pesto Pasta",
    price: 220,
    image:
      "https://www.cookingclassy.com/wp-content/uploads/2022/02/pesto-pasta-1.jpg",
    categories: ["Continental"],
  },
  {
    id: 199,
    name: "Arabica Pasta",
    price: 230,
    image:
      "https://www.saltandlavender.com/wp-content/uploads/2019/04/easy-pasta-arrabiata-recipe-1.jpg",
    categories: ["Continental"],
  },
  {
    id: 200,
    name: "Mixed Sauce Pasta",
    price: 240,
    image:
      "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce2.jpg",
    categories: ["Continental"],
  },
  {
    id: 201,
    name: "Pahadi Pasta",
    price: 260,
    image:
      "http://www.thesecretingredient.in/wp-content/uploads/2016/07/FiddleHeadPasta_Featured4.jpg",
    categories: ["Continental"],
  },
  {
    id: 202,
    name: "Jalapeno Peppers",
    price: 260,
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2018/10/Jalapeno-Peppers1.jpg",
    categories: ["Continental"],
  },
  {
    id: 203,
    name: "Veg Manchurian Dry",
    price: 150,
    image:
      "https://www.spiceupthecurry.com/wp-content/uploads/2017/01/veg-manchurian-dry-recipe-9.jpg",
    categories: ["Chinese"],
  },
  {
    id: 204,
    name: "Veg 65",
    price: 180,
    image:
      "http://34c6b8841d4124020671-5bfabe5484726969ac662c6d377e2f3c.r16.cf2.rackcdn.com/uploads/old/LVTnnYZzxL.jpg",
    categories: ["Chinese"],
  },
  {
    id: 205,
    name: "Paneer Manchurian Dry",
    price: 220,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/paneer-manchurian.jpg",
    categories: ["Chinese"],
  },
  {
    id: 206,
    name: "Paneer Chilli Dry [ 5 pcs]",
    price: 220,
    image:
      "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
    categories: ["Chinese"],
  },
  {
    id: 207,
    name: "Paneer Hot Garlic",
    price: 240,
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Hot_Garlic_Paneer.jpg",
    categories: ["Chinese"],
  },
  {
    id: 208,
    name: "Baby Corn Golden Fry",
    price: 220,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/baby-corn-fry-recipe-baby-corn-65-recipe-baby-corn-golden-fry-2.jpeg",
    categories: ["Chinese"],
  },
  {
    id: 209,
    name: "Mushroom Manchurian",
    price: 230,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/mushroom-manchurian.jpg",
    categories: ["Chinese"],
  },
  {
    id: 210,
    name: "Mushroom 65",
    price: 230,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/mushroom-65-recipe-1.jpg",
    categories: ["Chinese"],
  },
  {
    id: 211,
    name: "Paneer 65",
    price: 230,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg",
    categories: ["Chinese"],
  },
  {
    id: 212,
    name: "Paneer Pepper Dry",
    price: 240,
    image:
      "https://www.cookwithkushi.com/wp-content/uploads/2021/09/IMG_0301l.jpg",
    categories: ["Chinese"],
  },
  {
    id: 213,
    name: "Veg Manchurian Gravy",
    price: 181,
    image:
      "https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7-500x500.jpg",
    categories: ["Chinese"],
  },
  {
    id: 214,
    name: "Baby Corn Manchurian Dry",
    price: 230,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2016/10/baby-corn-manchurian-recipe-baby-corn-manchurian-dry-recipe-18.jpeg",
    categories: ["Chinese"],
  },
  {
    id: 215,
    name: "Paneer Manchurian Gravy",
    price: 220,
    image:
      "https://www.yummytummyaarthi.com/wp-content/uploads/2015/05/1-30.jpg",
    categories: ["Chinese"],
  },
  {
    id: 216,
    name: "Baby Corn Pepper Dry",
    price: 230,
    image:
      "https://www.cookclickndevour.com/wp-content/uploads/2019/06/babycorn-salt-pepper-recipe.jpg",
    categories: ["Chinese"],
  },
  {
    id: 217,
    name: "Paneer Chilli Gravy",
    price: 220,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2017/08/chilli-paneer-gravy-recipe-easy-paneer-chilli-with-gravy-recipe-2.jpeg",
    categories: ["Chinese"],
  },
  {
    id: 218,
    name: "Baby Corn Chilli Dry",
    price: 230,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/baby-corn-chilli-recipe-chilli-baby-corn-crispy-chilli-baby-corn-1.jpeg",
    categories: ["Chinese"],
  },
  {
    id: 219,
    name: "Atishah Aloo",
    price: 180,
    image:
      "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1395847997142394",
    categories: ["Chinese"],
  },
  {
    id: 220,
    name: "Mushroom Chilli",
    price: 230,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/chilli-mushroom.jpg",
    categories: ["Chinese"],
  },
  {
    id: 221,
    name: "Veg Spring Roll [ 6 pcs]",
    price: 200,
    image:
      "https://tsoimages.tsodelivery.com/product/PR_d80a84bf83cf68ac40d1d3a7865f750729a1e03b.jpg",
    categories: ["Chinese"],
  },
  {
    id: 222,
    name: "Ginger Fried Rice",
    price: 200,
    image:
      "https://cdn.sanity.io/images/2r0kdewr/production/e942572dcddaa2671b100372742f72f6d8a37da0-4697x3523.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 223,
    name: "Mushroom Fried Rice",
    price: 220,
    image:
      "https://www.littlesugarsnaps.com/wp-content/uploads/2021/04/Mushroom-Fried-Rice-Featured-Image-.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 224,
    name: "Paneer Fried Rice",
    price: 220,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice-recipe.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 225,
    name: "Paneer Mushroom Fried Rice",
    price: 240,
    image:
      "https://www.pachakam.com/wp-content/uploads/2019/08/Mushroom-Paneer-Fried-Rice-Pachakam-11137.jpeg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 226,
    name: "Veg Singapore Fried Rice",
    price: 240,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/singapore-fried-rice.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 227,
    name: "Hong Kong Fried Rice",
    price: 240,
    image:
      "https://www.hwcmagazine.com/wp-content/uploads/2013/05/Pantry-Fried-Rice-1200-x-1200-2884-500x375.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 228,
    name: "Lemon Fried Rice",
    price: 200,
    image:
      "https://www.thespruceeats.com/thmb/PtQP3nxDwioXjVXNligawME2kCw=/1500x1000/filters:fill(auto,1)/lemon-rice-recipe-5213271-hero-01-e74de504d7364ac499ef96f804253b05.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 229,
    name: "Veg Combination Rice",
    price: 220,
    image: "https://i.ytimg.com/vi/ycJTiNVtHx4/maxresdefault.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 230,
    name: "Veg Manchurian Fried Rice",
    price: 260,
    image:
      "https://www.ruchiskitchen.com/wp-content/uploads/2015/08/manchurian_rice_recipe_1.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 231,
    name: "Pot Rice [ 350gms ]",
    price: 300,
    image:
      "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Pot-Rice---SK-Khazana.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 232,
    name: "Paneer Manchurian Fried Rice",
    price: 300,
    image: "https://i.ytimg.com/vi/YRl1n7edIas/hqdefault.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 233,
    name: "Hakka Noodles",
    price: 200,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 234,
    name: "Veg Schezwan Noodles",
    price: 220,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/2019/03/schezwan-noodles-recipe-szechuan-noodles-veg-schezwan-noodles-1.jpeg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 235,
    name: "Mushroom Noodles",
    price: 240,
    image:
      "https://therecipecritic.com/wp-content/uploads/2018/09/Garlic-Mushroom-Noodles-1.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 236,
    name: "Veg Singapore Noodles",
    price: 240,
    image:
      "https://thewoksoflife.com/wp-content/uploads/2018/09/vegetarian-singapore-noodles-5.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 237,
    name: "Hong Kong Noodles",
    price: 240,
    image:
      "https://ucarecdn.com/af5dfd28-df32-4839-b4bb-6e3d7baf8c6a/-/scale_crop/800x600/center/860f7e762b49145cd320c7024c1d9e6a.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 238,
    name: "Triple Schezwan Noodles",
    price: 260,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/schezwan-rice-recipe-triple-schezwan-fried-rice-triple-schezwan-rice-27.jpeg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 239,
    name: "Veg Manchurian Noodles [ 450gms]",
    price: 250,
    image:
      "https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 240,
    name: "Veg American Chop Suey",
    price: 230,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/veg-american-chopsuey-recipe-1.jpg",
    categories: ["Fried Rice and Noodles"],
  },
  {
    id: 241,
    name: "Veg Sandwich",
    price: 70,
    image:
      "https://www.foodandwine.com/thmb/WXKK3kflH3oCrb0nY8z0z5e4GZA=/2000x1125/smart/filters:no_upscale()/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000-0984c1b513ae4af396aee039afa5e38c.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 242,
    name: "Veg Club Sandwich",
    price: 160,
    image:
      "https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe-1-500x500.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 243,
    name: "Veg Grill Sandwich",
    price: 170,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 244,
    name: "Paneer Grill Sandwich",
    price: 170,
    image:
      "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/paneer-sandwich-recipe-how-to-make-grilled-paneer-sandwich-recipe-1.jpeg",
    categories: ["Sandwiches"],
  },
  {
    id: 245,
    name: "Veg Toast Sandwich",
    price: 90,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe-500x375.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 246,
    name: "Cheese Chilli Toast Sandwich",
    price: 130,
    image:
      "https://www.spiceupthecurry.com/wp-content/uploads/2017/02/chilli-cheese-sandwich-recipe-7.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 247,
    name: "Masala Toast Sandwih",
    price: 130,
    image:
      "https://www.spiceupthecurry.com/wp-content/uploads/2020/11/masala-toast-sandwich-1.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 248,
    name: "Coleslaw Sandwich",
    price: 210,
    image:
      "https://www.oetker.in/Recipe/Recipes/oetker.in/in-en/sandwiches/image-thumb__52731__RecipeDetailsLightBox/coleslaw-sandwich.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 249,
    name: "Bread Butter Sandwich",
    price: 50,
    image:
      "https://pastrychefonline.com/wp-content/uploads/2015/01/bread-butter-and-sugar-sandwich1-480x360.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 250,
    name: "Bread Butter Toast Sandwich",
    price: 60,
    image:
      "https://1.bp.blogspot.com/-fy35EViHDX8/XvHj1LfYDNI/AAAAAAABDdc/btFkxQRHO7gbZWAVfsu2NBlRA4m6v7dngCLcBGAsYHQ/s1600/Bread-butter-jam.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 251,
    name: "French Fries",
    price: 120,
    image:
      "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
    categories: ["Sandwiches"],
  },
  {
    id: 252,
    name: "Masala Pav [ 350 gms 2 pav]",
    price: 160,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2022/06/masala-pav-1.jpg",
    categories: ["Pav Bhaji"],
  },
  {
    id: 253,
    name: "Upma",
    price: 60,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/upma-recipe.jpg",
    categories: ["Snacks"],
  },
  {
    id: 254,
    name: "Poha",
    price: 60,
    image:
      "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
    categories: ["Snacks"],
  },
  {
    id: 255,
    name: "Misal Pav",
    price: 90,
    image: "https://myfoodstory.com/wp-content/uploads/2022/01/Misal-Pav-1.jpg",
    categories: ["Snacks"],
  },
  {
    id: 256,
    name: "Tomato Omelette",
    price: 130,
    image:
      "https://hurrythefoodup.com/wp-content/uploads/2017/03/Tomato-Omelette-7.jpg",
    categories: ["Snacks"],
  },
  {
    id: 257,
    name: "Fried Papad",
    price: 40,
    image:
      "https://www.jainrasoi.com/mg/wp-content/uploads/2012/09/fried-papad.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 258,
    name: "Masala Papad",
    price: 45,
    image:
      "https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-2-3.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 259,
    name: "Roasted Papad",
    price: 35,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_to_roast_papad.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 260,
    name: "Boondi Raita",
    price: 100,
    image:
      "https://myfoodstory.com/wp-content/uploads/2022/03/Boondi-Raita-7.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 261,
    name: "Veg Raita",
    price: 80,
    image:
      "https://www.cookclickndevour.com/wp-content/uploads/2019/07/vegetable-raita-recipe.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 262,
    name: "Pineapple Raita",
    price: 140,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/02/pineapple-raita-recipe-1-500x375.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 263,
    name: "Plain Curd",
    price: 70,
    image:
      "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/how-to-make-curd-recipe-1-500x375.jpg",
    categories: ["Accompaniments"],
  },
  {
    id: 264,
    name: "Kesar Falooda",
    price: 150,
    image:
      "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandhini/KESAR_PISTA_FALOODA.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 265,
    name: "Pista Falooda",
    price: 150,
    image:
      "https://www.sharmispassions.com/wp-content/uploads/2017/04/PistaFalooda2.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 266,
    name: "Chocolate Falooda",
    price: 160,
    image: "https://i.ytimg.com/vi/7wscaZ6FIEg/maxresdefault.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 267,
    name: "Fresh Fruit Salad",
    price: 150,
    image:
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 268,
    name: "Tea",
    price: 40,
    image:
      "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 269,
    name: "Nescafe",
    price: 60,
    image:
      "https://www.nescafe.com/us/sites/g/files/jgfbjl256/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/nescafe-b150474f7ed01776fa185928e86ef29f2692d9f8.png.webp?itok=CoOh1xEL",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 270,
    name: "Watermelon Juice",
    price: 110,
    image:
      "https://bellyfull.net/wp-content/uploads/2022/06/Watermelon-Juice-blog-4.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 271,
    name: "Pineapple Juice",
    price: 110,
    image:
      "https://www.alphafoodie.com/wp-content/uploads/2022/02/How-to-Juice-a-Pineapple-Square.jpeg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 272,
    name: "Orange Juice",
    price: 110,
    image:
      "https://salimaskitchen.com/wp-content/uploads/2022/01/Fresh-Squeezed-Orange-Juice-Salimas-Kitchen-20.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 273,
    name: "Apple Juice",
    price: 120,
    image:
      "https://www.alphafoodie.com/wp-content/uploads/2021/11/Apple-Juice-Square.jpeg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 274,
    name: "Mixed Fruit Juice",
    price: 150,
    image:
      "http://www.tasty-indian-recipes.com/wp-content/uploads/2014/03/Mixed-Fruit-Juice.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 275,
    name: "Virgin Mojito",
    price: 190,
    image:
      "https://www.sustainablecooks.com/wp-content/uploads/2018/06/Classic-Virgin-Mojito-Recipe-2.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 276,
    name: "Strawberry Surprise Mocktail",
    price: 190,
    image: "https://bravocooking.com/img/2015/09/strawberry-surprise.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 277,
    name: "Blue Lagoon Mocktail",
    price: 190,
    image:
      "https://savortheflavour.com/wp-content/uploads/2020/07/Blue-Lagoon-Mocktail-Tasty.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 278,
    name: "Virgin Pincolada Mint Mocktail",
    price: 220,
    image:
      "https://www.cookingcarnival.com/wp-content/uploads/2017/06/VirginPina.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 279,
    name: "Refreshing Orange Mint Mocktail",
    price: 190,
    image:
      "https://www.pepperdelight.com/wp-content/uploads/2016/05/pepper-delight-orange-mint-mocktail-1.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 280,
    name: "Buttermilk",
    price: 65,
    image: "https://cookieandkate.com/images/2021/06/buttermilk-recipe-1.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 281,
    name: "Salted Lassi",
    price: 120,
    image:
      "https://www.healingtomato.com/wp-content/uploads/2016/04/how-to-make-lassi.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 282,
    name: "Sweet Lassi",
    price: 120,
    image:
      "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 283,
    name: "Kitkat Milk Shake",
    price: 140,
    image:
      "https://thepennywisemama.com/wp-content/uploads/2012/10/IMG_31651-480x480.png",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 284,
    name: "Oreo Milk Shake",
    price: 140,
    image:
      "https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes1.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 285,
    name: "Strawberry Milk Shake",
    price: 130,
    image:
      "https://therecipecritic.com/wp-content/uploads/2022/05/strawberrymilkshake-500x500.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 286,
    name: "Chocolate Milk Shake",
    price: 130,
    image:
      "https://www.thespruceeats.com/thmb/LlR9HScfODtlFcHNdZWXSNHkXcA=/1500x1000/filters:fill(auto,1)/chocolate-milkshake-4587581-hero-1-22c8a039103c413dafd75f4f4c39ddd4.JPG",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 287,
    name: "Vanilla Milk Shake",
    price: 130,
    image:
      "https://bakingmischief.com/wp-content/uploads/2020/03/vanilla-milkshake-image-square.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 288,
    name: "Pista Milk Shake",
    price: 130,
    image:
      "http://recipemantra.com/image/catalog/sharmispassions.com/PistaMilkshake3.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 289,
    name: "Cold Coffee",
    price: 130,
    image:
      "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
    categories: ["Desserts & Beverages"],
  },
  {
    id: 290,
    name: "Deluxe Thali",
    price: 250,
    image:
      "http://swadthaliservices.com/sites/default/files/food_images/swad-thali-1.jpg",
    categories: ["Thali"],
  },
  {
    id: 291,
    name: "Comida Special Thali",
    price: 310,
    image: "https://i.ndtvimg.com/i/2017-10/thali_620x350_71507031336.jpg",
    categories: ["Thali"],
  },
];

export default menu;
