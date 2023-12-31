import React, { useEffect, useState } from "react";

function CreateManufacturer() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {};
    data.name = formData.name;

    const locationUrl = "http://localhost:8100/api/manufacturers/";
    const fetchConfig = {
      method: "post",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(locationUrl, fetchConfig);
    if (response.ok) {
      const newManufacturer = await response.json();

      setFormData({
        name: "",
      });
      //   setName("");
      //   setRoom("");
      //   setCity("");
      //   setState("");
    }
  };
  const [formData, setFormData] = useState({
    name: "",
  });
  const handleFormStateChange = async (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({ ...formData, [name]: value });
  };
  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  return (
    <div className="row">
      <div className="offset-3 col-6">
        <div className="shadow p-4 mt-4">
          <h1>Create a new manufacturer</h1>
          <form onSubmit={handleSubmit} id="create-manufacturer-form">
            <div className="form-floating mb-3">
              <input
                onChange={handleFormStateChange}
                placeholder="Manufacturer name"
                value={formData.name}
                required
                type="text"
                name="name"
                id="name"
                className="form-control"
              />
              <label htmlFor="name">Manufacturer name</label>
            </div>
            <button className="btn btn-primary">Create</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateManufacturer;
