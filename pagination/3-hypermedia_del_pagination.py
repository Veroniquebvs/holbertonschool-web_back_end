#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
from typing import List


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> dict:
        assert isinstance(index, int), "index must be an int >= 0"
        assert isinstance(page_size, int), "page_size must be an int > 0"
        assert index < len(self.indexed_dataset())

        assert index >= 0, "The page number must be equal or greater than 0"
        assert page_size > 0, "The page size must be greater than 0"

        my_data_set = self.indexed_dataset()

        new_data_set = []
        current_index = index

        while (len(new_data_set) < page_size and
               current_index < len(self.dataset())):
            item = my_data_set.get(current_index)
            if item is not None:
                new_data_set.append(item)
            current_index += 1

        result = {
            "index": index,
            "next_index": current_index,
            "page_size": len(new_data_set),
            "data": new_data_set,
        }

        return result
