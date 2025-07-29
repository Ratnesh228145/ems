import Header from "../other/header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = () =>{
    return(
        <div className="p-10 bg-[#696969e4] h-screen ">
            <Header />
            <TaskListNumber />
            <TaskList />
        </div>
        
    );
}

export default EmployeeDashboard;