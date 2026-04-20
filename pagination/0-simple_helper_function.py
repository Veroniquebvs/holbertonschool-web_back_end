#!/usr/bin/env python3
""" Simple helper function """

def index_range(page: int, page_size: int) -> tuple[int, int]:
    """ Return a tuple of two integers representing the start and end index of the page """
    assert type(page) == int, "page must be an integer greater than 0"
    assert type(page_size) == int, "page_size must be an integer greater than 0"

    assert page > 0, "The page number must be greater than 0"
    assert page_size > 0, "The page size must be greater than 0"

    start = (page - 1) * page_size
    end = start + page_size
    return (start, end)
