module.exports.createPost = (req, res, next) => {
  if (!req.body.title) {
    req.flash("error", "Please enter the product title!");
    res.redirect("back");
    return;
  }

  if (req.body.title.length < 5) {
    req.flash(
      "error",
      "Please enter at least 5 characters for the product title!"
    );
    res.redirect("back");
    return;
  }

  next();
};
