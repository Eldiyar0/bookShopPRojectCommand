import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Admin.css";

const AdminPage = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [timeout, setTimeout] = useState(true);
  const [buttonCilik, setButtonCilik] = useState(0);
  const navigate = useNavigate();



  const handlePasswordChange1 = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange2 = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (email === "Sultan" && password === "2003") {
      navigate("/adminMain");
    } else {
      if (buttonCilik <= 3) {
        setButtonCilik((q) => q + 1);
      } else {
        setTimeout(false);
        taimerProduct();
      }
    }
  };

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const [timer, setTimer] = useState(15);

  function taimerProduct() {
    setInterval(() => {
      setTimer((prevTimer) =>
        prevTimer <= 0 ? setTimeout(true) : prevTimer - 1
      );
    }, 1000);
  }

  return (
    <div className="admin-page">
      <form>
        <div className="admin-block-main">
          {timeout === true ? (
            <>
              <input
                type={showPassword ? "text" : "text"}
                placeholder="Имя..."
                onChange={handlePasswordChange1}
                value={email}
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Введите пароль..."
                onChange={handlePasswordChange2}
                value={password}
              />
            </>
          ) : (
            <>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  marginBottom: "1pc",
                  alignItems: "center",
                  textAlign: "left",
                }}
              >
                <input
                  style={{
                    border: "1px solid red",
                    "::placeholder": { color: "red" },
                  }}
                  type={showPassword ? "text" : "text"}
                  placeholder="Имя..."
                  onChange={handlePasswordChange1}
                  value={timeout ? email : ""}
                />
                <h4
                  style={{
                    color: "red",
                    marginTop: "-0.3pc",
                    marginLeft: "-7.5pc",
                    marginBottom: "1pc",
                    fontSize: "12px",
                  }}
                >
                  Неверный имя
                </h4>

                <input
                  style={{
                    border: "1px solid red",
                    "::placeholder": { color: "red" },
                  }}
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль..."
                  onChange={handlePasswordChange2}
                  value={timeout ? password : ""}
                />

                <h4
                  style={{
                    color: "red",
                    marginTop: "-0.3pc",
                    marginLeft: "-6.5pc",
                    fontSize: "12px",
                  }}
                >
                  Неверный пароль
                </h4>
                <div>
                  {timer <= 0 ? <p></p> : <p>{`Попробуйте через: ${timer}`}</p>}
                </div>
              </div>
            </>
          )}

          <button type="button" onClick={togglePassword}>
            {showPassword ? "Скрыть пароль" : "Показать пароль"}
          </button>
          <button onClick={handleSubmit} type="submit">
            Войти
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdminPage;
