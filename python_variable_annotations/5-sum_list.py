#!/usr/bin/env python3
from typing import List

""" type-annotated function which takes a list of floats as
argument and returns their sum as a float"""


def sum_list(input_list: List[float]) -> float:
    """ return the sum of a list"""
    return sum(input_list)
