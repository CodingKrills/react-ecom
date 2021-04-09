import React from 'react'

const RegistrationForm = () => {
    return (
        <div className="container">
            <div style={{ marginTop: "5%" }}>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-8">
                        <div className="card p-4 shadow">
                            <form>
                                <div class="row">
                                    <div class="col-12 col-md-6">
                                        <div class="form-floating mb-3">
                                            {/* <i class="fas fa-user"></i> */}
                                            <input type="text" class="form-control" id="floatingInput" placeholder="first name" />
                                            <label className="form-label" for="floatingInput">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput" placeholder="last name" />
                                            <label className="form-label" for="floatingInput">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                                    <label className="form-label" for="floatingInput">Email address</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className="form-label" for="floatingPassword">Password</label>
                                </div>
                                <div class="form-floating mb-3">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Re Enter Password" />
                                    <label className="form-label" for="floatingPassword">Re Enter Password</label>
                                </div>
                                <div class="checkbox mb-3">
                                    <label className="form-label">
                                        <input type="checkbox" value="remember-me" /> Remember Me
                                    </label>
                                </div>
                                <div class="d-grid gap-2">
                                    <button class="btn btn-lg" style={{ background: "#2c3e50", color: "#fff" }} type="button">Button</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegistrationForm
