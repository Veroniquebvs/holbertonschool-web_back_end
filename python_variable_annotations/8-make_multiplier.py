#!/usr/bin/env python3
""" type-annotated function that takes a float as
argument and returns a function"""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ return a function"""
    def multiplicate(n: float) -> float:
        """ return result of a multiplication"""
        return n * multiplier
    return multiplicate
