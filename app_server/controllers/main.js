 /* GET homepage */
 const index = (req, res) => {
  res.render('index', { title: 'careercompass' });
 };
  module.exports = {
  index
 };