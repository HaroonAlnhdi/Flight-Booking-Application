function isOwner(req, res, next) {
  console.log('param', req.params.userId);
  console.log('user', req.user._id);
  if (req.user._id !== req.params.userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

module.exports = isOwner;
