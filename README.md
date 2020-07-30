# Slack Notification Github Action

## Usage

```
- name: Slack notification
  env:
    WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
    USERNAME: Your username         # Optional
    CHANNEL: Your channel           # Optional
    JOB_STATUS: ${{ job.status }}   # Optional
    MESSAGE: 'Your message is here'
    ICON: ${{ secrets.ICON }}
  uses: markkong318/slack-notification-github-action@master
```

If `JOB_STATUS` is set, it will show the message with status bar 

![](example.png)

Or it will show as regular text message
