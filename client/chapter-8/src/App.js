import { MDBInput, MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";

import { useState } from "react";

export default function App() {
  return (
    <div>
      <CreateNewPlayerForm />
      <EditPlayerForm />
      <SearchPlayer />
    </div>
  );
}
function CreateNewPlayerForm() {
  const [submittedData, setSubmittedData] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }
  return (
    <div>
      <h1>Create New Player</h1>
      <form onSubmit={handleSubmit}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput name="username" type="username" placeholder="username" />
          </MDBCol>
          <MDBCol>
            <MDBInput name="email" type="email" placeholder="email" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          name="password"
          type="password"
          placeholder="password"
        />
        <MDBInput className="mb-4" name="experience" placeholder="experience" />

        <MDBBtn type="submit" className="mb-4" block>
          submit
        </MDBBtn>
      </form>
      <div>Data yang di submit: </div>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}

function EditPlayerForm() {
  const [submittedData, setSubmittedData] = useState();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }
  return (
    <div>
      <h1>Edit Player Form</h1>
      <form onSubmit={handleSubmit}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput name="username" type="username" placeholder="username" />
          </MDBCol>
          <MDBCol>
            <MDBInput name="email" type="email" placeholder="email" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          name="password"
          type="password"
          placeholder="password"
        />
        <MDBInput className="mb-4" name="experience" placeholder="experience" />

        <MDBBtn type="submit" className="mb-4" block>
          submit
        </MDBBtn>
      </form>
      <div>Data yang di submit: </div>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}
function SearchPlayer() {
  const [submittedData, setSubmittedData] = useState();
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const jsonData = Object.fromEntries(formData);
    setSubmittedData(jsonData);
  }
  return (
    <div>
      <h1>Search player</h1>
      <form onSubmit={handleSubmit}>
        <MDBRow className="mb-4">
          <MDBCol>
            <MDBInput name="username" type="username" placeholder="username" />
          </MDBCol>
          <MDBCol>
            <MDBInput name="email" type="email" placeholder="email" />
          </MDBCol>
        </MDBRow>
        <MDBInput
          className="mb-4"
          name="password"
          type="password"
          placeholder="password"
        />
        <MDBInput className="mb-4" name="experience" placeholder="experience" />

        <MDBBtn type="submit" className="mb-4" block>
          submit
        </MDBBtn>
      </form>
      <div>Data yang di submit: </div>
      {submittedData ? (
        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
      ) : null}
    </div>
  );
}
