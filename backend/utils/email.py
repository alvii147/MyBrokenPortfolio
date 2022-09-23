from django.conf import settings

import sendgrid
from sendgrid.helpers.mail import Mail, Email, To


def send_email(subject, body, receivers=[settings.EMAIL_RECEIVER_ADDRESS]):
    if False and settings.DJANGO_ENV_MODE == 'DEV':
        # print email contents to console if development environment
        print_email(subject, body, receivers)
    else:
        sg = sendgrid.SendGridAPIClient(api_key=settings.SENDGRID_API_KEY)
        mail = Mail(
            from_email=Email(settings.EMAIL_SENDER_ADDRESS),
            to_emails=To(*receivers),
            subject=subject,
            html_content=body,
        )

        attempts = 0
        maximum_attempts = 3
        while attempts < maximum_attempts:
            attempts += 1
            try:
                response = sg.send(mail)
                break
            except Exception as e:
                print(f'Failed to send email, {maximum_attempts - attempts} attempts remaining')
                print('response.status_code:', response.status_code)
                print('response.body:', response.body)
                print('response.headers:', response.headers)
                print('error.message:', e.message)

def print_email(subject, body, receivers):
    print(f'Subject: {subject}')
    print(f'From: {settings.EMAIL_SENDER_ADDRESS}')
    receivers_str = ', '.join(receivers)
    print(f'To: {receivers_str}')
    print(f'Body: {body}')
