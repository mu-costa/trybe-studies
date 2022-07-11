function validateToken(req, res, next) {
    const { authorization } = req.headers;
    console.log(authorization);
    if(!authorization || authorization.length < 16) return res.status(401).json({ message: 'Token inválido!' });

    next();
}

module.exports = validateToken;