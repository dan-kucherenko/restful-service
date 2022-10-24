const controller = require('../controllers/employees');
const {models} = require("mongoose");

class EmployeeDAO {
    showEmployees(){
        return controller.getEmployees;
    }

    showEmployee(){
        return controller.getEmployee;
    }

    addEmployee() {
       return controller.addEmployee;
    }

    removeEmployee(){
        return controller.removeEmployee;
    }

    updateEmployee(){
        return controller.updateEmployeeInfo;
    }
}

module.exports = new EmployeeDAO();