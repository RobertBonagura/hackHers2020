import tensorflow
from tensorflow.keras.layers import Dense, Dropout, Input, Concatenate
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.callbacks import EarlyStopping
from tensorflow.keras.models import Model, load_model
from sklearn.cluster import DBSCAN
import numpy

IN_DIMENSION = 23
OUT_DIMENTION = 1
INPUTS = 30000

MAX_VALUE = [1000000, 2, 6, 3, 79, 8, 8, 8, 8, 8, 8, 964511, 983931, 1664089,
             891586, 927171, 961664, 873552, 1684259, 896040, 621000, 426529, 528666]
MIN_VALUE = [10000, 1, 0, 0, 21, -2, -2, -2, -2, -2, -2, -165580, -
             69777, -157264, -170000, -81334, -339603, 0, 0, 0, 0, 0, 0]


def Vectorize():
    print("Vectorization Start")
    X_IN = numpy.empty((INPUTS, IN_DIMENSION), dtype=numpy.float)
    RawData = open("X_IN.csv", 'r')
    row = 0
    for lines in RawData:
        column = 0
        datas = lines.split(",")
        # print(datas)
        for data in datas:
            X_IN[row, column] = float(data)
            column += 1
        row += 1

    Y_OUT = numpy.empty((INPUTS), dtype=numpy.float)
    RawData = open("Y_OUT.csv", 'r')
    row = 0
    for data in RawData:
        Y_OUT[row] = int(data)
        row += 1
    print("Vectorization End")
    return X_IN, Y_OUT


# Normalize the data
def Normalize(X_IN):
    print("Normalization Start")
    feature = 0
    while feature < IN_DIMENSION:
        row = 0
        while row < INPUTS:
            X_IN[row, feature] = (
                X_IN[row, feature] - MIN_VALUE[feature]) / (MAX_VALUE[feature]-MIN_VALUE[feature])
            row += 1
        feature += 1
    print("Normalization End")


# Detect any noise using density based clustering
def ClusteringData(X_IN, e=0.3):
    print("Clustering Start")

    # eps = distance
    clustering_PAY = DBSCAN(e, min_samples=1).fit(X_IN[:, 5:11])

    clustering_BILL = DBSCAN(e, min_samples=1).fit(X_IN[:, 11:17])

    clustering_PAYAMT = DBSCAN(e, min_samples=1).fit(X_IN[:, 17:23])

    PAY_LABEL_VARIATY = {}

    BILL_LABEL_VARIATY = {}

    PAYAMT_LABEL_VARIATY = {}

    for index in range(len(clustering_PAY.labels_)):
        label = clustering_PAY.labels_[index]
        if label in PAY_LABEL_VARIATY:
            PAY_LABEL_VARIATY[label].append(index)
        else:
            PAY_LABEL_VARIATY[label] = [index]

    for index in range(len(clustering_BILL.labels_)):
        label = clustering_BILL.labels_[index]
        if label in BILL_LABEL_VARIATY:
            BILL_LABEL_VARIATY[label].append(index)
        else:
            BILL_LABEL_VARIATY[label] = [index]

    for index in range(len(clustering_PAYAMT.labels_)):
        label = clustering_PAYAMT.labels_[index]
        if label in PAYAMT_LABEL_VARIATY:
            PAYAMT_LABEL_VARIATY[label].append(index)
        else:
            PAYAMT_LABEL_VARIATY[label] = [index]

    # Find out the groups
    for key in PAY_LABEL_VARIATY:
        print(key, len(PAY_LABEL_VARIATY[key]))
        if key > 0:
            print(PAY_LABEL_VARIATY[key])

    for key in BILL_LABEL_VARIATY:
        print(key, len(BILL_LABEL_VARIATY[key]))
        if key > 0:
            print(BILL_LABEL_VARIATY[key])

    for key in PAYAMT_LABEL_VARIATY:
        print(key, len(PAYAMT_LABEL_VARIATY[key]))
        if key > 0:
            print(PAYAMT_LABEL_VARIATY[key])

    print("Clustering End")


def BUILD_ANN():
    Group_OTHER_INFORMATION_Input = Input(shape=(5))
    Group_PAY_Input = Input(shape=(6))
    Group_BILL_Input = Input(shape=(6))
    Group_PAYAMT_Input = Input(shape=(6))

    Group_PAY_Layer = Dense(2, activation="relu",
                            use_bias=True)(Group_PAY_Input)
    Group_BILL_Layer = Dense(2, activation="relu",
                             use_bias=True)(Group_BILL_Input)
    Group_PAYAMT_Layer = Dense(
        2, activation="relu", use_bias=True)(Group_PAYAMT_Input)

    Concat_Layer = Concatenate()(
        [Group_OTHER_INFORMATION_Input, Group_PAY_Layer, Group_BILL_Layer, Group_PAYAMT_Layer])
    Hidden_Layer = Dense(6, activation="relu", use_bias=True)(Concat_Layer)
    Final_Layer = Dense(1, activation="sigmoid", use_bias=True)(Hidden_Layer)

    return Model(inputs=[Group_OTHER_INFORMATION_Input, Group_PAY_Input, Group_BILL_Input, Group_PAYAMT_Input],
                 outputs=[Final_Layer])


X_IN, Y_OUT = Vectorize()

Normalize(X_IN)
ClusteringData(X_IN)


model = BUILD_ANN()
print(model.summary())

model.compile(loss='binary_crossentropy',
              optimizer=Adam(lr=0.001), metrics=['accuracy'])

earlyStopping = EarlyStopping(
    monitor='val_loss', patience=1, verbose=0, mode='auto')

model.fit(x=[X_IN[:, 0:5], X_IN[:, 5:11], X_IN[:, 11:17], X_IN[:, 17:23]], y=Y_OUT, batch_size=64, epochs=100,
          callbacks=[earlyStopping], validation_split=0.05)

model.save('fiserv_model.h5')
