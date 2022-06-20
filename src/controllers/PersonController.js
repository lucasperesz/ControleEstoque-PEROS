const Person = require("../models/Person");

class PersonController {
  create(req, res) {
    return res.render("person/register");
  }

  createUpdate(req, res) {
    return res.render("person/update");
  }

  async index(req, res) {
    const person = await Person.paginate();

    return res.render("person/list", { person: person.docs });
  }

  async store(req, res) {
    await Person.create(req.body);

    return res.redirect("/personlist");
  }

  async edit(req, res) {
    const { id } = req.params;

    const person = await Person.findById(id);

    return res.render("person/update", { person: person });
  }

  async update(req, res) {
    const { id } = req.params;

    await Person.findByIdAndUpdate(id, req.body, { new: true });

    return res.redirect("/personlist");
  }

  async destroy(req, res) {
    const { id } = req.params;

    await Person.findByIdAndRemove(id);

    return res.redirect("/personlist");
  }
}

module.exports = new PersonController();
