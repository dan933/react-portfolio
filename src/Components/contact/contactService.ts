const ContactService = {
  async submitContactForm(email: string, message: string) {
    const url = new URL(
      `https://vm9z5d8xt7.execute-api.ap-southeast-2.amazonaws.com/Prod/`
    );

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    })
      .then((res) => res.json())
      .catch((err) => {
        throw err;
      });

    console.log("response", response);
    return response;
  },
};

export default ContactService;
