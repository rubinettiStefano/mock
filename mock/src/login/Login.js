import React from "react";

class Login extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {

        return(
            <div className="p-5" >
                <form>
  <div class="form-outline mb-4" style={{width:"600px !important"}}>
    <input type="email" id="form2Example1" class="form-control" />
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" />
    <label class="form-label" for="form2Example2">Password</label>
  </div>

  <div class="row mb-4">
    <div class="col d-flex justify-content-center">
    </div>

  </div>

  <button type="button" onClick={() => alert("Fate Login")} class="btn btn-primary btn-block mb-4">Sign in</button>

  <div class="text-center">
    <p>Not a member? <a href="#!" onClick={() => alert("Fate form per la registrazione")}>Register</a></p>
  </div>
</form>
            </div>
        );
    }
}

export default Login;