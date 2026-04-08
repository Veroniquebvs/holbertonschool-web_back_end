#!/usr/bin/env python3
""" Return a list of tuples containing each element and its length."""

from typing import Iterable
from typing import Sequence
from typing import List
from typing import Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ return a list of tuple"""
    return [(i, len(i)) for i in lst]
