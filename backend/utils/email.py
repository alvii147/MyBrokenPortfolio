from django.conf import settings

import smtplib
from email.mime.text import MIMEText

# gmail account credentials
sender_email = settings.EMAIL_SENDER_ADDRESS
sender_password = settings.EMAIL_SENDER_PASSWORD
# default list of receivers
default_receivers = [
    settings.EMAIL_RECEIVER_ADDRESS,
]


def send_email(subject, body, receivers=default_receivers):
    if settings.DJANGO_ENV_MODE == 'DEV':
        # print email contents to console if development environment
        print_email(subject, body, receivers)
    else:
        # set up email contents if production environment
        msg = MIMEText(body, 'html')
        msg['Subject'] = subject
        msg['From'] = sender_email
        msg['To'] = ', '.join(receivers)

        # start SMTP server
        server = smtplib.SMTP_SSL(host='smtp.gmail.com', port=465)
        # log into gmail account
        server.login(user=sender_email, password=sender_password)
        server.sendmail(sender_email, default_receivers, msg.as_string())
        # stop SMTP server
        server.quit()


def print_email(subject, body, receivers):
    print(f'Subject: {subject}')
    print(f'From: {sender_email}')
    receivers_str = ', '.join(receivers)
    print(f'To: {receivers_str}')
    print(f'Body: {body}')
