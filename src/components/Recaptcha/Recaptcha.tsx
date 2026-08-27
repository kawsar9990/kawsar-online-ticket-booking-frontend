import ReCAPTCHA from "react-google-recaptcha";
import "./recaptcha.css";

interface RecaptchaProps{
    onChange: (token: string | null) => void;
}

const Recaptcha = ({ onChange }: RecaptchaProps) => {
const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

return(
<div className="recaptcha-wrapper">
      <ReCAPTCHA
        sitekey={siteKey}
        onChange={onChange}
      />
    </div>
)
}

export default Recaptcha;