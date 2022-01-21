def minSum(arr): 
    x = sum(arr);
    minValue = x - max(arr);
    maxValue = x - min(arr);

    print(minValue, maxValue)

minSum([396285104, 573261094, 759641832, 819230764, 364801279])
minSum([1, 2, 3, 4, 5])
