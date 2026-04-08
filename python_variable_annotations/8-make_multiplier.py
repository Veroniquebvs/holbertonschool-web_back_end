#!/usr/bin/env python3
from typing import Callable

""" type-annotated function that takes a float as
argument and returns a function"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ return a function"""
    def multiplicate(n: float) -> float:
        """ return result of a multiplication"""
        return n * multiplier
    return multiplicate
