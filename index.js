const superagent = require('superagent');

const endpoint = process.env.WEBHOOK_URL;
const jobStatus = process.env.JOB_STATUS;
const channel = process.env.CHANNEL || '#general';
const username = process.env.USERNAME || 'github';
const icon = process.env.ICON || ':ghost:';
const message = process.env.MESSAGE;

let payload = {
  channel,
  username,
  text: message,
  icon_url: icon,
};

if (jobStatus) {
  let color;

  switch (jobStatus) {
    case "success":
      color = "good";
      break;
    case "failure":
      color = "danger";
      break;
    case "cancelled":
      color = "warning";
      break;
  }

  payload = {
    ...payload,
    text: '',
    attachments: [{
      color,
      text: message,
    }],
  }
}

superagent.post(endpoint).send(payload).then(() => {
  console.log(payload);
})
