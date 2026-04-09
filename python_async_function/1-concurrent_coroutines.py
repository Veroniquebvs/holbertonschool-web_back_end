#!/usr/bin/env python3
""" execute multiple coroutines at the same time with async """

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """ return a list of all the delays"""
    new_list = [wait_random(max_delay) for i in range(n)]
    delays = []
    for results in asyncio.as_completed(new_list):
        final_results = await results
        delays.append(final_results)
    return delays
