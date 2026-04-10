#!/usr/bin/env python3

""" async generator """

import random
import asyncio
from typing import AsyncGenerator


async def async_generator() -> AsyncGenerator[float, None]:
    """ yield a random number """
    for i in range(10):
        await asyncio.sleep(1)
        delay = random.uniform(0, 10)
        yield delay
