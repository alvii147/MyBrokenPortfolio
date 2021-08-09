from .base import *

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = False

ALLOWED_HOSTS = [
    'alvii147.pythonanywhere.com',
]

CORS_ALLOWED_ORIGINS = [
    'https://zahin-zaman.vercel.app',
    'https://zahin-zaman-git-master-alvii147.vercel.app',
]

CORS_ALLOWED_ORIGIN_REGEXES = [
    r'^https://zahin-zaman-([A-Za-z0-9])+-alvii147\.vercel\.app$',
]