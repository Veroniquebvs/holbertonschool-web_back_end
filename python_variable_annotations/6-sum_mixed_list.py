#!/usr/bin/env python3
from typing import Union

""" type-annotated function which takes a list of integers
and floats and returns their sum as a float"""


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    return sum(mxd_lst)
