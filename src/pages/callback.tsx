import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CallbackPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      axios
        .post(
          "https://github.com/login/oauth/access_token",
          {
            client_id: import.meta.env.VITE_GITHUB_CLIENT_ID,
            client_secret: import.meta.env.VITE_GITHUB_CLIENT_SECRET,
            code,
          },
          {
            headers: { Accept: "application/json" },
          }
        )
        .then((response) => {
          const token = response.data.access_token;
          localStorage.setItem("github_token", token);
          navigate("/repos");
        });
    }
  }, [navigate]);

  return <div>Loading...</div>;
}
