def shuffle_cars(cards, parts):
    size = len(cards)
    division = size - parts
    mount1 = cards[0:division]
    mount2 = cards[division:size]
    shuffle = []
    index_mount1 = 0
    index_mount2 = 0
    for index in range(size):
        if index % 2 == 0:
            shuffle.append(mount1[index_mount1])
            index_mount1 += 1
        else:
            shuffle.append(mount2[index_mount2])
            index_mount2 += 1
    return shuffle


def test_shuffle_cards():
    assert shuffle_cars([2, 6, 4, 5], 2) == [2, 4, 6, 5]
    assert shuffle_cars([1, 4, 4, 7, 6, 6], 3) == [1, 7, 4, 6, 4, 6]

# COMPLEXIDADE O(N)
