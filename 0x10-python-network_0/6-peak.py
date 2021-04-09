#!/usr/bin/python3
"""
6-peak.py
"""


def find_peak(list_of_integers):
    """
    finds a peak in a list of unsorted integers.
    """
    list_1 = 0
    list_2 = len(list_of_integers) - 1
    li = list_of_integers
    if li is None:
        return None
    if len(li) == 1:
        return li[0]
    
    while  list_1 < list_2:
        middle_nums = (list_2 + list_1) // 2
        if li[middle_nums] > li[middle_nums + 1] and li[middle_nums] > li[middle_nums + 1]:
            return li[middle_nums]
        if li[middle_nums] < li[middle_nums + 1] and li[middle_nums] > li[middle_nums - 1]:
            return li[middle_nums + 1]
        return max(li)
