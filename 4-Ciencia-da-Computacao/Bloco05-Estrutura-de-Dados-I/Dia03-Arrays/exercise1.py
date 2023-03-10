def check_instabilities(array: list) -> int:
    OK = 1
    CONT = 0
    MAX_CONT = 0
    for index in range(len(array)):
        if array[index] == OK:
            for value in array[index:]:
                if value == OK:
                    CONT += 1
                else:
                    index = array.index(value)
                    break
        if CONT > MAX_CONT:
            MAX_CONT = CONT
        CONT = 0
    return MAX_CONT


def test_check_instabilities():
    assert check_instabilities([0, 1, 1, 1, 0, 0, 1, 1]) == 3
    assert check_instabilities([1, 1, 1, 1, 0, 0, 1, 1]) == 4

# COMPLEXIDADE 0(N²)
