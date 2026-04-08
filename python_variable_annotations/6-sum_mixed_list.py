#!/usr/bin/env python3
from typing import Union
from typing import List

""" type-annotated function which takes a list of integers
and floats and returns their sum as a float"""


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """ return the sum of the list"""
    return sum(mxd_lst)
