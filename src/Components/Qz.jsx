import React, { useEffect, useState } from "react";

const Qz = ({ data, setTimeOut, Qnumber, setQnumber }) => {
    const [question, setQustion] = useState(null);
    const [selectAns, setSelectAns] = useState(null);
    const [className, setClassName] = useState(
        "ans col-md-6 p-2 border border-light rounded-pill fs-5 m-2 correct"
    );

    useEffect(() => {
        setQustion(data[Qnumber - 1]);
    }, [data, Qnumber]);

    // useEffect(() => {
    //     setQuestion(data[questionNumber - 1]);
    // }, [data, questionNumber]);

    const handleClick = (a) => {
        setSelectAns(a);
        setClassName(
            "ans active col-md-6 p-2 border border-light rounded-pill fs-5 m-2 "
        );
    };
    return (
        <>
            <div className="Qz h-100 d-flex flex-column align-items-center justify-content-around">
                <div className="Q w-75 text-light text-center p-3 border border-1 border-light rounded fs-5 ">
                    {question.answers === null ? "NO Q" : "yew Q"}
                    {console.log("This is Q : ", question)}
                    {question
                        ? question.answers.map((a) => {
                              console.log(a);
                              <h1>{a.text}</h1>;
                              // <div
                              //     className={
                              //         selectAns === a
                              //             ? className
                              //             : "ans col-md-6 p-2 border border-light rounded-pill fs-5 m-2"
                              //     }
                              //     onClick={() => handleClick(a)}
                              // >
                              //     {a.text}
                              // </div>;

                              // <div>{a}</div>;
                          })
                        : "nothing"}
                </div>
                <div className="ansrs row w-75  text-center justify-content-around ">
                    {/* {question?.answers.map((a) => {
                        console.log(a);

                        <div
                            className={
                                selectAns === a
                                    ? className
                                    : "ans col-md-6 p-2 border border-light rounded-pill fs-5 m-2"
                            }
                            onClick={() => handleClick(a)}
                        >
                            {a.text}
                        </div>;

                        // <div>{a}</div>;
                    })} */}
                </div>
            </div>
        </>
    );
};

export default Qz;
