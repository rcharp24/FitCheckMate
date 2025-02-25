import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Alert } from "react-bootstrap";
import axios from "axios";

function UploadPage() {
  const [topImage, setTopImage] = useState(null);
  const [bottomImage, setBottomImage] = useState(null);
  const [shoeImage, setShoeImage] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event, setImage) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const handleAnalyze = async (event) => {
    event.preventDefault();
    setError(""); // Reset error message before each analysis

    if (!topImage || !bottomImage || !shoeImage) {
      setError("Please upload images for all clothing items.");
      return;
    }

    setLoading(true);
    const formData = new FormData();
    if (topImage) formData.append("topImage", topImage);
    if (bottomImage) formData.append("bottomImage", bottomImage);
    if (shoeImage) formData.append("shoeImage", shoeImage);

    try {
      const response = await axios.post("http://localhost:5000/api/analyze", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const colors = response.data.colors;
      alert(`Extracted Colors: 
        Tops: ${colors.topImage} 
        Bottoms: ${colors.bottomImage} 
        Shoes: ${colors.shoeImage}`);
    } catch (error) {
      console.error("Analysis Error:", error);
      setError("Analysis failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center checkered-background">
      <Row className="w-100 justify-content-center">
        <Col md={6} lg={5}>
          <Card className="shadow-lg text-white" style={{ backgroundColor: "rgba(10, 10, 40, 0.9)" }}>
            <div className="text-center">
              <Card style={{ width: "50%", margin: "0 auto", color: "black" }}>
                <h2 className="mb-1 p-1">Upload Your Clothing Items</h2>
              </Card>
            </div>
            <Card.Body>
              {error && <Alert variant="danger">{error}</Alert>}

              <form onSubmit={handleAnalyze}>
                <Row className="mt-4">
                  {/* Tops Section */}
                  <Col md={4}>
                    <Card className="p-3" style={{ boxShadow: "0 0px 20px rgba(212,175,55,0.5)", backgroundColor: "#1A1A40" }}>
                      <h3 style={{ color: "white" }}>Upload Tops</h3>
                      <label className="custom-file-upload">
                        <input
                          type="file"
                          onChange={(event) => handleFileChange(event, setTopImage)}
                        />
                        Choose File
                      </label>
                      {topImage && (
                        <>
                          <img
                            src={URL.createObjectURL(topImage)}
                            alt="Top preview"
                            style={{ width: "100%", height: "auto", marginTop: "10px" }}
                          />
                          <Button variant="outline-danger" onClick={() => setTopImage(null)} className="mt-2">
                            Remove Image
                          </Button>
                        </>
                      )}
                    </Card>
                  </Col>

                  {/* Bottoms Section */}
                  <Col md={4}>
                    <Card className="p-3" style={{ boxShadow: "0 0px 20px rgba(212,175,55,0.5)", backgroundColor: "#1A1A40" }}>
                      <h3 style={{ color: "white" }}>Upload Bottoms</h3>
                      <label className="custom-file-upload">
                        <input
                          type="file"
                          onChange={(event) => handleFileChange(event, setBottomImage)}
                        />
                        Choose File
                      </label>
                      {bottomImage && (
                        <>
                          <img
                            src={URL.createObjectURL(bottomImage)}
                            alt="Bottom preview"
                            style={{ width: "100%", height: "auto", marginTop: "10px" }}
                          />
                          <Button variant="outline-danger" onClick={() => setBottomImage(null)} className="mt-2">
                            Remove Image
                          </Button>
                        </>
                      )}
                    </Card>
                  </Col>

                  {/* Shoes Section */}
                  <Col md={4}>
                    <Card className="p-3" style={{ boxShadow: "0 0px 20px rgba(212,175,55,0.5)", backgroundColor: "#1A1A40" }}>
                      <h3 style={{ color: "white" }}>Upload Shoes</h3>
                      <label className="custom-file-upload">
                        <input
                          type="file"
                          onChange={(event) => handleFileChange(event, setShoeImage)}
                        />
                        Choose File
                      </label>
                      {shoeImage && (
                        <>
                          <img
                            src={URL.createObjectURL(shoeImage)}
                            alt="Shoe preview"
                            style={{ width: "100%", height: "auto", marginTop: "10px" }}
                          />
                          <Button variant="outline-danger" onClick={() => setShoeImage(null)} className="mt-2">
                            Remove Image
                          </Button>
                        </>
                      )}
                    </Card>
                  </Col>
                </Row>

                {/* Center the Analyze Files Button */}
                <div className="text-center mt-4">
                  <Button
                    type="button"
                    onClick={handleAnalyze}
                    className="btn-warning"
                    disabled={loading || !topImage || !bottomImage || !shoeImage}
                  >
                    {loading ? "Analyzing..." : "Analyze Files"}
                  </Button>
                </div>
              </form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default UploadPage;
