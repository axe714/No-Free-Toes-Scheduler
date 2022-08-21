import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_NORMALUSER } from "../../../utils/mutations";
import Auth from "../../../utils/auth";

// CLIENT SIGNUP
const ClientSignup = () => {

  // MUTATION TO ADD NORMAL USER
  const [addNormalUser, { error, data }] = useMutation(ADD_NORMALUSER);
  // CREATE STATE FOR FORM
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    location: '',
  });

  // UPDATE  STATE
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // SUBMIT FORM
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addNormalUser({
        variables: { ...formState },
      });

      Auth.loginNormalUser(data.addNormalUser.token);
    } catch (e) {
      console.error(e);

    }
    // CLEAR FORM VARIABLES
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    // <div className="max-w-xxl justify-center">
    //   {/* {data ? (
    //     <p>
    //       Success! You may now head <Link to="/">back to the homepage.</Link>
    //     </p>
    //   ) : ( */}
    //   <form
    //     className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    //     onSubmit={handleFormSubmit}
    //   >
    //     <h1 className="text-xl font-extrabold">Signup</h1>
    //     <br />
    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="username"
    //       >
    //         First Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Enter Your First Name"
    //         name="firstName"
    //         type="text"
    //         value={formState.firstName}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-4">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="username"
    //       >
    //         Last Name
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Enter Your Last Name"
    //         name="lastName"
    //         type="text"
    //         value={formState.lastName}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="email"
    //       >
    //         Email
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Your email"
    //         name="email"
    //         type="email"
    //         value={formState.email}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="password"
    //       >
    //         Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="********"
    //         name="password"
    //         type="password"
    //         value={formState.password}
    //         onChange={handleChange}
    //       />
    //     </div>
    //     {/* <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="confirmpassword"
    //       >
    //         Confirm Password
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="********"
    //         name="password"
    //         type="password"
    //         // value={formState.password}
    //         onChange={handleChange}
    //       />
    //     </div> */}
    //     <div className="mb-6">
    //       <label
    //         className="block text-gray-700 text-sm font-bold mb-2"
    //         htmlFor="email"
    //       >
    //         Location
    //       </label>
    //       <input
    //         className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //         placeholder="Your location"
    //         name="location"
    //         type="location"
    //         value={formState.location}
    //         onChange={handleChange}
    //       />
    //     </div>

    //     <button
    //       className="bg-purple-100 hover:bg-purple-200 text-white font-bold py-2 px-4 rounded w-full"
    //       style={{ cursor: "pointer" }}
    //       type="submit"
    //     >
    //       Submit
    //     </button>
    //   </form>
    //   {/* )} */}

    //   {/* {error && (
    //     <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
    //   )} */}
    // </div>

    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-lg-10">
        <div className="card">
          <h4 className="card-header bg-dark text-light p-2">Sign Up</h4>
          <div className="card-body">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
              <form onSubmit={handleFormSubmit}>
                <input
                  className="form-input"
                  placeholder="Your first name"
                  name="firstName"
                  type="text"
                  value={formState.firstName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your last name"
                  name="lastName"
                  type="text"
                  value={formState.lastName}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="******"
                  name="password"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
                />
                <input
                  className="form-input"
                  placeholder="Your location"
                  name="location"
                  type="text"
                  value={formState.location}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>

  );
};

export default ClientSignup;