import { useState } from "react";
import { Card, FloatingLabel, Form, Button } from "react-bootstrap";

import { keyWordsGenerator } from "../services";

import { HashLoader } from "react-spinners";
import { MdDoubleArrow } from "react-icons/md";

const KeyWordsCreatorPage = () => {
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");
  const [keyWords, setKeyWords] = useState([]);

  const handleGenerateKeyWord = async () => {
    setLoading(true);
    try {
      const response = await keyWordsGenerator(input);
      setKeyWords(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-vh-100">
      <h1 className="text-white text-center my-5 p-2">
        Keywords generator for your assignment!
      </h1>
      <div className="d-flex justify-content-center">
        <div className="row">
          <div className="col-5">
            <h2 className="text-white mb-4 text-center">Text</h2>
            <Card style={{ width: "25rem" }}>
              <FloatingLabel label="Your Text">
                <Form.Control
                  as="textarea"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  style={{ height: "25rem", width: "25rem" }}
                />
              </FloatingLabel>
              <Button
                style={{ backgroundColor: "#6f7379" }}
                onClick={handleGenerateKeyWord}
              >
                GENERATE
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
          <div className="col-5 align-self-center">
            <h2 className="text-white mb-4 text-center">KEYWORD SUGGESTIONS</h2>
            <Card className="p-3" style={{ width: "25rem", height: "15rem" }}>
              <Card.Text>{keyWords}</Card.Text>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeyWordsCreatorPage;
