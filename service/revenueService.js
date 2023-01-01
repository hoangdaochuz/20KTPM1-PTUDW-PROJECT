const db  = require('../db/index')

const getRevenues = async(day, week, month, year, top, choice_revenue) => {
    const statusOrder = 'đã giao';
    let result = null
    if(choice_revenue == 'Yes') {
        if(day) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND create_at = ?`, [statusOrder, day]);
        } 
        else if(week) {
            let fromDay = null
            let toDay = null
            if(week == 1) {
                fromDay = 1
                toDay = 7
            } else if(week == 2) {
                fromDay = 8
                toDay = 14
            } else if(week == 3) {
                fromDay = 15
                toDay = 21
            } else if(week == 4) {
                fromDay = 22
                toDay = 28
            } else {
                fromDay = 29
                toDay = 31
            }
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE? AND (DAY(create_at) >= ? AND DAY(create_at) <= ?)`, [statusOrder, fromDay, toDay])
        } else if(month) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND MONTH(create_at) = ?`, [statusOrder, month]);
        } else if(year) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND YEAR(create_at) = ?`, [statusOrder, year]);
        }
    } else if(top) {
        if(day) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND create_at = ? ORDER BY sum_cost desc LIMIT ?`, [statusOrder, day, top]);
        } 
        else if(week) {
            let fromDay = null
            let toDay = null
            if(week == 1) {
                fromDay = 1
                toDay = 7
            } else if(week == 2) {
                fromDay = 8
                toDay = 14
            } else if(week == 3) {
                fromDay = 15
                toDay = 21
            } else if(week == 4) {
                fromDay = 22
                toDay = 28
            } else {
                fromDay = 29
                toDay = 31
            }
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE? AND (DAY(create_at) >= ? AND DAY(create_at) <= ?) ORDER BY sum_cost desc LIMIT ?`, [statusOrder, fromDay, toDay, top])
        } else if(month) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND MONTH(create_at) = ? ORDER BY sum_cost desc LIMIT ?`, [statusOrder, month, top]);
        } else if(year) {
            result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ? AND YEAR(create_at) = ? ORDER BY sum_cost desc LIMIT ?`, [statusOrder, year, top]);
        }
    }
    else {
        result = await db.connection.execute(`SELECT id, (SELECT full_name FROM user WHERE id_user = user.id) AS name_user, create_at, status, sum_cost FROM orders WHERE status LIKE ?`, [statusOrder]);
    }
    return result[0]
}

module.exports = {
    getRevenues,
}