module.exports = (res) => {
  return res.status(404).send({
    status: 404,
    message: "Oops the resource has been moved or doesn't exist",
  })
};
