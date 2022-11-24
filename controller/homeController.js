const home = (req, res, next) => {
  const listProductFeatureds = [
    {
      name: "All",
      listProduct: [
        {
          img: "https://technext.github.io/ogani/img/featured/feature-1.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-2.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-3.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-4.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-5.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-6.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-7.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-8.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
      ],
    },

    {
      name: "Oranges",
      listProduct: [
        {
          img: "https://technext.github.io/ogani/img/featured/feature-1.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-4.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-6.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
      ],
    },

    {
      name: "Fresh Meat",
      listProduct: [
        {
          img: "https://technext.github.io/ogani/img/featured/feature-1.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-3.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-5.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-7.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
      ],
    },
    {
      name: "Vegetables",
      listProduct: [
        {
          img: "	https://technext.github.io/ogani/img/featured/feature-2.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-3.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-5.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-7.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-8.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
      ],
    },
    {
      name: "Fastfood",
      listProduct: [
        {
          img: "	https://technext.github.io/ogani/img/featured/feature-2.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-4.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-6.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
        {
          img: "https://technext.github.io/ogani/img/featured/feature-8.jpg",
          name: "Crab Pool Security",
          price: "$30.00",
        },
      ],
    },
  ];

  res.render("home", {
    categoryList: [
      {
        img: "https://technext.github.io/ogani/img/categories/cat-4.jpg",
        category: "DRINK FRUITS",
      },
      {
        img: "https://technext.github.io/ogani/img/categories/cat-5.jpg",
        category: "DRINK FRUITS",
      },
      {
        img: "https://technext.github.io/ogani/img/categories/cat-1.jpg",
        category: "FRESH FRUITS",
      },
      {
        img: "https://technext.github.io/ogani/img/categories/cat-2.jpg",
        category: "DRIED FRUITS",
      },
      {
        img: "https://technext.github.io/ogani/img/categories/cat-3.jpg",
        category: "VEGETABLES",
      },
    ],
    listProductFeatureds

  });
};

module.exports = { home };
