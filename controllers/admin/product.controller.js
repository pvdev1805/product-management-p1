const Product = require("../../models/product.model");
const filterHelper = require("../../helpers/filter.helper");

// [GET] /admin/products/
module.exports.index = async (req, res) => {
  const find = {
    deleted: false,
  };

  // Feature: Filter-by-state
  const filterStatus = filterHelper(req);

  if (req.query.status) {
    find.status = req.query.status;
  }
  // End - Feature: Filter-by-state

  // Feature: Search (Keyword)
  if (req.query.keyword) {
    const regex = new RegExp(req.query.keyword, "i");
    find.title = regex;
  }
  // End - Feature: Search (Keyword)

  const products = await Product.find(find);

  res.render("admin/pages/products/index", {
    pageTitle: "Product List",
    products: products,
    filterStatus: filterStatus,
    keyword: req.query.keyword,
  });
};
