/* eslint-disable react-hooks/rules-of-hooks */
import * as React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer";
import API from "../../utils/API";

import "../../components/css/style.css";
import { Link, useNavigate } from "react-router-dom";

const index = () => {
  const [indication, setIndication] = React.useState([]);
  const [answer, setAnswer] = React.useState({
    P01: 0,
    P02: 0,
    P03: 0,
    P04: 0,
    P05: 0,
  });
  const [clicked, setClicked] = React.useState({});
  const navigate = useNavigate();
  //   const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    getQuestions();
  }, []);

  React.useEffect(() => {
    getQuestionsCount();
  }, [clicked]);

  const getQuestions = () => {
    API.get("/indications/getAllIndications")
      .then((res) => {
        setIndication(res.data.data);
        console.log("Data Indications: ", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /*

  if (prevAnswer[kode_disease]=== 0) {
    return 1;
  }
  else {
    return prevAnswer[kode_disease] + 1;
  }

  1 == '1'
  1 === '1'
  */

  const handleClick = (kode_disease, kode) => {
    setAnswer((prevAnswer) => ({
      ...prevAnswer,
      [kode_disease]:
        prevAnswer[kode_disease] === 0 ? 1 : prevAnswer[kode_disease] + 1,
    }));
    setClicked((prevClicked) => ({
      ...prevClicked,
      [kode]: true,
    }));
  };

  const findMaxDisease = () => {
    let maxDisease = null;
    let maxCount = -1;

    Object.entries(answer).forEach(([kodeDisease, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxDisease = kodeDisease;
      }
    });

    return maxDisease;
  };

  const submitQuestions = () => {
    const maxData = findMaxDisease();

    // setKode_disease(maxData);
    navigate(`/output/${maxData}`);

    console.log("Max Data: ", maxData);
  };

  const getQuestionsCount = () => {
    let count = 0;

    Object.entries(clicked).forEach(([kode, isClicked]) => {
      if (isClicked) {
        count++;
      }
    });

    return count;
  };

  console.log("Answer: ", answer);
  console.log("Clicked: ", clicked);
  console.log("Count Questions: ", getQuestionsCount());

  return (
    <>
      <Navbar />
      <section className="h-auto ">
        <div className="h-auto row container mx-auto my-5">
          {indication.map((item, key) => (
            <div
              className="d-flex flex-column justify-content-center gap-3"
              style={{
                height: "300px",
              }}
              key={key}
            >
              <div className="text-center font-sen fw-medium">
                {item.description}
              </div>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button
                  className={`mt-3 btn1 btn-outline-dark font-sen`}
                  type="button"
                  onClick={() => handleClick(item.kode_disease, item.kode)}
                  disabled={clicked[item.kode]}
                >
                  Ya
                </button>
                <button
                  className=" mt-3 btn1 btn-outline-dark font-sen"
                  type="button"
                  disabled={clicked[item.kode]}
                  onClick={() => {
                    setClicked((prevClicked) => ({
                      ...prevClicked,
                      [item.kode]: true,
                    }));
                  }}
                >
                  Tidak
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-100 d-flex justify-content-center mt-4 mb-4">
          {/* <Link style={{ width: "50%" }} to={`/output/${kode_disease}`}> */}
          {getQuestionsCount() < 20 ? (
            <button
              type="button"
              className="btn"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{
                width: "50%",
              }}
            >
              Submit
            </button>
          ) : (
            <button
              className="btn"
              style={{
                width: "50%",
              }}
              onClick={submitQuestions}
            >
              Submit
            </button>
          )}
          {/* </Link> */}
        </div>
      </section>

      <Footer />

      <div
        class="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="staticBackdropLabel">
                Warning!
              </h1>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>
              Harap mengisi semua pertanyaan untuk melanjutkan pengajuan
              </p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Oke
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
