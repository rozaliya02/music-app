const apiKey = "AIzaSyDf7ccpuoON58uRynTjaao9ZNv6Fb46GgU";

export const register = (email, password) => {
  let response = fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  ).then(res => res.json());
  return response;
};
