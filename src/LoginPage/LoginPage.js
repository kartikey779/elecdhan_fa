import React, { useState } from "react";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://elecdhan-api.vercel.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      // Authentication successful
      console.log("save");
      onLogin(); // Call the onLogin callback from props
    } else {
      // Authentication failed
      alert("Invalid credentials. Please try again.");
      setEmail("");
      setPassword("");
    }
  };

  return (
    <div className="container">
      <section class="vh-100 gradient-custom">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                class="card bg-dark text-white"
                style={{ borderRadius: "1rem" }}
              >
                <div class="card-body p-5 text-center">
                  <form onSubmit={handleSubmit}>
                    <div class="mb-md-5 mt-md-4 pb-5">
                      <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                      <p class="text-white-50 mb-5">
                        Please enter your login and password!
                      </p>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="email"
                          id="typeEmailX"
                          class="form-control form-control-lg"
                          aria-describedby="emailHelp"
                          placeholder="Enter email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label class="form-label" for="typeEmailX">
                          Email
                        </label>
                      </div>

                      <div class="form-outline form-white mb-4">
                        <input
                          type="password"
                          id="typePasswordX"
                          class="form-control form-control-lg"
                          placeholder="Password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                        />
                        <label class="form-label" for="typePasswordX">
                          Password
                        </label>
                      </div>

                      <button
                        class="btn btn-outline-light btn-lg px-5"
                        type="submit"
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;
