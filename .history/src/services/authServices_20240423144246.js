const apiKey = "AIzaSyDf7ccpuoON58uRynTjaao9ZNv6Fb46GgU";

const register = async (email, password) => {
  let response = await fetch(
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
  );
};
