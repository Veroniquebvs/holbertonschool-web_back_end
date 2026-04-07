#!/usr/bin/env python3
from typing import Callable

""" type-annotated function that takes a float as
argument and returns a function"""


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    def multiplicate(n: float) -> float:
        return n * multiplier
    return multiplicate
