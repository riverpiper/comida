const menu = [
  {
    name: "Paneer Tikka Masala",
    price: "270",
    categories: ["Recommended", "Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRIc58e9XRFF_B9N3sQGdSzYrcAEqgn9W0kT31BiapSz4JnhTK8jHk4SEJ--A&s",
  },
  {
    name: "Chef Special Veg",
    price: "310",
    categories: ["Recommended", "Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTGGJoZfIoq-tqGsRy35wlMwK8gU9DK_YZjl3bGd3jwvBC-ozxUGonLfaipxJU&s",
  },
  {
    name: "Veg Shaam Savera",
    price: "300",
    categories: ["Recommended", "Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRLJNl-DM2bh_Q2T6TQzCJEXuhbg17MdhDzSEuLDan7Muam27C8n5t9VkgU0Q&s",
  },
  {
    name: "Paneer Pasanda",
    price: "310",
    categories: ["Recommended", "Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTDnlEHmCLXIahb0-PaAzXqKYnxEfT2L3IVaJUJVUHhRfbIQQyU_GV0OCqhgg&s",
  },
  {
    name: "Paneer Ball Rangeela",
    price: "300",
    categories: ["Recommended", "Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQwohD7AE27i27bVaWi9We_XYxLimjw-rrzgLMN8XlZ2wdB_33lIdVQoD5_EQ&s",
  },
  {
    name: "Chapati",
    price: "25",
    categories: ["Recommended", "Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQtuIpCAji6cWwx4LDxqkQUnrENqqZBQM89di2EuFwgtPX8HwKYcSFaYax1VBU&s",
  },
  {
    name: "Jeera Rice",
    price: "150",
    categories: ["Recommended", "Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ0SdhwBhC1uAxJ-UPK57H_17xw7L_6cMbNsFE6Pk2TgVaXYFIlKZJIhFZb0yE&s",
  },
  {
    name: "Dal Khichdi",
    price: "190",
    categories: ["Recommended", "Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSN14aKYzop7Q5MQeYAP6ALr1CZxtCh6jTMhtLpzDQecDGtOoV_7eNuUSal0g&s",
  },
  {
    name: "Dal Khichdi Tadaka",
    price: "170",
    categories: ["Recommended", "Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSzYdhi5B41I8CCQu6We06IwUu_nSPg6ms4fJW_CZuRE3JqEER5DzJIDlim_Q&s",
  },
  {
    name: "Veg Biryani",
    price: "220",
    categories: ["Recommended", "Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTU857bwvOBWZEq3f6Kj071Uja-NJTI9is2KD6L1xnOEhE0iNPf40L4UXSLoA&s",
  },
  {
    name: "Paneer Biryani",
    price: "270",
    categories: ["Recommended", "Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTNAd-cljzY9FTLkTAsCkAS66OPdSP_bnNOTRukQ6YJEgVozB3zLxv5_Zzw8Q&s",
  },
  {
    name: "Idli Fried",
    price: "80",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTMjdtV7JGFmljHkJusAfdELB8T6rkgtzF2VLwjk3zzrqjREZZA0MnGpsPpj88&s",
  },
  {
    name: "Butter Idli",
    price: "80",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTCdDzzLWd3_12SVetyMFDRrskcryf7NvrPtnN2upzTrMw-aTkbJvhRO50zRE8&s",
  },
  {
    name: "Masala Dosa",
    price: "130",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRzcEMgYZXwisBCMccxjp95braVAVwfyMTdJ8I4rjd88OoUKzH5guSam6dweNU&s",
  },
  {
    name: "Paper Masala Dosa",
    price: "170",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQCscZUwq9DwhFTJLeuDeYflxv5OuH7yMATrf6Xdj2HfSZ1__3E8eX61q7QpSE&s",
  },
  {
    name: "Rava Masala Dosa",
    price: "130",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRpmOn85Pkvk5DpLIU4d2rBj3YQY4IBIFUQefHS5Ggitpi4WeZhL_MvI9ruSIs&s",
  },
  {
    name: "Mysore Masala Dosa",
    price: "150",
    categories: ["Recommended", "South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSFXYZ1hIzZj5yGxUY3AqAPcROBwZnVWyidolABNpzJ08LvrZLeq2JxSPyzCnM&s",
  },
  {
    name: "Idli Chilli",
    price: "200",
    categories: ["Recommended", "Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS-c1Koj5IDzDfjxH9AjctTmhKrF6cpByxGh43444egYoFFNqQA0GUck-rin5M&s",
  },
  {
    name: "Veg Crispy",
    price: "200",
    categories: ["Recommended", "Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRloc1XdeX2bSJiNkSsSxDQ9kLPe3yY0nc72vFqz-57fywCdrowtF3IUn_4kQ&s",
  },
  {
    name: "Paneer Crispy",
    price: "220",
    categories: ["Recommended", "Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQKOUfJlufwds2DQ4txZsD3fPUznDCCecoCpuh58ycMF9VjruIBHZaJMWznWcA&s",
  },
  {
    name: "Paneer Satay",
    price: "260",
    categories: ["Recommended", "Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQvDFFLonHx5GJLMsOBPoNxeRRCHYEZ38NAZU11WrITDwLSvN3YHDzkh7Oo330&s",
  },
  {
    name: "Veg Fried Rice",
    price: "190",
    categories: ["Recommended", "Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTVZyLZMERW9mrd0DXIu36wYC84xgh43Tg1HPoCWH2yn7Tck2E1xPneOiJJaWk&s",
  },
  {
    name: "Veg Schezwan Fried Rice",
    price: "210",
    categories: ["Recommended", "Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRquaQ0ubIKcucQmJ63sD--EtkiPkPto6_ae-KSq49Agf5pz_kxeKmO_l5dqP4&s",
  },
  {
    name: "Triple Schezwan Rice",
    price: "270",
    categories: ["Recommended", "Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR1C6gz1ylLS4DQ_3TROBIou1MFsEh3PaOMGZ4XX-F-MDh0aDZqZfmPJEAU3XA&s",
  },
  {
    name: "Butter Pav Bhaji [ 350 gms 2 pav]",
    price: "150",
    categories: ["Recommended", "Pav Bhaji"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSsMIEh3lBH1sdv58FdJ2VSf8yoFjn2rpK5jOq668xXtylDCLIDjdYoaWCecto&s",
  },
  {
    name: "Khada Pav Bhaji",
    price: "160",
    categories: ["Recommended", "Pav Bhaji"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSB9NuV840o0J5nt5cYI0CTGJhMi2RksKJGqoJAiq8mcqdwz9KTBUIanWgV7w&s",
  },
  {
    name: "Paneer Pav Bhaji",
    price: "160",
    categories: ["Recommended", "Pav Bhaji"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQyjcLQRwlWXgZXBtdnk8OeS2t1qCBK4pKIoDqZ-6qg2opjlwsyT9JeMVwIhA&s",
  },
  {
    name: "Comida Special Pav Bhaji",
    price: "210",
    categories: ["Recommended", "Pav Bhaji"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRgFmdzMYsWnA8K_upGzEriXVHAMZlS6Fr3BfAQNYg8ZMlOBaSaqwqYrjeogA&s",
  },
  {
    name: "Royal Falooda",
    price: "150",
    categories: ["Recommended", "Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTHatiWHxmmRiKp2e8GHuEZRCh1gW-dAvdlFzhTirqW-G8UbFQZzYmnEAnodOE&s",
  },
  {
    name: "Dry Fruit Falooda",
    price: "160",
    categories: ["Recommended", "Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTHatiWHxmmRiKp2e8GHuEZRCh1gW-dAvdlFzhTirqW-G8UbFQZzYmnEAnodOE&s",
  },
  {
    name: "Fresh Lime Soda",
    price: "100",
    categories: ["Recommended", "Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRKxYcSj2CsujkOn5P-HjOGxmmRUrsYbrhVftbno5zBTSNebz1gIIKX9fdh4kU&s",
  },
  {
    name: "Fresh Lime Water",
    price: "100",
    categories: ["Recommended", "Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRFlXFhJrx2dpAM4fMLWnoP8hQ0-A6Gg9cAM8a_t_DwMVBD3sxHilzzfI_4gw&s",
  },
  {
    name: "Pav Bhaji + Paneer Fried Rice + Paneer Chilli Dry",
    price: "510",
    categories: ["Family Binge Combos"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRjZaexN3cVZouYAjQSuwULtWURCuRt7T-zA9fqbzIMM9eYmA6YpU5C0n3fSA&s",
  },
  {
    name: "Paneer Crispy + Hyderabadi Biryani",
    price: "400",
    categories: ["Family Binge Combos"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTNAd-cljzY9FTLkTAsCkAS66OPdSP_bnNOTRukQ6YJEgVozB3zLxv5_Zzw8Q&s",
  },
  {
    name: "2 Veg Spring Roll + Triple Schezwan Rice",
    price: "540",
    categories: ["Family Binge Combos"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR1C6gz1ylLS4DQ_3TROBIou1MFsEh3PaOMGZ4XX-F-MDh0aDZqZfmPJEAU3XA&s",
  },
  {
    name: "Manchurian Fried Rice + Veg Schezwan Noodles + Boondi Raita",
    price: "490",
    categories: ["Family Binge Combos"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTo0-oMMWZAMd9wjNhg8bYqgvV0fCx8pJeKXwCSzYHOoja83LOCnVx5RVQjw9o&s",
  },
  {
    name: "Paneer Biryani + Hong Kong Noodles",
    price: "440",
    categories: ["Family Binge Combos"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSbuJ25Mi8fMx-gMPkyHcBoUdKHG6J8IQDsSfxvtytOfgZCubnEkC4kyLm4cvE&s",
  },
  {
    name: "8'' Executive Italian Pizza",
    price: "250",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRGVr5JcbG9t4LdLk-m5mC_ua5lCAe6_fSFrOpgwB1TZkTX7VTVaaei-TK39PA&s",
  },
  {
    name: "8'' Farm House Pizza",
    price: "250",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRKXPW-l_2Su8XSEh4fNeyBrC_T_tpyGVBgy_Mcj8DxzdUXYMYl_dXa9ZTufQc&s",
  },
  {
    name: "8'' Veg Assorted Pizza",
    price: "270",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRHQPjEz4PWcPB6m6GfWnd1z178cX5cUXLiCVA7ZmfsvT0G74boAFYPiVW_yA&s",
  },
  {
    name: "8'' Lovely Pizza",
    price: "280",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRmcFMrCLwzTcwjJB2k4wzj5hi4Z75rVFp5MjDCmXWaS2hkoDXyt9j-CY47LTE&s",
  },
  {
    name: "8'' Indian Spicy Pizza",
    price: "230",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS1Y4NVOCjYPJDqXqZuct-DJXsgsLdilhfyIBM8TIqO00PL4cLs23VRoMkV-tU&s",
  },
  {
    name: "8'' Garlic Bread Pizza",
    price: "150",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTv6SpvHxrF9GA-BrkqFKyEQXqj3Le7LyqTRxeVwg6t8A6jKx-p6YFB0UogHJo&s",
  },
  {
    name: "8'' Veg Cheese Pizza",
    price: "210",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRhf2tq4CjV6pzrFBCofJI4MPJ3Ifhto82Nq2FXU3k1KyFU_pNuw4_4Gab3bA&s",
  },
  {
    name: "8'' Margherita Pizza",
    price: "200",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRmcFMrCLwzTcwjJB2k4wzj5hi4Z75rVFp5MjDCmXWaS2hkoDXyt9j-CY47LTE&s",
  },
  {
    name: "8'' Paneer Cheese Pizza",
    price: "220",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS4HpjcV0hX4o0-xW42gVVETqq-81s0J7o8jgun_vSZdhZdD1X22B-t59YzqQ&s",
  },
  {
    name: "8'' Italian Treat Pizza",
    price: "210",
    categories: ["Pizza"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTjGlRlOe7KyAzmInnYeHVRexuT9NRXrfxBJ-NMlYx-r1pvRbmC6P8EmL9syvY&s",
  },
  {
    name: "Manchow Soup",
    price: "150",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTNXdWQ64x131IYrt6hVJCR3cSBHbCFM7I47oD2Lds5sY34CdoIz-TX6eywOrs&s",
  },
  {
    name: "Cream Of Tomato Soup",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRIrhWxdxPbvlOPUSu9F7c_t8ETZQ0pZIxYxycEjPXe3VbZXBkA-E8l8qYhCDE&s",
  },
  {
    name: "Cream Of Palak Soup",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRESApeF-LYRMg5Srd2AMa8EkxsOOUsCHSXX0SfORTA3ptVnODCtVpKFWuKPcE&s",
  },
  {
    name: "Cream Of Mushroom Soup",
    price: "170",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRlLSiJpOITgnvgvd0Gr-77mFLOpuPMPVH6Ca-_0ir7M6OpgcSo2J3VwRzo-g&s",
  },
  {
    name: "Sweet Com Soup",
    price: "150",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSRS065YbCw90bJ4fA5TwYWPTW93-3SJWc_WmgomLIN90O12OhpI0PpavrF_pU&s",
  },
  {
    name: "Sweet Corn Mushroom Soup",
    price: "170",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS_CtMa4fL-1saen9LZJF7V06i1OSRx93vfNNGeCCXQ1HMNaKvqp1SCdODoIs0&s",
  },
  {
    name: "Clear Soup",
    price: "150",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSfGU8pxHH7KprKviEU6qxqKPsubAkfRTsA9JohvdBzkvP6fKtO9vUw4gk9i4I&s",
  },
  {
    name: "Lemon Coriander Soup",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSLJ00AMdbDwq1hGRmJ_v_LciyDcdq-4rLyjUylB4K2UWeZVrRdm-c44rPM8do&s",
  },
  {
    name: "Noodle Soup",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQYXp1ajBMQ5jNQUzZDMvYawrVWrwgkBMM32tQ0SlxuMVWHjg4pD-ilP8hRZQ&s",
  },
  {
    name: "Pineapple Soup",
    price: "170",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTdVjhy_VARCbBKO5ZI-ffhrFapBK68AqvVGvVCH9Wj_5j7Wx_7mlEApMr07A&s",
  },
  {
    name: "Tomato Coriander Shorba",
    price: "170",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ49lXF4pMKI4M3FwV-Yht1-yRxOzHLxMpWvfuvLJGL6hFF7UZACGwmVR1fEQ&s",
  },
  {
    name: "Dal Coriander Shorba",
    price: "170",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSHi_ImcOTUH8u9sSAfdCWLXiZaU56xSSKd5pDhe8krp7Jm4d4Zw855Wxh3Ow&s",
  },
  {
    name: "Greek Salad",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRgyYWTyGpoABerAvgGL9_FHGrDL__ov6EJrhQdW27RO6F7e0ojmsTJqL8dVQ&s",
  },
  {
    name: "Caesar Salad",
    price: "160",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSP6xOetgCAvxt9gW0hJ5mnPwwk0VZ7PAEoQm09JUh03o5ghE_ZkI12QclFQYI&s",
  },
  {
    name: "American Pasta Salad",
    price: "200",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ2Ug7tMJ6Ev-NF-fgURKZ1s-TLFG0hRETZUJGMj5iXAr7_y-rCiU7kjCALog&s",
  },
  {
    name: "Green Salad",
    price: "100",
    categories: ["Soups and Salads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQeMCZmyj9AWfsXSlWqEsFoeYr5N532sXBmMJnwVIPhJyRH7Qy8anKlQfFMUM0&s",
  },
  {
    name: "Veg Seekh Kebab",
    price: "220",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR9qF3vH8wY4nsrqE_p9LG41HSON9ueR3E2VOIMWRnFn_nTUq7ov6KAG6xxTg&s",
  },
  {
    name: "Paneer Pahadi Kebab",
    price: "240",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTQZjFSJNtXA2mOVwocV0810As1ndbJfKTI39xwfCUiTwe_ccwzDsmrHx_WHA&s",
  },
  {
    name: "Paneer Tikka",
    price: "260",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRpx4ZQqBSp38GzcLhX864Wi2Qn62Nm47wkUoqG0fhhhy4H3-UUD_jbvMHcVg&s",
  },
  {
    name: "Paneer Pudina Kebab",
    price: "260",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSkeTm5OnehaDQEjkJvswZtX6LsnTpRXK-kg-hCjdxVxeRXFO_1qQ4aWUuQy6c&s",
  },
  {
    name: "Paneer Achari Kebab",
    price: "260",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSC6l_3kvVdQh7kILTPJQOJXCRxok_oOWxNB8DjFFkbBHtcYZx1joNEMoycsw&s",
  },
  {
    name: "Paneer Kurkure",
    price: "260",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTaNZWeaqH4udfxFfaRkH1AaxYkRSGw4HHr1n_71wO7OTDsxG3msshCIh7Yx6I&s",
  },
  {
    name: "Paneer Malai Kebab",
    price: "260",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR5M1Sg4e8fawd6oc9CH0-g67jDf-R4GsYSYg-btf9Ve_0bcL3I7LL85_wLwg&s",
  },
  {
    name: "Mushroom Rangeela",
    price: "270",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSVK6sUvSocskG1zF0hAln0eYEQNVU8BMsOxq6Ac9oL6G_OXd4HydNqxHZQgQ&s",
  },
  {
    name: "Mushroom Tikka [ 4pcs]",
    price: "270",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR1gwFNt_oz-5I7gDKKjUMrvA86FJYaf1Rag0wVaRJuvLpklqWyja7CXT2AFA&s",
  },
  {
    name: "Hara Bhara Kebab",
    price: "230",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTY-7ykn87O3XgZRutvOhsgzY8t7851fyYK3AGqw72sHn3rU_SYRfYlppsQFw&s",
  },
  {
    name: "Baby Corn Tandoori",
    price: "230",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRcyXDalBrl5pBlpmUUBOSn-BsNqEG3p3AMx2j9gJj41dkcLdssiVK0fQDpODA&s",
  },
  {
    name: "Bhindi Sunehari",
    price: "210",
    categories: ["Starters"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTmguNx9tKjVzIsRBKWlatHY1b5r8uNASoMOoucAlo_7QqBEjFvCMu9lkWeFw&s",
  },
  {
    name: "Dal Fry",
    price: "130",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQz3YmEz-ixbsaPM1A-y-ikrxJ4jlaxbn1NhSphHfrc8srCw9WLLurGbesfSw&s",
  },
  {
    name: "Dal Kolhapuri",
    price: "150",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQfAID8BP2PschsB7OtsMneg0v1edvRPWx1fiUhM6pig6EmzlWTg2b063wx0w&s",
  },
  {
    name: "Dal Tadka",
    price: "150",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQo-1OW3BTdHv_mLvfesfUInkq_Eggpvtz7Krw-eYArPm21AExUZc1Ea0r_o0E&s",
  },
  {
    name: "Dal Palak",
    price: "170",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSarYR95dtA6ecg50szPhw-Vm85sMpcLuPLaeQAcEFVhiwC63TWIfHbcqT-Kg&s",
  },
  {
    name: "Butter Dal Fry",
    price: "150",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRCX0FM04uh6DMEhZVGXjQAz80mf3_mAZXyfMMUHlpfiyx3poYdzdliGhauKw&s",
  },
  {
    name: "Veg Kolhapuri",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT8zRuSChfSPejK2Mi3VSSB6WqBHTvEywmc83Qn1R0DIx-P15evBLDNJ7TeZw&s",
  },
  {
    name: "Veg Tawa",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRawkfbn6ZBn8GjddDqi9d4AVzuiFm95bzslVEc1vwfTsw_fVLLg26s13JYn4k&s",
  },
  {
    name: "Badam Handi",
    price: "290",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTRXsr3Vl0wtlYNVGqMNeGqAKRovgdHbbkBCvmZXrjwbnZmtuAAdOkhMHzEIQ&s",
  },
  {
    name: "Deewani Handi",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRDVqBMYLIehvHAkdZMYgYhcVhpEoZryItg8qJ1ZLnRO4-b2_PlMNrjQX0veQ&s",
  },
  {
    name: "Veg Malvani",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSQPCbStMgnvPU-72qaKDTMNBY4esNSZcf6F26_bP8CicdOBBQVchSZm08t_w&s",
  },
  {
    name: "Veg Amritsari",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTGwValQNS_Rw17feEE6v5BTOL0nSczomEG1bpkUgfSxLwW5jAVBJypAdp9U7Q&s",
  },
  {
    name: "Veg Lahori",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRhWLW7i5nXm3JTZVWk7d-tYD6CIhNSnIJBTw-VCwuKpset5fhGvRklYaXn_Q&s",
  },
  {
    name: "Veg Lazeez",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRfZpxZB8tbQvbgRR3ImCIMfaCKYLhK4q-VS7tBpbQ2vBwHmCIFZj1BlfFSCg&s",
  },
  {
    name: "Veg Seekh Kebab Masala",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR9qF3vH8wY4nsrqE_p9LG41HSON9ueR3E2VOIMWRnFn_nTUq7ov6KAG6xxTg&s",
  },
  {
    name: "Hara Bhara Kebab Masala",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQUCTIURMXa_8RbI-cTgO2PV5ekpfcTiqKLgWmT_2_SAUWE7doYku3hZlFhSNA&s",
  },
  {
    name: "Methi Masala",
    price: "200",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRBrW2JsYQbuwOhbik4oBcSXFrgzp9uxhW_8zIGKArW6USXFxHd9AmMFysI8X0&s",
  },
  {
    name: "Methi Mattar",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTXDfue7ifriS0Wa_o0oqZNOZgq78wSaiW2yMxnFX21-kH4A4kpjDESTkNnT9A&s",
  },
  {
    name: "Kaju Methi Masala",
    price: "270",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT8cNO951rIn6xjFuk_98RLwMQen2cWSm3MK2jSk6lvIG9pOo5KYOr15Dc4Eq4&s",
  },
  {
    name: "Paneer Methi Masala",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS8Z25b6yJvvr8IvNtAbRWGiOKARreNc9kFL9oWfTS1fxZP2SNva-6l98cMbw&s",
  },
  {
    name: "Methi Malai Masala",
    price: "230",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTXDfue7ifriS0Wa_o0oqZNOZgq78wSaiW2yMxnFX21-kH4A4kpjDESTkNnT9A&s",
  },
  {
    name: "Baby Com Tawa Masala",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQYNIQPqk4EIUUtJBrYi5j7sZgCitYO5V7OqjviZ_bcLkahemNzilO5xDAijQ&s",
  },
  {
    name: "Baby Corn Handi",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSnCDOYSMWBvhGxKFfxHkQA7nDHDtKLkzygIZijtsd7Gfm4GS2X3FgZv8ZHtUI&s",
  },
  {
    name: "Baby Corn Kadai",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR5Wc80virh7lDHZZDl1roiUk4Pa54K-WA9-xzth7itspEK9FerzzLBjjLPXz4&s",
  },
  {
    name: "Mushroom Tawa",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRByCHg-hIoSisbKacCKPxjXJG6v5CkMksScD-upzuAyUTRBIhvHe2tm2FNcg&s",
  },
  {
    name: "Mushroom Handi",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSQoAGjgnl9RGyfm415t2uatB29V8pIF4drjPJd8mgYdGEMXNXFkZM3xNS24SM&s",
  },
  {
    name: "Mushroom Kadai",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSCyJAxPq9NygfLWHwWHJXwzZESUp3Rie0_ZQTNw27guh3xdE7-CrMzcXKlQsk&s",
  },
  {
    name: "Mushroom Butter Masala",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRhiRV8vFJPBqxf0FlT7SD8jCILa-sGEWswM8k-FGNO71GkZMIR2In73lVXPA&s",
  },
  {
    name: "Mushroom Makhanwala",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQd24zfKN3H718zwss24Aez02EOKSrjOc-gK3B4IjsemNj3HSu2a-BjkP2oUJ0&s",
  },
  {
    name: "Paneer Achari Masala",
    price: "270",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRNEKJN4J10ysLE_vKlb1AeyyT_VUvd-9NXfYLAbMBBX0XeaUOazYXDY21Ymw&s",
  },
  {
    name: "Paneer Malvani",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQr0NbVSgG-uBecjbKFjtqOVj_bGBpwNG9fDX7wD1UhSwgTyG6DwyAReEhDAe8&s",
  },
  {
    name: "Paneer Lahori",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR6YuU89p80g8fgz3zasXxzoeD1hKB_PO3OGacrorQkkTJzFrD9yNS-bELcEw&s",
  },
  {
    name: "Paneer Methi",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS8Z25b6yJvvr8IvNtAbRWGiOKARreNc9kFL9oWfTS1fxZP2SNva-6l98cMbw&s",
  },
  {
    name: "Palak Paneer",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTD20cpWXG9tZyEFGRWUo6uZfg081e6y7TtuI06yewJo6NfNDeZBSRhDolkRQ&s",
  },
  {
    name: "Paneer Mattar",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRGsNReiPN0gf84a_VDHG-Tm7_WpSYEFeHO_JTewmkGezEt2PPKg1VGe3JiV4M&s",
  },
  {
    name: "Paneer Kadai",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRebYK9td9pnUuP4KBg2BjQA3WkFMqxsQG5WEjCx_azeFF8CR_V6ejMkN_5V1M&s",
  },
  {
    name: "Paneer Handi",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSvEUq29C-lDCyCfXan54pJhXfOVeeN7MV50WjZI5GkgrqMZQc6eSDvrxK_HA&s",
  },
  {
    name: "Paneer Hyderabadi",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSj4keY-y_FdUb1V9HNXcVitR5wYlbW_v4oQAsQ6SdF_cVIo3JqPDyzIQj-3g&s",
  },
  {
    name: "Paneer Makhanwala",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTdmQpfo7Y5dKA3OeTQVmNRvgi0Kah3jMpW4QwrOSNYhj-T7RmHpYQ8Nxt3bQ&s",
  },
  {
    name: "Paneer Masala",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT6d-LXzM6YiR_1XDbh38OpJUP-cQovwephtaxyj3ZDYOevqJVenMkNCbKqwQ&s",
  },
  {
    name: "Paneer Bhurji",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTkmRrRIDcaqGl6lUH-a-T_T2ov1pMnvsCMm4d_AmHe8ZhU7GxPoMHN4JVzR-Y&s",
  },
  {
    name: "Paneer Chatpata",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS9L4iEXpcMgZzcnsS4XGngAqwmDqIAZbk-kPZBbomffQJaAvLhThpHfwwyQg&s",
  },
  {
    name: "Paneer Do Pyaza",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSrEgJ6m1HDGCyfR9agogAgsMDeBPYBMUajHbPWc5yEO0avq949uQBMJeqNJtY&s",
  },
  {
    name: "Paneer Lehsuni",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQYzn1w2c5rvwwIcI-DQ72nMlFHsaoP5LYnSgbgdEtxNdmv-bpHF3lYYvtBhQ&s",
  },
  {
    name: "Veg Kofta",
    price: "240",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSaSdhdtez91Jp-04kKB_lHtXNlUPdAuush9WESHudX4FmX8jRtJaVGa8yQ9QE&s",
  },
  {
    name: "Malai Kofta",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSI1kEQY_v4BdWERqAjqOPlkP5N-NreiKJJ6eMsgHzd6yisJww7r92qV726B5E&s",
  },
  {
    name: "Nargish Kofta",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQeopZ-u4lNXjDRrz5J_vlsvYb7RozCCq9JvPXGI1h3XyXamT0qzGMuEWgGZsU&s",
  },
  {
    name: "Kashmiri Kofta",
    price: "250",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT2eSXIeHsV-6-_0uWktGf4Kzyhvs2QQ7ZHZYPiGgNS4dVOUY2EHrZQAAj67dk&s",
  },
  {
    name: "Dum Aloo Punjabi",
    price: "200",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTpOZV79Yto1w3bX-D9-HmCHohPAz8mMPzCnxkY2qOutYqwXCr4ixETuYRtDA&s",
  },
  {
    name: "Dum Aloo Kashmiri",
    price: "230",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQwMX8Vkn5VCku4zY0ENOnvF5_CPtQ5wPkX6coe5D97WDwwoXa7QjsKaRjuZmA&s",
  },
  {
    name: "Stuffed Tomato",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQLkB8UPIKXAeh9SM7t1MGpaSJx1hSJLulriY439B7mC6I-mQqxtH21SuuM8Q&s",
  },
  {
    name: "Stuffed Capsicum",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcREm8h-RI18ft2u9OqOMGf1TpF4EeUaoJFHOHEuqDJtHUE3r_fpJ-M6lgisiDU&s",
  },
  {
    name: "Kaju Masala",
    price: "290",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQA94BB0w6JgMHZN5RGRAyb-z9MsvtROmrnta0WjD25cfQqfLqBPQYld58pOw&s",
  },
  {
    name: "Kaju Curry",
    price: "290",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQNQTl7MdACycUqfuCUtNYynHim9ZkS61-lO9zIe6x3Ay1K5AAtq_afg83DzeY&s",
  },
  {
    name: "Kaju Khoya Masala",
    price: "290",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTuOxo7jxzH7ZoMVd_apI6XcUOY2xEmm5bWkye6idMNduEq5xZJ75w0NvcHfQ&s",
  },
  {
    name: "Paneer Butter Masala",
    price: "260",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRRsxKG4ihsoIKMCbi9ohLt4Lji1re3FggHWztdWaSzymBA-Dw5MdIW5DKA9A&s",
  },
  {
    name: "Bhindi Masala",
    price: "180",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSlcKB2ipK4CHa2rqSKnh-x72HKuW5Z7NU92uHpwKL4tShcDLdDvSindJyZyrU&s",
  },
  {
    name: "Bhindi Fried",
    price: "190",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcThwkaPtYAekl_G6q4dOOOFUSkBLrCOUu_sMO1KgPG-SQTHVZ1UO6wDapM3kTM&s",
  },
  {
    name: "Papad Ki Sabzi",
    price: "200",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTGX3AXKnRFQoJN-HIEERrwSg_8e9i2citaARMejN-DAorp4rZB0aFGEKZIbmg&s",
  },
  {
    name: "Corn Capsicum Masala",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS0wcbKQOp-VXuaaRNAS19ya-URxIyoehng6GAatwrWh5Fx9M6eC5AdXUWKkw&s",
  },
  {
    name: "Veg Haweli",
    price: "300",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSBtsyRE2Cjx-87trg9U54okdd5NvLreN0FAl8IdPr4GQJmSuZlGzPlFAY4&s",
  },
  {
    name: "Veg Mansuri",
    price: "300",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTLuA5KSc68nHZ-yqqgG-U2dQbXZYcg3PMoEOYycXpmybm9Q_1VWgw29zsKrBU&s",
  },
  {
    name: "Paneer Dhaniya",
    price: "300",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR_oceM58RHWQH_Z_EhKBF9lyHUQR0HMukRhiUfkyOC-msovF5284cVEK5gzXQ&s",
  },
  {
    name: "Tez Guncha",
    price: "350",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTAKtLLrn2RhSw77S4oS2t4VSTsUyloAxIKRsienJ8H6p9i7-f2aUKME89Hdw&s",
  },
  {
    name: "Aloo Gobhi",
    price: "180",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRKUnixtAlS8PwipFjxZUiW6HfTDF3HSAjRQoddhscGTCb_q0uTA47ScjW4xQ&s",
  },
  {
    name: "Mixed Veg",
    price: "180",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQajzGbLeEaLL04klvoyH_tn_swZpLVgM8fdJcsP7-8uOIcA0UxZWu01KnJeiA&s",
  },
  {
    name: "Veg Kadai",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS8tA5W3qOow6sk26PJUlcY_IsIiz_CaljwvIFGZkkSPlSOr6mZKjvNwpA7mWY&s",
  },
  {
    name: "Veg Chilli Milli",
    price: "220",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT7eNwKyBgI3ByXMQbr4Kko2SEDhtb510jsJRPj-eS33mliPlwk_QdC-X9bfA&s",
  },
  {
    name: "Veg Peshawari",
    price: "220",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSWnIENpuCfWFU4AoSXM8YE66KBvBZAw_QWXWwF6fbwDpG44KmgTiY-Jxm7Vg&s",
  },
  {
    name: "Green Peas Masala",
    price: "190",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSgI8JFC2tuqpH1bKpPM67jszX33Obet4AMEX22399P1WEnGY5HFa44JGMo14Q&s",
  },
  {
    name: "Green Peas Tomato",
    price: "200",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSGvgRf95pymy_Wu2g59lM1NlioNnkBgkT9aRKiZ9dBT2DOPNXOfD0CWTP06nY&s",
  },
  {
    name: "Green Peas Mushroom",
    price: "210",
    categories: ["Main Course"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT6tOv_6V_Yt9_cEfBrzT67wJHuzFSCbVOg77_NM2wgeR43S8tZtUPuFmtm0us&s",
  },
  {
    name: "Roti",
    price: "30",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS8tzfW3lRI2dUWHiFeCwCHgsSsvPFy6Af82SvwwPshfsJmpyK6QhSElPYyRA&s",
  },
  {
    name: "Butter Roti",
    price: "40",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQheZ0_6CZ0oCsMDfaylPAzVbClgCBN5Vj9kJpfji6YZbC1Bpk0QA4uqdrHNQ&s",
  },
  {
    name: "Missi Roti",
    price: "50",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRUtczYrAs1WCm0BIEOwOgIZzxyYqdS-qMQksP1X89Twf--3ivVF4Zql7K7BA&s",
  },
  {
    name: "Butter Missi Roti",
    price: "55",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTWk7rusxrmBDrR9qJ7F3ozj0WcK-PAHWHGmjC8Zd5_EesRLwv-GN1-bLinNw&s",
  },
  {
    name: "Paratha",
    price: "45",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQvVtpP_Vqd83PN1fsgGwmjG7uxPpWV-CC6s7pdAP161uUWXdkTKIVx2h36gg&s",
  },
  {
    name: "Butter Paratha",
    price: "55",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRkMbvyWQFE18V0ffzQxUrMU5TzhEHeVMt9fLDG4Z8BMzKK2y9uK9Cu1Rc9rQ&s",
  },
  {
    name: "Paneer Paratha",
    price: "140",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSlE_LaZDHpLw4qDMbofwHCAO6doSR8rGCXzPkOM6vFpx4i7DHL45ntV7_u8w&s",
  },
  {
    name: "Stuffed Paratha",
    price: "160",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTxOcG7jSHj6Ei0T5dGZFxhWxsmRxt3M1Y9aK_VWJGmcqMFIFLaRi_tO4v4Ipc&s",
  },
  {
    name: "Lacha Paratha",
    price: "55",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRAVfrl4itXuJiSYZxyeanfR5WLomyWBkDY-k8DRwhbl-h0YXcL9JNGYIpCNQ&s",
  },
  {
    name: "Butter Lacha Paratha",
    price: "65",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRAVfrl4itXuJiSYZxyeanfR5WLomyWBkDY-k8DRwhbl-h0YXcL9JNGYIpCNQ&s",
  },
  {
    name: "Naan",
    price: "50",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTDuPGXqTbsk1i7ja12nU4fM8sjIjp_xHOntuFUN8BQ7iQJUouBCvaiX8ZDMpg&s",
  },
  {
    name: "Butter Naan",
    price: "60",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRMnvlAPRtXn_ukZ6R58ovhDfjw9fAdiRQxFhnlyzC5-6n6nfrY5RocBRX-2w&s",
  },
  {
    name: "Garlic Naan",
    price: "65",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSL3yuQ9HfmchuH8ibTAwUpGY8MT4nFGDjv58cSW6ID8JdzhMqeWbXISyAmLQ&s",
  },
  {
    name: "Cheese Garlic Naan [ 4pcs]",
    price: "65",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSRUmeOgYb66AOe7n2Ip3rYj5IhogHvEHcHP0LOYIPWIcGoWvJtkFBaL8hPxw&s",
  },
  {
    name: "Butter Garlic Naan [ 3 pcs]",
    price: "40",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ_eXf3XlDXJ2GgNnnfNcZsUrp7rb6JX5IO3i13b35yPzMhM-VWnkYa5ng-zQ&s",
  },
  {
    name: "Kulcha",
    price: "40",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQOyRbRFkvEgGtt6Ww2f7Lz-yxDCp7en-n0dkG3GrIzkM_z-2vCRmIyNKCi6N8&s",
  },
  {
    name: "Butter Kulcha",
    price: "50",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQJgKssm_dXfAWZgMCjwRrcNjCFpCdLOXamjKEhi4KiJnCprbw7EDP5SSrVrQ&s",
  },
  {
    name: "Roti Ki Tokri",
    price: "260",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQKxYhsElnybMeBtFtEn4wqlOVN3T7gXF5KErdE5RwasewnKAq-qtkpf0EwQg&s",
  },
  {
    name: "Stuffed Kulcha",
    price: "100",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ9endMoHLSv-Q8n5igU3YM24PENiFHWdBKQFv6nRrTTcp8rASg10p9_kbeQw&s",
  },
  {
    name: "Garlic Bread",
    price: "150",
    categories: ["Breads"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQFIRUPancghWAW_ryb6ml3pG-mPvOC8FCnZDC_kf6LNF_gcBuvUYOfExZ0pls&s",
  },
  {
    name: "Steam Rice",
    price: "120",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ05jY3Hx1YmvMdAZnjn360Y7jgb0XGtcTJK9uK5m7T_rqiGKgoJEoTCtNJXw&s",
  },
  {
    name: "Palak Khichdi",
    price: "170",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSIw2m1e22q-Krd5k2CpDm0KbXWhOYdBxU12BuFioa56sZkqskVXrOfjJzN3Iw&s",
  },
  {
    name: "Curd Rice",
    price: "170",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQLSwnjSWUy9kqsWY3tSkF9Is1P3gBDnw1M05v4lDchgOOcrzRCi9qQhgDLkw&s",
  },
  {
    name: "Ghee Rice",
    price: "170",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQkM24p4d_YIcROALo2LCdDoQAKoOIzp0CbhRQRpOUyIysFG75IEZusfh-O_Q&s",
  },
  {
    name: "Veg Pulao",
    price: "200",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRFaSFO6GCkZoNk9Luj25TPRFtsCxqilbm5w3MQo9SGXw3nG0pp1Lfhz2apEA&s",
  },
  {
    name: "Paneer Pulao",
    price: "210",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSgG7iyGHyu8dRPBZx5x-rkeYj4pm7bUmu1SMi9trIG2katMD_IpA-dQcWUWNU&s",
  },
  {
    name: "Kashmiri Pulao",
    price: "220",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRIatNOAEvMPd5v8SOpEXdO6nii3Wmic_dTm6X12FjnecN3LOyaFxu3J8LMWL8&s",
  },
  {
    name: "Tawa Pulao",
    price: "210",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQLSVPYA_Me0-0Np8pCxwv87fuBh-r3bKQ9X_vRsrqbXzNq1vfldNiZZDyEJA&s",
  },
  {
    name: "Paneer Dum Biryani",
    price: "260",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTNAd-cljzY9FTLkTAsCkAS66OPdSP_bnNOTRukQ6YJEgVozB3zLxv5_Zzw8Q&s",
  },
  {
    name: "Hyderabadi Biryani",
    price: "250",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSMbIq4IASLxAwASL1jwWdMN5d1tcMj8KGs0iFOEOdH3KCdvg6XZEoDlAWpL98&s",
  },
  {
    name: "Mushroom Biryani",
    price: "270",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTT-a9bDpYirESXdGLftUQ3jBZAd10U0gI6PX6dtjjilpiNqsvSX3EEHXOYeg&s",
  },
  {
    name: "Veg Dum Biryani",
    price: "250",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ3WSMCJn0EjyaBR9k3IW1U2eGxmxhbX3GWAQGksu68srhjaUSUvs3Jh4QP4A&s",
  },
  {
    name: "Paneer Hyderabadi Biryani",
    price: "260",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTNAd-cljzY9FTLkTAsCkAS66OPdSP_bnNOTRukQ6YJEgVozB3zLxv5_Zzw8Q&s",
  },
  {
    name: "Paneer Tikka Biryani",
    price: "260",
    categories: ["Rice and Biryani"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTzXZEHvbPAYeMBfm_JePYF8IM5ZekVz78_G6MsPTWr-e2ong43zYzzY3lX3w&s",
  },
  {
    name: "Idli Sambar",
    price: "70",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSzjOWj0kyzibRZ5IvIKXV_qFjwtg7DtYvbr04g6yFS6nnhbModIm9WJL3k32E&s",
  },
  {
    name: "Medu Vada",
    price: "80",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQJNBvaGJnQQIS7953IirU0luq_EeOKwPUw7fX_iH1AZNPrMJb6b3qBvGVbEA&s",
  },
  {
    name: "Idli Vada Sambar",
    price: "80",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQwWumO4aJwtvHY2zeHlF53-n-LAmFY89dhBmyT3mRftHn_-EHpKmHF0fi6WQ&s",
  },
  {
    name: "Sada Dosa",
    price: "90",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQLF7hDSKhxEFiNl-bMyzkxsyvle62ZpydxpNes376la315sY3CAJxLzpkOHw&s",
  },
  {
    name: "Paper Sada Dosa",
    price: "140",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSq_xMEnawE6K7NISDJuBBCXDJNBZ56MyPJFIt_d2qgURQLtwQnf72f13v5Ng&s",
  },
  {
    name: "Dosa Palak Sada",
    price: "110",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSFWA6-7QXRoQW8eed1mYJalmK7_4VNJpz_O-wYfXQrhWLmXHOK7uUUg26AlT4&s",
  },
  {
    name: "Dosa Palak Masala",
    price: "130",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTpEiP4lsCGX8CzpiZo7lzt3_ey9hPIUZLn5QpzjPdvcqNf8126jJTozA12p-g&s",
  },
  {
    name: "Rava Sada Dosa",
    price: "100",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRI7geblTY4annMFHhB6uDzBMT_MK76-kAQUzzpOebLBbAHCieNPYF7B1unkQ&s",
  },
  {
    name: "Mysore Sada Dosa",
    price: "120",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRg5xqdfKd5-szDCPp0fs_OhboxGC9s-KpaL-fC9XUCrRWEBj0bnc-ze8gCTA&s",
  },
  {
    name: "Spring Roll Dosa",
    price: "160",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQoglerGZ-CPGKusKru3tQZFVJitd5qtvqs0QQpyNQk9szfWc2BTgGoK-BDyug&s",
  },
  {
    name: "Sada Uttapam",
    price: "90",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRDHAYUwxkWts725NgANsIDeQvSUnmSLp53EfF7w2LiyfBbcc_LfohoRw7XVhQ&s",
  },
  {
    name: "Masala Uttapam",
    price: "120",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQkWSz_KDIamS8VOl02BjrjcbZvU8hDH3z_AeksGrP_DYxwUepcbDUZMDEZaw&s",
  },
  {
    name: "Onion Uttapam",
    price: "120",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTiJUa1XD_9P1yc30AREWVfwxB7nXvq75-TVRMCG9aUPFhbjFRH2WLmclk9i3M&s",
  },
  {
    name: "Tomato Uttapam",
    price: "120",
    categories: ["South Indian"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSSWWhRLr9YR-YO9AcDOd1bRNH1MXfNwy2x1Iffh3pIBuYojOGgbfE5ZkA0AAk&s",
  },
  {
    name: "Baked Nachos",
    price: "140",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRWm_KaAEDeojnqrhp6LaTLkfvXLoTyfMKXEKpUbyr3EsCnsHw61XUqphYd2g&s",
  },
  {
    name: "Mexican Baked Nachos",
    price: "170",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRRnmxlC3SOG2-SCU2GBxu2svJGprrXyNfXa11O5dJmN9FpB5CGmzgFbYNGt5w&s",
  },
  {
    name: "Alfredo Pasta",
    price: "220",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTgVCMTKftCE836tHswgI-Fh_8Ox6USevohuRspRUf0FsuY4RQ0tm3tGu-gOIM&s",
  },
  {
    name: "Pesto Pasta",
    price: "220",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQt93B5Kadok8TuxaJyRsmIUvjY7NM6Uj6_5BBKE94nk6N2fkauLspkD8GWLA&s",
  },
  {
    name: "Arabica Pasta",
    price: "230",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQGKfcseLEOhDPWCdLVlFTqsNl3KDOxpZCz_sj6aS6Ijy0ZN7-gXbV9oa3mJw&s",
  },
  {
    name: "Mixed Sauce Pasta",
    price: "240",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRAtKrcEKzqVBc04gWcMbAxULO6e18dVPIAEr_6s-9pbsmco8HqNEwDk24s7uI&s",
  },
  {
    name: "Pahadi Pasta",
    price: "260",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ7s87rHvk3qnrjL_CygiXovVyCAaEQTJayOWweUi_x8zWY23CnUdZr-_f4Xg&s",
  },
  {
    name: "Jalapeno Peppers",
    price: "260",
    categories: ["Continental"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSfjrnHfwKvQhSW-JOokJQqt67PzTQ3IaE_InBkJXxFtkoDd6PqdqXqbBLDuVE&s",
  },
  {
    name: "Veg Manchurian Dry",
    price: "150",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQApmtoFOAWnfDzRoi__E2XBK-eZoOP0QmfRLNj3UG8vUhQYCMpfYWAoCArRj4&s",
  },
  {
    name: "Veg 65",
    price: "180",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRs885uOH33wbeJkD5qBTn5Wuvq3h8Ak3Z0NdQnRjShyCP7OwoG7Rv17aLvxQ&s",
  },
  {
    name: "Paneer Manchurian Dry",
    price: "220",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRVgW4fxq26JQjsn9YV8tHSIcCTBi9Q1MBYl4_zneRUDjfyl_x35gIs2MMIH0c&s",
  },
  {
    name: "Paneer Chilli Dry [ 5 pcs]",
    price: "220",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcReJWGFn9ZfTSVVYxZXGNVMSzm_mRSPdE2E-J0_bxUee-DL-RvfsSrqM97lLXM&s",
  },
  {
    name: "Paneer Hot Garlic",
    price: "240",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRs2VHx6OwHhS5cicwgX0QMmDIwvRCnaV12WbGErt9SzrNCuh7C3sRaqGEdJ5c&s",
  },
  {
    name: "Baby Corn Golden Fry",
    price: "220",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTpGKfGjzclbxE7tgBt3XLecrm85UDukaNUFYPhGKnATTUPqfLxEVbauNAZDA&s",
  },
  {
    name: "Mushroom Manchurian",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSrZsvu_aYTjj5ro2mkMiEQT53Zt0bkndm1HGB9-DovtKJ7z-JGPiC8varoBw&s",
  },
  {
    name: "Mushroom 65",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQQGMcMwcRc2bj4kQaxZad2QQ1OaGTGjNzaq6vfcyaCO9_9vH22mAonJ3eUQt4&s",
  },
  {
    name: "Paneer 65",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQgF9UQ7XEpa_hzoB4vqImJNxhtoXo1bSkxXXYNGSrJI7XQx7luoS0Ny9cp3iw&s",
  },
  {
    name: "Paneer Pepper Dry",
    price: "240",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSDIs7QAaa7-lp7GFx-iEGBFEGK1oLrfO02rHZFwrGDyiiJkGgvf-d2Qz1Rnk4&s",
  },
  {
    name: "Veg Manchurian Gravy",
    price: "181",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQw8WrK-TEzlWiJEVpbxBxV62YG21LZFviW_8irVggQOnmUtkGTQnAyXycqDw&s",
  },
  {
    name: "Baby Corn Manchurian Dry",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQUiO4kN75Sx48Bx9oypYkE8u6FEmyGPLzCmb20QoFXauuuCuD3ih1yWnx58w&s",
  },
  {
    name: "Paneer Manchurian Gravy",
    price: "220",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRIoCqErrf1Id6zPI8oAiW4vhFfgAyuco-ddkweMV_d38nNLdaSYlcnZs85SQ&s",
  },
  {
    name: "Baby Corn Pepper Dry",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSNh1dggcClaNG7w4IO4m2ShCJV0YFWCJxnuhHY9yGaZPh6edzGg3U_lOMW9tQ&s",
  },
  {
    name: "Paneer Chilli Gravy",
    price: "220",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT-wFtrY9jC8g6J_AnYJFHL2rkC9r6Z_CBWEXltrzr1wRgpnB9cw35BoiwUpg&s",
  },
  {
    name: "Baby Corn Chilli Dry",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQm5ZxdAGlyVPPPQD2rQwxBjgjJz3rHxvNY38IuLtmtQIBRyNDmA1ZacM4rJ6M&s",
  },
  {
    name: "Atishah Aloo",
    price: "180",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRoZvH0SdrcfgiMq_N4eCFbggPq8rNbVGxE0x1r2jmBAnG9q8nv4ifIoM6sRjk&s",
  },
  {
    name: "Mushroom Chilli",
    price: "230",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS2lHPLAFWubXPgx0SA6Thd960CxOf6865TI-UU-14CJe6MKS9kJoNF0Dkz1OA&s",
  },
  {
    name: "Veg Spring Roll [ 6 pcs]",
    price: "200",
    categories: ["Chinese"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQqXrVrNSwaV7K9_Z9NOyRGA5IcTpE1EOE1pZtccTshpxWHeFSfg87lbOEnCVs&s",
  },
  {
    name: "Ginger Fried Rice",
    price: "200",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRoGFWFGbnfRGY9R_ywBvKM7TEQAn8Np_X2aw-vCP1H2WlS7dY2yGkn19OlsR4&s",
  },
  {
    name: "Mushroom Fried Rice",
    price: "220",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQN_XYBaSyYk2SrQveiDlnXCRZcOyptYc01d_PcswPkulpYz-HTwdp3AeBVGg&s",
  },
  {
    name: "Paneer Fried Rice",
    price: "220",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRjZaexN3cVZouYAjQSuwULtWURCuRt7T-zA9fqbzIMM9eYmA6YpU5C0n3fSA&s",
  },
  {
    name: "Paneer Mushroom Fried Rice",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSbtRX3ok04Avo4dLYBQuWyAwUp5c5IyToq_7a7yfl8XTAGOHMgF5zkGhnzQFg&s",
  },
  {
    name: "Veg Singapore Fried Rice",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQwEtZRji1Ku_xv3bG52R7GNybWvHZ2tbf7bV3fKzp91zvTMDmQoEU79fzLTrM&s",
  },
  {
    name: "Hong Kong Fried Rice",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTqHhnAIA1GcMgPEmL32mE1h9jPlrsGBK8paOlxgaR4II2NWBqRZ5sLiKr1PzM&s",
  },
  {
    name: "Lemon Fried Rice",
    price: "200",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSgdNAAx52nXkGaAtkrX7ZkHYfdpgsNyF1eUMN_akYg79sPMuLfZZzjewWPgVM&s",
  },
  {
    name: "Veg Combination Rice",
    price: "220",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRuTMUazxhpnUsUMf1pkJIUcge8FsRTJy6gY2m9aqL9OVxuFRgBscRzKA2ilvU&s",
  },
  {
    name: "Veg Manchurian Fried Rice",
    price: "260",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSjg_io6MJUf3ZIB0tLo0ptfRkneA1ecVC8fHw7g7-0CFxG3g-u7-jMJjPYe7M&s",
  },
  {
    name: "Pot Rice [ 350gms ]",
    price: "300",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRCBYH9noIctRVNF6qO7uDkaqCsOh7ZUgWVjI-ZYfEoebegCRoNL_bkdBjIOsM&s",
  },
  {
    name: "Paneer Manchurian Fried Rice",
    price: "300",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQC9oYV0w_q1tPCT7-0x4DGrPZJSo4qwGejQbo0adSEtVZFDhtQnvwEpFcEfmU&s",
  },
  {
    name: "Hakka Noodles",
    price: "200",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTizpDh2POT7NjwZKM6FGnn5GL1QVFJq7KrrvZLi8yTkhJSsWRwpUteUxXwxQ&s",
  },
  {
    name: "Veg Schezwan Noodles",
    price: "220",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTApOD2NaO06UW5yuVs_lMFOcxmnIlyhstiifVggFveaqFQbKTenYbIv-P3_g&s",
  },
  {
    name: "Mushroom Noodles",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTS09essLkw9_wpVTboEdqAH5Lkz7dfIhiBkj8ypBLAJOlIERv6Tr5zkSx-WQ&s",
  },
  {
    name: "Veg Singapore Noodles",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ0iYGBHnbS6AX9JkDm4xisJ6JUwXS_MQWOgt7ov5LcG-5qih2cA_LZGS60Bg&s",
  },
  {
    name: "Hong Kong Noodles",
    price: "240",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQIgN_RemLLrZ8k9qJJrrXecPIi7EXuEYxm10aU6n4fopA6B6INdmfWlRXaA94&s",
  },
  {
    name: "Triple Schezwan Noodles",
    price: "260",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSXK1tm_DSxFulshrdzUbFB2f33BUuRNuWItsGj9oeQkv3fJ3AWHbMt7mE6DU4&s",
  },
  {
    name: "Veg Manchurian Noodles [ 450gms]",
    price: "250",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQvPptnhL8GXbK-5rUpDPPySbpyYUBo0_snoNNYNZ0sJrE7Ayc6CzlhaIE25Q&s",
  },
  {
    name: "Veg American Chop Suey",
    price: "230",
    categories: ["Fried Rice and Noodles"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSN9Tk8wXuY9pZeaR3IE5F4dLICtMM5shSLfmU9NEJSpE7kTdvmLHx9M9qMNj4&s",
  },
  {
    name: "Veg Sandwich",
    price: "70",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTqWTlOIKUOuEWswHICW1B_HL9YNy6xtRzxQuRHBLK5IzKfKZoqINE1O6ZdakI&s",
  },
  {
    name: "Veg Club Sandwich",
    price: "160",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRLyT84GWHEWhyugT4e5G4fhvrWMw1Iq-Jz0tOytDhrf0d_sZ2cQgaTeKm5Jw&s",
  },
  {
    name: "Veg Grill Sandwich",
    price: "170",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRSZdJAWVJ7aaDGVyCcNq47C_HzZi_GZpKxOST2xVt4GTohHRIkfUZGxU7c0BU&s",
  },
  {
    name: "Paneer Grill Sandwich",
    price: "170",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR0e4psHBum9JHNEHtBMLSqw-XB2cki-bvrRS3Hpr6dmKDIUAMq3peB5CVILg&s",
  },
  {
    name: "Veg Toast Sandwich",
    price: "90",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSbAEM_EJCxM98KdVMFfNtVTwK8nxQapwPx00dVWTgP7AOANUAZVzUoVn_NIQc&s",
  },
  {
    name: "Cheese Chilli Toast Sandwich",
    price: "130",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ8Sk49NCUqJfHrN8e_TMDY0uBu6TnRvBkYwmuivxx9NzQhwRmRi15UAUkQVQg&s",
  },
  {
    name: "Masala Toast Sandwih",
    price: "130",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSPRsuVaaaxMgqWNkyzPHTy3jMUFrTzOr_qVZfy4FBASCv6dPqzFP-uDiccyA&s",
  },
  {
    name: "Coleslaw Sandwich",
    price: "210",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ-mAkB1iAkFw21PwzFpaxcQaqQL1AfYKwRCzBywFAa9TtxpP4DuHAN9r6N3Q&s",
  },
  {
    name: "Bread Butter Sandwich",
    price: "50",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT5kfDcdkiix0Jh8IEViacug74UoqNftl5VVctFHFgRmYPcpMcJbacoGNdJH60&s",
  },
  {
    name: "Bread Butter Toast Sandwich",
    price: "60",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSKT_iDWkBLRbRrdxd3V8b8oIK6dZlPBAt1he9FvDF03vr3K60U9Fxy3pannI0&s",
  },
  {
    name: "French Fries",
    price: "120",
    categories: ["Sandwiches"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ_8kb80Kku34hTr4GF9g0rmdYQG_s3x6P1bJKv7yLaTSNR-DDNRrKmcbod3w&s",
  },
  {
    name: "Masala Pav [ 350 gms 2 pav]",
    price: "160",
    categories: ["Pav Bhaji"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQSwGcvXERL9I_iqKmuoKPD0cT6rCLGOiWUNAb4_d4hKK6O2CrRG65YIVMdY5c&s",
  },
  {
    name: "Upma",
    price: "60",
    categories: ["Snacks"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQa--nD7sGCuPLKRfEjyogJUw-pBmDm6Rz6FNKdFC6dW_tvRdPqXrjhDTpoNIc&s",
  },
  {
    name: "Poha",
    price: "60",
    categories: ["Snacks"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRLuJbSShhgibwyOZBnZOA_94WnWUnbbYib8Q3GkaIiJYN0_8EOQH8K8eFIdQ&s",
  },
  {
    name: "Misal Pav",
    price: "90",
    categories: ["Snacks"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTirf7l8hNUBelbUAjQxn60I4PQx-n6kqDpcVUpps4Mm25F4IN_yTEyO-_yTMk&s",
  },
  {
    name: "Tomato Omelette",
    price: "130",
    categories: ["Snacks"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSTuH7pdXjjegvEFrcMm4PIxdzpF647aSIONmQPSozBGKk4mwEa5tIb0ohK0MY&s",
  },
  {
    name: "Fried Papad",
    price: "40",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSrtQIjqe82OMM79RMgUfcuET67WqNDuNW8UkfjUuVDbIAquxfAb41ZUX0d6-k&s",
  },
  {
    name: "Masala Papad",
    price: "45",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSf3xiRZXp9ncXY7lKz8LEut0ryjvU1Oek1gkFxZ9S92McmSA5OBS7DR3km0BI&s",
  },
  {
    name: "Roasted Papad",
    price: "35",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSyGQTzl232AuDAzy1Dles7q6i323xSTqOhe-3-KHrFQtSdeVNm_Aak4weKUyU&s",
  },
  {
    name: "Boondi Raita",
    price: "100",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQjnhw7tqNqgElCy7yQ_qJHR7Be8bPmTkAKJn9kG_9PyzTpGU-utidonCVtUmg&s",
  },
  {
    name: "Veg Raita",
    price: "80",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcR4bXlFE4dJwtcOE11BOplH9MMy9XB96w5NBKP8OeNeBOyW5v9dpwYRyAE3Cw&s",
  },
  {
    name: "Pineapple Raita",
    price: "140",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTFfrmRYjPWa3-VJe7QqTd37bOFu3ASLdGsgS9Gmfag4aLLbIoBz7-0T_qZgQ&s",
  },
  {
    name: "Plain Curd",
    price: "70",
    categories: ["Accompaniments"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRK7MFNFIfLBdajU5YkPLTwMM-DALbkjBiYyKoM3RMCzUp_1S8ZAfkXK8AaBw&s",
  },
  {
    name: "Kesar Falooda",
    price: "150",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRo6sxtFGJs9WC_BtHuOkli-3Gz0YZSRUpIEhrDg2W0RDu6c_j93-NnMDHC6Q&s",
  },
  {
    name: "Pista Falooda",
    price: "150",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQpcTF6oEX17PfsECRmY0o2RfNbClHFTbEAmYFTBb9ZerRaI771s1JIaQORN3g&s",
  },
  {
    name: "Chocolate Falooda",
    price: "160",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS5KWSyC5MnVwrGBrZ__vROCcMdkJG3MRU_Oucl-X2hlcv4niD1qd4CRei9qw&s",
  },
  {
    name: "Fresh Fruit Salad",
    price: "150",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSosd2LX9_EVK6sU07DE3C0Wtv7xFrrxo29WPLMyNENX72ygYC3dlthapBlnw&s",
  },
  {
    name: "Tea",
    price: "40",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTlJOy1hJa0MxRbsj6vNpKJ-0m_rZE3ZztqEbhRKld6X1x2ClZ_DdDrdSa4kT8&s",
  },
  {
    name: "Nescafe",
    price: "60",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ78fAo2iVGl4cQLR-KHaiVe_htamWmR8nAAkpsevmv8AdgE2WLLDoS7To6Ng&s",
  },
  {
    name: "Watermelon Juice",
    price: "110",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQEsiAFchG0_67SgSBHp6qxZNqTKrV5SDYuuHbsgpH3nFU8f_lj0Kvnc8Aenw&s",
  },
  {
    name: "Pineapple Juice",
    price: "110",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRL_VOLfXEq1T-q03aMcxaGUvZ8CJuX82wWp3UcCZE0vpHrnSmlxs5lUlHV_A&s",
  },
  {
    name: "Orange Juice",
    price: "110",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTcYVYjCoH0Hw5dWWR2G2CnJVYJyIjt4JP_t7oVHc6_73YVXXfYS81za5_ggw&s",
  },
  {
    name: "Apple Juice",
    price: "120",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQt02UGuUTNVgi70vm5WJSF9dYauo2NotwKn5UpyqDdC2PE0rSsaweGC8y3uek&s",
  },
  {
    name: "Mixed Fruit Juice",
    price: "150",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTBTXU77kXoD3L6jsQwgJ2DCQk-1I3U-72E2KzmqZ9Bt7yEqWGIkEZrCyf9Nw&s",
  },
  {
    name: "Virgin Mojito",
    price: "190",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS_Ofg7qOTByyt38A7Nt7C1Fd1myOrCQMnTT2FzeaTbJubHabLzIG8LI50IfEI&s",
  },
  {
    name: "Strawberry Surprise Mocktail",
    price: "190",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ2OvwwnchQN-UMJ-IpEQWJaNxzMPz6AKVQ8j_88CNw9RPIbK9BFLl4HrQu8Hc&s",
  },
  {
    name: "Blue Lagoon Mocktail",
    price: "190",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS8Bf2OdhgzLvJpjwzWxBg5WlnlSqo3lt11Sdm-a3V6EB-QUgMQqnQZBOllYOo&s",
  },
  {
    name: "Virgin Pincolada Mint Mocktail",
    price: "220",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQZym6LfzQe-kSNPogANX3TvhPfLYXzvkena76ABiJbezYBjhzTkcU7yuQFKg&s",
  },
  {
    name: "Refreshing Orange Mint Mocktail",
    price: "190",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQkJt2C_gZPAtroQq49WH8hcWOLT-ztorSj7GhKoWI8J7qb53kSROxp9lrTIA&s",
  },
  {
    name: "Buttermilk",
    price: "65",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcSaMdQXGPk1L0lxA_lsHHeam11BL_KjW9lsgddLjYI5_7XxSayMEeVnOKkefQ&s",
  },
  {
    name: "Salted Lassi",
    price: "120",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTZBLB5ojb11OKI3C8_jtpLsOnSmSBptjlp2LtF7v4L7qtzzO5pqwrEuhyoZw&s",
  },
  {
    name: "Sweet Lassi",
    price: "120",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT5bPlyp8juBvgqS79O8EsNDpilkgUV_2MAUSSH-2bwbM9zkYJUZZomMSHwYw0&s",
  },
  {
    name: "Kitkat Milk Shake",
    price: "140",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQQXELap3y1gN7lEtFDKpQ59evjbNv-dF4tXkoHSkrkxL9Y3OGlwjqFGRi_HcY&s",
  },
  {
    name: "Oreo Milk Shake",
    price: "140",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQyApOZpx9Y2FR1DFWtz7SfbqcCJdwIhUV1GOLSkVdDQLMs37e9VBZYQsvMFg&s",
  },
  {
    name: "Strawberry Milk Shake",
    price: "130",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcReteR3bI8SHcqEk9QqSYUiOU2FbZs9uFo-FP0DlKRCzfLt8VSSAdwTgDrcpZU&s",
  },
  {
    name: "Chocolate Milk Shake",
    price: "130",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcS2LcRMKWViu1jeN43w7wJBcpz85MAoxhEV6YcQ4KMUIA5eCQF890FD8VK7GA&s",
  },
  {
    name: "Vanilla Milk Shake",
    price: "130",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcT7_Us31mLxYmFiuCZxYwfjK4k-_YBViRhiwzZ3icWcqJ7tw1DGV2M1H33lRfI&s",
  },
  {
    name: "Pista Milk Shake",
    price: "130",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQJMtux_x_rtKLkFjEnphvg9osjJ5dd5NEMTllTuBOjKf9w9UGpPqKyd5BloQ&s",
  },
  {
    name: "Cold Coffee",
    price: "130",
    categories: ["Desserts and Beverages"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcTcmKv9wrq76nNGt_AAOTiqENM--gxFGXCDiOvYT5pCiyKWG5GLOEDdZ0n-eCQ&s",
  },
  {
    name: "Deluxe Thali",
    price: "250",
    categories: ["Thali"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcQ_91ssr9Xr0RxJuCzZnYAZ0kqYE14ZfMdUGulvHN_2DAJho03q6qS-mJqu0T4&s",
  },
  {
    name: "Comida Special Thali",
    price: "310",
    categories: ["Thali"],
    image:
      "http://t0.gstatic.com/images?q=tbn:ANd9GcRgUmvIvLgJyl-qF-XtY4SE15F_sL68hzQdwZPLVq3WNZYbiAWHjhxS5Q5igw&s",
  },
];

const images_arr = [
  "https://www.cookwithmanali.com/wp-content/uploads/2014/04/Paneer-Tikka-Masala.jpg",
  "https://media-cdn.tripadvisor.com/media/photo-s/0e/7a/26/31/chef-special-veg-exotica.jpg",
  "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Shaam-Savera-Sanjeev-Kapoor-Kitchen-FoodFood.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/paneer-pasanda-recipe-500x500.jpg",
  "https://www.zaykakatadka.com/wp-content/uploads/2017/03/17410425_10155176484558593_1192982162_n.png",
  "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Chapati-Breads_EXPS_FT20_136906_F_0721_1.jpg",
  "https://myfoodstory.com/wp-content/uploads/2018/07/Perfect-Jeera-Rice-Indian-Cumin-Rice-4.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2021/02/khichdi-recipe-4-500x500.jpg",
  "https://wp.missmalini.com/wp-content/uploads/2018/09/tadkakhichdi.jpg",
  "https://www.indianveggiedelight.com/wp-content/uploads/2020/04/veg-biryani-instant-pot.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2020/05/Instant-Pot-Paneer-Biryani.jpg",
  "https://i0.wp.com/vegecravings.com/wp-content/uploads/2017/03/fried-idli-recipe-step-by-step-instructions.jpg?fit=2485%2C1903&quality=65&strip=all&ssl=1",
  "https://img-global.cpcdn.com/recipes/9c18272e102c500d/400x400cq70/photo.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/masala-dosa-recipe.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/a/a4/Dosai_Chutney_Hotel_Saravana_Bhavan.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2018/09/rava-dosa-recipe-1-500x500.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/mysore-masala-dosa-recipe-mysore-dosa-mysore-masala-dose-27.jpeg",
  "https://i0.wp.com/kalimirchbysmita.com/wp-content/uploads/2019/07/Chilli-Idli-Fry-02.jpg?fit=1024%2C683&ssl=1",
  "https://cdn.tarladalal.com/members/9306/big/big_veg_crispy,_crispy_fried_vegetables-14684.jpg",
  "https://www.geetakiduniya.com/wp-content/uploads/2021/07/paneer-crispy.jpg",
  "https://mytastycurry.com/wp-content/uploads/2020/05/Paneer-Satay-1.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/12/fried-rice.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/schezwan-fried-rice-recipe.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/schezwan-rice-recipe-triple-schezwan-fried-rice-triple-schezwan-rice-27.jpeg",
  "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Best-Mumbai-Pav-Bhaji-Recipe-Pressure-Cooker.jpg",
  "https://cdn.tarladalal.com/members/9306/big/big_khada_pav_bhaji,_restaurant_style_pav_bhaji-15105.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2019/11/paneer-pav-bhaji-recipe-pav-bhaji-paneer-paneer-pav-recipe-1.jpeg",
  "https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe.jpg",
  "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
  "https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg",
  "https://www.seriouseats.com/thmb/T_OlO5KsET8FzpEfM2e80o2ulm8=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__08__20200816-nimbu-soda-vicky-wasik-1-28079d5d45ee4e47a37a969d1e4834a0.jpg",
  "https://cdn.healthyrecipes101.com/wp-content/uploads/2020/02/lime-water-recipe.jpeg",
  "https://www.zaykakatadka.com/wp-content/uploads/2022/09/Isabels-Travel-Blog-20.png",
  "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
  "https://cdn.tarladalal.com/members/9306/big/big_triple_schezuan_rice_(_mumbai_roadside_recipes_)-14115.jpg?size=0X0",
  "https://i.ytimg.com/vi/v1yRGf7yRgA/hqdefault.jpg",
  "https://aaradhyachinesecorner.com/wp-content/uploads/2021/09/paneer-hong-kong-noodles-800x800.jpg",
  "https://artoflivingontheroad.files.wordpress.com/2020/05/pizza-in-italy-vs-america.jpg?w=1200",
  "https://www.dominos.co.in//files/items/Farmhouse.jpg",
  "https://static.toiimg.com/thumb/53351352.cms?width=1200&height=900",
  "https://media-cdn.tripadvisor.com/media/photo-s/0f/27/0b/86/getlstd-property-photo.jpg",
  "https://i.ytimg.com/vi/jy0T2pGBv2s/maxresdefault.jpg",
  "https://midwestfoodieblog.com/wp-content/uploads/2021/11/FINAL-garlic-bread-pizza-1-3-1200x1800.jpg",
  "https://static.toiimg.com/thumb/53110049.cms?imgsize=148092&width=800&height=800",
  "https://static.toiimg.com/photo/56868564.cms",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2018/05/paneer-pizza-recipe-1.jpg",
  "https://s3.amazonaws.com/secretsaucefiles/photos/images/000/103/101/large/Pinsere-copy.jpg?1485308544",
  "https://myfoodstory.com/wp-content/uploads/2016/07/Chicken-Manchow-Soup-2.jpg",
  "https://www.asweetpeachef.com/wp-content/uploads/2015/01/easy-soup-recipes-cream-of-fresh-tomato-soup.jpg",
  "https://www.simplyrecipes.com/thmb/wESegBJXEupSdlPizooGRENtRL0=/5348x4011/smart/filters:no_upscale()/Simply-Recipes-Cream-Of-Spinach-LEAD-15-4c25d56a9c48478283724926705517ce.JPG",
  "https://cafedelites.com/wp-content/uploads/2018/11/Cream-of-Mushroom-Soup-IMAGE-135.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/sweet-corn-soup-recipe.jpg",
  "https://i0.wp.com/foodtrails25.com/wp-content/uploads/2020/11/Creamy-Mushroom-and-Sweet-Corn-Soup.jpg?fit=1600%2C1067&ssl=1",
  "https://www.aspicyperspective.com/wp-content/uploads/2019/02/japanese-clear-soup-recipe-12.jpg",
  "https://www.indianveggiedelight.com/wp-content/uploads/2021/01/lemon-coriander-soup.webp",
  "https://www.errenskitchen.com/wp-content/uploads/2018/08/Quick-Easy-Chinese-Noodle-Soup1200.jpg",
  "https://www.washingtonpost.com/rf/image_1484w/2010-2019/WashingtonPost/2014/07/30/Food/Images/PlateLab_0803_ColdPineappleSoup_crop.jpg?t=20170517",
  "https://vismaifood.com/storage/app/uploads/public/5a0/eb4/375/thumb__700_0_0_0_auto.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandhini/Dal_Shorba_Yellow_Moong_Dal_Soup.jpg",
  "https://www.simplyrecipes.com/thmb/au60mVTA5EPLLknjdtQ9BYO0OC4=/1067x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2011__08__dads-greek-salad-horiz-a-1600-bc71b85bc907414a9bb3179a923b58fc.jpg",
  "https://natashaskitchen.com/wp-content/uploads/2019/01/Caesar-Salad-Recipe-3.jpg",
  "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/4/7/0/FNK_macaroni-salad_s4x3.jpg.rend.hgtvcom.406.305.suffix/1371597354963.jpeg",
  "https://www.acouplecooks.com/wp-content/uploads/2019/05/Chopped-Salad-008.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2017/03/seekh-kabab-recipe-veg-seekh-kabab-recipe-vegetable-seekh-kabab-2.jpeg",
  "https://cdn.tarladalal.com/members/9306/big/big_pahadi-paneer-tikka-(kebabs-and-tikkis-recipe)-1596.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2015/07/Restaurant-Style-Recipe-Paneer-Tikka.jpg",
  "https://maayeka.com/wp-content/uploads/2012/05/mint-kabab.jpg",
  "https://www.ruchiskitchen.com/wp-content/uploads/2015/04/Achari-paneer-tikka-recipe-6-500x500.jpg",
  "https://cdn.tarladalal.com/members/9306/big/big_paneer_kurkure,_crispy_kurkure_paneer-16095.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/malai-paneer-tikka-recipe-1.jpg",
  "https://st1.photogallery.ind.sh/wp-content/uploads/indiacom/mushroom-202009-1599231835.jpg?impolicy=Medium_Resize&w=1200&h=800",
  "https://www.cookwithmanali.com/wp-content/uploads/2019/07/Mushroom-Tikka-500x500.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2013/01/hara-bhara-kabab-recipe-1.jpg",
  "https://rakskitchen.net/wp-content/uploads/2020/05/tandoori-style-babycorn.jpg",
  "https://i.ytimg.com/vi/EfUlgqtzXSo/maxresdefault.jpg",
  "https://mytastycurry.com/wp-content/uploads/2021/04/Dal-Tadka-Recipe.jpg",
  "https://img-global.cpcdn.com/recipes/21c416b4905b1535/400x400cq70/photo.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Dal-Tadka-500x500.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/09/dal-palak-spinach-dal.jpg",
  "https://rakskitchen.net/wp-content/uploads/2020/07/butter-dal-fry-recipe.jpg",
  "https://smithakalluraya.com/wp-content/uploads/2020/11/veg-kolhapuri-recipe-1.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2020/11/veg-tawa-fry-recipe-tawa-sabzi-tawa-fry-vegetables-tawa-fry-sabji-1-scaled.jpeg",
  "https://i.ytimg.com/vi/Tobh4CSm03Q/maxresdefault.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2014/11/veg-diwani-handi-recipe-1-500x500.jpg",
  "https://d3j4nopn8wm92b.cloudfront.net/sites/default/files/styles/recipe_main/public/Veg%20Kurma.jpg?itok=wehqp_P6",
  "https://i.ytimg.com/vi/vOQh441vbYc/maxresdefault.jpg",
  "https://img-global.cpcdn.com/recipes/3e2e0adcdeed4a1d/680x482cq70/vegetarian-lahori-recipe-main-photo.jpg",
  "https://b.zmtcdn.com/data/pictures/chains/3/19758493/39521ee51f5040ceab4da3c256206583.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2017/03/seekh-kabab-recipe-veg-seekh-kabab-recipe-vegetable-seekh-kabab-2.jpeg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/hara-bhara-kabab-recipe-veg-hara-bhara-kabab-veg-kabab-recipe-2.jpeg",
  "https://someindiangirl.com/wp-content/uploads/2021/02/achar-masala-methi-masala-10-of-10-500x375.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai.jpg",
  "https://bhavnasfoodjourneys.files.wordpress.com/2021/02/kaju-methi-matar-e1612996739917.jpg",
  "https://www.whiskaffair.com/wp-content/uploads/2020/03/Methi-Malai-Paneer-2-3.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2014/08/Best-Methi-Matar-Malai.jpg",
  "https://mytastycurry.com/wp-content/uploads/2017/12/tawa-mushroom-.jpg",
  "https://mayagroupjaipur.files.wordpress.com/2015/08/11811517_861873450549054_4371950312501970428_n.jpg",
  "https://hetalkamdar.com/wp-content/uploads/2020/09/Kadai-Baby-Corn-f-325x270.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl_sunitha/Tawa_Mushroom_Recipe_.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/kadai-mushroom-recipe-500x500.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2012/09/kadai-mushroom-recipe-1.jpg",
  "https://www.cookwithkushi.com/wp-content/uploads/2020/03/IMG_3557_11-1024x650-1-500x500.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2015/08/mushroom-butter-masala-recipe-1.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/achari-paneer-recipe.jpg",
  "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Paneer-Malvani-Curry-Turban-Tadka-FoodFood.jpg",
  "https://tastedrecipes.com/wp-content/uploads/2022/02/Paneer-Lahori-01.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/02/methi-paneer-500x500.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Palak-Paneer-500x500.jpg",
  "https://www.simplyrecipes.com/thmb/A-vGmB56jrEgQ_gbxa1XrNbJ89g=/4160x4160/smart/filters:no_upscale()/Simply-Recipes-Matar-Paneer-LEAD-04-54973561cdb944f587165ecf161acc83.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/kadai-paneer-recipe.jpg",
  "https://static.toiimg.com/thumb/54713904.cms?imgsize=248047&width=800&height=800",
  "https://static.toiimg.com/thumb/53519548.cms?width=1200&height=900",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/05/paneer-makhani.jpg",
  "https://www.whiskaffair.com/wp-content/uploads/2019/05/Paneer-Masala-1-3.jpg",
  "https://shwetainthekitchen.com/wp-content/uploads/2022/05/Paneer-Bhurji.jpg",
  "http://www.yourhungerstop.com/wp-content/uploads/2016/01/ChatpataPaneer.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/paneer-do-pyaza.jpg",
  "https://slurrp.club/wp-content/uploads/2017/09/DSC_0037-2-750x500.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2016/12/veg-kofta-curry-recipe-7.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Malai-Kofta-Recipe.jpg",
  "https://www.thespruceeats.com/thmb/OGPJvyvH3REpm9gnsPEMpQuSums=/1089x1089/smart/filters:no_upscale()/NargisiKoftas-56a511073df78cf772862ccb.jpg",
  "https://lh3.googleusercontent.com/e6x3H4_bGZ4sBcrx95952piTEueApgCSsgD58jIaxZW-9noQes7Fzh4hKqPmv6QI5zNtWEu-46ltn6nQJklxkhnhKTguiT0X",
  "https://www.cookwithmanali.com/wp-content/uploads/2020/08/Punjabi-Dum-Aloo.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2012/04/kashmiri-dum-aloo-recipe-11a-500x375.jpg",
  "https://www.dinneratthezoo.com/wp-content/uploads/2015/04/stuffed-tomatoes-4.jpg",
  "https://hips.hearstapps.com/hmg-prod/images/delish-classic-stuffed-peppers-horizontal-1538065876.jpg",
  "https://cookingfromheart.com/wp-content/uploads/2020/10/Kaju-Masala-3.jpg",
  "https://cookingfromheart.com/wp-content/uploads/2020/10/Kaju-Masala-3.jpg",
  "https://www.spiceupthecurry.com/wp-content/uploads/2014/11/restaurant-style-khoya-kaju-recipe-10.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/11/paneer-butter-masala-recipe-2.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/bhindi-masala-recipe.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/01/bhindi-fry.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2017/09/papad-ki-sabzi-recipe-dahi-papad-sabzi-papad-curry-recipe-2.jpeg",
  "https://hebbarskitchen.com/wp-content/uploads/2019/11/corn-capsicum-masala-recipe-corn-capsicum-sabzi-corn-capsicum-gravy-1.jpeg",
  "https://i.ytimg.com/vi/TkTqtTe2AdI/hqdefault.jpg",
  "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=963690960333625",
  "https://www.subbuskitchen.com/wp-content/uploads/2019/12/Dhaniya-Paneer_finalforweb2-864x1300.jpg",
  "https://avatars.mds.yandex.net/get-altay/5235091/2a000001827dbb57e50c3f9d86fd75f6f225/XXXL",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/aloo-gobi-recipe-500x375.jpg",
  "https://indianambrosia.com/wp-content/uploads/2021/06/mixed-vegetable-curry_3877-2.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/veg-kadai-recipe-kadai-vegetable-recipe-vegetable-kadai-sabzi-1.jpeg",
  "https://rakskitchen.net/wp-content/uploads/2013/04/8695283046_83b00cd195_z.jpg",
  "https://i.ytimg.com/vi/PC1ABltU4KE/hqdefault.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2015/03/matar-masala-recipe-2.jpg",
  "https://images.food52.com/W0mfXoP40AY-QWIqdWfEHOQyRs8=/2016x1344/18d61aab-78d9-409f-a895-89df70a5395e--june_10_221.jpg",
  "https://images.media-allrecipes.com/userphotos/147007.jpg",
  "https://www.cookwithmanali.com/wp-content/uploads/2020/03/Roti-Recipe-Indian-flatbread-500x500.jpg",
  "https://www.tamarindnthyme.com/wp-content/uploads/2019/09/Soft-Butter-Roti4.jpg",
  "https://www.whiskaffair.com/wp-content/uploads/2014/09/Missi-Roti-4-500x500.jpg",
  "https://static.toiimg.com/thumb/54504896.cms?width=1200&height=900",
  "https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_4:3/k%2FPhoto%2FRecipe%20Ramp%20Up%2F2022-02-Paratha%2Fparatha-stacked-top_view",
  "https://static.toiimg.com/thumb/53334885.cms?width=1200&height=900",
  "https://www.cookwithmanali.com/wp-content/uploads/2013/09/Paneer-Paratha-Homemade.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/aloo-paratha.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2016/09/lachha-paratha-recipe-lachha-parantha-recipe-34.jpeg",
  "https://www.mydelicious-recipes.com/home/images/78_1200_1200/mydelicious-recipes-lachha-paratha",
  "https://www.budgetbytes.com/wp-content/uploads/2010/09/Homemade-Naan-stack-1.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/butter-naan.jpg",
  "https://www.kitchensanctuary.com/wp-content/uploads/2021/03/Garlic-Naan-square-FS-42.jpg",
  "https://www.cookwithkushi.com/wp-content/uploads/2016/08/IMG_2320_-1.jpg",
  "https://cafedelites.com/wp-content/uploads/2020/06/Garlic-Naan-Recipe-IMAGE-27.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2018/10/kulcha-recipe-1-500x500.jpg",
  "https://thepepper.in/wp-content/uploads/2019/02/Butter-Kulcha.jpg",
  "https://i.pinimg.com/originals/a1/b9/56/a1b956e2dde6466e818104149643f0ac.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Richa_Gupta/Stuffed_Veggie_Kulcha.jpg",
  "https://www.simplyrecipes.com/thmb/_kfMeM8vmbWkGWn6Y0PDmHdfYu4=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2006__09__Garlic-Bread-LEAD-1-8b9944bb8e7a4fc49094da4d34f7ba50.jpg",
  "https://assets.epicurious.com/photos/57d70c8ade27564257b657c6/master/pass/perfect-steamed-rice.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/palak-khichdi-recipe-palak-dal-khichdi-how-to-make-palak-khichdi-1.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/curd-rice-thayir-sadam.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2018/12/ghee-rice-recipe-neychoru-recipe-nei-choru-ghee-bhat-1.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/veg-pulao-recipe.jpg",
  "https://www.whiskaffair.com/wp-content/uploads/2019/08/Paneer-Pulao-1-3.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/kashmiri-pulao-recipe.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/tawa-pulao.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/02/hyderabadi-biryani-with-chicken.jpg",
  "https://www.indianveggiedelight.com/wp-content/uploads/2019/09/mushroom-biryani-featured-500x500.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2017/07/veg-dum-biryani-hyderabadi-veg-biryani-recipe-hyderabadi-biryani-2.jpeg",
  "https://hebbarskitchen.com/wp-content/uploads/2019/09/paneer-biryani-recipe-paneer-biriyani-recipe-veg-paneer-dum-biryani-1.jpeg",
  "https://www.jcookingodyssey.com/wp-content/uploads/2019/08/paneer-tikka-biryani-2.jpg",
  "https://shwetainthekitchen.com/wp-content/uploads/2022/01/Idli-Sambar.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2014/07/medu-vada-recipe.jpg",
  "https://www.sandyathome.com/wp-content/uploads/2018/11/watermark_09-11-2018_10-51-54AM.png",
  "https://hebbarskitchen.com/wp-content/uploads/2015/11/dosa-recipe-plain-dosa-recipe-sada-dosa-recipe-1.jpeg",
  "https://static.toiimg.com/thumb/53239433.cms?imgsize=247810&width=800&height=800",
  "https://vaya.in/recipes/wp-content/uploads/2019/03/Palak-Dosa.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Shaheen_Ali/Spinach__Coriander_Dosa.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/05/rava-dosa-recipe.jpg",
  "https://cdn.tarladalal.com/members/9306/big/big_mysore_sada_dosa_(_mumbai_roadside_recipe)-14100.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/spring-dosa-recipe-schezwan-dosa-recipe-chinese-dosa-recipe-2.jpeg",
  "https://cdn.tarladalal.com/members/9306/big/big_sada-uttapa-(-mumbai-roadside-recipe)-2161.jpg",
  "https://mydaintykitchen.com/wp-content/uploads/2019/05/20190505_112836-1.jpg",
  "https://rakskitchen.net/wp-content/uploads/2013/03/8527219504_0ddb2cde6f_z.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Jyothi_Rajesh/Tomato_Uttapam.jpg",
  "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Queso-Baked-Nachos_EXPS_SDAM18_87888_D12_05_5b.jpg",
  "https://www.thewickednoodle.com/wp-content/uploads/2021/03/how-to-make-mexican-nachos-in-the-oven-3.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2021/06/fettuccine-alfredo-1.jpg",
  "https://www.cookingclassy.com/wp-content/uploads/2022/02/pesto-pasta-1.jpg",
  "https://www.saltandlavender.com/wp-content/uploads/2019/04/easy-pasta-arrabiata-recipe-1.jpg",
  "https://skinnyspatula.com/wp-content/uploads/2022/01/Pink_Pasta_Sauce2.jpg",
  "http://www.thesecretingredient.in/wp-content/uploads/2016/07/FiddleHeadPasta_Featured4.jpg",
  "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2018/10/Jalapeno-Peppers1.jpg",
  "https://www.spiceupthecurry.com/wp-content/uploads/2017/01/veg-manchurian-dry-recipe-9.jpg",
  "http://34c6b8841d4124020671-5bfabe5484726969ac662c6d377e2f3c.r16.cf2.rackcdn.com/uploads/old/LVTnnYZzxL.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/paneer-manchurian.jpg",
  "https://rumkisgoldenspoon.com/wp-content/uploads/2021/04/Chilli-paneer-dry.jpg",
  "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Hot_Garlic_Paneer.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/baby-corn-fry-recipe-baby-corn-65-recipe-baby-corn-golden-fry-2.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2018/09/mushroom-manchurian.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/mushroom-65-recipe-1.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/paneer-65-recipe.jpg",
  "https://www.cookwithkushi.com/wp-content/uploads/2021/09/IMG_0301l.jpg",
  "https://holycowvegan.net/wp-content/uploads/2020/03/veg-manchurian-7-500x500.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2016/10/baby-corn-manchurian-recipe-baby-corn-manchurian-dry-recipe-18.jpeg",
  "https://www.yummytummyaarthi.com/wp-content/uploads/2015/05/1-30.jpg",
  "https://www.cookclickndevour.com/wp-content/uploads/2019/06/babycorn-salt-pepper-recipe.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2017/08/chilli-paneer-gravy-recipe-easy-paneer-chilli-with-gravy-recipe-2.jpeg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/baby-corn-chilli-recipe-chilli-baby-corn-crispy-chilli-baby-corn-1.jpeg",
  "https://lookaside.fbsbx.com/lookaside/crawler/media/?media_id=1395847997142394",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/chilli-mushroom.jpg",
  "https://tsoimages.tsodelivery.com/product/PR_d80a84bf83cf68ac40d1d3a7865f750729a1e03b.jpg",
  "https://cdn.sanity.io/images/2r0kdewr/production/e942572dcddaa2671b100372742f72f6d8a37da0-4697x3523.jpg",
  "https://www.littlesugarsnaps.com/wp-content/uploads/2021/04/Mushroom-Fried-Rice-Featured-Image-.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/paneer-fried-rice-recipe.jpg",
  "https://www.pachakam.com/wp-content/uploads/2019/08/Mushroom-Paneer-Fried-Rice-Pachakam-11137.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/06/singapore-fried-rice.jpg",
  "https://www.hwcmagazine.com/wp-content/uploads/2013/05/Pantry-Fried-Rice-1200-x-1200-2884-500x375.jpg",
  "https://www.thespruceeats.com/thmb/PtQP3nxDwioXjVXNligawME2kCw=/1500x1000/filters:fill(auto,1)/lemon-rice-recipe-5213271-hero-01-e74de504d7364ac499ef96f804253b05.jpg",
  "https://i.ytimg.com/vi/ycJTiNVtHx4/maxresdefault.jpg",
  "https://www.ruchiskitchen.com/wp-content/uploads/2015/08/manchurian_rice_recipe_1.jpg",
  "http://www.sanjeevkapoor.com/UploadFiles/RecipeImages/Vegetable-Pot-Rice---SK-Khazana.jpg",
  "https://i.ytimg.com/vi/YRl1n7edIas/hqdefault.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/hakka-noodles-recipe.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/2019/03/schezwan-noodles-recipe-szechuan-noodles-veg-schezwan-noodles-1.jpeg",
  "https://therecipecritic.com/wp-content/uploads/2018/09/Garlic-Mushroom-Noodles-1.jpg",
  "https://thewoksoflife.com/wp-content/uploads/2018/09/vegetarian-singapore-noodles-5.jpg",
  "https://ucarecdn.com/af5dfd28-df32-4839-b4bb-6e3d7baf8c6a/-/scale_crop/800x600/center/860f7e762b49145cd320c7024c1d9e6a.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/schezwan-rice-recipe-triple-schezwan-fried-rice-triple-schezwan-rice-27.jpeg",
  "https://sinfullyspicy.com/wp-content/uploads/2022/04/1200-by-1200-images-2.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2017/11/veg-american-chopsuey-recipe-1.jpg",
  "https://www.foodandwine.com/thmb/WXKK3kflH3oCrb0nY8z0z5e4GZA=/2000x1125/smart/filters:no_upscale()/2012-r-xl-vegetable-sandwich-with-dill-sauce-2000-0984c1b513ae4af396aee039afa5e38c.jpg",
  "https://www.yumcurry.com/wp-content/uploads/2021/05/club-sandwich-recipe-1-500x500.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe.jpg",
  "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/paneer-sandwich-recipe-how-to-make-grilled-paneer-sandwich-recipe-1.jpeg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-grilled-sandwich-recipe-500x375.jpg",
  "https://www.spiceupthecurry.com/wp-content/uploads/2017/02/chilli-cheese-sandwich-recipe-7.jpg",
  "https://www.spiceupthecurry.com/wp-content/uploads/2020/11/masala-toast-sandwich-1.jpg",
  "https://www.oetker.in/Recipe/Recipes/oetker.in/in-en/sandwiches/image-thumb__52731__RecipeDetailsLightBox/coleslaw-sandwich.jpg",
  "https://pastrychefonline.com/wp-content/uploads/2015/01/bread-butter-and-sugar-sandwich1-480x360.jpg",
  "https://1.bp.blogspot.com/-fy35EViHDX8/XvHj1LfYDNI/AAAAAAABDdc/btFkxQRHO7gbZWAVfsu2NBlRA4m6v7dngCLcBGAsYHQ/s1600/Bread-butter-jam.jpg",
  "https://www.seriouseats.com/thmb/_BkW9V2wK3Zed-zQAETkRSJS8ac=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2018__04__20180309-french-fries-vicky-wasik-15-5a9844742c2446c7a7be9fbd41b6e27d.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2022/06/masala-pav-1.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/08/upma-recipe.jpg",
  "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
  "https://myfoodstory.com/wp-content/uploads/2022/01/Misal-Pav-1.jpg",
  "https://hurrythefoodup.com/wp-content/uploads/2017/03/Tomato-Omelette-7.jpg",
  "https://www.jainrasoi.com/mg/wp-content/uploads/2012/09/fried-papad.jpg",
  "https://www.whiskaffair.com/wp-content/uploads/2020/09/Masala-Papad-2-3.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/BasicRecipes_HOW_TO/How_to_roast_papad.jpg",
  "https://myfoodstory.com/wp-content/uploads/2022/03/Boondi-Raita-7.jpg",
  "https://www.cookclickndevour.com/wp-content/uploads/2019/07/vegetable-raita-recipe.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2012/02/pineapple-raita-recipe-1-500x375.jpg",
  "https://www.vegrecipesofindia.com/wp-content/uploads/2012/05/how-to-make-curd-recipe-1-500x375.jpg",
  "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/swathynandhini/KESAR_PISTA_FALOODA.jpg",
  "https://www.sharmispassions.com/wp-content/uploads/2017/04/PistaFalooda2.jpg",
  "https://i.ytimg.com/vi/7wscaZ6FIEg/maxresdefault.jpg",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pasta-salad-horizontal-jpg-1522265695.jpg",
  "https://cdn2.foodviva.com/static-content/food-images/tea-recipes/milk-tea-recipe/milk-tea-recipe.jpg",
  "https://www.nescafe.com/us/sites/g/files/jgfbjl256/files/styles/gdn_hero_pdp_product_image/public/gdn_product/field_product_images/nescafe-b150474f7ed01776fa185928e86ef29f2692d9f8.png.webp?itok=CoOh1xEL",
  "https://bellyfull.net/wp-content/uploads/2022/06/Watermelon-Juice-blog-4.jpg",
  "https://www.alphafoodie.com/wp-content/uploads/2022/02/How-to-Juice-a-Pineapple-Square.jpeg",
  "https://salimaskitchen.com/wp-content/uploads/2022/01/Fresh-Squeezed-Orange-Juice-Salimas-Kitchen-20.jpg",
  "https://i5.walmartimages.com/asr/ae476523-075d-41b7-8cae-08347f951e9f.32470b9e701c49fdc6233317406a7ffb.jpeg",
  "http://www.tasty-indian-recipes.com/wp-content/uploads/2014/03/Mixed-Fruit-Juice.jpg",
  "https://www.sustainablecooks.com/wp-content/uploads/2018/06/Classic-Virgin-Mojito-Recipe-2.jpg",
  "https://bravocooking.com/img/2015/09/strawberry-surprise.jpg",
  "https://savortheflavour.com/wp-content/uploads/2020/07/Blue-Lagoon-Mocktail-Tasty.jpg",
  "https://www.cookingcarnival.com/wp-content/uploads/2017/06/VirginPina.jpg",
  "https://www.pepperdelight.com/wp-content/uploads/2016/05/pepper-delight-orange-mint-mocktail-1.jpg",
  "https://cookieandkate.com/images/2021/06/buttermilk-recipe-1.jpg",
  "https://www.healingtomato.com/wp-content/uploads/2016/04/how-to-make-lassi.jpg",
  "https://pipingpotcurry.com/wp-content/uploads/2021/05/Lassi-in-a-glass.jpg",
  "https://thepennywisemama.com/wp-content/uploads/2012/10/IMG_31651-480x480.png",
  "https://thesaltymarshmallow.com/wp-content/uploads/2018/08/oreo-milkshakes1.jpg",
  "https://therecipecritic.com/wp-content/uploads/2022/05/strawberrymilkshake-500x500.jpg",
  "https://www.thespruceeats.com/thmb/LlR9HScfODtlFcHNdZWXSNHkXcA=/1500x1000/filters:fill(auto,1)/chocolate-milkshake-4587581-hero-1-22c8a039103c413dafd75f4f4c39ddd4.JPG",
  "https://bakingmischief.com/wp-content/uploads/2020/03/vanilla-milkshake-image-square.jpg",
  "http://recipemantra.com/image/catalog/sharmispassions.com/PistaMilkshake3.jpg",
  "https://mytastycurry.com/wp-content/uploads/2020/04/Cafe-style-cold-coffee-with-icecream.jpg",
  "http://swadthaliservices.com/sites/default/files/food_images/swad-thali-1.jpg",
  "https://i.ndtvimg.com/i/2017-10/thali_620x350_71507031336.jpg",
];

const arr = [];

for (let i = 0; i < 291; i++) {
  arr.push({
    id: i + 1,
    name: menu[i].name,
    price: parseInt(menu[i].price),
    image: images_arr[i],
    categories: menu[i].categories,
  });
}

for (let i = 200; i < 291; i++) {
  console.log(arr[i]);
  console.log(",");
}
