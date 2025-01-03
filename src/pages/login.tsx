const GITHUB_AUTH_URL = `https://github.com/login/oauth/authorize?client_id=${
  import.meta.env.VITE_GITHUB_CLIENT_ID
}&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;

export default function Login() {
  return (
    <a href={GITHUB_AUTH_URL}>
      <button>Login with GitHub</button>
    </a>
  );
}
