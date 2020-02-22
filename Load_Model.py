import tensorflow
import numpy
from tensorflow.keras.models import load_model

INPUT_DIMENSION = 23
x_in = numpy.empty((1,INPUT_DIMENSION))
model = load_model("fiserv_model.h5")
print(model.predict(x_in))