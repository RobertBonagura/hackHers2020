import tensorflow
import numpy
from tensorflow.keras.models import load_model

INPUT_DIMENSION = 23
MAX_VALUE = [1000000, 2, 6, 3, 79, 8, 8, 8, 8, 8, 8, 964511, 983931, 1664089,
             891586, 927171, 961664, 873552, 1684259, 896040, 621000, 426529, 528666]
MIN_VALUE = [10000, 1, 0, 0, 21, -2, -2, -2, -2, -2, -2, -165580, -
             69777, -157264, -170000, -81334, -339603, 0, 0, 0, 0, 0, 0]


x_in = numpy.empty((1, INPUT_DIMENSION), dtype = numpy.float)


feature = 0
while feature < INPUT_DIMENSION:
    x_in[0, feature] = (
        x_in[0, feature] - MIN_VALUE[feature]) / (MAX_VALUE[feature]-MIN_VALUE[feature])
    feature += 1


model = load_model("fiserv_model.h5")
print(model.predict(x_in))