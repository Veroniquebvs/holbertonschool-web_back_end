#!/usr/bin/env python3
""" Simple helper function """

from typing import Tuple

def index_range(page: int, page_size: int) -> tuple[int, int]:
    """ Return a tuple of two integers representing the start and end index of the page """

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
