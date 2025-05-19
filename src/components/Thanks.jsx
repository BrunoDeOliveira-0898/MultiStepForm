import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";

import "./Thanks.css";

const emojiData = {
  unsatisfied: <BsFillEmojiAngryFill />,
  neutral: <BsFillEmojiNeutralFill />,
  good: <BsFillEmojiSmileFill />,
  amazing: <BsFillEmojiHeartEyesFill />,
};

const Thanks = ({ data }) => {
  return (
    <div className="thanks-container">
      <h2>Falta só mais um pouquinho...</h2>
      <p>Sua opinião é importante para nós. Em breve, seu cupom de 10%...</p>
      <p>Apenas envie</p>
      <h3>O resumo de sua avaliação, {data.name}:</h3>
      <p className="review-data">
        <span>Satisfação com o produto: </span>
        {emojiData[data.review]}
      </p>
      <p className="review-data">
        <span>Seu comentário sobre o produto e expriência conosco: </span>
        {data.comment}
      </p>
    </div>
  );
};

export default Thanks;
