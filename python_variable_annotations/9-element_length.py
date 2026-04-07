#!/usr/bin/env python3
from typing import Iterable
from typing import Sequence
from typing import List
from typing import Tuple

""" Return a list of tuples containing each element and its length."""


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    return [(i, len(i)) for i in lst]
