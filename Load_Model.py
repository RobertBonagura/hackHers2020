import tensorflow
from tensorflow.keras.models import load_model

print("Script start")
model = load_model("fiserv_model.h5")
print("Script end")