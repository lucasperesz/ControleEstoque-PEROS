const Brand = require("../models/Brand");

class BrandController {
  create(req, res) {
    return res.render("brand/register");
  }

  createUpdate(req, res) {
    return res.render("brand/update");
  }

  async index(req, res) {
    const brand = await Brand.paginate();

    return res.render("brand/list", { brand: brand.docs });
  }

  async store(req, res) {
    await Brand.create(req.body);

    return res.redirect("/brandlist");
  }

  async edit(req, res) {
    const { id } = req.params;

    const brand = await Brand.findById(id);

    return res.render("brand/update", { brand: brand });
  }

  async update(req, res) {
    const { id } = req.params;

    await Brand.findByIdAndUpdate(id, req.body, { new: true });

    return res.redirect("/brandlist");
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Brand.findByIdAndRemove(id);

    return res.redirect("/brandlist");
  }
}

module.exports = new BrandController();
