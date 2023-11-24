const express = require('express')
const {validationResult} = require('express-validator')


const validarCampos = (requ, resq = express.response, siguiente) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return resq.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    }
    siguiente()

}

module.exports = {validarCampos}
