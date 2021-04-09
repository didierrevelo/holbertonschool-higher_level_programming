#!/usr/bin/python3
"""
6-peak.py
"""


def find_peak(list_of_integers):
    """
    finds a peak in a list of unsorted integers.
    """
    li = list_of_integers
    if li:
        li.sort()
        return li[-1]
