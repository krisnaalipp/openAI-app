import { useState } from "react";
import { Button, Card, FloatingLabel, Form } from "react-bootstrap";
import { MdDoubleArrow } from "react-icons/md";
import { HashLoader } from "react-spinners";
import { textCorrection } from "../services";

const GrammarCheckerPage = () => {
  const [textInput, setTextInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [checkedInput, setCheckedInput] = useState("");

  const handleCheckGrammar = async () => {
    setLoading(true);
    try {
      const response = await textCorrection(textInput);
      setCheckedInput(response);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100">
      <h1 className="text-white text-center my-5 p-2">
        Check Your Grammar Here!
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-5">
            <h2 className="text-white mb-4 text-center">Your text here </h2>
            <Card style={{ width: "25rem" }}>
              <FloatingLabel label="Your Text">
                <Form.Control
                  as="textarea"
                  value={textInput}
                  onChange={(e) => setTextInput(e.target.value)}
                  style={{ height: "25rem", width: "25rem" }}
                />
              </FloatingLabel>
              <Button
                style={{ backgroundColor: "#6f7379" }}
                onClick={handleCheckGrammar}
              >
                CHECK
              </Button>
            </Card>
          </div>
          <div className="col-2 justify-content-center align-self-center">
            {loading ? (
              <HashLoader size={80} color={"white"} className="m-4" />
            ) : (
              <MdDoubleArrow size={80} color={"white"} className="m-4" />
            )}
          </div>
          <div className="col-5">
            <h2 className="text-white mb-4 text-center">AI</h2>
            <Card style={{ width: "25rem" }}>
              <FloatingLabel>
                <Form.Control
                  as="textarea"
                  disabled
                  value={checkedInput}
                  style={{ height: "27.5rem", width: "25rem" }}
                />
              </FloatingLabel>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GrammarCheckerPage;
