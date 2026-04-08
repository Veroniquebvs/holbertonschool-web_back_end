#!/usr/bin/env python3
"""  type-annotated function that takes a string and
an int OR float as arguments and returns a tuple"""

from typing import Union
from typing import Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """ return a tuple"""
    return (k, v*v)
