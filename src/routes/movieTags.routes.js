const { Router } = require("express");

const TagsController = require("../controllers/movieTagsController");

const movieTagsRoutes = Router();

const tagsController = new TagsController();

movieTagsRoutes.get("/:user_id", tagsController.index);

module.exports = movieTagsRoutes;
