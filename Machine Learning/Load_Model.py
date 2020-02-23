import tensorflow
import numpy
import os
from tensorflow.keras.models import load_model
import ast
import sys 

string = sys.argv[1]
string_data = ast.literal_eval(string)
array_data = []
for key,value in string_data.items():
    array_data.append(value)
print(array_data)

INPUT_DIMENSION = 23
MAX_VALUE = [1000000, 2, 6, 3, 79, 8, 8, 8, 8, 8, 8, 964511, 983931, 1664089,
             891586, 927171, 961664, 873552, 1684259, 896040, 621000, 426529, 528666]
MIN_VALUE = [10000, 1, 0, 0, 21, -2, -2, -2, -2, -2, -2, -165580, -
             69777, -157264, -170000, -81334, -339603, 0, 0, 0, 0, 0, 0]

# An empty dimension
x_in = numpy.empty((1, INPUT_DIMENSION), dtype=numpy.float)

feature = 0
while feature < INPUT_DIMENSION:
    x_in[0, feature] = float(array_data[feature])
    x_in[0, feature] = (
        x_in[0, feature] - MIN_VALUE[feature]) / (MAX_VALUE[feature]-MIN_VALUE[feature])
    feature += 1


model = load_model("/Users/robert.bonagura/Desktop/hackHers2020/fiserv_model.h5")
print(model.summary())
print("DEFAULT:", model.predict(
    [x_in[:, 0:5], x_in[:, 5:11], x_in[:, 11:17], x_in[:, 17:23]]))
