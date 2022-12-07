import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex min-vh-100">
      <div className="d-flex justify-content-center">
        <h2 className="text-center my-5" style={{ color: "#d1d1d1" }}>
          AI FOR YOUR DAILY ACTIVITY!
        </h2>
      </div>
      <div className="row row-flex flex-wrap justify-content-center">
        <div className="col-3">
          <Button
            onClick={() => navigate("/grammar")}
            variant="dark"
            className="text-white text-center p-4"
          >
            <h2> Correct your grammar! </h2>
          </Button>
        </div>
        <div className="col-3">
          <Button
            variant="primary"
            onClick={() => navigate("/keywords")}
            className="text-white text-center p-4"
          >
            <h2>Auto Generate Keywords</h2>
          </Button>
        </div>
        <div className="col-3">
          <Button
            onClick={() => navigate("/studynotes")}
            variant="danger"
            className="text-white text-center p-4"
          >
            <h2> Create Automatic Study Notes </h2>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
