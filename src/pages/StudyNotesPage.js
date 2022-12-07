import { useState } from "react";
import { InputGroup, Form, Button, Card } from "react-bootstrap";
import { HashLoader } from "react-spinners";

import { studyNotesMaker } from "../services";

const StudyNotesPage = () => {
  const [noteInput, setNoteInput] = useState("");
  const [AIResponse, setAIResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleCreateNotes = async () => {
    setLoading(true);
    try {
      const response = await studyNotesMaker(noteInput);

      setAIResponse(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-vh-100">
      <h1 className="text-white text-center my-5 p-2">
        Let the AI create notes for you !
      </h1>
      <div className="container">
        <div>
          <InputGroup
            className="mb-3"
            style={{ maxWidth: "100%", height: "4rem" }}
          >
            <Form.Control
              placeholder="Quick summary about the WW2?"
              aria-describedby="basic-addon2"
              value={noteInput}
              onChange={(e) => setNoteInput(e.target.value)}
            />
            <Button
              variant="primary"
              id="button-addon2"
              onClick={handleCreateNotes}
              disabled={loading}
            >
              {loading ? (
                <HashLoader size={42} color={"white"} />
              ) : (
                "Create Notes"
              )}
            </Button>
          </InputGroup>
        </div>
        <Card style={{ width: "100%", height: "25rem" }}>
          <Card.Body>
            {noteInput ? (
              <Card.Text>
                <b>AI : </b>
                <p>{AIResponse}</p>
              </Card.Text>
            ) : (
              <Card.Text>
                <b>AI :</b> It's was unforgotten and memorable history
              </Card.Text>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default StudyNotesPage;
