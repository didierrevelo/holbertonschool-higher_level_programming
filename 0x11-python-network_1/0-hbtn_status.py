#!/usr/bin/python3
from urllib import request
"""
0-hbtn_status.py
"""
with request.urlopen('https://intranet.hbtn.io/status') as response:
    html = response.read()
    print("Body respose:")
    print("\t- type: {}".format(type(html)))
    print("\t- content: {}".format(html))
    html = html.decode('utf-8')
    print("\t- utf8 content: {}".format(html))
