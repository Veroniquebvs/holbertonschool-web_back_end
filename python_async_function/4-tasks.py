#!/usr/bin/env python3
""" task """

import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """ return a list of all the delays"""
    tasks = [task_wait_random(max_delay) for i in range(n)]
    new_list = []
    for results in asyncio.as_completed(tasks):
        final_results = await results
        new_list.append(final_results)
    return new_list
