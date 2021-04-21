#!/usr/bin/python3
import urllib.request
"""
0-hbtn_status.py
"""
with urllib.request.urlopen('https://intranet.hbtn.io/status') as response:
    html = response.read()
    print("Body response:")
    print("\t- type: {}".format(type(html)))
    print("\t- content: {}".format(html))
    html2 = html.decode('utf-8')
    print("\t- utf8 content: {}".format(html2))
