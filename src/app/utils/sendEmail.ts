
export async function sendEmail(data:any,setResponceMessage:any) {
  const apiEndpoint = '/api/email';
  fetch(apiEndpoint, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {

setResponceMessage(response.message)
})
.catch((err) => {

      setResponceMessage(err)
    });

}