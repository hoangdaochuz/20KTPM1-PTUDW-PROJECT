const {getRevenues} = require('../service/revenueService')

const viewRevenues = async(req, res) => {
    const {day, week, month, year, top, choice_revenue} = req.query
    const listRevenues = await getRevenues(day, week, month, year, top, choice_revenue);
    res.render('revenues', {listRevenues})
}


module.exports = {viewRevenues};