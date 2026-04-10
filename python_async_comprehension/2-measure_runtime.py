#!/usr/bin/env python3
""" Run time for four parallel comprehensions """

import time
import asyncio
async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """ return total runtime"""
    start = time.time()
    tasks = [async_comprehension() for i in range(4)]
    results = await asyncio.gather(*tasks)
    end = time.time()
    result = (end - start)
    return result
