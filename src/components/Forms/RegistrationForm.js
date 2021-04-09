import React from 'react'

const RegistrationForm = () => {
    return (
        <div className="container">
            <div style={{ marginTop: "5%" }}>
                <div className="row justify-content-md-center">
                    <div className="col-12 col-md-8">
                        <div className="card p-4 my-shadow my-card">
                            <form>
                                <h2 className="text-center mb-4">Register</h2>
                                <div className="row">
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating mb-3">
                                            {/* <i className="fas fa-user"></i> */}
                                            <input type="text" className="form-control" id="floatingInput1" placeholder="first name" />
                                            <label className="form-label">First Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6">
                                        <div className="form-floating mb-3">
                                            <input type="text" className="form-control" id="floatingInpu2" placeholder="last name" />
                                            <label className="form-label">Last Name</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInpu3" placeholder="name@example.com" />
                                    <label className="form-label">Email address</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className="form-label">Password</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="password" className="form-control" id="floatingRepeatPassword" placeholder="Re Enter Password" />
                                    <label className="form-label">Re Enter Password</label>
                                </div>
                                <div className="checkbox mb-3">
                                    <label className="form-label">
                                        <input type="checkbox" value="remember-me" /> Remember Me
                                    </label>
                                </div>
                                <div className="d-grid gap-2">
                                    <button className="btn btn-lg" style={{ background: "#2c3e50", color: "#fff" }} type="button">Button</button>
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
