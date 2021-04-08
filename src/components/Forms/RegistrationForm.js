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
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                                    <label className="form-label" for="floatingPassword">Password</label>
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
