//Componentes
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { FiSend } from "react-icons/fi";
import UserForm from "./components/UserForm.jsx";
import ReviewForm from "./components/ReviewForm.jsx";
import Thanks from "./components/Thanks.jsx";
import Steps from "./components/Steps.jsx";
import "./App.css";

//hooks
import useForm from "./hooks/UseForm.jsx";
import { useState } from "react";

const formTemplate = {
  name: "",
  email: "",
  review: "",
  comment: "",
};

function App() {
  const [data, setData] = useState(formTemplate);

  const updateFieldHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <UserForm data={data} updateFieldHandler={updateFieldHandler} />,
    <ReviewForm data={data} updateFieldHandler={updateFieldHandler} />,
    <Thanks data={data} />,
  ];
  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);
  return (
    <div className="App">
      <div className="header">
        <h2>Deixe sua opinião</h2>
        <p>Obrigado pela confiança. Avalie seu produto abaixo</p>
      </div>
      <div className="form-container">
        <Steps currentStep={currentStep} />
        <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
          <div className="inputs-container">{currentComponent}</div>
          <div className="actions">
            {!isFirstStep ? (
              <button type="button" onClick={() => changeStep(currentStep - 1)}>
                <GrFormPrevious />
                <span>Voltar</span>
              </button>
            ) : null}
            {!isLastStep ? (
              <button type="submit">
                <GrFormNext />
                <span>Próximo</span>
              </button>
            ) : (
              <button type="button">
                <FiSend />
                <span>Enviar</span>
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
