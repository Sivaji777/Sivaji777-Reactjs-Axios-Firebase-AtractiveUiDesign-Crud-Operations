import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Task() {
  const [empName, setEmpName] = useState("");
  const [empSalary, setEmpSalary] = useState("");
  const [empDisignation, setEmpDisignation] = useState("");
  const [id, setId] = useState("");
  const [getData, setGetData] = useState([]);
  const [filterData, setFilterData] = useState('');

  console.log(getData);

  /* post Data */

  const handleSubmit = () => {
    axios
      .post(`https://mentotask-bddb6-default-rtdb.firebaseio.com/Task.json`, {
        empName,
        empSalary,
        empDisignation,
        // obj1
      })
      .then((req, res) => {
        GetData();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* get Data */

  const GetData = () => {
    axios
      .get("https://mentotask-bddb6-default-rtdb.firebaseio.com/Task.json")
      .then((res) => {
        setGetData(res.data);
      })
      .catch((error) => {});
  };

  useEffect(() => {
    GetData();
  }, []);

  /* delete Data */
  const handleDelete = (e) => {
    var deleteData = Object.keys(getData).filter((res, index) => res === e);
    axios
      .delete(
        `https://mentotask-bddb6-default-rtdb.firebaseio.com/Task/${deleteData}.json`
      )
      .then((res) => {
        console.log(res);
        GetData();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /* update Method*/
  const handleUpdate = (e, id) => {
  
  setId(id)
    setEmpName(e.empName);
    setEmpSalary(e.empSalary);
    setEmpDisignation(e.empDisignation);
  };

  const handleModelUpdate=()=>{
    axios.put(`https://mentotask-bddb6-default-rtdb.firebaseio.com/Task/${id}.json`,{empName,empSalary,empDisignation}).then((res)=>{
      console.log(res);
      GetData();
    }).then((err)=>{
      console.log(err);
    })
  }

  return (
    <div>
      <div className=" d-flex justify-content-center">
        <div className="col-8">
          <h4>Filter Data</h4>
          <input
            placeholder="Filter Data"
            onChange={(e) => setFilterData(e.target.value)}
          />
          <h1 style={{ marginLeft: "400px", color: "white" }}>Employee data</h1>
          <table class="table bg-black text-white fs-6">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Sl.no</th>
                <th scope="col">Employee Name</th>
                <th scope="col">Employee Salary</th>
                <th scope="col">Employee Disignation</th>
                <th>
                  <button className="btn btn-danger">Delete Button</button>
                </th>
                <th>
                  <button className="btn btn-primary">Update Button</button>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                
                Object.keys(getData)
                // .filter((val) => {
                //   if (filterData == "") {
                //     console.log(val);
                //     return val;
                //   } else if (val.empName.toLowerCase().includes(filterData.toLowerCase())) 
                //   {
                //     return val;
                //   }
                // })
                .map((item, ind) => {
                  return (
                    <tr>
                      <th scope="row">{ind + 1}</th>
                      <td>{getData[`${item}`].empName}</td>
                      <td>{getData[`${item}`].empSalary}</td>
                      <td>{getData[`${item}`].empDisignation}</td>
                      <td>
                        <button
                          onClick={() => handleDelete(item)}
                          className="btn bg-danger"
                        >
                          Delete Button
                        </button>
                      </td>
                      <td>
                        <button
                          class="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal1"
                          onClick={() => handleUpdate(getData[`${item}`], item)}
                        >
                          Update Button
                        </button>
                      </td>
                    </tr>
                  );
                })}

              <button
                class="btn btn-success"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Post Data
              </button>
            </tbody>
          </table>
        </div>
        -----------------
        <div>
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog ">
              <div class="modal-content  bg-info">
                <div class="modal-header">
                  <div style={{ fontSize: "20px" }}>
                    <h5
                      style={{ marginLeft: "160px", fontSize: "30px" }}
                      class="modal-title p-2"
                      id="exampleModalLabel"
                    >
                      Post Data
                    </h5>
                    <label>Employee Name:</label>
                    <input
                      type="text"
                      placeholder="Emp Name"
                      onChange={(e) => setEmpName(e.target.value)}
                      style={{ margin: "5px" }}
                    />
                    <br></br>
                    <label>Employee Salary:</label>
                    <input
                      type="text"
                      placeholder="Emp Salary"
                      onChange={(e) => setEmpSalary(e.target.value)}
                      style={{ margin: "5px" }}
                    />
                    <br></br>
                    <label>Employee Disignation:</label>
                    <input
                      type="text"
                      placeholder="Emp Disignation"
                      onChange={(e) => setEmpDisignation(e.target.value)}
                    />
                    <br></br>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    onClick={handleSubmit}
                    class="btn btn-primary"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          --
          <div
            class="modal fade"
            id="exampleModal1"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog ">
              <div class="modal-content  bg-secondary">
                <div class="modal-header">
                  <div style={{ fontSize: "20px" }}>
                    <h5
                      style={{ marginLeft: "160px", fontSize: "30px" }}
                      class="modal-title p-2"
                      id="exampleModalLabel"
                    >
                      Update Data
                    </h5>
                    <label>Employee Name:</label>
                    <input
                      type="text"
                      placeholder="Emp Name"
                      value={empName}
                      onChange={(e) => setEmpName(e.target.value)}
                      style={{ margin: "5px" }}
                    />
                    <br></br>
                    <label>Employee Salary:</label>
                    <input
                      type="text"
                      placeholder="Emp Salary"
                      value={empSalary}
                      onChange={(e) => setEmpSalary(e.target.value)}
                      style={{ margin: "5px" }}
                    />
                    <br></br>
                    <label>Employee Disignation:</label>
                    <input
                      type="text"
                      placeholder="Emp Disignation"
                      value={empDisignation}
                      onChange={(e) => setEmpDisignation(e.target.value)}
                    />
                    <br></br>
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    data-bs-dismiss="modal"
                    class="btn btn-primary"
                    onClick={handleModelUpdate}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        -----------
      </div>
    </div>
  );
}

export default Task;
