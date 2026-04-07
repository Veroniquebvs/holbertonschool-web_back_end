#!/usr/bin/env python3
from typing import Union
from typing import Tuple

"""  type-annotated function that takes a string and
an int OR float as arguments and returns a tuple"""


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    return (k, v*v)
