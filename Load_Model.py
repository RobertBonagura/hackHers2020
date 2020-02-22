import tensorflow
import numpy
from tensorflow.keras.models import load_model

print("script start")
INPUT_DIMENSION = 23
x_in = numpy.empty((1,INPUT_DIMENSION))
model = load_model("/Users/tanviwagle/desktop/hackHers2020/fiserv_model.h5")
print(model.predict(x_in))
print("script end")