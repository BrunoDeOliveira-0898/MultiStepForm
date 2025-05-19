import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiAngryFill,
} from "react-icons/bs";

import "./ReviewForm.css";

const ReviewForm = ({ data, updateFieldHandler }) => {
  return (
    <div className="review-form">
      <div className="form-control score-container">
        <label className="radio-container">
          <input
            type="radio"
            value="unsatisfied"
            name="review"
            required
            checked={data.review === "unsatisfied"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiAngryFill />
          <p>Insatisfeito</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="neutral"
            name="review"
            required
            checked={data.review === "neutral"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiNeutralFill />
          <p>OK</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="good"
            name="review"
            required
            checked={data.review === "good"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiSmileFill />
          <p>Bom</p>
        </label>
        <label className="radio-container">
          <input
            type="radio"
            value="amazing"
            name="review"
            required
            checked={data.review === "amazing"}
            onChange={(e) => updateFieldHandler("review", e.target.value)}
          />
          <BsFillEmojiHeartEyesFill />
          <p>Ótimo</p>
        </label>
      </div>
      <div className="form-control">
        <label htmlFor="comment">Comentário:</label>
        <textarea
          name="comment"
          id="comment"
          placeholder="Dê seu feedback sobre sua experiência conosco e seu produto..."
          required
          value={data.comment || ""}
          onChange={(e) => updateFieldHandler("comment", e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default ReviewForm;
