from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    'alvii147.pythonanywhere.com',
]

CORS_ORIGIN_WHITELIST = [
    'https://zahin-zaman.vercel.app',
]

STATIC_ROOT = '/home/alvii147/MyBrokenPortfolio/backend/static'