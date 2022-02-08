import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Q from "./Components/Qz";
function App() {
    const [Qnumber, setQnumber] = useState(1);
    const [timeOut, setTimeOut] = useState(false);

    const data = [
        {
            id: 1,
            question:
                "Rolex is a company that specializes in what type of product?",
            answers: [
                {
                    text: "Phone",
                    correct: false,
                },
                {
                    text: "Watches",
                    correct: true,
                },
                {
                    text: "Food",
                    correct: false,
                },
                {
                    text: "Cosmetic",
                    correct: false,
                },
            ],
        },
        {
            id: 2,
            question: "When did the website `Facebook` launch?",
            answers: [
                {
                    text: "2004",
                    correct: true,
                },
                {
                    text: "2005",
                    correct: false,
                },
                {
                    text: "2006",
                    correct: false,
                },
                {
                    text: "2007",
                    correct: false,
                },
            ],
        },
        {
            id: 3,
            question: "Who played the character of harry potter in movie?",
            answers: [
                {
                    text: "Johnny Deep",
                    correct: false,
                },
                {
                    text: "Leonardo Di Caprio",
                    correct: false,
                },
                {
                    text: "Denzel Washington",
                    correct: false,
                },
                {
                    text: "Daniel Red Cliff",
                    correct: true,
                },
            ],
        },
    ];

    const moneyPyramid = [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 400" },
        { id: 5, amount: "$ 500" },
        { id: 6, amount: "$ 1000" },
        { id: 7, amount: "$ 2000" },
        { id: 8, amount: "$ 4000" },
        { id: 9, amount: "$ 8000" },
        { id: 10, amount: "$ 16000" },
        { id: 11, amount: "$ 32000" },
        { id: 12, amount: "$ 64000" },
        { id: 13, amount: "$ 125000" },
        { id: 14, amount: "$ 250000" },
        { id: 15, amount: "$ 1000000" },
    ].reverse();

    return (
        <>
            <div className="app container-fluid d-flex vh-100 text-light p-0">
                <div className="main d-flex flex-column w-75 vh-100">
                    <div className="top h-50 ">
                        <div className="timer">30</div>
                    </div>
                    <div className="bottom h-50">
                        <Q
                            data={data}
                            setTimeOut={setTimeOut}
                            Qnumber={Qnumber}
                            setQnumber={setQnumber}
                        />
                    </div>
                </div>
                <div className="pyramid w-25 d-flex align-items-center justify-content-center">
                    <ul className="moneyList list-unstyled w-100 p-4">
                        {moneyPyramid.map((m) => {
                            return (
                                <>
                                    <li
                                        className={
                                            Qnumber === m.id
                                                ? "moneyListItem active"
                                                : "moneyListItem"
                                        }
                                    >
                                        <span className="moneyListItemNumber">
                                            {m.id}
                                        </span>
                                        <span className="fs-5 fw-light">
                                            {m.amount}
                                        </span>
                                    </li>
                                </>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
