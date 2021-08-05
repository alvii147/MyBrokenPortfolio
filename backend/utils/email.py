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

# send email
def send_email(subject, body, receivers=default_receivers):
    # if development environment
    if settings.DJANGO_ENV_MODE == 'DEV':
        # print email contents to console
        print_email(subject, body, receivers)
    # if production environment
    else:
        # email html body
        msg = MIMEText(body, 'html')
        # email subject
        msg['Subject'] = subject
        # email sender
        msg['From'] = sender_email
        # email receivers
        msg['To'] = ', '.join(receivers)

        # start SMTP server
        server = smtplib.SMTP_SSL(host='smtp.gmail.com', port=465)
        # log into gmail account
        server.login(user=sender_email, password=sender_password)
        # send email
        server.sendmail(sender_email, default_receivers, msg.as_string())
        # stop SMTP server
        server.quit()

# print contents of email to console
def print_email(subject, body, receivers):
    # email subject
    print(f'Subject: {subject}')
    # email sender
    print(f'From: {sender_email}')
    # email receivers
    receivers_str = ', '.join(receivers)
    print(f'To: {receivers_str}')
    # email body
    print(f'Body: {body}')