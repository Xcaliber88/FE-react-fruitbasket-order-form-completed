import React from 'react';
import './App.css';
import {useState} from 'react';
import {useForm} from "react-hook-form";
import logo from "./assets/logo.png";


function App() {

    const {register, handleSubmit, formState: {errors}, watch} = useForm({mode: "onChange"});

    function fileOutput(data) {
        console.log(data);
    }


    const selectedDelivery = watch("multipleChoiceAnswer");
    const [scoreAa, setScoreAa] = useState(0);
    const [scoreB, setScoreB] = useState(0);
    const [scoreK, setScoreK] = useState(0);
    const [scoreA, setScoreA] = useState(0);

    function reset() {
        return setScoreA(0) + setScoreAa(0) + setScoreB(0) + setScoreK(0);
    }

    return (
        <>

            <div className="banner">
                <img src={logo} alt="fruitbezorgings-logo" width="100%"/>
            </div>

            <div className="masterContainer">

                <div className="fruitcontainer">

                    <section className="container">
                        <label> 🍓 Aardbeien </label>
                        <button onClick={() => setScoreAa(scoreAa + 1)}> +</button>
                        {scoreAa}
                        <button onClick={() => setScoreAa(scoreAa - 1)}> -</button>
                    </section>

                    <section className="container">
                        <label>🍌 Bananen </label>
                        <button onClick={() => setScoreB(scoreB + 1)}> +</button>
                        {scoreB}
                        <button onClick={() => setScoreB(scoreB - 1)}> -</button>
                    </section>

                    <section className="container">
                        <label> 🥝 Kiwie's </label>
                        <button onClick={() => setScoreK(scoreK + 1)}> +</button>
                        {scoreK}
                        <button onClick={() => setScoreK(scoreK - 1)}> -</button>
                    </section>

                    <section className="container">
                        < label>🍏 Apppels </label>
                        <button onClick={() => setScoreA(scoreA + 1)}> +</button>
                        {scoreA}
                        <button onClick={() => setScoreA(scoreA - 1)}> -</button>
                    </section>

                    <button className="resetButton" onClick={() => reset()}>Reset</button>

                </div>


                {/*//formulier*/}


                <footer className="form">

                    <form onSubmit={handleSubmit(fileOutput)}>

                        <h3>Gebruikers gegevens</h3>

                        <div>
                            <label className="userInfo" htmlFor="first-name"> Voornaam
                                <input
                                    id="first-name"
                                    name="first-name"
                                    className="fieldInput"
                                    type="text"
                                    placeholder="your first name here...."
                                    {...register("firstname", {
                                        required: {
                                            value: true,
                                            message: "Dit veld moet je invullen",
                                        },
                                    })}
                                />
                            </label>

                            {errors.firstname && <span> {errors.firstname.message}</span>}

                            <label className="userInfo" htmlFor="last-name"> Achternaam
                                <input
                                    id="last-name"
                                    name="last-name"
                                    className="fieldInput"
                                    type="text"
                                    placeholder="your last name here...."
                                    {...register("lastname", {
                                        required: {
                                            value: true,
                                            message: "dit veld mag niet leeg zijn",
                                        },
                                    })}
                                />
                            </label>

                            {errors.lastname && <span>{errors.lastname.message}</span>}

                            <label className="userInfo" htmlFor="age"> leeftijd
                                <input
                                    id="age"
                                    name="age"
                                    className="fieldInput"
                                    type="number"
                                    min={0}
                                    placeholder="your age here...."
                                    {...register("age", {
                                        required: {
                                            value: true,
                                            message: "dit veld moet een cijfer bevatten",
                                        },
                                        min:{
                                            value:0,
                                            message: "ja mag geen min gebruiken",
                                        },
                                    })}
                                />
                            </label>
                            {errors.age && <span>{errors.age.message}</span>}

                            <label className="userInfo" htmlFor="postalCode"> postcode
                                <input
                                    id="postalCode"
                                    name="postalCode"
                                    className="fieldInput"
                                    type="text"
                                    placeholder="your postal code here...."
                                    {...register("postalCode", {
                                        required: {
                                            value: true,
                                            message: "dit valt mag niet leeg zijn",
                                        },
                                        pattern: {
                                            value: /^[1-9][0-9]{3}?(?!sa|sd|ss)[a-z]{2}$/im,
                                            message: "niet geldige postcode",
                                        },
                                    })}
                                />
                            </label>
                            {errors.postalCode && <span>{errors.postalCode.message}</span>}

                        </div>

                        <h3>bezorgfrequentie</h3>

                        <div className="deliveryFrequency">

                            <label htmlFor="eachWeek">
                                <input
                                    type="radio"
                                    id="eachWeek"
                                    name="multipleChoiceAnswer"
                                    value="eachWeek"
                                    {...register("multipleChoiceAnswer", {
                                        required: {
                                            value: true,
                                            message: "select an option"
                                        },
                                    })}
                                />
                                Iedere week
                            </label>

                            <label htmlFor="everyOtherWeek">
                                <input
                                    type="radio"
                                    id="everyOtherWeek"
                                    name="multipleChoiceAnswer"
                                    value="everyOtherWeek"
                                    {...register("multipleChoiceAnswer", {
                                        required: {
                                            value: true,
                                            message: "select an option"
                                        },
                                    })}
                                />
                                Om de week
                            </label>

                            <label htmlFor="eachMonth">
                                <input
                                    type="radio"
                                    id="eachMonth"
                                    name="multipleChoiceAnswer"
                                    value="eachMonth"
                                    {...register("multipleChoiceAnswer", {
                                        required: {
                                            value: true,
                                            message: "select an option"
                                        },
                                    })}
                                />
                                Iedere Maand
                            </label>

                            <label htmlFor="other">
                                <input
                                    type="radio"
                                    id="other"
                                    name="multipleChoiceAnswer"
                                    value="other"
                                    {...register("multipleChoiceAnswer", {
                                        required: {
                                            value: true,
                                            message: "select an option"
                                        },
                                    })}
                                />
                                Anders

                            </label>
                            {selectedDelivery === "other" && (<input
                                    type="text"
                                    {...register("other-delivery-option", {required: true})}
                                />
                            )}

                            {errors.multipleChoiceAnswer && <span> {errors.multipleChoiceAnswer.message}</span>}

                        </div>

                        <label className="textfield" htmlFor="notes"> Opmerkingen: </label>
                        <br/>
                        <textarea placeholder="Instructies voor de bestelling?"
                                  id="notes"
                                  name="comments"
                                  rows="4"
                                  cols="50"
                                  {...register("comments", {
                                      required: {
                                          value: true,
                                          message: "vul wat in"
                                      },
                                  })}
                        >
                                </textarea>

                        {errors.comments && <div><span>{errors.comments.message}</span></div>}
                        <br/>

                        <label className="textfield" htmlFor="checkTerms">
                            <input
                                type="checkbox"
                                id="checkTerms"
                                name="checkTerms"
                                value="yes"
                                {...register("checkTerms", {
                                    required: {
                                        value: true,
                                        message: "check this box"
                                    },
                                })}
                            />
                            Ik ga akkoord met de voorwaarden
                        </label>
                        {errors.checkTerms && <span> {errors.checkTerms.message}</span>}

                        <br/>

                        <button type="submit">submit</button>

                    </form>


                </footer>

            </div>
        </>

    );
};

export default App;
