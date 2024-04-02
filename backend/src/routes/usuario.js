const {Router} = require("express");
const router = Router();

const usuarioCtrl = require("../controller/usuario.controller");

router.route("/")
    .get(usuarioCtrl.getUsu)
    .post(usuarioCtrl.createUsu)

router.route("/:id")
    .get(usuarioCtrl.findUsu)
    .delete(usuarioCtrl.deleteUsu)
    .put(usuarioCtrl.updateUsu)

module.exports = router